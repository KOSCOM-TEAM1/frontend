import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

function TotalAssetInventory() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
      <div
        className="min-h-screen relative"
        style={{
          width: "100%",
          maxWidth: "430px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="orb w-64 h-64 bg-primary/20 top-[-50px] left-[-50px]"
          style={{
            position: "absolute",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        ></div>
        <div
          className="orb w-80 h-80 bg-blue-900/10 bottom-[10%] right-[-100px]"
          style={{
            position: "absolute",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div
              className="text-white flex size-12 shrink-0 items-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
              통합 자산 현황
            </h2>
            <div className="flex w-12 items-center justify-end">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
          <div className="px-4 py-6">
            <h1 className="text-white tracking-tight text-[28px] font-extrabold leading-tight">
              내 자산 한눈에 보기
            </h1>
            <p className="text-gray-400 text-sm font-normal leading-relaxed pt-2">
              연결된 모든 계좌의 자산을 실시간으로 확인하세요.
            </p>
            <div className="mt-4 py-4 px-4 rounded-2xl bg-white/5 border border-white/10 hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                총 수익
              </p>
              <p className="text-emerald-400 text-3xl font-extrabold tracking-tight mb-2">
                +₩1,060,000 (+0.99%)
              </p>
              <div className="flex items-center gap-1.5 opacity-60">
                <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                <p className="text-white text-xs font-bold">₩108,120,450</p>
              </div>
            </div>
          </div>
          <div className="px-4 space-y-6 flex-1 animate-slide-in-up">
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">
                    국내 주식
                  </span>
                  <h3 className="text-2xl font-extrabold text-rose-400 tracking-tight mb-1">
                    -₩180,000 (-0.42%)
                  </h3>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                    <p className="text-white text-xs font-bold">₩35,670,450</p>
                  </div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-white">
                    account_balance_wallet
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                {/* 도넛 차트 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* 배경 원 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="16"
                      />
                      {/* 종합 위탁 계좌 (61.7%) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="16"
                        strokeDasharray="155 251"
                        strokeDashoffset="0"
                        className="transition-all duration-300 cursor-pointer hover:stroke-[18] hover:brightness-125"
                        style={{ animationDelay: '0.2s', filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.5))' }}
                      />
                      {/* CMA 파킹 계좌 (38.3%) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="16"
                        strokeDasharray="96 251"
                        strokeDashoffset="-155"
                        className="transition-all duration-300 cursor-pointer hover:stroke-[18] hover:brightness-125"
                        style={{ animationDelay: '0.4s', filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-[10px] text-slate-400 font-semibold">국내 총액</p>
                      <p className="text-sm font-bold text-white">₩35.7M</p>
                    </div>
                  </div>
                </div>
                
                {/* 범례 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-blue-600"></div>
                      <span className="text-xs text-gray-300">종합 위탁 계좌</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₩22.0M</p>
                      <p className="text-[10px] text-blue-400">61.7%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-emerald-600"></div>
                      <span className="text-xs text-gray-300">CMA 파킹 계좌</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₩13.7M</p>
                      <p className="text-[10px] text-emerald-400">38.3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">
                    해외 주식
                  </span>
                  <h3 className="text-2xl font-extrabold text-emerald-400 tracking-tight mb-1">
                    +₩1,240,000 (+2.14%)
                  </h3>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                    <p className="text-white text-xs font-bold">₩72,450,000</p>
                  </div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-white">
                    language
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                {/* 도넛 차트 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* 배경 원 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="16"
                      />
                      {/* 미국 주식 일반 (94.5%) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="16"
                        strokeDasharray="237 251"
                        strokeDashoffset="0"
                        className="transition-all duration-300 cursor-pointer hover:stroke-[18] hover:brightness-125"
                        style={{ animationDelay: '0.2s', filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))' }}
                      />
                      {/* 외화 예수금 (5.5%) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="16"
                        strokeDasharray="14 251"
                        strokeDashoffset="-237"
                        className="transition-all duration-300 cursor-pointer hover:stroke-[18] hover:brightness-125"
                        style={{ animationDelay: '0.4s', filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-[10px] text-slate-400 font-semibold">해외 총액</p>
                      <p className="text-sm font-bold text-white">₩72.5M</p>
                    </div>
                  </div>
                </div>
                
                {/* 범례 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-indigo-600"></div>
                      <span className="text-xs text-gray-300">미국 주식 일반</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₩68.4M</p>
                      <p className="text-[10px] text-indigo-400">94.5%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-orange-600"></div>
                      <span className="text-xs text-gray-300">외화 예수금</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">₩4.0M</p>
                      <p className="text-[10px] text-orange-400">5.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col"> */}

            <div className="mt-4 py-4 px-4 rounded-2xl bg-white/5 border border-white/10 hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                실시간 환율 (USD/KRW)
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-base font-bold">1,345.80</span>
                <span className="text-rose-400 text-xs font-semibold">
                  -0.12%
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 text-center space-y-4 mt-4 pb-32">
            <div className="flex items-center justify-center gap-2 text-gray-500 text-[11px] font-medium">
              <span className="material-symbols-outlined text-sm">lock</span>
              AES-256 은행급 암호화 적용 & 마이데이터 보안 표준 준수
            </div>
            <div className="h-1.5 w-32 bg-gray-800 rounded-full mx-auto mb-2"></div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default TotalAssetInventory;
