import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthShell from '../components/AuthShell';

const ForgotPassword = () => {
  return (
    <AuthShell
      title="Reset your password"
      description="Enter your email and we'll send you a reset link"
    >
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center gap-2 text-sm leading-none font-medium text-zinc-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            required
            className="h-9 w-full min-w-0 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300 shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-[#008751] focus-visible:ring-1 focus-visible:ring-[#008751]/50"
          />
        </div>

        <button
          type="submit"
          className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#008751] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#007043] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#008751]"
        >
          Send reset link
        </button>

        <p className="mt-6 text-center text-sm text-zinc-400">
          <Link to="/login" className="inline-flex items-center justify-center gap-2 font-medium text-[#008751] hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </p>
      </form>
    </AuthShell>
  );
};

export default ForgotPassword;