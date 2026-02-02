# 🎯 API 연결 작업 완료 요약

---

## 📋 전체 작업 개요

백엔드 서버(`http://221.168.36.171:8080`)의 API를 프론트엔드에 연결하는 작업을 완료했습니다.

**작업 기간**: 2026-02-02  
**연결된 API**: 회원 정보 API, TTS API (4개)

---

## 🔧 1단계: 기본 인프라 구축

### 1-1. Axios 설치
```bash
npm install axios
```
- HTTP 요청을 위한 라이브러리 설치
- 모든 API 호출의 기반

### 1-2. API 클라이언트 생성 (`src/api/client.js`)

**역할**: 모든 API 요청의 공통 설정 관리

**주요 기능**:
- ✅ baseURL 설정
- ✅ timeout 10초
- ✅ 요청/응답 인터셉터 (로그, 에러 처리)
- ✅ 개발/프로덕션 환경 자동 구분

**코드 구조**:
```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.DEV ? '' : 'http://221.168.36.171:8080',
  timeout: 10000,
});

// 요청 전: 로그 출력
apiClient.interceptors.request.use(...);

// 응답 후: 에러 처리
apiClient.interceptors.response.use(...);
```

**왜 이렇게 했나요?**
- 모든 API 호출에서 중복 코드 제거
- 에러를 한 곳에서 일관되게 처리
- 로그를 자동으로 출력해 디버깅 쉽게

---

## 🔧 2단계: CORS 문제 해결

### 2-1. 문제 발생
```
localhost:5174 → http://221.168.36.171:8080
❌ CORS 에러: 다른 도메인 간 요청 차단
```

### 2-2. 해결 방법: Vite 프록시 설정 (`vite.config.js`)

**수정 전**:
```javascript
export default defineConfig({
  server: { port: 5174 }
})
```

**수정 후**:
```javascript
export default defineConfig({
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://221.168.36.171:8080',
        changeOrigin: true,
      }
    }
  }
})
```

**어떻게 작동하나요?**
```
브라우저 → localhost:5174/api/v1/member/allInfo (같은 도메인!)
           ↓ Vite가 자동으로 전달
백엔드 → 221.168.36.171:8080/api/v1/member/allInfo
```

브라우저 입장에서는 같은 도메인(`localhost:5174`)으로 요청하므로 CORS 에러가 발생하지 않습니다!

---

## 🔧 3단계: 회원 정보 API 연결

### 3-1. 서비스 생성 (`src/api/userService.js`)

**API 엔드포인트**: `GET /api/v1/member/allInfo`

**기능**:
```javascript
import userService from '../api/userService';

const result = await userService.getMemberInfo(1);
// { success: true, data: { id: 1, name: "홍길동", ... } }
```

**응답 처리**:
- ✅ 성공: `{ success: true, data: {...} }`
- ❌ 실패: `{ success: false, error: {...} }`

### 3-2. 컴포넌트 연결 (`src/pages/MorningDashboard.jsx`)

**추가된 코드**:
```javascript
const [memberInfo, setMemberInfo] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchMemberInfo = async () => {
    const result = await userService.getMemberInfo(1);
    if (result.success) {
      setMemberInfo(result.data);
    }
  };
  fetchMemberInfo();
}, []);

// 화면에 표시
const displayName = memberInfo?.name || 'Alex';
<h2>좋은 아침입니다, {displayName}님</h2>
```

**UI 개선**:
- 🟢 **"API 연결됨"** 배지 (성공 시)
- 🔴 **"API 오류"** 배지 (실패 시)
- ⏳ 로딩 스피너
- 🎨 실시간 프로필 이미지/이름 표시

---

## 🔧 4단계: TTS API 연결

### 4-1. 서비스 생성 (`src/api/ttsService.js`)

**4개의 API 연결**:

#### 1️⃣ 뉴스 분석 음성 변환
```javascript
await ttsService.newsAnalysisToSpeech(123, 'jinho');
// POST /api/tts/news-analysis/123?speaker=jinho
// 응답: { filename: "audio_123.mp3", downloadUrl: "/api/tts/audio/audio_123.mp3" }
```

#### 2️⃣ 커스텀 텍스트 음성 변환
```javascript
await ttsService.textToSpeech({
  text: '안녕하세요',
  speaker: 'jinho',
  speed: 0,
  pitch: 0,
  volume: 0
});
// POST /api/tts/custom
```

