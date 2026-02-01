import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function AINewsTimeline() {
  const navigate = useNavigate();

  const newsItems = [
    {
      time: '14:30 (미국 동부)',
      impact: 'high',
      impactText: '높은 영향',
      title: '연준, 기준금리 동결 결정 발표',
      summary: '연준은 인플레이션에 대한 균형 잡힌 접근을 위해 금리 동결을 선택했습니다. 이는 기술주 섹터의 안도 랠리를 유발했습니다.',
      tags: ['#연준', '#기준금리', '#시장안정'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkFcQP7j2bdoBfd1A6bsKtUnmzQQEe92iF0Urqi8lr_P7uE9AlDgnhXd1hSkYEE7k6Cd2PsLpBaS_d5TS6VDJKMxKHpq7Z_AH2NbNtO1q46LvVjF4M-myhJjzKLERF65bpeGV8EMvGaAQOEc3kw9PdJnGFF5t1Ey9lpqgD6dkPzvGSVv-V9W-S0o1BKkfGvw5-1EOHzDtazUV21FATgTTNbWyz_jLg-YDgy_vqztSHN_VAUFUEV98r3noywNHTxOeJqT-mkoY579A',
      active: true,
      hasButton: true
    },
    {
      time: '11:00 (미국 동부)',
      impact: 'medium',
      impactText: '중간 영향',
      title: '글로벌 기술주 동반 상승',
      summary: '주요 빅테크 기업들이 예상치를 상회하는 실적을 발표하며 나스닥 지수의 강력한 상승을 견인했습니다.',
      tags: ['#나스닥', '#빅테크'],
      active: false,
      hasButton: false
    },
    {
      time: '08:30 (미국 동부)',
      impact: 'low',
      impactText: '시장 데이터',
      title: '최신 인플레이션 데이터 발표',
      summary: '지난달 소비자물가지수(CPI)가 0.3% 상승하여 전문가 예상치인 0.4%를 소폭 하회했습니다.',
      tags: [],
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
            <h2 className="text-2xl font-extrabold">오늘, 10월 24일</h2>
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
