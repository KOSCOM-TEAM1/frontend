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

// 대시보드 API 응답 형태 목데이터 (API 연동처럼 사용)
export const dashboardMockResponse = {
  marketIndices: [
    { id: "kospi", label: "코스피 지수", value: "5,117.45", change: "+3.39%", positive: true, icon: "show_chart" },
    { id: "usdkrw", label: "USD/KRW", value: "1,448.40", change: "-0.35%", positive: false, icon: "currency_exchange" },
  ],
  overnightItems: [
    { id: "kospi", icon: "show_chart", label: "코스피", change: "+3.39%", positive: true },
    { id: "usdkrw", icon: "currency_exchange", label: "USD/KRW", change: "-0.35%", positive: false },
    { id: "overseas", icon: "language", label: "해외", change: "+2.50%", positive: true },
    { id: "domestic", icon: "account_balance", label: "국내", change: "-0.85%", positive: false },
    { id: "total", icon: "account_balance_wallet", label: "총자산", change: "+0.37%", positive: true },
  ],
  regionSummary: [
    { type: "overseas", label: "해외주식", trend: "up", changeText: "+₩235,000 (+2.50%)", balance: "₩9,380,000", chartHeights: [28, 42, 35, 52, 48, 58, 65, 72, 82, 100] },
    { type: "domestic", label: "국내 주식", trend: "down", changeText: "-₩140,000 (-0.85%)", balance: "₩16,449,000", chartHeights: [100, 88, 94, 82, 86, 78, 82, 74, 70, 65] },
  ],
  totalAsset: { changeText: "+₩95,000 (+0.37%)", balance: "₩25,829,000", chartHeights: [22, 35, 28, 42, 38, 52, 58, 72, 88, 100] },
  holdings: {
    overseas: [
      { icon: "data_object", name: "NVIDIA", subName: "엔비디아", price: "$951.25", change: "+1.50%", positive: true },
      { icon: "directions_car", name: "Tesla", subName: "테슬라", price: "$5,090.04", change: "+2.50%", positive: true },
      { icon: "movie", name: "Netflix", subName: "넷플릭스", price: "$415.95", change: "+3.50%", positive: true },
    ],
    domestic: [
      { icon: "precision_manufacturing", name: "삼성전자", subName: "Samsung Electronics Co", price: "₩1,283,600", change: "-3.00%", positive: false },
      { icon: "memory", name: "SK하이닉스", subName: "SK Hynix", price: "₩9,876,000", change: "-2.00%", positive: false },
      { icon: "public", name: "네이버", subName: "NAVER", price: "₩1,686,000", change: "+1.78%", positive: true },
      { icon: "restaurant", name: "삼양식품", subName: "Samyang Foods", price: "₩3,603,000", change: "+1.83%", positive: true },
    ],
  },
};

/** API처럼 대시보드 데이터 조회 (목데이터, 지연 시뮬레이션) */
export const fetchDashboardData = () =>
  new Promise((resolve) => setTimeout(() => resolve(dashboardMockResponse), 400));

