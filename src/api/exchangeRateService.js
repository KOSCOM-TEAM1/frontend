import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockExchangeRates } from './mockData';

/**
 * 환율 관련 API 서비스
 */
const exchangeRateService = {
  /**
   * 전체 환율 정보 조회
   * @returns {Promise<Object>} 환율 목록
   */
  getExchangeRates: async () => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 환율 정보 조회');
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return createResponse(true, mockExchangeRates);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.EXCHANGE_RATES);
      
      console.log('✅ 환율 정보 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 환율 정보 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'EXCHANGE_RATES_ERROR',
        message: error.response?.data?.error?.message || '환율 정보를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 특정 통화 환율 조회
   * @param {string} currency - 통화 코드 (USD, JPY, EUR, CNY)
   * @returns {Promise<Object>} 환율 정보
   */
  getExchangeRate: async (currency) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 특정 통화 환율 조회:', currency);
      
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const rate = mockExchangeRates.find(r => r.currency === currency);
      
      if (!rate) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '환율 정보를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, rate);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.EXCHANGE_RATES}/${currency}`);
      
      console.log('✅ 특정 통화 환율 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 특정 통화 환율 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'EXCHANGE_RATE_ERROR',
        message: error.response?.data?.error?.message || '환율 정보를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 환율 변환 계산
   * @param {number} amount - 금액
   * @param {string} fromCurrency - 출발 통화
   * @param {string} toCurrency - 도착 통화
   * @returns {Object} 변환 결과
   */
  convertCurrency: (amount, fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) {
      return {
        originalAmount: amount,
        convertedAmount: amount,
        fromCurrency,
        toCurrency,
        exchangeRate: 1,
      };
    }

    // KRW 기준으로 변환
    let convertedAmount;
    let exchangeRate;

    if (fromCurrency === 'KRW') {
      // KRW → 다른 통화
      const rate = mockExchangeRates.find(r => r.currency === toCurrency);
      if (!rate) return null;
      
      exchangeRate = rate.exchangeRate;
      convertedAmount = amount / exchangeRate;
    } else if (toCurrency === 'KRW') {
      // 다른 통화 → KRW
      const rate = mockExchangeRates.find(r => r.currency === fromCurrency);
      if (!rate) return null;
      
      exchangeRate = rate.exchangeRate;
      convertedAmount = amount * exchangeRate;
    } else {
      // 다른 통화 → 다른 통화 (KRW 경유)
      const fromRate = mockExchangeRates.find(r => r.currency === fromCurrency);
      const toRate = mockExchangeRates.find(r => r.currency === toCurrency);
      
      if (!fromRate || !toRate) return null;
      
      const krwAmount = amount * fromRate.exchangeRate;
      convertedAmount = krwAmount / toRate.exchangeRate;
      exchangeRate = fromRate.exchangeRate / toRate.exchangeRate;
    }

    return {
      originalAmount: amount,
      convertedAmount: Math.round(convertedAmount * 100) / 100,
      fromCurrency,
      toCurrency,
      exchangeRate: Math.round(exchangeRate * 100) / 100,
    };
  },
};

export default exchangeRateService;
