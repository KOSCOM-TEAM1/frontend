import axios from 'axios';

// 환경 변수에서 API URL 가져오기
// 개발 환경에서는 프록시를 사용하므로 상대 경로만 사용
const BASE_URL = import.meta.env.DEV 
  ? ''  // 개발 환경: Vite 프록시 사용 (상대 경로)
  : import.meta.env.VITE_API_BASE_URL || 'http://221.168.36.171:8080';  // 프로덕션: 절대 경로

// API 클라이언트 기본 설정
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - 요청 전에 실행
apiClient.interceptors.request.use(
  (config) => {
    // 여기서 토큰이나 인증 정보를 추가할 수 있습니다
    console.log('API 요청:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('요청 에러:', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 응답 후에 실행
apiClient.interceptors.response.use(
  (response) => {
    console.log('API 응답:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('응답 에러:', error.response?.status, error.message);
    
    // 에러 타입별 처리
    if (error.response) {
      // 서버가 응답했지만 에러 상태 코드
      switch (error.response.status) {
        case 401:
          console.error('인증 실패');
          break;
        case 403:
          console.error('권한 없음');
          break;
        case 404:
          console.error('리소스를 찾을 수 없음');
          break;
        case 500:
          console.error('서버 에러');
          break;
        default:
          console.error('알 수 없는 에러');
      }
    } else if (error.request) {
      // 요청은 했지만 응답을 받지 못함
      console.error('서버 응답 없음 - 네트워크 문제일 수 있습니다');
    } else {
      // 요청 설정 중 에러 발생
      console.error('요청 설정 에러:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
