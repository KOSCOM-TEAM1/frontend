/**
 * 목 데이터 중앙 관리
 * 실제 API 연결 전에 사용하는 테스트 데이터
 */

// 사용자 정보 목 데이터 (여성 - 최지원)
export const mockUser = {
  id: 1,
  name: "최지원",
  email: "jiwon@example.com",
  profileImage: "/profile.jpg",
  phoneNumber: "010-1234-5678",
  createdAt: "2024-01-15T09:00:00",
};

// 사용자 설정 목 데이터
export const mockUserSettings = {
  id: 1,
  userId: 1,
  sleepTime: "23:00",
  wakeTime: "07:00",
  enableWeekendMode: true,
  enableNotifications: true,
  notificationSound: true,
  preferredLanguage: "ko",
  timezone: "Asia/Seoul",
};

// 사용자 보유 주식 목 데이터
export const mockUserStocks = [
  {
    id: 1,
    userId: 1,
    stockId: 1,
    stockCode: "005930",
    stockName: "삼성전자",
    quantity: 50,
    averagePrice: 75000,
    currentPrice: 78500,
    sector: "반도체",
    market: "KOSPI",
  },
  {
    id: 2,
    userId: 1,
    stockId: 2,
    stockCode: "000660",
    stockName: "SK하이닉스",
    quantity: 30,
    averagePrice: 145000,
    currentPrice: 152000,
    sector: "반도체",
    market: "KOSPI",
  },
  {
    id: 3,
    userId: 1,
    stockId: 3,
    stockCode: "035420",
    stockName: "NAVER",
    quantity: 20,
    averagePrice: 210000,
    currentPrice: 218000,
    sector: "IT/인터넷",
    market: "KOSPI",
  },
  {
    id: 4,
    userId: 1,
    stockId: 4,
    stockCode: "035720",
    stockName: "카카오",
    quantity: 40,
    averagePrice: 55000,
    currentPrice: 58000,
    sector: "IT/인터넷",
    market: "KOSPI",
  },
];

// 주식 정보 목 데이터
export const mockStocks = [
  {
    id: 1,
    code: "005930",
    name: "삼성전자",
    sector: "반도체",
    market: "KOSPI",
    currentPrice: 78500,
    changeRate: 2.5,
    changeAmount: 1500,
    volume: 15234567,
    marketCap: "467조",
  },
  {
    id: 2,
    code: "000660",
    name: "SK하이닉스",
    sector: "반도체",
    market: "KOSPI",
    currentPrice: 152000,
    changeRate: 3.2,
    changeAmount: 4000,
    volume: 3456789,
    marketCap: "110조",
  },
  {
    id: 3,
    code: "035420",
    name: "NAVER",
    sector: "IT/인터넷",
    market: "KOSPI",
    currentPrice: 218000,
    changeRate: -1.5,
    changeAmount: -3000,
    volume: 876543,
    marketCap: "35조",
  },
  {
    id: 4,
    code: "035720",
    name: "카카오",
    sector: "IT/인터넷",
    market: "KOSPI",
    currentPrice: 58000,
    changeRate: 1.8,
    changeAmount: 1000,
    volume: 2345678,
    marketCap: "25조",
  },
];

// 계좌 정보 목 데이터
export const mockAccounts = [
  {
    id: 1,
    userId: 1,
    accountType: "SECURITIES",
    institutionName: "미래에셋증권",
    accountNumber: "****1234",
    balance: 15250000,
    currency: "KRW",
    isLinked: true,
    linkedAt: "2024-01-20T10:30:00",
  },
  {
    id: 2,
    userId: 1,
    accountType: "SECURITIES",
    institutionName: "키움증권",
    accountNumber: "****5678",
    balance: 8500000,
    currency: "KRW",
    isLinked: true,
    linkedAt: "2024-02-01T14:20:00",
  },
  {
    id: 3,
    userId: 1,
    accountType: "BANK",
    institutionName: "신한은행",
    accountNumber: "****9012",
    balance: 5000000,
    currency: "KRW",
    isLinked: true,
    linkedAt: "2024-01-15T09:00:00",
  },
  {
    id: 4,
    userId: 1,
    accountType: "CRYPTO",
    institutionName: "업비트",
    accountNumber: "****3456",
    balance: 3200000,
    currency: "KRW",
    isLinked: true,
    linkedAt: "2024-01-25T16:45:00",
  },
];

