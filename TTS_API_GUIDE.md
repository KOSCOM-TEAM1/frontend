# TTS API 연결 가이드

## 🎙️ CLOVA Voice TTS API

네이버 클라우드 CLOVA Voice를 이용한 음성 합성 API 서비스입니다.

---

## 📡 API 엔드포인트

### 1. 뉴스 분석 음성 변환
**POST** `/api/tts/news-analysis/{analysisId}`

AI 분석 결과를 음성(MP3)으로 변환합니다.

**Parameters**:
- `analysisId` (path, 필수): 분석 ID
- `speaker` (query, 선택): 화자 (기본값: 'jinho')

**Response**:
```json
{
  "success": true,
  "data": {
    "filename": "audio_123.mp3",
    "downloadUrl": "/api/tts/audio/audio_123.mp3",
    "speaker": "jinho",
    "message": "음성 변환 완료"
  }
}
```

---

### 2. 커스텀 텍스트 음성 변환
**POST** `/api/tts/custom`

임의의 텍스트를 음성으로 변환합니다.

**Request Body**:
```json
{
  "text": "안녕하세요, 좋은 아침입니다",
  "speaker": "jinho",
  "speed": 0,
  "pitch": 0,
  "volume": 0
}
```

**Parameters**:
- `text` (필수): 변환할 텍스트
- `speaker` (선택): 화자
- `speed` (선택): 속도 (-5 ~ 5)
- `pitch` (선택): 음높이 (-5 ~ 5)
- `volume` (선택): 볼륨 (-5 ~ 5)

**Response**:
```json
{
  "success": true,
  "data": {
    "filename": "audio_456.mp3",
    "downloadUrl": "/api/tts/audio/audio_456.mp3",
    "speaker": "jinho",
    "message": "음성 변환 완료"
  }
}
```

---

### 3. 화자 목록 조회
**GET** `/api/tts/speakers`

지원하는 화자 목록을 조회합니다.

**Response**:
```json
{
  "success": true,
  "data": ["jinho", "clara", "matt", "shinji", ...]
}
```

---

### 4. 음성 파일 다운로드/재생
**GET** `/api/tts/audio/{filename}`

생성된 MP3 파일을 다운로드하거나 재생합니다.

**Parameters**:
- `filename` (path, 필수): 파일명

---

## 💻 프론트엔드 사용법

### 1. Import
```javascript
import ttsService from '../api/ttsService';
```

---

### 2. 뉴스 분석 음성 변환

```javascript
const handleNewsToSpeech = async () => {
  const analysisId = 123;
  const speaker = 'jinho';
  
  const result = await ttsService.newsAnalysisToSpeech(analysisId, speaker);
  
  if (result.success) {
    console.log('파일명:', result.data.filename);
    console.log('다운로드 URL:', result.data.downloadUrl);
    
    // 음성 재생
    const audio = ttsService.playAudio(result.data.filename);
    audio.play();
  }
};
```

---

### 3. 커스텀 텍스트 음성 변환

```javascript
const handleTextToSpeech = async () => {
  const result = await ttsService.textToSpeech({
    text: '안녕하세요, 좋은 아침입니다.',
    speaker: 'jinho',
    speed: 0,
    pitch: 0,
    volume: 0,
  });
  
  if (result.success) {
    // 음성 재생
    const audio = new Audio(result.data.downloadUrl);
    audio.play();
  }
};
```

---

### 4. 화자 목록 조회

```javascript
const [speakers, setSpeakers] = useState([]);

useEffect(() => {
  const fetchSpeakers = async () => {
    const result = await ttsService.getSpeakers();
    if (result.success) {
      setSpeakers(result.data);
    }
  };
  fetchSpeakers();
}, []);

// UI에 표시
return (
  <select>
    {speakers.map(speaker => (
      <option key={speaker} value={speaker}>{speaker}</option>
    ))}
  </select>
);
```

---

### 5. 음성 파일 재생 (간단한 방법)

```javascript
// 방법 1: playAudio 헬퍼 사용
const audio = ttsService.playAudio('audio_123.mp3');
audio.play();

// 방법 2: Audio 객체 직접 생성
const audioUrl = ttsService.getAudioUrl('audio_123.mp3');
const audio = new Audio(audioUrl);
audio.play();
```

---

## 🎯 실전 예제

### TTS 버튼이 있는 컴포넌트

