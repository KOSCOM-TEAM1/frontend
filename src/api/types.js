/**
 * API 공통 타입 및 엔드포인트 정의
 * 
 * 🔧 목 데이터 모드 설정
 * USE_MOCK_DATA를 true로 설정하면 실제 API 대신 목 데이터를 사용합니다.
 */

// 목 데이터 사용 여부 (개발 중에는 true, 실제 API 연결 시 false로 변경)
export const USE_MOCK_DATA = true;

// API 엔드포인트 정의
export const API_ENDPOINTS = {
  // 회원 관련
  MEMBER_INFO: '/api/v1/member/allInfo',
  SIGNUP: '/api/v1/signup',
  LOGIN: '/api/v1/login',
  
  // 자산 관련
  ASSETS: '/api/v1/assets',
  ASSETS_TOTAL: '/api/v1/assets/total',
  ASSETS_BY_REGION: '/api/v1/assets/by-region',
  ASSETS_BY_TYPE: '/api/v1/assets/by-type',
  
  // 계좌 관련
  ACCOUNTS: '/api/v1/accounts',
  ACCOUNTS_LINK: '/api/v1/accounts/link',
  ACCOUNTS_UNLINK: (accountId) => `/api/v1/accounts/${accountId}/unlink`,
  
  // 주식 관련
  STOCKS: '/api/v1/stocks',
  STOCK_DETAIL: (stockId) => `/api/v1/stocks/${stockId}`,
  STOCK_PRICE: (stockCode) => `/api/v1/stocks/${stockCode}/price`,
  USER_STOCKS: '/api/v1/user-stocks',
  
  // 뉴스 관련
  NEWS: '/api/v1/news',
  NEWS_DETAIL: (newsId) => `/api/v1/news/${newsId}`,
  NEWS_SAMPLE: '/api/v1/news/sample',
  
  // AI 뉴스 분석 관련
  NEWS_ANALYSIS: '/api/v1/news-analysis',
  NEWS_ANALYSIS_OVERNIGHT: '/api/v1/news-analysis/analyze-overnight',
  NEWS_ANALYSIS_PERIOD: '/api/v1/news-analysis/analyze',
  NEWS_ANALYSIS_DETAIL: (analysisId) => `/api/v1/news-analysis/${analysisId}`,
  
  // 과거 패턴 분석 관련
  HISTORICAL_PATTERNS: '/api/v1/analysis/patterns',
  HISTORICAL_PATTERN_DETAIL: (patternId) => `/api/v1/analysis/patterns/${patternId}`,
  
  // 방어 전략 관련
  DEFENSE_STRATEGIES: '/api/v1/analysis/strategies',
  DEFENSE_STRATEGY_DETAIL: (strategyId) => `/api/v1/analysis/strategies/${strategyId}`,
  
  // 환율 관련
  EXCHANGE_RATES: '/api/v1/exchange-rates',
  
  // 사용자 설정 관련
  USER_SETTINGS: '/api/v1/user-settings',
  UPDATE_SLEEP_TIME: '/api/v1/user-settings/sleep-time',
  
  // 리포트 관련
  REPORTS: '/api/v1/reports',
  REPORT_LATEST: '/api/v1/reports/latest',
  REPORT_OVERNIGHT: '/api/v1/reports/overnight',
  
  // TTS 관련
  TTS_NEWS_ANALYSIS: (analysisId) => `/api/tts/news-analysis/${analysisId}`,
  TTS_CUSTOM: '/api/tts/custom',
  TTS_SPEAKERS: '/api/tts/speakers',
  TTS_AUDIO: (filename) => `/api/tts/audio/${filename}`,
  
  // 헬스체크
  HEALTH: '/api/health',
};

// 공통 응답 타입
export const createResponse = (success, data = null, error = null) => ({
  success,
  data,
  error,
});

// 에러 코드 정의
export const ERROR_CODES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  SERVER_ERROR: 'SERVER_ERROR',
  INVALID_INPUT: 'INVALID_INPUT',
};
