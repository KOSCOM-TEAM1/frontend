import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ttsService from '../api/ttsService';

// 타임라인 뉴스와 동일한 플레이리스트 (CLOVA TTS용)
const TTS_PLAYLIST = [
  {
    id: 1,
    time: '오전 12:20',
    title: '젠슨 황·머스크 "메모리 확보 비상"…삼성전자 사상 최고가 경신',
    text: '젠슨 황·머스크 메모리 확보 비상, 삼성전자 사상 최고가 경신. 메모리 공급난이 2027년까지 지속될 전망이다. 젠슨 황 엔비디아 CEO와 일론 머스크가 잇달아 메모리 병목을 우려할 만큼 공급난이 심화되고 있다. 모건스탠리는 삼성전자와 SK하이닉스의 내년 합산 영업이익을 542조 원으로 전망하며 지난해 대비 6배 급증을 예상했다. 빅테크 AI 인프라 764조 투입, 코스피 6.84% 급등 사상 최고, HBM 이후 HBF 시대 개막이 겹치며 반도체 투톱 주가가 강세를 이어가고 있다.',
  },
  {
    id: 2,
    time: '오전 2:15',
    title: 'JP모건 "코스피 6000 간다…강세장 땐 7500 가능"',
    text: 'JP모건 코스피 6000 간다, 강세장 땐 7500 가능. 글로벌 IB JP모건이 코스피 목표치로 6000을 제시하며 강세장에선 7500까지 상승할 수 있다고 전망했다. 전망의 핵심은 삼성전자와 SK하이닉스 실적이다. 메모리 반도체 슈퍼사이클에 힘입어 올해 EPS 전망치가 컨센서스 대비 최대 40% 오를 것으로 내다봤으며, 반도체 투톱 주가가 현재 대비 45~50% 추가 상승 여력이 있다고 평가했다. 지배구조 개혁 정책도 긍정적 영향을 미칠 것으로 예상했다.',
  },
  {
    id: 3,
    time: '오전 4:30',
    title: '[특징주] 상장폐지 모면한 파두, 거래 재개 첫날 상한가',
    text: '특징주 상장폐지 모면한 파두, 거래 재개 첫날 상한가. 상장폐지 위기를 넘긴 반도체 설계업체 파두가 거래 재개 첫날 상한가로 치솟았다. 3일 오전 9시 27분 기준 파두는 전 거래일 대비 6350원, 29.88% 뛴 2만 7600원에 거래됐다. 한국거래소는 전날 파두를 상장적격성 실질심사 대상에서 제외하기로 했다고 공시했다. 파두는 거래 재개와 함께 남이현 단독 대표 체제로 경영 체제를 전환했다.',
  },
  {
    id: 4,
    time: '오전 6:45',
    title: '美 암호화폐, 은행·거래소·의회·백악관 전쟁터 되다',
    text: '미국 암호화폐, 은행 거래소 의회 백악관 전쟁터 되다. 스테이블코인 보유자에게 지급되는 이자 성격의 보상을 둘러싸고 미국 시장이 충돌 국면이다. JP모건, BoA 등 금융권은 보상형 스테이블코인이 사실상 무허가 예금이라 비판하고, 코인베이스, 서클 등 업계는 디지털 혁신의 정수로 맞선다. SEC와 CFTC의 규제 주도권 다툼, 의회 입법 교착 속 트럼프 행정부가 행정명령을 통한 우회로를 모색하고 있다.',
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
            speaker: 'jinho',
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
          speaker: 'jinho',
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

  const currentIndex = TTS_PLAYLIST.findIndex(t => t.id === currentTrackId) + 1;
  const totalDuration = TTS_PLAYLIST.reduce((sum, t) => sum + (trackDurations[t.id] || 0), 0);
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
              <div className="flex flex-col gap-2">
                <h4 className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider">오늘의 뉴스 (타임라인 4건)</h4>
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
