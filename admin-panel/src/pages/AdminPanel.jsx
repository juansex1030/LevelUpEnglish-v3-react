import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useAuth } from '../context/AuthContext';
import PracticeEngine from '../components/PracticeEngine';

const AdminPanel = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleExit = async () => {
        await logout();
        // Force redirect to the student site (main app)
        window.location.href = '/';
    };
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('admin_theme') === 'dark');

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('admin_theme', newTheme ? 'dark' : 'light');
    };

    const [activeTab, setActiveTab] = useState('dashboard');
    const [userFilter, setUserFilter] = useState('all');

    // --- DASHBOARD STATE ---
    // --- STATS & LOGS STATE ---
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [loadingDashboard, setLoadingDashboard] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentProgress, setStudentProgress] = useState(null);
    const [loadingProgress, setLoadingProgress] = useState(false);
    const [dashboardError, setDashboardError] = useState(null);
    const [logs, setLogs] = useState([]);
    const [loadingLogs, setLoadingLogs] = useState(false);

    // --- SUPPORT INBOX STATE ---
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(false);

    // --- TOPICS CRUD STATE ---
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [topics, setTopics] = useState([]);
    const [loadingTopics, setLoadingTopics] = useState(false);
    const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
    const [editingTopicId, setEditingTopicId] = useState(null);
    const [topicForm, setTopicForm] = useState({
        level: 'A1', number: '', title: '', description: '', icon: 'bi-book-half', theory: '', practice: '',
        premium_practice: '', arcade_enabled: true
    });
    const [isPremiumPracticeMode, setIsPremiumPracticeMode] = useState(false);
    const [useStructuredPractice, setUseStructuredPractice] = useState(false);
    const [structuredPractice, setStructuredPractice] = useState({ games: [] });
    const [userSearchTerm, setUserSearchTerm] = useState('');
    const [topicSearchTerm, setTopicSearchTerm] = useState('');
    const theoryTextareaRef = React.useRef(null);

    // --- MEMBERSHIP MODAL STATE ---
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
        
        if (!user) return;
       if (!user.is_admin) {
            navigate('/');
            return;
        }
        const loadData = async () => {
            if (activeTab === 'dashboard') await loadDashboard();
            else if (activeTab === 'topics') await loadTopics();
            else if (activeTab === 'arcade') await loadAllTopicsForArcade();
            else if (activeTab === 'activity') await loadLogs();
            else if (activeTab === 'inbox') await loadMessages();
        };

        loadData();

        return () => { isMounted = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, selectedLevel]);

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

    const loadTopics = async () => {
        try {
            setLoadingTopics(true);
            const res = await apiClient.get(`/admin/topics?level=${selectedLevel}`);
            setTopics(res.data.topics);
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingTopics(false);
        }
    };

    const loadAllTopicsForArcade = async () => {
        try {
            setLoadingTopics(true);
            // We'll use a special query param or just multiple calls, 
            // but the easy way is to fetch all levels since Arcade shows all.
            const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
            const results = await Promise.all(levels.map(l => apiClient.get(`/admin/topics?level=${l}`)));
            const all = results.flatMap(r => r.data.topics);
            setTopics(all);
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingTopics(false);
        }
    };

    // --- ACTIVITY HANDLERS ---
    const loadLogs = async () => {
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

    // --- SUPPORT INBOX HANDLERS ---
    const loadMessages = async () => {
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

    // --- USER HANDLERS ---
    const handleToggleRole = async (targetUserId, currentIsAdmin) => {
        if (!window.confirm(`¿Seguro que deseas ${currentIsAdmin ? 'quitar' : 'dar'} el rol de Administrador a este usuario?`)) return;
        try {
            const res = await apiClient.put(`/admin/users/${targetUserId}/role`, {});
            // Use functional update to avoid stale 'users' reference
            setUsers(prev => prev.map(u => u.id === targetUserId ? { ...u, is_admin: res.data.is_admin } : u));
        } catch (err) {
            console.error('Role toggle fail:', err);
            alert(err.response?.data?.error || 'Error al cambiar rol');
        }
    };

    // removed handleTogglePremium (using modal instead)

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

    const handleMarkAsRead = async (id) => {
        try {
            await apiClient.put(`/support/admin/messages/${id}/read`);
            setMessages(prev => prev.map(m => m.id === id ? { ...m, status: 'read' } : m));
        } catch (err) {
            console.error('Error marking as read:', err);
            alert('No se pudo actualizar el mensaje.');
        }
    };

    const handleToggleArcadeField = async (topicId, currentVal) => {
        try {
            const newVal = !currentVal;
            await apiClient.put(`/admin/topics/${topicId}`, { arcade_enabled: newVal });
            setTopics(prev => prev.map(t => t.id === topicId ? { ...t, arcade_enabled: newVal } : t));
        } catch (err) {
            console.error('Error toggling arcade field:', err);
            alert('Error al actualizar el estado del Arcade.');
        }
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
            console.log('[Admin] Extension response:', res.data);
            
            const updatedUserData = { 
                is_premium: res.data.is_premium, 
                premium_until: res.data.premium_until 
            };

            // Update main list
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
                success: '✅ ¡Listo! La membresía de ' + targetUser.username + ' fue extendida ' + days + ' días. Nuevo vencimiento: ' + expiryText + '.'
            }));
        } catch (err) {
            console.error('[Admin] Extension fail:', err);
            const errorMsg = err.response?.data?.error || err.response?.data?.msg || err.message || 'Error al extender la membresía.';
            setMembershipModal(prev => ({ ...prev, loading: false, error: errorMsg }));
        }
    };

    const handleRevokeFromModal = async () => {
        const { targetUserId } = membershipModal;
        const targetUser = users.find(u => u.id === targetUserId);
        if (!targetUser) return;
        
        console.log('[Admin] Attempting to revoke user:', targetUserId);
        
        if (!window.confirm('\u00bfSeguro que deseas REVOCAR el Premium de @' + targetUser.username + '?\nEl acceso quedar\u00e1 cancelado de inmediato.')) {
            return;
        }

        setMembershipModal(prev => ({ ...prev, loading: true, error: null, success: null }));
        
        try {
            const res = await apiClient.put('/admin/users/' + targetUserId + '/revoke');
            console.log('[Admin] Revoke success:', res.data);
            
            // Update main list
            setUsers(prev => prev.map(u => u.id === targetUserId ? { ...u, is_premium: false, premium_until: null } : u));
            
            setMembershipModal(prev => ({
                ...prev,
                loading: false,
                success: '❌ Membresía de @' + targetUser.username + ' revocada. El usuario es ahora Free.'
            }));
        } catch (err) {
            console.error('[Admin] Revoke error:', err);
            const errorMsg = err.response?.data?.error || err.response?.data?.msg || 'Error al revocar la membresía.';
            setMembershipModal(prev => ({ ...prev, loading: false, error: errorMsg }));
        }
    };

    const handleDeleteUser = async (targetUserId) => {
        if (!window.confirm('¿ELIMINAR DEFINITIVAMENTE a este usuario? Esta acción borrará todo su progreso y no se puede deshacer.')) return;
        try {
            await apiClient.delete(`/admin/users/${targetUserId}`);
            setUsers(prev => prev.filter(u => u.id !== targetUserId));
            setStats(prev => ({ ...prev, total_users: prev.total_users - 1 }));
        } catch (err) {
            console.error('Delete user fail:', err);
            alert(err.response?.data?.error || 'Error al eliminar usuario');
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

    const closeProgressModal = () => {
        setSelectedStudent(null);
        setStudentProgress(null);
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
            practice: '',
            premium_practice: '',
            arcade_enabled: true
        });
        setIsTopicModalOpen(true);
        setUseStructuredPractice(false);
        setIsPremiumPracticeMode(false);
        setStructuredPractice({ games: [] });
    };

    const openEditTopic = async (topicId) => {
        try {
            const res = await apiClient.get(`/admin/topics/${topicId}`);
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

            setIsPremiumPracticeMode(false);
            setIsTopicModalOpen(true);
        } catch {
            alert('Error loading topic for editing');
        }
    };

    const saveTopic = async (e) => {
        e.preventDefault();
        try {
            const finalData = { ...topicForm };

            // Sync current structured view to the active field before saving
            if (useStructuredPractice) {
                if (isPremiumPracticeMode) {
                    finalData.premium_practice = JSON.stringify(structuredPractice, null, 2);
                } else {
                    finalData.practice = JSON.stringify(structuredPractice, null, 2);
                }
            }

            if (editingTopicId) {
                await apiClient.put(`/admin/topics/${editingTopicId}`, finalData);
            } else {
                await apiClient.post('/admin/topics', finalData);
            }
            setIsTopicModalOpen(false);
            if (activeTab === 'topics') loadTopics();
            else if (activeTab === 'arcade') loadAllTopicsForArcade();
        } catch (error) {
            alert(error.response?.data?.error || 'Error guardando tema');
        }
    };

    const togglePracticeMode = (toPremium) => {
        if (toPremium === isPremiumPracticeMode) return;

        // 1. Save current structured state to the relevant form field
        const currentJson = JSON.stringify(structuredPractice, null, 2);
        const updatedForm = { ...topicForm };
        if (isPremiumPracticeMode) updatedForm.premium_practice = currentJson;
        else updatedForm.practice = currentJson;

        // 2. Load the other field into structured state
        const targetString = toPremium ? updatedForm.premium_practice : updatedForm.practice;
        try {
            if (targetString && targetString.startsWith('{')) {
                setStructuredPractice(JSON.parse(targetString));
                setUseStructuredPractice(true);
            } else {
                setStructuredPractice({ games: [] });
                setUseStructuredPractice(false);
            }
        } catch {
            setStructuredPractice({ games: [] });
            setUseStructuredPractice(false);
        }

        setTopicForm(updatedForm);
        setIsPremiumPracticeMode(toPremium);
    };

    const deleteTopic = async (topicId) => {
        if (!window.confirm('¿Eliminar este tema y todo el progreso asociado a él?')) return;
        try {
            await apiClient.delete(`/admin/topics/${topicId}`);
            loadTopics();
        } catch {
            alert('Error deleting topic');
        }
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTopicForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
        <div className={`d-flex admin-corporate pb-5 ${isDarkMode ? 'dark-mode' : ''}`} style={{ minHeight: '100vh', width: '100%' }}>

            <style>{`
                :root {
                    --admin-bg: #F8FAFC;
                    --admin-sidebar-bg: #FFFFFF;
                    --admin-card-bg: #FFFFFF;
                    --admin-text-primary: #0F172A;
                    --admin-text-muted: #64748B;
                    --admin-border: #E2E8F0;
                    --admin-border-light: #F1F5F9;
                    --admin-nav-hover: #F1F5F9;
                    --admin-nav-active-bg: #0F172A;
                    --admin-nav-active-text: #FFFFFF;
                }

                .dark-mode {
                    --admin-bg: #0F172A;
                    --admin-sidebar-bg: #1E293B;
                    --admin-card-bg: #1E293B;
                    --admin-text-primary: #F8FAFC;
                    --admin-text-muted: #94A3B8;
                    --admin-border: #334155;
                    --admin-border-light: #1E293B;
                    --admin-nav-hover: #334155;
                    --admin-nav-active-bg: #38BDF8;
                    --admin-nav-active-text: #0F172A;
                }

                .admin-corporate {
                    background-color: var(--admin-bg) !important;
                    color: var(--admin-text-primary) !important;
                    font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .admin-sidebar {
                    background-color: var(--admin-sidebar-bg) !important;
                    border-right: 1px solid var(--admin-border) !important;
                    transition: background-color 0.3s ease;
                }
                .admin-card {
                    background-color: var(--admin-card-bg) !important;
                    border-radius: 0.75rem !important;
                    border: 1px solid var(--admin-border) !important;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05) !important;
                    padding: 1.5rem !important;
                    transition: background-color 0.3s ease;
                }
                .admin-heading {
                    color: var(--admin-text-primary) !important;
                    font-weight: 700 !important;
                    letter-spacing: -0.025em;
                }
                .admin-text-muted {
                    color: var(--admin-text-muted) !important;
                }
                .admin-nav-btn {
                    color: var(--admin-text-muted) !important;
                    font-weight: 500;
                    margin-bottom: 0.25rem;
                }
                .admin-nav-btn.active {
                    background-color: var(--admin-nav-active-bg) !important;
                    color: var(--admin-nav-active-text) !important;
                    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) !important;
                }
                .admin-nav-btn:hover:not(.active) {
                    background-color: var(--admin-nav-hover) !important;
                    color: var(--admin-text-primary) !important;
                }
                .admin-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .admin-table th {
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    letter-spacing: 0.05em;
                    color: var(--admin-text-muted) !important;
                    border-bottom: 1px solid var(--admin-border) !important;
                    padding: 1rem 0.5rem;
                    font-weight: 600;
                }
                .admin-table td {
                    color: var(--admin-text-primary) !important;
                    border-bottom: 1px solid var(--admin-border-light) !important;
                    padding: 1rem 0.5rem;
                    vertical-align: middle;
                }
                .admin-stat-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                }
                .admin-btn-primary {
                    background-color: var(--admin-nav-active-bg) !important;
                    color: var(--admin-nav-active-text) !important;
                    border-radius: 0.5rem;
                    border: none;
                }
                .admin-btn-primary:hover {
                    opacity: 0.9;
                }
                .form-control, .form-select {
                    background-color: var(--admin-sidebar-bg) !important;
                    border-color: var(--admin-border) !important;
                    color: var(--admin-text-primary) !important;
                }
                .modal-content {
                    background-color: var(--admin-card-bg) !important;
                    color: var(--admin-text-primary) !important;
                    border-color: var(--admin-border) !important;
                }
            `}</style>

            {/* ====== SIDEBAR ====== */}
            <aside
                className="d-flex flex-column flex-shrink-0 p-4 admin-sidebar"
                style={{
                    width: '280px',
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    zIndex: 1040
                }}
            >
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <a href="/" className="d-flex align-items-center text-decoration-none admin-heading">
                        <i className="bi bi-shield-lock-fill text-primary fs-3 me-3"></i>
                        <span className="fs-4 fw-bold">AdminPanel</span>
                    </a>
                    <button
                        className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        onClick={toggleTheme}
                        style={{
                            width: '36px', height: '36px',
                            backgroundColor: isDarkMode ? '#334155' : '#F1F5F9',
                            color: isDarkMode ? '#F8FAFC' : '#0F172A',
                            border: 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
                    </button>
                </div>

                <ul className="nav flex-column mb-auto gap-2">
                    <li className="nav-item">
                        <button
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                            style={{ transition: 'all 0.2s' }}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <i className="bi bi-speedometer2 me-3"></i> Dashboard & Users
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'topics' ? 'active' : ''}`}
                            style={{ transition: 'all 0.2s' }}
                            onClick={() => setActiveTab('topics')}
                        >
                            <i className="bi bi-journals me-3"></i> Topic Management
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'inbox' ? 'active' : ''}`}
                            style={{ transition: 'all 0.2s' }}
                            onClick={() => setActiveTab('inbox')}
                        >
                            <i className="bi bi-inbox-fill me-2"></i> Support Inbox
                            {messages.filter(m => m.status === 'unread').length > 0 && (
                                <span className="badge rounded-circle bg-danger ms-2" style={{ padding: '4px 7px', fontSize: '10px' }}>
                                    {messages.filter(m => m.status === 'unread').length}
                                </span>
                            )}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'arcade' ? 'active' : ''}`}
                            style={{ transition: 'all 0.2s' }}
                            onClick={() => setActiveTab('arcade')}
                        >
                            <i className="bi bi-controller me-3"></i> Premium Arcade
                        </button>
                    </li>
                    <li className="nav-item border-top pt-2 mt-2" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0' }}>
                        <button
                            className={`nav-link text-start w-100 rounded-3 admin-nav-btn ${activeTab === 'activity' ? 'active' : ''}`}
                            style={{ transition: 'all 0.2s' }}
                            onClick={() => setActiveTab('activity')}
                        >
                            <i className="bi bi-activity me-3"></i> Activity & Audit Logs
                        </button>
                    </li>
                </ul>

                <hr style={{ borderColor: '#E2E8F0' }} />
                <button className="btn btn-outline-danger w-100 rounded-3 text-start" onClick={handleExit}>
                    <i className="bi bi-box-arrow-left me-2"></i> Exit Admin
                </button>
            </aside>

            {/* ====== MAIN CONTENT ====== */}
            <main className="flex-grow-1" style={{ overflowY: 'auto' }}>
                <div className="container-fluid py-5 px-md-5" style={{ maxWidth: '1400px' }}>

                    {/* Header contextual */}
                    <div className="d-flex justify-content-between align-items-end mb-5 pb-3">
                        <div>
                            <h2 className="admin-heading text-capitalize mb-1">
                                {activeTab === 'dashboard' ? 'Overview & Users' : activeTab === 'topics' ? 'Topic Management' : activeTab === 'arcade' ? 'Premium Arcade' : 'System Activity'}
                            </h2>
                            <p className="admin-text-muted small mb-0">Manage your platform resources and activity.</p>
                        </div>
                        <div className="admin-text-muted small d-none d-md-block px-3 py-2 rounded-3" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                            <i className="bi bi-shield-check me-1"></i> Admin Session: <span className="fw-semibold text-success">Active</span>
                        </div>
                    </div>

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
                                        <div className="col-md-3">
                                            <div className="admin-card d-flex align-items-center">
                                                <div className="admin-stat-icon bg-primary bg-opacity-10 text-primary me-3">
                                                    <i className="bi bi-people-fill"></i>
                                                </div>
                                                <div>
                                                    <p className="admin-text-muted mb-0 small fw-semibold">Registered Users</p>
                                                    <h3 className="admin-heading mb-0">{stats?.total_users || 0}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="admin-card d-flex align-items-center">
                                                <div className="admin-stat-icon bg-warning bg-opacity-10 text-warning me-3">
                                                    <i className="bi bi-award-fill"></i>
                                                </div>
                                                <div>
                                                    <p className="admin-text-muted mb-0 small fw-semibold">Premium Users</p>
                                                    <h3 className="admin-heading mb-0">{users.filter(u => u.is_premium).length}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="admin-card d-flex align-items-center">
                                                <div className="admin-stat-icon bg-success bg-opacity-10 text-success me-3">
                                                    <i className="bi bi-journal-check"></i>
                                                </div>
                                                <div>
                                                    <p className="admin-text-muted mb-0 small fw-semibold">Completed Topics</p>
                                                    <h3 className="admin-heading mb-0">{stats?.completed_topics || 0}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="admin-card d-flex align-items-center">
                                                <div className="admin-stat-icon bg-info bg-opacity-10 text-info me-3">
                                                    <i className="bi bi-graph-up-arrow"></i>
                                                </div>
                                                <div>
                                                    <p className="admin-text-muted mb-0 small fw-semibold">Progress Entries</p>
                                                    <h3 className="admin-heading mb-0">{stats?.total_progress_entries || 0}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CHARTS ROW */}
                                    <div className="row g-4 mb-5">
                                        {/* Bar Chart - Topic Progress */}
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
                                                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                                                                    color: isDarkMode ? '#F8FAFC' : '#0f172a',
                                                                    fontWeight: '500'
                                                                }}
                                                            />
                                                            <Bar dataKey="completados" fill={isDarkMode ? '#38BDF8' : '#0f172a'} radius={[4, 4, 0, 0]} barSize={40} />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Donut Chart - Premium vs Free */}
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
                                                                cx="50%"
                                                                cy="50%"
                                                                innerRadius={75}
                                                                outerRadius={105}
                                                                paddingAngle={3}
                                                                dataKey="value"
                                                                stroke="none"
                                                            >
                                                                {
                                                                    [
                                                                        { id: 'premium', name: 'Premium', value: users.filter(u => u.is_premium).length, color: isDarkMode ? '#38BDF8' : '#0f172a' },
                                                                        { id: 'free', name: 'Free', value: users.filter(u => !u.is_premium).length, color: isDarkMode ? '#475569' : '#e2e8f0' }
                                                                    ].map((entry) => (
                                                                        <Cell key={`pie-cell-${entry.id}`} fill={entry.color} />
                                                                    ))
                                                                }
                                                            </Pie>
                                                            <Tooltip
                                                                contentStyle={{
                                                                    backgroundColor: isDarkMode ? '#1E293B' : '#ffffff',
                                                                    borderRadius: '8px',
                                                                    border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
                                                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                                                                    color: isDarkMode ? '#F8FAFC' : '#0f172a'
                                                                }}
                                                                itemStyle={{ color: isDarkMode ? '#F8FAFC' : '#0f172a', fontWeight: 'bold' }}
                                                            />
                                                            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '14px', color: isDarkMode ? '#94A3B8' : '#64748b' }} />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                    {/* Center Label */}
                                                    <div style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
                                                        <div className="fs-2 fw-bold" style={{ color: isDarkMode ? '#F8FAFC' : '#0f172a', letterSpacing: '-1px' }}>{users.length}</div>
                                                        <div className="text-muted" style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '1px' }}>TOTAL</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* USER LIST */}
                                    <div className="admin-card p-0 overflow-hidden">
                                        <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0' }}>
                                            <h4 className="admin-heading fs-5 mb-0">Registered Users</h4>
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="btn-group" role="group">
                                                    <button type="button" className={`btn btn-sm ${userFilter === 'all' ? 'admin-btn-primary' : (isDarkMode ? 'btn-outline-light text-light' : 'btn-outline-secondary text-dark')}`} onClick={() => setUserFilter('all')}>All</button>
                                                    <button type="button" className={`btn btn-sm ${userFilter === 'premium' ? 'admin-btn-primary' : (isDarkMode ? 'btn-outline-light text-light' : 'btn-outline-secondary text-dark')}`} onClick={() => setUserFilter('premium')}>Premium</button>
                                                    <button type="button" className={`btn btn-sm ${userFilter === 'admin' ? 'admin-btn-primary' : (isDarkMode ? 'btn-outline-light text-light' : 'btn-outline-secondary text-dark')}`} onClick={() => setUserFilter('admin')}>Admins</button>
                                                </div>
                                                <div className="input-group" style={{ width: '250px' }}>
                                                    <span className="input-group-text bg-transparent border-end-0" style={{ border: `1px solid ${isDarkMode ? '#334155' : '#E2E8F0'}` }}>
                                                        <i className="bi bi-search admin-text-muted"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control border-start-0 ps-0"
                                                        placeholder="Search user or email..."
                                                        style={{ border: `1px solid ${isDarkMode ? '#334155' : '#E2E8F0'}`, background: 'transparent' }}
                                                        value={userSearchTerm}
                                                        onChange={(e) => setUserSearchTerm(e.target.value)}
                                                    />
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
                                                        <th>Joined</th>
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
                                                        return u.username.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
                                                            u.email.toLowerCase().includes(userSearchTerm.toLowerCase());
                                                    }).map(u => (
                                                        <tr key={u.id}>
                                                            <td><span className="badge bg-secondary">#{u.id}</span></td>
                                                            <td className="fw-semibold">
                                                                <div className="d-flex align-items-center">
                                                                    {u.avatar && u.avatar !== 'default' ? (
                                                                        u.avatar.startsWith('http') ? (
                                                                            <img
                                                                                src={u.avatar}
                                                                                alt={u.username}
                                                                                className="rounded-circle me-2"
                                                                                style={{ width: '24px', height: '24px', objectFit: 'cover' }}
                                                                            />
                                                                        ) : (
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
                                                                        )
                                                                    ) : (
                                                                        <img
                                                                            src={`https://ui-avatars.com/api/?name=${u.username}&background=random`}
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
                                                                {u.is_premium ? (
                                                                    <span className="badge" style={{ backgroundColor: '#F59E0B', color: '#fff' }}><i className="bi bi-award-fill me-1"></i> Pro</span>
                                                                ) : (
                                                                    <span className="badge bg-light text-muted border">Free</span>
                                                                )}
                                                            </td>
                                                            <td className="text-muted small fw-semibold">
                                                                {timeAgo(u.last_login_at)}
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
                                                                            <button
                                                                                className="btn btn-outline-warning"
                                                                                title="Gestionar Membres\u00eda"
                                                                                onClick={() => openMembershipModal(u)}
                                                                            >
                                                                                <i className="bi bi-award-fill me-1"></i>Gestionar
                                                                            </button>
                                                                            <button className={`btn ${u.is_admin ? 'btn-outline-secondary' : 'btn-outline-success'}`} title={u.is_admin ? "Quitar Admin" : "Hacer Admin"} onClick={() => handleToggleRole(u.id, u.is_admin)}>
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
                                </>
                            )}
                        </>
                    )}

                    {/* ========== TAB: SUPPORT INBOX ========== */}
                    {activeTab === 'inbox' && (
                        <div className="admin-card p-0 overflow-hidden">
                            <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: '#E2E8F0' }}>
                                <div>
                                    <h4 className="admin-heading fs-5 mb-0">Support Inbox</h4>
                                    <p className="admin-text-muted small mt-1 mb-0">Manage inquiries, complaints, and suggestions from your students.</p>
                                </div>
                                <button className="btn admin-btn-primary btn-sm rounded-3 px-3 d-flex align-items-center" onClick={loadMessages} disabled={loadingMessages}>
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
                    )}

                    {/* ========== TAB: ACTIVITY AND AUDIT ========== */}
                    {activeTab === 'activity' && (
                        <div className="admin-card p-0 overflow-hidden">
                            <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: '#E2E8F0' }}>
                                <div>
                                    <h4 className="admin-heading fs-5 mb-0">System Activity Log</h4>
                                    <p className="admin-text-muted small mt-1 mb-0">Tracking sensitive admin actions. View only.</p>
                                </div>
                                <button className="btn admin-btn-primary btn-sm rounded-3 px-3 d-flex align-items-center" onClick={loadLogs} disabled={loadingLogs}>
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
                                                <th>Time</th>
                                                <th>Admin</th>
                                                <th>Action</th>
                                                <th>Target Info</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {logs.map(log => (
                                                <tr key={log.id}>
                                                    <td className="text-muted small" style={{ whiteSpace: 'nowrap' }}>
                                                        {new Date(log.created_at).toLocaleString()}
                                                    </td>
                                                    <td className="fw-bold text-primary">@{log.admin_name || 'System'}</td>
                                                    <td>
                                                        <span className={`badge ${log.action.includes('DELETE') || log.action.includes('REVOKE') ? 'bg-danger' :
                                                            log.action.includes('CREATE') || log.action.includes('GRANT') ? 'bg-success' : 'bg-info'}`}>
                                                            {log.action}
                                                        </span>
                                                    </td>
                                                    <td className="small">
                                                        <span className="text-muted text-uppercase me-2">{log.target_type}</span>
                                                        ID: #{log.target_id}
                                                    </td>
                                                    <td className="small text-muted" style={{ maxWidth: '250px' }}>
                                                        {log.details ? (
                                                            <div className="text-truncate" title={log.details}>{log.details}</div>
                                                        ) : '-'}
                                                    </td>
                                                </tr>
                                            ))}
                                            {logs.length === 0 && (
                                                <tr>
                                                    <td colSpan="5" className="text-center py-5 text-muted">
                                                        <i className="bi bi-inbox fs-2 d-block mb-2"></i>
                                                        No recent activity recorded.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ========== TAB: TOPICS ========== */}
                    {activeTab === 'topics' && (
                        <div className="admin-card p-0 overflow-hidden">
                            <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: '#E2E8F0' }}>
                                <div>
                                    <h4 className="admin-heading fs-5 mb-0">Topic Management</h4>
                                </div>
                                <div className="d-flex gap-2">
                                    <select
                                        className="form-select form-select-sm border-0"
                                        style={{ width: '100px', backgroundColor: '#F1F5F9', color: '#0F172A', fontWeight: 'bold' }}
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                    >
                                        <option value="A1">Level A1</option>
                                        <option value="A2">Level A2</option>
                                        <option value="B1">Level B1</option>
                                        <option value="B2">Level B2</option>
                                        <option value="C1">Level C1</option>
                                        <option value="C2">Level C2</option>
                                    </select>
                                    <button className="btn admin-btn-primary btn-sm rounded-3 d-flex align-items-center" onClick={() => handleOpenTopicModal()}>
                                        <i className="bi bi-plus-lg me-1"></i> New
                                    </button>
                                </div>
                            </div>
                            {/* Buscador de temas */}
                            <div className="p-3 border-bottom" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0', backgroundColor: isDarkMode ? '#1E293B' : '#F8FAFC' }}>
                                <div className="input-group input-group-sm" style={{ width: '300px' }}>
                                    <span className="input-group-text bg-transparent border-end-0" style={{ border: `1px solid ${isDarkMode ? '#334155' : '#E2E8F0'}` }}>
                                        <i className="bi bi-search admin-text-muted"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0 ps-0"
                                        placeholder="Search by title..."
                                        style={{ border: `1px solid ${isDarkMode ? '#334155' : '#E2E8F0'}`, background: 'transparent' }}
                                        value={topicSearchTerm}
                                        onChange={(e) => setTopicSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {loadingTopics ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status"></div>
                                </div>
                            ) : (
                                <div className="table-responsive p-0">
                                    <table className="admin-table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Level</th>
                                                <th className="text-end">Actions</th>
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
                    )}

                    {/* ========== TAB: ARCADE ========== */}
                    {activeTab === 'arcade' && (
                        <div className="admin-card p-0 overflow-hidden">
                            <div className="border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0' }}>
                                <div>
                                    <h4 className="admin-heading fs-5 mb-0">Arcade Content Management</h4>
                                    <p className="admin-text-muted small mb-0">Control visibility and premium content for the Arcade.</p>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn admin-btn-primary btn-sm rounded-3 d-flex align-items-center" onClick={() => setActiveTab('topics')}>
                                        <i className="bi bi-plus-lg me-1"></i> Add Topic
                                    </button>
                                </div>
                            </div>

                            <div className="p-3 border-bottom d-flex align-items-center justify-content-between" style={{ borderColor: isDarkMode ? '#334155' : '#E2E8F0', backgroundColor: isDarkMode ? '#1E293B' : '#F8FAFC' }}>
                                <div className="input-group input-group-sm" style={{ width: '300px' }}>
                                    <span className="input-group-text bg-transparent border-end-0" style={{ border: `1px solid ${isDarkMode ? '#334155' : '#E2E8F0'}` }}>
                                        <i className="bi bi-search admin-text-muted"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0 ps-0 text-dark"
                                        placeholder="Filter arcade items..."
                                        style={{ border: `1px solid ${isDarkMode ? '#334155' : '#E2E8F0'}`, background: 'transparent' }}
                                        value={topicSearchTerm}
                                        onChange={(e) => setTopicSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="admin-text-muted small">
                                    Showing <strong>{topics.length}</strong> topics available for Arcade
                                </div>
                            </div>

                            {loadingTopics ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status"></div>
                                </div>
                            ) : (
                                <div className="table-responsive p-0">
                                    <table className="admin-table">
                                        <thead>
                                            <tr>
                                                <th>Level</th>
                                                <th>Topic Title</th>
                                                <th>Free Practice</th>
                                                <th>Premium Games</th>
                                                <th className="text-center">Arcade Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {topics.filter(t =>
                                                t.title.toLowerCase().includes(topicSearchTerm.toLowerCase())
                                            ).map(t => (
                                                <tr key={t.id}>
                                                    <td><span className="badge bg-secondary">{t.level}</span></td>
                                                    <td className="fw-bold">{t.title}</td>
                                                    <td>
                                                        {t.practice && t.practice.length > 10 ? (
                                                            <span className="text-success"><i className="bi bi-check-circle-fill me-1"></i> Configured</span>
                                                        ) : (
                                                            <span className="text-muted"><i className="bi bi-dash-circle me-1"></i> Empty</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {t.premium_practice && t.premium_practice.length > 10 ? (
                                                            <span className="badge bg-warning text-dark"><i className="bi bi-star-fill me-1"></i> Premium Enabled</span>
                                                        ) : (
                                                            <span className="text-muted"><i className="bi bi-plus-circle me-1"></i> Not set</span>
                                                        )}
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-switch d-inline-block">
                                                            <input
                                                                className="form-check-input cur-pointer"
                                                                type="checkbox"
                                                                checked={t.arcade_enabled !== false}
                                                                onChange={() => handleToggleArcadeField(t.id, t.arcade_enabled !== false)}
                                                            />
                                                            <label className={`form-check-label small ms-1 ${t.arcade_enabled !== false ? 'text-success fw-bold' : 'text-danger'}`}>
                                                                {t.arcade_enabled !== false ? 'Active' : 'Hidden'}
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <button className="btn btn-sm btn-outline-primary rounded-pill px-3" onClick={() => openEditTopic(t.id)}>
                                                            <i className="bi bi-pencil-square me-1"></i> Manage Games
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {topics.length === 0 && (
                                                <tr>
                                                    <td colSpan="6" className="text-center py-5 text-muted">No topics found for the arcade.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* PROGRESS MODAL */}
                    {selectedStudent && (
                        <div className="modal-backdrop fade show" style={{ opacity: 0.5 }}></div>
                    )}
                    {selectedStudent && (
                        <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={(e) => { if (e.target === e.currentTarget) closeProgressModal() }}>
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1rem', background: 'var(--admin-card-bg)' }}>
                                    <div className="modal-header border-bottom-0 pb-0">
                                        <h5 className="modal-title fw-bold" style={{ color: 'var(--admin-text-primary)' }}>
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
                                                <div className="d-flex align-items-center justify-content-between mb-4 p-3 rounded" style={{ backgroundColor: isDarkMode ? '#334155' : '#F1F5F9' }}>
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
                        <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={(e) => { if (e.target === e.currentTarget) setIsTopicModalOpen(false) }}>
                            <div className="modal-dialog modal-xl modal-dialog-scrollable" role="document" style={{ maxHeight: '95vh' }}>
                                <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1rem', background: 'var(--admin-card-bg)', height: '100%' }}>
                                    <div className="modal-header border-bottom-0">
                                        <h5 className="modal-title fw-bold" style={{ color: 'var(--admin-text-primary)' }}>
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
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <div className="d-flex gap-3">
                                                            <button type="button" className={`btn btn-sm rounded-pill px-4 fw-bold ${!isPremiumPracticeMode ? 'btn-success' : 'btn-outline-success'}`} onClick={() => togglePracticeMode(false)}>
                                                                <i className="bi bi-unlock me-2"></i>Free Practice
                                                            </button>
                                                            <button type="button" className={`btn btn-sm rounded-pill px-4 fw-bold ${isPremiumPracticeMode ? 'btn-warning text-dark' : 'btn-outline-warning'}`} onClick={() => togglePracticeMode(true)}>
                                                                <i className="bi bi-star-fill me-2"></i>Premium Arcade
                                                            </button>
                                                        </div>
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" id="practiceMode" checked={useStructuredPractice} onChange={(e) => setUseStructuredPractice(e.target.checked)} />
                                                            <label className="form-check-label small fw-bold" htmlFor="practiceMode">Use Structured Builder</label>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p className="admin-text-muted x-small mb-0">
                                                            {isPremiumPracticeMode
                                                                ? "Configuring minigames for the Premium Arcade section."
                                                                : "Configuring the standard practice available for all students."}
                                                        </p>
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

                {/* ===== MEMBERSHIP MANAGEMENT MODAL ===== */}
                {(() => {
                    if (!membershipModal.open || !membershipModal.targetUserId) return null;
                    const modalUser = users.find(u => u.id === membershipModal.targetUserId);
                    if (!modalUser) return null;

                    return (
                        <div
                            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            onClick={(e) => { if (e.target === e.currentTarget) closeMembershipModal(); }}
                        >
                            <div style={{ maxWidth: '480px', width: '90%' }}>
                                <div className="shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden', border: 'none', background: isDarkMode ? '#1E293B' : '#fff' }}>

                                    {/* Header */}
                                    <div style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="bi bi-award-fill text-white fs-4"></i>
                                            <div>
                                                <div className="fw-bold text-white" style={{ fontSize: '1.1rem' }}>Gestionar Membresía</div>
                                                <small className="text-white opacity-75">@{modalUser.username}</small>
                                            </div>
                                        </div>
                                        <button className="btn-close btn-close-white" onClick={closeMembershipModal}></button>
                                    </div>

                                    {/* Body */}
                                    <div className="p-4">
                                        {/* Status Card */}
                                        <div className="rounded-3 p-3 mb-4" style={{ background: isDarkMode ? '#0F172A' : '#F8FAFC', border: '1px solid ' + (isDarkMode ? '#334155' : '#E2E8F0') }}>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="small fw-semibold" style={{ color: isDarkMode ? '#94A3B8' : '#64748B' }}>Estado actual</span>
                                                {modalUser.is_premium
                                                    ? <span className="badge" style={{ backgroundColor: '#F59E0B' }}>🏅 Pro Activo</span>
                                                    : <span className="badge bg-secondary">Free</span>}
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="small fw-semibold" style={{ color: isDarkMode ? '#94A3B8' : '#64748B' }}>Vence el</span>
                                                <span className={'fw-bold small ' + (modalUser.premium_until ? (new Date(modalUser.premium_until).getTime() > Date.now() ? 'text-success' : 'text-danger') : 'text-muted')}>
                                                    {(() => {
                                                        if (!modalUser.premium_until) return '— Sin fecha asignada';
                                                        const d = new Date(modalUser.premium_until);
                                                        return isNaN(d.getTime()) ? 'Fecha inválida' : d.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
                                                    })()}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Quick Buttons */}
                                        <p className="small fw-semibold mb-2" style={{ color: isDarkMode ? '#94A3B8' : '#64748B' }}>Accesos rápidos</p>
                                        <div className="d-flex gap-2 mb-3">
                                            {[7, 30, 90].map(d => (
                                                <button
                                                    key={d}
                                                    className="btn btn-sm flex-fill"
                                                    style={{ background: Number(membershipModal.daysInput) === d ? '#F59E0B' : (isDarkMode ? '#334155' : '#F1F5F9'), color: Number(membershipModal.daysInput) === d ? '#fff' : (isDarkMode ? '#E2E8F0' : '#0F172A'), border: 'none', fontWeight: 'bold', borderRadius: '8px' }}
                                                    onClick={() => setMembershipModal(prev => ({ ...prev, daysInput: d, error: null, success: null }))}
                                                >
                                                    +{d} días
                                                </button>
                                            ))}
                                        </div>

                                        {/* Custom Input */}
                                        <p className="small fw-semibold mb-2" style={{ color: isDarkMode ? '#94A3B8' : '#64748B' }}>O ingresa un número personalizado</p>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" style={{ background: isDarkMode ? '#334155' : '#F1F5F9', borderColor: isDarkMode ? '#475569' : '#CBD5E1', color: isDarkMode ? '#E2E8F0' : '#0F172A' }}>
                                                <i className="bi bi-calendar-plus"></i>
                                            </span>
                                            <input
                                                type="number" min="1" max="1095"
                                                className="form-control"
                                                style={{ background: isDarkMode ? '#0F172A' : '#fff', color: isDarkMode ? '#E2E8F0' : '#0F172A', borderColor: isDarkMode ? '#475569' : '#CBD5E1' }}
                                                value={membershipModal.daysInput}
                                                onChange={e => setMembershipModal(prev => ({ ...prev, daysInput: e.target.value, error: null, success: null }))}
                                                placeholder="Días a añadir..."
                                            />
                                            <span className="input-group-text" style={{ background: isDarkMode ? '#334155' : '#F1F5F9', borderColor: isDarkMode ? '#475569' : '#CBD5E1', color: isDarkMode ? '#94A3B8' : '#64748B', fontSize: '0.8rem' }}>días</span>
                                        </div>

                                        {membershipModal.error && (
                                            <div className="alert alert-danger py-2 px-3 small rounded-3 border-0 shadow-sm mb-3">
                                                <i className="bi bi-exclamation-triangle-fill me-2"></i>{membershipModal.error}
                                            </div>
                                        )}
                                        {membershipModal.success && (
                                            <div className="alert alert-success py-2 px-3 small rounded-3 border-0 shadow-sm mb-3 animate__animated animate__fadeIn">
                                                <i className="bi bi-check-circle-fill me-2"></i>{membershipModal.success}
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="d-flex justify-content-between align-items-center px-4 pb-4 mt-2">
                                        <div className="d-flex gap-3">
                                            <button 
                                                className="btn btn-sm btn-outline-secondary rounded-pill px-3" 
                                                onClick={closeMembershipModal}
                                                style={{ transition: 'all 0.2s' }}
                                            >
                                                Cerrar
                                            </button>
                                            {modalUser.is_premium && (
                                                <button 
                                                    className="btn btn-sm btn-outline-danger rounded-pill px-3 d-flex align-items-center justify-content-center" 
                                                    onClick={(e) => { e.stopPropagation(); handleRevokeFromModal(); }} 
                                                    disabled={membershipModal.loading}
                                                    style={{ transition: 'all 0.2s', minWidth: '100px', height: '36px' }}
                                                >
                                                    <i className="bi bi-x-circle me-1"></i>
                                                    <span className="fw-semibold">Revocar</span>
                                                </button>
                                            )}
                                        </div>
                                        <button
                                            className="btn btn-sm rounded-pill px-4 fw-bold text-white"
                                            style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', border: 'none' }}
                                            disabled={membershipModal.loading}
                                            onClick={handleApplyExtension}
                                        >
                                            {membershipModal.loading
                                                ? <><span className="spinner-border spinner-border-sm me-2"></span>Aplicando...</>
                                                : <><i className="bi bi-plus-circle-fill me-2"></i>Aplicar +{membershipModal.daysInput} días</>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </main>
        </div>
    );
};

export default AdminPanel;
