# 📡 Koscom Frontend API 서비스 완전 가이드

## 🎯 개요

이 프로젝트는 **목 데이터 모드**로 구성되어 있어, 실제 Backend API를 연결하지 않고도 전체 기능을 테스트할 수 있습니다.

## 🔧 목 데이터 모드 설정

### 1. 목 데이터 모드 ON/OFF

`src/api/types.js` 파일에서 설정:

```javascript
// 목 데이터 사용 (개발 중)
export const USE_MOCK_DATA = true;

// 실제 API 사용 (배포 시)
export const USE_MOCK_DATA = false;
```

### 2. 목 데이터 구조

`src/api/mockData.js`에 모든 목 데이터가 정의되어 있습니다:

- 사용자 정보
- 주식 정보
- 뉴스 및 AI 분석
- 자산 현황
- 계좌 정보
- 과거 패턴 분석
- 방어 전략
- 환율 정보

## 📦 설치된 API 서비스 목록

### 1. authService - 인증 서비스

```javascript
import { authService } from '@/api';

// 회원가입
const result = await authService.signup({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe',
  phoneNumber: '010-1234-5678',
});

// 로그인
const loginResult = await authService.login({
  email: 'user@example.com',
  password: 'password123',
});

// 로그아웃
await authService.logout();

// 로그인 여부 확인
const isLoggedIn = authService.isAuthenticated();
```

### 2. userService - 회원 정보 서비스

```javascript
import { userService } from '@/api';

// 회원 정보 조회
const result = await userService.getMemberInfo(1);

if (result.success) {
  console.log(result.data.name); // "Alex Johnson"
  console.log(result.data.sleepTime); // "23:00"
  console.log(result.data.wakeTime); // "07:00"
}
```

### 3. stockService - 주식 서비스

```javascript
import { stockService } from '@/api';

// 주식 목록 조회
const stocks = await stockService.getStockList({
  page: 0,
  size: 10,
  sector: '반도체',
  market: 'KOSPI',
});

// 주식 상세 정보
const stock = await stockService.getStockDetail(1);

// 실시간 시세
const price = await stockService.getStockPrice('005930');

// 사용자 보유 주식
const userStocks = await stockService.getUserStocks(1);

// 주식 검색
const searchResult = await stockService.searchStocks('삼성');
```

### 4. newsService - 뉴스 서비스

```javascript
import { newsService } from '@/api';

// 뉴스 목록 조회
const news = await newsService.getNewsList({
  page: 0,
  size: 10,
  sort: 'publishedAt,desc',
});

// 뉴스 상세 조회
const newsDetail = await newsService.getNewsDetail(1);

// 분석된 뉴스만 조회
const analyzedNews = await newsService.getAnalyzedNews();
```

### 5. ttsService - TTS 음성 변환 서비스

```javascript
import { ttsService } from '@/api';

// 뉴스 분석을 음성으로 변환
const audio = await ttsService.newsAnalysisToSpeech(123, 'jinho');

// 커스텀 텍스트를 음성으로 변환
const customAudio = await ttsService.textToSpeech({
  text: '안녕하세요, 오늘의 시장 동향을 알려드립니다.',
  speaker: 'jinho',
  speed: 0,
  pitch: 0,
  volume: 0,
});

// 화자 목록 조회
const speakers = await ttsService.getSpeakers();

// 음성 파일 재생
const audioPlayer = ttsService.playAudio('audio_123.mp3');
audioPlayer.play();
```

### 6. assetService - 자산 서비스

```javascript
import { assetService } from '@/api';

// 전체 자산 현황
const assets = await assetService.getTotalAssets(1);

// 지역별 자산 분포
const byRegion = await assetService.getAssetsByRegion(1);

// 자산 유형별 분포
const byType = await assetService.getAssetsByType(1);

// 자산 변동 내역
const history = await assetService.getAssetHistory(1, {
  startDate: '2026-01-01',
  endDate: '2026-02-02',
});
```

### 7. accountService - 계좌 서비스

```javascript
import { accountService } from '@/api';

// 계좌 목록 조회
const accounts = await accountService.getAccounts(1);

// 마이데이터 계좌 연동
const linkResult = await accountService.linkAccount({
  userId: 1,
  accountType: 'SECURITIES',
  institutionCode: 'mirae',
  institutionName: '미래에셋증권',
  accountNumber: '1234-5678',
  authCode: 'AUTH_CODE',
});

// 계좌 연동 해제
await accountService.unlinkAccount(accountId);

// 계좌 잔액 새로고침
const refreshed = await accountService.refreshAccountBalance(accountId);

// 연동 가능한 금융기관 목록
const institutions = await accountService.getAvailableInstitutions('SECURITIES');
```

