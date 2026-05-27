import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DOMPurify from 'dompurify';

import DashboardTab from '../components/tabs/DashboardTab';
import InboxTab from '../components/tabs/InboxTab';
import ActivityTab from '../components/tabs/ActivityTab';

const AdminPanel = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleExit = async () => {
        await logout();
        window.location.href = '/';
    };

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('admin_theme') === 'dark');

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('admin_theme', newTheme ? 'dark' : 'light');
    };

    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        if (!user) return;
        if (!user.is_admin) {
            navigate('/');
        }
    }, [user, navigate]);

    if (!user || !user.is_admin) return null;

    return (
        <div className={`admin-layout ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* --- SIDEBAR --- */}
            <aside className={`admin-sidebar ${isDarkMode ? 'bg-darker' : 'bg-white'} shadow-sm`}>
                <div className="p-4 border-bottom d-flex justify-content-between align-items-center" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0' }}>
                    <div className="d-flex align-items-center">
                        <div className="admin-logo-icon bg-primary text-white rounded me-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', fontSize: '1.2rem' }}>
                            <i className="bi bi-rocket-takeoff-fill"></i>
                        </div>
                        <h4 className="mb-0 fw-bold fs-5">LUE <span className="text-primary">Admin</span></h4>
                    </div>
                </div>
                
                <div className="p-3">
                    <p className="small fw-bold text-uppercase mb-2 px-3" style={{ color: isDarkMode ? '#64748b' : '#94a3b8', letterSpacing: '1px' }}>Menu</p>
                    <nav className="nav flex-column gap-1">
                        <button 
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <i className="bi bi-grid-1x2-fill me-3"></i> Dashboard
                        </button>
                        <button 
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'inbox' ? 'active' : ''}`}
                            onClick={() => setActiveTab('inbox')}
                        >
                            <i className="bi bi-inbox-fill me-3"></i> Inbox
                        </button>
                        <button 
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'activity' ? 'active' : ''}`}
                            onClick={() => setActiveTab('activity')}
                        >
                            <i className="bi bi-activity me-3"></i> Activity Log
                        </button>
                    </nav>
                </div>

                <div className="mt-auto p-4 border-top" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0' }}>
                    <div className="d-flex align-items-center mb-3">
                        <img 
                            src={user?.avatar?.startsWith('http') ? user.avatar : `https://ui-avatars.com/api/?name=${user?.username}&background=random`} 
                            alt="Admin" 
                            className="rounded-circle me-2 border border-2 border-primary" 
                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                        <div>
                            <div className="fw-bold small">{user?.username}</div>
                            <div className="x-small" style={{ color: isDarkMode ? '#94A3B8' : '#64748B' }}>Super Admin</div>
                        </div>
                    </div>
                    <button className="btn btn-outline-danger w-100 btn-sm rounded-pill fw-semibold" onClick={handleExit}>
                        <i className="bi bi-box-arrow-left me-2"></i> Exit Admin
                    </button>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className={`admin-main ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
                {/* TOPBAR */}
                <header className={`admin-topbar d-flex justify-content-between align-items-center mb-4 p-3 rounded-4 shadow-sm ${isDarkMode ? 'bg-darker' : 'bg-white'}`}>
                    <div>
                        <h2 className="admin-heading mb-0 fs-4">
                            {activeTab === 'dashboard' ? 'Overview & Users' : activeTab === 'inbox' ? 'Support Inbox' : 'System Activity'}
                        </h2>
                        <div className="text-muted small">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <button className="btn btn-icon rounded-circle" onClick={toggleTheme} title="Toggle Theme" style={{ width: '40px', height: '40px', background: isDarkMode ? '#334155' : '#F1F5F9', color: isDarkMode ? '#F8FAFC' : '#0F172A' }}>
                            <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
                        </button>
                    </div>
                </header>

                {/* TABS */}
                {activeTab === 'dashboard' && <DashboardTab isDarkMode={isDarkMode} />}
                {activeTab === 'inbox' && <InboxTab isDarkMode={isDarkMode} />}
                {activeTab === 'activity' && <ActivityTab isDarkMode={isDarkMode} />}

            </main>
        </div>
    );
};

export default AdminPanel;
