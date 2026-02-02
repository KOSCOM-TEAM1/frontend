# API 연결 테스트 가이드

## 🧪 테스트 방법

### 1. 브라우저 콘솔에서 확인

개발자 도구(F12)를 열고 Console 탭에서 다음을 확인하세요:

#### ✅ 성공 시 로그
```
🔄 회원 정보 요청 시작...
API 요청: GET /api/v1/member/allInfo
API 원본 응답: { success: true, data: {...} }
API 응답: 200 /api/v1/member/allInfo
✅ 회원 정보 조회 성공: { id: 1, name: "홍길동", ... }
📌 사용자 이름: 홍길동
📌 프로필 이미지: https://...
✅ 회원 정보 요청 완료
```

#### ❌ 실패 시 로그
```
🔄 회원 정보 요청 시작...
API 요청: GET /api/v1/member/allInfo
응답 에러: 500 서버 에러
❌ 회원 정보 조회 실패: { code: "NETWORK_ERROR", message: "..." }
✅ 회원 정보 요청 완료
```

### 2. 화면에서 확인

#### API 연결 성공
- 헤더에 **"API 연결됨"** 녹색 배지 표시
- 실제 회원 이름과 프로필 이미지 표시

#### API 연결 실패
- 헤더에 **"API 오류"** 빨간색 배지 표시
- 기본값(Alex) 표시

---

## 🔧 API 연결 확인 체크리스트

### 서버 연결 확인
- [ ] 서버가 실행 중인가? (`http://221.168.36.171:8080`)
- [ ] 네트워크 방화벽/VPN 문제는 없는가?
- [ ] CORS 설정이 되어 있는가?

### API 응답 확인
- [ ] `/api/v1/member/allInfo` 엔드포인트가 존재하는가?
- [ ] 헤더에 `id: 1` 값이 전달되는가?
- [ ] 응답이 `{ success: true, data: {...} }` 형식인가?

### 프론트엔드 확인
- [ ] `.env` 파일이 있는가?
- [ ] `VITE_API_BASE_URL` 값이 올바른가?
- [ ] 개발 서버를 재시작했는가? (`.env` 수정 후)

---

## 🐛 문제 해결

### CORS 에러
```
Access to XMLHttpRequest at 'http://...' from origin 'http://localhost:5174' has been blocked by CORS policy
```

**해결 방법**: 백엔드에서 CORS 설정 추가
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5174")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}
```

### 네트워크 에러
```
❌ 응답 에러: 서버 응답 없음 - 네트워크 문제일 수 있습니다
```

**확인 사항**:
1. 서버가 실행 중인지 확인
2. URL이 정확한지 확인 (`http://221.168.36.171:8080`)
3. 네트워크 연결 확인

### 404 에러
```
❌ 응답 에러: 404 리소스를 찾을 수 없음
```

**확인 사항**:
1. API 엔드포인트 경로 확인 (`/api/v1/member/allInfo`)
2. Swagger 문서에서 실제 경로 확인

### 500 서버 에러
```
❌ 응답 에러: 500 서버 에러
```

**확인 사항**:
1. 백엔드 서버 로그 확인
2. 헤더 `id` 값이 올바른지 확인
3. DB 연결 상태 확인

---

## 📱 화면별 API 연결 상태

### /home (MorningDashboard)
- ✅ **회원 정보 API** 연결됨
- 표시 데이터:
  - 사용자 이름: `memberInfo.name`
  - 프로필 이미지: `memberInfo.profileImage`
  - API 상태 배지 (녹색/빨간색)

### 추가 예정
- `/total-asset` - 자산 정보 API
- `/timeline` - 뉴스 정보 API
- `/defense` - 방어 전략 API
- `/settings` - 설정 정보 API

---

## 💡 추가 디버깅 팁

### Network 탭에서 확인
1. 개발자 도구 > Network 탭
2. `/api/v1/member/allInfo` 요청 찾기
3. **Headers** 탭:
   - Request URL 확인
   - Request Headers에 `id: 1` 있는지 확인
4. **Response** 탭:
   - 서버 응답 JSON 확인
5. **Preview** 탭:
   - 응답 데이터 구조 확인

### React DevTools에서 확인
1. React DevTools 설치
2. Components 탭 > MorningDashboard 선택
3. **Hooks** 섹션:
   - `memberInfo`: API에서 받은 데이터
   - `loading`: 로딩 상태
   - `error`: 에러 정보