#### 3️⃣ 화자 목록 조회
```javascript
await ttsService.getSpeakers();
// GET /api/tts/speakers
// 응답: ["jinho", "clara", "matt", ...]
```

#### 4️⃣ 음성 파일 재생
```javascript
const audio = ttsService.playAudio('audio_123.mp3');
audio.play();
// GET /api/tts/audio/audio_123.mp3
```

---

## 📁 생성된 파일 목록

```
src/
├── api/
│   ├── client.js          ✅ Axios 클라이언트 (공통 설정)
│   ├── userService.js     ✅ 회원 API 서비스
│   ├── ttsService.js      ✅ TTS API 서비스 (NEW!)
│   └── types.js           ✅ API 엔드포인트 상수

.env                       ✅ 환경 변수 (API URL)
vite.config.js             ✅ 프록시 설정 (CORS 해결)

문서/
├── API_GUIDE.md           ✅ API 연결 구조 가이드
├── API_TEST_GUIDE.md      ✅ API 테스트 가이드
├── CORS_FIX.md            ✅ CORS 문제 해결 가이드
├── TTS_API_GUIDE.md       ✅ TTS API 사용 가이드 (NEW!)
└── API_작업_요약.md        ✅ 전체 작업 요약 (이 파일)
```

---

## 🎯 작업 흐름 정리

### 1️⃣ API 호출 흐름
```
컴포넌트
  ↓ (import)
서비스 (userService, ttsService)
  ↓ (API 호출)
클라이언트 (apiClient)
  ↓ (HTTP 요청)
Vite 프록시
  ↓ (전달)
백엔드 서버 (221.168.36.171:8080)
  ↓ (응답)
클라이언트 (인터셉터: 로그, 에러 처리)
  ↓ (데이터 변환)
서비스
  ↓ (결과 반환)
컴포넌트 (UI 업데이트)
```

### 2️⃣ 실제 동작 예시

**사용자가 /home 페이지 접속**
```
1. MorningDashboard 컴포넌트 마운트
2. useEffect 실행 → userService.getMemberInfo(1) 호출
3. apiClient.get('/api/v1/member/allInfo', { headers: { id: 1 } })
4. 요청 인터셉터: 콘솔에 "API 요청: GET /api/v1/member/allInfo" 출력
5. Vite 프록시: localhost:5174/api → 221.168.36.171:8080/api 전달
6. 백엔드 서버: 회원 정보 조회 후 응답
7. 응답 인터셉터: 콘솔에 "API 응답: 200" 출력
8. userService: 데이터 변환 후 { success: true, data: {...} } 반환
9. MorningDashboard: setMemberInfo(data) → UI 업데이트
10. 화면: "좋은 아침입니다, 홍길동님" + "API 연결됨" 배지
```

---

## 🧪 테스트 방법

### 1. 개발 서버 재시작 (중요!)
```bash
# 터미널에서 Ctrl+C로 중단 후
npm run dev
```

### 2. 브라우저 콘솔 확인 (F12)
```
✅ 성공 시:
🔄 회원 정보 요청 시작...
API 요청: GET /api/v1/member/allInfo
API 원본 응답: { success: true, data: {...} }
✅ 회원 정보 조회 성공: { id: 1, name: "홍길동", ... }
📌 사용자 이름: 홍길동
📌 프로필 이미지: https://...
```

### 3. 화면 확인
- 🟢 헤더에 "API 연결됨" 녹색 배지
- 👤 실제 회원 이름 표시
- 🖼️ 실제 프로필 이미지 표시

---

## 📝 사용 예시

### 회원 정보 가져오기
```javascript
import { useState, useEffect } from 'react';
import userService from '../api/userService';

function MyComponent() {
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await userService.getMemberInfo(1);
      if (result.success) {
        setMemberInfo(result.data);
      }
    };
    fetchData();
  }, []);

  return <h1>안녕하세요, {memberInfo?.name}님</h1>;
}
```

### TTS 음성 재생
```javascript
import ttsService from '../api/ttsService';

function NewsCard({ analysisId }) {
  const handlePlayAudio = async () => {
    const result = await ttsService.newsAnalysisToSpeech(analysisId);
    
    if (result.success) {
      const audio = new Audio(result.data.downloadUrl);
      audio.play();
    }
  };

  return <button onClick={handlePlayAudio}>🎙️ 듣기</button>;
}
```

