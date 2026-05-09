import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const closeSidebar = () => setIsMobileSidebarOpen(false);

  return (
    <div className="grid min-h-screen grid-cols-1 bg-zinc-950 text-zinc-100 lg:grid-cols-[280px_minmax(0,1fr)]">
      <Sidebar isMobileOpen={isMobileSidebarOpen} onNavigate={closeSidebar} />
      <div className="flex min-w-0 flex-col">
        <Header
          isMobileSidebarOpen={isMobileSidebarOpen}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        />
        <main className="min-h-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
