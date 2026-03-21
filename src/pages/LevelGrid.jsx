import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import API_URL from '../api/config';
import './LevelGrid.css';

const LevelGrid = () => {
    const { nivel } = useParams();
    const { user } = useAuth();
    const { progressData, fetchProgress } = useProgress();
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch raw topics only
    useEffect(() => {
        const fetchTopics = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_URL}/topics/${nivel}`);
                setTopics(response.data.topics);
            } catch (error) {
                console.error("Error fetching topics:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
        
        // Progress is automatically fetched globally by ProgressContext, 
        // but we can ensure it's up to date when entering the grid.
        if (user && fetchProgress) {
            fetchProgress();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nivel, user]); // Removed progressData and fetchProgress to prevent loops

    // Merge status when topics or progressData change
    const [topicsWithStatus, setTopicsWithStatus] = useState([]);
    
    useEffect(() => {
        if (!topics.length) {
            setTopicsWithStatus([]);
            return;
        }
        
        const completedTopicsIds = progressData?.completed_topics_by_level?.[nivel?.toUpperCase()] || [];
        const merged = topics.map(t => ({
            ...t,
            status: completedTopicsIds.includes(t.number) ? 'completed' : 'not_started'
        }));
        
        setTopicsWithStatus(merged);
    }, [topics, progressData, nivel]);

    const levelColors = {
        'A1': '#10B981',
        'A2': '#2DD4BF',
        'B1': '#8B5CF6',
        'B2': '#0EA5E9',
        'C1': '#10B981', // Reused
    };

    const color = levelColors[nivel?.toUpperCase()] || '#10B981';

    const completedCount = topicsWithStatus.filter(t => t.status === 'completed').length;
    const totalCount = topicsWithStatus.length;
    const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    if (loading && topics.length === 0) return <div className="text-center p-5">Loading topics...</div>;

    return (
        <div className="container py-4">
            <div className="level-header" style={{ '--glow-color': color }}>
                <span className="level-badge">Level {nivel?.toUpperCase()}</span>
                <h1>{nivel?.toUpperCase()} Level</h1>
                <p className="lead text-muted">Start your English journey with fundamental topics.</p>
                
                {user ? (
                    <div className="premium-progress-wrapper mt-4">
                        <div className="progress-info d-flex justify-content-between align-items-end mb-2">
                            <span className="progress-label fw-bold">Your Progress</span>
                            <span className="progress-stats badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-texto-principal)' }}>
                                {completedCount} / {totalCount} ({progressPercentage}%)
                            </span>
                        </div>
                        <div className="premium-progress-track">
                            <div 
                                className="premium-progress-fill"
                                style={{ 
                                    width: `${progressPercentage}%`,
                                    background: `linear-gradient(90deg, ${color}, ${color}dd)` 
                                }}
                            >
                                <div className="progress-glow"></div>
                                <div className="progress-stripes"></div>
                            </div>
                        </div>
                        {progressPercentage === 100 && (
                            <div className="completion-celebration mt-3 animate-fade-in">
                                <i className="bi bi-trophy-fill text-warning me-2"></i> 
                                <span className="fw-bold">Level Completed!</span> Excellent work!
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="progress-summary">
                        {completedCount}/{totalCount} Topics
                    </div>
                )}
            </div>

            <div className="topics-grid">
                {topicsWithStatus.map(topic => (
                    <Link 
                        key={topic.number} 
                        to={`/niveles/${nivel}/topic/${topic.number}`}
                        className={`topic-card ${topic.status === 'completed' ? 'completed' : ''}`}
                    >
                        <div className="topic-icon">
                            <i className={`bi ${topic.icon}`}></i>
                        </div>
                        <div className="topic-info">
                            <span className="topic-number">Topic {topic.number}</span>
                            <h3 className="topic-title">{topic.title}</h3>
                            <p>{topic.description}</p>
                        </div>
                        {topic.status === 'completed' && (
                            <div className="completion-badge">
                                <i className="bi bi-check-circle-fill"></i>
                            </div>
                        )}
                    </Link>
                ))}
            </div>

            <div className="text-center mt-5">
                <Link to="/learn" className="btn btn-outline-primary">
                    &larr; Back to All Levels
                </Link>
            </div>
        </div>
    );
};

export default LevelGrid;
