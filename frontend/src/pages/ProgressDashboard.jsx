import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import './ProgressDashboard.css';

const ProgressDashboard = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const { progressData, loadingProgress, fetchProgress } = useProgress();

    useEffect(() => {
        if (loading) return; // wait for /auth/me to finish
        if (!user) {
            navigate('/login');
        } else {
            fetchProgress();
        }
    }, [user, loading, navigate, fetchProgress]);

    if (loading) return <div className="text-center p-5 fw-bold fs-4">Cargando...</div>;

    if (loadingProgress) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando progreso...</span>
                </div>
            </div>
        );
    }

    const { stats, total_topics } = progressData;

    // Recalculate global progress from stats
    let globalCompleted = 0;
    let globalTotal = 0;
    
    Object.values(stats || {}).forEach(lvlData => {
        globalCompleted += (lvlData.completed || 0);
        globalTotal += (lvlData.total || 0);
    });

    const finalTotal = Math.max(total_topics || 0, globalTotal);
    const mockedOverallPercentage = finalTotal > 0 ? Math.round((globalCompleted / finalTotal) * 100) : 0;

    // Calculate dynamic level achievements (e.g., A1 Master)
    const earnedAchievements = Object.entries(stats || {})
        .filter(([, data]) => data.total > 0 && data.completed === data.total)
        .map(([level]) => `master_${level.toUpperCase()}`);

    // Read general gamification achievements from localStorage
    const storedAchievements = user 
        ? JSON.parse(localStorage.getItem(`levelup_achievements_${user.id}`) || '[]')
        : [];
    
    // Combine both sources
    const allEarned = new Set([...earnedAchievements, ...storedAchievements]);

    // All available achievements configuration
    const ACHIEVEMENTS_LIST = [
        { id: 'first_step', name: 'Primer Paso', icon: 'bi-rocket-takeoff-fill', color: '#1CB0F6', desc: 'Completaste tu primer ejercicio.' },
        { id: 'streak_3', name: 'En Racha', icon: 'bi-fire', color: '#FF9800', desc: 'Completaste 3 ejercicios seguidos.' },
        { id: 'streak_10', name: 'Imparable', icon: 'bi-lightning-charge-fill', color: '#CE82FF', desc: 'Completaste 10 ejercicios.' },
        { id: 'master_A1', name: 'A1 Master', icon: 'bi-star-fill', color: '#58CC02', desc: 'Dominaste el nivel A1 completo.' },
        { id: 'master_A2', name: 'A2 Master', icon: 'bi-award-fill', color: '#1CB0F6', desc: 'Dominaste el nivel A2 completo.' },
        { id: 'master_B1', name: 'B1 Master', icon: 'bi-trophy-fill', color: '#CE82FF', desc: 'Dominaste el nivel B1 completo.' }
    ];

    // Configuración visual de los niveles estilo mockup
    const levelConfig = {
        A1: { color: '#4caf50', title: 'A1', subtitle: 'BEGINNER', desc: 'Básicos: Vocabulario, Frases' },
        A2: { color: '#2196f3', title: 'A2', subtitle: 'ELEMENTARY', desc: 'Vida Diaria: Gramática, Conversación' },
        B1: { color: '#9c27b0', title: 'B1', subtitle: 'INTERMEDIATE', desc: 'Temas B1: Trabajo, Viajes' },
        B2: { color: '#ff9800', title: 'B2', subtitle: 'UPPER INTER', desc: 'Temas B2: Opiniones, Cultura' },
        C1: { color: '#f44336', title: 'C1', subtitle: 'ADVANCED', desc: 'Avanzado: Expresiones fluidas' }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>

            <div className="dashboard-layout">
                {/* LADO IZQUIERDO: Tarjetas de Niveles */}
                <div className="level-cards-grid">
                    {Object.entries(stats || {}).map(([level, data]) => {
                        const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
                        const config = levelConfig[level] || levelConfig.A1;
                        
                        // Lógica del botón según estado
                        let btnClass = 'btn-locked';
                        let btnText = 'LOCKED';
                        if (pct > 0 && pct < 100) {
                            btnClass = 'btn-orange';
                            btnText = 'CONTINUE';
                        } else if (pct === 100) {
                            btnClass = 'btn-green';
                            btnText = 'PRACTICE';
                        } else if (pct === 0) {
                            btnClass = 'btn-green';
                            btnText = 'START';
                        }

                        return (
                            <div className="mockup-level-card animate__animated animate__fadeInUp" key={level}>
                                <div className="mockup-card-top" style={{ backgroundColor: config.color }}>
                                    <h2 className="mockup-card-title">{config.title}</h2>
                                    <span className="mockup-card-subtitle">{config.subtitle}</span>
                                </div>
                                
                                <div className="mockup-circular-progress">
                                    <svg viewBox="0 0 100 100" className="mockup-circular-svg">
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--color-fondo)" strokeWidth="10" />
                                        <circle 
                                            cx="50" cy="50" r="40" 
                                            fill="transparent" 
                                            stroke={config.color} 
                                            strokeWidth="10"
                                            strokeDasharray="251.2"
                                            strokeDashoffset={251.2 - (251.2 * pct) / 100}
                                            strokeLinecap="round"
                                            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1s ease' }}
                                        />
                                    </svg>
                                    <div className="mockup-circular-value" style={{ color: config.color }}>
                                        {pct}%
                                    </div>
                                </div>

                                <div className="mockup-card-body">
                                    <p className="mockup-lessons-count">{data.completed}/{data.total} Lessons</p>
                                    <p className="mockup-desc">{config.title} {config.desc}</p>
                                    
                                    {pct === 100 && (
                                        <div className="alert mt-auto mb-3 text-center fw-bold" style={{ backgroundColor: '#fff3cd', color: '#856404', border: '2px solid #ffeeba', borderRadius: '12px' }}>
                                            🎉 ¡Felicidades! Has dominado todo este Level.
                                        </div>
                                    )}

                                    <Link to={`/niveles/${level.toLowerCase()}`} className={`mockup-btn ${btnClass} ${pct !== 100 ? 'mt-auto' : ''}`}>
                                        {btnText}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* LADO DERECHO: Sidebar Widgets */}
                <div className="sidebar-column">
                    <div className="sidebar-widget">
                        <h4>Progreso Global</h4>
                        <div className="d-flex align-items-center gap-3">
                            <div className="fs-1">🔥</div>
                            <div>
                                <div className="fw-bold fs-5">{mockedOverallPercentage}% Completado</div>
                                <div className="text-muted fw-bold">{globalCompleted} de {finalTotal} módulos</div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-widget p-4 rounded-4" style={{ backgroundColor: 'var(--color-fondo-secundario)', border: '1px solid var(--color-borde)' }}>
                        <h4 className="fw-bold mb-4" style={{ fontSize: '1.25rem' }}>Mis Insignias</h4>
                        <div className="achievements-grid">
                            {ACHIEVEMENTS_LIST.map(ach => {
                                const isUnlocked = allEarned.has(ach.id);
                                return (
                                    <div 
                                        key={ach.id} 
                                        className="achievement-card text-center" 
                                        title={ach.desc}
                                        style={{ opacity: isUnlocked ? 1 : 0.4, transition: 'all 0.3s ease' }}
                                    >
                                        <div 
                                            className="achievement-badge shadow-sm mb-2 mx-auto d-flex align-items-center justify-content-center"
                                            style={{ 
                                                width: '60px', 
                                                height: '60px', 
                                                borderRadius: '50%',
                                                backgroundColor: isUnlocked ? ach.color : '#333',
                                                color: isUnlocked ? '#fff' : '#666',
                                                fontSize: '1.8rem'
                                            }}
                                        >
                                            <i className={`bi ${isUnlocked ? ach.icon : 'bi-lock-fill'}`}></i>
                                        </div>
                                        <div className="achievement-name fw-bold" style={{ fontSize: '0.85rem' }}>
                                            {ach.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressDashboard;
