# TTS 뉴스 API 연결 가이드

## 📋 개요

TTS 기능을 실제 뉴스 API와 연결하여 DB에서 뉴스 데이터를 불러와 음성으로 변환하는 기능을 구현했습니다.

---

## 🔄 변경 사항

### **1. 뉴스 서비스 API 생성**

#### **파일**: `/src/api/newsService.js`

```javascript
const newsService = {
  // 뉴스 목록 조회
  getNewsList: async (params = {}) => { ... },
  
  // 뉴스 상세 조회
  getNewsDetail: async (newsId) => { ... },
  
  // 분석된 뉴스만 조회 (isAnalyzed = true)
  getAnalyzedNews: async (params = {}) => { ... },
};
```

**주요 기능**:
- `GET /api/v1/news` - 뉴스 목록 조회 (페이징, 정렬, 필터링 지원)
- `GET /api/v1/news/{newsId}` - 특정 뉴스 상세 조회
- `GET /api/v1/news?isAnalyzed=true` - 분석된 뉴스만 조회

---

### **2. TTSToggle 컴포넌트 업데이트**

#### **파일**: `/src/components/TTSToggle.jsx`

#### **변경 전 (목 데이터)**:
```javascript
const TTS_PLAYLIST = [
  { id: 1, title: '마켓 브리핑', text: '...' },
  { id: 2, title: '주요 지표 분석', text: '...' },
  // ...
];
```

#### **변경 후 (API 기반)**:
```javascript
// 뉴스 API에서 플레이리스트 불러오기
useEffect(() => {
  const fetchNews = async () => {
    const result = await newsService.getAnalyzedNews({ size: 10 });
    
    if (result.success) {
      const newsPlaylist = result.data.content?.map(news => ({
        id: news.id,
        analysisId: news.id,
        title: news.title,
        source: news.source,
        publishedAt: news.publishedAt,
        content: news.content,
      }));
      
      setPlaylist(newsPlaylist);
    }
  };
  
  fetchNews();
}, []);
```

#### **음성 변환 로직**:
```javascript
// 뉴스 분석 ID가 있으면 newsAnalysisToSpeech 사용
if (track.analysisId) {
  result = await ttsService.newsAnalysisToSpeech(track.analysisId, 'jinho');
} else {
  // 없으면 텍스트 직접 변환
  result = await ttsService.textToSpeech({
    text: track.content || track.title,
    speaker: 'jinho',
  });
}
```

---

### **3. AINewsTimeline 페이지 업데이트**

#### **파일**: `/src/pages/AINewsTimeline.jsx`

#### **변경 전 (목 데이터)**:
```javascript
const newsItems = [
  {
    time: '14:30',
    title: '연준, 기준금리 동결',
    summary: '...',
    // ...
  },
];
```

#### **변경 후 (API 기반)**:
```javascript
useEffect(() => {
  const fetchNews = async () => {
    const result = await newsService.getNewsList({ size: 20 });
    
    if (result.success) {
      const formattedNews = result.data.content?.map((news, index) => ({
        id: news.id,
        time: formatTime(news.publishedAt),
        title: news.title,
        summary: news.content,
        tags: news.relatedStockIds?.split(',').map(id => `#${id}`),
        image: news.url,
        source: news.source,
        isAnalyzed: news.isAnalyzed,
        hasButton: news.isAnalyzed,
      }));
      
      setNewsItems(formattedNews);
    }
  };
  
  fetchNews();
}, []);
```

---

## 🎯 API 흐름

### **TTS 플레이리스트 생성**

```
1. TTSToggle 컴포넌트 마운트
   ↓
2. newsService.getAnalyzedNews() 호출
   ↓
3. GET /api/v1/news?isAnalyzed=true
   ↓
4. 분석된 뉴스 목록 응답
   ↓
5. 플레이리스트 형식으로 변환
   ↓
6. UI에 렌더링
```

### **음성 재생**

```
1. 사용자가 뉴스 항목 클릭
   ↓
2. analysisId 확인
   ↓
3. ttsService.newsAnalysisToSpeech(analysisId) 호출
   ↓
4. POST /api/tts/news-analysis/{analysisId}
   ↓
5. 음성 파일 URL 응답
   ↓
6. Audio 객체 생성 및 재생
   ↓
