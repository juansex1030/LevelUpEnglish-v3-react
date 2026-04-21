import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

const ProgressDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { progressData, loadingProgress, fetchProgress } = useProgress();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            fetchProgress();
        }
    }, [user, navigate, fetchProgress]);

    if (!user) return null;

    if (loadingProgress) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const { overall_percentage, stats, completed_topics, total_topics } = progressData;

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="main-title">Your Progress</h1>
                <p className="lead text-muted">Track your progress and unlocked achievements in LevelUpEnglish</p>
            </div>

            {/* ✨ LOGROS / ACHIEVEMENTS SECTION ✨ */}
            {progressData.achievements && progressData.achievements.length > 0 && (
                <div className="row mb-5 animate__animated animate__fadeInUp">
                    <div className="col-12">
                        <div className="card shadow border-0" style={{ background: 'linear-gradient(135deg, #1e2030 0%, #2e3150 100%)', borderRadius: '1rem', overflow: 'hidden' }}>
                            <div className="card-header bg-transparent border-bottom-0 pt-4 pb-0 text-center">
                                <h3 className="fw-bold m-0" style={{ color: '#FFD700', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                    <i className="bi bi-stars me-2"></i> Logros Desbloqueados <i className="bi bi-stars ms-2"></i>
                                </h3>
                                <p className="text-muted mt-2 small">Medallas obtenidas por dominar al nivel</p>
                            </div>
                            <div className="card-body p-4 d-flex justify-content-center flex-wrap gap-4">
                                {progressData.achievements.map((lvl) => (
                                    <div key={lvl} className="text-center animate__animated animate__zoomIn" style={{ minWidth: '120px' }}>
                                        <div 
                                            className="badge-icon shadow-lg rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{ 
                                                width: '100px', height: '100px',
                                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                border: '4px solid #fff',
                                                boxShadow: '0 8px 15px rgba(255, 215, 0, 0.4)'
                                            }}
                                        >
                                            <span className="fs-1 fw-bold text-white text-shadow-sm">{lvl}</span>
                                        </div>
                                        <h5 className="fw-bold text-white mb-0">Maestro {lvl}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="row g-4 mb-5">
                {/* Overall Progress Card */}
                <div className="col-lg-12 animate__animated animate__fadeIn">
                    <div className="card shadow-sm border-0" style={{ background: 'var(--color-fondo-secundario)', borderRadius: '1rem' }}>
                        <div className="card-body p-4 text-center">
                            <h3 style={{ color: 'var(--color-texto-principal)' }}>Overall Progress</h3>
                            <div className="display-4 fw-bold mb-3" style={{ color: 'var(--acento-primario)' }}>
                                {overall_percentage}%
                            </div>
                            <div className="progress mx-auto mb-3" style={{ height: '20px', maxWidth: '600px', backgroundColor: 'var(--color-borde)' }}>
                                <div 
                                    className="progress-bar progress-bar-striped progress-bar-animated" 
                                    role="progressbar" 
                                    style={{ width: `${overall_percentage}%`, backgroundColor: 'var(--acento-primario)' }} 
                                    aria-valuenow={overall_percentage} 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <p className="text-muted fw-bold mb-0">
                                {completed_topics} of {total_topics} topics completed in total
                            </p>
                        </div>
                    </div>
                </div>

                {/* Individual Level Cards */}
                {Object.entries(stats).map(([level, data], i) => {
                    const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
                    
                    const levelColors = {
                        A1: '#F59E0B',
                        A2: '#00ADB5',
                        B1: '#00ADB5',
                        B2: '#3B82F6',
                        C1: '#10B981',
                    };

                    const color = levelColors[level] || 'var(--acento-primario)';

                    return (
                        <div className="col-md-6 col-lg-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${i * 0.1}s` }} key={level}>
                            <div className="card shadow-sm border-0 h-100" style={{ background: 'var(--color-fondo-secundario)', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
                                {/* Golden Overlay when 100% completed */}
                                {pct === 100 && (
                                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px 15px', background: 'linear-gradient(45deg, #FFD700, #FFA500)', borderBottomLeftRadius: '1rem', color: '#fff', fontWeight: 'bold' }}>
                                        <i className="bi bi-trophy-fill me-1"></i> Completado
                                    </div>
                                )}
                                
                                <div className="card-body p-4">
                                    <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-between" style={{ color: 'var(--color-texto-principal)' }}>
                                        Level {level}
                                        {pct < 100 && <span className="badge" style={{ backgroundColor: color }}>{pct}%</span>}
                                    </h4>
                                    
                                    <div className="progress mb-3" style={{ height: '10px', backgroundColor: 'var(--color-borde)' }}>
                                        <div 
                                            className="progress-bar" 
                                            style={{ width: `${pct}%`, backgroundColor: pct === 100 ? '#FFD700' : color }}
                                        ></div>
                                    </div>
                                    
                                    <p className="text-muted mb-4">
                                        {data.completed} / {data.total} Topics
                                    </p>

                                    <Link to={`/niveles/${level.toLowerCase()}`} className="btn w-100 fw-bold shadow-sm" style={{ backgroundColor: pct === 100 ? '#2e3150' : color, border: pct === 100 ? '2px solid #FFD700' : 'none', color: pct === 100 ? '#FFD700' : '#fff' }}>
                                        {pct === 100 ? <><i className="bi bi-star-fill me-2"></i>Repasar Logro</> : 'Continue Learning'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="text-center mt-5">
                <Link to="/learn" className="btn btn-outline-primary btn-lg rounded-pill px-5 shadow-sm fw-bold">
                    <i className="bi bi-compass-fill me-2"></i> Ir a Niveles
                </Link>
            </div>
        </div>
    );
};

export default ProgressDashboard;
