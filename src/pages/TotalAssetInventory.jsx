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
            <div className="mt-4 py-4 px-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                총 자산 잔액
              </p>
              <p className="text-white text-2xl font-extrabold tracking-tight">
                ₩117,894,100
              </p>
              <p className="text-primary text-sm font-semibold mt-1">
                +₩1,120,500 (+0.96%)
              </p>
            </div>
          </div>
          <div className="px-4 space-y-6 flex-1 animate-slide-in-up">
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden hover-lift transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {/* <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider"> */}

                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">
                    국내 주식
                  </span>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    ₩37,178,750
                  </h3>
                  <p className="text-rose-400 text-xs font-semibold mt-1">
                    -₩180,000 (-0.42%)
                  </p>
                </div>
                <div className="bg-white/5 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-white">
                    account_balance_wallet
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center hover:bg-white/5 transition-all duration-200 p-2 -mx-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-bold leading-none">
                      삼성
                    </div>
                    <span className="text-sm font-medium text-gray-200">
                      종합 위탁 계좌
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    ₩22,524,800
                  </span>
                </div>
                <div className="flex justify-between items-center hover:bg-white/5 transition-all duration-200 p-2 -mx-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-[10px] font-bold leading-none">
                      한국
                      <br />
                      투자
                    </div>
                    <span className="text-sm font-medium text-gray-200">
                      CMA 파킹 계좌
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    ₩14,653,950
                  </span>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">
                    해외 주식
                  </span>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    ₩72,450,000
                  </h3>
                  <p className="text-primary text-xs font-semibold mt-1">
                    +₩1,240,000 (+2.14%)
                  </p>
                </div>
                <div className="bg-white/5 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-white">
                    language
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center hover:bg-white/5 transition-all duration-200 p-2 -mx-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-[10px] font-bold leading-none">
                      미래
                      <br />
                      에셋
                    </div>
                    <span className="text-sm font-medium text-gray-200">
                      미국 주식 일반
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    ₩69,687,850
                  </span>
                </div>
                <div className="flex justify-between items-center hover:bg-white/5 transition-all duration-200 p-2 -mx-2 rounded-lg ">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-[10px] font-bold leading-none">
                      키움
                    </div>
                    <span className="text-sm font-medium text-gray-200">
                      외화 예수금
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    ₩4,846,150
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col"> */}

            <div className="mt-4 py-4 px-4 rounded-2xl bg-white/5 border border-white/10">
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

            <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-gray-400 transition-all border border-white/5 hover:border-white/20 hover:scale-[1.02] active:scale-95">
              계좌 추가 연결하기
            </button>
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
