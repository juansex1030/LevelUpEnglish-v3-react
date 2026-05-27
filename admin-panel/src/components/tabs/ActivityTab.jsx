import React, { useState, useEffect } from 'react';
import apiClient from '../../api/apiClient';

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

const ActivityTab = () => {
    const [logs, setLogs] = useState([]);
    const [loadingLogs, setLoadingLogs] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const loadLogs = async () => {
            try {
                setLoadingLogs(true);
                const res = await apiClient.get('/admin/logs');
                if (isMounted) setLogs(res.data.logs);
            } catch (err) {
                console.error(err);
            } finally {
                if (isMounted) setLoadingLogs(false);
            }
        };
        loadLogs();
        return () => { isMounted = false; };
    }, []);

    const handleRefresh = async () => {
        try {
            setLoadingLogs(true);
            const res = await apiClient.get('/admin/logs');
            setLogs(res.data.logs);
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingLogs(false);
        }
    };

    return (
        <div className="admin-card p-0 overflow-hidden">
            <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: '#E2E8F0' }}>
                <div>
                    <h4 className="admin-heading fs-5 mb-0">System Activity</h4>
                    <p className="admin-text-muted small mt-1 mb-0">Monitor login events, payments, and system alerts.</p>
                </div>
                <button className="btn admin-btn-primary btn-sm rounded-3 px-3 d-flex align-items-center" onClick={handleRefresh} disabled={loadingLogs}>
                    <i className={`bi bi-arrow-clockwise me-2 ${loadingLogs ? 'fa-spin' : ''}`}></i> Refresh
                </button>
            </div>

            {loadingLogs ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            ) : (
                <div className="table-responsive p-0">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>User</th>
                                <th>Action</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.length > 0 ? logs.map(log => (
                                <tr key={log.id}>
                                    <td className="text-muted small fw-semibold" style={{ width: '150px' }}>
                                        {new Date(log.created_at).toLocaleString()}
                                        <div className="text-primary" style={{ fontSize: '0.7rem' }}>{timeAgo(log.created_at)}</div>
                                    </td>
                                    <td>
                                        <span className="fw-semibold">{log.username || `User #${log.user_id}`}</span>
                                    </td>
                                    <td>
                                        <span className={`badge ${log.action.includes('error') ? 'bg-danger' : log.action.includes('payment') ? 'bg-success' : 'bg-secondary'}`}>
                                            {log.action}
                                        </span>
                                    </td>
                                    <td className="text-muted small text-break">
                                        {log.details || '-'}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-muted">No recent activity.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ActivityTab;
