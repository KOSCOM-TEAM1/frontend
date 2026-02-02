# Koscom Investment Platform - API 연결 가이드

## 📡 API 구조

### 1. 파일 구조
```
src/
  api/
    client.js       # Axios 클라이언트 설정 (인터셉터, 기본 설정)
    userService.js  # 회원 관련 API 서비스
    types.js        # API 공통 타입 및 엔드포인트 정의
```

### 2. API 클라이언트 (`client.js`)

**역할**: 모든 API 요청의 기본 설정을 담당합니다.

```javascript
import apiClient from './client';
```

**주요 기능**:
- **baseURL**: `http://221.168.36.171:8080` (환경 변수로 관리)
- **timeout**: 10초
- **요청 인터셉터**: 모든 요청 전에 로그 출력, 토큰 추가 가능
- **응답 인터셉터**: 모든 응답 후 로그 출력, 에러 처리 (401, 403, 404, 500 등)

### 3. 회원 서비스 (`userService.js`)

**역할**: 회원 관련 API 호출을 담당합니다.

#### `getMemberInfo(memberId)`

**GET** `/api/v1/member/allInfo`

회원정보(프로필 사진, 이름)와 설정정보(취침시간, 기상시간)를 가져옵니다.

**파라미터**:
- `memberId` (number): 회원 ID (기본값: 1)

**요청 헤더**:
- `id`: 회원 ID를 헤더에 포함

**응답 구조**:
```javascript
{
  success: true,
  data: {
    id: 1,
    name: "Alex",
    profileImage: "https://...",
    sleepTime: "23:00",
    wakeTime: "07:00",
    // ... 기타 필드
  },
  error: null
}
```

**에러 처리**:
- 네트워크 에러
- 서버 에러 (500)
- 인증 실패 (401)
- 리소스 없음 (404)

### 4. 컴포넌트에서 사용하기

#### MorningDashboard 예시

```javascript
import { useState, useEffect } from 'react';
import userService from '../api/userService';

function MorningDashboard() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberInfo = async () => {
      setLoading(true);
      const result = await userService.getMemberInfo(1);
      
      if (result.success) {
        setMemberInfo(result.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    };

    fetchMemberInfo();
  }, []);

  // API 데이터 사용
  const displayName = memberInfo?.name || 'Alex';
  const profileImage = memberInfo?.profileImage || '기본이미지URL';

  return (
    <div>
      <h1>좋은 아침입니다, {displayName}님</h1>
      <img src={profileImage} alt="프로필" />
    </div>
  );
}
```

### 5. 환경 변수 (`.env`)

**파일 위치**: 프로젝트 루트에 `.env` 파일 생성

```env
VITE_API_BASE_URL=http://221.168.36.171:8080
VITE_DEFAULT_MEMBER_ID=1
```

**사용 방법**:
```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

**주의사항**:
- Vite에서는 `VITE_` 접두사가 필요합니다.
- `.env` 파일 수정 후 개발 서버를 재시작해야 합니다.

---

## 🔄 API 흐름

1. **컴포넌트 마운트** → `useEffect` 실행
2. **서비스 호출** → `userService.getMemberInfo(1)`
3. **API 클라이언트** → `GET /api/v1/member/allInfo` (헤더에 id: 1)
4. **요청 인터셉터** → 로그 출력, 헤더 추가
5. **서버 응답** → 데이터 수신
6. **응답 인터셉터** → 로그 출력, 에러 처리
7. **서비스 반환** → `{ success, data, error }`
8. **컴포넌트 상태 업데이트** → `setMemberInfo(data)`
9. **UI 렌더링** → API 데이터 표시

---

## 📦 설치된 라이브러리

- **axios** `^1.7.9` - HTTP 클라이언트

---

## 🚀 다음 단계

추가할 API가 있다면:

1. **서비스 파일 생성**: `src/api/xxxService.js`
2. **API 메서드 작성**: `apiClient.get/post/put/delete` 사용
3. **컴포넌트에서 호출**: `useEffect` + `useState`
4. **에러 처리**: `try-catch` + 로딩 상태 관리

예시:
```javascript
// src/api/assetService.js
import apiClient from './client';

const assetService = {
  getAssets: async () => {
    const response = await apiClient.get('/api/v1/assets');
    return response.data;
  },
};

export default assetService;
```
