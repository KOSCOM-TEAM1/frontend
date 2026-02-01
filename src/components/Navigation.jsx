import { useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: 'home', label: '홈', path: '/home' },
    { id: 'timeline', icon: 'timeline', label: '타임라인', path: '/timeline' },
    { id: 'analysis', icon: 'insights', label: '분석', path: '/analysis' },
    { id: 'assets', icon: 'account_balance_wallet', label: '자산', path: '/assets' },
    { id: 'settings', icon: 'settings', label: '설정', path: '/settings' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] z-50 animate-fade-in">
      <div className="glass rounded-full px-6 h-16 flex items-center justify-between shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-0.5 transition-all duration-200 hover:scale-110 active:scale-95 ${
              location.pathname === item.path ? 'text-primary' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span className={`material-symbols-outlined text-[28px] ${
              location.pathname === item.path ? 'fill-[1]' : ''
            }`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
