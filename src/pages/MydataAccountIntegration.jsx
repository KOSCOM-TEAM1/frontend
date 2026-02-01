import { useNavigate } from 'react-router-dom';

function MydataAccountIntegration() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
      <div className="orb w-64 h-64 bg-primary/20 top-[-50px] left-[-50px]" style={{position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0}}></div>
      <div className="orb w-80 h-80 bg-blue-900/10 bottom-[10%] right-[-100px]" style={{position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0}}></div>
      <div className="relative z-10 flex flex-col min-h-screen pb-32">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">마이데이터 계좌 연동</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
        </div>
        <div className="px-4 py-6">
          <h1 className="text-white tracking-tight text-[28px] font-extrabold leading-tight">모든 계좌를 한 곳에서</h1>
          <p className="text-gray-400 text-sm font-normal leading-relaxed pt-2">금융사 계좌를 안전하게 연결하고 실시간으로 자산을 확인하세요.</p>
        </div>
        <div className="px-4 space-y-4 flex-1">
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">증권사</h3>
                  <p className="text-white/40 text-xs">국내외 주식 및 펀드</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-emerald-400 text-xs font-bold">2개 연결됨</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">KB</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">KB증권</p>
                    <p className="text-white/40 text-xs">일반 계좌 (1234-****)</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary">check_circle</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">NH</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">NH투자증권</p>
                    <p className="text-white/40 text-xs">ISA 계좌 (5678-****)</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary">check_circle</span>
              </div>
            </div>
            <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-white/60 transition-all duration-300 border border-white/5 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 hover:border-white/20">
              <span className="material-symbols-outlined text-sm">add</span>
              증권사 계좌 추가
            </button>
          </div>

          <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-400 text-2xl">currency_bitcoin</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">가상자산</h3>
                  <p className="text-white/40 text-xs">암호화폐 거래소</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <span className="text-white/40 text-xs font-bold">연결 안됨</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
              <span className="material-symbols-outlined text-white/40 text-4xl mb-2 block">link_off</span>
              <p className="text-white/60 text-sm mb-3">아직 연결된 거래소가 없습니다</p>
              <button className="w-full py-3 bg-primary hover:bg-primary/90 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>
                거래소 연결하기
              </button>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-2xl">account_balance_wallet</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">은행</h3>
                  <p className="text-white/40 text-xs">예금 및 적금</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <span className="text-white/40 text-xs font-bold">연결 안됨</span>
              </div>
            </div>
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold text-white/60 transition-all border border-white/5 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              은행 계좌 연결하기
            </button>
          </div>
        </div>
        <div className="p-6 text-center space-y-4 mt-4">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-[11px] font-medium">
            <span className="material-symbols-outlined text-sm">lock</span>
            금융위원회 인가 마이데이터 사업자 • AES-256 암호화
          </div>
          <div className="h-1.5 w-32 bg-gray-800 rounded-full mx-auto mb-2"></div>
        </div>
      </div>
    </div>
  );
}

export default MydataAccountIntegration;
