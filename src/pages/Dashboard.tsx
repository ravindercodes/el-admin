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
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-[1.7rem]">Dashboard Overview</h1>
        <p className="mt-1 text-zinc-400">Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Total Revenue</span>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-emerald-400"><DollarSign size={20} /></div>
          </div>
          <div className="text-2xl font-extrabold tracking-tight text-zinc-100">$45,231.89</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-emerald-400">
            <TrendingUp size={16} />
            <span>+20.1% from last month</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Total Customers</span>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-emerald-400"><Users size={20} /></div>
          </div>
          <div className="text-2xl font-extrabold tracking-tight text-zinc-100">+2,350</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-emerald-400">
            <TrendingUp size={16} />
            <span>+18.2% from last month</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Total Orders</span>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-emerald-400"><ShoppingBag size={20} /></div>
          </div>
          <div className="text-2xl font-extrabold tracking-tight text-zinc-100">+12,234</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-emerald-400">
            <TrendingUp size={16} />
            <span>+19% from last month</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Active Now</span>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-800 text-emerald-400"><Eye size={20} /></div>
          </div>
          <div className="text-2xl font-extrabold tracking-tight text-zinc-100">+573</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-rose-400">
            <TrendingDown size={16} />
            <span>-201 since last hour</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1.7fr_1fr]">
        <div className="h-[300px] rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:h-[360px]">
          <div className="mb-2">
            <h2 className="text-base font-semibold text-zinc-100">Revenue Overview</h2>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#e2e8f0' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[300px] rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:h-[360px]">
          <div className="mb-2">
            <h2 className="text-base font-semibold text-zinc-100">Traffic Sources</h2>
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
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#0f172a" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#e2e8f0' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="inline-flex items-center gap-2">
                <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span className="text-sm text-zinc-400">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
