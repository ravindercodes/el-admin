import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';
import { cn } from './Input';

export interface SearchableSelectProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}

export const SearchableSelect = React.forwardRef<HTMLDivElement, SearchableSelectProps>(
  ({ options = [], value, onChange, placeholder = 'Select an option...', searchPlaceholder = 'Search...', className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [internalValue, setInternalValue] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selected = value !== undefined ? value : internalValue;

    const filteredOptions = options.filter(opt =>
      opt.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (opt: string) => {
      if (onChange) {
        onChange(opt);
      } else {
        setInternalValue(opt);
      }
      setIsOpen(false);
      setSearch('');
    };

    return (
      <div className={cn("relative", className)} ref={ref}>
        <div ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300 shadow-sm transition-colors focus-visible:outline-none focus-visible:border-[#008751] focus-visible:ring-1 focus-visible:ring-[#008751]/50"
          >
            <span className={selected ? 'text-zinc-300' : 'text-zinc-500'}>
              {selected || placeholder}
            </span>
            <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-zinc-800 bg-zinc-900 py-1 shadow-lg">
              <div className="sticky top-0 flex items-center border-b border-zinc-800 bg-zinc-900 px-2 pb-2 pt-1">
                <Search className="mr-2 h-4 w-4 text-zinc-500" />
                <input
                  type="text"
                  className="w-full bg-transparent text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none"
                  placeholder={searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-zinc-500">No results found.</div>
              ) : (
                filteredOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                    onClick={() => handleSelect(opt)}
                  >
                    {opt}
                    {selected === opt && <Check className="h-4 w-4 text-[#008751]" />}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
SearchableSelect.displayName = 'SearchableSelect';
