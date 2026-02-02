/**
 * API 서비스 통합 관리
 * 
 * 🚀 사용 방법:
 * import { userService, stockService, newsService } from '@/api';
 * 
 * 또는
 * 
 * import api from '@/api';
 * api.userService.getMemberInfo();
 * api.stockService.getStockList();
 */

// API 클라이언트 및 공통 타입
export { default as apiClient } from './client';
export * from './types';

// 도메인별 서비스
export { default as authService } from './authService';
export { default as userService } from './userService';
export { default as stockService } from './stockService';
export { default as newsService } from './newsService';
export { default as ttsService } from './ttsService';
export { default as assetService } from './assetService';
export { default as accountService } from './accountService';
export { default as analysisService } from './analysisService';
export { default as settingsService } from './settingsService';
export { default as exchangeRateService } from './exchangeRateService';
export { default as reportService } from './reportService';

// 목 데이터
export * from './mockData';

// 통합 API 객체 (선택적 사용)
import authService from './authService';
import userService from './userService';
import stockService from './stockService';
import newsService from './newsService';
import ttsService from './ttsService';
import assetService from './assetService';
import accountService from './accountService';
import analysisService from './analysisService';
import settingsService from './settingsService';
import exchangeRateService from './exchangeRateService';
import reportService from './reportService';

const api = {
  auth: authService,
  user: userService,
  stock: stockService,
  news: newsService,
  tts: ttsService,
  asset: assetService,
  account: accountService,
  analysis: analysisService,
  settings: settingsService,
  exchangeRate: exchangeRateService,
  report: reportService,
};

export default api;
