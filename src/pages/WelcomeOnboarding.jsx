import { useNavigate } from 'react-router-dom';

function WelcomeOnboarding() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden mesh-gradient justify-center">
      <div
        className="relative flex h-screen w-full max-h-screen flex-col overflow-hidden shrink-0"
        style={{
          width: '100%',
          maxWidth: '430px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.03)',
        }}
      >
        <div className="flex items-center p-6 justify-between z-10 shrink-0 animate-fade-in">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="size-10 flex items-center justify-center rounded-full glass cursor-pointer shrink-0 hover-scale transition-all duration-200 hover:bg-white/10"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-white text-[20px]">close</span>
          </button>
          <div className="flex gap-1.5">
            <div className="h-1.5 w-6 rounded-full bg-primary animate-pulse"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
          </div>
          <button type="button" className="size-10 flex items-center justify-center rounded-full glass cursor-pointer shrink-0 hover-scale transition-all duration-200 hover:bg-white/10" aria-label="도움말">
            <span className="material-symbols-outlined text-white text-[20px]">help_outline</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12 z-10 min-h-0">
        <div className="glass w-full rounded-xl p-8 flex flex-col items-center shadow-2xl relative animate-scale-in hover-lift">
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-400 text-sm">light_mode</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">활동 시간</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 text-right">취침 시간</span>
                <span className="material-symbols-outlined text-indigo-300 text-sm">dark_mode</span>
              </div>
            </div>
            <div className="relative h-32 w-full flex items-end gap-1">
              <div className="flex-1 h-[40%] bg-primary/20 rounded-t-lg border-t border-primary/50 flex flex-col justify-end items-center pb-2 chart-bar animate-bar-grow" style={{animationDelay: '0s'}}>
                <span className="text-[10px] font-bold">+1.2%</span>
              </div>
              <div className="flex-1 h-[60%] bg-primary/30 rounded-t-lg border-t border-primary/60 flex flex-col justify-end items-center pb-2 chart-bar animate-bar-grow" style={{animationDelay: '0.1s'}}>
                <span className="text-[10px] font-bold">+2.8%</span>
              </div>
              <div className="flex-1 h-[35%] bg-primary/20 rounded-t-lg border-t border-primary/50 flex flex-col justify-end items-center pb-2 chart-bar animate-bar-grow" style={{animationDelay: '0.2s'}}>
                <span className="text-[10px] font-bold">+0.9%</span>
              </div>
              <div className="w-1"></div>
              <div className="flex-1 h-[75%] bg-indigo-500/20 rounded-t-lg border-t border-indigo-400/50 flex flex-col justify-end items-center pb-2 chart-bar animate-bar-grow" style={{animationDelay: '0.3s'}}>
                <span className="text-[10px] font-bold">+3.1%</span>
              </div>
              <div className="flex-1 h-[90%] bg-indigo-500/30 rounded-t-lg border-t border-indigo-400/60 flex flex-col justify-end items-center pb-2 chart-bar animate-bar-grow animate-bar-pulse" style={{animationDelay: '0.4s'}}>
                <span className="text-[10px] font-bold">+4.5%</span>
              </div>
              <div className="flex-1 h-[65%] bg-indigo-500/20 rounded-t-lg border-t border-indigo-400/50 flex flex-col justify-end items-center pb-2 chart-bar animate-bar-grow" style={{animationDelay: '0.5s'}}>
                <span className="text-[10px] font-bold">+2.2%</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <div>
                <p className="text-[11px] text-white/40">밤사이 변동폭</p>
                <p className="text-xl font-bold text-indigo-300">+4.2%</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-white/40">글로벌 마켓 영향</p>
                <p className="text-xl font-bold text-primary">+1.5%</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-4 px-2">
            <p className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">반가워요!</p>
            <h1 className="text-white text-[26px] font-bold leading-tight">
              잠든 사이에도 시장은<br />멈추지 않습니다.
            </h1>
          </div>
          <p className="text-white/70 text-base font-normal leading-relaxed text-center px-2 mb-8">
            당신이 쉬는 동안 포트폴리오의 변화를 분석합니다. 24시간 엔진으로 '취침 중' 영향과 '오늘 아침 포트폴리오' 수익을 비교해보세요.
          </p>
          <button 
            onClick={() => navigate('/home')}
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95"
          >
            시작하기
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <p className="mt-8 text-white/30 text-[12px] text-center">
          좋은 아침입니다. 실시간 신경망 분석 기반 데이터.<br />전 세계 100만 명 이상의 투자자가 신뢰합니다.
        </p>
      </div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </div>
  );
}

export default WelcomeOnboarding;
