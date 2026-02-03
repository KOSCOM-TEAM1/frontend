# Koscom Investment Platform

AI 기반 투자 분석 및 자산 관리 플랫폼입니다. 모바일 앱 형태(최대 430px)의 다크 테마 UI와 통합 네비게이션, TTS 뉴스 플레이리스트 등을 제공합니다.

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| **Frontend** | React 19.2.0 |
| **Router** | React Router DOM 7.13.0 |
| **Build** | Vite 7.2.4 |
| **애니메이션** | Framer Motion 12.x |
| **HTTP** | Axios 1.13.x |
| **스타일** | Tailwind CSS |
| **아이콘** | Material Symbols Outlined |
| **폰트** | Pretendard, Manrope |

---

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (기본 포트 5174)
npm run dev
```

- 개발 서버: **http://localhost:5174**
- API 요청은 `/api` 경로로 프록시됩니다 (vite.config.js).

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

---

## 라우팅 구조

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | WelcomeOnboarding | 온보딩/환영 |
| `/onboarding` | WelcomeOnboarding | 온보딩 |
| `/home` | MorningDashboard | 메인 대시보드(홈) |
| `/timeline` | AINewsTimeline | AI 뉴스 타임라인 |
| `/assets` | TotalAssetInventory | 통합 자산 현황 |
| `/assets/mydata` | MydataAccountIntegration | 마이데이터 계좌 연동 |
| `/settings` | SleepRoutineSettings | 수면 루틴 설정 |
| `/analysis` | HistoricalPatternAnalysis | 과거 패턴 분석 |
| `/analysis/detail` | HistoricalPatternDetail | 과거 패턴 상세 |
| `/analysis/strategy` | DefenseStrategy | 방어 전략 수립 |
| `/api-test` | ApiTestPage | API 테스트(개발용) |

---

## 주요 기능

### 1. 온보딩 (Welcome Onboarding)
- 환영 문구 및 24시간 시장 모니터링 소개
- 잠든 사이 포트폴리오 변화 설명

### 2. 메인 대시보드 (Morning Dashboard) — `/home`
- **헤더**: 프로필 이미지, 사용자명(최지원), 시장 업데이트 시간(오전 5:50)
- **시장 인포 바**: 코스피 지수(5,117.45, +3.39%), USD/KRW(1,452.40, +0.03%)
- **잠든 사이 변화**: 코스피·USD/KRW·해외·국내·총자산 변동률을 아이콘 카드 마키(가로 무한 스크롤)로 표시
- **국내·해외 구분**: 해외주식(+₩235,000 / ₩9,380,000), 국내 주식(-₩140,000 / ₩16,449,000) 막대 그래프(변동성 반영)
- **총 수익**: +₩95,000 (+0.37%), ₩25,829,000 및 막대 그래프
- **보유 자산**: 해외(NVIDIA, Tesla, Netflix), 국내(삼성전자, SK하이닉스, 네이버, 삼양식품) 목록

### 3. AI 뉴스 타임라인 — `/timeline`
- 타임라인 형태 금융 뉴스 (목데이터)
- 뉴스 요약, 태그, 시간 표시

### 4. 통합 자산 현황 — `/assets`
- **총 자산**: ₩25,829,000, +₩95,000 (+0.37%)
- **국내 주식**: 2개 계좌(종합 위탁, CMA 파킹), 도넛 차트, 호버 효과
- **해외 주식**: 3개 계좌(미국 주식 일반, 미국 ISA, 외화 예수금), 도넛 차트
- 실시간 환율(USD/KRW) 표시

### 5. 마이데이터 계좌 연동 — `/assets/mydata`
- 증권·가상자산·은행 계좌 연동 안내
- 금융위원회 인가 마이데이터 보안 설명

### 6. 수면 루틴 설정 — `/settings`
- 취침/기상 시간 설정 (10분 단위)
- 설정 변경 히스토리 그래프
- 주말 루틴, 알림 등 옵션

### 7. 과거 패턴 분석 — `/analysis`, `/analysis/detail`
- 엔비디아 루빈 GPU 발표와 유사한 **과거 사례 분석**
- 메인: 2022년 Ampere → Hopper 전환
- 상세: 2024년 Blackwell 아키텍처 공개

### 8. 방어 전략 수립 — `/analysis/strategy`
- 엔비디아 루빈 관련 **기업 연관 분석**
- 해외: 엔비디아, 테슬라, 넷플릭스
- 국내: SK하이닉스, 삼성전자, 네이버, 삼양식품
- 영향도, 추천(매수/유지/중립) 표시

### 9. TTS 플레이리스트 토글 (전역 컴포넌트)
- **위치**: 앱 화면(430px) 안 오른쪽 하단 고정
- **기능**: 헤드셋 버튼 클릭 시 플레이리스트 패널 열기/닫기
- **플레이리스트**: 타임라인 뉴스 6건과 동일 (CLOVA TTS)
  - 트랙별 재생/일시정지, 전체 연속 재생
  - 재생 시간 / 전체 시간, 시각화 바
- TTS API 연동(ttsService), 오디오 URL 캐시 및 duration 미리 로드

### 10. 통합 네비게이션 (Navigation)
- **위치**: 하단 고정, 430px 앱 영역 중앙
- **메뉴**: 홈, 타임라인, 분석, 자산, 설정
- 현재 경로 하이라이트(아이콘·라벨)
- 적용 페이지: 홈, 타임라인, 자산, 설정, 분석, 분석 상세, 분석/전략

---

## API 서비스 (`src/api/`)

| 서비스 | 역할 |
|--------|------|
| `authService` | 로그인, 회원 정보(프로필 이미지 등) |
| `userService` | 회원 정보, 설정 (목데이터 연동) |
| `stockService` | 주식 목록/시세 |
| `newsService` | 뉴스 목록 (목데이터 사용) |
| `ttsService` | CLOVA TTS 음성 변환 |
| `assetService` | 자산/포트폴리오 |
| `accountService` | 계좌 목록/잔액 |
| `analysisService` | 과거 패턴/분석 |
| `settingsService` | 수면 루틴 등 설정 |
| `exchangeRateService` | 환율(USD/KRW 등) |
| `reportService` | 리포트 |
| `mockData.js` | 사용자·주식·계좌·뉴스 등 목데이터 중앙 관리 |

- `client.js`: Axios 인스턴스, `/api` baseURL
- `types.js`: API 엔드포인트 상수
- Vite 프록시: `/api` → 백엔드 서버

---

## 프로젝트 구조

```
koscom-frontend/
├── public/
│   ├── profile.jpg      # 프로필 기본 이미지
│   └── vite.svg
├── src/
│   ├── api/
│   │   ├── client.js
│   │   ├── types.js
│   │   ├── mockData.js
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── stockService.js
│   │   ├── newsService.js
│   │   ├── ttsService.js
│   │   ├── assetService.js
│   │   ├── accountService.js
│   │   ├── analysisService.js
│   │   ├── settingsService.js
│   │   ├── exchangeRateService.js
│   │   ├── reportService.js
│   │   └── index.js
│   ├── components/
│   │   ├── Navigation.jsx   # 하단 통합 네비게이션
│   │   └── TTSToggle.jsx    # TTS 플레이리스트 플로팅 버튼/패널
│   ├── pages/
│   │   ├── WelcomeOnboarding.jsx
│   │   ├── MorningDashboard.jsx
│   │   ├── AINewsTimeline.jsx
│   │   ├── TotalAssetInventory.jsx
│   │   ├── MydataAccountIntegration.jsx
│   │   ├── SleepRoutineSettings.jsx
│   │   ├── HistoricalPatternAnalysis.jsx
│   │   ├── HistoricalPatternDetail.jsx
│   │   ├── DefenseStrategy.jsx
│   │   └── ApiTestPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css    # Tailwind, glass, 애니메이션(마키 등)
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 디자인 특징

- **다크 모드**: 배경 `#101622`, Primary `#135bec`, 보조 보라 `#8b5cf6`
- **Glass Morphism**: 반투명·블러 카드/패널
- **앱 프레임**: 최대 너비 430px, 가운데 정렬로 모바일 뷰 유지
- **애니메이션**: Framer Motion 슬라이드/페이드, CSS 마키(잠든 사이 변화), 막대 그래프 등
- **반응형**: 430px 이내에서 스크롤·터치 친화적 레이아웃

---

## 브라우저 지원

- Chrome, Safari, Firefox, Edge (최신 버전)

---

## 라이선스

Private
