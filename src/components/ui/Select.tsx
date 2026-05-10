import * as React from 'react';
import { cn } from './Input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={cn(
          'h-9 w-full min-w-0 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300 shadow-sm transition-colors focus-visible:outline-none focus-visible:border-[#008751] focus-visible:ring-1 focus-visible:ring-[#008751]/50 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Select.displayName = 'Select';

export { Select };
