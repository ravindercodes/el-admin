import { useState } from 'react';
import { User, Bell, Shield, Key } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-description">Manage your account settings and preferences.</p>
      </div>

      <div className="card">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'Profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('Profile')}
          >
            <div className="flex items-center gap-2"><User size={18} /> Profile</div>
          </button>
          <button
            className={`tab ${activeTab === 'Notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('Notifications')}
          >
            <div className="flex items-center gap-2"><Bell size={18} /> Notifications</div>
          </button>
          <button
            className={`tab ${activeTab === 'Security' ? 'active' : ''}`}
            onClick={() => setActiveTab('Security')}
          >
            <div className="flex items-center gap-2"><Shield size={18} /> Security</div>
          </button>
        </div>

        {activeTab === 'Profile' && (
          <div className="settings-form" style={{ maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Public Profile</h3>

            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <button className="btn btn-secondary">Change Avatar</button>
            </div>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" defaultValue="John Doe" />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" defaultValue="john.doe@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Bio</label>
              <textarea
                className="form-input"
                rows={4}
                defaultValue="Product Manager at Apex."
              ></textarea>
            </div>

            <div className="mt-8">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === 'Security' && (
          <div className="settings-form" style={{ maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Change Password</h3>

            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input type="password" className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <input type="password" className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <input type="password" className="form-input" />
            </div>

            <div className="mt-8">
              <button className="btn btn-primary"><Key size={18} /> Update Password</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