// 자산 현황 목 데이터
export const mockAssets = {
  totalBalance: 31950000, // 총 자산
  stockValue: 23750000, // 주식 평가액
  cashBalance: 5000000, // 현금
  cryptoValue: 3200000, // 가상자산
  todayProfit: 520000, // 오늘 수익
  todayProfitRate: 1.65, // 오늘 수익률
  totalProfit: 2450000, // 총 수익
  totalProfitRate: 8.3, // 총 수익률
  
  // 지역별 자산 분포
  assetsByRegion: [
    { region: "국내", value: 28750000, percentage: 90 },
    { region: "해외", value: 3200000, percentage: 10 },
  ],
  
  // 자산 유형별 분포
  assetsByType: [
    { type: "주식", value: 23750000, percentage: 74.3 },
    { type: "현금", value: 5000000, percentage: 15.6 },
    { type: "가상자산", value: 3200000, percentage: 10.1 },
  ],
};

// 뉴스 목 데이터
export const mockNews = [
  {
    id: 1,
    title: "삼성전자, 3나노 공정 신규 반도체 공장 건설 발표",
    content: "삼성전자가 경기도 평택에 20조 원 규모의 3나노 공정 반도체 공장을 건설한다고 발표했습니다. 이번 투자로 국내 반도체 산업 경쟁력이 크게 강화될 것으로 전망됩니다.",
    source: "한국경제",
    url: "https://example.com/news/1",
    publishedAt: "2026-02-02T02:30:00",
    relatedStockIds: "1,2",
    isAnalyzed: true,
    createdAt: "2026-02-02T02:35:00",
  },
  {
    id: 2,
    title: "NAVER, AI 챗봇 서비스 글로벌 확장 계획 공개",
    content: "NAVER가 자체 개발한 AI 챗봇 서비스를 동남아시아 시장에 본격 출시합니다. 현지화된 언어 모델과 검색 기술을 결합하여 시장 선점을 노립니다.",
    source: "전자신문",
    url: "https://example.com/news/2",
    publishedAt: "2026-02-02T01:15:00",
    relatedStockIds: "3",
    isAnalyzed: true,
    createdAt: "2026-02-02T01:20:00",
  },
  {
    id: 3,
    title: "미국 연준, 금리 0.25%p 인하 결정",
    content: "미국 연방준비제도(Fed)가 기준금리를 0.25%p 인하하기로 결정했습니다. 이는 글로벌 경기 둔화 우려에 대응하기 위한 조치로 해석됩니다.",
    source: "연합뉴스",
    url: "https://example.com/news/3",
    publishedAt: "2026-02-02T00:30:00",
    relatedStockIds: "1,2,3,4",
    isAnalyzed: true,
    createdAt: "2026-02-02T00:35:00",
  },
  {
    id: 4,
    title: "카카오, 모빌리티 사업 강화로 해외 진출 박차",
    content: "카카오가 모빌리티 사업을 핵심 성장 동력으로 삼고 동남아 시장 진출을 가속화합니다. 인도네시아와 베트남에서 현지 파트너십을 체결했습니다.",
    source: "조선비즈",
    url: "https://example.com/news/4",
    publishedAt: "2026-02-01T23:45:00",
    relatedStockIds: "4",
    isAnalyzed: true,
    createdAt: "2026-02-01T23:50:00",
  },
];

