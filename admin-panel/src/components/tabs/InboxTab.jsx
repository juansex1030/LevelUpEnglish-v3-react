import React, { useState, useEffect } from 'react';
import apiClient from '../../api/apiClient';

const InboxTab = () => {
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const loadMessages = async () => {
            try {
                setLoadingMessages(true);
                const res = await apiClient.get('/support/admin/messages');
                if (isMounted) setMessages(res.data.messages);
            } catch (err) {
                console.error('Error loading messages:', err);
            } finally {
                if (isMounted) setLoadingMessages(false);
            }
        };
        loadMessages();
        return () => { isMounted = false; };
    }, []);

    const handleRefresh = async () => {
        try {
            setLoadingMessages(true);
            const res = await apiClient.get('/support/admin/messages');
            setMessages(res.data.messages);
        } catch (err) {
            console.error('Error loading messages:', err);
        } finally {
            setLoadingMessages(false);
        }
    };

    const handleMarkAsRead = async (id) => {
        try {
            await apiClient.put(`/support/admin/messages/${id}/read`);
            setMessages(prev => prev.map(m => m.id === id ? { ...m, status: 'read' } : m));
        } catch (err) {
            console.error('Error marking as read:', err);
            alert('No se pudo actualizar el mensaje.');
        }
    };

    return (
        <div className="admin-card p-0 overflow-hidden">
            <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: '#E2E8F0' }}>
                <div>
                    <h4 className="admin-heading fs-5 mb-0">Support Inbox</h4>
                    <p className="admin-text-muted small mt-1 mb-0">Manage inquiries, complaints, and suggestions from your students.</p>
                </div>
                <button className="btn admin-btn-primary btn-sm rounded-3 px-3 d-flex align-items-center" onClick={handleRefresh} disabled={loadingMessages}>
                    <i className={`bi bi-arrow-clockwise me-2 ${loadingMessages ? 'fa-spin' : ''}`}></i> Refresh
                </button>
            </div>

            {loadingMessages ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            ) : (
                <div className="table-responsive p-0">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Sender</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map(msg => (
                                <tr key={msg.id} style={{ backgroundColor: msg.status === 'unread' ? 'rgba(var(--bs-primary-rgb), 0.05)' : 'transparent' }}>
                                    <td className="text-muted small" style={{ whiteSpace: 'nowrap' }}>
                                        {new Date(msg.created_at).toLocaleString()}
                                    </td>
                                    <td>
                                        <div className="fw-bold">{msg.name}</div>
                                        <div className="x-small text-muted">{msg.email}</div>
                                    </td>
                                    <td>
                                        <span className={`badge rounded-pill ${
                                            msg.subject === 'Complaint' ? 'bg-danger' : 
                                            msg.subject === 'Suggestion' ? 'bg-success' : 
                                            msg.subject === 'Inquiry' ? 'bg-info' : 'bg-secondary'
                                        }`}>
                                            {msg.subject}
                                        </span>
                                    </td>
                                    <td className="small text-muted" style={{ maxWidth: '300px' }}>
                                        <div className="text-wrap">{msg.message}</div>
                                    </td>
                                    <td className="text-end">
                                        {msg.status === 'unread' ? (
                                            <button className="btn btn-sm btn-success rounded-pill px-3" onClick={() => handleMarkAsRead(msg.id)}>
                                                <i className="bi bi-check2-circle me-1"></i> Handle
                                            </button>
                                        ) : (
                                            <span className="text-muted small"><i className="bi bi-check2-all me-1"></i> Reviewed</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {messages.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-5 text-muted">
                                        <i className="bi bi-inbox-fill fs-2 d-block mb-2"></i>
                                        Inbox is empty.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default InboxTab;
