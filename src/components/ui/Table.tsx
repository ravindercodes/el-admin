import type { ReactNode } from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
  className?: string;
  headerClassName?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string | number;
  className?: string;
  emptyMessage?: ReactNode;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  className = '',
  emptyMessage = 'No data available'
}: TableProps<T>) {
  return (
    <div className={`overflow-auto rounded-xl border border-zinc-800 ${className}`}>
      <table className="w-full border-collapse">
        <thead className="bg-zinc-950">
          <tr className="text-left">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400 ${col.headerClassName || ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr
                key={keyExtractor(item)}
                className="border-t border-zinc-800 text-sm text-zinc-300 hover:bg-zinc-800/50"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`whitespace-nowrap px-4 py-3 ${col.className || ''}`}
                  >
                    {typeof col.accessor === 'function'
                      ? col.accessor(item)
                      : (item[col.accessor] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-zinc-500">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
