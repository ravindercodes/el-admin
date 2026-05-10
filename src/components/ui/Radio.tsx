import * as React from 'react';
import { cn } from './Input';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={cn(
          'h-4 w-4 border-zinc-800 bg-zinc-900 text-[#008751] focus:ring-[#008751] focus:ring-offset-0 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Radio.displayName = 'Radio';

export { Radio };
