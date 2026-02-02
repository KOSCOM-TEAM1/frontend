import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function SleepRoutineSettings() {
  const navigate = useNavigate();

  // 설정 변경 히스토리 (최근 7일)
  const settingsHistory = [
    { date: '1/25', bedtime: '23:00', wakeTime: '07:00' },
    { date: '1/26', bedtime: '23:30', wakeTime: '07:30' },
    { date: '1/27', bedtime: '23:00', wakeTime: '07:00' },
    { date: '1/28', bedtime: '22:30', wakeTime: '06:30' },
    { date: '1/29', bedtime: '22:30', wakeTime: '06:30' },
    { date: '1/30', bedtime: '22:30', wakeTime: '06:30' },
    { date: '1/31', bedtime: '22:30', wakeTime: '06:30' },
  ];

  // 시간을 분으로 변환 (그래프 높이 계산용)
  const timeToMinutes = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  // 취침 시간 그래프 높이 (22:00 기준으로 정규화)
  const getBedtimeHeight = (bedtime) => {
    const minutes = timeToMinutes(bedtime);
    const baseMinutes = timeToMinutes('22:00');
    const diff = minutes - baseMinutes;
    return 50 + (diff / 120) * 50; // 22:00 = 50%, ±2시간 범위
  };

  // 기상 시간 그래프 높이 (07:00 기준으로 정규화)
  const getWakeTimeHeight = (wakeTime) => {
    const minutes = timeToMinutes(wakeTime);
    const baseMinutes = timeToMinutes('07:00');
    const diff = minutes - baseMinutes;
    return 50 + (diff / 120) * 50; // 07:00 = 50%, ±2시간 범위
  };

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
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">20</div>
                <div className="flex flex-col flex-1 items-center justify-center text-xl font-bold bg-primary/40 rounded-lg py-1">30</div>
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">40</div>
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
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">20</div>
                <div className="flex flex-col flex-1 items-center justify-center text-xl font-bold bg-accent-purple/40 rounded-lg py-1">30</div>
                <div className="flex flex-col flex-1 items-center justify-center opacity-40 text-sm">40</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 px-4">
          <h3 className="text-white text-sm font-bold px-2 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs">history</span>
            설정 변경 히스토리
          </h3>
          <div className="glass rounded-xl p-4 overflow-hidden relative">
            {/* 라인 그래프 */}
            <div className="relative h-40 w-full mb-4">
              {/* 그리드 라인 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="border-t border-white/5"></div>
                <div className="border-t border-white/10"></div>
                <div className="border-t border-white/5"></div>
              </div>
              
              {/* SVG 그래프 */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* 취침 시간 라인 */}
                <polyline
                  points={settingsHistory.map((item, index) => {
                    const x = (index / (settingsHistory.length - 1)) * 100;
                    const y = 100 - getBedtimeHeight(item.bedtime);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#135bec"
                  strokeWidth="0.5"
                  className="animate-fade-in"
                />
                
                {/* 기상 시간 라인 */}
                <polyline
                  points={settingsHistory.map((item, index) => {
                    const x = (index / (settingsHistory.length - 1)) * 100;
                    const y = 100 - getWakeTimeHeight(item.wakeTime);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#9d50bb"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  className="animate-fade-in"
                />
                
                {/* 취침 시간 점 */}
                {settingsHistory.map((item, index) => {
                  const x = (index / (settingsHistory.length - 1)) * 100;
                  const y = 100 - getBedtimeHeight(item.bedtime);
                  return (
                    <circle
                      key={`bed-${index}`}
                      cx={x}
                      cy={y}
                      r="1.5"
                      fill="#135bec"
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  );
                })}
                
                {/* 기상 시간 점 */}
                {settingsHistory.map((item, index) => {
                  const x = (index / (settingsHistory.length - 1)) * 100;
                  const y = 100 - getWakeTimeHeight(item.wakeTime);
                  return (
                    <circle
                      key={`wake-${index}`}
                      cx={x}
                      cy={y}
                      r="1.5"
                      fill="#9d50bb"
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* 날짜 레이블 */}
            <div className="flex justify-between text-[10px] text-[#92a4c9] font-medium border-t border-white/10 pt-2 mb-4">
              {settingsHistory.map((item, index) => (
                <span key={index} className={index === settingsHistory.length - 1 ? 'text-primary font-bold' : ''}>
                  {item.date}
                </span>
              ))}
            </div>

            {/* 범례 */}
            <div className="flex items-center justify-center gap-6 bg-white/5 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs text-[#92a4c9]">취침 시간</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-purple"></div>
                <span className="text-xs text-[#92a4c9]">기상 시간</span>
              </div>
            </div>

            {/* 통계 정보 */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-[10px] text-[#92a4c9] mb-1">평균 취침</p>
                <p className="text-sm font-bold text-primary">22:50</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-[10px] text-[#92a4c9] mb-1">평균 기상</p>
                <p className="text-sm font-bold text-accent-purple">06:50</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto p-6 flex flex-col gap-4 pb-32">
          <button className="w-full bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all duration-300 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]">
            설정 저장하기
          </button>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default SleepRoutineSettings;
