import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import apiClient from '../../api/apiClient';
import { useAuth } from '../../context/AuthContext';

const DashboardTab = ({ isDarkMode }) => {
    const { user } = useAuth();
    const [userFilter, setUserFilter] = useState('all');
    const [userSearchTerm, setUserSearchTerm] = useState('');
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [loadingDashboard, setLoadingDashboard] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentProgress, setStudentProgress] = useState(null);
    const [loadingProgress, setLoadingProgress] = useState(false);
    const [dashboardError, setDashboardError] = useState(null);
    const [membershipModal, setMembershipModal] = useState({ 
        open: false, 
        targetUserId: null, 
        daysInput: 30, 
        loading: false, 
        error: null, 
        success: null 
    });

    useEffect(() => {
        let isMounted = true;
        const loadDashboard = async () => {
            try {
                setLoadingDashboard(true);
                const [statsRes, usersRes] = await Promise.all([
                    apiClient.get('/admin/stats'),
                    apiClient.get('/admin/users')
                ]);
                if (isMounted) {
                    setStats(statsRes.data);
                    setUsers(usersRes.data.users);
                    setDashboardError(null);
                }
            } catch (err) {
                console.error(err);
                if (isMounted) setDashboardError('Failed to load dashboard data. Please try again.');
            } finally {
                if (isMounted) setLoadingDashboard(false);
            }
        };

        if (user && user.is_admin) {
            loadDashboard();
        }
        return () => { isMounted = false; };
    }, [user]);

    const loadDashboard = async () => {
        try {
            setLoadingDashboard(true);
            const [statsRes, usersRes] = await Promise.all([
                apiClient.get('/admin/stats'),
                apiClient.get('/admin/users')
            ]);
            setStats(statsRes.data);
            setUsers(usersRes.data.users);
            setDashboardError(null);
        } catch (err) {
            console.error(err);
            setDashboardError('Failed to load dashboard data. Please try again.');
        } finally {
            setLoadingDashboard(false);
        }
    };

    const timeAgo = (dateStr) => {
        if (!dateStr) return 'Never';
        const ms = new Date() - new Date(dateStr);
        if (ms < 0) return 'Just now';
        const mins = Math.floor(ms / 60000);
        if (mins < 1) return 'Just now';
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        const days = Math.floor(hrs / 24);
        return `${days}d ago`;
    };

    const handleToggleRole = async (targetUserId, currentIsAdmin) => {
        if (!window.confirm(`¿Seguro que deseas ${currentIsAdmin ? 'quitar' : 'dar'} el rol de Administrador a este usuario?`)) return;
        try {
            const res = await apiClient.put(`/admin/users/${targetUserId}/role`, {});
            setUsers(prev => prev.map(u => u.id === targetUserId ? { ...u, is_admin: res.data.is_admin } : u));
        } catch (err) {
            console.error('Role toggle fail:', err);
            alert(err.response?.data?.error || 'Error al cambiar rol');
        }
    };

    const openMembershipModal = (user) => {
        setMembershipModal({ 
            open: true, 
            targetUserId: user.id, 
            daysInput: 30, 
            loading: false, 
            error: null, 
            success: null 
        });
    };

    const closeMembershipModal = () => {
        setMembershipModal(prev => ({ 
            ...prev, 
            open: false, 
            targetUserId: null, 
            error: null, 
            success: null 
        }));
    };

    const handleApplyExtension = async () => {
        const { targetUserId, daysInput } = membershipModal;
        const targetUser = users.find(u => u.id === targetUserId);
        
        if (!targetUser) return;

        const days = parseInt(daysInput, 10);
        if (isNaN(days) || days < 1) {
            setMembershipModal(prev => ({ ...prev, error: 'Por favor ingresa un número de días válido (mínimo 1).' }));
            return;
        }

        setMembershipModal(prev => ({ ...prev, loading: true, error: null, success: null }));
        
        try {
            const res = await apiClient.put('/admin/users/' + targetUserId + '/premium', { days });
            const updatedUserData = { 
                is_premium: res.data.is_premium, 
                premium_until: res.data.premium_until 
            };
            setUsers(prev => prev.map(u => u.id === targetUserId ? { ...u, ...updatedUserData } : u));
            let expiryText = 'Error al calcular fecha';
            if (res.data.premium_until) {
                const dateObj = new Date(res.data.premium_until);
                if (!isNaN(dateObj)) {
                    expiryText = dateObj.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
                }
            }
            setMembershipModal(prev => ({
                ...prev,
                loading: false,
                success: '✅ ¡Listo! La membresía fue extendida. Nuevo vencimiento: ' + expiryText + '.'
            }));
        } catch (err) {
            console.error('[Admin] Extension fail:', err);
            setMembershipModal(prev => ({ ...prev, loading: false, error: 'Error al extender la membresía.' }));
        }
    };

    const handleViewProgress = async (student) => {
        setSelectedStudent(student);
        setLoadingProgress(true);
        try {
            const res = await apiClient.get(`/admin/users/${student.id}/progress`);
            setStudentProgress(res.data);
        } catch {
            alert('Error loading student progress');
            setSelectedStudent(null);
        } finally {
            setLoadingProgress(false);
        }
    };

    const handleResetProgress = async (studentId) => {
        if (!window.confirm('¿Seguro que deseas REINICIAR el progreso de este estudiante? Esta acción borrará todos sus temas completados.')) return;
        try {
            await apiClient.delete(`/admin/users/${studentId}/progress`);
            alert('Progreso reiniciado correctamente');
            if (selectedStudent && selectedStudent.id === studentId) handleViewProgress(selectedStudent);
        } catch {
            alert('Error al reiniciar progreso');
        }
    };

    const handleRevokeFromModal = async () => {
        const { targetUserId } = membershipModal;
        const targetUser = users.find(u => u.id === targetUserId);
        if (!targetUser) return;
        if (!window.confirm('¿Seguro que deseas REVOCAR el Premium? El acceso quedará cancelado de inmediato.')) return;

        setMembershipModal(prev => ({ ...prev, loading: true, error: null, success: null }));
        
        try {
            await apiClient.put('/admin/users/' + targetUserId + '/revoke');
            setUsers(prev => prev.map(u => u.id === targetUserId ? { ...u, is_premium: false, premium_until: null } : u));
            setMembershipModal(prev => ({
                ...prev,
                loading: false,
                success: '❌ Membresía revocada. El usuario es ahora Free.'
            }));
        } catch (err) {
            setMembershipModal(prev => ({ ...prev, loading: false, error: 'Error al revocar la membresía.' }));
        }
    };

    const handleDeleteUser = async (targetUserId) => {
        if (!window.confirm('¿ELIMINAR DEFINITIVAMENTE a este usuario?')) return;
        try {
            await apiClient.delete(`/admin/users/${targetUserId}`);
            setUsers(prev => prev.filter(u => u.id !== targetUserId));
            setStats(prev => ({ ...prev, total_users: prev.total_users - 1 }));
        } catch (err) {
            alert('Error al eliminar usuario');
        }
    };

    return (
        <>
            {loadingDashboard ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-2 text-muted">Loading dashboard...</p>
                </div>
            ) : dashboardError ? (
                <div className="alert alert-danger text-center py-4 rounded-pill">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {dashboardError}
                    <button className="btn btn-link py-0" onClick={loadDashboard}>Retry</button>
                </div>
            ) : (
                <>
                    <div className="row g-4 mb-5">
                        <div className="col-md-3">
                            <div className="admin-card d-flex align-items-center">
                                <div className="admin-stat-icon bg-primary bg-opacity-10 text-primary me-3"><i className="bi bi-people-fill"></i></div>
                                <div>
                                    <p className="admin-text-muted mb-0 small fw-semibold">Registered Users</p>
                                    <h3 className="admin-heading mb-0">{stats?.total_users || 0}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-card d-flex align-items-center">
                                <div className="admin-stat-icon bg-warning bg-opacity-10 text-warning me-3"><i className="bi bi-award-fill"></i></div>
                                <div>
                                    <p className="admin-text-muted mb-0 small fw-semibold">Premium Users</p>
                                    <h3 className="admin-heading mb-0">{users.filter(u => u.is_premium).length}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-card d-flex align-items-center">
                                <div className="admin-stat-icon bg-success bg-opacity-10 text-success me-3"><i className="bi bi-journal-check"></i></div>
                                <div>
                                    <p className="admin-text-muted mb-0 small fw-semibold">Completed Topics</p>
                                    <h3 className="admin-heading mb-0">{stats?.completed_topics || 0}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-card d-flex align-items-center">
                                <div className="admin-stat-icon bg-info bg-opacity-10 text-info me-3"><i className="bi bi-graph-up-arrow"></i></div>
                                <div>
                                    <p className="admin-text-muted mb-0 small fw-semibold">Progress Entries</p>
                                    <h3 className="admin-heading mb-0">{stats?.total_progress_entries || 0}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-lg-8">
                            <div className="admin-card h-100 d-flex flex-column">
                                <h4 className="admin-heading fs-6 mb-4">Topic Completion by Level</h4>
                                <div style={{ width: '100%', height: '350px' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={stats?.chart_data || []} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#334155' : '#f1f5f9'} />
                                            <XAxis dataKey="name" stroke={isDarkMode ? '#94A3B8' : '#64748b'} axisLine={false} tickLine={false} tick={{ fontSize: 13 }} />
                                            <YAxis allowDecimals={false} stroke={isDarkMode ? '#94A3B8' : '#64748b'} axisLine={false} tickLine={false} tick={{ fontSize: 13 }} />
                                            <Tooltip
                                                cursor={{ fill: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f8fafc' }}
                                                contentStyle={{
                                                    backgroundColor: isDarkMode ? '#1E293B' : '#ffffff',
                                                    borderRadius: '8px',
                                                    border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
                                                    color: isDarkMode ? '#F8FAFC' : '#0f172a'
                                                }}
                                            />
                                            <Bar dataKey="completados" fill={isDarkMode ? '#38BDF8' : '#0f172a'} radius={[4, 4, 0, 0]} barSize={40} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="admin-card h-100 d-flex flex-column">
                                <h4 className="admin-heading fs-6 mb-4">Account Distribution</h4>
                                <div style={{ width: '100%', height: '350px', position: 'relative' }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={[
                                                    { name: 'Premium', value: users.filter(u => u.is_premium).length, color: isDarkMode ? '#38BDF8' : '#0f172a' },
                                                    { name: 'Free', value: users.filter(u => !u.is_premium).length, color: isDarkMode ? '#334155' : '#cbd5e1' }
                                                ]}
                                                cx="50%" cy="50%" innerRadius={75} outerRadius={105} paddingAngle={3} dataKey="value" stroke="none"
                                            >
                                                {[
                                                    { id: 'premium', color: isDarkMode ? '#38BDF8' : '#0f172a' },
                                                    { id: 'free', color: isDarkMode ? '#475569' : '#e2e8f0' }
                                                ].map((entry) => <Cell key={entry.id} fill={entry.color} />)}
                                            </Pie>
                                            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1E293B' : '#ffffff', borderRadius: '8px', border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}` }} />
                                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-card p-0 overflow-hidden">
                        <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <h4 className="admin-heading fs-5 mb-0">Registered Users</h4>
                            <div className="d-flex gap-2 align-items-center">
                                <div className="btn-group">
                                    <button className={`btn btn-sm ${userFilter === 'all' ? 'admin-btn-primary' : 'btn-outline-secondary'}`} onClick={() => setUserFilter('all')}>All</button>
                                    <button className={`btn btn-sm ${userFilter === 'premium' ? 'admin-btn-primary' : 'btn-outline-secondary'}`} onClick={() => setUserFilter('premium')}>Premium</button>
                                    <button className={`btn btn-sm ${userFilter === 'admin' ? 'admin-btn-primary' : 'btn-outline-secondary'}`} onClick={() => setUserFilter('admin')}>Admins</button>
                                </div>
                                <div className="input-group" style={{ width: '250px' }}>
                                    <span className="input-group-text bg-transparent border-end-0"><i className="bi bi-search admin-text-muted"></i></span>
                                    <input type="text" className="form-control border-start-0 ps-0" placeholder="Search user..." value={userSearchTerm} onChange={(e) => setUserSearchTerm(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive p-0">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Premium</th>
                                        <th>Last Active</th>
                                        <th>Role</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.filter(u => {
                                        if (userFilter === 'premium' && !u.is_premium) return false;
                                        if (userFilter === 'admin' && !u.is_admin) return false;
                                        return u.username.toLowerCase().includes(userSearchTerm.toLowerCase()) || u.email.toLowerCase().includes(userSearchTerm.toLowerCase());
                                    }).map(u => (
                                        <tr key={u.id}>
                                            <td><span className="badge bg-secondary">#{u.id}</span></td>
                                            <td className="fw-semibold">{u.username}</td>
                                            <td className="text-muted small">{u.email}</td>
                                            <td>{u.is_premium ? <span className="badge bg-warning text-white">Pro</span> : <span className="badge bg-light text-muted border">Free</span>}</td>
                                            <td className="text-muted small fw-semibold">{timeAgo(u.last_login_at)}</td>
                                            <td>{u.is_admin ? <span className="badge bg-warning text-dark">Admin</span> : <span className="badge bg-light text-dark border">Student</span>}</td>
                                            <td className="text-end">
                                                <div className="btn-group btn-group-sm">
                                                    <button className="btn btn-outline-primary" onClick={() => handleViewProgress(u)}><i className="bi bi-eye"></i></button>
                                                    <button className="btn btn-outline-info" onClick={() => handleResetProgress(u.id)}><i className="bi bi-arrow-counterclockwise"></i></button>
                                                    {u.id !== user?.id && (
                                                        <>
                                                            <button className="btn btn-outline-warning" onClick={() => openMembershipModal(u)}><i className="bi bi-award-fill"></i></button>
                                                            <button className={`btn ${u.is_admin ? 'btn-outline-secondary' : 'btn-outline-success'}`} onClick={() => handleToggleRole(u.id, u.is_admin)}><i className="bi bi-star-fill"></i></button>
                                                            <button className="btn btn-outline-danger" onClick={() => handleDeleteUser(u.id)}><i className="bi bi-trash"></i></button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* Modals */}
            {membershipModal.open && (
                <div role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') { if (e.target === e.currentTarget) closeMembershipModal(); } }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => { if (e.target === e.currentTarget) closeMembershipModal(); }}>
                    <div className="bg-white p-4 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
                        <h5>Manage Membership</h5>
                        <input type="number" className="form-control mb-3" value={membershipModal.daysInput} onChange={e => setMembershipModal(prev => ({ ...prev, daysInput: e.target.value }))} placeholder="Days to add..." />
                        {membershipModal.error && <div className="alert alert-danger p-2">{membershipModal.error}</div>}
                        {membershipModal.success && <div className="alert alert-success p-2">{membershipModal.success}</div>}
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-secondary" onClick={closeMembershipModal}>Close</button>
                            <button className="btn btn-warning" onClick={handleRevokeFromModal}>Revoke</button>
                            <button className="btn btn-primary" onClick={handleApplyExtension} disabled={membershipModal.loading}>Apply</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DashboardTab;
