import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ttsService from '../api/ttsService';

// 타임라인 뉴스 6개와 동일한 플레이리스트 (CLOVA TTS용)
const TTS_PLAYLIST = [
  {
    id: 1,
    time: '오후 11:30',
    title: '엔비디아, CES 2026서 루빈 GPU 양산 가속화·자율주행 AI 공개',
    text: '엔비디아, CES 2026서 루빈 GPU 양산 가속화·자율주행 AI 공개. 젠슨 황 엔비디아 CEO는 CES 2026 기조연설에서 블랙웰을 이을 차세대 GPU 아키텍처 루빈이 예상보다 빠르게 본격 양산에 돌입했다고 밝혔다. 루빈은 블랙웰 대비 성능이 4배 향상됐으며, 추론 토큰 비용은 10분의 1로 절감됐다.',
  },
  {
    id: 2,
    time: '오전 1:15',
    title: '테슬라, 모델 S·모델 X 2026년 2분기 단종 확정',
    text: '테슬라, 모델 S·모델 X 2026년 2분기 단종 확정. 일론 머스크 테슬라 CEO는 2026년 2분기 말까지 모델 S와 모델 X의 생산을 완전히 중단할 계획이라고 공식적으로 밝혔다. 기존 생산 라인은 휴머노이드 로봇 옵티머스 생산 라인으로 전환된다.',
  },
  {
    id: 3,
    time: '오전 3:20',
    title: '삼성전자, 2025년 4분기 영업이익 20조원 달성…HBM4 공급 가속화',
    text: '삼성전자, 2025년 4분기 영업이익 20조원 달성, HBM4 공급 가속화. 삼성전자는 2025년 4분기 매출은 93.8조원으로 집계돼 분기 기준 역대 최대치를 경신했다. DS 부문이 주도한 고부가 제품 판매 확대 전략이 전사 실적을 강력하게 견인한 결과로 풀이된다. 2026년 1분기부터 차세대 HBM4 제품 공급을 시작할 계획이다.',
  },
  {
    id: 4,
    time: '오전 5:00',
    title: '코스피, 5,200 돌파하며 사상 최고치 경신',
    text: '코스피, 5,200 돌파하며 사상 최고치 경신. 벤치마크 KOSPI는 목요일 0.98% 상승하여 5,221로 마감하며 강력한 반도체 실적이 시장 심리를 끌어올리면서 사상 최고치를 기록했다. 투자자들은 4분기 강력한 실적과 지속적인 AI 주도의 수요에 힘입어 첨단 메모리 제품의 지속적인 성장 기대를 강화했다.',
  },
  {
    id: 5,
    time: '오전 6:45',
    title: 'SK하이닉스, 주가 91만원 돌파…황제주 진입 코앞',
    text: 'SK하이닉스, 주가 91만원 돌파, 황제주 진입 코앞. SK하이닉스가 주가 91만원을 돌파하며 황제주 진입을 코앞에 뒀다. 증권사들은 목표가를 일제히 상향 조정했으며, 메리츠증권이 145만원으로 가장 높게 제시했다. 모건 스탠리는 2026년 DRAM 평균 가격이 62%, NAND는 75% 상승할 것으로 전망했다.',
  },
  {
    id: 6,
    time: '오전 7:30',
    title: '네이버, 2026년 안정적 이익 성장 확정…신사업 가치 주가 반영 전망',
    text: '네이버, 2026년 안정적 이익 성장 확정, 신사업 가치 주가 반영 전망. 하나증권은 네이버에 대해 2026년 안정적 이익 성장이 확정적인 상황에서 신사업 가치가 주가에 반영될 가능성이 높다고 밝혔다. 목표주가는 35만 원으로 제시했으며, 1분기 쇼핑 에이전트, 2분기 AI 탭, 이후 통합 에이전트를 출시할 계획이다.',
  },
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
  const urlCacheRef = useRef({}); // 트랙별 오디오 URL 캐시 (재생 시 API 재호출 방지)
  const preloadAbortRef = useRef(false);

  // 컴포넌트 언마운트 시 오디오 정리
  useEffect(() => {
    return () => {
      preloadAbortRef.current = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // 패널 열면 재생 안 한 트랙들의 재생 시간 미리 로드 (순차 호출로 API 부담 완화)
  useEffect(() => {
    if (!isOpen) return;
    preloadAbortRef.current = false;

    const preloadDurations = async () => {
      for (const track of TTS_PLAYLIST) {
        if (preloadAbortRef.current) break;
        if (trackDurations[track.id]) continue; // 이미 있으면 스킵

        try {
          const result = await ttsService.textToSpeech({
            text: track.text,
            speaker: 'nara',
            speed: 0,
            pitch: 0,
            volume: 0,
          });
          if (preloadAbortRef.current) break;
          if (!result.success || !result.data?.filename) continue;

          const audioUrl = ttsService.getAudioUrl(result.data.filename);
          urlCacheRef.current[track.id] = audioUrl;

          const audio = new Audio(audioUrl);
          await new Promise((resolve, reject) => {
            const onLoaded = () => {
              audio.removeEventListener('loadedmetadata', onLoaded);
              audio.removeEventListener('error', onError);
              setTrackDurations(prev => ({ ...prev, [track.id]: audio.duration }));
              resolve();
            };
            const onError = (e) => {
              audio.removeEventListener('loadedmetadata', onLoaded);
              audio.removeEventListener('error', onError);
              reject(e);
            };
            audio.addEventListener('loadedmetadata', onLoaded);
            audio.addEventListener('error', onError);
            if (audio.duration && !isNaN(audio.duration)) onLoaded();
          });
        } catch (e) {
          if (!preloadAbortRef.current) console.warn('TTS 미리로드 실패:', track.id, e);
        }
      }
    };
    preloadDurations();
  }, [isOpen]);

  // 트랙 재생 (캐시 있으면 API 생략)
  const playTrack = async (track) => {
    console.log('트랙 재생 시작:', track.title);
    setIsLoading(true);
    setCurrentTrackId(track.id);

    try {
      let audioUrl = urlCacheRef.current[track.id];

      if (!audioUrl) {
        const result = await ttsService.textToSpeech({
          text: track.text,
          speaker: 'nara',
          speed: 0,
          pitch: 0,
          volume: 0,
        });
        if (!result.success || !result.data?.filename) {
          alert(result.error?.message || '음성 변환에 실패했습니다.');
          setIsLoading(false);
          return;
        }
        audioUrl = ttsService.getAudioUrl(result.data.filename);
        urlCacheRef.current[track.id] = audioUrl;
      }

      // 기존 오디오 정리
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      const newAudio = new Audio(audioUrl);
        audioRef.current = newAudio;
        
        // 이벤트 리스너 설정
        newAudio.addEventListener('timeupdate', () => {
          setCurrentTime(newAudio.currentTime);
        });
        
        newAudio.addEventListener('loadedmetadata', () => {
          console.log('오디오 메타데이터 로드됨, duration:', newAudio.duration);
          setDuration(newAudio.duration);
          // 트랙별 실제 길이 저장
          setTrackDurations(prev => ({
            ...prev,
            [track.id]: newAudio.duration
          }));
        });
        
        newAudio.addEventListener('durationchange', () => {
          console.log('Duration 변경됨:', newAudio.duration);
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
          // 방금 끝난 트랙 기준으로 다음 트랙 자동 재생
          const currentIndex = TTS_PLAYLIST.findIndex(t => t.id === track.id);
          if (currentIndex >= 0 && currentIndex < TTS_PLAYLIST.length - 1) {
            const nextTrack = TTS_PLAYLIST[currentIndex + 1];
            playTrack(nextTrack);
          }
        });
        
        newAudio.addEventListener('play', () => setIsPlaying(true));
        newAudio.addEventListener('pause', () => setIsPlaying(false));
        
        newAudio.addEventListener('error', (e) => {
          console.error('오디오 재생 오류:', e);
          alert('음성 파일 재생에 실패했습니다.');
          setIsPlaying(false);
          setIsLoading(false);
        });
        
        // 재생 시작
        await newAudio.play();
        setIsPlaying(true);
        console.log('재생 시작됨');
    } catch (error) {
      console.error('재생 에러:', error);
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

  // 전체 재생: 1번 트랙부터 끝까지 연속 재생 (기존 ended → 다음 트랙 로직 활용)
  const handlePlayAll = async () => {
    if (isPlaying && currentTrackId === 1) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    await playTrack(TTS_PLAYLIST[0]);
  };

  // 전체 재생용: 총 길이, 전체 경과 시간
  const totalDuration = TTS_PLAYLIST.reduce((sum, t) => sum + (trackDurations[t.id] || 0), 0);
  const currentIndex = TTS_PLAYLIST.findIndex(t => t.id === currentTrackId) + 1;
  const elapsedBeforeCurrent = TTS_PLAYLIST.slice(0, currentIndex - 1).reduce(
    (sum, t) => sum + (trackDurations[t.id] || 0),
    0
  );
  const totalElapsed = elapsedBeforeCurrent + currentTime;

  const content = (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] flex items-end justify-end px-4 pb-4 pointer-events-none"
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                      {isPlaying || duration > 0 ? `트랙 ${currentIndex}/${TTS_PLAYLIST.length}` : 'Now Playing'}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  {totalDuration > 0 && (
                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span>전체</span>
                      <span>{formatTime(totalElapsed)} / {formatTime(totalDuration)}</span>
                    </div>
                  )}
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
              <button
                type="button"
                onClick={handlePlayAll}
                disabled={isLoading}
                className="w-full py-2.5 rounded-xl bg-primary/20 hover:bg-primary/30 border border-primary/40 flex items-center justify-center gap-2 text-primary font-bold text-sm transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-lg">playlist_play</span>
                <span>전체 재생 (1→6 연속)</span>
              </button>
              <div className="flex flex-col gap-2">
                <h4 className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider">오늘의 뉴스 (타임라인 6건)</h4>
                <div className="playlist-scroll overflow-y-auto max-h-[220px] space-y-2 pr-1">
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
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className={`text-[10px] font-semibold text-slate-400 ${isActive ? 'text-primary/90' : ''}`}>
                            {item.time}
                          </span>
                          <span className={`text-xs font-bold truncate mt-0.5 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                            {item.title}
                          </span>
                          <span className={`text-[10px] mt-0.5 ${isActive ? 'text-primary/70' : 'text-slate-500'}`}>
                            {trackDuration ? formatTime(trackDuration) : '로딩 중...'}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-lg shrink-0 ml-2 ${isActive ? 'text-primary fill-[1]' : 'text-slate-400'}`}>
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
