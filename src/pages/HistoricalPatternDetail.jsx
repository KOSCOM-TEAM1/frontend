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
            <h2 className="text-sm font-bold tracking-tight">2008년 금융 위기</h2>
            <span className="text-[9px] text-white/40 font-medium uppercase tracking-widest">Historical Analysis</span>
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
                <span className="text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-md">고위험군</span>
                <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-0.5 rounded-md border border-white/10">역사적 폭락</span>
              </div>
              <h1 className="text-xl font-bold leading-tight">서브프라임 모기지 사태</h1>
              <p className="text-white/50 text-[11px] mt-0.5">2008.09 - 2009.03 주요 타임라인 분석</p>
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
              <span className="text-[10px] font-bold text-blue-400 block mb-0.5">SIMILARITY</span>
              <span className="text-2xl font-bold tracking-tighter text-white">85.4%</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 mb-5 border border-white/5">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-white text-base">bolt</span>
              </div>
              <div className="space-y-3">
                <p className="text-white/90 text-[13px] leading-[1.6]">
                  현재 시장의 <span className="text-blue-400 font-semibold">변동성 지수(VIX)</span>와 자금 유출 패턴을 분석한 결과, 2008년 리먼 브라더스 파산 직전과 매우 유사한 흐름이 감지됩니다. 연쇄 채무 불이행 위험에 대비한 <span className="text-primary font-bold">보수적 포지션</span> 유지가 권장됩니다.
                </p>
                <button className="w-full h-11 flex items-center justify-center gap-2 text-white text-[12px] font-bold bg-primary rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  <span>AI 심층 분석 요청</span>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">Trend Match</span>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-[9px] text-white/50">Current</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 border border-white/40"></div>
                  <span className="text-[9px] text-white/50">2008 Base</span>
                </div>
              </div>
            </div>
            <div className="relative h-20 w-full bg-black/20 rounded-xl flex items-center justify-center overflow-hidden border border-white/5">
              <svg className="absolute inset-0 w-full h-full px-4" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40">
                <path d="M0 15 Q 20 12, 30 20 T 50 18 T 70 35 T 100 30" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" strokeWidth="1"></path>
                <path d="M0 18 Q 20 15, 30 22 T 50 20 T 70 38" stroke="#135bec" strokeLinecap="round" strokeWidth="2"></path>
                <circle cx="70" cy="38" fill="#135bec" r="3"></circle>
              </svg>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">history</span>
              사건 타임라인
            </h4>
            <span className="text-[10px] text-white/40">3단계 주요 전개</span>
          </div>
          <div className="relative ml-2 pl-6 space-y-7" style={{position: 'relative'}}>
            <div style={{position: 'absolute', left: '5px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 90%, transparent)'}}></div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-red-500 border-2 border-background-dark ring-4 ring-red-500/10"></div>
              <p className="text-[10px] text-red-400 font-bold mb-1">2008.09.15</p>
              <h5 className="text-sm font-bold text-white">리먼 브라더스 파산 신청</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">글로벌 금융 시장의 전례 없는 패닉과 신용 경색이 시작된 역사적 기점</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-white/30 border-2 border-background-dark"></div>
              <p className="text-[10px] text-white/40 font-bold mb-1">2008.10.03</p>
              <h5 className="text-sm font-bold text-white">구제금융(TARP) 통과</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">미국 의회의 7,000억 달러 규모 부실자산 구제 프로그램 승인</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[26px] top-1.5 size-3 rounded-full bg-green-500/50 border-2 border-background-dark"></div>
              <p className="text-[10px] text-green-400 font-bold mb-1">2009.03.09</p>
              <h5 className="text-sm font-bold text-white">시장 바닥 확인 및 반등</h5>
              <p className="text-white/50 text-xs mt-1.5 leading-relaxed">S&P 500 지수가 저점을 찍고 본격적인 양적완화와 함께 회복세 진입</p>
            </div>
          </div>
        </section>
        <section className="glass-card rounded-3xl p-6 border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-amber-400 text-[20px]">lightbulb</span>
            <h4 className="text-sm font-bold">AI가 요약한 당시의 교훈</h4>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-primary font-bold text-sm">01</span>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">현금 비중 확보의 결정적 타이밍</p>
                <p className="text-white/50 text-[12px] leading-relaxed">대공황급 위기에서는 모든 자산의 가치가 하락하므로 유동성 확보가 생존의 필수 요소입니다.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-primary font-bold text-sm">02</span>
              <div>
                <p className="text-white/90 text-[13px] font-semibold mb-1">상관관계 붕괴에 대비한 헷지</p>
                <p className="text-white/50 text-[12px] leading-relaxed">전통적인 분산 투자가 작동하지 않는 상황을 위해 금, 원자재 등 대체 자산 믹스가 중요합니다.</p>
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
