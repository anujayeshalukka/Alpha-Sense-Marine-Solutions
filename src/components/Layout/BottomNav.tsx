import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, ShieldCheck, Mail } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'Brands', path: '/brands', icon: ShieldCheck },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-marine-950/90 backdrop-blur-md border border-white/10 rounded-2xl px-1 py-1 flex justify-between items-center shadow-2xl">
      {navItems.map((item) => {
        // Simple active check: exact match for home, or starts with for others
        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
        const Icon = item.icon;
        
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full p-1 transition-colors ${
              isActive ? 'text-teal-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full mb-0.5 ${isActive ? 'bg-teal-500/10' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
