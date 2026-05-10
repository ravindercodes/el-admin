import { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { Table, type Column } from '../components/ui/Table';
import Modal from '../components/ui/Modal';

const mockOrders = [
  { id: 'ORD-001', customer: 'John Doe', date: '2026-05-09', total: '$120.00', status: 'Completed' },
  { id: 'ORD-002', customer: 'Jane Smith', date: '2026-05-08', total: '$450.50', status: 'Processing' },
  { id: 'ORD-003', customer: 'Bob Johnson', date: '2026-05-07', total: '$89.99', status: 'Cancelled' },
  { id: 'ORD-004', customer: 'Alice Brown', date: '2026-05-06', total: '$2,100.00', status: 'Completed' },
  { id: 'ORD-005', customer: 'Charlie Davis', date: '2026-05-05', total: '$34.50', status: 'Processing' },
];

type Order = typeof mockOrders[0];

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const columns: Column<Order>[] = [
    { header: 'Order ID', accessor: 'id', className: 'font-medium text-zinc-100' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Date', accessor: 'date' },
    { header: 'Total', accessor: 'total' },
    { 
      header: 'Status', 
      accessor: (order) => (
        <span className={getStatusBadge(order.status)}>{order.status}</span>
      ) 
    },
    { 
      header: 'Action', 
      accessor: (order) => (
        <button 
          onClick={() => {
            setSelectedOrder(order);
            setIsModalOpen(true);
          }}
          className="inline-flex h-8 items-center rounded-md border border-zinc-700 bg-zinc-950 px-3 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors">
          View
        </button>
      ) 
    },
  ];

  const filteredOrders = mockOrders.filter(o => activeTab === 'All' || o.status === activeTab);

  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-[1.7rem]">Orders</h1>
          <p className="mt-1 text-zinc-400">Manage and view your store orders.</p>
        </div>

        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors">
            <Filter size={18} /> Filters
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors">
            <Download size={18} /> Export
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
          >
            <Plus size={18} /> Add Order
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
          
          <div className="flex h-10 w-full max-w-xs items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-3 text-zinc-400 focus-within:border-emerald-500 transition-colors">
            <Search size={16} className="text-zinc-500" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
        </div>

        <Table 
          columns={columns} 
          data={filteredOrders} 
          keyExtractor={(item) => item.id} 
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedOrder(null);
        }}
        title="Order Details"
        size="lg"
      >
        {selectedOrder ? (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-zinc-400">Order ID</p>
                <p className="font-medium text-zinc-100">{selectedOrder.id}</p>
              </div>
              <div>
                <p className="text-zinc-400">Date</p>
                <p className="font-medium text-zinc-100">{selectedOrder.date}</p>
              </div>
              <div>
                <p className="text-zinc-400">Customer</p>
                <p className="font-medium text-zinc-100">{selectedOrder.customer}</p>
              </div>
              <div>
                <p className="text-zinc-400">Total</p>
                <p className="font-medium text-zinc-100">{selectedOrder.total}</p>
              </div>
              <div>
                <p className="text-zinc-400">Status</p>
                <span className={`mt-1 ${getStatusBadge(selectedOrder.status)}`}>{selectedOrder.status}</span>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-2">
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedOrder(null);
                }}
                className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-4 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors"
              >
                Close
              </button>
              <button 
                className="inline-flex h-9 items-center justify-center rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
              >
                Download Invoice
              </button>
            </div>
          </div>
        ) : (
          <p className="text-zinc-400">No order selected.</p>
        )}
      </Modal>

      {/* Add Order Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Order"
        size="md"
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-300">Customer Name</label>
            <input 
              type="text" 
              className="h-10 rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" 
              placeholder="e.g. John Doe" 
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-300">Order Date</label>
            <input 
              type="date" 
              className="h-10 rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" 
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-300">Total Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
              <input 
                type="number" 
                step="0.01"
                className="h-10 w-full rounded-lg border border-zinc-700 bg-zinc-950 pl-7 pr-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors" 
                placeholder="0.00" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-zinc-300">Status</label>
            <select 
              className="h-10 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none" 
            >
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          
          <div className="mt-6 flex justify-end gap-2">
            <button 
              onClick={() => setIsAddModalOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-4 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsAddModalOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              Save Order
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
