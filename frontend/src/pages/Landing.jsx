import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Landing.css';

const Landing = () => {
    const { user } = useAuth();

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                {/* Floating elements — LEFT side */}
                <div className="hero-floats hero-floats--left" aria-hidden="true">
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '0s',   '--x': '52%', '--y': '12%' }}>Hello!</div>
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '1.2s', '--x': '30%', '--y': '38%' }}>Grammar</div>
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '2.4s', '--x': '58%', '--y': '68%' }}>A1 → C1</div>
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '3.5s', '--x': '15%', '--y': '85%' }}>Speaking</div>
                    <div className="hf-icon" style={{ '--d': '0.6s', '--x': '70%', '--y': '50%' }}><i className="bi bi-book-fill"></i></div>
                    <div className="hf-icon hf-icon--accent2" style={{ '--d': '1.8s', '--x': '20%', '--y': '60%' }}><i className="bi bi-chat-dots-fill"></i></div>
                    <div className="hf-icon hf-icon--accent3" style={{ '--d': '2.8s', '--x': '45%', '--y': '88%' }}><i className="bi bi-pencil-fill"></i></div>
                    <div className="hf-letter" style={{ '--d': '3s',  '--x': '10%', '--y': '18%' }}>cat</div>
                    <div className="hf-letter hf-letter--sm" style={{ '--d': '0.9s', '--x': '60%', '--y': '30%' }}>play</div>
                    <div className="hf-letter hf-letter--sm" style={{ '--d': '4s',   '--x': '38%', '--y': '55%' }}>run</div>
                </div>

                {/* Floating elements — RIGHT side */}
                <div className="hero-floats hero-floats--right" aria-hidden="true">
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '0.5s', '--x': '5%',  '--y': '15%' }}>Vocabulary</div>
                    <div className="hf-bubble hf-bubble--word hf-bubble--accent" style={{ '--d': '1.7s', '--x': '25%', '--y': '55%' }}>¡Practica!</div>
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '2.9s', '--x': '10%', '--y': '80%' }}>Listening</div>
                    <div className="hf-bubble hf-bubble--word" style={{ '--d': '4.1s', '--x': '50%', '--y': '35%' }}>Writing</div>
                    <div className="hf-icon hf-icon--accent3" style={{ '--d': '1.1s', '--x': '65%', '--y': '22%' }}><i className="bi bi-headphones"></i></div>
                    <div className="hf-icon" style={{ '--d': '2.3s', '--x': '2%',  '--y': '45%' }}><i className="bi bi-trophy-fill"></i></div>
                    <div className="hf-icon hf-icon--accent2" style={{ '--d': '3.3s', '--x': '40%', '--y': '70%' }}><i className="bi bi-stars"></i></div>
                    <div className="hf-letter" style={{ '--d': '0.3s', '--x': '75%', '--y': '65%' }}>dog</div>
                    <div className="hf-letter hf-letter--sm" style={{ '--d': '1.5s', '--x': '18%', '--y': '25%' }}>sky</div>
                    <div className="hf-letter hf-letter--sm" style={{ '--d': '2.7s', '--x': '55%', '--y': '88%' }}>book</div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Aprende Inglés Practicando</h1>
                        <p className="hero-subtitle">
                            Domina el inglés desde A1 hasta C1 con lecciones interactivas, juegos divertidos y seguimiento de tu progreso. ¡Y es 100% gratis!
                        </p>
                        <div className="cta-buttons">
                            {user ? (
                                <>
                                    <Link to="/learn" className="btn-gamified btn-primary-3d">
                                        Continuar <i className="bi bi-play-fill"></i>
                                    </Link>
                                    <Link to="/progress" className="btn-gamified btn-secondary-3d">
                                        Mi Progreso <i className="bi bi-bar-chart-fill"></i>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/register" className="btn-gamified btn-primary-3d">
                                        Empezar Gratis <i className="bi bi-rocket-takeoff-fill"></i>
                                    </Link>
                                    <Link to="/login" className="btn-gamified btn-secondary-3d">
                                        Ya tengo cuenta
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section (Bento Grid) */}
            <section className="section-padding bg-white-section">
                <div className="container">
                    <h2 className="section-title">¿Por qué LevelUp?</h2>
                    <p className="section-subtitle">
                        Diseñado para que no te aburras nunca mientras aprendes.
                    </p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <i className="bi bi-gift-fill feature-icon icon-free"></i>
                                </div>
                                <h3 className="feature-title">100% Gratis</h3>
                                <p className="feature-description">
                                    Sin suscripciones ni costos ocultos. Educación de calidad accesible para todos.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <i className="bi bi-controller feature-icon icon-games"></i>
                                </div>
                                <h3 className="feature-title">Juegos Interactivos</h3>
                                <p className="feature-description">
                                    Aprende a través de divertidos ejercicios diseñados para reforzar tu memoria.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <i className="bi bi-graph-up-arrow feature-icon icon-progress"></i>
                                </div>
                                <h3 className="feature-title">Tu Progreso</h3>
                                <p className="feature-description">
                                    Monitorea tus rachas y mejora en cada nivel con analíticas detalladas.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <i className="bi bi-book-half feature-icon icon-content"></i>
                                </div>
                                <h3 className="feature-title">A1 hasta C1</h3>
                                <p className="feature-description">
                                    Plan de estudios estructurado y completo desde nivel principiante hasta avanzado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Path Section */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title">Tu Ruta de Aprendizaje</h2>
                    <p className="section-subtitle">
                        Desbloquea niveles mientras mejoras tu inglés.
                    </p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/a1" className="level-card-landing w-100" style={{ '--glow-color': '#58CC02' }}>
                                <div className="level-badge-landing" style={{ backgroundColor: '#58CC02' }}>A1</div>
                                <div className="level-info-landing">
                                    <h4>Principiante</h4>
                                    <p>Comienza tu viaje con el vocabulario básico. 30 módulos.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/a2" className="level-card-landing w-100" style={{ '--glow-color': '#1CB0F6' }}>
                                <div className="level-badge-landing" style={{ backgroundColor: '#1CB0F6' }}>A2</div>
                                <div className="level-info-landing">
                                    <h4>Elemental</h4>
                                    <p>Construye sobre las bases con expresiones del día a día. 35 módulos.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/b1" className="level-card-landing w-100" style={{ '--glow-color': '#CE82FF' }}>
                                <div className="level-badge-landing" style={{ backgroundColor: '#CE82FF' }}>B1</div>
                                <div className="level-info-landing">
                                    <h4>Intermedio</h4>
                                    <p>Viaja y vuélvete un usuario independiente. 30 módulos.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/b2" className="level-card-landing w-100" style={{ '--glow-color': '#FF9600' }}>
                                <div className="level-badge-landing" style={{ backgroundColor: '#FF9600' }}>B2</div>
                                <div className="level-info-landing">
                                    <h4>Intermedio Alto</h4>
                                    <p>Alcanza la fluidez con interacciones espontáneas. 25 módulos.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/c1" className="level-card-landing w-100" style={{ '--glow-color': '#FF4B4B' }}>
                                <div className="level-badge-landing" style={{ backgroundColor: '#FF4B4B' }}>C1</div>
                                <div className="level-info-landing">
                                    <h4>Avanzado</h4>
                                    <p>Domina textos académicos y profesionales complejos. 21 módulos.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-white-section">
                <div className="container">
                    <h2 className="section-title">Nuestros Números</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">141</div>
                            <div className="stat-label">Temas Totales</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5</div>
                            <div className="stat-label">Niveles (A1-C1)</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">∞</div>
                            <div className="stat-label">Minijuegos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding cta-final-section">
                <div className="container text-center">
                    <h2 className="section-title">¿Listo para practicar?</h2>
                    <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                        Crea tu cuenta en segundos y empieza a aprender.
                    </p>
                    {user ? (
                        <Link to="/learn" className="btn-gamified btn-primary-3d">
                            Continuar Aprendiendo
                        </Link>
                    ) : (
                        <Link to="/register" className="btn-gamified btn-primary-3d">
                            Crear Cuenta Gratis
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
};

export default Landing;
