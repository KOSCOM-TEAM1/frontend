import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function AINewsTimeline() {
  const navigate = useNavigate();

  const newsItems = [
    {
      time: '오후 11:30',
      impact: 'high',
      impactText: '높은 영향',
      title: '엔비디아, CES 2026서 루빈 GPU 양산 가속화·자율주행 AI 공개',
      summary: '젠슨 황 엔비디아 CEO는 CES 2026 기조연설에서 블랙웰을 이을 차세대 GPU 아키텍처 루빈이 예상보다 빠르게 본격 양산에 돌입했다고 밝혔다. 루빈은 블랙웰 대비 성능이 4배 향상됐으며, 추론 토큰 비용은 10분의 1로 절감됐다.',
      tags: ['#엔비디아', '#루빈GPU', '#자율주행AI'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkFcQP7j2bdoBfd1A6bsKtUnmzQQEe92iF0Urqi8lr_P7uE9AlDgnhXd1hSkYEE7k6Cd2PsLpBaS_d5TS6VDJKMxKHpq7Z_AH2NbNtO1q46LvVjF4M-myhJjzKLERF65bpeGV8EMvGaAQOEc3kw9PdJnGFF5t1Ey9lpqgD6dkPzvGSVv-V9W-S0o1BKkfGvw5-1EOHzDtazUV21FATgTTNbWyz_jLg-YDgy_vqztSHN_VAUFUEV98r3noywNHTxOeJqT-mkoY579A',
      active: true,
      hasButton: true
    },
    {
      time: '오전 1:15',
      impact: 'medium',
      impactText: '중간 영향',
      title: '테슬라, 모델 S·모델 X 2026년 2분기 단종 확정...로봇 옵티머스 생산 전환',
      summary: '일론 머스크 테슬라 CEO는 2026년 2분기 말까지 모델 S와 모델 X의 생산을 완전히 중단할 계획이라고 공식적으로 밝혔다. 기존 생산 라인은 휴머노이드 로봇 옵티머스 생산 라인으로 전환된다.',
      tags: ['#테슬라', '#모델S단종', '#옵티머스'],
      active: false,
      hasButton: false
    },
    {
      time: '오전 3:20',
      impact: 'high',
      impactText: '높은 영향',
      title: '삼성전자, 2025년 4분기 영업이익 20조원 달성…HBM4 공급 가속화',
      summary: '삼성전자는 2025년 4분기 매출은 93.8조원으로 집계돼 분기 기준 역대 최대치를 경신했다. DS 부문이 주도한 고부가 제품 판매 확대 전략이 전사 실적을 강력하게 견인한 결과로 풀이된다. 2026년 1분기부터 차세대 HBM4 제품 공급을 시작할 계획이다.',
      tags: ['#삼성전자', '#영업이익', '#HBM4'],
      active: false,
      hasButton: true
    },
    {
      time: '오전 5:00',
      impact: 'high',
      impactText: '높은 영향',
      title: '코스피, 5,200 돌파하며 사상 최고치 경신...반도체 실적 견인',
      summary: '벤치마크 KOSPI는 목요일 0.98% 상승하여 5,221로 마감하며 강력한 반도체 실적이 시장 심리를 끌어올리면서 사상 최고치를 기록했다. 투자자들은 4분기 강력한 실적과 지속적인 AI 주도의 수요에 힘입어 첨단 메모리 제품의 지속적인 성장 기대를 강화했다.',
      tags: ['#코스피', '#사상최고치', '#반도체'],
      active: false,
      hasButton: true
    },
    {
      time: '오전 6:45',
      impact: 'medium',
      impactText: '중간 영향',
      title: 'SK하이닉스, 주가 91만원 돌파… 황제주 진입 코앞',
      summary: 'SK하이닉스가 주가 91만원을 돌파하며 황제주 진입을 코앞에 뒀다. 증권사들은 목표가를 일제히 상향 조정했으며, 메리츠증권이 145만원으로 가장 높게 제시했다. 모건 스탠리는 2026년 DRAM 평균 가격이 62%, NAND는 75% 상승할 것으로 전망했다.',
      tags: ['#SK하이닉스', '#황제주', '#DRAM'],
      active: false,
      hasButton: false
    },
    {
      time: '오전 7:30',
      impact: 'medium',
      impactText: '중간 영향',
      title: '네이버, 2026년 안정적 이익 성장 확정...신사업 가치 주가 반영 전망',
      summary: '하나증권은 네이버에 대해 2026년 안정적 이익 성장이 확정적인 상황에서 신사업 가치가 주가에 반영될 가능성이 높다고 밝혔다. 목표주가는 35만 원으로 제시했으며, 1분기 쇼핑 에이전트, 2분기 AI 탭, 이후 통합 에이전트를 출시할 계획이다.',
      tags: ['#네이버', '#신사업', '#AI탭'],
      active: false,
      hasButton: false
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen">
      <header className="sticky top-0 glass-header border-b border-white/5 px-4 py-3">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-2xl font-variation-fill">insights</span>
            <h1 className="text-lg font-bold tracking-tight">AI 뉴스 타임라인</h1>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-xl">tune</span>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-lg mx-auto pb-24">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">오늘, 2월 3일</h2>
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30 tracking-widest uppercase">실시간 업데이트</span>
          </div>
        </div>
        <div className="relative px-4">
          <div className="absolute left-[2.45rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent"></div>
          {newsItems.map((news, index) => (
            <div key={index} className="grid grid-cols-[48px_1fr] gap-4 mb-8 relative animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col items-center pt-2 relative z-10">
                <div className={`size-9 rounded-full flex items-center justify-center ${
                  news.active 
                    ? 'bg-primary shadow-[0_0_15px_rgba(19,91,236,0.5)]' 
                    : 'bg-[#232f48] border border-white/10'
                }`}>
                  <span className="material-symbols-outlined text-white text-sm">schedule</span>
                </div>
              </div>
              <div className={`${news.image ? 'glass-card rounded-xl overflow-hidden shadow-2xl' : 'glass-card rounded-xl p-4 shadow-xl'}`}>
                {news.image && (
                  <div className="w-full h-32 bg-center bg-cover" style={{backgroundImage: `url(${news.image})`}}>
                    <div className="w-full h-full bg-gradient-to-t from-[#192233] to-transparent"></div>
                  </div>
                )}
                <div className={news.image ? 'p-4 -mt-8 relative' : ''}>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold tracking-widest uppercase ${news.active ? 'text-primary' : 'text-slate-400'}`}>
                      {news.time}
                    </span>
                    <div className={`flex items-center gap-1 text-xs font-bold ${
                      news.impact === 'high' ? 'text-emerald-400' : 
                      news.impact === 'medium' ? 'text-amber-400' : 'text-slate-400'
                    }`}>
                      <span className="material-symbols-outlined text-xs">
                        {news.impact === 'high' ? 'trending_up' : news.impact === 'medium' ? 'sync_alt' : 'info'}
                      </span>
                      {news.impactText}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold leading-tight mb-2">{news.title}</h3>
                  <div className="bg-white/5 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-primary text-sm font-variation-fill">psychology</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">AI 요약</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      {news.summary}
                    </p>
                  </div>
                  {news.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {news.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {news.hasButton && (
                    <button
                      type="button"
                      onClick={() => navigate('/analysis')}
                      className="w-full py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
                    >
                      AI 과거 유사사례 보기 <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                    </button>
                  )}
                  {!news.hasButton && news.tags.length > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {news.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all duration-200">
                        보유 종목 확인 <span className="material-symbols-outlined text-xs">open_in_new</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
}

export default AINewsTimeline;
