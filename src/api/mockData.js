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
  dateLabel: "오늘, 2월 3일",
  newsItems: [
    { time: "오후 11:30", impact: "high", impactText: "높은 영향", title: "엔비디아, CES 2026서 루빈 GPU 양산 가속화·자율주행 AI 공개", summary: "젠슨 황 엔비디아 CEO는 CES 2026 기조연설에서 블랙웰을 이을 차세대 GPU 아키텍처 루빈이 예상보다 빠르게 본격 양산에 돌입했다고 밝혔다. 루빈은 블랙웰 대비 성능이 4배 향상됐으며, 추론 토큰 비용은 10분의 1로 절감됐다.", tags: ["#엔비디아", "#루빈GPU", "#자율주행AI"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkFcQP7j2bdoBfd1A6bsKtUnmzQQEe92iF0Urqi8lr_P7uE9AlDgnhXd1hSkYEE7k6Cd2PsLpBaS_d5TS6VDJKMxKHpq7Z_AH2NbNtO1q46LvVjF4M-myhJjzKLERF65bpeGV8EMvGaAQOEc3kw9PdJnGFF5t1Ey9lpqgD6dkPzvGSVv-V9W-S0o1BKkfGvw5-1EOHzDtazUV21FATgTTNbWyz_jLg-YDgy_vqztSHN_VAUFUEV98r3noywNHTxOeJqT-mkoY579A", active: true, hasButton: true },
    { time: "오전 1:15", impact: "medium", impactText: "중간 영향", title: "테슬라, 모델 S·모델 X 2026년 2분기 단종 확정...로봇 옵티머스 생산 전환", summary: "일론 머스크 테슬라 CEO는 2026년 2분기 말까지 모델 S와 모델 X의 생산을 완전히 중단할 계획이라고 공식적으로 밝혔다. 기존 생산 라인은 휴머노이드 로봇 옵티머스 생산 라인으로 전환된다.", tags: ["#테슬라", "#모델S단종", "#옵티머스"], active: false, hasButton: false },
    { time: "오전 3:20", impact: "high", impactText: "높은 영향", title: "삼성전자, 2025년 4분기 영업이익 20조원 달성…HBM4 공급 가속화", summary: "삼성전자는 2025년 4분기 매출은 93.8조원으로 집계돼 분기 기준 역대 최대치를 경신했다. DS 부문이 주도한 고부가 제품 판매 확대 전략이 전사 실적을 강력하게 견인한 결과로 풀이된다. 2026년 1분기부터 차세대 HBM4 제품 공급을 시작할 계획이다.", tags: ["#삼성전자", "#영업이익", "#HBM4"], active: false, hasButton: false },
    { time: "오전 5:00", impact: "high", impactText: "높은 영향", title: "코스피, 5,200 돌파하며 사상 최고치 경신...반도체 실적 견인", summary: "벤치마크 KOSPI는 목요일 0.98% 상승하여 5,221로 마감하며 강력한 반도체 실적이 시장 심리를 끌어올리면서 사상 최고치를 기록했다. 투자자들은 4분기 강력한 실적과 지속적인 AI 주도의 수요에 힘입어 첨단 메모리 제품의 지속적인 성장 기대를 강화했다.", tags: ["#코스피", "#사상최고치", "#반도체"], active: false, hasButton: false },
    { time: "오전 6:45", impact: "medium", impactText: "중간 영향", title: "SK하이닉스, 주가 91만원 돌파… 황제주 진입 코앞", summary: "SK하이닉스가 주가 91만원을 돌파하며 황제주 진입을 코앞에 뒀다. 증권사들은 목표가를 일제히 상향 조정했으며, 메리츠증권이 145만원으로 가장 높게 제시했다. 모건 스탠리는 2026년 DRAM 평균 가격이 62%, NAND는 75% 상승할 것으로 전망했다.", tags: ["#SK하이닉스", "#황제주", "#DRAM"], active: false, hasButton: false },
    { time: "오전 7:30", impact: "medium", impactText: "중간 영향", title: "네이버, 2026년 안정적 이익 성장 확정...신사업 가치 주가 반영 전망", summary: "하나증권은 네이버에 대해 2026년 안정적 이익 성장이 확정적인 상황에서 신사업 가치가 주가에 반영될 가능성이 높다고 밝혔다. 목표주가는 35만 원으로 제시했으며, 1분기 쇼핑 에이전트, 2분기 AI 탭, 이후 통합 에이전트를 출시할 계획이다.", tags: ["#네이버", "#신사업", "#AI탭"], active: false, hasButton: false },
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

// --- 과거 패턴 분석 API 형태 목데이터 ---
export const analysisMockResponse = {
  hero: { badge: "과거 사례", similarity: "85%", title: "2022년 Ampere → Hopper 전환", subtitle: "AI 학습·추론 성능 대폭 개선 · 데이터센터 혁명", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckHQKWafDEShJpEgEhJK9pKgY3Zlhy2EYRWxl5c16AO1JnOGi4iHa1zDFuCT4oqF1Z6cp8BlaYWiH2zdJuc2Ws6PHGH0wTk0HrA9V34ZenIRA1ifdVhiVCFWtOuQN8O2E4j7sslq4e4uGWbQZaAu6qBRWBqls5sr0qCb7TdRXBKnjhBQ1l-RB6teXMW6Iay3fpX89lOoosNxiM59hziu7qoWP85F_vQNIhaExGrh1tjzgs5glabcLqOeq5kjAnjbgSHb-ZEcQ_eA" },
  analysisText: "2022년 Hopper(H100) 아키텍처 공개는 현재 Rubin GPU 발표와 85% 유사합니다. 당시 AI 학습·추론 성능이 대폭 개선되며 데이터센터 시장 패러다임이 전환되었고, AI 인프라 본격 확산의 시작점이 되었습니다. 현재 상황도 이와 유사한 변곡점으로 평가됩니다.",
  similarityPercent: 85,
  trendLabel: "Trend Comparison",
};
export const fetchAnalysisData = () => new Promise((r) => setTimeout(() => r(analysisMockResponse), 300));

// --- 과거 패턴 상세 API 형태 목데이터 ---
export const analysisDetailMockResponse = {
  title: "2024년 Blackwell 발표",
  subtitle: "PAST CASE ANALYSIS",
  hero: { badge: "과거 사례", similarity: "72%", title: "Blackwell 아키텍처 공개", desc: "2024 GTC · 추론 비용 혁신 & 데이터센터 최적화", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckHQKWafDEShJpEgEhJK9pKgY3Zlhy2EYRWxl5c16AO1JnOGi4iHa1zDFuCT4oqF1Z6cp8BlaYWiH2zdJuc2Ws6PHGH0wTk0HrA9V34ZenIRA1ifdVhiVCFWtOuQN8O2E4j7sslq4e4uGWbQZaAu6qBRWBqls5sr0qCb7TdRXBKnjhBQ1l-RB6teXMW6Iay3fpX89lOoosNxiM59hziu7qoWP85F_vQNIhaExGrh1tjzgs5glabcLqOeq5kjAnjbgSHb-ZEcQ_eA" },
  similarityPercent: 72,
  analysisText: "2024년 GTC에서 공개된 Blackwell 아키텍처는 Hopper 대비 최대 65배 AI 컴퓨팅 성능과 15배 추론 비용 절감을 달성했습니다. FP4/FP6 저정밀 연산 지원과 NVLink 5 기술로 AI 추론 중심 시장을 본격화했으며, 현재 Rubin 발표와 72% 유사한 패턴을 보입니다.",
};
export const fetchAnalysisDetailData = () => new Promise((r) => setTimeout(() => r(analysisDetailMockResponse), 300));

// --- 방어 전략(기업 연관 분석) API 형태 목데이터 ---
export const strategyMockResponse = {
  holdings: [
    { id: 1, icon: "memory", name: "NVDA", subName: "엔비디아 (NVIDIA)", impact: "★★★★★", change: "+5.21%", positive: true, type: "해외", recommendation: "매수", recommendationColor: "text-emerald-400", dotColor: "bg-emerald-500", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30", shadowColor: "rgba(16, 185, 129, 0.4)", reason: "AI 추론 시장 지배력 강화" },
    { id: 2, icon: "electric_car", name: "TSLA", subName: "테슬라 (Tesla)", impact: "★★★", change: "+2.14%", positive: true, type: "해외", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "자율주행 생태계 표준 발전" },
    { id: 3, icon: "movie", name: "NFLX", subName: "넷플릭스 (Netflix)", impact: "★★", change: "+1.32%", positive: true, type: "해외", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "AI 추천·제작 비용 절감" },
    { id: 4, icon: "memory", name: "SK하이닉스", subName: "SK Hynix", impact: "★★★★★", change: "+3.89%", positive: true, type: "국내", recommendation: "매수", recommendationColor: "text-emerald-400", dotColor: "bg-emerald-500", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30", shadowColor: "rgba(16, 185, 129, 0.4)", reason: "HBM4 직접 수혜 최대" },
    { id: 5, icon: "precision_manufacturing", name: "삼성전자", subName: "Samsung Electronics", impact: "★★★★", change: "+1.24%", positive: true, type: "국내", recommendation: "매수", recommendationColor: "text-emerald-400", dotColor: "bg-emerald-500", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30", shadowColor: "rgba(16, 185, 129, 0.4)", reason: "HBM·파운드리 공급 확대" },
    { id: 6, icon: "search", name: "네이버", subName: "NAVER", impact: "★★★", change: "+1.78%", positive: true, type: "국내", recommendation: "유지", recommendationColor: "text-blue-400", dotColor: "bg-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30", shadowColor: "rgba(59, 130, 246, 0.4)", reason: "AI 서비스 수익성 개선" },
    { id: 7, icon: "restaurant", name: "삼양식품", subName: "Samyang Foods", impact: "★", change: "+1.83%", positive: true, type: "국내", recommendation: "중립", recommendationColor: "text-slate-400", dotColor: "bg-slate-500", bgColor: "bg-slate-500/10", borderColor: "border-slate-500/30", shadowColor: "rgba(100, 116, 139, 0.4)", reason: "간접 수혜 (수요예측 AI)" },
  ],
};
export const fetchStrategyData = () => new Promise((r) => setTimeout(() => r(strategyMockResponse), 350));
