import { Search, Bell, Settings, CircleHelp, Plus, Menu, X } from 'lucide-react';

type HeaderProps = {
  isMobileSidebarOpen: boolean;
  onToggleMobileSidebar: () => void;
};

const Header = ({ isMobileSidebarOpen, onToggleMobileSidebar }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 flex flex-col items-stretch gap-3 border-b border-zinc-800 bg-zinc-950 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          className="grid h-9 w-9 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-200 lg:hidden"
          aria-label={isMobileSidebarOpen ? 'Close menu' : 'Open menu'}
          type="button"
          onClick={onToggleMobileSidebar}
        >
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="flex h-10 w-full max-w-xl items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-zinc-400">
          <Search size={18} className="text-zinc-500" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
          />
          <span className="hidden rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-[11px] font-medium leading-none text-zinc-400 sm:inline-flex">
            ⌘K
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 sm:justify-end">
        <button
          className="inline-flex h-9 items-center gap-1.5 rounded-md bg-emerald-500 px-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          type="button"
        >
          <Plus size={15} />
          <span className="hidden sm:inline">New Order</span>
        </button>

        <button
          className="grid h-8 w-8 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100"
          aria-label="Settings"
          type="button"
        >
          <Settings size={16} />
        </button>

        <button
          className="grid h-8 w-8 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100"
          aria-label="Help"
          type="button"
        >
          <CircleHelp size={16} />
        </button>

        <button
          className="grid h-8 w-8 place-items-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100"
          aria-label="Notifications"
          type="button"
        >
          <Bell size={20} />
        </button>

        <div
          className="grid h-8 w-8 place-items-center rounded-full border border-emerald-900 bg-emerald-950 text-xs font-bold text-emerald-300"
          aria-label="Current user"
        >
          AS
        </div>
      </div>
    </header>
  );
};

export default Header;
