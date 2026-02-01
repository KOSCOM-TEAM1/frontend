import { useState } from 'react';
import { createPortal } from 'react-dom';

const TTS_PLAYLIST = [
  { id: 1, title: '2월 24일 마켓 브리핑', duration: '3:45', active: true },
  { id: 2, title: '어제 주요 지표 분석', duration: '2:12', active: false },
  { id: 3, title: '섹터별 수급 현황', duration: '4:30', active: false },
  { id: 4, title: '포트폴리오 리밸런싱 제언', duration: '1:55', active: false }
];

const VISUALIZER_HEIGHTS = [40, 70, 100, 80, 50, 90, 60, 40, 75, 30, 55, 85];

function TTSToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const content = (
    <div
      className="fixed inset-0 flex items-end justify-end p-4 pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      <div
        className="flex flex-col items-end gap-4 pointer-events-auto"
        style={{ maxWidth: 280, width: isOpen ? 280 : 'auto', marginBottom: 100 }}
      >
          {isOpen && (
            <div 
              className="frosty-glass glowing-border rounded-2xl w-full p-4 flex flex-col gap-4"
              style={{ animation: 'fadeInSlide 0.3s ease-out' }}
            >
              <div className="flex items-center gap-4 p-2 bg-white/5 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-12 rounded-full bg-gradient-to-tr from-primary to-accent-purple flex items-center justify-center shadow-lg shadow-primary/20 transition-transform active:scale-90 shrink-0"
                >
                  <span className="material-symbols-outlined text-white text-3xl fill-[1]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Now Playing</span>
                    <span className="text-[10px] font-medium text-slate-400">01:24</span>
                  </div>
                  <div className="flex items-end gap-0.5 h-6">
                    {VISUALIZER_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="visualizer-bar flex-1 min-w-[3px] rounded-sm animate-bar-grow"
                        style={{ 
                          height: `${h}%`,
                          animationDelay: `${i * 0.03}s`,
                          animationDuration: '0.6s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider">오늘의 브리핑</h4>
                <div className="playlist-scroll overflow-y-auto max-h-[180px] space-y-2 pr-1">
                  {TTS_PLAYLIST.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors border cursor-pointer ${
                        item.active
                          ? 'bg-primary/10 border-primary/20'
                          : 'hover:bg-white/5 border-transparent'
                      }`}
                    >
                      <div className="flex flex-col min-w-0">
                        <span className={`text-xs font-bold truncate ${item.active ? 'text-white' : 'text-slate-200'}`}>
                          {item.title}
                        </span>
                        <span className={`text-[10px] ${item.active ? 'text-primary/70' : 'text-slate-500'}`}>
                          {item.duration}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined text-lg shrink-0 ${item.active ? 'text-primary fill-[1]' : 'text-slate-400'}`}>
                        {item.active ? 'equalizer' : 'play_circle'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="size-14 rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90 hover:scale-105 group border-2 border-white/20"
            style={{ background: 'rgba(16, 22, 34, 0.9)', boxShadow: '0 0 15px rgba(19, 91, 236, 0.3)' }}
            aria-label={isOpen ? 'TTS 패널 닫기' : 'TTS 패널 열기'}
          >
            <div className="relative flex items-center justify-center">
              <span className={`material-symbols-outlined text-3xl transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                headset
              </span>
              {!isOpen && (
                <span className="absolute -top-1 -right-1 size-3 rounded-full border-2 border-[#101622] animate-pulse" style={{ background: '#00d2ff' }} />
              )}
            </div>
          </button>
        </div>
      </div>
  );

  return createPortal(content, document.body);
}

export default TTSToggle;
