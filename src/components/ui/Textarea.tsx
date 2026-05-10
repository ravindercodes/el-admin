import * as React from 'react';
import { cn } from './Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full min-w-0 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-[#008751] focus-visible:ring-1 focus-visible:ring-[#008751]/50 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
