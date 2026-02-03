import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { fetchTimelineData } from '../api/mockData';

function AINewsTimeline() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchTimelineData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading || !data) {
    return (
      <div className="bg-background-dark font-display text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary/30 border-t-primary mb-4" />
          <p className="text-slate-400 text-sm">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const { dateLabel, newsItems } = data;

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
            <h2 className="text-2xl font-extrabold">{dateLabel}</h2>
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
