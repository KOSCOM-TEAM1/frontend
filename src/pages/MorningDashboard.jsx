import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

function MorningDashboard() {
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
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACbqGGaRPoi78VeQ7GeZgTPi3HfPzKG9YgPvqUjtc33HBaMlWJQYroCQf4NnLrjdrxj4IrYjUzvy_-9-g_2Zg-E9wP5LZZc5DIIcov8h76EY6VTZJscewQby-uBFX0Qj_VqRxwO59cpOqpzjIfN9qVBzxtHlJ40ihboIThaAoiXfihf4kVdWAEGjy_9EUOdttXioMrz_Ba-BP3BtinGRT1XPp0vw8lZnkLlwGh25j-ioc0vCVqMsoN2mZcmrSUH0JeC7xE4r5UmtI")'}}></div>
            </div>
            <div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-tight">좋은 아침입니다, Alex님</h2>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">시장 업데이트 • 오전 7:30</p>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full glass text-white transition-all duration-200 active:scale-95 hover-scale hover:bg-white/10">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
        </header>
        <div className="px-6 pt-6 pb-2 shrink-0">
          <h3 className="text-white text-xl font-bold tracking-tight">잠든 사이 변화</h3>
        </div>
        <div className="px-6 pb-4 shrink-0">
          <p className="text-slate-300 text-sm leading-relaxed opacity-80">
            반도체 섹터의 강력한 분기 실적에 힘입어 아시아 및 유럽 시장이 반등했습니다. 보유 중인 암호화폐 자산도 완만한 회복세를 보였습니다.
          </p>
        </div>
        <div className="px-6 pt-2 pb-2 shrink-0">
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider text-slate-400">국내·해외 구분</h3>
        </div>
        <div className="space-y-4 px-6 mb-6 shrink-0">
          {/* 해외주식 카드 - 상승 */}
          <div className="glass rounded-xl p-5 relative overflow-hidden border border-emerald-500/20 hover-lift hover-glow transition-all duration-300 animate-slide-in-up">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-400 text-base">language</span>
                  해외주식
                </p>
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20">상승</span>
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <h2 className="text-emerald-400 text-2xl font-extrabold tracking-tight leading-tight">+₩1,240,000 (+2.14%)</h2>
                <div className="flex items-center gap-1.5 opacity-60">
                  <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                  <p className="text-white text-xs font-bold">₩72,450,000</p>
                </div>
              </div>
              <div className="h-20 w-full flex items-end gap-1">
                {[25, 38, 42, 48, 55, 62, 70, 78, 88, 100].map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-sm chart-bar animate-bar-grow ${index === 9 ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)] animate-bar-pulse' : index >= 6 ? 'bg-emerald-500/60' : index >= 3 ? 'bg-emerald-500/40' : 'bg-emerald-500/20'}`}
                    style={{ 
                      height: `${height}%`,
                      animationDelay: `${index * 0.05}s`
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                <span>오후 11:00 (취침)</span>
                <span>현재</span>
              </div>
            </div>
          </div>
          {/* 국내 주식 카드 - 하락 */}
          <div className="glass rounded-xl p-5 relative overflow-hidden border border-rose-500/20 hover-lift hover-glow transition-all duration-300 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-rose-500/10 blur-2xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-rose-400 text-base">account_balance</span>
                  국내 주식
                </p>
                <span className="text-rose-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-500/20">하락</span>
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <h2 className="text-rose-400 text-2xl font-extrabold tracking-tight leading-tight">-₩180,000 (-0.42%)</h2>
                <div className="flex items-center gap-1.5 opacity-60">
                  <p className="text-slate-300 text-xs font-medium">자산 잔액</p>
                  <p className="text-white text-xs font-bold">₩35,670,450</p>
                </div>
              </div>
              <div className="h-20 w-full flex items-end gap-1">
                {[100, 92, 88, 85, 82, 78, 75, 72, 68, 65].map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-sm chart-bar animate-bar-grow ${index === 0 ? 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.4)] animate-bar-pulse' : index <= 3 ? 'bg-rose-500/60' : index <= 6 ? 'bg-rose-500/40' : 'bg-rose-500/20'}`}
                    style={{ 
                      height: `${height}%`,
                      animationDelay: `${index * 0.05}s`
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                <span>오후 11:00 (취침)</span>
                <span>현재</span>
              </div>
            </div>
          </div>
        </div>
        {/* 총 자산 잔액 (해외 ₩72,450,000 + 국내 ₩35,670,450 = ₩108,120,450 / +₩1,060,000, +0.99%) */}
        <div className="px-6 py-2 shrink-0 animate-slide-in-up">
          <div className="glass rounded-xl p-6 relative overflow-hidden hover-lift transition-all duration-300">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <p className="text-slate-400 text-sm font-medium mb-1">총 수익</p>
              <div className="flex flex-col gap-1 mb-4">
                <h1 className="text-emerald-400 text-3xl font-extrabold tracking-tight">+₩1,060,000 (+0.99%)</h1>
                <div className="flex items-center gap-1.5 opacity-60">
                  <p className="text-slate-300 text-sm font-medium">자산 잔액</p>
                  <p className="text-white text-sm font-bold">₩108,120,450</p>
                </div>
              </div>
              <div className="mt-8 h-28 w-full flex items-end gap-1.5">
                {[28, 32, 38, 42, 48, 55, 62, 72, 85, 100].map((height, index) => (
                  <div 
                    key={index}
                    className={`flex-1 rounded-t-sm chart-bar animate-bar-grow ${
                      index === 9 ? 'bg-primary shadow-[0_0_15px_rgba(19,91,236,0.5)] animate-bar-pulse' : 
                      index >= 8 ? 'bg-primary/80' : 
                      index >= 7 ? 'bg-primary/60' : 
                      index >= 6 ? 'bg-primary/50' : 
                      index >= 5 ? 'bg-primary/40' : 
                      index >= 4 ? 'bg-primary/30' : 
                      index >= 2 ? 'bg-primary/20' : 'bg-primary/10'
                    }`}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 0.06}s`
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
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
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">해외</p>
          {[
            { icon: 'data_object', name: 'NVDA', subName: '엔비디아', price: '₩168,450', change: '+5.21%', positive: true },
            { icon: 'token', name: 'ETH', subName: '이더리움', price: '₩3,841,100', change: '+2.14%', positive: true }
          ].map((stock, index) => (
            <motion.div
              key={index}
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
                  <p className="text-slate-400 text-xs">{stock.subName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{stock.price}</p>
                <p className={`${stock.positive ? 'text-emerald-400' : 'text-rose-400'} text-xs font-bold`}>{stock.change}</p>
              </div>
            </motion.div>
          ))}
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 mt-4">국내</p>
          {[
            { icon: 'precision_manufacturing', name: '삼성전자', subName: 'Samsung Electronics', price: '₩8,240,000', change: '-0.32%', positive: false },
            { icon: 'memory', name: 'SK하이닉스', subName: 'SK Hynix', price: '₩12,850,000', change: '-0.58%', positive: false },
            { icon: 'public', name: 'NAVER', subName: '네이버', price: '₩14,580,450', change: '+0.12%', positive: true }
          ].map((stock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index + 2) * 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-4 glass rounded-xl hover-lift hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 glass rounded-lg flex items-center justify-center hover-scale transition-all duration-200">
                  <span className="material-symbols-outlined text-white">{stock.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold">{stock.name}</p>
                  <p className="text-slate-400 text-xs">{stock.subName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{stock.price}</p>
                <p className={`${stock.positive ? 'text-emerald-400' : 'text-rose-400'} text-xs font-bold`}>{stock.change}</p>
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