### 8. analysisService - AI 분석 서비스

```javascript
import { analysisService } from '@/api';

// 어젯밤 뉴스 AI 분석
const overnightAnalysis = await analysisService.getOvernightNewsAnalysis(1);

// 특정 기간 뉴스 분석 요청
const periodAnalysis = await analysisService.analyzeNewsByPeriod({
  userId: 1,
  startTime: '2026-02-01T23:00:00',
  endTime: '2026-02-02T07:00:00',
});

// 뉴스 분석 상세
const analysisDetail = await analysisService.getNewsAnalysisDetail(1);

// 과거 패턴 분석 목록
const patterns = await analysisService.getHistoricalPatterns();

// 과거 패턴 상세
const patternDetail = await analysisService.getHistoricalPatternDetail(1);

// 방어 전략 목록
const strategies = await analysisService.getDefenseStrategies(1);

// 방어 전략 상세
const strategyDetail = await analysisService.getDefenseStrategyDetail(1);

// 현재 시장 위기도
const riskLevel = await analysisService.getMarketRiskLevel();
```

### 9. settingsService - 설정 서비스

```javascript
import { settingsService } from '@/api';

// 사용자 설정 조회
const settings = await settingsService.getUserSettings(1);

// 수면 시간 설정 업데이트
const updated = await settingsService.updateSleepTime({
  userId: 1,
  sleepTime: '23:00',
  wakeTime: '07:00',
  enableWeekendMode: true,
});

// 전체 설정 업데이트
await settingsService.updateUserSettings(1, {
  enableNotifications: true,
  notificationSound: true,
  preferredLanguage: 'ko',
});

// 알림 설정 업데이트
await settingsService.updateNotificationSettings({
  userId: 1,
  enableNotifications: true,
  notificationSound: true,
});

// 공백 시간 계산 (유틸리티 함수)
const gapTime = settingsService.calculateGapTime('23:00', '07:00');
console.log(gapTime.formatted); // "8시간 0분"
```

### 10. exchangeRateService - 환율 서비스

```javascript
import { exchangeRateService } from '@/api';

// 전체 환율 정보
const rates = await exchangeRateService.getExchangeRates();

// 특정 통화 환율
const usdRate = await exchangeRateService.getExchangeRate('USD');

// 환율 변환 계산 (유틸리티 함수)
const converted = exchangeRateService.convertCurrency(1000, 'USD', 'KRW');
console.log(converted.convertedAmount); // 1,320,500
```

### 11. reportService - 리포트 서비스

```javascript
import { reportService } from '@/api';

// 리포트 목록 조회
const reports = await reportService.getReports(1, {
  reportType: 'OVERNIGHT',
});

// 최신 리포트
const latest = await reportService.getLatestReport(1);

// 어젯밤 리포트
const overnight = await reportService.getOvernightReport(1);

// 리포트 생성 요청
const newReport = await reportService.generateReport({
  userId: 1,
  reportType: 'OVERNIGHT',
  startTime: '2026-02-01T23:00:00',
  endTime: '2026-02-02T07:00:00',
});
```

## 🎨 컴포넌트에서 사용 예시

### 예시 1: MorningDashboard 컴포넌트

```javascript
import { useState, useEffect } from 'react';
import { userService, assetService, newsService } from '../api';

function MorningDashboard() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [assets, setAssets] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // 병렬로 데이터 요청
      const [memberResult, assetResult, newsResult] = await Promise.all([
        userService.getMemberInfo(1),
        assetService.getTotalAssets(1),
        newsService.getAnalyzedNews({ size: 5 }),
      ]);

      if (memberResult.success) setMemberInfo(memberResult.data);
      if (assetResult.success) setAssets(assetResult.data);
      if (newsResult.success) setNews(newsResult.data.content);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>좋은 아침입니다, {memberInfo?.name}님</h1>
      <p>총 자산: {assets?.totalBalance?.toLocaleString()}원</p>
      <p>오늘 수익: {assets?.todayProfit?.toLocaleString()}원</p>

      <h2>어젯밤 주요 뉴스</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MorningDashboard;
```

### 예시 2: AINewsTimeline 컴포넌트

