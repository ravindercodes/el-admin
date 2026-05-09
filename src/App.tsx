
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          {/* Placeholder routes for others */}
          <Route
            path="customers"
            element={
              <div className="px-4 py-5 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Customers</h1>
              </div>
            }
          />
          <Route
            path="analytics"
            element={
              <div className="px-4 py-5 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Analytics</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
