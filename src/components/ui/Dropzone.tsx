import * as React from 'react';
import { UploadCloud, X, File as FileIcon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export interface DropzoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilesChange?: (files: FileList | null) => void;
}

export const Dropzone = React.forwardRef<HTMLInputElement, DropzoneProps>(
  ({ className, onFilesChange, ...props }, ref) => {
    const [isDragActive, setIsDragActive] = React.useState(false);
    const [selectedFiles, setSelectedFiles] = React.useState<FileList | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        setSelectedFiles(e.dataTransfer.files);
        if (onFilesChange) onFilesChange(e.dataTransfer.files);
        if (inputRef.current) {
          inputRef.current.files = e.dataTransfer.files;
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFiles(e.target.files);
        if (onFilesChange) onFilesChange(e.target.files);
      }
    };

    const clearFiles = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedFiles(null);
      if (onFilesChange) onFilesChange(null);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };
    
    // Merge refs
    const setRefs = React.useCallback(
      (node: HTMLInputElement) => {
        inputRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <div className="w-full">
        <div
          className={cn(
            'relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-10 transition-colors',
            isDragActive
              ? 'border-[#008751] bg-[#008751]/10'
              : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/50',
            className
          )}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            type="file"
            className="hidden"
            ref={setRefs}
            onChange={handleChange}
            {...props}
          />
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-full bg-zinc-800 p-3">
              <UploadCloud className="h-6 w-6 text-zinc-400" />
            </div>
            <p className="mb-1 text-sm font-semibold text-zinc-200">
              Click to upload <span className="font-normal text-zinc-400">or drag and drop</span>
            </p>
            <p className="text-xs text-zinc-500">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>

        {selectedFiles && selectedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {Array.from(selectedFiles).map((file, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2">
                <div className="flex items-center space-x-3 truncate">
                  <FileIcon className="h-4 w-4 shrink-0 text-zinc-400" />
                  <span className="truncate text-sm text-zinc-300">{file.name}</span>
                </div>
                <button
                  type="button"
                  onClick={clearFiles}
                  className="rounded-full p-1 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
Dropzone.displayName = 'Dropzone';
