import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import AuthShell from '../components/AuthShell';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Label } from '../components/ui/Label';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthShell
      title="Create new password"
      description="Your new password must be different from previous passwords."
    >
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">
            New Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-0 h-full px-3 text-zinc-400 hover:text-zinc-300 focus:outline-none"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-0 top-0 h-full px-3 text-zinc-400 hover:text-zinc-300 focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Reset password
        </Button>

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

export default ResetPassword;
