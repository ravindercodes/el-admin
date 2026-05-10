import * as React from 'react';
import { cn } from './Input';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'destructive';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed',
          {
            'bg-[#008751] text-white hover:bg-[#007043] focus-visible:ring-[#008751] disabled:bg-zinc-800 disabled:text-zinc-500':
              variant === 'primary',
            'border border-zinc-800 bg-[oklch(0.19_0_0)] text-zinc-300 shadow-sm hover:bg-zinc-800 hover:text-zinc-300 disabled:opacity-50':
              variant === 'outline',
            'bg-red-500/10 text-red-500 hover:bg-red-500/20 focus-visible:ring-red-500 disabled:opacity-50':
              variant === 'destructive',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