```javascript
import { useState } from 'react';
import ttsService from '../api/ttsService';

function NewsCard({ analysisId, text }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const handleTTS = async () => {
    if (isPlaying && audio) {
      // 재생 중이면 중지
      audio.pause();
      setIsPlaying(false);
      return;
    }

    // 음성 변환 및 재생
    const result = await ttsService.newsAnalysisToSpeech(analysisId);
    
    if (result.success) {
      const newAudio = ttsService.playAudio(result.data.filename);
      
      newAudio.onplay = () => setIsPlaying(true);
      newAudio.onended = () => setIsPlaying(false);
      newAudio.onerror = () => {
        console.error('음성 재생 실패');
        setIsPlaying(false);
      };
      
      setAudio(newAudio);
      newAudio.play();
    }
  };

  return (
    <div className="news-card">
      <p>{text}</p>
      <button onClick={handleTTS}>
        {isPlaying ? '⏸️ 일시정지' : '🎙️ 듣기'}
      </button>
    </div>
  );
}
```

---

### 커스텀 텍스트 TTS 입력 폼

```javascript
import { useState } from 'react';
import ttsService from '../api/ttsService';

function TTSForm() {
  const [text, setText] = useState('');
  const [speaker, setSpeaker] = useState('jinho');
  const [speed, setSpeed] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await ttsService.textToSpeech({
      text,
      speaker,
      speed,
      pitch: 0,
      volume: 0,
    });
    
    if (result.success) {
      const audio = new Audio(result.data.downloadUrl);
      audio.play();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="변환할 텍스트 입력"
      />
      
      <select value={speaker} onChange={(e) => setSpeaker(e.target.value)}>
        <option value="jinho">진호</option>
        <option value="clara">클라라</option>
      </select>
      
      <input 
        type="range" 
        min="-5" 
        max="5" 
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
      />
      <label>속도: {speed}</label>
      
      <button type="submit">🎙️ 음성 변환</button>
    </form>
  );
}
```

---

## 🔧 TTSToggle 컴포넌트 업데이트

기존 TTSToggle 컴포넌트에 실제 API 연결:

```javascript
import { useState } from 'react';
import ttsService from '../api/ttsService';

function TTSToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleToggleTTS = async () => {
    if (isPlaying && currentAudio) {
      // 일시정지
      currentAudio.pause();
      setIsPlaying(false);
    } else if (currentAudio) {
      // 재개
      currentAudio.play();
      setIsPlaying(true);
    } else {
      // 새로운 음성 생성
      const result = await ttsService.textToSpeech({
        text: '좋은 아침입니다. 오늘의 시장 업데이트를 들려드립니다.',
        speaker: 'jinho',
      });
      
      if (result.success) {
        const audio = new Audio(result.data.downloadUrl);
        audio.onended = () => setIsPlaying(false);
        setCurrentAudio(audio);
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="tts-toggle">
      <button onClick={() => setIsOpen(!isOpen)}>
        🎙️ TTS
      </button>
      
      {isOpen && (
        <div className="tts-panel">
          <button onClick={handleToggleTTS}>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## 📝 API 호출 흐름

```
1. 사용자가 "듣기" 버튼 클릭
   ↓
2. ttsService.newsAnalysisToSpeech(123) 호출
   ↓
3. POST /api/tts/news-analysis/123?speaker=jinho
   ↓
4. 서버가 CLOVA Voice로 음성 변환
   ↓
5. 응답: { filename: "audio_123.mp3", downloadUrl: "/api/tts/audio/audio_123.mp3" }
   ↓
6. Audio 객체 생성 및 재생
   ↓
7. 사용자가 음성 듣기
```

---

## 🐛 에러 처리

```javascript
const result = await ttsService.textToSpeech({ text: '안녕하세요' });

if (!result.success) {
  // 에러 처리
  console.error('에러 코드:', result.error.code);
  console.error('에러 메시지:', result.error.message);
  
  switch (result.error.code) {
    case 'INVALID_INPUT':
      alert('텍스트를 입력해주세요.');
      break;
    case 'TTS_ERROR':
      alert('음성 변환에 실패했습니다.');
      break;
    case 'NETWORK_ERROR':
      alert('네트워크 오류가 발생했습니다.');
      break;
  }
}
```

---

## 💡 Tips

### 음성 재생 제어
```javascript
const audio = new Audio(audioUrl);

// 재생
audio.play();

// 일시정지
audio.pause();

// 재생 위치 이동
audio.currentTime = 5; // 5초로 이동

// 볼륨 조절 (0.0 ~ 1.0)
audio.volume = 0.5;

// 이벤트 리스너
audio.onplay = () => console.log('재생 시작');
audio.onpause = () => console.log('일시정지');
audio.onended = () => console.log('재생 완료');
audio.onerror = (e) => console.error('재생 오류', e);
```

### 다운로드 링크 생성
```javascript
const downloadUrl = ttsService.getAudioUrl('audio_123.mp3');

<a href={downloadUrl} download="음성파일.mp3">
  다운로드
</a>
```
