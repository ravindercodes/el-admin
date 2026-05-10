import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthShell from '../components/AuthShell';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Label } from '../components/ui/Label';

const ForgotPassword = () => {
  return (
    <AuthShell
      title="Reset your password"
      description="Enter your email and we'll send you a reset link"
    >
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Send reset link
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

export default ForgotPassword;