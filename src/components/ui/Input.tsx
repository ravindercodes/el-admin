import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { Calendar } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    if (type === 'file') {
      return (
        <input
          type={type}
          className={cn(
            'block w-full text-sm text-zinc-400 file:mr-4 file:rounded-md file:border-0 file:bg-zinc-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-zinc-200 hover:file:bg-zinc-700',
            className
          )}
          ref={ref}
          {...props}
        />
      );
    }

    if (type === 'date') {
      return (
        <div className="relative">
          <input
            type="date"
            className={cn(
              'h-9 w-full min-w-0 rounded-md border border-zinc-800 bg-zinc-900 pl-10 pr-3 py-1 text-sm text-zinc-300 shadow-sm transition-colors focus-visible:outline-none focus-visible:border-[#008751] focus-visible:ring-1 focus-visible:ring-[#008751]/50 [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0',
              className
            )}
            ref={ref}
            {...props}
          />
          <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          'h-9 w-full min-w-0 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300 shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-[#008751] focus-visible:ring-1 focus-visible:ring-[#008751]/50',
          type === 'number' &&
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
