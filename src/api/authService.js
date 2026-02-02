import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';

/**
 * 인증 관련 API 서비스
 */
const authService = {
  /**
   * 회원가입
   * @param {Object} signupData - 회원가입 정보
   * @param {string} signupData.email - 이메일
   * @param {string} signupData.password - 비밀번호
   * @param {string} signupData.name - 이름
   * @param {string} signupData.phoneNumber - 전화번호
   * @returns {Promise<Object>} 회원가입 결과
   */
  signup: async (signupData) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 회원가입:', signupData);
      
      // 가짜 지연 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return createResponse(true, {
        id: 1,
        email: signupData.email,
        name: signupData.name,
        phoneNumber: signupData.phoneNumber,
        createdAt: new Date().toISOString(),
      });
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.post(API_ENDPOINTS.SIGNUP, signupData);
      
      console.log('✅ 회원가입 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 회원가입 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'SIGNUP_ERROR',
        message: error.response?.data?.error?.message || '회원가입에 실패했습니다.',
      });
    }
  },

  /**
   * 로그인
   * @param {Object} loginData - 로그인 정보
   * @param {string} loginData.email - 이메일
   * @param {string} loginData.password - 비밀번호
   * @returns {Promise<Object>} 로그인 결과 (JWT 토큰 포함)
   */
  login: async (loginData) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 로그인:', loginData);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return createResponse(true, {
        accessToken: 'mock_access_token_' + Date.now(),
        refreshToken: 'mock_refresh_token_' + Date.now(),
        tokenType: 'Bearer',
        expiresIn: 3600,
        user: {
          id: 1,
          email: loginData.email,
          name: 'Alex Johnson',
          profileImage: '/profile.jpg',
        },
      });
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.post(API_ENDPOINTS.LOGIN, loginData);
      
      console.log('✅ 로그인 성공:', response.data);
      
      // JWT 토큰을 로컬 스토리지에 저장
      if (response.data.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
      }
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 로그인 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'LOGIN_ERROR',
        message: error.response?.data?.error?.message || '로그인에 실패했습니다.',
      });
    }
  },

  /**
   * 로그아웃
   * @returns {Promise<Object>} 로그아웃 결과
   */
  logout: async () => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 로그아웃');
      
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      
      return createResponse(true, { message: '로그아웃되었습니다.' });
    }

    // 🌐 실제 API 호출 (백엔드에 로그아웃 API가 있다면)
    try {
      // 로컬 스토리지에서 토큰 삭제
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      
      console.log('✅ 로그아웃 성공');
      
      return createResponse(true, { message: '로그아웃되었습니다.' });
    } catch (error) {
      console.error('❌ 로그아웃 실패:', error);
      
      return createResponse(false, null, {
        code: 'LOGOUT_ERROR',
        message: '로그아웃에 실패했습니다.',
      });
    }
  },

  /**
   * 토큰 갱신
   * @returns {Promise<Object>} 새로운 토큰
   */
  refreshToken: async () => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 토큰 갱신');
      
      return createResponse(true, {
        accessToken: 'mock_new_access_token_' + Date.now(),
        refreshToken: 'mock_new_refresh_token_' + Date.now(),
        expiresIn: 3600,
      });
    }

    // 🌐 실제 API 호출
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      
      if (!refreshToken) {
        throw new Error('리프레시 토큰이 없습니다.');
      }
      
      const response = await apiClient.post('/api/v1/refresh-token', {
        refreshToken,
      });
      
      console.log('✅ 토큰 갱신 성공:', response.data);
      
      // 새 토큰 저장
      if (response.data.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
      }
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 토큰 갱신 실패:', error);
      
      return createResponse(false, null, {
        code: 'TOKEN_REFRESH_ERROR',
        message: '토큰 갱신에 실패했습니다.',
      });
    }
  },

  /**
   * 현재 로그인 여부 확인
   * @returns {boolean} 로그인 여부
   */
  isAuthenticated: () => {
    const token = localStorage.getItem('accessToken');
    return !!token;
  },

  /**
   * 현재 액세스 토큰 가져오기
   * @returns {string|null} 액세스 토큰
   */
  getAccessToken: () => {
    return localStorage.getItem('accessToken');
  },
};

export default authService;
