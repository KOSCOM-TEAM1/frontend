import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import userService from '../api/userService';
import { fetchDashboardData } from '../api/mockData';

function MorningDashboard() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // 현재 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 시간 포맷팅 함수
  const getFormattedTime = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const displayHours = hours % 12 || 12;
    return `${ampm} ${displayHours}:${minutes.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [memberRes, dashboardRes] = await Promise.all([
          userService.getMemberInfo(1),
          fetchDashboardData(),
        ]);
        if (memberRes.success) setMemberInfo(memberRes.data);
        else setError(memberRes.error);
        setDashboardData(dashboardRes);
      } catch (err) {
        setError({ message: '알 수 없는 오류가 발생했습니다.' });
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // 고정된 사용자 정보 (여성 프로필)
  const displayName = '최지원';
  const profileImage = memberInfo?.profileImage || '/profile.jpg';
  
  if (loading || !dashboardData) {
    return (
      <div className="bg-background-dark font-display text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary/30 border-t-primary mb-4" />
          <p className="text-slate-400 text-sm">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const { marketIndices, overnightItems, regionSummary, totalAsset, holdings } = dashboardData;

  return (
    <div className="bg-background-dark font-display text-white min-h-screen selection:bg-primary/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full"></div>
      </div>
      <main className="relative z-10 max-w-[430px] mx-auto min-h-screen flex flex-col pb-32">
        <header className="flex items-center p-6 justify-between shrink-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-full border-2 border-primary/30 overflow-hidden hover-scale transition-all duration-200">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url("${profileImage}")`}}></div>
            </div>
            <div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-tight">
                좋은 아침입니다, {displayName}님
              </h2>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">시장 업데이트 • 오전 5:50</p>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full glass text-white transition-all duration-200 active:scale-95 hover-scale hover:bg-white/10">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
        </header>
        {/* 시장 정보 인포 바 - API 응답 데이터로 렌더 */}
        <div className="px-6 pt-2 pb-4 shrink-0 animate-fade-in">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {marketIndices.map((item) => (
              <div key={item.id} className="glass rounded-xl px-4 py-3 flex items-center gap-3 min-w-fit hover-lift transition-all duration-200 border border-white/5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.id === 'usdkrw' ? 'bg-accent-purple/20' : 'bg-primary/20'}`}>
                  <span className={`material-symbols-outlined text-lg ${item.id === 'usdkrw' ? 'text-accent-purple' : 'text-primary'}`}>{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider">{item.label}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white text-base font-bold">{item.value}</span>
                    <span className={`text-sm font-semibold ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>{item.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 pt-6 pb-2 shrink-0">
          <h3 className="text-white text-xl font-bold tracking-tight">잠든 사이 변화</h3>
        </div>
        <div className="px-6 pb-4 shrink-0">
          <div className="w-full overflow-hidden rounded-xl">
            <div className="flex w-max animate-overnight-marquee gap-2">
              {[...overnightItems, ...overnightItems].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="shrink-0 flex items-center gap-2 rounded-lg glass border border-white/5 px-3 py-2 min-w-[100px]"
                >
                  <span className="material-symbols-outlined text-base text-primary/90">{(item.icon)}</span>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider leading-tight">{item.label}</span>
                    <span className={`text-sm font-bold leading-tight ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pt-2 pb-2 shrink-0">
          <h3 className="text-white text-base font-semibold uppercase tracking-wider text-slate-400">국내·해외 구분</h3>
        </div>
        <div className="space-y-4 px-6 mb-6 shrink-0">
          {regionSummary.map((region, regionIdx) => {
            const isUp = region.trend === 'up';
            const barClass = (i) =>
              isUp
                ? (i === 9 ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)] animate-bar-pulse' : i >= 6 ? 'bg-emerald-500/60' : i >= 3 ? 'bg-emerald-500/40' : 'bg-emerald-500/20')
                : (i === 0 ? 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-bar-pulse' : i <= 3 ? 'bg-rose-500/60' : i <= 6 ? 'bg-rose-500/40' : 'bg-rose-500/20');
            return (
              <div
                key={region.type}
                className={`glass rounded-xl p-5 relative overflow-hidden hover-lift hover-glow transition-all duration-300 animate-slide-in-up ${isUp ? 'border border-emerald-500/20' : 'border border-rose-500/20'}`}
                style={{ animationDelay: `${regionIdx * 0.1}s` }}
              >
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl ${isUp ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className={`material-symbols-outlined text-base ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {region.type === 'overseas' ? 'language' : 'account_balance'}
                      </span>
                      {region.label}
                    </p>
                    <span className={`text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${isUp ? 'text-emerald-400 bg-emerald-500/20' : 'text-rose-400 bg-rose-500/20'}`}>
                      {isUp ? '상승' : '하락'}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 mb-2">
                    <h2 className={`text-2xl font-extrabold tracking-tight leading-tight ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{region.changeText}</h2>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <p className="text-slate-300 text-sm font-medium">자산 잔액</p>
                      <p className="text-white text-sm font-bold">{region.balance}</p>
                    </div>
                  </div>
                  <div className="h-20 w-full flex items-end gap-1">
                    {region.chartHeights.map((height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t-sm chart-bar animate-bar-grow ${barClass(index)}`}
                        style={{ height: `${height}%`, animationDelay: `${index * 0.05}s` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-slate-500 font-bold uppercase tracking-wider">
                    <span>오후 11:00 (취침)</span>
                    <span>현재</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* 총 자산 - API 응답 데이터로 렌더 */}
        <div className="px-6 py-2 shrink-0 animate-slide-in-up">
          <div className="glass rounded-xl p-6 relative overflow-hidden hover-lift hover-glow transition-all duration-300 cursor-pointer">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <p className="text-slate-400 text-sm font-medium mb-1">총 수익</p>
              <div className="flex flex-col gap-1 mb-4">
                <h1 className="text-emerald-400 text-3xl font-extrabold tracking-tight">{totalAsset.changeText}</h1>
                <div className="flex items-center gap-1.5 opacity-60">
                  <p className="text-slate-300 text-sm font-medium">자산 잔액</p>
                  <p className="text-white text-sm font-bold">{totalAsset.balance}</p>
                </div>
              </div>
              <div className="mt-8 h-28 w-full flex items-end gap-1.5">
                {totalAsset.chartHeights.map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-sm chart-bar animate-bar-grow ${
                      index === 9 ? 'bg-primary shadow-[0_0_15px_rgba(19,91,236,0.5)] animate-bar-pulse' :
                      index >= 8 ? 'bg-primary/80' : index >= 7 ? 'bg-primary/60' : index >= 6 ? 'bg-primary/50' :
                      index >= 5 ? 'bg-primary/40' : index >= 4 ? 'bg-primary/30' : index >= 2 ? 'bg-primary/20' : 'bg-primary/10'
                    }`}
                    style={{ height: `${height}%`, animationDelay: `${index * 0.06}s` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3 text-sm text-slate-500 font-bold uppercase tracking-wider">
                <span>오후 11:00 (취침)</span>
                <span>현재</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-2 pb-2 shrink-0">
          <h3 className="text-white text-xl font-bold tracking-tight">보유 자산</h3>
        </div>
        <div className="px-6 space-y-3 flex-grow">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">해외</p>
          {holdings.overseas.map((stock, index) => (
            <motion.div
              key={stock.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-4 glass rounded-xl hover-lift hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 glass rounded-lg flex items-center justify-center hover-scale transition-all duration-200">
                  <span className="material-symbols-outlined text-white">{stock.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold">{stock.name}</p>
                  <p className="text-slate-400 text-sm">{stock.subName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{stock.price}</p>
                <p className={`${stock.positive ? 'text-emerald-400' : 'text-rose-400'} text-sm font-bold`}>{stock.change}</p>
              </div>
            </motion.div>
          ))}
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1 mt-4">국내</p>
          {holdings.domestic.map((stock, index) => (
            <motion.div
              key={stock.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index + holdings.overseas.length) * 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-4 glass rounded-xl hover-lift hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 glass rounded-lg flex items-center justify-center hover-scale transition-all duration-200">
                  <span className="material-symbols-outlined text-white">{stock.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold">{stock.name}</p>
                  <p className="text-slate-400 text-sm">{stock.subName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{stock.price}</p>
                <p className={`${stock.positive ? 'text-emerald-400' : 'text-rose-400'} text-sm font-bold`}>{stock.change}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="h-24 shrink-0"></div>
      </main>
      <Navigation />
    </div>
  );
}

export default MorningDashboard;
