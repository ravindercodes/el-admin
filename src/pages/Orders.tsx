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
    case 'Completed': return 'badge badge-success';
    case 'Processing': return 'badge badge-info';
    case 'Cancelled': return 'badge badge-danger';
    default: return 'badge';
  }
};

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  return (
    <div className="page-container">
      <div className="page-header flex justify-between items-center">
        <div>
          <h1 className="page-title">Orders</h1>
          <p className="page-description">Manage and view your store orders.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-secondary"><Filter size={18} /> Filters</button>
          <button className="btn btn-secondary"><Download size={18} /> Export</button>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <div className="tabs" style={{ marginBottom: 0, borderBottom: 'none' }}>
            {['All', 'Completed', 'Processing', 'Cancelled'].map(tab => (
              <button 
                key={tab} 
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ paddingBottom: '0.5rem' }}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="header-search" style={{ width: '250px' }}>
            <Search size={16} className="text-secondary" />
            <input type="text" placeholder="Search orders..." />
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.filter(o => activeTab === 'All' || o.status === activeTab).map(order => (
                <tr key={order.id}>
                  <td style={{ fontWeight: 500 }}>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td><span className={getStatusBadge(order.status)}>{order.status}</span></td>
                  <td>
                    <button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.85rem' }}>
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
