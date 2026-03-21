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
                <p className="lead text-muted">Track your progress in LevelUpEnglish</p>
            </div>

            <div className="row g-4 mb-5">
                {/* Overall Progress Card */}
                <div className="col-lg-12">
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
                {Object.entries(stats).map(([level, data]) => {
                    const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
                    
                    const levelColors = {
                        A1: '#F59E0B',
                        A2: '#4F46E5',
                        B1: '#6366F1',
                        B2: '#3B82F6',
                        C1: '#10B981',
                    };

                    const color = levelColors[level] || 'var(--acento-primario)';

                    return (
                        <div className="col-md-6 col-lg-4" key={level}>
                            <div className="card shadow-sm border-0 h-100" style={{ background: 'var(--color-fondo-secundario)', borderRadius: '1rem' }}>
                                <div className="card-body p-4">
                                    <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-between" style={{ color: 'var(--color-texto-principal)' }}>
                                        Level {level}
                                        <span className="badge" style={{ backgroundColor: color }}>{pct}%</span>
                                    </h4>
                                    
                                    <div className="progress mb-3" style={{ height: '10px', backgroundColor: 'var(--color-borde)' }}>
                                        <div 
                                            className="progress-bar" 
                                            style={{ width: `${pct}%`, backgroundColor: color }}
                                        ></div>
                                    </div>
                                    
                                    <p className="text-muted mb-4">
                                        {data.completed} / {data.total} Topics
                                    </p>

                                    <Link to={`/niveles/${level.toLowerCase()}`} className="btn w-100" style={{ backgroundColor: color, color: '#fff', fontWeight: 'bold' }}>
                                        {pct === 100 ? 'Review' : 'Continue Learning'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="text-center mt-5">
                <Link to="/learn" className="btn btn-outline-primary btn-lg rounded-pill px-5">
                    Go to All Levels
                </Link>
            </div>
        </div>
    );
};

export default ProgressDashboard;
