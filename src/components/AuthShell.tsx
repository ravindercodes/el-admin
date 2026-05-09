import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

type AuthShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const AuthShell = ({
  title,
  description,
  children,
}: AuthShellProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#020202] via-[#020202] to-emerald-500/5 p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
            <Zap className="h-5 w-5 text-white fill-none" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Apex</span>
        </Link>
        <div className="rounded-xl border border-zinc-800 bg-[oklch(0.19_0_0)] text-zinc-100 shadow-sm transition-shadow duration-200">
          <div className="flex flex-col space-y-1.5 p-6 text-center">
            <div className="font-semibold tracking-tight text-2xl">{title}</div>
            <div className="text-sm text-zinc-400">{description}</div>
          </div>
          <div className="p-6 pt-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthShell;