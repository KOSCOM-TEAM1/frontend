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
            <h2 className="text-sm font-bold tracking-tight">엔비디아 루빈 GPU 발표</h2>
            <span className="text-[9px] text-white/40 font-medium uppercase tracking-widest">AI INFRASTRUCTURE ANALYSIS</span>
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
                <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md">고성장 섹터</span>
                <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-0.5 rounded-md border border-white/10">AI 인프라 혁신</span>
              </div>
              <h1 className="text-xl font-bold leading-tight">Rubin GPU 양산 가속화</h1>
              <p className="text-white/50 text-[11px] mt-0.5">CES 2026 기조연설 · AI 인프라 변곡점 분석</p>
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
              <span className="text-[10px] font-bold text-emerald-400 block mb-0.5">IMPACT SCORE</span>
              <span className="text-2xl font-bold tracking-tighter text-white">92.8%</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 mb-5 border border-white/5">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-white text-base">bolt</span>
              </div>
              <div className="space-y-3">
                <p className="text-white/90 text-[13px] leading-[1.6]">
                  엔비디아의 <span className="text-emerald-400 font-semibold">Rubin GPU</span> 조기 양산과 <span className="text-blue-400 font-semibold">Cosmos AI</span> 오픈소스 공개는 AI가 "비싸고 제한적인 기술"에서 "모든 산업에 깔리는 인프라"로 넘어가는 <span className="text-primary font-bold">역사적 변곡점</span>입니다. 추론 비용 1/10 절감은 AI 서비스 대중화를 가속화할 것으로 예상됩니다.
                </p>
                <button className="w-full h-11 flex items-center justify-center gap-2 text-white text-[12px] font-bold bg-primary rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  <span>관련 종목 전략 보기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">GPU 성능 진화</span>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[9px] text-white/50">Rubin</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 border border-white/40"></div>
                  <span className="text-[9px] text-white/50">Blackwell</span>
                </div>
              </div>
            </div>
            <div className="relative h-20 w-full bg-black/20 rounded-xl flex items-center justify-center overflow-hidden border border-white/5">
              <svg className="absolute inset-0 w-full h-full px-4" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                <path d="M0 35 Q 25 32, 40 28 T 65 18 T 85 8 T 100 5" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" strokeWidth="1"></path>
                <path d="M0 35 Q 25 32, 40 28 T 65 18 T 85 8" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>
                <circle cx="85" cy="8" fill="#10b981" r="3">
                  <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">history</span>
              GPU 아키텍처 진화
            </h4>
            <span className="text-[10px] text-white/40">4세대 혁신 타임라인</span>
          </div>
          <div className="relative ml-2 pl-6 space-y-7" style={{position: 'relative'}}>
            <div style={{position: 'absolute', left: '5px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.1) 10%, rgba(16,185,129,0.3) 90%, rgba(16,185,129,0.5))'}}></div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-blue-500/50 border-2 border-background-dark ring-4 ring-blue-500/10"></div>
              <p className="text-[10px] text-blue-400 font-bold mb-1">2022</p>
              <h5 className="text-sm font-bold text-white">Ampere → Hopper (H100)</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">AI 학습·추론 성능 대폭 개선, 데이터센터 매출 급증 시작</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-purple-500/50 border-2 border-background-dark ring-4 ring-purple-500/10"></div>
              <p className="text-[10px] text-purple-400 font-bold mb-1">2024</p>
              <h5 className="text-sm font-bold text-white">Blackwell 아키텍처 공개</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">추론 비용 혁신 강조, 빅테크 CAPEX 확대 본격화</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-emerald-500 border-2 border-background-dark ring-4 ring-emerald-500/20"></div>
              <p className="text-[10px] text-emerald-400 font-bold mb-1">2026.01</p>
              <h5 className="text-sm font-bold text-white">Rubin GPU 조기 양산 돌입</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">성능 4배 향상, 추론 비용 1/10 절감 - AI 인프라 대중화 변곡점</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-amber-500 border-2 border-background-dark ring-4 ring-amber-500/10"></div>
              <p className="text-[10px] text-amber-400 font-bold mb-1">2026.01</p>
              <h5 className="text-sm font-bold text-white">Cosmos AI 오픈소스 공개</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">자율주행용 AI 모델, 메르세데스·우버-루시드 채택 예정</p>
            </div>
          </div>
        </section>
        <section className="glass-card rounded-3xl p-6 border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-amber-400 text-[20px]">lightbulb</span>
            <h4 className="text-sm font-bold">주요 수혜 기업 분석</h4>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 shrink-0">
                <span className="text-emerald-400 font-bold text-xs">KR</span>
              </div>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">SK하이닉스 - 직접 수혜 최대</p>
                <p className="text-white/50 text-[12px] leading-relaxed">Rubin 성능 4배 향상 → HBM4 탑재량 증가 가능성. 엔비디아 핵심 공급사로서 가장 직접적인 수혜 예상</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 shrink-0">
                <span className="text-blue-400 font-bold text-xs">KR</span>
              </div>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">삼성전자 - HBM·파운드리 공급</p>
                <p className="text-white/50 text-[12px] leading-relaxed">AI GPU 세대 교체 = 메모리 수요 레벨업. 첨단 공정 경쟁 심화로 파운드리 사업 기회 확대</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 shrink-0">
                <span className="text-purple-400 font-bold text-xs">KR</span>
              </div>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">네이버 - AI 서비스 비용 절감</p>
                <p className="text-white/50 text-[12px] leading-relaxed">추론 비용 1/10 하락 → 검색·광고·AI 비서 서비스 수익성 개선. 자체 LLM 운영 부담 감소</p>
              </div>
            </div>
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
