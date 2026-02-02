# CORS 에러 해결 가이드

## 🔴 문제 상황

```
❌ Provisional headers are shown
❌ allInfo 요청 실패
```

**원인**: `localhost:5174` → `http://221.168.36.171:8080` 크로스 도메인 요청이 서버에서 차단됨

---

## ✅ 해결 방법 (2가지)

### 방법 1: 백엔드 CORS 설정 추가 ⭐ **권장**

백엔드 개발자에게 요청하세요:

#### Spring Boot - Config 파일 생성
```java
package com.example.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // /api로 시작하는 모든 경로
                .allowedOrigins(
                    "http://localhost:5174",  // 개발 환경
                    "http://localhost:3000"   // 다른 포트도 필요 시 추가
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
```

#### 또는 컨트롤러에 직접 추가
```java
@RestController
@CrossOrigin(origins = "http://localhost:5174")  // ← 이 줄 추가
@RequestMapping("/api/v1/member")
public class UserController {
    
    @GetMapping("/allInfo")
    public ResponseEntity<?> memberInfo(@RequestHeader("id") Long memberId) {
        // ...
    }
}
```

---

### 방법 2: 프론트엔드 프록시 설정 ✅ **이미 적용됨**

백엔드를 수정할 수 없을 때 사용하는 임시 해결책입니다.

#### vite.config.js (이미 수정됨)
```javascript
export default defineConfig({
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://221.168.36.171:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
```

#### 동작 원리
```
브라우저 → localhost:5174/api/v1/member/allInfo
                ↓ (Vite 프록시가 자동 전달)
         221.168.36.171:8080/api/v1/member/allInfo
```

브라우저 입장에서는 같은 도메인(`localhost:5174`)으로 요청하므로 CORS 에러가 발생하지 않습니다.

---

## 🚀 적용 방법

### 1. 개발 서버 재시작 **필수!**

`vite.config.js` 파일을 수정했으므로 **반드시 재시작**해야 합니다.

**터미널에서:**
```bash
# Ctrl + C로 중단 후
npm run dev
```

### 2. 브라우저 캐시 삭제

1. 개발자 도구(F12) 열기
2. Network 탭에서 **Disable cache** 체크
3. 페이지 새로고침 (Ctrl+Shift+R)

### 3. 확인

개발자 도구 Console 탭에서:
```
✅ API 요청: GET /api/v1/member/allInfo
✅ API 응답: 200 /api/v1/member/allInfo
✅ 회원 정보 조회 성공
```

---

## 🔍 여전히 안 된다면?

### 체크리스트

- [ ] 개발 서버를 재시작했는가?
- [ ] 백엔드 서버가 실행 중인가?
- [ ] 백엔드 URL이 정확한가? (`http://221.168.36.171:8080`)
- [ ] Network 탭에서 `/api/v1/member/allInfo` 요청이 **200** 응답인가?

### 추가 디버깅

#### Network 탭 확인
1. Request URL이 `http://localhost:5174/api/v1/member/allInfo`로 보이는가?
   - ✅ 맞음: 프록시 작동 중
   - ❌ `http://221.168.36.171:8080/...`로 보임: 프록시 미작동

2. Status Code 확인:
   - `200 OK`: 성공
   - `404 Not Found`: 엔드포인트 경로 오류
   - `500 Internal Server Error`: 백엔드 서버 오류
   - `(failed)`: 네트워크 연결 실패

---

## 🎯 프로덕션 배포 시 주의사항

프록시는 **개발 환경에서만** 작동합니다. 실제 배포 시에는:

### 옵션 1: 백엔드 CORS 설정 (권장)
```java
.allowedOrigins(
    "http://localhost:5174",      // 개발
    "https://yourdomain.com"      // 프로덕션
)
```

### 옵션 2: Nginx 리버스 프록시
```nginx
location /api {
    proxy_pass http://221.168.36.171:8080;
}
```

### 옵션 3: 같은 도메인 사용
- 프론트엔드: `https://yourdomain.com`
- 백엔드: `https://api.yourdomain.com`
