import apiClient from './client';
import { API_ENDPOINTS, USE_MOCK_DATA, createResponse } from './types';
import { mockAssets } from './mockData';

/**
 * 자산 관련 API 서비스
 */
const assetService = {
  /**
   * 전체 자산 현황 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 전체 자산 현황
   */
  getTotalAssets: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 전체 자산 현황 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return createResponse(true, mockAssets);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.ASSETS_TOTAL, {
        headers: { 'id': userId },
      });
      
      console.log('전체 자산 현황 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('전체 자산 현황 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ASSETS_ERROR',
        message: error.response?.data?.error?.message || '자산 현황을 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 지역별 자산 분포 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 지역별 자산 분포
   */
  getAssetsByRegion: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 지역별 자산 분포 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return createResponse(true, mockAssets.assetsByRegion);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.ASSETS_BY_REGION, {
        headers: { 'id': userId },
      });
      
      console.log('지역별 자산 분포 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('지역별 자산 분포 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ASSETS_BY_REGION_ERROR',
        message: error.response?.data?.error?.message || '지역별 자산 분포를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 자산 유형별 분포 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 자산 유형별 분포
   */
  getAssetsByType: async (userId = 1) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 자산 유형별 분포 조회:', userId);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return createResponse(true, mockAssets.assetsByType);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.ASSETS_BY_TYPE, {
        headers: { 'id': userId },
      });
      
      console.log('자산 유형별 분포 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('자산 유형별 분포 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ASSETS_BY_TYPE_ERROR',
        message: error.response?.data?.error?.message || '자산 유형별 분포를 불러올 수 없습니다.',
      });
    }
  },

  /**
   * 자산 변동 내역 조회
   * @param {number} userId - 사용자 ID
   * @param {Object} params - 조회 조건
   * @param {string} params.startDate - 시작일 (YYYY-MM-DD)
   * @param {string} params.endDate - 종료일 (YYYY-MM-DD)
   * @returns {Promise<Object>} 자산 변동 내역
   */
  getAssetHistory: async (userId = 1, params = {}) => {
    // 목 데이터 모드
    if (USE_MOCK_DATA) {
      console.log('[MOCK] 자산 변동 내역 조회:', userId, params);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // 최근 7일 변동 내역 목 데이터
      const mockHistory = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        return {
          date: date.toISOString().split('T')[0],
          totalAssets: 31950000 - (i * 100000),
          dailyChange: Math.floor(Math.random() * 1000000) - 500000,
          dailyChangeRate: (Math.random() * 4 - 2).toFixed(2),
        };
      }).reverse();
      
      return createResponse(true, mockHistory);
    }

    // 실제 API 호출
    try {
      const response = await apiClient.get(API_ENDPOINTS.ASSETS, {
        headers: { 'id': userId },
        params: {
          ...params,
          type: 'history',
        },
      });
      
      console.log('자산 변동 내역 조회 성공:', response.data);
      
      return createResponse(true, response.data.data);
    } catch (error) {
      console.error('자산 변동 내역 조회 실패:', error);
      
      return createResponse(false, null, {
        code: error.response?.data?.error?.code || 'ASSET_HISTORY_ERROR',
        message: error.response?.data?.error?.message || '자산 변동 내역을 불러올 수 없습니다.',
      });
    }
  },
};

export default assetService;
