import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { fetchStrategyData } from '../api/mockData';

function DefenseStrategy() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchStrategyData().then((res) => {
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

  const { holdings, summaryText, keyBeneficiaries, weakRelation } = data;

  return (
    <div className="bg-background-dark font-display text-white overflow-x-hidden min-h-screen">
      <header className="fixed top-0 w-full z-50 ios-bottom-bar border-b border-white/5">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center -ml-1">
              <span className="material-symbols-outlined text-white text-xl">arrow_back_ios_new</span>
            </button>
            <h2 className="text-white text-[17px] font-bold tracking-tight">기업 연관 분석</h2>
          </div>
          <div className="flex items-center gap-1.5 bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-tight">AI Active</span>
          </div>
        </div>
      </header>
      <main className="pt-20 pb-36 px-5 max-w-md mx-auto space-y-6 relative animate-fade-in">
        <div className="ai-glow-effect top-0 -left-20" style={{position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(19, 91, 236, 0.25) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none'}}></div>
        <div className="ai-glow-effect bottom-20 -right-20 opacity-50" style={{position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(19, 91, 236, 0.25) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none'}}></div>
        

        <section className="relative animate-slide-in-up">
          <div className="glass-card-deep rounded-2xl p-5 shadow-2xl hover-lift transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">psychology</span>
              </div>
              <h3 className="text-white font-bold text-base">AI 분석 결과</h3>
            </div>
            <div className="bg-black/20 rounded-xl p-4 mb-5 border border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-white/95 text-[14px] leading-[1.6] break-keep">
                    {summaryText || "엔비디아 Rubin·메모리 병목 뉴스는 AI 인프라 확장이 메모리 공급을 앞지르는 구도입니다. 수혜 강도는 SK하이닉스 > 삼성전자 > NVIDIA 순 강한 연관, 네이버는 간접, 테슬라·넷플릭스·삼양식품은 HBM 테마와 직접 연관 낮습니다."}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end px-1">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Similarity Graph</span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-[11px] text-white/50">현재</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full border border-white/30"></span>
                    <span className="text-[11px] text-white/50">2008년</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[110px] w-full bg-white/5 rounded-xl flex items-center justify-center p-3 border border-white/5">
                <svg className="w-full h-full animate-fade-in" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 Q 25 35, 35 12 T 65 28 T 100 8" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" strokeWidth="1.5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M0 38 Q 22 38, 32 15 T 60 30" stroke="#135bec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" strokeDasharray="100" strokeDashoffset="100">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.5s" fill="freeze" />
                  </path>
                  <circle cx="32" cy="15" fill="#135bec" r="3">
                    <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="32" cy="15" fill="#135bec" opacity="0.3" r="6">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.15em]">관련 기업 영향도 분석</h4>
            <span className="text-white/30 text-[10px] font-bold">{holdings.length}개 기업</span>
          </div>
          <div className="space-y-3">
            {holdings.map((stock) => (
              <div
                key={stock.id}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover-lift transition-all duration-300 cursor-pointer relative"
                style={{
                  boxShadow: `-4px 0 12px -2px ${stock.shadowColor}`
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-white/5 border-white/10 shrink-0">
                  <span className="material-symbols-outlined text-2xl text-primary">{stock.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-bold text-[15px]">{stock.name}</p>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                      stock.type === '해외' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {stock.type}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">{stock.subName}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[11px] text-white/40 bg-white/5 px-2 py-0.5 rounded">{stock.reason}</span>
                  </div>
                </div>
                <div className={`px-3 py-1.5 rounded-lg ${stock.bgColor} border ${stock.borderColor} flex items-center gap-1.5 shrink-0`}>
                  <div className={`w-1.5 h-1.5 ${stock.dotColor} rounded-full animate-pulse`}></div>
                  <span className={`text-sm ${stock.recommendationColor} font-bold`}>{stock.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-emerald-400 text-xl">rocket_launch</span>
              <h4 className="text-white font-bold text-sm">핵심 수혜 기업</h4>
            </div>
            <div className="space-y-3">
              {(keyBeneficiaries || []).map((b, i) => (
                <div key={i} className={`rounded-xl p-3 border ${
                  i === 0 ? 'bg-emerald-500/5 border-emerald-500/20' : i === 1 ? 'bg-blue-500/5 border-blue-500/20' : 'bg-purple-500/5 border-purple-500/20'
                }`}>
                  <p className={`font-bold text-xs mb-1 ${i === 0 ? 'text-emerald-400' : i === 1 ? 'text-blue-400' : 'text-purple-400'}`}>{b.rank} {b.name} ({b.sub})</p>
                  <p className="text-white/70 text-xs leading-relaxed">{b.text}</p>
                </div>
              ))}
              {weakRelation && (
                <div className="bg-slate-500/5 rounded-xl p-3 border border-slate-500/20">
                  <p className="text-slate-400 font-bold text-xs mb-1">약한 연관 · {weakRelation.name}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{weakRelation.text}</p>
                </div>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => alert('위 분석은 AI 기반 참고 자료입니다. 실제 투자 결정은 본인의 판단과 책임 하에 진행해 주세요.')}
            className="w-full text-left bg-slate-500/10 border border-slate-500/20 rounded-2xl p-4 flex gap-3 hover:bg-slate-500/15 transition-colors"
          >
            <span className="material-symbols-outlined text-slate-400 text-xl shrink-0">info</span>
            <p className="text-slate-300 text-[12px] leading-snug break-keep">
              위 분석은 AI 기반 참고 자료입니다. 실제 투자 결정은 본인의 판단과 책임 하에 진행해 주세요.
            </p>
          </button>
        </div>
        <div className="h-24 shrink-0"></div>
      </main>
      <Navigation />
    </div>
  );
}

export default DefenseStrategy;