// AI 뉴스 분석 목 데이터
export const mockNewsAnalysis = [
  {
    id: 1,
    newsId: 1,
    userId: 1,
    summary: "삼성전자가 20조 원 규모의 3나노 공정 반도체 공장을 평택에 건설합니다. 이는 글로벌 반도체 경쟁에서 기술 우위를 확보하기 위한 대규모 투자입니다. 공장은 2027년 완공 예정이며, 약 5,000명의 고용 창출 효과가 기대됩니다.",
    impactAnalysis: "보유 중인 삼성전자 주식에 긍정적 영향이 예상됩니다. 대규모 설비 투자는 장기적으로 기술 경쟁력을 강화하고 시장 점유율 확대로 이어질 가능성이 높습니다. 단기적으로는 투자 부담으로 인한 실적 압박이 있을 수 있으나, 중장기적으로는 주가 상승 요인으로 작용할 것입니다. SK하이닉스도 반도체 섹터 전반의 긍정적 분위기로 수혜를 받을 수 있습니다.",
    similarCases: "2018년 삼성전자의 평택 2공장 건설 발표 당시, 초기 6개월간 주가가 약 15% 상승했습니다. 대규모 설비 투자는 시장에 기술 리더십을 확인시켜주는 신호로 작용하며, 투자자들의 긍정적 반응을 이끌어냈습니다. 다만 글로벌 반도체 수요 사이클에 따라 주가 변동성이 있을 수 있습니다.",
    similarNewsIds: "5,12,23",
    aiModel: "gpt-4",
    confidenceScore: 0.88,
    analyzedAt: "2026-02-02T02:40:00",
    createdAt: "2026-02-02T02:40:00",
  },
  {
    id: 2,
    newsId: 2,
    userId: 1,
    summary: "NAVER가 AI 챗봇 서비스를 동남아시아 시장에 출시합니다. 현지화된 언어 모델과 검색 기술을 결합하여 구글과 경쟁합니다. 베트남, 태국, 인도네시아 시장을 우선 타깃으로 설정했습니다.",
    impactAnalysis: "보유 중인 NAVER 주식에 긍정적 영향이 예상됩니다. AI 기술 기반의 글로벌 확장은 새로운 성장 동력을 확보하는 전략입니다. 동남아 시장은 인구 6억 명 이상의 거대 시장으로, 성공적인 진출 시 매출 다각화와 기업 가치 상승이 기대됩니다. 단기적으로는 마케팅 비용 증가가 있을 수 있으나, 중장기적으로는 긍정적입니다.",
    similarCases: "2020년 NAVER의 일본 라인(LINE) 합병 발표 당시, 글로벌 확장 기대감으로 주가가 3개월간 25% 상승했습니다. 해외 시장 진출은 투자자들에게 성장 가능성을 보여주는 중요한 지표입니다.",
    similarNewsIds: "8,15,29",
    aiModel: "gpt-4",
    confidenceScore: 0.82,
    analyzedAt: "2026-02-02T01:25:00",
    createdAt: "2026-02-02T01:25:00",
  },
  {
    id: 3,
    newsId: 3,
    userId: 1,
    summary: "미국 연준이 기준금리를 0.25%p 인하했습니다. 이는 5개월 만의 금리 인하이며, 글로벌 경기 둔화 우려에 대응하기 위한 조치입니다. 파월 의장은 추가 완화 정책 가능성을 시사했습니다.",
    impactAnalysis: "금리 인하는 전반적으로 주식 시장에 긍정적입니다. 보유 중인 모든 종목(삼성전자, SK하이닉스, NAVER, 카카오)에 긍정적 영향이 예상됩니다. 금리 인하는 기업의 자금 조달 비용을 낮추고 투자 심리를 개선시킵니다. 특히 IT/인터넷 섹터는 성장주 특성상 금리 인하에 더욱 민감하게 반응하는 경향이 있습니다. NAVER와 카카오의 상승폭이 클 수 있습니다.",
    similarCases: "2020년 코로나19 대응 긴급 금리 인하 당시, KOSPI 지수가 3개월간 35% 급등했습니다. 금리 인하는 유동성 확대로 이어지며, 주식 시장의 강력한 상승 모멘텀을 제공합니다. 다만 경기 침체가 심화될 경우 효과가 제한적일 수 있습니다.",
    similarNewsIds: "11,18,24,31",
    aiModel: "gpt-4",
    confidenceScore: 0.91,
    analyzedAt: "2026-02-02T00:40:00",
    createdAt: "2026-02-02T00:40:00",
  },
];

