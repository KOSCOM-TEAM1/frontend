import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function SleepRoutineSettings() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
      <div className="bg-blur-circle bg-primary w-64 h-64 -top-20 -left-20" style={{position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0, opacity: 0.5}}></div>
      <div className="bg-blur-circle bg-accent-purple w-72 h-72 top-1/3 -right-20" style={{position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0, opacity: 0.5}}></div>
      <div className="bg-blur-circle bg-primary w-80 h-80 -bottom-20 left-1/4" style={{position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0, opacity: 0.5}}></div>
      <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">설정</h2>
          <div className="size-12 shrink-0 flex items-center justify-end">
            <span className="material-symbols-outlined text-primary">info</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <h4 className="text-[#92a4c9] text-sm font-semibold leading-relaxed tracking-[0.015em] text-center">
            24시간 시장 모니터링 및 변동성 영향 분석을 위한 휴식 시간을 설정하세요.
          </h4>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <div className="glass rounded-xl p-4 flex flex-col gap-4 hover-lift transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">bedtime</span>
              </div>
              <div>
                <p className="text-[#92a4c9] text-xs font-medium uppercase tracking-wider">Bedtime</p>
                <p className="text-white text-lg font-bold">취침 시간</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-black/20 rounded-xl py-2">
              <div className="flex flex-1">
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">21</div>
                <div className="flex flex-col flex-1 items-center justify-center text-xl font-bold bg-primary/40 rounded-lg py-1">22</div>
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">23</div>
              </div>
              <div className="text-white font-bold px-2">:</div>
              <div className="flex flex-1">
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">15</div>
                <div className="flex flex-col flex-1 items-center justify-center text-xl font-bold bg-primary/40 rounded-lg py-1">30</div>
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">45</div>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-4 flex flex-col gap-4 hover-lift transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-accent-purple/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-accent-purple">wb_sunny</span>
              </div>
              <div>
                <p className="text-[#92a4c9] text-xs font-medium uppercase tracking-wider">Morning</p>
                <p className="text-white text-lg font-bold">기상 시간</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-black/20 rounded-xl py-2">
              <div className="flex flex-1">
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">05</div>
                <div className="flex flex-col flex-1 items-center justify-center text-xl font-bold bg-accent-purple/40 rounded-lg py-1">06</div>
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">07</div>
              </div>
              <div className="text-white font-bold px-2">:</div>
              <div className="flex flex-1">
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">15</div>
                <div className="flex flex-col flex-1 items-center justify-center text-xl font-bold bg-accent-purple/40 rounded-lg py-1">30</div>
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">45</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 px-4">
          <h3 className="text-white text-sm font-bold px-2 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs">analytics</span>
            영향 분석 미리보기
          </h3>
          <div className="glass rounded-xl p-4 overflow-hidden relative">
            <div className="flex justify-between items-end h-32 w-full gap-1 mb-2">
              {[50, 75, 66, 86, 100, 80, 66, 75, 50, 66, 33, 50].map((height, index) => (
                <div
                  key={index}
                  className={`w-full rounded-t-sm ${
                    index === 3 ? 'bg-primary relative group' :
                    index >= 4 && index <= 6 ? 'bg-primary/60' :
                    'bg-white/10'
                  }`}
                  style={{height: `${height}%`}}
                >
                  {index === 3 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-[10px] px-1.5 py-0.5 rounded">취침</div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-[#92a4c9] font-medium border-t border-white/10 pt-2">
              <span>18:00</span>
              <span className="text-primary font-bold">22:30</span>
              <span className="text-primary font-bold">06:30</span>
              <span>12:00</span>
            </div>
            <div className="mt-4 flex items-center justify-between bg-white/5 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                <span className="text-xs text-[#92a4c9]">8시간 시장 대응 공백</span>
              </div>
              <span className="text-xs font-bold text-white">예상 변동성 4.2%</span>
            </div>
          </div>
        </div>
        <div className="mt-auto p-6 flex flex-col gap-4 pb-32">
          <div className="flex items-center justify-between glass p-4 rounded-xl">
            <span className="text-sm font-medium">주말 루틴 적용</span>
            <div className="w-10 h-5 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all duration-300 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]">
            분석 보정하기
          </button>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default SleepRoutineSettings;
