import React from 'react';

const timeAgo = (dateStr) => {
    if (!dateStr) return 'Never';
    const ms = Date.now() - new Date(dateStr);
    if (ms < 0) return 'Just now';
    const mins = Math.floor(ms / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
};

const UserTable = ({ 
    users, 
    userFilter, 
    userSearchTerm, 
    user, 
    handleViewProgress, 
    handleResetProgress, 
    openMembershipModal, 
    handleToggleRole, 
    handleDeleteUser 
}) => {
    return (
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
    );
};

export default UserTable;