```javascript
import { useState, useEffect } from 'react';
import { analysisService, ttsService } from '../api';

function AINewsTimeline() {
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyses = async () => {
      const result = await analysisService.getOvernightNewsAnalysis(1);

      if (result.success) {
        setAnalyses(result.data);
      }

      setLoading(false);
    };

    fetchAnalyses();
  }, []);

  const handlePlayAudio = async (analysisId) => {
    const result = await ttsService.newsAnalysisToSpeech(analysisId, 'jinho');

    if (result.success) {
      const audio = ttsService.playAudio(result.data.filename);
      audio.play();
    }
  };

  return (
    <div>
      <h1>AI 뉴스 타임라인</h1>
      {analyses.map((analysis) => (
        <div key={analysis.id}>
          <h3>{analysis.newsTitle}</h3>
          <p>{analysis.summary}</p>
          <button onClick={() => handlePlayAudio(analysis.id)}>
            🔊 음성으로 듣기
          </button>
        </div>
      ))}
    </div>
  );
}

export default AINewsTimeline;
```

### 예시 3: MydataAccountIntegration 컴포넌트

```javascript
import { useState, useEffect } from 'react';
import { accountService } from '../api';

function MydataAccountIntegration() {
  const [accounts, setAccounts] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [selectedType, setSelectedType] = useState('SECURITIES');

  useEffect(() => {
    fetchAccounts();
    fetchInstitutions('SECURITIES');
  }, []);

  const fetchAccounts = async () => {
    const result = await accountService.getAccounts(1);
    if (result.success) setAccounts(result.data);
  };

  const fetchInstitutions = async (type) => {
    const result = await accountService.getAvailableInstitutions(type);
    if (result.success) setInstitutions(result.data);
  };

  const handleLink = async (institutionCode, institutionName) => {
    const result = await accountService.linkAccount({
      userId: 1,
      accountType: selectedType,
      institutionCode,
      institutionName,
      accountNumber: '1234-5678',
      authCode: 'MOCK_AUTH_CODE',
    });

    if (result.success) {
      alert('계좌가 연동되었습니다!');
      fetchAccounts();
    }
  };

  return (
    <div>
      <h1>마이데이터 계좌 연동</h1>

      <h2>연동된 계좌</h2>
      {accounts.map((account) => (
        <div key={account.id}>
          <p>{account.institutionName}</p>
          <p>{account.accountNumber}</p>
          <p>{account.balance?.toLocaleString()}원</p>
        </div>
      ))}

      <h2>계좌 연동하기</h2>
      <select value={selectedType} onChange={(e) => {
        setSelectedType(e.target.value);
        fetchInstitutions(e.target.value);
      }}>
        <option value="SECURITIES">증권사</option>
        <option value="BANK">은행</option>
        <option value="CRYPTO">가상자산</option>
      </select>

      {institutions.map((inst) => (
        <button key={inst.code} onClick={() => handleLink(inst.code, inst.name)}>
          {inst.name} 연동
        </button>
      ))}
    </div>
  );
}

export default MydataAccountIntegration;
```

## 🔄 실제 API로 전환하는 방법

### 1단계: types.js 수정

```javascript
// src/api/types.js
export const USE_MOCK_DATA = false; // true → false로 변경
```

### 2단계: 환경 변수 설정

```env
# .env
VITE_API_BASE_URL=http://221.168.36.171:8080
VITE_DEFAULT_MEMBER_ID=1
```

### 3단계: 서버 재시작

```bash
npm run dev
```

이제 실제 Backend API가 호출됩니다!

## 📊 API 응답 구조

모든 API는 통일된 응답 구조를 사용합니다:

```javascript
// 성공 응답
{
  success: true,
  data: { /* 실제 데이터 */ },
}

// 실패 응답
{
  success: false,
  error: {
    code: 'ERROR_CODE',
    message: '에러 메시지',
  },
}
```

## 🎯 주요 특징

1. **목 데이터 모드**: 실제 API 없이도 전체 기능 테스트 가능
2. **통일된 인터페이스**: 모든 서비스가 동일한 패턴 사용
3. **타입 안전성**: API 엔드포인트와 응답 구조 명시
4. **에러 핸들링**: 통일된 에러 처리 방식
5. **로깅**: 개발 중 API 호출 내역 콘솔에 출력
6. **전환 용이성**: 목 데이터 → 실제 API로 쉽게 전환

## 🚀 다음 단계

1. **목 데이터로 개발 완료**
2. **Backend API 준비 완료 시**
3. **`USE_MOCK_DATA = false`로 변경**
4. **실제 API 테스트**
5. **배포**

## 📞 문의

API 관련 문제가 있으면 프로젝트 이슈에 등록해주세요.
