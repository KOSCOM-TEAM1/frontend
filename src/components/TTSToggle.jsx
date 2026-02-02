import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ttsService from '../api/ttsService';

const TTS_PLAYLIST = [
  { 
    id: 1, 
    title: '2월 24일 마켓 브리핑', 
    text: '좋은 아침입니다. 2월 24일 오늘의 주요 시장 업데이트를 전해드립니다. 반도체 섹터의 강력한 실적 발표로 코스피가 0.85% 상승하며 2548포인트로 마감했습니다.',
  },
  { 
    id: 2, 
    title: '어제 주요 지표 분석', 
    text: '어제 발표된 주요 경제 지표를 분석해드리겠습니다. 미국 소비자물가지수가 전월 대비 0.3% 상승하며 시장 예상치를 소폭 상회했습니다.',
  },
  { 
    id: 3, 
    title: '섹터별 수급 현황', 
    text: '섹터별 자금 흐름을 살펴보겠습니다. 반도체와 이차전지 섹터로 외국인 자금이 집중되고 있으며, 바이오 섹터는 자금 이탈이 지속되고 있습니다.',
  },
  { 
    id: 4, 
    title: '포트폴리오 리밸런싱 제언', 
    text: '현재 포트폴리오를 분석한 결과, 해외 주식 비중 조정을 권장드립니다. 변동성이 큰 섹터의 비중을 줄이고 안정적인 배당주 비중을 늘리는 것이 좋겠습니다.',
  }
];

const VISUALIZER_HEIGHTS = [40, 70, 100, 80, 50, 90, 60, 40, 75, 30, 55, 85];

function TTSToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackDurations, setTrackDurations] = useState({}); // 각 트랙의 실제 길이 저장
  const audioRef = useRef(null);

  // 컴포넌트 언마운트 시 오디오 정리
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // 트랙 재생
  const playTrack = async (track) => {
    console.log('🎙️ 트랙 재생 시작:', track.title);
    setIsLoading(true);
    setCurrentTrackId(track.id);

    try {
      // TTS API 호출
      const result = await ttsService.textToSpeech({
        text: track.text,
        speaker: 'jinho',
        speed: 0,
        pitch: 0,
        volume: 0,
      });

      if (result.success) {
        console.log('✅ 음성 변환 성공:', result.data);
        
        // 기존 오디오 정리
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
        
        const audioUrl = result.data.downloadUrl;
        console.log('🎵 오디오 URL:', audioUrl);
        
        // 새로운 오디오 생성
        const newAudio = new Audio(audioUrl);
        audioRef.current = newAudio;
        
        // 이벤트 리스너 설정
        newAudio.addEventListener('timeupdate', () => {
          setCurrentTime(newAudio.currentTime);
        });
        
        newAudio.addEventListener('loadedmetadata', () => {
          console.log('📊 오디오 메타데이터 로드됨, duration:', newAudio.duration);
          setDuration(newAudio.duration);
          // 트랙별 실제 길이 저장
          setTrackDurations(prev => ({
            ...prev,
            [track.id]: newAudio.duration
          }));
        });
        
        newAudio.addEventListener('durationchange', () => {
          console.log('📊 Duration 변경됨:', newAudio.duration);
          setDuration(newAudio.duration);
          // 트랙별 실제 길이 저장
          setTrackDurations(prev => ({
            ...prev,
            [track.id]: newAudio.duration
          }));
        });
        
        newAudio.addEventListener('ended', () => {
          setIsPlaying(false);
          setCurrentTime(0);
          // 다음 트랙 자동 재생
          const currentIndex = TTS_PLAYLIST.findIndex(t => t.id === currentTrackId);
          if (currentIndex < TTS_PLAYLIST.length - 1) {
            const nextTrack = TTS_PLAYLIST[currentIndex + 1];
            playTrack(nextTrack);
          }
        });
        
        newAudio.addEventListener('play', () => setIsPlaying(true));
        newAudio.addEventListener('pause', () => setIsPlaying(false));
        
        newAudio.addEventListener('error', (e) => {
          console.error('❌ 오디오 재생 오류:', e);
          alert('음성 파일 재생에 실패했습니다.');
          setIsPlaying(false);
          setIsLoading(false);
        });
        
        // 재생 시작
        await newAudio.play();
        setIsPlaying(true);
        console.log('✅ 재생 시작됨');
      } else {
        console.error('❌ 음성 변환 실패:', result.error);
        alert(`음성 변환 실패: ${result.error.message}`);
      }
    } catch (error) {
      console.error('❌ 재생 에러:', error);
      alert('음성 재생에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 재생/일시정지 토글
  const handlePlayPause = async () => {
    if (!audioRef.current) {
      // 첫 재생
      const currentTrack = TTS_PLAYLIST.find(t => t.id === currentTrackId);
      await playTrack(currentTrack);
    } else if (isPlaying) {
      // 일시정지
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // 재개
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // 트랙 선택
  const handleTrackClick = async (track) => {
    if (track.id === currentTrackId && isPlaying) {
      // 현재 재생 중인 트랙 클릭 시 일시정지
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // 다른 트랙 선택 시 재생
      await playTrack(track);
    }
  };

  // 시간 포맷 (초 → mm:ss)
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
                  onClick={handlePlayPause}
                  disabled={isLoading}
                  className="size-12 rounded-full bg-gradient-to-tr from-primary to-accent-purple flex items-center justify-center shadow-lg shadow-primary/20 transition-transform active:scale-90 shrink-0 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span className="material-symbols-outlined text-white text-3xl fill-[1]">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  )}
                </button>
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Now Playing</span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <div className="flex items-end gap-0.5 h-6">
                    {VISUALIZER_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className={`visualizer-bar flex-1 min-w-[3px] rounded-sm ${isPlaying ? 'animate-bar-pulse' : ''}`}
                        style={{ 
                          height: `${h}%`,
                          animationDelay: `${i * 0.03}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider">오늘의 브리핑</h4>
                <div className="playlist-scroll overflow-y-auto max-h-[180px] space-y-2 pr-1">
                  {TTS_PLAYLIST.map((item) => {
                    const isActive = item.id === currentTrackId;
                    const isCurrentlyPlaying = isActive && isPlaying;
                    const trackDuration = trackDurations[item.id];
                    
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleTrackClick(item)}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors border cursor-pointer ${
                          isActive
                            ? 'bg-primary/10 border-primary/20'
                            : 'hover:bg-white/5 border-transparent'
                        }`}
                      >
                        <div className="flex flex-col min-w-0">
                          <span className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-200'}`}>
                            {item.title}
                          </span>
                          <span className={`text-[10px] ${isActive ? 'text-primary/70' : 'text-slate-500'}`}>
                            {trackDuration ? formatTime(trackDuration) : '로딩 중...'}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-lg shrink-0 ${isActive ? 'text-primary fill-[1]' : 'text-slate-400'}`}>
                          {isCurrentlyPlaying ? 'equalizer' : 'play_circle'}
                        </span>
                      </div>
                    );
                  })}
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
