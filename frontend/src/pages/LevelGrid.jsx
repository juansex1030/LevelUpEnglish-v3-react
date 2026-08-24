import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiClient from '../api/apiClient';
import AdBanner from '../components/AdBanner';
import './LevelGrid.css';

import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

const LevelGrid = () => {
    const { nivel } = useParams();
    const { user } = useAuth();
    const { progressData, fetchProgress } = useProgress();
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get(`/topics/${nivel}`);
                setTopics(response.data.topics);
            } catch (error) {
                console.error("Error fetching topics:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
        
        if (user && fetchProgress) {
            fetchProgress();
        }
    }, [nivel, user, fetchProgress]); 

    const [topicsWithStatus, setTopicsWithStatus] = useState([]);
    
    useEffect(() => {
        if (!topics.length) {
            setTopicsWithStatus([]);
            return;
        }
        
        let completedTopicsIds = progressData?.completed_topics_by_level?.[nivel?.toUpperCase()] || [];

        const merged = topics.map(t => ({
            ...t,
            status: completedTopicsIds.includes(t.number) ? 'completed' : 'not_started'
        }));
        
        setTopicsWithStatus(merged);
    }, [topics, progressData, nivel]);

    const levelColors = {
        'A1': '#58CC02', // Verde
        'A2': '#1CB0F6', // Azul cielo
        'B1': '#CE82FF', // Morado
        'B2': '#FF9800', // Naranja
        'C1': '#FF4B4B', // Rojo
    };

    const levelNames = {
        'A1': 'Principiante',
        'A2': 'Elemental',
        'B1': 'Intermedio',
        'B2': 'Intermedio Alto',
        'C1': 'Avanzado',
    };

    const color = levelColors[nivel?.toUpperCase()] || 'var(--acento-primario)';
    const name = levelNames[nivel?.toUpperCase()] || 'Nivel';

    const completedCount = topicsWithStatus.filter(t => t.status === 'completed').length;
    const totalCount = topicsWithStatus.length;
    const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    if (loading && topics.length === 0) return <div className="text-center p-5 fw-bold fs-4">Cargando Level...</div>;

    return (
        <div className="container py-4 level-grid-page">
            <div className="level-header" style={{ '--glow-color': color }}>
                <span className="level-badge">{nivel?.toUpperCase()} - {name}</span>
                <h1>Level {nivel?.toUpperCase()}</h1>
                <p className="lead">Completa todos los temas para desbloquear tu certificado.</p>
                
                {!user && (
                    <div className="progress-summary mt-3 fw-bold">
                        {totalCount} Módulos disponibles
                    </div>
                )}
            </div>

            {user && (
                <div className="premium-progress-wrapper level-progress-block" style={{ '--level-color': color }}>
                    <div className="progress-info d-flex justify-content-between align-items-end mb-2">
                        <span className="progress-label">Tu Progreso</span>
                        <span className="progress-stats">
                            {completedCount} / {totalCount} ({progressPercentage}%)
                        </span>
                    </div>
                    <div className="premium-progress-track">
                        <div 
                            className="premium-progress-fill"
                            style={{ 
                                width: `${progressPercentage}%`,
                                backgroundColor: color 
                            }}
                        >
                            <div className="progress-glow"></div>
                        </div>
                    </div>
                    {progressPercentage === 100 && (
                        <div className="mt-3 fw-bold fs-5 text-warning">
                            <i className="bi bi-star-fill me-2"></i> 
                            ¡Level Completado! Eres increíble.
                        </div>
                    )}
                </div>
            )}

            <AdBanner type="horizontal" />

            <div className="topics-grid level-topics-block" style={{ '--level-color': color }}>
                {topicsWithStatus.map(topic => {
                    const userId = user ? user.id : 'guest';
                    const isTheoryDone = localStorage.getItem(`levelup_theory_${userId}_${nivel}_${topic.number}_done`) === 'true' || topic.status === 'completed';
                    const isPracticeDone = localStorage.getItem(`levelup_practice_${userId}_${nivel}_${topic.number}_done`) === 'true' || topic.status === 'completed';

                    return (
                        <Link 
                            key={topic.number} 
                            to={`/niveles/${nivel}/topic/${topic.number}`}
                            className={`topic-card ${topic.status === 'completed' ? 'completed' : ''}`}
                        >
                            {topic.status === 'completed' && (
                                <div className="completion-badge">
                                    <i className="bi bi-check-lg"></i>
                                </div>
                            )}
                            <div className="topic-icon">
                                <i className={`bi ${topic.icon || 'bi-star-fill'}`}></i>
                            </div>
                            <div className="topic-info d-flex flex-column gap-2 flex-grow-1">
                                <span className="topic-number">Módulo {topic.number}</span>
                                <h3 className="topic-title">{topic.title}</h3>
                                <p>{topic.description}</p>
                                <div className="topic-mini-progress">
                                    {isTheoryDone && <span className="mini-badge theory">Teoría</span>}
                                    {isPracticeDone && <span className="mini-badge practice">Práctica</span>}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <AdBanner type="square" />
            </div>

            <div className="text-center mt-5">
                <Link to="/learn" className="btn-gamified btn-secondary-3d">
                    <i className="bi bi-arrow-left"></i> Volver al Mapa
                </Link>
            </div>
        </div>
    );
};

export default LevelGrid;
