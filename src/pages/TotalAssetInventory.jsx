import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { fetchAssetsData } from "../api/mockData";

function TotalAssetInventory() {
  const navigate = useNavigate();
  const [hoveredDomestic, setHoveredDomestic] = useState(null);
  const [hoveredForeign, setHoveredForeign] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssetsData().then((res) => {
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

  const { totalAsset, domestic, foreign, exchangeRate } = data;

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
              <button
                type="button"
                onClick={() => alert('자산 필터/정렬은 준비 중입니다.')}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
              >
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
                {totalAsset.changeText}
              </p>
              <div className="flex items-center gap-1.5 opacity-60">
                <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                <p className="text-white text-xs font-bold">{totalAsset.balance}</p>
              </div>
            </div>
          </div>
          <div className="px-4 space-y-6 flex-1 animate-slide-in-up">
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">
                    {domestic.label}
                  </span>
                  <h3 className="text-2xl font-extrabold text-rose-400 tracking-tight mb-1">
                    {domestic.changeText}
                  </h3>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                    <p className="text-white text-xs font-bold">{domestic.balance}</p>
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
                      {/* 종합 위탁 계좌 (61.7%) - 밝은 블루 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth={hoveredDomestic === 'savings' ? "18" : "16"}
                        strokeDasharray="155 251"
                        strokeDashoffset="0"
                        className="transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: '0.2s', 
                          filter: hoveredDomestic === 'savings' 
                            ? 'drop-shadow(0 0 14px rgba(56, 189, 248, 0.9))' 
                            : 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))',
                          opacity: hoveredDomestic && hoveredDomestic !== 'savings' ? 0.5 : 1
                        }}
                        onMouseEnter={() => setHoveredDomestic('savings')}
                        onMouseLeave={() => setHoveredDomestic(null)}
                      />
                      {/* CMA 파킹 계좌 (38.3%) - 밝은 그린 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth={hoveredDomestic === 'cma' ? "18" : "16"}
                        strokeDasharray="96 251"
                        strokeDashoffset="-155"
                        className="transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: '0.3s', 
                          filter: hoveredDomestic === 'cma' 
                            ? 'drop-shadow(0 0 14px rgba(52, 211, 153, 0.9))' 
                            : 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.6))',
                          opacity: hoveredDomestic && hoveredDomestic !== 'cma' ? 0.5 : 1
                        }}
                        onMouseEnter={() => setHoveredDomestic('cma')}
                        onMouseLeave={() => setHoveredDomestic(null)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      {!hoveredDomestic ? (
                        <>
                          <p className="text-[10px] text-slate-400 font-semibold">{domestic.totalLabel}</p>
                          <p className="text-sm font-bold text-white">{domestic.totalShort}</p>
                        </>
                      ) : domestic.accounts.find((a) => a.id === hoveredDomestic) ? (
                        (() => {
                          const acc = domestic.accounts.find((a) => a.id === hoveredDomestic);
                          const colorClass = acc.color === "sky" ? "text-sky-300" : "text-emerald-300";
                          return (
                            <>
                              <p className={`text-xs font-bold ${colorClass}`}>{acc.name}</p>
                              <p className="text-xl font-extrabold text-white">{acc.amount}</p>
                              <p className={`text-xs font-bold ${colorClass}`}>{acc.pct}</p>
                            </>
                          );
                        })()
                      ) : null}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {domestic.accounts.map((acc) => (
                    <div
                      key={acc.id}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer border ${
                        hoveredDomestic === acc.id
                          ? acc.color === "sky"
                            ? "bg-sky-500/25 border-sky-400/50 scale-[1.02]"
                            : "bg-emerald-500/25 border-emerald-400/50 scale-[1.02]"
                          : acc.color === "sky"
                            ? "bg-sky-500/10 border-sky-400/20 hover:bg-sky-500/15"
                            : "bg-emerald-500/10 border-emerald-400/20 hover:bg-emerald-500/15"
                      }`}
                      onMouseEnter={() => setHoveredDomestic(acc.id)}
                      onMouseLeave={() => setHoveredDomestic(null)}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-md shrink-0 transition-transform duration-200 ${
                            acc.color === "sky" ? "bg-sky-400" : "bg-emerald-400"
                          } ${hoveredDomestic === acc.id ? "scale-110 shadow-[0_0_10px_rgba(56,189,248,0.6)]" : ""}`}
                        />
                        <span className={`text-sm font-semibold ${acc.color === "sky" ? "text-sky-200" : "text-emerald-200"}`}>{acc.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold text-white">{acc.amount}</p>
                        <p className={`text-xs font-bold ${acc.color === "sky" ? "text-sky-300" : "text-emerald-300"}`}>{acc.pct}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">
                    {foreign.label}
                  </span>
                  <h3 className="text-2xl font-extrabold text-emerald-400 tracking-tight mb-1">
                    {foreign.changeText}
                  </h3>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                    <p className="text-white text-xs font-bold">{foreign.balance}</p>
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
                      {/* 미국 주식 일반 (70%) - 밝은 블루 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth={hoveredForeign === 'us' ? "18" : "16"}
                        strokeDasharray="176 251"
                        strokeDashoffset="0"
                        className="transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: '0.2s', 
                          filter: hoveredForeign === 'us' 
                            ? 'drop-shadow(0 0 14px rgba(56, 189, 248, 0.9))' 
                            : 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))',
                          opacity: hoveredForeign && hoveredForeign !== 'us' ? 0.5 : 1
                        }}
                        onMouseEnter={() => setHoveredForeign('us')}
                        onMouseLeave={() => setHoveredForeign(null)}
                      />
                      {/* 미국 ISA 계좌 (25%) - 밝은 바이올렛 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#c084fc"
                        strokeWidth={hoveredForeign === 'isa' ? "18" : "16"}
                        strokeDasharray="63 251"
                        strokeDashoffset="-176"
                        className="transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: '0.3s', 
                          filter: hoveredForeign === 'isa' 
                            ? 'drop-shadow(0 0 14px rgba(192, 132, 252, 0.9))' 
                            : 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.6))',
                          opacity: hoveredForeign && hoveredForeign !== 'isa' ? 0.5 : 1
                        }}
                        onMouseEnter={() => setHoveredForeign('isa')}
                        onMouseLeave={() => setHoveredForeign(null)}
                      />
                      {/* 외화 예수금 (5%) - 밝은 앰버 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth={hoveredForeign === 'cash' ? "18" : "16"}
                        strokeDasharray="13 251"
                        strokeDashoffset="-239"
                        className="transition-all duration-300 cursor-pointer"
                        style={{ 
                          animationDelay: '0.4s', 
                          filter: hoveredForeign === 'cash' 
                            ? 'drop-shadow(0 0 14px rgba(251, 191, 36, 0.9))' 
                            : 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))',
                          opacity: hoveredForeign && hoveredForeign !== 'cash' ? 0.5 : 1
                        }}
                        onMouseEnter={() => setHoveredForeign('cash')}
                        onMouseLeave={() => setHoveredForeign(null)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      {!hoveredForeign ? (
                        <>
                          <p className="text-[10px] text-slate-400 font-semibold">{foreign.totalLabel}</p>
                          <p className="text-sm font-bold text-white">{foreign.totalShort}</p>
                        </>
                      ) : foreign.accounts.find((a) => a.id === hoveredForeign) ? (
                        (() => {
                          const acc = foreign.accounts.find((a) => a.id === hoveredForeign);
                          const colorClass = acc.color === "sky" ? "text-sky-300" : acc.color === "violet" ? "text-violet-300" : "text-amber-300";
                          return (
                            <>
                              <p className={`text-xs font-bold ${colorClass}`}>{acc.name}</p>
                              <p className="text-xl font-extrabold text-white">{acc.amount}</p>
                              <p className={`text-xs font-bold ${colorClass}`}>{acc.pct}</p>
                            </>
                          );
                        })()
                      ) : null}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {foreign.accounts.map((acc) => (
                    <div
                      key={acc.id}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer border ${
                        hoveredForeign === acc.id
                          ? acc.color === "sky"
                            ? "bg-sky-500/25 border-sky-400/50 scale-[1.02]"
                            : acc.color === "violet"
                              ? "bg-violet-500/25 border-violet-400/50 scale-[1.02]"
                              : "bg-amber-500/25 border-amber-400/50 scale-[1.02]"
                          : acc.color === "sky"
                            ? "bg-sky-500/10 border-sky-400/20 hover:bg-sky-500/15"
                            : acc.color === "violet"
                              ? "bg-violet-500/10 border-violet-400/20 hover:bg-violet-500/15"
                              : "bg-amber-500/10 border-amber-400/20 hover:bg-amber-500/15"
                      }`}
                      onMouseEnter={() => setHoveredForeign(acc.id)}
                      onMouseLeave={() => setHoveredForeign(null)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-md shrink-0 transition-transform duration-200 ${hoveredForeign === acc.id ? "scale-110" : ""}`} style={{ backgroundColor: acc.color === "sky" ? "rgb(56 189 248)" : acc.color === "violet" ? "rgb(192 132 252)" : "rgb(251 191 36)" }} />
                        <span className={`text-sm font-semibold ${acc.color === "sky" ? "text-sky-200" : acc.color === "violet" ? "text-violet-200" : "text-amber-200"}`}>{acc.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold text-white">{acc.amount}</p>
                        <p className={`text-xs font-bold ${acc.color === "sky" ? "text-sky-300" : acc.color === "violet" ? "text-violet-300" : "text-amber-300"}`}>{acc.pct}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col"> */}

            <div className="mt-4 py-4 px-4 rounded-2xl bg-white/5 border border-white/10 hover-lift hover-glow transition-all duration-300 cursor-pointer">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                실시간 환율 (USD/KRW)
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-base font-bold">{exchangeRate.value}</span>
                <span className={`text-xs font-semibold ${exchangeRate.positive ? "text-emerald-400" : "text-rose-400"}`}>
                  {exchangeRate.change}
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
