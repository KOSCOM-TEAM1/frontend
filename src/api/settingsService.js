import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockUserSettings } from './mockData';

/**
 * 사용자 설정 관련 API 서비스
 */
const settingsService = {
  /**
   * 사용자 설정 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 사용자 설정 정보
   */
  getUserSettings: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 사용자 설정 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return createResponse(true, mockUserSettings);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.USER_SETTINGS, {
        headers: { 'id': userId },
      });
      
      console.log('사용자 설정 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('사용자 설정 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'SETTINGS_ERROR',
        message: error.response?.data?.error?.message || '사용자 설정을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 수면 시간 설정 업데이트
   * @param {Object} sleepTimeData - 수면 시간 정보
   * @param {number} sleepTimeData.userId - 사용자 ID
   * @param {string} sleepTimeData.sleepTime - 취침 시간 (HH:mm)
   * @param {string} sleepTimeData.wakeTime - 기상 시간 (HH:mm)
   * @param {boolean} sleepTimeData.enableWeekendMode - 주말 모드 활성화
   * @returns {Promise<Object>} 업데이트 결과
   */
  updateSleepTime: async (sleepTimeData) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 수면 시간 설정 업데이트:', sleepTimeData);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return createResponse(true, {
        ...mockUserSettings,
        sleepTime: sleepTimeData.sleepTime,
        wakeTime: sleepTimeData.wakeTime,
        enableWeekendMode: sleepTimeData.enableWeekendMode,
        updatedAt: new Date().toISOString(),
      });
    }

    // 실제 API 호출
    try {
      const response = await apiClient.put(
        API_ENDPOINTS.UPDATE_SLEEP_TIME, 
        sleepTimeData
      );
      
      console.log('수면 시간 설정 업데이트 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('수면 시간 설정 업데이트 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'UPDATE_SLEEP_TIME_ERROR',
        message: error.response?.data?.error?.message || '수면 시간 설정 업데이트에 실패했습니다.',
      });
    }
  },

  /**
   * 전체 사용자 설정 업데이트
   * @param {number} userId - 사용자 ID
   * @param {Object} settingsData - 설정 정보
   * @returns {Promise<Object>} 업데이트 결과
   */
  updateUserSettings: async (userId, settingsData) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 사용자 설정 업데이트:', userId, settingsData);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return createResponse(true, {
        ...mockUserSettings,
        ...settingsData,
        userId,
        updatedAt: new Date().toISOString(),
      });
    }

    // 실제 API 호출
    try {
      const response = await apiClient.put(API_ENDPOINTS.USER_SETTINGS, {
        userId,
        ...settingsData,
      });
      
      console.log('사용자 설정 업데이트 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('사용자 설정 업데이트 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'UPDATE_SETTINGS_ERROR',
        message: error.response?.data?.error?.message || '사용자 설정 업데이트에 실패했습니다.',
      });
    }
  },

  /**
   * 알림 설정 업데이트
   * @param {Object} notificationData - 알림 설정 정보
   * @param {number} notificationData.userId - 사용자 ID
   * @param {boolean} notificationData.enableNotifications - 알림 활성화
   * @param {boolean} notificationData.notificationSound - 알림 소리
   * @returns {Promise<Object>} 업데이트 결과
   */
  updateNotificationSettings: async (notificationData) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 알림 설정 업데이트:', notificationData);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return createResponse(true, {
        ...mockUserSettings,
        enableNotifications: notificationData.enableNotifications,
        notificationSound: notificationData.notificationSound,
        updatedAt: new Date().toISOString(),
      });
    }

    // 실제 API 호출
    try {
      const response = await apiClient.put(
        `${API_ENDPOINTS.USER_SETTINGS}/notifications`, 
        notificationData
      );
      
      console.log('알림 설정 업데이트 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('알림 설정 업데이트 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'UPDATE_NOTIFICATION_ERROR',
        message: error.response?.data?.error?.message || '알림 설정 업데이트에 실패했습니다.',
      });
    }
  },

  /**
   * 시장 대응 공백 시간 계산
   * @param {string} sleepTime - 취침 시간 (HH:mm)
   * @param {string} wakeTime - 기상 시간 (HH:mm)
   * @returns {Object} 공백 시간 정보
   */
  calculateGapTime: (sleepTime, wakeTime) => {
    const [sleepHour, sleepMinute] = sleepTime.split(':').map(Number);
    const [wakeHour, wakeMinute] = wakeTime.split(':').map(Number);
    
    let gapMinutes;
    
    if (wakeHour > sleepHour) {
      // 같은 날 (예: 02:00 ~ 07:00)
      gapMinutes = (wakeHour - sleepHour) * 60 + (wakeMinute - sleepMinute);
    } else {
      // 다음 날 (예: 23:00 ~ 07:00)
      gapMinutes = (24 - sleepHour + wakeHour) * 60 + (wakeMinute - sleepMinute);
    }
    
    const gapHours = Math.floor(gapMinutes / 60);
    const remainingMinutes = gapMinutes % 60;
    
    return {
      totalMinutes: gapMinutes,
      hours: gapHours,
      minutes: remainingMinutes,
      formatted: `${gapHours}시간 ${remainingMinutes}분`,
    };
  },
};

export default settingsService;
