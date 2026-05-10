import { useState } from 'react';
import { User, Bell, Shield, Key } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-[1.7rem]">Settings</h1>
        <p className="mt-1 text-zinc-400">Manage your account settings and preferences.</p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <div className="mb-4 flex flex-wrap items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
          <button
            className={[
              'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
              activeTab === 'Profile' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200',
            ].join(' ')}
            onClick={() => setActiveTab('Profile')}
          >
            <div className="flex items-center gap-2"><User size={18} /> Profile</div>
          </button>
          <button
            className={[
              'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
              activeTab === 'Notifications' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200',
            ].join(' ')}
            onClick={() => setActiveTab('Notifications')}
          >
            <div className="flex items-center gap-2"><Bell size={18} /> Notifications</div>
          </button>
          <button
            className={[
              'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
              activeTab === 'Security' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-200',
            ].join(' ')}
            onClick={() => setActiveTab('Security')}
          >
            <div className="flex items-center gap-2"><Shield size={18} /> Security</div>
          </button>
        </div>

        {activeTab === 'Profile' && (
          <div className="mt-2 w-full max-w-2xl">
            <h3 className="mb-6 text-lg font-semibold text-zinc-100">Public Profile</h3>

            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover"
              />
              <button className="inline-flex h-10 items-center rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-sm font-semibold text-zinc-200">Change Avatar</button>
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-zinc-400">Full Name</label>
              <input type="text" className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-zinc-100 outline-none ring-emerald-500/40 focus:ring-2" defaultValue="John Doe" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-zinc-400">Email Address</label>
              <input type="email" className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-zinc-100 outline-none ring-emerald-500/40 focus:ring-2" defaultValue="john.doe@example.com" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-zinc-400">Bio</label>
              <textarea
                className="min-h-24 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none ring-emerald-500/40 focus:ring-2"
                rows={4}
                defaultValue="Product Manager at El Admin."
              ></textarea>
            </div>

            <div className="mt-6">
              <button className="inline-flex h-10 items-center rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === 'Security' && (
          <div className="mt-2 w-full max-w-2xl">
            <h3 className="mb-6 text-lg font-semibold text-zinc-100">Change Password</h3>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-zinc-400">Current Password</label>
              <input type="password" className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-zinc-100 outline-none ring-emerald-500/40 focus:ring-2" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-zinc-400">New Password</label>
              <input type="password" className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-zinc-100 outline-none ring-emerald-500/40 focus:ring-2" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-zinc-400">Confirm New Password</label>
              <input type="password" className="h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-zinc-100 outline-none ring-emerald-500/40 focus:ring-2" />
            </div>

            <div className="mt-6">
              <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"><Key size={18} /> Update Password</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
