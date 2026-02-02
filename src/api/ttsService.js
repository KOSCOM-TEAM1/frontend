import apiClient from './client';

/**
 * CLOVA Voice TTS API 서비스
 */
const ttsService = {
  /**
   * 뉴스 분석 음성 변환
   * AI 분석 결과를 CLOVA Voice로 음성(MP3)으로 변환합니다.
   * 
   * @param {number} analysisId - 분석 ID
   * @param {string} speaker - 화자 (기본값: 'jinho')
   * @returns {Promise} 음성 파일 정보
   * 
   * @example
   * const result = await ttsService.newsAnalysisToSpeech(123, 'jinho');
   * // { success: true, data: { filename: "...", downloadUrl: "...", speaker: "jinho", message: "..." } }
   */
  newsAnalysisToSpeech: async (analysisId, speaker = 'jinho') => {
    try {
      const response = await apiClient.post(
        `/api/tts/news-analysis/${analysisId}`,
        null,
        {
          params: { speaker }
        }
      );
      
      console.log(`🎙️ 뉴스 분석 ${analysisId} 음성 변환 완료:`, response.data);
      
      if (response.data.success) {
        return {
          success: true,
          data: response.data.data,
        };
      } else {
        return {
          success: false,
          error: response.data.error,
        };
      }
    } catch (error) {
      console.error('newsAnalysisToSpeech 에러:', error);
      return {
        success: false,
        error: {
          code: 'TTS_ERROR',
          message: error.message || '음성 변환에 실패했습니다.',
        },
      };
    }
  },

  /**
   * 커스텀 텍스트 음성 변환
   * 임의의 텍스트를 CLOVA Voice로 음성으로 변환합니다.
   * 
   * @param {Object} options - 음성 변환 옵션
   * @param {string} options.text - 변환할 텍스트 (필수)
   * @param {string} options.speaker - 화자 (선택, 기본값: 'jinho')
   * @param {number} options.speed - 속도 (선택, -5 ~ 5)
   * @param {number} options.pitch - 음높이 (선택, -5 ~ 5)
   * @param {number} options.volume - 볼륨 (선택, -5 ~ 5)
   * @returns {Promise} 음성 파일 정보
   * 
   * @example
   * const result = await ttsService.textToSpeech({
   *   text: "안녕하세요",
   *   speaker: "jinho",
   *   speed: 0,
   *   pitch: 0,
   *   volume: 0
   * });
   */
  textToSpeech: async ({ text, speaker = 'jinho', speed = 0, pitch = 0, volume = 0 }) => {
    try {
      if (!text || text.trim() === '') {
        return {
          success: false,
          error: {
            code: 'INVALID_INPUT',
            message: '변환할 텍스트를 입력해주세요.',
          },
        };
      }

      const response = await apiClient.post('/api/tts/custom', {
        text,
        speaker,
        speed,
        pitch,
        volume,
      });
      
      console.log('🎙️ 텍스트 음성 변환 완료:', response.data);
      
      if (response.data.success) {
        return {
          success: true,
          data: response.data.data,
        };
      } else {
        return {
          success: false,
          error: response.data.error,
        };
      }
    } catch (error) {
      console.error('textToSpeech 에러:', error);
      return {
        success: false,
        error: {
          code: 'TTS_ERROR',
          message: error.message || '음성 변환에 실패했습니다.',
        },
      };
    }
  },

  /**
   * 화자 목록 조회
   * CLOVA Voice에서 지원하는 화자 목록을 조회합니다.
   * 
   * @returns {Promise} 화자 목록
   * 
   * @example
   * const result = await ttsService.getSpeakers();
   * // { success: true, data: [...] }
   */
  getSpeakers: async () => {
    try {
      const response = await apiClient.get('/api/tts/speakers');
      
      console.log('🎤 화자 목록 조회 완료:', response.data);
      
      if (response.data.success) {
        return {
          success: true,
          data: response.data.data,
        };
      } else {
        return {
          success: false,
          error: response.data.error,
        };
      }
    } catch (error) {
      console.error('getSpeakers 에러:', error);
      return {
        success: false,
        error: {
          code: 'FETCH_ERROR',
          message: error.message || '화자 목록을 불러오는데 실패했습니다.',
        },
      };
    }
  },

  /**
   * 음성 파일 URL 생성
   * 생성된 MP3 파일의 다운로드/재생 URL을 반환합니다.
   * 
   * @param {string} filename - 파일명
   * @returns {string} 음성 파일 URL
   * 
   * @example
   * const audioUrl = ttsService.getAudioUrl('audio_123.mp3');
   * // "/api/tts/audio/audio_123.mp3"
   */
  getAudioUrl: (filename) => {
    return `/api/tts/audio/${filename}`;
  },

  /**
   * 음성 파일 재생
   * 음성 파일을 Audio 객체로 재생합니다.
   * 
   * @param {string} filename - 파일명
   * @returns {Audio} Audio 객체
   * 
   * @example
   * const audio = ttsService.playAudio('audio_123.mp3');
   * audio.play();
   */
  playAudio: (filename) => {
    const audioUrl = ttsService.getAudioUrl(filename);
    const audio = new Audio(audioUrl);
    return audio;
  },
};

export default ttsService;
