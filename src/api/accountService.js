import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockAccounts } from './mockData';

/**
 * 계좌 관련 API 서비스
 */
const accountService = {
  /**
   * 사용자 계좌 목록 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 계좌 목록
   */
  getAccounts: async (userId = 1) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 계좌 목록 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const userAccounts = mockAccounts.filter(account => account.userId === userId);
      
      return createResponse(true, userAccounts);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.ACCOUNTS, {
        headers: { 'id': userId },
      });
      
      console.log('✅ 계좌 목록 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 계좌 목록 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ACCOUNTS_ERROR',
        message: error.response?.data?.error?.message || '계좌 목록을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 마이데이터 계좌 연동
   * @param {Object} linkData - 연동 정보
   * @param {number} linkData.userId - 사용자 ID
   * @param {string} linkData.accountType - 계좌 유형 (SECURITIES, BANK, CRYPTO)
   * @param {string} linkData.institutionCode - 금융기관 코드
   * @param {string} linkData.institutionName - 금융기관 명
   * @param {string} linkData.accountNumber - 계좌번호
   * @param {string} linkData.authCode - 인증 코드
   * @returns {Promise<Object>} 연동 결과
   */
  linkAccount: async (linkData) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 마이데이터 계좌 연동:', linkData);
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // 연동은 시간이 좀 걸림
      
      const newAccount = {
        id: Math.floor(Math.random() * 10000),
        userId: linkData.userId,
        accountType: linkData.accountType,
        institutionName: linkData.institutionName,
        accountNumber: linkData.accountNumber,
        balance: 0,
        currency: 'KRW',
        isLinked: true,
        linkedAt: new Date().toISOString(),
      };
      
      return createResponse(true, {
        account: newAccount,
        message: '계좌가 성공적으로 연동되었습니다.',
      });
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.post(API_ENDPOINTS.ACCOUNTS_LINK, linkData);
      
      console.log('✅ 마이데이터 계좌 연동 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 마이데이터 계좌 연동 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ACCOUNT_LINK_ERROR',
        message: error.response?.data?.error?.message || '계좌 연동에 실패했습니다.',
      });
    }
  },

  /**
   * 마이데이터 계좌 연동 해제
   * @param {number} accountId - 계좌 ID
   * @returns {Promise<Object>} 연동 해제 결과
   */
  unlinkAccount: async (accountId) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 마이데이터 계좌 연동 해제:', accountId);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return createResponse(true, {
        accountId,
        message: '계좌 연동이 해제되었습니다.',
      });
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.delete(API_ENDPOINTS.ACCOUNTS_UNLINK(accountId));
      
      console.log('✅ 마이데이터 계좌 연동 해제 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 마이데이터 계좌 연동 해제 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ACCOUNT_UNLINK_ERROR',
        message: error.response?.data?.error?.message || '계좌 연동 해제에 실패했습니다.',
      });
    }
  },

  /**
   * 계좌 잔액 새로고침
   * @param {number} accountId - 계좌 ID
   * @returns {Promise<Object>} 업데이트된 계좌 정보
   */
  refreshAccountBalance: async (accountId) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 계좌 잔액 새로고침:', accountId);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const account = mockAccounts.find(acc => acc.id === accountId);
      
      if (!account) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '계좌를 찾을 수 없습니다.',
        });
      }
      
      // 잔액에 약간의 변동 추가 (시뮬레이션)
      const updatedAccount = {
        ...account,
        balance: account.balance + Math.floor(Math.random() * 100000) - 50000,
        updatedAt: new Date().toISOString(),
      };
      
      return createResponse(true, updatedAccount);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.post(`${API_ENDPOINTS.ACCOUNTS}/${accountId}/refresh`);
      
      console.log('✅ 계좌 잔액 새로고침 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 계좌 잔액 새로고침 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ACCOUNT_REFRESH_ERROR',
        message: error.response?.data?.error?.message || '계좌 잔액 새로고침에 실패했습니다.',
      });
    }
  },

  /**
   * 연동 가능한 금융기관 목록 조회
   * @param {string} accountType - 계좌 유형 (SECURITIES, BANK, CRYPTO)
   * @returns {Promise<Object>} 금융기관 목록
   */
  getAvailableInstitutions: async (accountType) => {
    // 🎭 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('🎭 [MOCK] 연동 가능한 금융기관 목록 조회:', accountType);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const mockInstitutions = {
        SECURITIES: [
          { code: 'mirae', name: '미래에셋증권', logo: '🏦' },
          { code: 'kiwoom', name: '키움증권', logo: '🏦' },
          { code: 'samsung', name: '삼성증권', logo: '🏦' },
          { code: 'kb', name: 'KB증권', logo: '🏦' },
        ],
        BANK: [
          { code: 'shinhan', name: '신한은행', logo: '🏦' },
          { code: 'kb', name: 'KB국민은행', logo: '🏦' },
          { code: 'woori', name: '우리은행', logo: '🏦' },
          { code: 'hana', name: '하나은행', logo: '🏦' },
        ],
        CRYPTO: [
          { code: 'upbit', name: '업비트', logo: '₿' },
          { code: 'bithumb', name: '빗썸', logo: '₿' },
          { code: 'coinone', name: '코인원', logo: '₿' },
        ],
      };
      
      return createResponse(true, mockInstitutions[accountType] || []);
    }

    // 🌐 실제 API 호출
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.ACCOUNTS}/institutions`, {
        params: { type: accountType },
      });
      
      console.log('✅ 금융기관 목록 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('❌ 금융기관 목록 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'INSTITUTIONS_ERROR',
        message: error.response?.data?.error?.message || '금융기관 목록을 불러올 수 없습니다.',
      });
    }
  },
};

export default accountService;
