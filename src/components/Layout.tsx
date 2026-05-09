import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const closeSidebar = () => setIsMobileSidebarOpen(false);

  return (
    <div className={`layout-container ${isMobileSidebarOpen ? 'mobile-sidebar-open' : ''}`}>
      <Sidebar isMobileOpen={isMobileSidebarOpen} onNavigate={closeSidebar} />
      <div className="main-content">
        <Header
          isMobileSidebarOpen={isMobileSidebarOpen}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
