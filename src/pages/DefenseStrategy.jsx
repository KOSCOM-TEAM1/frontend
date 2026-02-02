import { useNavigate } from 'react-router-dom';

function DefenseStrategy() {
  const navigate = useNavigate();

  const holdings = [
    // 해외 종목
    { 
      id: 1,
      icon: 'data_object', 
      name: 'NVDA', 
      subName: '엔비디아', 
      price: '₩168,450', 
      change: '+5.21%', 
      positive: true,
      type: '해외'
    },
    { 
      id: 2,
      icon: 'token', 
      name: 'ETH', 
      subName: '이더리움', 
      price: '₩3,841,100', 
      change: '+2.14%', 
      positive: true,
      type: '해외'
    },
    // 국내 종목
    { 
      id: 3,
      icon: 'precision_manufacturing', 
      name: '삼성전자', 
      subName: 'Samsung Electronics', 
      price: '₩8,240,000', 
      change: '-0.32%', 
      positive: false,
      type: '국내'
    },
    { 
      id: 4,
      icon: 'memory', 
      name: 'SK하이닉스', 
      subName: 'SK Hynix', 
      price: '₩12,850,000', 
      change: '-0.58%', 
      positive: false,
      type: '국내'
    },
    { 
      id: 5,
      icon: 'public', 
      name: 'NAVER', 
      subName: '네이버', 
      price: '₩14,580,450', 
      change: '+0.12%', 
      positive: true,
      type: '국내'
    }
  ];

  const strategies = [
    {
      id: 0,
      icon: 'trending_down',
      title: '인버스 ETF 매수',
      subtitle: '리스크 헤징',
      recommendation: '매수',
      recommendationColor: 'text-emerald-400',
      dotColor: 'bg-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 1,
      icon: 'account_balance_wallet',
      title: '안전자산 비중 확대',
      subtitle: '금/달러 30%',
      recommendation: '매수',
      recommendationColor: 'text-emerald-400',
      dotColor: 'bg-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 2,
      icon: 'do_not_disturb_on',
      title: '손절가 설정',
      subtitle: '현재가 -5%',
      recommendation: '중립',
      recommendationColor: 'text-yellow-400',
      dotColor: 'bg-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 3,
      icon: 'trending_up',
      title: '고위험 레버리지 상품',
      subtitle: '변동성 높음',
      recommendation: '매도',
      recommendationColor: 'text-rose-400',
      dotColor: 'bg-rose-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30'
    }
  ];

  return (
    <div className="bg-background-dark font-display text-white overflow-x-hidden min-h-screen">
      <header className="fixed top-0 w-full z-50 ios-bottom-bar border-b border-white/5">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center -ml-1">
              <span className="material-symbols-outlined text-white text-xl">arrow_back_ios_new</span>
            </button>
            <h2 className="text-white text-[17px] font-bold tracking-tight">리스크 방어 전략 수립</h2>
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
        
        {/* 보유 종목 섹션 */}
        <section className="space-y-4 animate-slide-in-up">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.15em]">내 보유 종목</h4>
            <span className="text-white/30 text-[10px] font-bold">{holdings.length}개 보유</span>
          </div>
          <div className="glass-card-deep rounded-2xl p-4 space-y-3">
            {holdings.map((stock, index) => (
              <div 
                key={stock.id}
                className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined text-white text-lg">{stock.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-bold text-sm">{stock.name}</p>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                        stock.type === '해외' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                        {stock.type}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs">{stock.subName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-sm">{stock.price}</p>
                  <p className={`text-xs font-bold ${stock.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stock.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                    현재 시장 데이터는 <span className="text-primary font-bold">2008년 금융위기 당시와 85% 유사한 패턴</span>을 보입니다. 변동성 대응을 위한 전략이 즉시 필요합니다.
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
              <button className="w-full py-3.5 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/30 flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <span className="text-primary text-[13px] font-bold tracking-tight">AI 심층 분석 리포트 보기</span>
              </button>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-[0.15em] px-1">AI 방어 전략 제안</h4>
          <div className="space-y-3">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 border-l-4 border-l-primary/50 hover-lift hover:border-l-primary transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-white/5 border-white/10 shrink-0">
                  <span className="material-symbols-outlined text-2xl text-primary">{strategy.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-[15px] mb-1.5">{strategy.title}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] text-white/40 bg-white/5 px-1.5 py-0.5 rounded">{strategy.subtitle}</span>
                  </div>
                </div>
                <div className={`px-3 py-1.5 rounded-lg ${strategy.bgColor} border ${strategy.borderColor} flex items-center gap-1.5 shrink-0`}>
                  <div className={`w-1.5 h-1.5 ${strategy.dotColor} rounded-full animate-pulse`}></div>
                  <span className={`text-sm ${strategy.recommendationColor} font-bold`}>{strategy.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="bg-slate-500/10 border border-slate-500/20 rounded-2xl p-4 flex gap-3">
          <span className="material-symbols-outlined text-slate-400 text-xl shrink-0">lightbulb</span>
          <p className="text-slate-300 text-[12px] leading-snug break-keep">
            위 전략은 AI 분석 기반 참고용 제안입니다. 투자 결정은 본인 판단과 책임 하에 진행해 주세요.
          </p>
        </div>
      </main>
    </div>
  );
}

export default DefenseStrategy;
