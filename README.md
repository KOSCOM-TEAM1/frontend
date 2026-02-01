# Koscom Investment Platform

AI 기반 투자 분석 및 자산 관리 플랫폼입니다.

## 주요 기능

### 1. 온보딩 (Welcome Onboarding)
- 사용자 환영 화면
- 24시간 시장 모니터링 소개
- 취침 중 포트폴리오 변화 분석 설명

### 2. 메인 대시보드 (Morning Portfolio Dashboard)
- 아침 인사 및 사용자 정보
- 자산 잔액 및 수익률 차트
- 잠든 사이 시장 변화 요약
- 주요 보유 자산 현황

### 3. AI 뉴스 타임라인
- 실시간 금융 뉴스 타임라인
- AI 기반 뉴스 요약
- 투자 영향도 분석
- 보유 종목 연관성 표시

### 4. 통합 자산 현황
- 국내/해외 자산 통합 조회
- 계좌별 자산 세부 내역
- 지역별 자산 비중 차트
- 보유 종목 실시간 시세

### 5. 마이데이터 계좌 연동
- 증권사 계좌 연동
- 가상자산 거래소 연동
- 은행 계좌 연동
- 금융위원회 인가 마이데이터 보안

### 6. 수면 루틴 설정
- 취침/기상 시간 설정
- 시장 대응 공백 분석
- 예상 변동성 계산
- 주말 루틴 적용

### 7. AI 과거 패턴 분석
- 현재 시장과 과거 금융 위기 유사도 분석
- 2008년 금융위기 비교
- AI 기반 추세 예측
- 과거 사례 상세 분석

### 8. 방어 전략 수립
- AI 추천 리스크 방어 전략
- 인버스 ETF, 안전자산, 손절가 설정
- 전략별 점수 및 영향도
- 실시간 전략 적용

## 기술 스택

- **Frontend**: React 19.2.0
- **Router**: React Router DOM 7.1.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Material Symbols Outlined
- **Fonts**: Pretendard, Manrope

## 설치 및 실행

### 설치
\`\`\`bash
npm install
\`\`\`

### 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

개발 서버는 http://localhost:5173 에서 실행됩니다.

### 프로덕션 빌드
\`\`\`bash
npm run build
\`\`\`

### 프로덕션 미리보기
\`\`\`bash
npm run preview
\`\`\`

## 프로젝트 구조

\`\`\`
koscom-frontend/
├── src/
│   ├── components/
│   │   └── Navigation.jsx          # 통합 네비게이션 컴포넌트
│   ├── pages/
│   │   ├── WelcomeOnboarding.jsx   # 온보딩 페이지
│   │   ├── MorningDashboard.jsx    # 메인 대시보드
│   │   ├── AINewsTimeline.jsx      # AI 뉴스 타임라인
│   │   ├── TotalAssetInventory.jsx # 통합 자산 현황
│   │   ├── MydataAccountIntegration.jsx # 마이데이터 연동
│   │   ├── SleepRoutineSettings.jsx # 수면 루틴 설정
│   │   ├── HistoricalPatternAnalysis.jsx # 과거 패턴 분석
│   │   ├── HistoricalPatternDetail.jsx # 과거 패턴 상세
│   │   └── DefenseStrategy.jsx     # 방어 전략 수립
│   ├── App.jsx                     # 메인 앱 컴포넌트
│   ├── App.css                     # 앱 스타일
│   ├── index.css                   # 전역 스타일
│   └── main.jsx                    # 엔트리 포인트
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 라우팅 구조

- `/onboarding` - 온보딩 페이지
- `/` - 메인 대시보드
- `/timeline` - AI 뉴스 타임라인
- `/assets` - 통합 자산 현황
- `/assets/mydata` - 마이데이터 계좌 연동
- `/settings` - 수면 루틴 설정
- `/analysis` - AI 과거 패턴 분석
- `/analysis/detail` - 과거 패턴 상세 분석
- `/analysis/strategy` - 방어 전략 수립

## 디자인 특징

### 다크 모드
- 전체 UI는 다크 모드로 디자인되었습니다
- 배경: `#101622`
- 주요 색상: `#135bec` (Primary Blue)

### Glass Morphism
- 유리 같은 반투명 효과
- 블러 효과를 통한 깊이감
- 미니멀하고 모던한 디자인

### 반응형 디자인
- 모바일 최적화 (최대 너비: 430px)
- 고정 하단 네비게이션
- 스크롤 가능한 컨텐츠 영역

### 통일된 네비게이션
- 모든 주요 페이지에 공통 네비게이션 바 적용
- 5개 메뉴: 홈, 타임라인, 분석, 자산, 설정
- 현재 페이지 하이라이트

## 브라우저 지원

- Chrome (최신)
- Safari (최신)
- Firefox (최신)
- Edge (최신)

## 라이선스

Private