// 과거 패턴 분석 목 데이터
export const mockHistoricalPatterns = [
  {
    id: 1,
    eventName: "2008년 글로벌 금융위기",
    eventDate: "2008-09-15",
    similarity: 78,
    marketImpact: "KOSPI 지수 52% 하락 (1,800 → 900)",
    duration: "18개월",
    recovery: "36개월",
    description: "리먼 브라더스 파산으로 촉발된 글로벌 금융위기. 금융 시스템 붕괴와 신용경색으로 전 세계 증시가 폭락했습니다.",
    keyFactors: [
      "서브프라임 모기지 부실",
      "금융기관 파산",
      "신용경색",
      "실물경제 위축"
    ],
    currentSituation: "현재 시장 변동성 확대와 금융 불안 징후 감지",
    recommendation: "방어적 포트폴리오 구성 권장",
  },
  {
    id: 2,
    eventName: "2020년 코로나19 팬데믹",
    eventDate: "2020-03-19",
    similarity: 65,
    marketImpact: "KOSPI 지수 35% 하락 (2,200 → 1,450)",
    duration: "2개월",
    recovery: "5개월",
    description: "코로나19 팬데믹으로 인한 전 세계 경제 봉쇄. 공급망 차질과 소비 급감으로 증시가 급락했으나, 각국의 대규모 부양책으로 빠른 회복.",
    keyFactors: [
      "팬데믹 확산",
      "경제 봉쇄",
      "공급망 차질",
      "정부 부양책"
    ],
    currentSituation: "현재 글로벌 공급망 재편 진행 중",
    recommendation: "언택트 및 헬스케어 섹터 주목",
  },
  {
    id: 3,
    eventName: "2011년 유럽 재정위기",
    eventDate: "2011-08-08",
    eventDate: "2011-08-08",
    similarity: 52,
    marketImpact: "KOSPI 지수 28% 하락 (2,200 → 1,700)",
    duration: "6개월",
    recovery: "14개월",
    description: "그리스, 스페인 등 남유럽 국가들의 재정위기. 유로존 붕괴 우려로 글로벌 증시 하락.",
    keyFactors: [
      "국가 부채 위기",
      "신용등급 강등",
      "유로존 불안",
      "긴축정책"
    ],
    currentSituation: "현재 주요 선진국 국가부채 증가 추세",
    recommendation: "안전자산 비중 확대 검토",
  },
];

