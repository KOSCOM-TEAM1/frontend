import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { 
  mockNewsAnalysis, 
  mockHistoricalPatterns, 
  mockDefenseStrategies 
} from './mockData';

/**
 * AI 분석 관련 API 서비스
 */
const analysisService = {
  /**
   * 어젯밤 뉴스 AI 분석 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} AI 분석 결과 목록
   */
  getOvernightNewsAnalysis: async (userId = 1) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 어젯밤 뉴스 AI 분석 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return createResponse(true, mockNewsAnalysis);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.NEWS_ANALYSIS_OVERNIGHT, {
        params: { userId },
      });
      
      console.log('✅ 어젯밤 뉴스 AI 분석 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 어젯밤 뉴스 AI 분석 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'NEWS_ANALYSIS_ERROR',
        message: error.response?.data?.error?.message || 'AI 분석을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 특정 기간 뉴스 AI 분석 요청
   * @param {Object} analysisRequest - 분석 요청 정보
   * @param {number} analysisRequest.userId - 사용자 ID
   * @param {string} analysisRequest.startTime - 시작 시간 (ISO 8601)
   * @param {string} analysisRequest.endTime - 종료 시간 (ISO 8601)
   * @returns {Promise<Object>} AI 분석 결과
   */
  analyzeNewsByPeriod: async (analysisRequest) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 특정 기간 뉴스 AI 분석 요청:', analysisRequest);
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // AI 분석은 시간이 좀 걸림
      
      return createResponse(true, mockNewsAnalysis);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.NEWS_ANALYSIS_PERIOD, 
        analysisRequest
      );
      
      console.log('✅ 특정 기간 뉴스 AI 분석 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 특정 기간 뉴스 AI 분석 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'NEWS_ANALYSIS_PERIOD_ERROR',
        message: error.response?.data?.error?.message || 'AI 분석 요청에 실패했습니다.',
      });
    }
  },

  /**
   * 뉴스 분석 상세 조회
   * @param {number} analysisId - 분석 ID
   * @returns {Promise<Object>} 분석 상세 정보
   */
  getNewsAnalysisDetail: async (analysisId) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 뉴스 분석 상세 조회:', analysisId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const analysis = mockNewsAnalysis.find(a => a.id === analysisId);
      
      if (!analysis) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '분석 정보를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, analysis);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.NEWS_ANALYSIS_DETAIL(analysisId));
      
      console.log('✅ 뉴스 분석 상세 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 뉴스 분석 상세 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'NEWS_ANALYSIS_DETAIL_ERROR',
        message: error.response?.data?.error?.message || '분석 상세 정보를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 과거 패턴 분석 목록 조회
   * @returns {Promise<Object>} 과거 패턴 분석 목록
   */
  getHistoricalPatterns: async () => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 과거 패턴 분석 목록 조회');
      
      await new Promise(resolve => setTimeout(resolve, 600));
      
      return createResponse(true, mockHistoricalPatterns);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.HISTORICAL_PATTERNS);
      
      console.log('✅ 과거 패턴 분석 목록 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 과거 패턴 분석 목록 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'HISTORICAL_PATTERNS_ERROR',
        message: error.response?.data?.error?.message || '과거 패턴 분석을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 과거 패턴 상세 분석 조회
   * @param {number} patternId - 패턴 ID
   * @returns {Promise<Object>} 패턴 상세 정보
   */
  getHistoricalPatternDetail: async (patternId) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 과거 패턴 상세 분석 조회:', patternId);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      const pattern = mockHistoricalPatterns.find(p => p.id === patternId);
      
      if (!pattern) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '패턴 정보를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, pattern);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.HISTORICAL_PATTERN_DETAIL(patternId)
      );
      
      console.log('✅ 과거 패턴 상세 분석 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 과거 패턴 상세 분석 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'PATTERN_DETAIL_ERROR',
        message: error.response?.data?.error?.message || '패턴 상세 정보를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 방어 전략 목록 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 방어 전략 목록
   */
  getDefenseStrategies: async (userId = 1) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 방어 전략 목록 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return createResponse(true, mockDefenseStrategies);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.DEFENSE_STRATEGIES, {
        headers: { 'id': userId },
      });
      
      console.log('✅ 방어 전략 목록 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 방어 전략 목록 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'DEFENSE_STRATEGIES_ERROR',
        message: error.response?.data?.error?.message || '방어 전략을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 방어 전략 상세 조회
   * @param {number} strategyId - 전략 ID
   * @returns {Promise<Object>} 전략 상세 정보
   */
  getDefenseStrategyDetail: async (strategyId) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 방어 전략 상세 조회:', strategyId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const strategy = mockDefenseStrategies.find(s => s.id === strategyId);
      
      if (!strategy) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '전략 정보를 찾을 수 없습니다.',
        });
      }
      
      return createResponse(true, strategy);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.DEFENSE_STRATEGY_DETAIL(strategyId)
      );
      
      console.log('✅ 방어 전략 상세 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 방어 전략 상세 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'STRATEGY_DETAIL_ERROR',
        message: error.response?.data?.error?.message || '전략 상세 정보를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 현재 시장 위기도 분석
   * @returns {Promise<Object>} 시장 위기도 정보
   */
  getMarketRiskLevel: async () => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 현재 시장 위기도 분석');
      
      await new Promise(resolve => setTimeout(resolve, 700));
      
      return createResponse(true, {
        riskLevel: 'MEDIUM', // LOW, MEDIUM, HIGH, CRITICAL
        riskScore: 65, // 0-100
        factors: [
          { name: '변동성 지수 (VIX)', value: 28, impact: 'HIGH' },
          { name: '금리 상승률', value: 45, impact: 'MEDIUM' },
          { name: '신용경색 지수', value: 32, impact: 'LOW' },
          { name: '실업률', value: 3.8, impact: 'LOW' },
        ],
        recommendation: '중간 수준의 위험이 감지되었습니다. 방어적 포트폴리오 구성을 권장합니다.',
        updatedAt: new Date().toISOString(),
      });
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get('/api/v1/analysis/market-risk');
      
      console.log('✅ 시장 위기도 분석 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 시장 위기도 분석 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'MARKET_RISK_ERROR',
        message: error.response?.data?.error?.message || '시장 위기도 분석에 실패했습니다.',
      });
    }
  },
};

export default analysisService;