7. 재생 완료 후 다음 트랙 자동 재생
```

---

## 📊 데이터 구조

### **API 응답 (뉴스 목록)**

```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 123,
        "title": "연준, 기준금리 동결 결정",
        "content": "연준은 인플레이션에 대한...",
        "source": "Bloomberg",
        "url": "https://...",
        "publishedAt": "2026-02-01T14:30:00Z",
        "relatedStockIds": "AAPL,MSFT,GOOGL",
        "isAnalyzed": true,
        "createdAt": "2026-02-01T15:00:00Z",
        "updatedAt": "2026-02-01T15:00:00Z"
      }
    ],
    "pageable": {
      "pageNumber": 0,
      "pageSize": 10
    },
    "totalElements": 50,
    "totalPages": 5
  }
}
```

### **TTS 플레이리스트 (변환 후)**

```javascript
[
  {
    id: 123,
    analysisId: 123,
    title: "연준, 기준금리 동결 결정",
    source: "Bloomberg",
    publishedAt: "2026-02-01T14:30:00Z",
    content: "연준은 인플레이션에 대한...",
  },
  // ...
]
```

---

## 🎨 UI 개선사항

### **TTSToggle 컴포넌트**

1. **로딩 상태 추가**
   - 플레이리스트 로드 중 스피너 표시
   - "AI 뉴스 브리핑 로딩 중..." 텍스트

2. **빈 상태 처리**
   - 뉴스 없을 때: "뉴스가 없습니다" 메시지

3. **추가 정보 표시**
   - 뉴스 출처 (source) 표시
   - 트랙 길이 (duration) 동적 표시

### **AINewsTimeline 페이지**

1. **로딩 상태**
   - 스피너 애니메이션
   - "로딩 중..." 텍스트

2. **에러 상태**
   - 에러 아이콘 + 메시지

3. **빈 상태**
   - "표시할 뉴스가 없습니다" 메시지

4. **동적 날짜**
   - 현재 날짜 표시: "오늘, 2월 1일"

---

## 🔧 사용 방법

### **TTS 플레이리스트 재생**

1. 오른쪽 하단의 헤드셋 아이콘 클릭
2. TTS 패널 열림
3. "AI 뉴스 브리핑" 플레이리스트 확인
4. 뉴스 항목 클릭 → 음성 재생
5. 자동으로 다음 뉴스 재생

### **뉴스 타임라인 확인**

1. 하단 네비게이션에서 "뉴스" 탭 선택
2. 실시간 뉴스 타임라인 확인
3. "AI 과거 유사사례 보기" 버튼 클릭 (분석된 뉴스만)

---

## 🧪 테스트 방법

### **1. 뉴스 API 테스트**

```javascript
// 브라우저 콘솔에서
import newsService from './api/newsService';

// 뉴스 목록 조회
const result = await newsService.getNewsList({ size: 5 });
console.log(result);

// 분석된 뉴스만 조회
const analyzed = await newsService.getAnalyzedNews({ size: 5 });
console.log(analyzed);
```

### **2. TTS 기능 테스트**

1. 개발자 도구 콘솔 확인
2. 로그 메시지 확인:
   - `📰 TTS용 뉴스 목록 불러오기 시작`
   - `✅ TTS 플레이리스트 생성`
   - `🎙️ 트랙 재생 시작`
   - `📰 뉴스 분석 → 음성 변환`

---

## 🚨 주요 변경점 요약

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| **데이터 소스** | 하드코딩된 목 데이터 | API에서 실시간 조회 |
| **TTS API** | `textToSpeech` (텍스트 직접 변환) | `newsAnalysisToSpeech` (뉴스 분석 ID 기반) |
| **플레이리스트** | 고정된 4개 항목 | 동적으로 최대 10개 |
| **뉴스 타임라인** | 하드코딩된 3개 뉴스 | 실시간 20개 뉴스 |
| **로딩 상태** | 없음 | 로딩/에러/빈 상태 UI |
| **날짜 표시** | 고정 "10월 24일" | 현재 날짜 동적 표시 |

---

## 📚 관련 파일

- `/src/api/newsService.js` - 뉴스 API 서비스 (신규)
- `/src/api/ttsService.js` - TTS API 서비스 (기존)
- `/src/components/TTSToggle.jsx` - TTS 플로팅 토글 (업데이트)
- `/src/pages/AINewsTimeline.jsx` - 뉴스 타임라인 페이지 (업데이트)
- `/src/api/types.js` - API 엔드포인트 정의

---

## ✅ 완료 사항

- [x] newsService.js 생성 및 API 연결
- [x] TTSToggle 컴포넌트 API 기반으로 변경
- [x] AINewsTimeline 페이지 API 기반으로 변경
- [x] 로딩/에러/빈 상태 UI 추가
- [x] newsAnalysisToSpeech API 사용
- [x] 동적 플레이리스트 생성
- [x] 자동 다음 트랙 재생
- [x] Linter 에러 없음

---

## 🎉 결과

이제 TTS 기능이 실제 DB의 뉴스 데이터를 기반으로 동작하며, 사용자는 최신 뉴스를 음성으로 들을 수 있습니다!
