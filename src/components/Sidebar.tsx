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

const sections: MenuSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', to: '/', icon: <LayoutDashboard size={18} /> },
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
      { label: 'Forms', icon: <FileText size={18} /> },
    ],
  }
];

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleLogout = () => {
    // Clear authentication state and redirect to login
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
    <aside className="sidebar">
      <div className="sidebar-shell">
        <NavLink to="/" className="sidebar-logo">
          <span className="sidebar-logo-mark">
            <Zap size={20} />
          </span>
          <span className="sidebar-logo-copy">
            <strong>Apex</strong>
            <small>Dashboard</small>
          </span>
        </NavLink>

        <nav className="sidebar-nav">
          {sections.map((section) => (
            <div key={section.title} className="sidebar-section">
              <div className="sidebar-section-header">
                <span>{section.title}</span>
                <ChevronDown size={14} />
              </div>

              <div className="sidebar-section-items">
                {section.items.map((item) => {
                  const subItems = item.subItems ?? [];
                  const hasSubItems = subItems.length > 0;
                  const expanded = isExpanded(item.label);

                  const sharedClassName = ({ isActive }: { isActive: boolean }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`;

                  return (
                    <div key={item.label} className="sidebar-item-wrapper">
                      {hasSubItems ? (
                        <button
                          type="button"
                          className="sidebar-link sidebar-link-expandable"
                          onClick={() => toggleExpand(item.label)}
                          aria-expanded={expanded}
                        >
                          <span className="sidebar-link-icon">{item.icon}</span>
                          <span className="sidebar-link-label">{item.label}</span>
                          {item.badge && <span className="sidebar-link-badge">{item.badge}</span>}
                          <ChevronDown
                            size={16}
                            className={`sidebar-link-expand-chevron ${expanded ? 'open' : ''}`}
                          />
                        </button>
                      ) : item.to ? (
                        <NavLink
                          to={item.to}
                          end={item.to === '/'}
                          className={sharedClassName}
                        >
                          <span className="sidebar-link-icon">{item.icon}</span>
                          <span className="sidebar-link-label">{item.label}</span>
                          {item.badge && <span className="sidebar-link-badge">{item.badge}</span>}
                        </NavLink>
                      ) : (
                        <span className="sidebar-link sidebar-link-static">
                          <span className="sidebar-link-icon">{item.icon}</span>
                          <span className="sidebar-link-label">{item.label}</span>
                          {item.badge && <span className="sidebar-link-badge">{item.badge}</span>}
                        </span>
                      )}

                      {hasSubItems && expanded && (
                        <div className="sidebar-submenu">
                          {subItems.map((subItem) =>
                            subItem.to ? (
                              <NavLink
                                key={subItem.label}
                                to={subItem.to}
                                className={({ isActive }) =>
                                  `sidebar-sublink ${isActive ? 'active' : ''}`
                                }
                              >
                                {subItem.icon && (
                                  <span className="sidebar-sublink-icon">{subItem.icon}</span>
                                )}
                                <span className="sidebar-sublink-label">{subItem.label}</span>
                                {subItem.badge && (
                                  <span className="sidebar-link-badge">{subItem.badge}</span>
                                )}
                              </NavLink>
                            ) : (
                              <span key={subItem.label} className="sidebar-sublink">
                                {subItem.icon && (
                                  <span className="sidebar-sublink-icon">{subItem.icon}</span>
                                )}
                                <span className="sidebar-sublink-label">{subItem.label}</span>
                                {subItem.badge && (
                                  <span className="sidebar-link-badge">{subItem.badge}</span>
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

        <div className="sidebar-profile">
          <div className="sidebar-profile-avatar">AS</div>
          <div className="sidebar-profile-copy">
            <strong>Aigars S.</strong>
            <span>Admin</span>
          </div>
          <button
            className="sidebar-profile-logout"
            type="button"
            aria-label="Logout"
            onClick={handleLogout}
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
