import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockStocks, mockUserStocks } from './mockData';

/**
 * 주식 관련 API 서비스
 */
const stockService = {
  /**
   * 주식 목록 조회
   * @param {Object} params - 쿼리 파라미터
   * @param {number} params.page - 페이지 번호
   * @param {number} params.size - 페이지 크기
   * @param {string} params.sector - 섹터 필터
   * @param {string} params.market - 시장 필터 (KOSPI, KOSDAQ)
   * @returns {Promise<Object>} 주식 목록
   */
  getStockList: async (params = {}) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 주식 목록 조회:', params);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let filteredStocks = [...mockStocks];
      
      // 섹터 필터링
      if (params.sector) {
        filteredStocks = filteredStocks.filter(stock => stock.sector === params.sector);
      }
      
      // 시장 필터링
      if (params.market) {
        filteredStocks = filteredStocks.filter(stock => stock.market === params.market);
      }
      
      return createResponse(true, {
        content: filteredStocks,
        totalElements: filteredStocks.length,
        totalPages: 1,
        currentPage: params.page || 0,
      });
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.STOCKS, { params });
      
      console.log('주식 목록 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error( '주식 목록 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'STOCK_LIST_ERROR',
        message: error.response?.data?.error?.message || '주식 목록을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 주식 상세 정보 조회
   * @param {number} stockId - 주식 ID
   * @returns {Promise<Object>} 주식 상세 정보
   */
  getStockDetail: async (stockId) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 주식 상세 조회:', stockId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const stock = mockStocks.find(s => s.id === stockId);
      
      if (!stock) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '주식 정보를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, stock);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.STOCK_DETAIL(stockId));
      
      console.log('주식 상세 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('주식 상세 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'STOCK_DETAIL_ERROR',
        message: error.response?.data?.error?.message || '주식 상세 정보를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 주식 실시간 시세 조회
   * @param {string} stockCode - 주식 코드
   * @returns {Promise<Object>} 실시간 시세
   */
  getStockPrice: async (stockCode) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 주식 시세 조회:', stockCode);
      
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const stock = mockStocks.find(s => s.code === stockCode);
      
      if (!stock) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '주식 정보를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, {
        code: stock.code,
        name: stock.name,
        currentPrice: stock.currentPrice,
        changeRate: stock.changeRate,
        changeAmount: stock.changeAmount,
        volume: stock.volume,
        updatedAt: new Date().toISOString(),
      });
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.STOCK_PRICE(stockCode));
      
      console.log('주식 시세 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('주식 시세 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'STOCK_PRICE_ERROR',
        message: error.response?.data?.error?.message || '주식 시세를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 사용자 보유 주식 목록 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 보유 주식 목록
   */
  getUserStocks: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 사용자 보유 주식 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const userStocks = mockUserStocks.filter(stock => stock.userId === userId);
      
      // 평가손익 계산
      const stocksWithProfit = userStocks.map(stock => {
        const totalCost = stock.averagePrice * stock.quantity;
        const currentValue = stock.currentPrice * stock.quantity;
        const profit = currentValue - totalCost;
        const profitRate = ((profit / totalCost) * 100).toFixed(2);
        
        return {
          ...stock,
          totalCost,
          currentValue,
          profit,
          profitRate: parseFloat(profitRate),
        };
      });
      
      return createResponse(true, stocksWithProfit);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.USER_STOCKS, {
        headers: { 'id': userId },
      });
      
      console.log('사용자 보유 주식 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('사용자 보유 주식 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'USER_STOCKS_ERROR',
        message: error.response?.data?.error?.message || '보유 주식 목록을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 주식 검색
   * @param {string} keyword - 검색 키워드 (종목명 또는 코드)
   * @returns {Promise<Object>} 검색 결과
   */
  searchStocks: async (keyword) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 주식 검색:', keyword);
      
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const results = mockStocks.filter(stock => 
        stock.name.includes(keyword) || stock.code.includes(keyword)
      );
      
      return createResponse(true, results);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.STOCKS, {
        params: { keyword },
      });
      
      console.log('주식 검색 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('주식 검색 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'STOCK_SEARCH_ERROR',
        message: error.response?.data?.error?.message || '주식 검색에 실패했습니다.',
      });
    }
  },
};

export default stockService;
