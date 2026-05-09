
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          {/* Placeholder routes for others */}
          <Route path="customers" element={<div className="page-container"><h1 className="page-title">Customers</h1></div>} />
          <Route path="analytics" element={<div className="page-container"><h1 className="page-title">Analytics</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
