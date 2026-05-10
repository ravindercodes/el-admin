import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';
import { cn } from './Input';

export interface MultiSelectProps {
  options: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  className?: string;
}

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  ({ options = [], value, onChange, placeholder = 'Select options...', className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selected = value !== undefined ? value : internalValue;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleOption = (opt: string) => {
      const newSelected = selected.includes(opt)
        ? selected.filter(p => p !== opt)
        : [...selected, opt];
      
      if (onChange) {
        onChange(newSelected);
      } else {
        setInternalValue(newSelected);
      }
    };

    const removeOption = (e: React.MouseEvent, opt: string) => {
      e.stopPropagation();
      toggleOption(opt);
    };

    return (
      <div className={cn("relative", className)} ref={ref}>
        <div ref={dropdownRef}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-9 w-full cursor-pointer flex-wrap items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-sm shadow-sm transition-colors focus-within:border-[#008751] focus-within:ring-1 focus-within:ring-[#008751]/50"
          >
            {selected.length === 0 ? (
              <span className="px-1 py-0.5 text-zinc-500">{placeholder}</span>
            ) : (
              selected.map(opt => (
                <span key={opt} className="flex items-center gap-1 rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300">
                  {opt}
                  <button
                    type="button"
                    onClick={(e) => removeOption(e, opt)}
                    className="rounded-full text-zinc-500 hover:bg-zinc-700 hover:text-zinc-300 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))
            )}
            <div className="ml-auto flex items-center">
              <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {isOpen && (
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-zinc-800 bg-zinc-900 py-1 shadow-lg">
              {options.map((opt) => (
                <div
                  key={opt}
                  className="flex w-full cursor-pointer items-center px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                  onClick={() => toggleOption(opt)}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center rounded border border-zinc-700 bg-zinc-900">
                    {selected.includes(opt) && <Check className="h-3 w-3 text-[#008751]" />}
                  </div>
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
MultiSelect.displayName = 'MultiSelect';
