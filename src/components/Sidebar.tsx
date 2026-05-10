import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  BarChart3,
  CalendarDays,
  ChevronDown,
  FileText,
  FolderClosed,
  Grid2x2,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Mail,
  MessageCircle,
  Package,
  Rocket,
  ScrollText,
  ShoppingCart,
  SquareTerminal,
  Users,
  Zap,
  BookOpen,
  FileCheck,
} from 'lucide-react';

type SubMenuItem = {
  label: string;
  to?: string;
  icon?: React.ReactNode;
  badge?: string;
};

type MenuItem = {
  label: string;
  to?: string;
  icon: React.ReactNode;
  badge?: string;
  subItems?: SubMenuItem[];
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type SidebarProps = {
  isMobileOpen: boolean;
  onNavigate: () => void;
};

const sections: MenuSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', to: '/dashboard', icon: <LayoutDashboard size={18} /> },
      { label: 'Analytics', icon: <BarChart3 size={18} /> },
      { label: 'eCommerce', icon: <ShoppingCart size={18} /> },
      { label: 'CRM', icon: <Users size={18} /> },
      { label: 'SaaS', icon: <Rocket size={18} /> },
      { label: 'Charts', icon: <BarChart3 size={18} /> },
    ],
  },
  {
    title: 'Commerce',
    items: [
      { label: 'Orders', to: '/orders', icon: <ListOrdered size={18} />, badge: '12' },
      { label: 'Products', icon: <Package size={18} /> },
      { label: 'Customers', to: '/customers', icon: <Users size={18} /> },
      { label: 'Invoices', icon: <ScrollText size={18} /> },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        label: 'Student',
        icon: <BookOpen size={18} />,
        subItems: [
          { label: 'Admission', icon: <FileCheck size={18} /> },
          { label: 'Enrollment', icon: <Users size={18} /> },
          { label: 'Course Management' },
          { label: 'Progress Tracking' },
        ],
      },
      {
        label: 'Staff',
        icon: <Users size={18} />,
        subItems: [
          { label: 'Faculty' },
          { label: 'Administration' },
          { label: 'Support Team' },
        ],
      },
    ],
  },
  {
    title: 'Apps',
    items: [
      { label: 'Mail', icon: <Mail size={18} /> },
      { label: 'Chat', icon: <MessageCircle size={18} /> },
      { label: 'Files', icon: <FolderClosed size={18} /> },
      { label: 'Kanban', icon: <Grid2x2 size={18} /> },
      { label: 'Calendar', icon: <CalendarDays size={18} /> },
      { label: 'Wizard', icon: <SquareTerminal size={18} /> },
      { label: 'Forms', to: '/form-elements', icon: <FileText size={18} /> },
    ],
  },
];

