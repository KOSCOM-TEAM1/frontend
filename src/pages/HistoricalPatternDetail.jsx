import { useNavigate } from 'react-router-dom';

function HistoricalPatternDetail() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark font-display text-white min-h-screen antialiased">
      <div className="light-beam top-[-100px] right-[-50px]" style={{position: 'fixed', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(19, 91, 236, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none'}}></div>
      <div className="light-beam bottom-0 left-[-100px]" style={{position: 'fixed', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none'}}></div>
      <header className="fixed top-0 w-full z-[100] bg-background-dark/70 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-5 h-16 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="w-10 h-10 -ml-2 flex items-center justify-center active:opacity-50 transition-opacity">
            <span className="material-symbols-outlined text-white text-[22px]">chevron_left</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-sm font-bold tracking-tight">2024년 Blackwell 발표</h2>
            <span className="text-[9px] text-white/40 font-medium uppercase tracking-widest">PAST CASE ANALYSIS</span>
          </div>
          <div className="w-10 flex justify-end">
            <span className="material-symbols-outlined text-white/60 text-[20px] cursor-pointer">share</span>
          </div>
        </div>
      </header>
      <main className="pt-20 pb-32 px-5 max-w-md mx-auto space-y-6">
        <div className="relative rounded-3xl overflow-hidden glass-panel hover-lift transition-all duration-300">
          <div 
            className="h-44 bg-cover bg-center relative" 
            style={{backgroundImage: 'linear-gradient(0deg, rgba(7, 9, 15, 1) 0%, rgba(7, 9, 15, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDckHQKWafDEShJpEgEhJK9pKgY3Zlhy2EYRWxl5c16AO1JnOGi4iHa1zDFuCT4oqF1Z6cp8BlaYWiH2zdJuc2Ws6PHGH0wTk0HrA9V34ZenIRA1ifdVhiVCFWtOuQN8O2E4j7sslq4e4uGWbQZaAu6qBRWBqls5sr0qCb7TdRXBKnjhBQ1l-RB6teXMW6Iay3fpX89lOoosNxiM59hziu7qoWP85F_vQNIhaExGrh1tjzgs5glabcLqOeq5kjAnjbgSHb-ZEcQ_eA")'}}
          >
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-md">과거 사례</span>
                <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-0.5 rounded-md border border-white/10">유사도 72%</span>
              </div>
              <h1 className="text-xl font-bold leading-tight">Blackwell 아키텍처 공개</h1>
              <p className="text-white/50 text-[11px] mt-0.5">2024 GTC · 추론 비용 혁신 & 데이터센터 최적화</p>
            </div>
          </div>
        </div>
        <section className="glass-card rounded-3xl p-5 border-primary/20 relative overflow-hidden hover-lift transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl text-primary">psychology</span>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-[20px]">insights</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">AI 분석 결과</h3>
                <p className="text-[10px] text-white/40">데이터 모델링 유사도 분석</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-purple-400 block mb-0.5">SIMILARITY</span>
              <span className="text-2xl font-bold tracking-tighter text-white">72%</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 mb-5 border border-white/5">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-white text-base">bolt</span>
              </div>
              <div className="space-y-3">
                <p className="text-white/90 text-[13px] leading-[1.6]">
                  2024년 GTC에서 공개된 <span className="text-purple-400 font-semibold">Blackwell 아키텍처</span>는 Hopper 대비 <span className="text-primary font-bold">최대 65배 AI 컴퓨팅 성능</span>과 <span className="text-primary font-bold">15배 추론 비용 절감</span>을 달성했습니다. FP4/FP6 저정밀 연산 지원과 NVLink 5 기술로 AI 추론 중심 시장을 본격화했으며, 현재 Rubin 발표와 72% 유사한 패턴을 보입니다.
                </p>
                <button 
                  onClick={() => navigate('/analysis/strategy')}
                  className="w-full h-11 flex items-center justify-center gap-2 text-white text-[12px] font-bold bg-primary rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-sm">shield</span>
                  <span>투자 전략 제안 받기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">Performance Leap</span>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span className="text-[9px] text-white/50">Blackwell</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 border border-white/40"></div>
                  <span className="text-[9px] text-white/50">Hopper</span>
                </div>
              </div>
            </div>
            <div className="relative h-20 w-full bg-black/20 rounded-xl flex items-center justify-center overflow-hidden border border-white/5">
              <svg className="absolute inset-0 w-full h-full px-4" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                <path d="M0 30 Q 25 28, 40 25 T 65 18 T 85 10 T 100 8" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" strokeWidth="1"></path>
                <path d="M0 30 Q 25 28, 40 25 T 65 18 T 85 10" stroke="#a855f7" strokeLinecap="round" strokeWidth="2"></path>
                <circle cx="85" cy="10" fill="#a855f7" r="3">
                  <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">code</span>
              주요 기술 혁신
            </h4>
            <span className="text-[10px] text-white/40">5가지 핵심 포인트</span>
          </div>
          <div className="relative ml-2 pl-6 space-y-7" style={{position: 'relative'}}>
            <div style={{position: 'absolute', left: '5px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.1) 10%, rgba(168,85,247,0.3) 90%, rgba(168,85,247,0.5))'}}></div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-purple-500 border-2 border-background-dark ring-4 ring-purple-500/20"></div>
              <p className="text-[10px] text-purple-400 font-bold mb-1">PERFORMANCE</p>
              <h5 className="text-sm font-bold text-white">최대 65배 AI 컴퓨팅 성능</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">GB300 NVL72 기준 Hopper 대비 최대 65배, 일반 벤치마크 2.5배 이상 성능 향상</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-blue-500/50 border-2 border-background-dark ring-4 ring-blue-500/10"></div>
              <p className="text-[10px] text-blue-400 font-bold mb-1">COST</p>
              <h5 className="text-sm font-bold text-white">15배 추론 비용 절감</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">100만 토큰당 비용 최대 15배 절감, FP4/FP6 저정밀 연산으로 에너지 효율 극대화</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-emerald-500/50 border-2 border-background-dark ring-4 ring-emerald-500/10"></div>
              <p className="text-[10px] text-emerald-400 font-bold mb-1">MEMORY</p>
              <h5 className="text-sm font-bold text-white">HBM3e 192GB+ 메모리</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">수천억 매개변수 모델 단일 GPU 처리, 두 개의 다이 10TB/s 인터커넥트로 연결</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-cyan-500/50 border-2 border-background-dark ring-4 ring-cyan-500/10"></div>
              <p className="text-[10px] text-cyan-400 font-bold mb-1">CONNECTIVITY</p>
              <h5 className="text-sm font-bold text-white">NVLink 5 기술 적용</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">GPU 간 연결 대역폭 강화, 대규모 멀티 GPU 클러스터 구축 최적화</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-amber-500/50 border-2 border-background-dark ring-4 ring-amber-500/10"></div>
              <p className="text-[10px] text-amber-400 font-bold mb-1">PROCESS</p>
              <h5 className="text-sm font-bold text-white">TSMC 4NP 공정</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">첨단 공정으로 전력 효율성 향상, 5세대 Tensor 코어 탑재</p>
            </div>
          </div>
        </section>
        <section className="glass-card rounded-3xl p-6 border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-amber-400 text-[20px]">trending_up</span>
            <h4 className="text-sm font-bold">당시 시장 영향</h4>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-base">cloud</span>
              </div>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">클라우드 서비스 빠른 도입</p>
                <p className="text-white/50 text-[12px] leading-relaxed">AWS, Azure, Oracle 등 주요 클라우드 제공사가 Blackwell 기반 인프라를 Hopper 때보다 훨씬 빠르게 데이터센터에 도입</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 shrink-0">
                <span className="material-symbols-outlined text-emerald-400 text-base">payments</span>
              </div>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">빅테크 CAPEX 확대 본격화</p>
                <p className="text-white/50 text-[12px] leading-relaxed">추론 비용 절감으로 데이터센터 TCO 하락, AI 스타트업들의 대량 GPU 투자 유인 증가</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 shrink-0">
                <span className="material-symbols-outlined text-blue-400 text-base">rocket_launch</span>
              </div>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">AI 서비스 제공 비용 감소</p>
                <p className="text-white/50 text-[12px] leading-relaxed">대형 모델 온라인 서비스 제공 비용 대폭 감소, AI 스타트업 제품·서비스 확장 가속화</p>
              </div>
            </div>
          </div>
        </section>
        <section className="glass-card rounded-3xl p-6 border-purple-500/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-purple-400 text-[20px]">compare_arrows</span>
            <h4 className="text-sm font-bold">현재 Rubin과의 비교</h4>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Blackwell (2024)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 material-symbols-outlined text-sm">check_circle</span>
                    <p className="text-white/80 text-xs">추론 중심 최적화</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 material-symbols-outlined text-sm">check_circle</span>
                    <p className="text-white/80 text-xs">빠른 클라우드 도입</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 material-symbols-outlined text-sm">check_circle</span>
                    <p className="text-white/80 text-xs">15배 비용 절감</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Rubin (2026)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 material-symbols-outlined text-sm">check_circle</span>
                    <p className="text-white/80 text-xs">인프라 대중화</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 material-symbols-outlined text-sm">check_circle</span>
                    <p className="text-white/80 text-xs">자율주행 AI 공개</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 material-symbols-outlined text-sm">check_circle</span>
                    <p className="text-white/80 text-xs">성능 4배 향상</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              두 발표 모두 AI 인프라 전환의 핵심 시점이며, Blackwell은 "추론 비용 혁신"에, Rubin은 "산업 전반 확산"에 초점을 맞추고 있습니다.
            </p>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-0 w-full z-[100] p-5 pb-8 bg-background-dark/80 backdrop-blur-2xl border-t border-white/5">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center active:scale-95 transition-all">
            <span className="material-symbols-outlined text-white/60">query_stats</span>
          </button>
          <button 
            onClick={() => navigate('/analysis/strategy')}
            className="flex-1 bg-primary h-14 rounded-2xl flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(19,91,236,0.4)] active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-white text-[20px]">verified_user</span>
            <span className="text-white font-bold text-sm">투자 전략 제안 받기</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default HistoricalPatternDetail;
