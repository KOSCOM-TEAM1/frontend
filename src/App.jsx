import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeOnboarding from './pages/WelcomeOnboarding';
import MorningDashboard from './pages/MorningDashboard';
import AINewsTimeline from './pages/AINewsTimeline';
import TotalAssetInventory from './pages/TotalAssetInventory';
import SleepRoutineSettings from './pages/SleepRoutineSettings';
import HistoricalPatternAnalysis from './pages/HistoricalPatternAnalysis';
import HistoricalPatternDetail from './pages/HistoricalPatternDetail';
import DefenseStrategy from './pages/DefenseStrategy';
import MydataAccountIntegration from './pages/MydataAccountIntegration';
import ApiTestPage from './pages/ApiTestPage';
import TTSToggle from './components/TTSToggle';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeOnboarding />} />
        <Route path="/onboarding" element={<WelcomeOnboarding />} />
        <Route path="/home" element={<MorningDashboard />} />
        <Route path="/timeline" element={<AINewsTimeline />} />
        <Route path="/assets" element={<TotalAssetInventory />} />
        <Route path="/assets/mydata" element={<MydataAccountIntegration />} />
        <Route path="/settings" element={<SleepRoutineSettings />} />
        <Route path="/analysis" element={<HistoricalPatternAnalysis />} />
        <Route path="/analysis/detail" element={<HistoricalPatternDetail />} />
        <Route path="/analysis/strategy" element={<DefenseStrategy />} />
        {/* API 테스트 페이지 */}
        <Route path="/api-test" element={<ApiTestPage />} />
      </Routes>
      <TTSToggle />
    </Router>
  );
}

export default App;
