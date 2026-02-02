// API 공통 타입 정의
export const API_ENDPOINTS = {
  // 회원 관련
  MEMBER_INFO: '/api/v1/member/allInfo',
  
  // 자산 관련
  ASSETS: '/api/v1/assets',
  
  // 뉴스 관련
  NEWS: '/api/v1/news',
};

// 공통 응답 타입
export const createResponse = (success, data = null, error = null) => ({
  success,
  data,
  error,
});
