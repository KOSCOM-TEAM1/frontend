import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockReports } from './mockData';

/**
 * 리포트 관련 API 서비스
 */
const reportService = {
  /**
   * 사용자 리포트 목록 조회
   * @param {number} userId - 사용자 ID
   * @param {Object} params - 조회 조건
   * @param {string} params.reportType - 리포트 타입 (OVERNIGHT, WEEKLY, MONTHLY)
   * @returns {Promise<Object>} 리포트 목록
   */
  getReports: async (userId = 1, params = {}) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 리포트 목록 조회:', userId, params);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      let filteredReports = mockReports.filter(r => r.userId === userId);
      
      if (params.reportType) {
        filteredReports = filteredReports.filter(r => r.reportType === params.reportType);
      }
      
      return createResponse(true, filteredReports);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.REPORTS, {
        headers: { 'id': userId },
        params,
      });
      
      console.log('리포트 목록 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('리포트 목록 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'REPORTS_ERROR',
        message: error.response?.data?.error?.message || '리포트 목록을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 최신 리포트 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 최신 리포트
   */
  getLatestReport: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 최신 리포트 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      const userReports = mockReports.filter(r => r.userId === userId);
      const latestReport = userReports.sort((a, b) => 
        new Date(b.generatedAt) - new Date(a.generatedAt)
      )[0];
      
      if (!latestReport) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '리포트가 없습니다.',
        });
      }
      
      return createResponse(true, latestReport);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.REPORT_LATEST, {
        headers: { 'id': userId },
      });
      
      console.log('최신 리포트 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error( '최신 리포트 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'LATEST_REPORT_ERROR',
        message: error.response?.data?.error?.message || '최신 리포트를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 어젯밤 리포트 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 어젯밤 리포트
   */
  getOvernightReport: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 어젯밤 리포트 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const overnightReport = mockReports.find(
        r => r.userId === userId && r.reportType === 'OVERNIGHT'
      );
      
      if (!overnightReport) {
        return createResponse(false, null, {
          code: 'NOT_FOUND',
          message: '어젯밤 리포트가 없습니다.',
        });
      }
      
      return createResponse(true, overnightReport);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.REPORT_OVERNIGHT, {
        headers: { 'id': userId },
      });
      
      console.log('어젯밤 리포트 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('어젯밤 리포트 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'OVERNIGHT_REPORT_ERROR',
        message: error.response?.data?.error?.message || '어젯밤 리포트를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 리포트 생성 요청 (수동)
   * @param {Object} reportRequest - 리포트 생성 요청
   * @param {number} reportRequest.userId - 사용자 ID
   * @param {string} reportRequest.reportType - 리포트 타입
   * @param {string} reportRequest.startTime - 시작 시간
   * @param {string} reportRequest.endTime - 종료 시간
   * @returns {Promise<Object>} 생성된 리포트
   */
  generateReport: async (reportRequest) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 리포트 생성 요청:', reportRequest);
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // 리포트 생성은 시간이 걸림
      
      const newReport = {
        id: Math.floor(Math.random() * 10000),
        userId: reportRequest.userId,
        reportType: reportRequest.reportType,
        title: `${reportRequest.reportType} 리포트`,
        content: '리포트 내용이 생성되었습니다.',
        generatedAt: new Date().toISOString(),
        sleepStartTime: reportRequest.startTime,
        sleepEndTime: reportRequest.endTime,
        totalNewsCount: 4,
        importantNewsCount: 3,
      };
      
      return createResponse(true, newReport);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.post(API_ENDPOINTS.REPORTS, reportRequest);
      
      console.log('리포트 생성 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('리포트 생성 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'GENERATE_REPORT_ERROR',
        message: error.response?.data?.error?.message || '리포트 생성에 실패했습니다.',
      });
    }
  },
};

export default reportService;
