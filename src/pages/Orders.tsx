import { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';

const mockOrders = [
  { id: 'ORD-001', customer: 'John Doe', date: '2026-05-09', total: '$120.00', status: 'Completed' },
  { id: 'ORD-002', customer: 'Jane Smith', date: '2026-05-08', total: '$450.50', status: 'Processing' },
  { id: 'ORD-003', customer: 'Bob Johnson', date: '2026-05-07', total: '$89.99', status: 'Cancelled' },
  { id: 'ORD-004', customer: 'Alice Brown', date: '2026-05-06', total: '$2,100.00', status: 'Completed' },
  { id: 'ORD-005', customer: 'Charlie Davis', date: '2026-05-05', total: '$34.50', status: 'Processing' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Completed': return 'inline-flex h-6 items-center rounded-full bg-emerald-100 px-2.5 text-xs font-semibold text-emerald-800';
    case 'Processing': return 'inline-flex h-6 items-center rounded-full bg-blue-100 px-2.5 text-xs font-semibold text-blue-800';
    case 'Cancelled': return 'inline-flex h-6 items-center rounded-full bg-rose-100 px-2.5 text-xs font-semibold text-rose-800';
    default: return 'inline-flex h-6 items-center rounded-full bg-zinc-100 px-2.5 text-xs font-semibold text-zinc-700';
  }
};

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-[1.7rem]">Orders</h1>
          <p className="mt-1 text-zinc-400">Manage and view your store orders.</p>
        </div>

        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-sm font-semibold text-zinc-200">
            <Filter size={18} /> Filters
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-sm font-semibold text-zinc-200">
            <Download size={18} /> Export
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
            {['All', 'Completed', 'Processing', 'Cancelled'].map(tab => (
              <button 
                key={tab} 
                className={[
                  'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  activeTab === tab ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200',
                ].join(' ')}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex h-10 w-full max-w-xs items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-3 text-zinc-400">
            <Search size={16} className="text-zinc-500" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-auto rounded-xl border border-zinc-800">
          <table className="w-full border-collapse">
            <thead className="bg-zinc-950">
              <tr className="text-left">
                <th className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">Order ID</th>
                <th className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">Customer</th>
                <th className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">Date</th>
                <th className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">Total</th>
                <th className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">Status</th>
                <th className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-wide text-zinc-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.filter(o => activeTab === 'All' || o.status === activeTab).map(order => (
                <tr key={order.id} className="border-t border-zinc-800 text-sm text-zinc-300 hover:bg-zinc-800/50">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-100">{order.id}</td>
                  <td className="whitespace-nowrap px-4 py-3">{order.customer}</td>
                  <td className="whitespace-nowrap px-4 py-3">{order.date}</td>
                  <td className="whitespace-nowrap px-4 py-3">{order.total}</td>
                  <td className="whitespace-nowrap px-4 py-3"><span className={getStatusBadge(order.status)}>{order.status}</span></td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <button className="inline-flex h-8 items-center rounded-md border border-zinc-700 bg-zinc-950 px-3 text-xs font-semibold text-zinc-200">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
