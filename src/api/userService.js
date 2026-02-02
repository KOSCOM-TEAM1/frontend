import apiClient from './client';

/**
 * 회원 정보 API 서비스
 */
const userService = {
  /**
   * 회원정보(프로필 사진, 이름)와 설정정보(취침시간, 기상시간)를 가져옵니다.
   * @param {number} memberId - 회원 ID (기본값: 1)
   * @returns {Promise} API 응답 데이터
   */
  getMemberInfo: async (memberId = 1) => {
    try {
      const response = await apiClient.get('/api/v1/member/allInfo', {
        headers: {
          'id': memberId,
        },
      });
      
      console.log('API 원본 응답:', response.data);
      
      // 성공 응답 처리
      if (response.data.success) {
        // API 응답 데이터를 프론트엔드에서 사용하기 쉬운 형태로 변환
        const data = response.data.data;
        
        return {
          success: true,
          data: {
            // 회원 정보
            id: data.id,
            name: data.name || data.title || '사용자',
            profileImage: data.profileImage || data.url,
            
            // 설정 정보
            sleepTime: data.sleepTime,
            wakeTime: data.wakeTime,
            
            // 기타 정보 (원본 그대로 포함)
            ...data,
          },
        };
      } else {
        // API가 success: false를 반환한 경우
        return {
          success: false,
          error: response.data.error,
        };
      }
    } catch (error) {
      // 네트워크 에러 또는 서버 에러
      console.error('getMemberInfo 에러:', error);
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: error.message || '회원 정보를 불러오는데 실패했습니다.',
        },
      };
    }
  },
};

export default userService;
