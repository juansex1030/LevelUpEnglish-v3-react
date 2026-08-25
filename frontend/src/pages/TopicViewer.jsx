import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import PracticeEngine from '../components/PracticeEngine';
import AdBanner from '../components/AdBanner';
import AlphabetInteractive from '../components/AlphabetInteractive';
import NumbersInteractive from '../components/NumbersInteractive';
import API_URL from '../api/config';
import './TopicViewer.css';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    let completedTopicsIds = progressData?.completed_topics_by_level?.[nivel?.toUpperCase()] || [];
    
    // MOCK (Admin): Para pruebas, simulamos que A1 está completo para que coincida con el Dashboard
    if (nivel?.toUpperCase() === 'A1' && allTopics.length > 0) {
        completedTopicsIds = allTopics.map(t => t.number);
    }
    const topicStatus = completedTopicsIds.includes(parseInt(topicId)) ? 'completed' : 'not_started';

    // Auto-completion logic
    useEffect(() => {
        if (topicStatus === 'not_started' && theoryProgress >= 80 && practiceProgress >= 80) {
            handleMarkComplete(true, true);
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
                scriptEl.innerHTML = `try { ${scriptContent} } catch(e) { }`;
                document.body.appendChild(scriptEl);
                setTimeout(() => scriptEl.remove(), 500);
            }).catch(() => {});

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

    // Sync progress state with completion status and localStorage
    useEffect(() => {
        const userId = user ? user.id : 'guest';
        if (topicStatus === 'completed') {
            setTheoryProgress(100);
            setPracticeProgress(100);
        } else {
            // Hydrate theory progress
            const savedTheory = localStorage.getItem(`levelup_theory_${userId}_${nivel}_${topicId}_progress`);
            setTheoryProgress(savedTheory ? parseInt(savedTheory, 10) : 0);

            // Hydrate practice progress
            if (topic && topic.practice) {
                try {
                    const practiceData = JSON.parse(topic.practice);
                    const completedKeys = localStorage.getItem(`levelup_practice_${userId}_${nivel}_${topicId}_completed`);
                    if (completedKeys && practiceData.games) {
                        const completedList = JSON.parse(completedKeys);
                        const percent = Math.round((completedList.length / practiceData.games.length) * 100);
                        setPracticeProgress(percent);
                    } else {
                        setPracticeProgress(0);
                    }
                } catch {
                    // It's legacy HTML practice - starts at 0, goes to 100 when activeTab === 'practice'
                    const openedPractice = localStorage.getItem(`levelup_practice_${userId}_${nivel}_${topicId}_opened`);
                    setPracticeProgress(openedPractice ? 100 : 0);
                }
            } else {
                setPracticeProgress(0);
            }
        }
    }, [topicStatus, topicId, topic, nivel, user]);

    // Save theory progress when it updates
    useEffect(() => {
        const userId = user ? user.id : 'guest';
        if (topicStatus !== 'completed' && theoryProgress > 0) {
            localStorage.setItem(`levelup_theory_${userId}_${nivel}_${topicId}_progress`, theoryProgress.toString());
        }
    }, [theoryProgress, topicId, nivel, topicStatus, user]);

    // Auto-complete legacy practice or empty practice
    useEffect(() => {
        const userId = user ? user.id : 'guest';
        if (activeTab === 'practice' && topic && topicStatus !== 'completed') {
            if (!topic.practice) {
                setPracticeProgress(100);
                localStorage.setItem(`levelup_practice_${userId}_${nivel}_${topicId}_opened`, 'true');
                return;
            }
            try {
                JSON.parse(topic.practice);
            } catch {
                // Not JSON, so legacy HTML practice
                setPracticeProgress(100);
                localStorage.setItem(`levelup_practice_${userId}_${nivel}_${topicId}_opened`, 'true');
            }
        }
    }, [activeTab, topic, topicStatus, nivel, topicId, user]);

    // Save done status for theory and practice
    useEffect(() => {
        const userId = user ? user.id : 'guest';
        const theoryDoneKey = `levelup_theory_${userId}_${nivel}_${topicId}_done`;
        if (theoryProgress >= 100) {
            localStorage.setItem(theoryDoneKey, 'true');
        } else {
            localStorage.removeItem(theoryDoneKey);
        }
    }, [theoryProgress, nivel, topicId, user]);

    useEffect(() => {
        const userId = user ? user.id : 'guest';
        const practiceDoneKey = `levelup_practice_${userId}_${nivel}_${topicId}_done`;
        if (practiceProgress >= 100) {
            localStorage.setItem(practiceDoneKey, 'true');
        } else {
            localStorage.removeItem(practiceDoneKey);
        }
    }, [practiceProgress, nivel, topicId, user]);

    const handleMarkComplete = async (forceState = null, isAuto = false) => {
        if (!user) {
            if (!isAuto) {
                navigate('/login');
            }
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
            return (
                <PracticeEngine 
                    data={practiceData} 
                    onScoreUpdate={setPracticeProgress} 
                    isCompleted={topicStatus === 'completed'}
                    storageKey={`levelup_practice_${user ? user.id : 'guest'}_${nivel}_${topicId}_completed`}
                />
            );
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
            <aside className={`topics-sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="mb-0">{nivel.toUpperCase()} Topics</h3>
                        <div className="d-flex align-items-center gap-2 d-md-none">
                            <span className="sidebar-tap-hint">{isMobileMenuOpen ? 'Cerrar' : 'Ver temas'}</span>
                            <i className="bi bi-chevron-down sidebar-chevron" style={{ transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}></i>
                        </div>
                    </div>
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
                    {(() => {
                        const topicsPerUnit = 10;
                        const units = [];
                        for (let i = 0; i < allTopics.length; i += topicsPerUnit) {
                            units.push({
                                unitNum: (i / topicsPerUnit) + 1,
                                topics: allTopics.slice(i, i + topicsPerUnit)
                            });
                        }

                        return units.map(unit => (
                            <div key={`unit-${unit.unitNum}`} className="sidebar-unit-group mb-4">
                                <h6 className="unit-group-title text-muted text-uppercase mb-3 ps-2" style={{ fontSize: '0.75rem', letterSpacing: '1.5px', fontWeight: 800 }}>
                                    <i className="bi bi-collection-fill me-2" style={{ color: 'var(--acento-secundario)' }}></i>
                                    Module {unit.unitNum}
                                </h6>
                                <div className="d-flex flex-column gap-2">
                                    {unit.topics.map(t => {
                                        const isCompleted = completedTopicsIds.includes(t.number);
                                        const userId = user ? user.id : 'guest';
                                        const isPracticeDone = localStorage.getItem(`levelup_practice_${userId}_${nivel}_${t.number}_done`) === 'true' || isCompleted;
                                        return (
                                            <Link 
                                                key={t.number} 
                                                to={`/niveles/${nivel}/topic/${t.number}`} 
                                                className={`topic-item ${t.number === parseInt(topicId) ? 'active' : ''}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <span className="topic-num">{t.number}</span>
                                                <span className="topic-name">
                                                    {t.title}
                                                    {isPracticeDone && !isCompleted && (
                                                        <i className="bi bi-controller text-success ms-2" style={{ fontSize: '0.85rem' }} title="Practice Completed"></i>
                                                    )}
                                                </span>
                                                {isCompleted && <span className="topic-status-icon">✓</span>}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ));
                    })()}
                </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="topic-content" style={{ flexGrow: 1, padding: '2rem' }}>
                <div className="topic-header d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                    <div>
                        <span className="topic-badge">Topic {topic.number}/{totalCount}</span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="mb-1">{topic.title}</h1>
                        <p className="text-muted small mb-3">{topic.title_es}</p>

                        <button 
                            className={`btn btn-lg rounded-pill px-4 ${topicStatus === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={() => handleMarkComplete()}
                            style={{ transition: 'all 0.3s ease', fontWeight: 600 }}
                        >
                            <i className={`bi ${topicStatus === 'completed' ? 'bi-check-circle-fill' : 'bi-circle'} me-2`}></i>
                            {topicStatus === 'completed' ? 'Completed' : 'Mark as Complete'}
                        </button>
                    </div>

                    {/* Glassmorphic Dual Progress Widget */}
                    <div className="glass-progress-widget">
                        <div className="glass-progress-row">
                            <div className="progress-info">
                                <span className="progress-label">
                                    <i className="bi bi-book-half me-2 theory-icon"></i>Theory
                                </span>
                                <span className={`progress-value ${theoryProgress >= 100 ? 'completed' : ''}`}>
                                    {theoryProgress >= 100 ? 'Completed ✓' : `${theoryProgress}%`}
                                </span>
                            </div>
                            <div className="glass-progress-track">
                                <div className="glass-progress-fill theory-fill" style={{ width: `${theoryProgress}%` }}>
                                    <div className="progress-glow"></div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-progress-row mt-3">
                            <div className="progress-info">
                                <span className="progress-label">
                                    <i className="bi bi-controller me-2 practice-icon"></i>Practice
                                </span>
                                <span className={`progress-value ${practiceProgress >= 100 ? 'completed' : ''}`}>
                                    {practiceProgress >= 100 ? 'Completed ✓' : `${practiceProgress}%`}
                                </span>
                            </div>
                            <div className="glass-progress-track">
                                <div className="glass-progress-fill practice-fill" style={{ width: `${practiceProgress}%` }}>
                                    <div className="progress-glow"></div>
                                </div>
                            </div>
                        </div>

                        {theoryProgress >= 100 && practiceProgress >= 100 && (
                            <div className="completion-toast mt-3 text-center animate-fade-in">
                                <span>✨ Mastered! 🚀</span>
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
                                {theoryProgress >= 100 && <span className="ms-2 badge bg-success rounded-circle p-1" style={{ fontSize: '0.65rem', lineHeight: 1 }}>✓</span>}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className={`nav-link ${activeTab === 'practice' ? 'active' : ''}`}
                                onClick={() => setActiveTab('practice')}
                            >
                                <i className="bi bi-controller me-2"></i> Practice
                                {practiceProgress >= 100 && <span className="ms-2 badge bg-success rounded-circle p-1" style={{ fontSize: '0.65rem', lineHeight: 1 }}>✓</span>}
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content custom-tab-content" ref={containerRef} style={{ background: 'var(--color-fondo-secundario)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-borde)' }}>
                        {activeTab === 'theory' && nivel?.toLowerCase() === 'a1' && parseInt(topicId) === 3 && (
                            <AlphabetInteractive onInteraction={() => setTheoryProgress(100)} />
                        )}
                        {activeTab === 'theory' && nivel?.toLowerCase() === 'a1' && parseInt(topicId) === 4 && (
                            <NumbersInteractive onInteraction={() => setTheoryProgress(100)} />
                        )}
                        {activeTab === 'theory' && (nivel?.toLowerCase() !== 'a1' || (parseInt(topicId) !== 3 && parseInt(topicId) !== 4)) && (
                            <div 
                                className="theory-wrapper premium-content" 
                                ref={theoryRef}
                                style={{ maxHeight: '70vh', overflowY: 'auto' }}
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
