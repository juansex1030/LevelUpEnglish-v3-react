import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import PracticeEngine from '../components/PracticeEngine';
import AdBanner from '../components/AdBanner';
import AlphabetInteractive from '../components/AlphabetInteractive';
import API_URL from '../api/config';
import './LevelGrid.css'; // Let's reuse LevelGrid CSS for sidebar and colors for now

const TopicViewer = () => {
    const { nivel, topicId } = useParams();
    const { user } = useAuth();
    const { progressData, fetchProgress, markComplete } = useProgress();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('theory');
    const [topic, setTopic] = useState(null);
    const [allTopics, setAllTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [theoryProgress, setTheoryProgress] = useState(0);
    const [practiceProgress, setPracticeProgress] = useState(0);
    const containerRef = useRef(null);
    const theoryRef = useRef(null);

    // Theory scroll tracking
    useEffect(() => {
        const el = theoryRef.current;
        if (!el || activeTab !== 'theory') return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = el;
            const progress = Math.round(((scrollTop + clientHeight) / scrollHeight) * 100);
            setTheoryProgress(prev => Math.max(prev, progress));
        };

        el.addEventListener('scroll', handleScroll);
        // Initial check if content is small
        handleScroll();
        
        return () => el.removeEventListener('scroll', handleScroll);
    }, [activeTab, topic]);

    const completedTopicsIds = progressData?.completed_topics_by_level?.[nivel?.toUpperCase()] || [];
    const topicStatus = completedTopicsIds.includes(parseInt(topicId)) ? 'completed' : 'not_started';

    // Auto-completion logic
    useEffect(() => {
        if (topicStatus === 'not_started' && theoryProgress >= 80 && practiceProgress >= 80) {
            handleMarkComplete(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theoryProgress, practiceProgress, topicStatus]);

    // Effect to execute scripts for LEGACY practice games
    useEffect(() => {
        if (activeTab !== 'practice' || !topic || !topic.practice) return;

        try {
            JSON.parse(topic.practice);
            return; 
        } catch {
            // Not JSON, fall back to executing it as a script loop
        }

        if (containerRef.current) {
            Array.from(containerRef.current.getElementsByTagName('script')).forEach(oldScript => {
                if (oldScript.src) return;
                const newScript = document.createElement('script');
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                document.body.appendChild(newScript);
                setTimeout(() => newScript.remove(), 100);
            });
        }

        axios.get(`${API_URL}/topics/${nivel}/script`)
            .then(res => {
                if (!res.data.script) return;
                const scriptEl = document.createElement('script');
                const scriptContent = res.data.script.replace(/const\s/g, 'var ').replace(/let\s/g, 'var ');
                scriptEl.innerHTML = `try { ${scriptContent} } catch(e) { console.log('Practice JS note:', e.message); }`;
                document.body.appendChild(scriptEl);
                setTimeout(() => scriptEl.remove(), 500);
            }).catch(err => console.error('Error fetching practice JS:', err));

    }, [topic, activeTab, nivel]);

    useEffect(() => {
        let isMounted = true;
        const fetchTopicsAndContent = async () => {
            try {
                setLoading(true);
                const topicsRes = await axios.get(`${API_URL}/topics/${nivel}`);
                const topicRes = await axios.get(`${API_URL}/topics/${nivel}/${topicId}`);
                
                if (isMounted) {
                    setAllTopics(topicsRes.data.topics);
                    setTopic(topicRes.data.topic);
                    // Reset tracking when topic changes
                    setTheoryProgress(0);
                    setPracticeProgress(0);
                }
            } catch (error) {
                console.error("Error fetching topic data:", error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchTopicsAndContent();
        if (user) fetchProgress();
        return () => { isMounted = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nivel, topicId, user]);

    const handleMarkComplete = async (forceState = null) => {
        if (!user) {
            navigate('/login');
            return;
        }
        const newStatus = forceState !== null ? forceState : (topicStatus !== 'completed');
        await markComplete(nivel.toUpperCase(), topic.number, topic.title, newStatus);
    };

    if (loading || !topic) return <div className="p-5 text-center">Loading topic...</div>;

    const totalCount = allTopics.length;
    const completedCount = allTopics.filter(t => completedTopicsIds.includes(t.number)).length;
    const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const renderPractice = () => {
        if (!topic.practice) return <p className="text-muted">No practice exercises available for this topic yet.</p>;

        try {
            const practiceData = JSON.parse(topic.practice);
            return <PracticeEngine data={practiceData} onScoreUpdate={setPracticeProgress} />;
        } catch {
            return (
                <div 
                    className="practice-wrapper" 
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(topic.practice) }} 
                />
            );
        }
    };

    return (
        <div className="topic-page-container">
            {/* LEFT SIDEBAR (Level Topics) */}
            <aside className="topics-sidebar">
                <div className="sidebar-header">
                    <h3>{nivel.toUpperCase()} Topics</h3>
                    {user && (
                        <>
                            <div className="sidebar-progress-bar">
                                <div className="sidebar-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                            </div>
                            <p className="progress-text">{completedCount}/{totalCount} completed</p>
                        </>
                    )}
                </div>

                <nav className="topics-list">
                    {allTopics.map(t => {
                        const isCompleted = completedTopicsIds.includes(t.number);
                        return (
                            <Link 
                                key={t.number} 
                                to={`/niveles/${nivel}/topic/${t.number}`} 
                                className={`topic-item ${t.number === parseInt(topicId) ? 'active' : ''}`}
                            >
                                <span className="topic-num">{t.number}</span>
                                <span className="topic-name">{t.title}</span>
                                {isCompleted && <span className="topic-status-icon">✓</span>}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="topic-content" style={{ flexGrow: 1, padding: '2rem' }}>
                <div className="topic-header">
                    <span className="topic-badge">Topic {topic.number}/{totalCount}</span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>{topic.title}</h1>
                    <p className="text-muted small">{topic.title_es}</p>

                    <div className="d-flex align-items-center gap-3 mt-3">
                        <button 
                            className={`btn ${topicStatus === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={() => handleMarkComplete()}
                        >
                            <i className={`bi ${topicStatus === 'completed' ? 'bi-check-circle-fill' : 'bi-circle'} me-2`}></i>
                            {topicStatus === 'completed' ? 'Completed' : 'Mark as Complete'}
                        </button>
                        
                        {topicStatus !== 'completed' && (
                            <div className="d-flex gap-3 small text-muted">
                                <span>Theory: {theoryProgress}%</span>
                                <span>Practice: {practiceProgress}%</span>
                            </div>
                        )}
                    </div>
                </div>

                <section className="topic-main-content mt-4">
                    <ul className="nav nav-pills custom-tabs mb-4">
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'theory' ? 'active' : ''}`}
                                onClick={() => setActiveTab('theory')}
                            >
                                <i className="bi bi-book me-2"></i> Theory
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'practice' ? 'active' : ''}`}
                                onClick={() => setActiveTab('practice')}
                            >
                                <i className="bi bi-controller me-2"></i> Practice
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content custom-tab-content" ref={containerRef} style={{ background: 'var(--color-fondo-secundario)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-borde)' }}>
                        {activeTab === 'theory' && parseInt(topicId) === 3 ? (
                            <AlphabetInteractive />
                        ) : activeTab === 'theory' ? (
                            <div 
                                className="theory-wrapper premium-content" 
                                ref={theoryRef}
                                style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: '1rem' }}
                                dangerouslySetInnerHTML={{ 
                                    __html: DOMPurify.sanitize(topic.theory, { 
                                        ALLOWED_ATTR: ['class', 'style', 'id', 'scope', 'colspan', 'rowspan'],
                                        ALLOWED_TAGS: ['div', 'p', 'h4', 'h5', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'ul', 'li', 'button', 'strong', 'em', 'span', 'i', 'br']
                                    }) 
                                }} 
                            />
                        )}
                        {activeTab === 'practice' && renderPractice()}
                    </div>
                </section>

                {/* Ad: Horizontal banner above navigation — alta visibilidad, no interrumpe */}
                <AdBanner type="horizontal" className="mt-4" />

                <div className="topic-navigation d-flex justify-content-between mt-4 pt-4" style={{ borderTop: '1px solid var(--color-borde)' }}>
                    {parseInt(topicId) > 1 ? (
                        <Link to={`/niveles/${nivel}/topic/${parseInt(topicId) - 1}`} className="btn btn-outline-secondary">
                            <i className="bi bi-arrow-left me-2"></i> Previous
                        </Link>
                    ) : <div></div>}

                    <Link to={`/niveles/${nivel}`} className="btn btn-outline-primary">
                        <i className="bi bi-grid-3x3-gap me-2"></i> All Topics
                    </Link>

                    {parseInt(topicId) < totalCount ? (
                        <Link to={`/niveles/${nivel}/topic/${parseInt(topicId) + 1}`} className="btn btn-outline-secondary">
                            Next <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    ) : <div></div>}
                </div>
            </main>
        </div>
    );
};

export default TopicViewer;