// --- 타임라인(뉴스) API 형태 목데이터 ---
export const timelineMockResponse = {
  dateLabel: "오늘, 2월 4일",
  newsItems: [
    { time: "오전 12:20", impact: "high", impactText: "높은 영향", title: "젠슨 황·머스크 \"메모리 확보 비상\"…삼성전자 사상 최고가 경신", summary: "메모리 공급난이 2027년까지 지속될 전망이다. 젠슨 황 엔비디아 CEO와 일론 머스크가 잇달아 '메모리 병목'을 우려할 만큼 공급난이 심화되고 있다. 모건스탠리는 삼성전자와 SK하이닉스의 내년 합산 영업이익을 542조 원으로 전망하며 지난해 대비 6배 급증을 예상했다. 빅테크 AI 인프라 764조 투입, 코스피 6.84% 급등 사상 최고, HBM 이후 HBF 시대 개막이 겹치며 반도체 투톱 주가가 강세를 이어가고 있다.", tags: ["#삼성전자", "#SK하이닉스", "#메모리", "#HBM"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkFcQP7j2bdoBfd1A6bsKtUnmzQQEe92iF0Urqi8lr_P7uE9AlDgnhXd1hSkYEE7k6Cd2PsLpBaS_d5TS6VDJKMxKHpq7Z_AH2NbNtO1q46LvVjF4M-myhJjzKLERF65bpeGV8EMvGaAQOEc3kw9PdJnGFF5t1Ey9lpqgD6dkPzvGSVv-V9W-S0o1BKkfGvw5-1EOHzDtazUV21FATgTTNbWyz_jLg-YDgy_vqztSHN_VAUFUEV98r3noywNHTxOeJqT-mkoY579A", active: true, hasButton: true },
    { time: "오전 2:15", impact: "high", impactText: "높은 영향", title: "JP모건 \"코스피 6000 간다…강세장 땐 7500 가능\"", summary: "글로벌 IB JP모건이 코스피 목표치로 6000을 제시하며 강세장에선 7500까지 상승할 수 있다고 전망했다. 전망의 핵심은 삼성전자와 SK하이닉스 실적이다. 메모리 반도체 슈퍼사이클에 힘입어 올해 EPS 전망치가 컨센서스 대비 최대 40% 오를 것으로 내다봤으며, 반도체 투톱 주가가 현재 대비 45~50% 추가 상승 여력이 있다고 평가했다. 지배구조 개혁 정책도 긍정적 영향을 미칠 것으로 예상했다.", tags: ["#코스피", "#JP모건", "#삼성전자", "#SK하이닉스"], active: false, hasButton: false },
    { time: "오전 4:30", impact: "medium", impactText: "중간 영향", title: "[특징주] 상장폐지 모면한 파두, 거래 재개 첫날 상한가", summary: "상장폐지 위기를 넘긴 반도체 설계업체 파두가 거래 재개 첫날 상한가로 치솟았다. 3일 오전 9시27분 기준 파두는 전 거래일 대비 6350원(29.88%) 뛴 2만7600원에 거래됐다. 한국거래소는 전날 파두를 상장적격성 실질심사 대상에서 제외하기로 했다고 공시했다. 파두는 거래 재개와 함께 남이현 단독 대표 체제로 경영 체제를 전환했다.", tags: ["#파두", "#상한가", "#코스닥"], active: false, hasButton: false },
    { time: "오전 6:45", impact: "medium", impactText: "중간 영향", title: "美 암호화폐, '은행·거래소·의회·백악관' 전쟁터 되다 [천조국 크립토]", summary: "스테이블코인 보유자에게 지급되는 '이자' 성격의 보상을 둘러싸고 미국 시장이 충돌 국면이다. JP모건·BoA 등 금융권은 보상형 스테이블코인이 사실상 무허가 예금이라 비판하고, 코인베이스·서클 등 업계는 디지털 혁신의 정수로 맞선다. SEC와 CFTC의 규제 주도권 다툼, 의회 입법 교착 속 트럼프 행정부가 행정명령을 통한 우회로를 모색하고 있다.", tags: ["#암호화폐", "#스테이블코인", "#미국규제"], active: false, hasButton: false },
  ],
};
export const fetchTimelineData = () => new Promise((r) => setTimeout(() => r(timelineMockResponse), 300));

// --- 통합 자산 현황 API 형태 목데이터 ---
export const assetsMockResponse = {
  totalAsset: { changeText: "+₩95,000 (+0.37%)", balance: "₩25,829,000" },
  domestic: { label: "국내 주식", changeText: "-₩140,000 (-0.85%)", balance: "₩16,449,000", totalLabel: "국내 총액", totalShort: "₩16.4M", accounts: [{ id: "savings", name: "종합 위탁 계좌", amount: "₩10.2M", pct: "61.7%", color: "sky" }, { id: "cma", name: "CMA 파킹 계좌", amount: "₩6.3M", pct: "38.3%", color: "emerald" }] },
  foreign: { label: "해외 주식", changeText: "+₩235,000 (+2.50%)", balance: "₩9,380,000", totalLabel: "해외 총액", totalShort: "₩9.4M", accounts: [{ id: "us", name: "미국 주식 일반", amount: "₩6.6M", pct: "70%", color: "sky" }, { id: "isa", name: "미국 ISA 계좌", amount: "₩2.3M", pct: "25%", color: "violet" }, { id: "cash", name: "외화 예수금", amount: "₩0.5M", pct: "5%", color: "amber" }] },
  exchangeRate: { value: "1,448.40", change: "-0.35%", positive: false },
};
export const fetchAssetsData = () => new Promise((r) => setTimeout(() => r(assetsMockResponse), 350));

// --- 수면 루틴 설정 API 형태 목데이터 ---
export const sleepSettingsMockResponse = {
  initialBedtime: { hour: 22, minute: 30 },
  initialWake: { hour: 6, minute: 30 },
  settingsHistory: [
    { date: "1/25", bedtime: "23:00", wakeTime: "07:00" },
    { date: "1/26", bedtime: "23:30", wakeTime: "07:30" },
    { date: "1/27", bedtime: "23:00", wakeTime: "07:00" },
    { date: "1/28", bedtime: "22:30", wakeTime: "06:30" },
    { date: "1/29", bedtime: "22:30", wakeTime: "06:30" },
    { date: "1/30", bedtime: "22:30", wakeTime: "06:30" },
    { date: "1/31", bedtime: "22:30", wakeTime: "06:30" },
  ],
};
export const fetchSleepSettingsData = () => new Promise((r) => setTimeout(() => r(sleepSettingsMockResponse), 300));

// --- 과거 패턴 분석 API 형태 목데이터 (HBM 쇼티지 메인) ---
export const analysisMockResponse = {
  hero: { badge: "과거 사례", similarity: "87%", title: "2023~2024 | HBM 쇼티지 공식화", subtitle: "\"HBM 없이는 AI도 없다\" — AI 경쟁의 병목이 GPU에서 메모리로 이동한 순간", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckHQKWafDEShJpEgEhJK9pKgY3Zlhy2EYRWxl5c16AO1JnOGi4iHa1zDFuCT4oqF1Z6cp8BlaYWiH2zdJuc2Ws6PHGH0wTk0HrA9V34ZenIRA1ifdVhiVCFWtOuQN8O2E4j7sslq4e4uGWbQZaAu6qBRWBqls5sr0qCb7TdRXBKnjhBQ1l-RB6teXMW6Iay3fpX89lOoosNxiM59hziu7qoWP85F_vQNIhaExGrh1tjzgs5glabcLqOeq5kjAnjbgSHb-ZEcQ_eA" },
  analysisText: "젠슨 황 엔비디아 CEO가 \"HBM 없이는 AI 가속기 생산 불가능\"이라고 공개 언급한 2023~2024년은 AI 인프라 확장 속도가 메모리 공급을 처음으로 앞지른 전환점입니다. 당시 SK하이닉스는 HBM 시장 독점적 지위를 확보했고, 삼성전자는 HBM 경쟁 본격 재진입을 선언했습니다. 지금 뉴스(젠슨 황·머스크 동시 경고, HBF 시대)는 그때의 '경고'가 '현실'이 된 상황입니다.",
  similarityPercent: 87,
  trendLabel: "Trend Comparison",
  marketReactionText: "HBM 쇼티지 공식화 이후 메모리 업체 실적 전망이 급변했고, 증권사 리포트 논조가 \"AI 수혜 = 반도체 → 메모리\"로 이동했습니다. SK하이닉스·삼성전자 등 HBM 공급사 주가가 AI 인프라 테마와 강하게 연동되기 시작한 시점입니다.",
  marketReactionTags: ["주가 상승", "공급망 수혜", "메모리 재평가"],
  similarEvents: [
    { id: "capex", year: "24'", title: "2024 | 빅테크 AI CAPEX 폭증 선언", desc: "유사도 72% · GPU→네트워크→메모리 병목 리스크 공식화", colorClass: "purple" },
    { id: "supercycle", year: "25'", title: "2025 | 투자은행의 메모리 슈퍼사이클 선언", desc: "유사도 68% · HBM 구조적 성장·LTA 증가", colorClass: "amber" },
  ],
};
export const fetchAnalysisData = () => new Promise((r) => setTimeout(() => r(analysisMockResponse), 300));

// --- 과거 패턴 상세 API 형태 목데이터 (HBM 쇼티지 상세) ---
export const analysisDetailMockResponse = {
  title: "2023~2024 HBM 쇼티지 공식화",
  subtitle: "AI 인프라 병목 선언",
  hero: { badge: "과거 사례", similarity: "87%", title: "HBM 쇼티지 공식화 (AI 인프라 병목 선언)", desc: "젠슨 황 · NVIDIA가 HBM을 GPU보다 먼저 확보해야 한다고 공식 언급", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckHQKWafDEShJpEgEhJK9pKgY3Zlhy2EYRWxl5c16AO1JnOGi4iHa1zDFuCT4oqF1Z6cp8BlaYWiH2zdJuc2Ws6PHGH0wTk0HrA9V34ZenIRA1ifdVhiVCFWtOuQN8O2E4j7sslq4e4uGWbQZaAu6qBRWBqls5sr0qCb7TdRXBKnjhBQ1l-RB6teXMW6Iay3fpX89lOoosNxiM59hziu7qoWP85F_vQNIhaExGrh1tjzgs5glabcLqOeq5kjAnjbgSHb-ZEcQ_eA" },
  similarityPercent: 87,
  analysisText: "AI 경쟁의 병목이 연산(GPU)이 아니라 메모리(HBM)로 이동했음을 빅테크 CEO가 공식 인정한 첫 사례입니다. NVIDIA는 GPU 생산 계획보다 먼저 HBM 공급 계약을 체결했고, 메모리 확보 여부가 AI 칩 출하량을 결정하는 변수로 전환되었습니다. AI 수요 폭증과 데이터센터 증설에 비해 HBM 생산능력은 단기간 증설이 불가해, AI 인프라 확장 속도가 메모리 공급을 압도했습니다.",
  oneLiner: "\"HBM 없이는 AI도 없다\" — AI 경쟁의 병목이 GPU에서 메모리로 이동한 순간",
};
export const fetchAnalysisDetailData = () => new Promise((r) => setTimeout(() => r(analysisDetailMockResponse), 300));

// --- 방어 전략(기업 연관 분석) API 형태 목데이터 ---
export const strategyMockResponse = {
  summaryText: "엔비디아 Rubin·메모리 병목 뉴스는 AI 인프라 확장이 메모리 공급을 앞지르는 구도입니다. 수혜 강도는 SK하이닉스 > 삼성전자 > NVIDIA(수요 엔진) 순으로 강한 연관, 네이버는 AI 테마 간접 연관, 테슬라·넷플릭스·삼양식품은 HBM/메모리 테마와 직접 연관 낮습니다.",
  holdings: [
    { id: 1, icon: "memory", name: "NVDA", subName: "엔비디아 (NVIDIA)", impact: "매우 높음", change: "+5.21%", positive: true, type: "해외", recommendation: "매수", recommendationColor: "text-emerald-400", dotColor: "bg-emerald-500", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30", shadowColor: "rgba(16, 185, 129, 0.4)", reason: "메모리 병목 테마의 수요 엔진 · Rubin/HBM4 이슈에 강한 연관" },
    { id: 2, icon: "electric_car", name: "TSLA", subName: "테슬라 (Tesla)", impact: "낮음", change: "+2.14%", positive: true, type: "해외", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "HBM/메모리 병목 기사와 직접 연관 낮음 · EV·로보택시 이슈 중심" },
    { id: 3, icon: "movie", name: "NFLX", subName: "넷플릭스 (Netflix)", impact: "매우 낮음", change: "+1.32%", positive: true, type: "해외", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "AI 메모리 사이클과 거의 무관 · 구독·광고·콘텐츠 변수 중심" },
    { id: 4, icon: "memory", name: "SK하이닉스", subName: "SK Hynix", impact: "매우 높음", change: "+3.89%", positive: true, type: "국내", recommendation: "매수", recommendationColor: "text-emerald-400", dotColor: "bg-emerald-500", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30", shadowColor: "rgba(16, 185, 129, 0.4)", reason: "AI 메모리 사이클 직접 수혜 · HBM 시장 우위" },
    { id: 5, icon: "precision_manufacturing", name: "삼성전자", subName: "Samsung Electronics", impact: "높음", change: "+1.24%", positive: true, type: "국내", recommendation: "매수", recommendationColor: "text-emerald-400", dotColor: "bg-emerald-500", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30", shadowColor: "rgba(16, 185, 129, 0.4)", reason: "HBM4 모멘텀·엔비디아 공급 보도에 민감 · 같은 방향 연동 가능성 큼" },
    { id: 6, icon: "search", name: "네이버", subName: "NAVER", impact: "중간", change: "+1.78%", positive: true, type: "국내", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "AI 테마 간접 · 메모리 병목 뉴스와 연결 고리 약함" },
    { id: 7, icon: "restaurant", name: "삼양식품", subName: "Samyang Foods", impact: "매우 낮음", change: "+1.83%", positive: true, type: "국내", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "반도체/AI 메모리 테마와 무관 · 소비재·수출 변수 중심" },
  ],
  keyBeneficiaries: [
    { rank: "🥇", name: "NVIDIA", sub: "메모리 병목 테마의 수요 엔진 (강한 연관)", text: "AI 가속기(Blackwell/Rubin) 판매가 늘수록 HBM 수요가 같이 커짐. Rubin/HBM4 관련 공급·전환 이슈가 시장의 핵심 내러티브. 단기 조정 가능성(밸류 부담) 참고." },
    { rank: "🥈", name: "삼성전자", sub: "AI 메모리(HBM4) 모멘텀과 같이 움직일 가능성 큼", text: "HBM4 생산/출하 및 엔비디아 공급 관련 보도에 민감. AI 인프라(특히 HBM) 뉴스에 연동될 확률 높음." },
    { rank: "🥉", name: "SK하이닉스", sub: "AI 메모리 사이클의 직접 수혜 (강한 연관)", text: "HBM 시장 우위·AI 수요로 실적이 크게 흔들리는 구조. AI 인프라 확장 뉴스에 가장 정직하게 반응하는 편." },
  ],
  weakRelation: { name: "NAVER", text: "AI 테마에는 걸치지만 메모리 병목 뉴스와는 간접. AI 전략/광고·커머스·클라우드가 더 크고, 테마 장일 때 동반 수혜 가능(강도는 반도체보다 약함)." },
};
export const fetchStrategyData = () => new Promise((r) => setTimeout(() => r(strategyMockResponse), 350));