### 커스텀 텍스트 음성 변환
```javascript
const handleTTS = async () => {
  const result = await ttsService.textToSpeech({
    text: '좋은 아침입니다',
    speaker: 'jinho',
    speed: 0,
  });
  
  if (result.success) {
    const audio = ttsService.playAudio(result.data.filename);
    audio.play();
  }
};
```

---

## 🎨 핵심 개념 정리

### 1. API 클라이언트 (client.js)
**역할**: 모든 API의 공통 설정 관리  
**비유**: 전화기 (모든 통화에 사용)

### 2. API 서비스 (userService, ttsService)
**역할**: 특정 기능의 API 호출 함수 모음  
**비유**: 연락처 (각 사람에게 전화하는 방법)

### 3. 프록시 (vite.config.js)
**역할**: CORS 에러 우회  
**비유**: 중계기 (다른 동네로 전화할 때 필요)

### 4. 인터셉터
**역할**: 요청/응답 가로채서 처리  
**비유**: 비서 (전화하기 전 메모하고, 받은 후 정리)

---

## 🚀 다음 단계

### 추가할 수 있는 API들:
- 자산 정보 API (`assetService.js`)
- 뉴스 정보 API (`newsService.js`)
- 방어 전략 API (`strategyService.js`)
- 설정 정보 API (`settingsService.js`)

### 작업 방법:
1. `src/api/xxxService.js` 파일 생성
2. API 메서드 작성 (`apiClient.get/post/put/delete` 사용)
3. 컴포넌트에서 `useEffect` + `useState`로 호출
4. 에러 처리 및 로딩 상태 관리

---

## 💡 중요한 개념

### 왜 서비스 레이어를 만들었나요?
```javascript
// ❌ 나쁜 방법: 컴포넌트에서 직접 호출
const response = await axios.get('http://221.168.36.171:8080/api/v1/member/allInfo');

// ✅ 좋은 방법: 서비스를 통해 호출
const result = await userService.getMemberInfo(1);
```

**장점**:
1. **재사용**: 여러 컴포넌트에서 같은 API 호출 가능
2. **유지보수**: API 변경 시 서비스 파일만 수정
3. **에러 처리**: 한 곳에서 일관되게 처리
4. **타입 안정성**: 응답 형식 통일 (`{ success, data, error }`)

### 왜 프록시를 사용하나요?
```
CORS 에러 = 보안상 다른 도메인 간 요청 차단

해결 방법:
1. 백엔드에 CORS 설정 추가 (권장, 프로덕션에 필요)
2. 프론트엔드에 프록시 설정 (개발 중 임시)
```

---

## 📚 참고 문서

- `API_GUIDE.md` - API 연결 구조 및 사용법
- `API_TEST_GUIDE.md` - API 테스트 및 문제 해결
- `CORS_FIX.md` - CORS 에러 해결 방법
- `TTS_API_GUIDE.md` - TTS API 사용 가이드

---

## ✅ 체크리스트

### 설치 확인
- [x] axios 설치됨
- [x] framer-motion 설치됨 (애니메이션용)

### 파일 생성 확인
- [x] `src/api/client.js` - API 클라이언트
- [x] `src/api/userService.js` - 회원 API
- [x] `src/api/ttsService.js` - TTS API
- [x] `src/api/types.js` - 엔드포인트 상수
- [x] `.env` - 환경 변수

### 설정 확인
- [x] `vite.config.js` - 프록시 설정
- [x] `MorningDashboard.jsx` - API 연결

### 문서 확인
- [x] API_GUIDE.md
- [x] API_TEST_GUIDE.md
- [x] CORS_FIX.md
- [x] TTS_API_GUIDE.md
- [x] API_작업_요약.md (이 파일)

---

## 🎉 결과

이제 프론트엔드가 백엔드 API와 완벽하게 연결되었습니다!

**가능한 것들**:
- ✅ 실시간 회원 정보 표시
- ✅ 음성 합성 (TTS)
- ✅ 뉴스 분석 음성 재생
- ✅ 커스텀 텍스트 음성 변환
- ✅ 화자 목록 조회
- ✅ 음성 파일 재생/다운로드

개발 서버를 재시작하고 `/home` 페이지에서 "API 연결됨" 배지를 확인하세요! 🚀
