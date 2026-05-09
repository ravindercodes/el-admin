import { useEffect } from 'react';
import { Search, Bell, Settings, CircleHelp, Plus } from 'lucide-react';

const Header = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-search">
          <Search size={18} className="text-secondary" />
          <input type="text" placeholder="Search anything..." />
          <span className="header-search-shortcut">⌘K</span>
        </div>
      </div>

      <div className="header-actions">
        <button className="header-cta" type="button">
          <Plus size={15} />
          <span>New Order</span>
        </button>
        <button className="icon-button compact" aria-label="Settings" type="button">
          <Settings size={16} />
        </button>
        <button className="icon-button compact" aria-label="Help" type="button">
          <CircleHelp size={16} />
        </button>
        <button className="icon-button compact" aria-label="Notifications" type="button">
          <Bell size={20} />
        </button>
        <div className="profile-badge" aria-label="Current user">AS</div>
      </div>
    </header>
  );
};

export default Header;
