import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../api/config';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '../context/AuthContext';
import PracticeEngine from '../components/PracticeEngine';

const AdminPanel = () => {
    const { user, token } = useAuth();
    const navigate = useNavigate();
    
    const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'topics'
    
    // --- DASHBOARD STATE ---
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [loadingDashboard, setLoadingDashboard] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentProgress, setStudentProgress] = useState(null);
    const [loadingProgress, setLoadingProgress] = useState(false);
    const [dashboardError, setDashboardError] = useState(null);

    // --- TOPICS CRUD STATE ---
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [topics, setTopics] = useState([]);
    const [loadingTopics, setLoadingTopics] = useState(false);
    const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
    const [editingTopicId, setEditingTopicId] = useState(null);
    const [topicForm, setTopicForm] = useState({
        level: 'A1', number: '', title: '', description: '', icon: 'bi-book-half', theory: '', practice: ''
    });
    const [useStructuredPractice, setUseStructuredPractice] = useState(false);
    const [structuredPractice, setStructuredPractice] = useState({ games: [] });
    const [userSearchTerm, setUserSearchTerm] = useState('');
    const [topicSearchTerm, setTopicSearchTerm] = useState('');
    const theoryTextareaRef = React.useRef(null);

    useEffect(() => {
        if (!user) return;
        if (!user.is_admin) {
            navigate('/');
            return;
        }
        if (activeTab === 'dashboard') {
            loadDashboard();
        } else if (activeTab === 'topics') {
            loadTopics();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, selectedLevel]);

    const loadDashboard = async () => {
        if (!token) {
            setLoadingDashboard(false);
            return;
        }
        try {
            setLoadingDashboard(true);
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const [statsRes, usersRes] = await Promise.all([
                axios.get(`${API_URL}/admin/stats`, config),
                axios.get(`${API_URL}/admin/users`, config)
            ]);
            setStats(statsRes.data);
            setUsers(usersRes.data.users);
            setDashboardError(null);
        } catch (err) {
            console.error(err);
            setDashboardError('Failed to load dashboard data. Please try again.');
            if (err.response?.status === 403) navigate('/');
        } finally {
            setLoadingDashboard(false);
        }
    };

    const loadTopics = async () => {
        if (!token) return;
        try {
            setLoadingTopics(true);
            const res = await axios.get(`${API_URL}/admin/topics?level=${selectedLevel}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTopics(res.data.topics);
        } catch (err) {
            console.error(err);
            if (err.response?.status === 403) navigate('/');
        } finally {
            setLoadingTopics(false);
        }
    };

    // --- USER HANDLERS ---
    const handleToggleRole = async (targetUserId, currentIsAdmin) => {
        if (!window.confirm(`¿Seguro que deseas ${currentIsAdmin ? 'quitar' : 'dar'} el rol de Administrador a este usuario?`)) return;
        try {
            const res = await axios.put(`${API_URL}/admin/users/${targetUserId}/role`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(users.map(u => u.id === targetUserId ? { ...u, is_admin: res.data.is_admin } : u));
        } catch (err) {
            alert(err.response?.data?.error || 'Error al cambiar rol');
        }
    };

    const handleDeleteUser = async (targetUserId) => {
        if (!window.confirm('¿ELIMINAR DEFINITIVAMENTE a este usuario? Esta acción borrará todo su progreso y no se puede deshacer.')) return;
        try {
            await axios.delete(`${API_URL}/admin/users/${targetUserId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(users.filter(u => u.id !== targetUserId));
            setStats(prev => ({ ...prev, total_users: prev.total_users - 1 }));
        } catch (err) {
            alert(err.response?.data?.error || 'Error al eliminar usuario');
        }
    };

    const handleViewProgress = async (student) => {
        setSelectedStudent(student);
        setLoadingProgress(true);
        try {
            const res = await axios.get(`${API_URL}/admin/users/${student.id}/progress`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setStudentProgress(res.data);
        } catch {
            alert('Error loading student progress');
            setSelectedStudent(null);
        } finally {
            setLoadingProgress(false);
        }
    };

    const closeProgressModal = () => {
        setSelectedStudent(null);
        setStudentProgress(null);
    };

    const handleResetProgress = async (studentId) => {
        if (!window.confirm('¿Seguro que deseas REINICIAR el progreso de este estudiante? Esta acción borrará todos sus temas completados.')) return;
        try {
            await axios.delete(`${API_URL}/admin/users/${studentId}/progress`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Progreso reiniciado correctamente');
            if (selectedStudent && selectedStudent.id === studentId) handleViewProgress(selectedStudent);
        } catch {
            alert('Error al reiniciar progreso');
        }
    };

    // --- TOPIC HANDLERS ---
    const openCreateTopic = () => {
        setEditingTopicId(null);
        setTopicForm({
            level: selectedLevel, 
            number: topics.length > 0 ? Math.max(...topics.map(t => t.number)) + 1 : 1, 
            title: '', 
            description: '', 
            icon: 'bi-book-half', 
            theory: '', 
            practice: ''
        });
        setIsTopicModalOpen(true);
        setUseStructuredPractice(false);
        setStructuredPractice({ games: [] });
    };

    const openEditTopic = async (topicId) => {
        try {
            const res = await axios.get(`${API_URL}/admin/topics/${topicId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTopicForm(res.data);
            setEditingTopicId(topicId);
            
            // Link structured practice state
            try {
                if (res.data.practice && res.data.practice.startsWith('{')) {
                    const parsed = JSON.parse(res.data.practice);
                    setStructuredPractice(parsed);
                    setUseStructuredPractice(true);
                } else {
                    setUseStructuredPractice(false);
                }
            } catch {
                setUseStructuredPractice(false);
            }

            setIsTopicModalOpen(true);
        } catch {
            alert('Error loading topic for editing');
        }
    };

    const saveTopic = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const finalData = { ...topicForm };
            
            if (useStructuredPractice) {
                finalData.practice = JSON.stringify(structuredPractice, null, 2);
            }

            if (editingTopicId) {
                await axios.put(`${API_URL}/admin/topics/${editingTopicId}`, finalData, config);
            } else {
                await axios.post(`${API_URL}/admin/topics`, finalData, config);
            }
            setIsTopicModalOpen(false);
            loadTopics();
        } catch (error) {
            alert(error.response?.data?.error || 'Error guardando tema');
        }
    };

    const deleteTopic = async (topicId) => {
        if (!window.confirm('¿Eliminar este tema y todo el progreso asociado a él?')) return;
        try {
            await axios.delete(`${API_URL}/admin/topics/${topicId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            loadTopics();
        } catch {
            alert('Error deleting topic');
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setTopicForm(prev => ({ ...prev, [name]: value }));
    };

    const insertTag = (tag, closingTag = '') => {
        const textarea = theoryTextareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selectedText = text.substring(start, end);
        
        let before = text.substring(0, start);
        let after = text.substring(end);
        
        let newTag = tag;
        let newClosing = closingTag || tag.replace('<', '</').split(' ')[0] + '>';
        if (tag.includes('/>')) newClosing = ''; // self-closing

        const insertion = `${newTag}${selectedText}${newClosing}`;
        const newValue = before + insertion + after;
        
        setTopicForm(prev => ({ ...prev, theory: newValue }));
        
        // Return focus
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + newTag.length, start + newTag.length + selectedText.length);
        }, 10);
    };

    // --- STRUCTURED PRACTICE HELPERS ---
    const addGame = () => {
        setStructuredPractice(prev => ({
            ...prev,
            games: [...(prev.games || []), { type: 'multiple_choice', title: 'New Exercise', instruction: 'Choose the correct answer', questions: [] }]
        }));
    };

    const removeGame = (i) => {
        setStructuredPractice(prev => ({
            ...prev,
            games: prev.games.filter((_, idx) => idx !== i)
        }));
    };

    const updateGame = (i, field, value) => {
        setStructuredPractice(prev => ({
            ...prev,
            games: prev.games.map((g, idx) => idx === i ? { ...g, [field]: value } : g)
        }));
    };

    const addQuestion = (gameIdx) => {
        const game = structuredPractice.games[gameIdx];
        let newQ = { q: '', a: '' };
        if (game.type === 'multiple_choice') newQ = { q: '', a: '', options: ['', '', ''] };
        
        setStructuredPractice(prev => ({
            ...prev,
            games: prev.games.map((g, idx) => {
                if (idx !== gameIdx) return g;
                return { ...g, questions: [...(g.questions || []), newQ] };
            })
        }));
    };

    const removeQuestion = (gameIdx, qIdx) => {
        setStructuredPractice(prev => ({
            ...prev,
            games: prev.games.map((g, idx) => {
                if (idx !== gameIdx) return g;
                return { ...g, questions: g.questions.filter((_, qI) => qI !== qIdx) };
            })
        }));
    };

    const updateQuestion = (gameIdx, qIdx, field, value) => {
        setStructuredPractice(prev => ({
            ...prev,
            games: prev.games.map((g, idx) => {
                if (idx !== gameIdx) return g;
                return { 
                    ...g, 
                    questions: g.questions.map((q, qI) => qI === qIdx ? { ...q, [field]: value } : q) 
                };
            })
        }));
    };

    // --- RENDER CONTENT ---
    if (!user) return null;

    return (
        <div className="container py-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <h1 className="fw-bold mb-0">
                        <i className="bi bi-shield-lock text-warning me-3"></i> 
                        Admin Panel
                    </h1>
                    <p className="text-muted mt-2">Management and control of LevelUpEnglish</p>
                </div>
            </div>

            {/* TAB NAVIGATION */}
            <ul className="nav nav-pills mb-4 gap-2">
                <li className="nav-item">
                    <button 
                        className={`nav-link px-4 fw-bold rounded-pill ${activeTab === 'dashboard' ? 'shadow-sm' : ''}`}
                        style={{ 
                            transition: 'all 0.2s', 
                            border: activeTab === 'dashboard' ? 'none' : '1px solid var(--color-borde)',
                            backgroundColor: activeTab === 'dashboard' ? 'var(--acento-primario)' : 'var(--color-fondo-secundario)',
                            color: activeTab === 'dashboard' ? '#fff' : 'var(--color-texto-principal)'
                        }}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <i className="bi bi-speedometer2 me-2"></i>Dashboard & Users
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                        className={`nav-link px-4 fw-bold rounded-pill ${activeTab === 'topics' ? 'shadow-sm' : ''}`}
                        style={{ 
                            transition: 'all 0.2s', 
                            border: activeTab === 'topics' ? 'none' : '1px solid var(--color-borde)',
                            backgroundColor: activeTab === 'topics' ? '#10B981' : 'var(--color-fondo-secundario)',
                            color: activeTab === 'topics' ? '#fff' : 'var(--color-texto-principal)'
                        }}
                        onClick={() => setActiveTab('topics')}
                    >
                        <i className="bi bi-journals me-2"></i>Topic Management
                    </button>
                </li>
            </ul>

            {/* ========== TAB: DASHBOARD ========== */}
            {activeTab === 'dashboard' && (
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
                            {/* ESTADÍSTICAS */}
                            <div className="row g-4 mb-5">
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '1rem', background: 'var(--color-fondo-secundario)'}}>
                                        <div className="card-body text-center p-4">
                                            <i className="bi bi-people-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                                            <h5 className="mt-3 text-muted">Registered Users</h5>
                                            <h2 className="fw-bold mb-0">{stats?.total_users || 0}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '1rem', background: 'var(--color-fondo-secundario)'}}>
                                        <div className="card-body text-center p-4">
                                            <i className="bi bi-journal-check text-success" style={{ fontSize: '2.5rem' }}></i>
                                            <h5 className="mt-3 text-muted">Completed Topics</h5>
                                            <h2 className="fw-bold mb-0">{stats?.completed_topics || 0}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '1rem', background: 'var(--color-fondo-secundario)'}}>
                                        <div className="card-body text-center p-4">
                                            <i className="bi bi-graph-up-arrow text-info" style={{ fontSize: '2.5rem' }}></i>
                                            <h5 className="mt-3 text-muted">Progress Annotations</h5>
                                            <h2 className="fw-bold mb-0">{stats?.total_progress_entries || 0}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CHART */}
                            <div className="card border-0 shadow-sm mb-5" style={{ borderRadius: '1rem', background: 'var(--color-fondo-secundario)', padding: '1rem'}}>
                                <div className="card-body">
                                    <h4 className="fw-bold mb-4">Completed Topics by Level</h4>
                                    <div style={{ width: '100%', height: 300 }}>
                                        <ResponsiveContainer>
                                            <BarChart data={stats?.chart_data || []} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-borde)" />
                                                <XAxis dataKey="name" stroke="var(--color-texto-secundario)" />
                                                <YAxis allowDecimals={false} stroke="var(--color-texto-secundario)" />
                                                <Tooltip 
                                                    cursor={{fill: 'var(--color-borde)', opacity: 0.4}}
                                                    contentStyle={{backgroundColor: 'var(--color-fondo)', borderRadius: '10px', border: '1px solid var(--color-borde)'}}
                                                />
                                                <Bar dataKey="completados" fill="var(--acento-primario)" radius={[4, 4, 0, 0]} barSize={40} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                            {/* USER LIST */}
                            <div className="card border-0 shadow-sm" style={{ borderRadius: '1rem', background: 'var(--color-fondo-secundario)', padding: '1rem'}}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="fw-bold mb-0">Registered Users</h4>
                                        <div className="input-group" style={{ width: '300px' }}>
                                            <span className="input-group-text bg-transparent border-end-0" style={{ border: '1px solid var(--color-borde)' }}>
                                                <i className="bi bi-search text-muted"></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                className="form-control border-start-0 ps-0" 
                                                placeholder="Search user or email..." 
                                                style={{ border: '1px solid var(--color-borde)', background: 'transparent', color: 'var(--color-texto-principal)' }}
                                                value={userSearchTerm}
                                                onChange={(e) => setUserSearchTerm(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table align-middle" style={{ color: 'var(--color-texto-principal)' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ color: 'var(--color-texto-principal)' }}>ID</th>
                                                    <th style={{ color: 'var(--color-texto-principal)' }}>User</th>
                                                    <th style={{ color: 'var(--color-texto-principal)' }}>Email</th>
                                                    <th style={{ color: 'var(--color-texto-principal)' }}>Joined</th>
                                                    <th style={{ color: 'var(--color-texto-principal)' }}>Role</th>
                                                    <th className="text-end" style={{ color: 'var(--color-texto-principal)' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.filter(u => 
                                                    u.username.toLowerCase().includes(userSearchTerm.toLowerCase()) || 
                                                    u.email.toLowerCase().includes(userSearchTerm.toLowerCase())
                                                ).map(u => (
                                                    <tr key={u.id}>
                                                        <td><span className="badge bg-secondary">#{u.id}</span></td>
                                                        <td className="fw-semibold">
                                                            <div className="d-flex align-items-center">
                                                                {u.avatar && u.avatar !== 'default' && !u.avatar.startsWith('http') && !u.avatar.startsWith('/') ? (
                                                                    <div 
                                                                        className="rounded-circle me-2 d-flex align-items-center justify-content-center border shadow-sm" 
                                                                        style={{ 
                                                                            width: '24px', 
                                                                            height: '24px', 
                                                                            fontSize: '14px', 
                                                                            lineHeight: 1,
                                                                            backgroundColor: 'var(--color-fondo-primario)',
                                                                        }}
                                                                    >
                                                                        {u.avatar}
                                                                    </div>
                                                                ) : (
                                                                    <img 
                                                                        src={u.avatar === 'default' ? `https://ui-avatars.com/api/?name=${u.username}&background=random` : u.avatar} 
                                                                        alt="avatar" 
                                                                        className="rounded-circle me-2" 
                                                                        style={{ width: '24px', height: '24px', objectFit: 'cover' }} 
                                                                    />
                                                                )}
                                                                {u.username}
                                                            </div>
                                                        </td>
                                                        <td className="text-muted small">{u.email}</td>
                                                        <td className="text-muted small">
                                                            {u.created_at ? new Date(u.created_at).toLocaleDateString() : 'N/A'}
                                                        </td>
                                                        <td>
                                                            {u.is_admin ? (
                                                                <span className="badge bg-warning text-dark"><i className="bi bi-star-fill me-1"></i> Admin</span>
                                                            ) : (
                                                                <span className="badge bg-light text-dark border">Student</span>
                                                            )}
                                                        </td>
                                                        <td className="text-end">
                                                            <div className="btn-group btn-group-sm">
                                                                <button className="btn btn-outline-primary" title="Ver Progreso" onClick={() => handleViewProgress(u)}>
                                                                    <i className="bi bi-eye"></i>
                                                                </button>
                                                                <button className="btn btn-outline-info" title="Reiniciar Progreso" onClick={() => handleResetProgress(u.id)}>
                                                                    <i className="bi bi-arrow-counterclockwise"></i>
                                                                </button>
                                                                {u.id !== user.id && (
                                                                    <>
                                                                        <button className={`btn ${u.is_admin ? 'btn-outline-warning' : 'btn-outline-success'}`} title={u.is_admin ? "Quitar Admin" : "Hacer Admin"} onClick={() => handleToggleRole(u.id, u.is_admin)}>
                                                                            <i className={`bi ${u.is_admin ? 'bi-star' : 'bi-star-fill'}`}></i>
                                                                        </button>
                                                                        <button className="btn btn-outline-danger" title="Eliminar Usuario" onClick={() => handleDeleteUser(u.id)}>
                                                                            <i className="bi bi-trash"></i>
                                                                        </button>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {users.length === 0 && (
                                                    <tr>
                                                        <td colSpan="5" className="text-center py-4 text-muted">No registered users found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}

            {/* ========== TAB: TOPICS ========== */}
            {activeTab === 'topics' && (
                <div className="card border-0 shadow-sm" style={{ borderRadius: '1rem', background: 'var(--color-fondo-secundario)', padding: '1rem'}}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="fw-bold mb-0">Content Management</h4>
                            <div className="d-flex gap-3 align-items-center">
                                <div className="input-group" style={{ width: '250px' }}>
                                    <span className="input-group-text bg-transparent border-end-0" style={{ border: '1px solid var(--color-borde)' }}>
                                        <i className="bi bi-search text-muted"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control border-start-0 ps-0" 
                                        placeholder="Search topic..." 
                                        style={{ border: '1px solid var(--color-borde)', background: 'transparent', color: 'var(--color-texto-principal)' }}
                                        value={topicSearchTerm}
                                        onChange={(e) => setTopicSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success fw-bold rounded-pill px-4 shadow-sm" onClick={openCreateTopic}>
                                    <i className="bi bi-plus-lg me-2"></i>Create Topic
                                </button>
                            </div>
                        </div>
                        
                        {/* Selector de Nivel */}
                        <div className="btn-group mb-4 w-100" role="group">
                            {['A1', 'A2', 'B1', 'B2', 'C1'].map(lvl => (
                                <button 
                                    key={lvl}
                                    type="button" 
                                    className={`btn ${selectedLevel === lvl ? 'fw-bold shadow-sm' : ''}`}
                                    style={{
                                        backgroundColor: selectedLevel === lvl ? 'var(--acento-primario)' : 'var(--color-fondo)',
                                        color: selectedLevel === lvl ? '#fff' : 'var(--color-texto-secundario)',
                                        border: '1px solid var(--color-borde)'
                                    }}
                                    onClick={() => setSelectedLevel(lvl)}
                                >
                                    Level {lvl}
                                </button>
                            ))}
                        </div>

                        {loadingTopics ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status"></div>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table align-middle" style={{ color: 'var(--color-texto-principal)' }}>
                                    <thead style={{ borderBottom: '2px solid var(--color-borde)' }}>
                                        <tr>
                                            <th style={{ color: 'var(--color-texto-principal)' }}>#</th>
                                            <th style={{ color: 'var(--color-texto-principal)' }}>Title</th>
                                            <th style={{ color: 'var(--color-texto-principal)' }}>Description</th>
                                            <th style={{ color: 'var(--color-texto-principal)' }}>Level</th>
                                            <th className="text-end" style={{ color: 'var(--color-texto-principal)' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topics.filter(t => 
                                            t.title.toLowerCase().includes(topicSearchTerm.toLowerCase()) || 
                                            t.description?.toLowerCase().includes(topicSearchTerm.toLowerCase())
                                        ).map(t => (
                                            <tr key={t.id}>
                                                <td><span className="badge bg-secondary">{selectedLevel} - {t.number}</span></td>
                                                <td className="fw-bold">
                                                    <i className={`bi ${t.icon || 'bi-book'} text-primary me-2`}></i>
                                                    {t.title}
                                                </td>
                                                <td className="text-muted small text-truncate" style={{ maxWidth: '250px' }}>
                                                    {t.description}
                                                </td>
                                                <td><span className="badge bg-info text-dark">{t.level}</span></td>
                                                <td className="text-end">
                                                    <div className="btn-group btn-group-sm">
                                                        <button className="btn btn-outline-primary" title="Editar" onClick={() => openEditTopic(t.id)}>
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                        <button className="btn btn-outline-danger" title="Eliminar" onClick={() => deleteTopic(t.id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {topics.length === 0 && (
                                            <tr>
                                                <td colSpan="5" className="text-center py-4 text-muted">No topics exist for this level.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* PROGRESS MODAL */}
            {selectedStudent && (
                 <div className="modal-backdrop fade show" style={{ opacity: 0.5 }}></div>
            )}
            {selectedStudent && (
                 <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={(e) => { if(e.target === e.currentTarget) closeProgressModal() }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1rem', background: 'var(--color-fondo)' }}>
                             <div className="modal-header border-bottom-0 pb-0">
                                 <h5 className="modal-title fw-bold" style={{ color: 'var(--color-texto-principal)'}}>
                                     Progress for {selectedStudent.username}
                                 </h5>
                                 <button type="button" className="btn-close" onClick={closeProgressModal} aria-label="Close"></button>
                             </div>
                             <div className="modal-body p-4">
                                 {loadingProgress ? (
                                     <div className="text-center py-4">
                                         <div className="spinner-border text-primary" role="status"></div>
                                     </div>
                                 ) : studentProgress ? (
                                     <div>
                                         <div className="d-flex align-items-center justify-content-between mb-4 p-3 rounded" style={{ backgroundColor: 'var(--color-fondo-secundario)'}}>
                                             <div>
                                                 <span className="text-muted d-block small">Overall Progress</span>
                                                 <h3 className="fw-bold mb-0 text-primary">{studentProgress.overall_percentage}%</h3>
                                             </div>
                                             <div className="text-end">
                                                 <span className="text-muted d-block small">Completed Topics</span>
                                                 <h4 className="fw-bold mb-0">{studentProgress.completed_topics} / {studentProgress.total_topics}</h4>
                                             </div>
                                         </div>
                                         <h6 className="fw-bold mb-3 mt-4 text-muted">Performance by Level</h6>
                                         <div className="row g-3">
                                             {Object.entries(studentProgress.stats).map(([lvl, data]) => {
                                                 const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
                                                 const colors = { A1: '#F59E0B', A2: '#00ADB5', B1: '#00ADB5', B2: '#3B82F6', C1: '#10B981' };
                                                 return (
                                                     <div key={lvl} className="col-12">
                                                         <div className="d-flex justify-content-between mb-1">
                                                             <span className="fw-semibold small">{lvl}</span>
                                                             <span className="small text-muted">{data.completed}/{data.total} ({pct}%)</span>
                                                         </div>
                                                         <div className="progress" style={{ height: '8px', backgroundColor: 'var(--color-borde)' }}>
                                                             <div className="progress-bar" style={{ width: `${pct}%`, backgroundColor: colors[lvl] || '#bbb' }}></div>
                                                         </div>
                                                     </div>
                                                 )
                                             })}
                                         </div>
                                     </div>
                                 ) : (
                                     <div className="alert alert-danger">Error loading data.</div>
                                 )}
                             </div>
                             <div className="modal-footer border-top-0 pt-0">
                                 <button type="button" className="btn btn-secondary rounded-pill" onClick={closeProgressModal}>Close</button>
                             </div> 
                        </div>
                    </div>
                 </div>
            )}

            {/* TOPIC CRUD MODAL */}
            {isTopicModalOpen && (
                 <div className="modal-backdrop fade show" style={{ opacity: 0.5 }}></div>
            )}
            {isTopicModalOpen && (
                 <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={(e) => { if(e.target === e.currentTarget) setIsTopicModalOpen(false) }}>
                    <div className="modal-dialog modal-xl modal-dialog-scrollable" role="document" style={{ maxHeight: '95vh' }}>
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1rem', background: 'var(--color-fondo)', height: '100%' }}>
                             <div className="modal-header border-bottom-0">
                                 <h5 className="modal-title fw-bold" style={{ color: 'var(--color-texto-principal)'}}>
                                     {editingTopicId ? `Edit Topic (${topicForm.level} - #${topicForm.number})` : 'Create New Topic'}
                                 </h5>
                                 <button type="button" className="btn-close" onClick={() => setIsTopicModalOpen(false)} aria-label="Close"></button>
                             </div>
                             <form onSubmit={saveTopic} style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                                 <div className="modal-body p-4 pt-0" style={{ overflowY: 'auto', flex: 1 }}>
                                     <div className="row g-3">
                                        <div className="col-md-3">
                                            <label className="form-label text-muted small fw-bold">Level</label>
                                            <input type="text" className="form-control" name="level" value={topicForm.level} onChange={handleFormChange} required readOnly={editingTopicId !== null} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label text-muted small fw-bold"># Number</label>
                                            <input type="number" className="form-control" name="number" value={topicForm.number} onChange={handleFormChange} required readOnly={editingTopicId !== null} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small fw-bold">Icon (Bootstrap Class)</label>
                                            <input type="text" className="form-control" name="icon" value={topicForm.icon} onChange={handleFormChange} placeholder="bi-book" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label text-muted small fw-bold">Topic Title</label>
                                            <input type="text" className="form-control" name="title" value={topicForm.title} onChange={handleFormChange} required />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label text-muted small fw-bold">Short Description</label>
                                            <textarea className="form-control" name="description" value={topicForm.description} onChange={handleFormChange} rows="2" required></textarea>
                                        </div>
                                        
                                        <div className="col-md-12 mt-4">
                                             <div className="d-flex justify-content-between align-items-center mb-2">
                                                 <label className="form-label fw-bold text-primary mb-0">Theory Content</label>
                                                 <div className="btn-group btn-group-sm mb-1">
                                                     <button type="button" className="btn btn-outline-secondary" onClick={() => insertTag('<b>', '</b>')}><b>B</b></button>
                                                     <button type="button" className="btn btn-outline-secondary" onClick={() => insertTag('<i>', '</i>')}><i>I</i></button>
                                                     <button type="button" className="btn btn-outline-secondary" onClick={() => insertTag('<h3 class="fw-bold text-primary mt-4">', '</h3>')} title="Heading">H</button>
                                                     <button type="button" className="btn btn-outline-secondary" onClick={() => insertTag('<ul>\n  <li>', '</li>\n</ul>')} title="Bullet List"><i className="bi bi-list-ul"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary" onClick={() => insertTag('<div class="p-4 rounded-4 my-4 shadow-sm" style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2);">\n  <h5 class="fw-bold text-primary mb-3"><i class="bi bi-book-half me-2"></i>Vocabulary</h5>\n  ', '\n</div>')} title="Vocab Box"><i className="bi bi-box"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary" onClick={() => insertTag('<table class="table table-bordered mt-3"><thead><tr><th>English</th><th>Spanish</th></tr></thead><tbody><tr><td>', '</td><td></td></tr></tbody></table>')} title="Table"><i className="bi bi-grid-3x2"></i></button>
                                                 </div>
                                             </div>
                                             <div className="row g-2">
                                                 <div className="col-md-6">
                                                     <textarea 
                                                        ref={theoryTextareaRef}
                                                        className="form-control font-monospace" 
                                                        name="theory" 
                                                        value={topicForm.theory || ''} 
                                                        onChange={handleFormChange} 
                                                        rows="12" 
                                                        placeholder="Write HTML content here..."
                                                        style={{ backgroundColor: 'var(--color-fondo-secundario)', fontSize: '0.85rem' }}
                                                     ></textarea>
                                                 </div>
                                                 <div className="col-md-6">
                                                     <div className="p-3 border rounded overflow-auto" style={{ height: 'calc(1.5em * 12 + 1.25rem + 2px)', background: 'var(--color-fondo-secundario)', fontSize: '0.9rem' }}>
                                                         <span className="text-muted small d-block mb-2 border-bottom pb-1"><i className="bi bi-eye me-1"></i> Live Preview</span>
                                                         <div dangerouslySetInnerHTML={{ __html: topicForm.theory || '<p class="text-muted">No content to preview.</p>' }} />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>

                                         <div className="col-md-12 mt-4">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <label className="form-label fw-bold text-success mb-0">Practice Content</label>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="practiceMode" checked={useStructuredPractice} onChange={(e) => setUseStructuredPractice(e.target.checked)} />
                                                    <label className="form-check-label small" htmlFor="practiceMode">Use Structured Builder</label>
                                                </div>
                                            </div>

                                            {!useStructuredPractice ? (
                                                <textarea className="form-control font-monospace" name="practice" value={topicForm.practice || ''} onChange={handleFormChange} rows="6" style={{ backgroundColor: 'var(--color-fondo-secundario)', fontSize: '0.85rem' }} placeholder="Raw HTML or JSON script..."></textarea>
                                            ) : (
                                                <div className="p-4 border rounded-4 bg-dark shadow-inner" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h6 className="mb-0 fw-bold">Games / Exercises</h6>
                                                        <button type="button" className="btn btn-sm btn-outline-success" onClick={addGame}><i className="bi bi-plus-circle me-1"></i> Add Game</button>
                                                    </div>

                                                    {structuredPractice.games?.map((game, gIdx) => (
                                                        <div key={gIdx} className="card bg-secondary bg-opacity-10 border-secondary border-opacity-25 mb-4 shadow-sm">
                                                            <div className="card-header d-flex justify-content-between align-items-center py-2 bg-dark bg-opacity-25 border-bottom-0">
                                                                <span className="badge bg-primary">Game #{gIdx + 1}</span>
                                                                <button type="button" className="btn btn-link text-danger p-0" onClick={() => removeGame(gIdx)}><i className="bi bi-trash"></i></button>
                                                            </div>
                                                            <div className="card-body p-3">
                                                                <div className="row g-2 mb-3">
                                                                    <div className="col-md-4">
                                                                        <label className="small text-muted fw-bold">Type</label>
                                                                        <select className="form-select form-select-sm" value={game.type} onChange={e => updateGame(gIdx, 'type', e.target.value)}>
                                                                            <option value="multiple_choice">Multiple Choice</option>
                                                                            <option value="fill_in">Fill In / Write</option>
                                                                            <option value="unscramble">Unscramble</option>
                                                                            <option value="matching">Matching</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <label className="small text-muted fw-bold">Title</label>
                                                                        <input type="text" className="form-control form-control-sm" value={game.title} onChange={e => updateGame(gIdx, 'title', e.target.value)} />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <label className="small text-muted fw-bold">Instruction</label>
                                                                        <input type="text" className="form-control form-control-sm" value={game.instruction} onChange={e => updateGame(gIdx, 'instruction', e.target.value)} />
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3 ps-3 border-start border-primary border-2">
                                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                                        <span className="small fw-bold">Questions</span>
                                                                        <button type="button" className="btn btn-xs btn-outline-primary" onClick={() => addQuestion(gIdx)} style={{ fontSize: '0.7rem' }}>+ Add Question</button>
                                                                    </div>

                                                                    {game.questions?.map((q, qIdx) => (
                                                                        <div key={qIdx} className="mb-3 p-2 bg-dark rounded-3 position-relative">
                                                                            <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-1" style={{ scale: '0.6' }} onClick={() => removeQuestion(gIdx, qIdx)}></button>
                                                                            <div className="row g-2">
                                                                                <div className="col-md-6">
                                                                                    <label className="small text-muted" style={{ fontSize: '0.65rem' }}>Question / Prompt</label>
                                                                                    <input type="text" className="form-control form-control-sm" value={q.q} onChange={e => updateQuestion(gIdx, qIdx, 'q', e.target.value)} />
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <label className="small text-muted" style={{ fontSize: '0.65rem' }}>Answer</label>
                                                                                    <input type="text" className="form-control form-control-sm border-success bg-success bg-opacity-10" value={q.a} onChange={e => updateQuestion(gIdx, qIdx, 'a', e.target.value)} />
                                                                                </div>
                                                                                {game.type === 'multiple_choice' && (
                                                                                    <div className="col-12 mt-1">
                                                                                        <label className="small text-muted d-block" style={{ fontSize: '0.65rem' }}>Options (comma separated)</label>
                                                                                        <input type="text" className="form-control form-control-sm" value={q.options?.join(', ')} 
                                                                                            onChange={e => updateQuestion(gIdx, qIdx, 'options', e.target.value.split(',').map(s => s.trim()))} 
                                                                                            placeholder="Option A, Option B, Option C" />
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                                                        <span className="text-muted x-small">Preview of active questions in PracticeEngine:</span>
                                                        <div className="mt-2" style={{ maxHeight: '200px', overflowY: 'auto', pointerEvents: 'none', opacity: 0.6, scale: '0.9', transformOrigin: 'top' }}>
                                                            <PracticeEngine data={structuredPractice} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                         </div>
                                     </div>
                                 </div>
                                 <div className="modal-footer border-top-0 pt-0 pb-4 pe-4">
                                     <button type="button" className="btn btn-outline-secondary rounded-pill fw-bold" onClick={() => setIsTopicModalOpen(false)}>Cancel</button>
                                     <button type="submit" className="btn btn-primary rounded-pill fw-bold px-4 shadow-sm">
                                         <i className="bi bi-save me-2"></i>Save Topic
                                     </button>
                                 </div>
                             </form>
                        </div>
                    </div>
                 </div>
            )}
        </div>
    );
};

export default AdminPanel;
