import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockNews } from './mockData';

/**
 * 뉴스 관련 API 서비스
 */
const newsService = {
  /**
   * 뉴스 목록 조회
   * @param {Object} params - 쿼리 파라미터
   * @param {number} params.page - 페이지 번호 (기본값: 0)
   * @param {number} params.size - 페이지 크기 (기본값: 10)
   * @param {string} params.sort - 정렬 기준 (예: 'publishedAt,desc')
   * @returns {Promise<Object>} 뉴스 목록 응답
   */
  getNewsList: async (params = {}) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      const { page = 0, size = 10, sort = 'publishedAt,desc' } = params;
      
      console.log('[MOCK] 뉴스 목록 조회:', { page, size, sort });
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return createResponse(true, {
        content: mockNews,
        totalElements: mockNews.length,
        totalPages: 1,
        currentPage: page,
      });
    }

    // 실제 API 호출
    try {
      const { page = 0, size = 10, sort = 'publishedAt,desc' } = params;
      
      console.log('뉴스 목록 조회 시작:', { page, size, sort });
      
      const response = await apiClient.get(API_ENDPOINTS.NEWS, {
        params: {
          page,
          size,
          sort,
        },
      });

      console.log('API 원본 응답:', response.data);

      // 백엔드 응답 구조 확인: response.data = { success, data, error }
      if (response.data.success === false || !response.data.data) {
        console.warn('백엔드가 실패 응답 반환:', response.data);
        return {
          success: false,
          data: null,
          error: response.data.error || { code: 'NO_DATA', message: '뉴스 데이터가 없습니다.' },
        };
      }

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error) {
      console.error('뉴스 목록 조회 실패:', error);

      const errorMessage = error.response?.data?.error?.message 
        || error.message 
        || '뉴스 목록을 불러올 수 없습니다.';

      return {
        success: false,
        error: {
          code: error.response?.data?.error?.code || 'NEWS_LIST_ERROR',
          message: errorMessage,
        },
      };
    }
  },

  /**
   * 특정 뉴스 상세 조회
   * @param {number} newsId - 뉴스 ID
   * @returns {Promise<Object>} 뉴스 상세 정보
   */
  getNewsDetail: async (newsId) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 뉴스 상세 조회:', newsId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const news = mockNews.find(n => n.id === newsId);
      
      if (!news) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '뉴스를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, news);
    }

    // 실제 API 호출
    try {
      console.log('뉴스 상세 조회 시작:', newsId);
      
      const response = await apiClient.get(`${API_ENDPOINTS.NEWS}/${newsId}`);

      console.log('뉴스 상세 조회 성공:', response.data);

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error) {
      console.error('뉴스 상세 조회 실패:', error);

      const errorMessage = error.response?.data?.error?.message 
        || error.message 
        || '뉴스 상세 정보를 불러올 수 없습니다.';

      return {
        success: false,
        error: {
          code: error.response?.data?.error?.code || 'NEWS_DETAIL_ERROR',
          message: errorMessage,
        },
      };
    }
  },

  /**
   * 분석된 뉴스 목록 조회 (isAnalyzed = true)
   * @param {Object} params - 쿼리 파라미터
   * @returns {Promise<Object>} 분석된 뉴스 목록
   */
  getAnalyzedNews: async (params = {}) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      const { page = 0, size = 10, sort = 'publishedAt,desc' } = params;
      
      console.log('[MOCK] 분석된 뉴스 조회');
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      const analyzedNews = mockNews.filter(news => news.isAnalyzed);
      
      return createResponse(true, {
        content: analyzedNews,
        totalElements: analyzedNews.length,
        totalPages: 1,
        currentPage: page,
      });
    }

    // 실제 API 호출
    try {
      const { page = 0, size = 10, sort = 'publishedAt,desc' } = params;
      
      console.log('분석된 뉴스 조회 시작');
      
      const response = await apiClient.get(API_ENDPOINTS.NEWS, {
        params: {
          page,
          size,
          sort,
          isAnalyzed: true, // 분석된 뉴스만 필터링
        },
      });

      console.log('API 원본 응답:', response.data);

      // 백엔드 응답 구조 확인: response.data = { success, data, error }
      if (response.data.success === false || !response.data.data) {
        console.warn('백엔드가 실패 응답 반환:', response.data);
        return {
          success: false,
          data: null,
          error: response.data.error || { code: 'NO_DATA', message: '분석된 뉴스가 없습니다.' },
        };
      }

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error) {
      console.error('분석된 뉴스 조회 실패:', error);

      const errorMessage = error.response?.data?.error?.message 
        || error.message 
        || '분석된 뉴스를 불러올 수 없습니다.';

      return {
        success: false,
        error: {
          code: error.response?.data?.error?.code || 'ANALYZED_NEWS_ERROR',
          message: errorMessage,
        },
      };
    }
  },
};

export default newsService;
