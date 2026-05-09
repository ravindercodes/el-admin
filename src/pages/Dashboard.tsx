import { DollarSign, Users, ShoppingBag, TrendingUp, TrendingDown, Eye } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const areaData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const pieData = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Referral', value: 300 },
  { name: 'Organic', value: 200 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#6366f1'];

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
        <p className="page-description">Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="stats-grid">
        <div className="card">
          <div className="stat-header">
            <span className="stat-title">Total Revenue</span>
            <div className="stat-icon"><DollarSign size={20} /></div>
          </div>
          <div className="stat-value">$45,231.89</div>
          <div className="stat-trend trend-up">
            <TrendingUp size={16} />
            <span>+20.1% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="stat-header">
            <span className="stat-title">Total Customers</span>
            <div className="stat-icon"><Users size={20} /></div>
          </div>
          <div className="stat-value">+2,350</div>
          <div className="stat-trend trend-up">
            <TrendingUp size={16} />
            <span>+18.2% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="stat-header">
            <span className="stat-title">Total Orders</span>
            <div className="stat-icon"><ShoppingBag size={20} /></div>
          </div>
          <div className="stat-value">+12,234</div>
          <div className="stat-trend trend-up">
            <TrendingUp size={16} />
            <span>+19% from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="stat-header">
            <span className="stat-title">Active Now</span>
            <div className="stat-icon"><Eye size={20} /></div>
          </div>
          <div className="stat-value">+573</div>
          <div className="stat-trend trend-down">
            <TrendingDown size={16} />
            <span>-201 since last hour</span>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="card chart-card">
          <div className="chart-card-header">
            <h2 className="chart-card-title">Revenue Overview</h2>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)' }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <div className="chart-card-header">
            <h2 className="chart-card-title">Traffic Sources</h2>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="var(--bg-secondary)" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-legend">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="chart-legend-item">
                <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
