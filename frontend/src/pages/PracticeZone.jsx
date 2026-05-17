import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import PracticeEngine from '../components/PracticeEngine';
import './PracticeZone.css';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

const PracticeZone = () => {
    const { user, verifyUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [activeGameTopic, setActiveGameTopic] = useState(null);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const [gameLoading, setGameLoading] = useState(false);

    // New Trial and Manual Payment states
    const [trialLoading, setTrialLoading] = useState(false);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [paymentReport, setPaymentReport] = useState({
        method: 'nequi',
        sender: '',
        amount: '10000',
        reference: '',
        comments: ''
    });
    const [reportLoading, setReportLoading] = useState(false);
    const [reportSuccess, setReportSuccess] = useState(null);
    const [reportError, setReportError] = useState(null);
    const [showExtendMenu, setShowExtendMenu] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('colombia');

    // Guardia de desarrollo removida para lanzamiento en producción
    /*
    if (!import.meta.env.DEV) {
        ...
    }
    */

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
            navigate('/login', { state: { returnTo: '/practice-zone' } });
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

    const handleStartTrial = async () => {
        if (!user) {
            navigate('/login', { state: { returnTo: '/practice-zone' } });
            return;
        }
        setTrialLoading(true);
        try {
            const res = await apiClient.post('/auth/start-trial');
            alert(res.data.msg || '¡Prueba premium de 7 días activada con éxito!');
            await verifyUser();
        } catch (err) {
            console.error("Error starting free trial:", err);
            alert(err.response?.data?.msg || 'No se pudo activar tu prueba gratuita. Intenta de nuevo.');
        } finally {
            setTrialLoading(false);
        }
    };

    const handleSendReport = async (e) => {
        e.preventDefault();
        setReportLoading(true);
        setReportError(null);
        setReportSuccess(null);

        try {
            const messageBody = `
=== REPORTE DE PAGO MANUAL PREMIUM ===
- Método de Pago: ${paymentReport.method.toUpperCase()}
- Nombre del Remitente: ${paymentReport.sender}
- Valor Transferido: ${paymentReport.amount}
- Referencia / ID Transacción: ${paymentReport.reference}
- Comentarios del Estudiante: ${paymentReport.comments || 'Ninguno'}
- Fecha de Reporte: ${new Date().toLocaleString('es-CO')}
            `.trim();

            await apiClient.post('/support', {
                name: user?.username || 'Estudiante LevelUp',
                email: user?.email || '',
                subject: `[REPORTE PAGO DIRECTO] - ${paymentReport.method.toUpperCase()}`,
                message: messageBody,
                userId: user?.id
            });

            setReportSuccess('✅ Tu reporte de pago ha sido enviado al administrador con éxito. Verificaremos tu transferencia y activaremos tu cuenta Premium a la brevedad.');
            setPaymentReport({ method: 'nequi', sender: '', amount: '10000', reference: '', comments: '' });
        } catch (err) {
            console.error("Error submitting payment report:", err);
            setReportError(err.response?.data?.msg || 'Hubo un error al enviar tu reporte de pago. Por favor intenta de nuevo.');
        } finally {
            setReportLoading(false);
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
                console.error("Error loading practice game:", err);
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
            <div className="practice-play-area container py-5">
                <button className="btn btn-outline-secondary mb-4" onClick={() => setSearchParams({})}>
                    <i className="bi bi-arrow-left"></i> Volver al Mapa de Práctica
                </button>
                <div className="text-center mb-4">
                    <h2 className="fw-bold" style={{ color: 'var(--color-primario)' }}>{activeGameTopic.title}</h2>
                    <span className="badge bg-warning text-dark px-3 py-2">Premium Level {activeGameTopic.level}</span>
                </div>
                
                {premiumData && (premiumData.games || premiumData.pairs) ? (
                    <PracticeEngine data={premiumData} onScoreUpdate={() => {}} />
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
        <div className="practice-container py-5">
            <div className="container">
                <div className="practice-header text-center mb-5">
                    <h1 className="fw-black practice-title">
                        <i className="bi bi-controller me-3 text-warning"></i> 
                        PRACTICE ZONE
                    </h1>
                    <p className="text-muted fs-5">Minijuegos mágicos para perfeccionar tu gramática</p>
                    
                    {isSuccess && (
                        <div className="alert alert-success mt-4 d-inline-block shadow-sm animate__animated animate__tada">
                            <i className="bi bi-stars"></i> ¡Pago completado! Bienvenido al modo Premium.
                        </div>
                    )}

                    {user && user.is_premium && user.premium_until && (
                        <div className="mt-2">
                            <span className="badge bg-dark-subtle text-muted border px-3 py-2 rounded-pill mb-2">
                                <i className="bi bi-calendar-event me-2 text-info"></i>
                                Acceso Premium hasta: {new Date(user.premium_until).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                            <div className="mt-2">
                                <button 
                                    className="btn btn-outline-warning btn-sm rounded-pill px-4 fw-semibold shadow-sm animate__animated animate__fadeIn"
                                    onClick={() => setShowExtendMenu(!showExtendMenu)}
                                    style={{ fontSize: '0.85rem' }}
                                >
                                    <i className={`bi ${showExtendMenu ? 'bi-chevron-up' : 'bi-gem'} me-2`}></i>
                                    {showExtendMenu ? 'Ocultar Métodos de Pago' : '✨ Extender / Asegurar mi Acceso Premium'}
                                </button>
                            </div>
                        </div>
                    )}

                    {user && user.is_premium && showExtendMenu && (
                        <div className="manual-pay-container shadow-lg my-4 p-4 rounded-4 border animate__animated animate__slideInDown text-start" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div className="text-center mb-3">
                                <h4 className="fw-bold text-gradient-premium mb-1">Asegura tu Acceso Premium</h4>
                                <p className="text-muted small mb-0">Extiende tu suscripción mensual en cualquier momento. Los nuevos días se acumularán al final de tu periodo actual.</p>
                            </div>
                            
                            <div className="row g-3 justify-content-center mb-3">
                                <div className="col-md-6">
                                    <div 
                                        className={`price-card text-center p-3 rounded-4 border h-100 position-relative cursor-pointer transition-all ${selectedPlan === 'colombia' ? 'border-warning bg-warning-subtle premium-glow shadow-sm' : 'border-secondary'}`}
                                        onClick={() => setSelectedPlan('colombia')}
                                        style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
                                    >
                                        <span className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-1 rounded-pill">PLAN COLOMBIA</span>
                                        <div className="fw-extrabold my-2 text-warning fs-5">$10.000 <span className="fs-6 text-muted">COP / mes</span></div>
                                        <span className="small text-muted d-block mt-1" style={{ fontSize: '0.75rem' }}>{selectedPlan === 'colombia' ? '👉 Plan Seleccionado' : 'Hacer clic para seleccionar'}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div 
                                        className={`price-card text-center p-3 rounded-4 border h-100 position-relative cursor-pointer transition-all ${selectedPlan === 'international' ? 'border-warning bg-warning-subtle premium-glow shadow-sm' : 'border-secondary'}`}
                                        onClick={() => setSelectedPlan('international')}
                                        style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
                                    >
                                        <span className="badge bg-secondary position-absolute top-0 start-50 translate-middle px-3 py-1 rounded-pill">INTERNATIONAL</span>
                                        <div className="fw-extrabold my-2 text-warning fs-5">$5 <span className="fs-6 text-muted">USD / month</span></div>
                                        <span className="small text-muted d-block mt-1" style={{ fontSize: '0.75rem' }}>{selectedPlan === 'international' ? '👉 Selected Plan' : 'Click to select'}</span>
                                    </div>
                                </div>
                            </div>

                            {selectedPlan === 'colombia' ? (
                                <div className="payment-methods-grid p-3 rounded-3 mb-3 animate__animated animate__fadeIn" style={{ backgroundColor: 'rgba(255, 193, 7, 0.03)' }}>
                                    <h6 className="fw-bold mb-3 text-center text-warning"><i className="bi bi-wallet2 me-2"></i>Métodos de Transferencia Directa (Colombia)</h6>
                                    <div className="row g-2 justify-content-center text-center">
                                        <div className="col-sm-6">
                                            <div className="p-2 rounded border bg-body">
                                                <div className="fw-bold text-info small"><i className="bi bi-phone me-1"></i>Nequi</div>
                                                <div className="small fw-semibold mt-1" style={{ fontSize: '0.85rem' }}>Celular: {import.meta.env.VITE_PAYMENT_NEQUI_PHONE || '3113877547'}</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="p-2 rounded border bg-body">
                                                <div className="fw-bold text-success small"><i className="bi bi-bank me-1"></i>Llave B-BRE</div>
                                                <div className="small fw-semibold mt-1" style={{ fontSize: '0.85rem' }}>Transfiya: {import.meta.env.VITE_PAYMENT_LLAVE || '@3113877547'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="payment-methods-grid p-3 rounded-3 mb-3 animate__animated animate__fadeIn" style={{ backgroundColor: 'rgba(255, 193, 7, 0.03)' }}>
                                    <h6 className="fw-bold mb-3 text-center text-warning"><i className="bi bi-globe me-2"></i>Método de Transferencia Directa (Internacional)</h6>
                                    <div className="row g-2 justify-content-center text-center">
                                        <div className="col-sm-8 col-md-6">
                                            <div className="p-3 rounded border bg-body h-100 d-flex flex-column justify-content-center shadow-sm border-primary-subtle">
                                                <div className="fw-bold text-primary fs-6"><i className="bi bi-paypal me-1"></i>PayPal</div>
                                                <div className="fw-bold fs-5 mt-2 text-white">{import.meta.env.VITE_PAYMENT_PAYPAL_EMAIL || '@juanse1030'}</div>
                                                <div className="small text-muted mt-1">Transfiere dólares digitales usando tu cuenta de PayPal</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="text-center">
                                <p className="small text-muted mb-3">Una vez realices tu transferencia, envíanos el comprobante aquí mismo y activaremos tu membresía en minutos.</p>
                                <div className="text-center">
                                    <button 
                                        className="btn btn-warning btn-sm fw-bold px-4 rounded-pill shadow-sm"
                                        onClick={() => {
                                            setReportSuccess(null);
                                            setReportError(null);
                                            setPaymentReport({
                                                method: selectedPlan === 'colombia' ? 'nequi' : 'paypal',
                                                sender: '',
                                                amount: selectedPlan === 'colombia' ? '10000 COP' : '5 USD',
                                                reference: '',
                                                comments: ''
                                            });
                                            setIsReportModalOpen(true);
                                        }}
                                    >
                                        <i className="bi bi-receipt-cutoff me-2"></i> Reportar mi Pago Directo
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 1. Logged Out User Upsell */}
                {!user && (
                    <div className="upsell-banner shadow-lg mb-5 text-center p-5 rounded-4 animate__animated animate__fadeIn">
                        <i className="bi bi-lock-fill display-3 text-white mb-3 shadow-icon"></i>
                        <h2 className="text-white fw-bold mb-3">Practice Zone Premium</h2>
                        <p className="text-white-50 fs-5 mb-4">
                            ¡Aprende jugando! Inicia sesión para activar tu **Prueba Premium Gratis de 7 Días** y desbloquea minijuegos mágicos para perfeccionar tu gramática.
                        </p>
                        <button 
                            className="btn btn-warning btn-lg fw-bold px-5 rounded-pill shadow-sm animate__animated animate__pulse animate__infinite" 
                            onClick={() => navigate('/login', { state: { returnTo: '/practice-zone' } })}
                        >
                            Iniciar Sesión para Probar Gratis
                        </button>
                    </div>
                )}

                {/* 2. Logged In User, Trial NOT Used yet */}
                {user && !user.is_premium && !user.trial_started_at && (
                    <div className="upsell-banner trial-banner shadow-lg mb-5 text-center p-5 rounded-4 animate__animated animate__fadeIn">
                        <i className="bi bi-gift-fill display-3 text-warning mb-3 shadow-icon animate__animated animate__bounce animate__infinite" style={{ animationDuration: '3s' }}></i>
                        <h2 className="text-white fw-bold mb-3">¡Prueba Premium Gratis por 7 Días!</h2>
                        <p className="text-white-50 fs-5 mb-4">
                            Queremos que experimentes la mejor forma de aprender inglés. Activa tus **7 días gratis de acceso premium ilimitado** a todos los minijuegos de la Practice Zone. ¡Sin compromisos ni tarjetas!
                        </p>
                        <button 
                            className="btn btn-warning btn-lg fw-bold px-5 rounded-pill shadow-sm" 
                            onClick={handleStartTrial}
                            disabled={trialLoading}
                        >
                            {trialLoading ? (
                                <span className="spinner-border spinner-border-sm me-2"></span>
                            ) : (
                                <i className="bi bi-play-circle-fill me-2"></i>
                            )}
                            Activar mis 7 Días Gratis
                        </button>
                    </div>
                )}

                {/* 3. Logged In User, Trial ALREADY Used (Direct Manual Subscriptions) */}
                {user && !user.is_premium && user.trial_started_at && (
                    <div className="manual-pay-container shadow-lg mb-5 p-4 p-md-5 rounded-4 border animate__animated animate__fadeIn">
                        <div className="text-center mb-4">
                            <i className="bi bi-gem display-4 text-warning mb-3"></i>
                            <h2 className="fw-bold text-gradient-premium">Continúa tu Aprendizaje Premium</h2>
                            <p className="text-muted fs-5">Tu período de prueba ha terminado. Elige un plan ultra-económico y sin intermediarios para mantener tu acceso ilimitado.</p>
                        </div>
                        
                        <div className="row g-4 justify-content-center mb-4">
                            <div className="col-md-5">
                                <div 
                                    className={`price-card text-center p-4 rounded-4 border h-100 position-relative cursor-pointer transition-all ${selectedPlan === 'colombia' ? 'border-warning bg-warning-subtle premium-glow shadow-sm' : 'border-secondary'}`}
                                    onClick={() => setSelectedPlan('colombia')}
                                    style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
                                >
                                    <span className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill">PLAN COLOMBIA</span>
                                    <h4 className="fw-bold mt-2 text-muted">Mensual COP</h4>
                                    <div className="display-5 fw-extrabold my-3 text-warning">$10.000 <span className="fs-6 text-muted">COP</span></div>
                                    <p className="small text-muted mb-0">Acceso completo a todos los niveles por 30 días.</p>
                                    <span className="small text-muted d-block mt-2" style={{ fontSize: '0.75rem' }}>{selectedPlan === 'colombia' ? '👉 Plan Seleccionado' : 'Hacer clic para seleccionar'}</span>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div 
                                    className={`price-card text-center p-4 rounded-4 border h-100 position-relative cursor-pointer transition-all ${selectedPlan === 'international' ? 'border-warning bg-warning-subtle premium-glow shadow-sm' : 'border-secondary'}`}
                                    onClick={() => setSelectedPlan('international')}
                                    style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
                                >
                                    <span className="badge bg-secondary position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill">INTERNATIONAL</span>
                                    <h4 className="fw-bold mt-2 text-muted">Mensual USD</h4>
                                    <div className="display-5 fw-extrabold my-3 text-warning">$5 <span className="fs-6 text-muted">USD</span></div>
                                    <p className="small text-muted mb-0">Full premium access worldwide for 30 days.</p>
                                    <span className="small text-muted d-block mt-2" style={{ fontSize: '0.75rem' }}>{selectedPlan === 'international' ? '👉 Selected Plan' : 'Click to select'}</span>
                                </div>
                            </div>
                        </div>

                        {selectedPlan === 'colombia' ? (
                            <div className="payment-methods-grid p-4 rounded-3 mb-4 animate__animated animate__fadeIn" style={{ backgroundColor: 'rgba(255, 193, 7, 0.03)' }}>
                                <h5 className="fw-bold mb-3 text-center text-warning"><i className="bi bi-wallet2 me-2"></i>Métodos de Transferencia Directa (Colombia)</h5>
                                <div className="row g-3 justify-content-center text-center">
                                    <div className="col-sm-6 col-md-5">
                                        <div className="p-3 rounded border bg-body h-100 shadow-sm border-info-subtle">
                                            <div className="fw-bold text-info fs-6"><i className="bi bi-phone me-1"></i>Nequi</div>
                                            <div className="fw-bold fs-5 mt-2 text-white">{import.meta.env.VITE_PAYMENT_NEQUI_PHONE || '3113877547'}</div>
                                            <div className="small text-muted mt-1">Celular / Transferencia Directa</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-5">
                                        <div className="p-3 rounded border bg-body h-100 shadow-sm border-success-subtle">
                                            <div className="fw-bold text-success fs-6"><i className="bi bi-bank me-1"></i>Llave B-BRE</div>
                                            <div className="fw-bold fs-5 mt-2 text-white">{import.meta.env.VITE_PAYMENT_LLAVE || '@3113877547'}</div>
                                            <div className="small text-muted mt-1">Transfiya</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="payment-methods-grid p-4 rounded-3 mb-4 animate__animated animate__fadeIn" style={{ backgroundColor: 'rgba(255, 193, 7, 0.03)' }}>
                                <h5 className="fw-bold mb-3 text-center text-warning"><i className="bi bi-globe me-2"></i>Método de Transferencia Directa (Internacional)</h5>
                                <div className="row g-3 justify-content-center text-center">
                                    <div className="col-sm-8 col-md-6">
                                        <div className="p-3 rounded border bg-body h-100 d-flex flex-column justify-content-center shadow-sm border-primary-subtle">
                                            <div className="fw-bold text-primary fs-6"><i className="bi bi-paypal me-1"></i>PayPal</div>
                                            <div className="fw-bold fs-5 mt-2 text-white">{import.meta.env.VITE_PAYMENT_PAYPAL_EMAIL || '@juanse1030'}</div>
                                            <div className="small text-muted mt-1">Transfiere dólares digitales usando tu cuenta de PayPal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="text-center">
                            <p className="small text-muted mb-3">Una vez realices tu transferencia, envíanos el comprobante aquí mismo y activaremos tu membresía en minutos.</p>
                            <button 
                                className="btn btn-warning btn-lg fw-bold px-5 rounded-pill shadow-sm"
                                onClick={() => {
                                    setReportSuccess(null);
                                    setReportError(null);
                                    setPaymentReport({
                                        method: selectedPlan === 'colombia' ? 'nequi' : 'paypal',
                                        sender: '',
                                        amount: selectedPlan === 'colombia' ? '10000 COP' : '5 USD',
                                        reference: '',
                                        comments: ''
                                    });
                                    setIsReportModalOpen(true);
                                }}
                            >
                                <i className="bi bi-receipt-cutoff me-2"></i> Reportar mi Pago Directo
                            </button>
                        </div>
                    </div>
                )}

                <ul className="nav nav-pills justify-content-center mb-5 practice-nav">
                    {LEVELS.map(lvl => (
                        <li className="nav-item mx-2" key={lvl}>
                            <button 
                                className={`nav-link fw-bold px-4 rounded-pill ${selectedLevel === lvl ? 'active bg-warning text-dark' : 'text-muted'}`}
                                onClick={() => setSelectedLevel(lvl)}
                            >
                                {lvl}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="level-map position-relative">
                    <div className="row g-4">
                        {topics.filter(t => t.level === selectedLevel).map((topic) => {
                            const isLocked = !user || !user.is_premium;
                            return (
                                <div className="col-md-6 col-lg-4" key={topic.id}>
                                    <div 
                                        className={`practice-card card h-100 ${isLocked ? 'locked' : 'unlocked'}`}
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

            {/* ====== REPORT DIRECT PAYMENT MODAL ====== */}
            {isReportModalOpen && (
                <div className="modal show d-block animate__animated animate__fadeIn" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-secondary shadow-lg">
                            <div className="modal-header border-bottom border-secondary bg-dark text-white">
                                <h5 className="modal-title fw-bold text-warning">
                                    <i className="bi bi-receipt-cutoff me-2"></i>Reportar Pago Directo
                                </h5>
                                <button type="button" className="btn-close btn-close-white" onClick={() => setIsReportModalOpen(false)}></button>
                            </div>
                            <form onSubmit={handleSendReport}>
                                <div className="modal-body bg-dark text-white text-start">
                                    {reportSuccess ? (
                                        <div className="text-center p-2 animate__animated animate__fadeIn">
                                            <div className="alert alert-success p-3 rounded shadow-sm mb-4">
                                                {reportSuccess}
                                            </div>
                                            {import.meta.env.VITE_ADMIN_WHATSAPP_PHONE && (
                                                <div className="p-3 rounded border border-success bg-dark-subtle animate__animated animate__bounceIn" style={{ backgroundColor: 'rgba(37, 211, 102, 0.05)' }}>
                                                    <p className="small text-white-50 mb-3">⚡ ¡Para acelerar tu activación, envíanos el comprobante con un clic directamente a nuestro WhatsApp!</p>
                                                    <a 
                                                        href={`https://wa.me/${import.meta.env.VITE_ADMIN_WHATSAPP_PHONE}?text=${encodeURIComponent(
                                                            `¡Hola! Acabo de enviar un reporte de pago para extender mi acceso Premium:\n\n` +
                                                            `🔹 *Usuario:* ${user?.username} (${user?.email})\n` +
                                                            `🔹 *Método:* ${paymentReport.method.toUpperCase()}\n` +
                                                            `🔹 *Remitente:* ${paymentReport.sender}\n` +
                                                            `🔹 *Valor:* ${paymentReport.amount}\n` +
                                                            `🔹 *Referencia:* ${paymentReport.reference}\n` +
                                                            `🔹 *Comentarios:* ${paymentReport.comments || 'Ninguno'}\n\n` +
                                                            `Adjunto el comprobante. Por favor activa mi membresía Premium. ¡Muchas gracias!`
                                                        )}`}
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="btn btn-success fw-bold px-4 py-2 rounded-pill shadow-lg text-white"
                                                        style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                                                    >
                                                        <i className="bi bi-whatsapp me-2"></i> Enviar a WhatsApp
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <>
                                            {reportError && (
                                                <div className="alert alert-danger p-3 rounded shadow-sm">
                                                    {reportError}
                                                </div>
                                            )}

                                            <div className="mb-3">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Método Utilizado</label>
                                                <select 
                                                    className="form-select bg-black text-white border-secondary" 
                                                    value={paymentReport.method}
                                                    onChange={(e) => setPaymentReport(prev => ({ ...prev, method: e.target.value }))}
                                                    required
                                                >
                                                    {selectedPlan === 'colombia' ? (
                                                        <>
                                                            <option value="nequi">Nequi (Colombia)</option>
                                                            <option value="lulo">Llave B-BRE (Transfiya) (Colombia)</option>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <option value="paypal">PayPal (Internacional)</option>
                                                            <option value="us_bank">Cuenta Digital USA (Lead Bank)</option>
                                                        </>
                                                    )}
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Nombre del Remitente</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control bg-black text-white border-secondary" 
                                                    placeholder="Nombre completo de quien transfirió"
                                                    value={paymentReport.sender}
                                                    onChange={(e) => setPaymentReport(prev => ({ ...prev, sender: e.target.value }))}
                                                    required
                                                />
                                            </div>

                                            <div className="row g-3 mb-3">
                                                <div className="col-6">
                                                    <label className="form-label small fw-bold text-muted text-uppercase">Monto Pagado</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-black text-white border-secondary" 
                                                        placeholder="Ej: $10.000 COP o $5 USD"
                                                        value={paymentReport.amount}
                                                        onChange={(e) => setPaymentReport(prev => ({ ...prev, amount: e.target.value }))}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label small fw-bold text-muted text-uppercase">ID de Transacción</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-black text-white border-secondary" 
                                                        placeholder="Referencia o Código Aprobación"
                                                        value={paymentReport.reference}
                                                        onChange={(e) => setPaymentReport(prev => ({ ...prev, reference: e.target.value }))}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label small fw-bold text-muted text-uppercase">Comentarios Adicionales</label>
                                                <textarea 
                                                    className="form-control bg-black text-white border-secondary" 
                                                    rows="3" 
                                                    placeholder="Opcional. Escribe cualquier detalle o mensaje de soporte..."
                                                    value={paymentReport.comments}
                                                    onChange={(e) => setPaymentReport(prev => ({ ...prev, comments: e.target.value }))}
                                                ></textarea>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="modal-footer bg-dark border-top border-secondary">
                                    {reportSuccess ? (
                                        <button type="button" className="btn btn-warning fw-bold px-4" onClick={() => setIsReportModalOpen(false)}>Entendido</button>
                                    ) : (
                                        <>
                                            <button type="button" className="btn btn-outline-light px-3" onClick={() => setIsReportModalOpen(false)}>Cancelar</button>
                                            <button type="submit" className="btn btn-warning fw-bold px-4" disabled={reportLoading}>
                                                {reportLoading ? (
                                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                                ) : (
                                                    <i className="bi bi-send-fill me-2"></i>
                                                )}
                                                Enviar Reporte
                                            </button>
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PracticeZone;