const Sidebar = ({ isMobileOpen, onNavigate }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  };

  const toggleExpand = (itemLabel: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemLabel)
        ? prev.filter((item) => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const isExpanded = (itemLabel: string) => expandedItems.includes(itemLabel);

  return (
    <>
      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 w-[84vw] max-w-[300px] border-r border-zinc-800 bg-zinc-950 transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:w-auto lg:max-w-none lg:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        <div className="flex h-full flex-col">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3"
            onClick={onNavigate}
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500 text-zinc-950">
              <Zap size={18} />
            </span>
            <span>
              <strong className="block text-sm tracking-wide text-zinc-100">El Admin</strong>
              <small className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Dashboard</small>
            </span>
          </NavLink>

          <nav className="sidebar-scroll flex-1 space-y-3 overflow-y-auto px-2 py-3">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center justify-between px-2 py-1 text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                  <span>{section.title}</span>
                  <ChevronDown size={14} />
                </div>

                <div className="mt-1 space-y-1">
                  {section.items.map((item) => {
                    const subItems = item.subItems ?? [];
                    const hasSubItems = subItems.length > 0;
                    const expanded = isExpanded(item.label);

                    const rowBase =
                      'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors';

                    const sharedClassName = ({ isActive }: { isActive: boolean }) =>
                      [
                        rowBase,
                        isActive
                          ? 'bg-zinc-800 text-zinc-100'
                          : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200',
                      ].join(' ');

                    return (
                      <div key={item.label}>
                        {hasSubItems ? (
                          <button
                            type="button"
                            className={[
                              rowBase,
                              expanded
                                ? 'bg-zinc-800 text-zinc-100'
                                : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200',
                            ].join(' ')}
                            onClick={() => toggleExpand(item.label)}
                            aria-expanded={expanded}
                          >
                            <span className="text-zinc-500">{item.icon}</span>
                            <span className="flex-1 text-left font-medium">{item.label}</span>
                            {item.badge && (
                              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-emerald-900 bg-emerald-950 px-1.5 text-[11px] font-semibold text-emerald-300">
                                {item.badge}
                              </span>
                            )}
                            <ChevronDown
                              size={15}
                              className={expanded ? 'rotate-180 transition-transform' : 'transition-transform'}
                            />
                          </button>
                        ) : item.to ? (
                          <NavLink to={item.to} end={item.to === '/dashboard'} className={sharedClassName} onClick={onNavigate}>
                            <span className="text-zinc-500">{item.icon}</span>
                            <span className="flex-1 text-left font-medium">{item.label}</span>
                            {item.badge && (
                              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-emerald-900 bg-emerald-950 px-1.5 text-[11px] font-semibold text-emerald-300">
                                {item.badge}
                              </span>
                            )}
                          </NavLink>
                        ) : (
                          <span className={[rowBase, 'cursor-default text-zinc-500'].join(' ')}>
                            <span className="text-zinc-500">{item.icon}</span>
                            <span className="flex-1 text-left font-medium">{item.label}</span>
                            {item.badge && (
                              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-emerald-900 bg-emerald-950 px-1.5 text-[11px] font-semibold text-emerald-300">
                                {item.badge}
                              </span>
                            )}
                          </span>
                        )}

                        {hasSubItems && expanded && (
                          <div className="ml-7 mt-1 space-y-1">
                            {subItems.map((subItem) =>
                              subItem.to ? (
                                <NavLink
                                  key={subItem.label}
                                  to={subItem.to}
                                  className={({ isActive }) =>
                                    [
                                      'flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs transition-colors',
                                      isActive
                                        ? 'bg-zinc-900 text-zinc-100'
                                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200',
                                    ].join(' ')
                                  }
                                  onClick={onNavigate}
                                >
                                  {subItem.icon && <span className="text-zinc-500">{subItem.icon}</span>}
                                  <span>{subItem.label}</span>
                                  {subItem.badge && (
                                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-emerald-900 bg-emerald-950 px-1.5 text-[11px] font-semibold text-emerald-300">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </NavLink>
                              ) : (
                                <span
                                  key={subItem.label}
                                  className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-zinc-500"
                                >
                                  {subItem.icon && <span className="text-zinc-500">{subItem.icon}</span>}
                                  <span>{subItem.label}</span>
                                  {subItem.badge && (
                                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-emerald-900 bg-emerald-950 px-1.5 text-[11px] font-semibold text-emerald-300">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-t border-zinc-800 px-3 py-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-zinc-950">AS</div>
            <div className="flex flex-col">
              <strong className="text-sm text-zinc-100">Aigars S.</strong>
              <span className="text-xs text-zinc-500">Admin</span>
            </div>
            <button
              className="ml-auto grid h-8 w-8 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100"
              type="button"
              aria-label="Logout"
              onClick={handleLogout}
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      <button
        type="button"
        className={[
          'fixed inset-0 z-40 bg-zinc-950/60 transition-opacity lg:hidden',
          isMobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onNavigate}
        aria-label="Close sidebar"
      />
    </>
  );
};

export default Sidebar;
