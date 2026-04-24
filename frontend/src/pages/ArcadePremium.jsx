import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import PracticeEngine from '../components/PracticeEngine';
import './ArcadePremium.css';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

const ArcadePremium = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [activeGameTopic, setActiveGameTopic] = useState(null);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const [gameLoading, setGameLoading] = useState(false);

    // =====================================================================
    // GUARDIA DE DESARROLLO (DEVELOPMENT GATE)
    // =====================================================================
    if (!import.meta.env.DEV) {
        return (
            <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center animate__animated animate__fadeIn">
                <div style={{ position: 'relative' }}>
                    <i className="bi bi-cone-striped" style={{ fontSize: '6rem', color: '#FFD700', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}></i>
                    <i className="bi bi-gear-fill position-absolute text-secondary" style={{ fontSize: '2rem', bottom: '10px', right: '-10px', animation: 'spin 4s linear infinite' }}></i>
                </div>
                <h1 className="display-3 fw-bold mt-4 mb-3" style={{ color: 'var(--color-texto-principal)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Coming Soon</h1>
                <p className="lead fs-4" style={{ color: 'var(--color-texto-secundario)', maxWidth: '650px' }}>
                    We are actively crafting a highly interactive and dynamic Premium Arcade. 
                    Get ready to turbocharge your English skills with new randomized games and challenges. Stay tuned!
                </p>
                <div className="mt-5">
                    <button className="btn btn-outline-warning rounded-pill px-5 py-3 fw-bold shadow-sm" onClick={() => navigate('/')}>
                        <i className="bi bi-arrow-left me-2"></i> Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await apiClient.get('/topics');
                setTopics(res.data.topics);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchTopics();
    }, []);

    const handleCheckout = async () => {
        if (!user) {
            navigate('/login', { state: { returnTo: '/arcade' } });
            return;
        }

        setCheckoutLoading(true);
        try {
            const res = await apiClient.post('/epayco/checkout-session', {});
            const sessionId = res.data.session_id;

            if (window.ePayco) {
                const handler = window.ePayco.checkout.configure({
                    key: import.meta.env.VITE_EPAYCO_PUBLIC_KEY || 'TU_PUBLIC_KEY_AQUI',
                    test: import.meta.env.DEV
                });

                handler.open({
                    external: 'true',
                    session_id: sessionId
                });
            } else {
                throw new Error("ePayco SDK no cargado");
            }
        } catch (err) {
            console.error("ePayco Checkout Error", err);
            alert("No se pudo iniciar el pago. Intente nuevamente.");
        } finally {
            setCheckoutLoading(false);
        }
    };

    const handlePlayArea = (topic) => {
        if (!user || !user.is_premium) return;
        setSearchParams({ topicId: topic.id.toString() });
    };

    // --- Sync URL with Game State ---
    useEffect(() => {
        const topicId = searchParams.get('topicId');
        if (!topicId) {
            setActiveGameTopic(null);
            return;
        }

        const fetchGame = async () => {
            const topic = topics.find(t => t.id.toString() === topicId);
            if (!topic) return;

            setGameLoading(true);
            try {
                const res = await apiClient.get(`/topics/${topic.level}/${topic.number}/premium`);
                const completeTopic = { ...topic, premium_practice: res.data.premium_practice };
                setActiveGameTopic(completeTopic);
            } catch (err) {
                console.error("Error loading arcade game:", err);
                alert("Hubo un error al cargar el juego. Intente de nuevo.");
                setSearchParams({}); // Clear on error
            } finally {
                setGameLoading(false);
            }
        };

        if (topics.length > 0) {
            fetchGame();
        }
    }, [searchParams, topics]);

    const isSuccess = searchParams.get('success');

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="spinner-border text-warning" role="status"></div>
            </div>
        );
    }

    if (activeGameTopic) {
        let premiumData = null;
        try {
            if (activeGameTopic.premium_practice) {
                // If it's a string, parse it. If it's already an object (from the new API), use it.
                premiumData = typeof activeGameTopic.premium_practice === 'string' 
                    ? JSON.parse(activeGameTopic.premium_practice) 
                    : activeGameTopic.premium_practice;
            }
        } catch (e) {
            console.error("Error parsing premium practice JSON", e);
        }
        
        return (
            <div className="arcade-play-area container py-5">
                <button className="btn btn-outline-secondary mb-4" onClick={() => setSearchParams({})}>
                    <i className="bi bi-arrow-left"></i> Volver al Mapa Arcade
                </button>
                <div className="text-center mb-4">
                    <h2 className="fw-bold" style={{ color: 'var(--color-primario)' }}>{activeGameTopic.title}</h2>
                    <span className="badge bg-warning text-dark px-3 py-2">Premium Level {activeGameTopic.level}</span>
                </div>
                
                {premiumData && (premiumData.games || premiumData.pairs) ? (
                    <PracticeEngine data={premiumData} onScoreUpdate={() => console.log('Premium Game Finished!')} />
                ) : (
                    <div className="alert alert-info text-center shadow-sm">
                        <strong>¡Juegos en construcción!</strong>
                        <p className="mb-0">Los motores de minijuegos están en ensamblaje para este tema.</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="arcade-container py-5">
            <div className="container">
                <div className="arcade-header text-center mb-5">
                    <h1 className="fw-black arcade-title">
                        <i className="bi bi-controller me-3 text-warning"></i> 
                        ARCADE PREMIUM
                    </h1>
                    <p className="text-muted fs-5">Minijuegos mágicos para perfeccionar tu gramática</p>
                    
                    {isSuccess && (
                        <div className="alert alert-success mt-4 d-inline-block shadow-sm animate__animated animate__tada">
                            <i className="bi bi-stars"></i> ¡Pago completado! Bienvenido al modo Premium.
                        </div>
                    )}

                    {user && user.is_premium && user.premium_until && (
                        <div className="mt-2">
                            <span className="badge bg-dark-subtle text-muted border px-3 py-2 rounded-pill">
                                <i className="bi bi-calendar-event me-2 text-info"></i>
                                Acceso Premium hasta: {new Date(user.premium_until).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                    )}
                </div>

                {user && !user.is_premium && (
                    <div className="upsell-banner shadow-lg mb-5 text-center p-5 rounded-4">
                        <i className="bi bi-lock-fill display-3 text-white mb-3 shadow-icon"></i>
                        <h2 className="text-white fw-bold mb-3">Zona Bloqueada</h2>
                        <p className="text-white-50 fs-5 mb-4">
                            ¡Lleva tu inglés al siguiente nivel! Con **LevelUp Premium** desbloqueas acceso ilimitado a juegos exclusivos, desafíos avanzados y contenido seleccionado para acelerar tu aprendizaje.
                        </p>
                        <button className="btn btn-secondary btn-lg fw-bold px-5 rounded-pill shadow" disabled>
                            <i className="bi bi-clock-history me-2"></i> Próximamente
                        </button>
                    </div>
                )}

                <div className="arcade-nav-container mb-5 d-flex justify-content-center">
                    <div className="arcade-nav-row d-flex align-items-center">
                        {LEVELS.map(lvl => (
                            <button 
                                key={lvl}
                                className={`level-btn fw-bold rounded-pill ${selectedLevel === lvl ? 'active' : ''}`}
                                onClick={() => setSelectedLevel(lvl)}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="level-map position-relative">
                    <div className="row g-4">
                        {topics.filter(t => t.level === selectedLevel).map((topic) => {
                            const isLocked = !user || !user.is_premium;
                            return (
                                <div className="col-md-6 col-lg-4" key={topic.id}>
                                    <div 
                                        className={`arcade-card card h-100 ${isLocked ? 'locked' : 'unlocked'}`}
                                        onClick={() => handlePlayArea(topic)}
                                    >
                                        <div className="card-body text-center p-4">
                                            <div className="level-badge mb-3">
                                                <span>Tema {topic.number}</span>
                                            </div>
                                            <div className="icon-wrapper mb-3">
                                                {isLocked ? (
                                                    <i className="bi bi-lock-fill text-secondary lock-icon"></i>
                                                ) : (
                                                    <div className="floating-emoji">
                                                        {topic.icon && topic.icon.startsWith('bi-') ? (
                                                            <i className={`bi ${topic.icon}`}></i>
                                                        ) : (
                                                            topic.icon || '🕹️'
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <h4 className="fw-bold">{topic.title}</h4>
                                            {isLocked && <div className="overlay-lock"></div>}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArcadePremium;
