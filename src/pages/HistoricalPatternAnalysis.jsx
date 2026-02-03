import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { fetchAnalysisData } from '../api/mockData';

function HistoricalPatternAnalysis() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalysisData().then((res) => {
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

  const { hero, analysisText, similarityPercent, trendLabel, marketReactionText, marketReactionTags, similarEvents } = data;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white min-h-screen">
      <div className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="cursor-pointer" onClick={() => navigate(-1)}>
              <span className="material-symbols-outlined text-white text-2xl">arrow_back_ios</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI 과거 패턴 분석</h2>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1.5 bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30">
              <div className="size-2 bg-blue-500 rounded-full"></div>
              <span className="text-[10px] font-bold text-blue-500 uppercase">AI Active</span>
            </div>
            <button
              type="button"
              onClick={async () => {
                const url = window.location.href;
                if (navigator.share) {
                  try {
                    await navigator.share({ title: 'AI 과거 유사사례 분석', url });
                    alert('공유되었습니다.');
                  } catch (e) {
                    if (e.name !== 'AbortError') navigator.clipboard?.writeText(url).then(() => alert('링크가 복사되었습니다.'));
                  }
                } else {
                  navigator.clipboard?.writeText(url).then(() => alert('링크가 복사되었습니다.'));
                }
              }}
              className="flex cursor-pointer items-center justify-center rounded-xl h-10 w-10 bg-white/5 text-white border border-white/10"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
          </div>
        </div>
      </div>
      <main className="pt-20 pb-36 px-4 max-w-md mx-auto space-y-6">
        <div className="relative rounded-2xl overflow-hidden group">
          <div 
            className="bg-cover bg-center flex flex-col justify-end min-h-[200px]" 
            style={{ backgroundImage: `linear-gradient(0deg, rgba(16, 22, 34, 1) 0%, rgba(16, 22, 34, 0.4) 100%), url("${hero.image}")` }}
          >
            <div className="p-5">
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] font-bold bg-primary px-2 py-0.5 rounded uppercase tracking-wider">{hero.badge}</span>
                <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">유사도 {hero.similarity}</span>
              </div>
              <h1 className="text-white text-2xl font-bold leading-tight">{hero.title}</h1>
              <p className="text-white/60 text-sm mt-1">{hero.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div className="glass-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
            <p className="text-white text-xs font-bold leading-normal">AI 분석 결과</p>
          </div>
          <div className="glass-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5">
            <span className="material-symbols-outlined text-green-400 text-lg">history</span>
            <p className="text-white text-xs font-bold leading-normal">과거 유사도 {similarityPercent}%</p>
          </div>
          <div className="glass-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5">
            <span className="material-symbols-outlined text-purple-400 text-lg">monitoring</span>
            <p className="text-white text-xs font-bold leading-normal">예상 추세</p>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">psychology</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-none">AI 분석 결과</h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-wider mt-1">Real-time Comparative Analysis</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-sm">robot_2</span>
                </div>
                <div className="space-y-3">
                  <p className="text-white/90 text-sm leading-relaxed">{analysisText}</p>
                  <button className="flex items-center gap-1.5 text-primary text-xs font-bold py-1 px-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>AI에게 더 자세히 물어보기</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end px-1">
                <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{trendLabel}</span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-[10px] text-white/60">현재 추세</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20 border border-white/40"></div>
                    <span className="text-[10px] text-white/60">과거 추세</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[140px] w-full bg-white/5 rounded-xl flex items-center justify-center p-4">
                <svg className="absolute inset-4" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 Q 25 35, 30 15 T 60 25 T 100 5" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" strokeWidth="1.5"></path>
                  <path d="M0 38 Q 20 38, 28 18 T 55 28" stroke="#135bec" strokeLinecap="round" strokeWidth="2.5"></path>
                  <circle cx="28" cy="18" fill="#135bec" r="1.5"></circle>
                </svg>
                <div className="absolute bottom-2 left-4 text-[9px] text-white/30 font-medium">T-14 Days</div>
                <div className="absolute bottom-2 right-4 text-[9px] text-white/30 font-medium">Prediction</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card rounded-2xl p-4">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">패턴 유사도</p>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-bold text-white">{similarityPercent}%</p>
              <span className="text-blue-500 material-symbols-outlined text-lg mb-1">hub</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-primary shadow-[0_0_8px_rgba(19,91,236,0.6)]" style={{ width: `${similarityPercent}%` }}></div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">당시 영향</p>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-bold text-emerald-400">+11.8%</p>
              <span className="text-emerald-500 material-symbols-outlined text-lg mb-1">trending_up</span>
            </div>
            <p className="text-[10px] text-white/30 mt-3 italic">발표 후 3개월</p>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <div className="mb-3">
            <h5 className="text-white/60 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history</span>
              당시 시장 반응
            </h5>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              {marketReactionText || "HBM 쇼티지 공식화 이후 메모리 업체 실적 전망이 급변했고, 증권사 리포트 논조가 \"AI 수혜 = 반도체 → 메모리\"로 이동했습니다."}
            </p>
            <div className="flex flex-wrap gap-2">
              {(marketReactionTags || ["주가 상승", "공급망 수혜", "메모리 재평가"]).map((tag, i) => (
                <span key={i} className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <h5 className="text-white/60 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">library_books</span>
              다른 유사 사례
            </h5>
          </div>
          <div className="space-y-3">
            {(similarEvents || []).map((ev) => (
              <div
                key={ev.id}
                onClick={() => navigate('/analysis/detail')}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                    ev.colorClass === 'purple' ? 'bg-purple-500/10 border-purple-500/20' : 'bg-amber-500/10 border-amber-500/20'
                  }`}>
                    <span className={`font-bold text-xs ${ev.colorClass === 'purple' ? 'text-purple-400' : 'text-amber-400'}`}>{ev.year}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{ev.title}</p>
                    <p className="text-white/40 text-xs">{ev.desc}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/40">chevron_right</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <button 
            onClick={() => navigate('/analysis/strategy')}
            className="w-full bg-primary h-14 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(19,91,236,0.4)] active:scale-[0.98] transition-all hover:shadow-[0_0_32px_rgba(19,91,236,0.5)]"
          >
            <span className="material-symbols-outlined text-white">shield</span>
            <span className="text-white font-bold text-lg">방어 전략 수립</span>
          </button>
        </div>
        <div className="h-24 shrink-0"></div>
      </main>
      <Navigation />
    </div>
  );
}

export default HistoricalPatternAnalysis;