// 방어 전략 목 데이터
export const mockDefenseStrategies = [
  {
    id: 1,
    strategyName: "인버스 ETF 투자",
    type: "INVERSE_ETF",
    score: 85,
    riskLevel: "중",
    expectedReturn: "시장 하락 시 5-15% 수익",
    description: "시장이 하락할 때 수익을 내는 인버스 ETF에 투자하여 포트폴리오를 방어합니다.",
    advantages: [
      "시장 하락 시 수익 가능",
      "별도 매도 없이 헤지 가능",
      "유동성이 높아 거래 용이"
    ],
    disadvantages: [
      "장기 보유 시 손실 가능",
      "시장이 상승하면 손실",
      "추적오차 발생 가능"
    ],
    recommendedProducts: [
      "KODEX 인버스",
      "TIGER 인버스",
      "KINDEX 인버스"
    ],
    allocationPercentage: 15,
  },
  {
    id: 2,
    strategyName: "안전자산 전환",
    type: "SAFE_ASSET",
    score: 92,
    riskLevel: "낮음",
    expectedReturn: "원금 보전 + 3-5% 이자",
    description: "주식 비중을 줄이고 국채, 금, 달러 등 안전자산으로 전환합니다.",
    advantages: [
      "원금 보전 가능",
      "변동성 최소화",
      "심리적 안정감"
    ],
    disadvantages: [
      "낮은 수익률",
      "기회비용 발생",
      "인플레이션 리스크"
    ],
    recommendedProducts: [
      "국고채 3년물",
      "금 ETF (KODEX 골드선물)",
      "달러 통화 ETF"
    ],
    allocationPercentage: 30,
  },
  {
    id: 3,
    strategyName: "손절가 설정",
    type: "STOP_LOSS",
    score: 78,
    riskLevel: "중",
    expectedReturn: "손실 최소화 (최대 -10%)",
    description: "보유 종목별로 손절가를 설정하여 손실을 제한합니다.",
    advantages: [
      "손실 한도 명확",
      "감정적 판단 배제",
      "리스크 관리 용이"
    ],
    disadvantages: [
      "단기 변동성에 매도 가능",
      "재진입 타이밍 어려움",
      "거래 비용 발생"
    ],
    recommendedProducts: [
      "삼성전자 손절가: 70,000원",
      "SK하이닉스 손절가: 135,000원",
      "NAVER 손절가: 195,000원"
    ],
    allocationPercentage: 0, // 비중이 아닌 손절 기준
  },
  {
    id: 4,
    strategyName: "배당주 전환",
    type: "DIVIDEND_STOCK",
    score: 70,
    riskLevel: "낮음",
    expectedReturn: "배당수익 4-6% + 주가 안정",
    description: "변동성이 낮고 배당수익률이 높은 우량 배당주로 전환합니다.",
    advantages: [
      "안정적 배당 수익",
      "주가 변동성 낮음",
      "장기 투자에 유리"
    ],
    disadvantages: [
      "주가 상승폭 제한적",
      "성장성 낮음",
      "배당 감소 리스크"
    ],
    recommendedProducts: [
      "SK텔레콤 (배당률 5.2%)",
      "KT&G (배당률 6.1%)",
      "한국전력 (배당률 4.8%)"
    ],
    allocationPercentage: 25,
  },
];

// 환율 정보 목 데이터
export const mockExchangeRates = [
  {
    id: 1,
    currency: "USD",
    currencyName: "미국 달러",
    exchangeRate: 1320.50,
    changeRate: 0.8,
    changeAmount: 10.50,
    updatedAt: "2026-02-02T09:00:00",
  },
  {
    id: 2,
    currency: "JPY",
    currencyName: "일본 엔",
    exchangeRate: 885.30,
    changeRate: -0.3,
    changeAmount: -2.70,
    updatedAt: "2026-02-02T09:00:00",
  },
  {
    id: 3,
    currency: "EUR",
    currencyName: "유로",
    exchangeRate: 1425.80,
    changeRate: 0.5,
    changeAmount: 7.10,
    updatedAt: "2026-02-02T09:00:00",
  },
  {
    id: 4,
    currency: "CNY",
    currencyName: "중국 위안",
    exchangeRate: 181.20,
    changeRate: 0.2,
    changeAmount: 0.36,
    updatedAt: "2026-02-02T09:00:00",
  },
];

// 리포트 목 데이터
export const mockReports = [
  {
    id: 1,
    userId: 1,
    reportType: "OVERNIGHT",
    title: "2026년 2월 2일 아침 리포트",
    content: "어젯밤 주요 뉴스: 삼성전자 신규 공장 건설, 미국 금리 인하 등",
    generatedAt: "2026-02-02T07:00:00",
    sleepStartTime: "2026-02-01T23:00:00",
    sleepEndTime: "2026-02-02T07:00:00",
    totalNewsCount: 4,
    importantNewsCount: 3,
  },
];
