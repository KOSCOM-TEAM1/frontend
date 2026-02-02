import { useState } from 'react';
import api from '../api';

/**
 * API 테스트 페이지
 * 모든 API 서비스를 테스트할 수 있는 샘플 페이지입니다.
 */
function ApiTestPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testApi = async (apiCall, label) => {
    setLoading(true);
    setResult(null);

    try {
      console.log(`🧪 [TEST] ${label} 시작...`);
      const response = await apiCall();
      
      console.log(`✅ [TEST] ${label} 성공:`, response);
      setResult({
        label,
        success: true,
        data: response,
      });
    } catch (error) {
      console.error(`❌ [TEST] ${label} 실패:`, error);
      setResult({
        label,
        success: false,
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🧪 API 테스트 페이지</h1>
      <p>목 데이터 모드로 모든 API를 테스트할 수 있습니다.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
        
        {/* 인증 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>🔐 인증 서비스</h3>
          <button onClick={() => testApi(() => api.auth.login({ email: 'test@test.com', password: '1234' }), '로그인')}>
            로그인 테스트
          </button>
          <button onClick={() => testApi(() => api.auth.logout(), '로그아웃')} style={{ marginTop: '5px' }}>
            로그아웃 테스트
          </button>
        </div>

        {/* 회원 정보 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>👤 회원 정보</h3>
          <button onClick={() => testApi(() => api.user.getMemberInfo(1), '회원 정보 조회')}>
            회원 정보 조회
          </button>
        </div>

        {/* 주식 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>📈 주식 정보</h3>
          <button onClick={() => testApi(() => api.stock.getStockList(), '주식 목록 조회')}>
            주식 목록 조회
          </button>
          <button onClick={() => testApi(() => api.stock.getUserStocks(1), '보유 주식 조회')} style={{ marginTop: '5px' }}>
            보유 주식 조회
          </button>
        </div>

        {/* 뉴스 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>📰 뉴스</h3>
          <button onClick={() => testApi(() => api.news.getNewsList(), '뉴스 목록 조회')}>
            뉴스 목록 조회
          </button>
          <button onClick={() => testApi(() => api.news.getAnalyzedNews(), '분석된 뉴스 조회')} style={{ marginTop: '5px' }}>
            분석된 뉴스 조회
          </button>
        </div>

        {/* 자산 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>💰 자산 정보</h3>
          <button onClick={() => testApi(() => api.asset.getTotalAssets(1), '전체 자산 조회')}>
            전체 자산 조회
          </button>
          <button onClick={() => testApi(() => api.asset.getAssetsByRegion(1), '지역별 자산')} style={{ marginTop: '5px' }}>
            지역별 자산 분포
          </button>
        </div>

        {/* 계좌 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>🏦 계좌 정보</h3>
          <button onClick={() => testApi(() => api.account.getAccounts(1), '계좌 목록 조회')}>
            계좌 목록 조회
          </button>
          <button onClick={() => testApi(() => api.account.getAvailableInstitutions('SECURITIES'), '증권사 목록')} style={{ marginTop: '5px' }}>
            증권사 목록 조회
          </button>
        </div>

        {/* AI 분석 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>🤖 AI 분석</h3>
          <button onClick={() => testApi(() => api.analysis.getOvernightNewsAnalysis(1), '어젯밤 뉴스 분석')}>
            어젯밤 뉴스 분석
          </button>
          <button onClick={() => testApi(() => api.analysis.getHistoricalPatterns(), '과거 패턴 분석')} style={{ marginTop: '5px' }}>
            과거 패턴 분석
          </button>
          <button onClick={() => testApi(() => api.analysis.getDefenseStrategies(1), '방어 전략 조회')} style={{ marginTop: '5px' }}>
            방어 전략 조회
          </button>
        </div>

        {/* 설정 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>⚙️ 설정</h3>
          <button onClick={() => testApi(() => api.settings.getUserSettings(1), '사용자 설정 조회')}>
            사용자 설정 조회
          </button>
        </div>

        {/* 환율 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>💱 환율 정보</h3>
          <button onClick={() => testApi(() => api.exchangeRate.getExchangeRates(), '환율 정보 조회')}>
            환율 정보 조회
          </button>
          <button onClick={() => testApi(() => api.exchangeRate.getExchangeRate('USD'), 'USD 환율')} style={{ marginTop: '5px' }}>
            USD 환율 조회
          </button>
        </div>

        {/* 리포트 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>📊 리포트</h3>
          <button onClick={() => testApi(() => api.report.getOvernightReport(1), '어젯밤 리포트')}>
            어젯밤 리포트
          </button>
          <button onClick={() => testApi(() => api.report.getLatestReport(1), '최신 리포트')} style={{ marginTop: '5px' }}>
            최신 리포트 조회
          </button>
        </div>

        {/* TTS 서비스 */}
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>🔊 TTS 음성</h3>
          <button onClick={() => testApi(() => api.tts.textToSpeech({ text: '안녕하세요' }), 'TTS 변환')}>
            TTS 음성 변환
          </button>
          <button onClick={() => testApi(() => api.tts.getSpeakers(), '화자 목록')} style={{ marginTop: '5px' }}>
            화자 목록 조회
          </button>
        </div>

      </div>

      {/* 결과 표시 영역 */}
      {loading && (
        <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
          <h3>⏳ 로딩 중...</h3>
        </div>
      )}

      {result && !loading && (
        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          background: result.success ? '#e8f5e9' : '#ffebee', 
          borderRadius: '8px',
          maxHeight: '400px',
          overflow: 'auto',
        }}>
          <h3>{result.success ? '✅' : '❌'} {result.label} 결과</h3>
          <pre style={{ 
            background: '#fff', 
            padding: '15px', 
            borderRadius: '4px',
            overflow: 'auto',
          }}>
            {JSON.stringify(result.success ? result.data : result.error, null, 2)}
          </pre>
        </div>
      )}

      {/* 사용 방법 안내 */}
      <div style={{ marginTop: '30px', padding: '20px', background: '#e3f2fd', borderRadius: '8px' }}>
        <h3>📖 사용 방법</h3>
        <ol>
          <li>위의 버튼들을 클릭하여 각 API를 테스트하세요.</li>
          <li>결과는 아래 영역에 표시됩니다.</li>
          <li>콘솔(F12)을 열어 자세한 로그를 확인하세요.</li>
          <li>현재는 <strong>목 데이터 모드</strong>로 동작합니다.</li>
          <li>실제 API 연결을 위해서는 <code>src/api/types.js</code>에서 <code>USE_MOCK_DATA = false</code>로 변경하세요.</li>
        </ol>
      </div>
    </div>
  );
}

export default ApiTestPage;
