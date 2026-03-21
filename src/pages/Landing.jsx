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
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <i className="bi bi-stars me-2"></i>100% Free · 141 Topics · A1 to C1
                        </div>
                        <h1 className="hero-title">Master English from Beginner to Advanced</h1>
                        <p className="hero-subtitle">
                            Learn English with interactive lessons, fun games, and personalized progress tracking.
                            Your complete journey from A1 to C1, completely free.
                        </p>
                        <div className="cta-buttons">
                            {user ? (
                                <>
                                    <Link to="/learn" className="cta-button-primary">
                                        <i className="bi bi-play-circle-fill"></i> Continue Learning
                                    </Link>
                                    <Link to="/learn" className="cta-button-secondary">
                                        <i className="bi bi-graph-up"></i> View My Progress
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/register" className="cta-button-primary">
                                        <i className="bi bi-rocket-takeoff-fill"></i> Start for Free
                                    </Link>
                                    <Link to="/login" className="cta-button-secondary">
                                        <i className="bi bi-box-arrow-in-right"></i> Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-fondo)' }}>
                <div className="container">
                    <h2 className="section-title">Why LevelUpEnglish?</h2>
                    <p className="section-subtitle">
                        Learn English effectively with our platform designed for your success
                    </p>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <i className="bi bi-gift-fill feature-icon"></i>
                                <h3 className="feature-title">100% Free</h3>
                                <p className="feature-description">
                                    No hidden costs or subscriptions. Quality education accessible to everyone.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <i className="bi bi-controller feature-icon"></i>
                                <h3 className="feature-title">Interactive Games</h3>
                                <p className="feature-description">
                                    Learn through fun exercises designed to reinforce concepts.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <i className="bi bi-graph-up-arrow feature-icon"></i>
                                <h3 className="feature-title">Progress Tracking</h3>
                                <p className="feature-description">
                                    Monitor your improvement across all levels with detailed analytics.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="feature-card">
                                <i className="bi bi-book-half feature-icon"></i>
                                <h3 className="feature-title">Complete Content</h3>
                                <p className="feature-description">
                                    Structured curriculum covering A1 (Beginner) to C1 (Advanced).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Path Section */}
            <section className="section-padding levels-section">
                <div className="container">
                    <h2 className="section-title">Your Learning Path</h2>
                    <p className="section-subtitle">
                        Progress from basics to advanced mastery with our structured plan
                    </p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/a1" className="level-card-landing w-100" style={{ '--glow-color': '#FBBF24' }}>
                                <div className="level-badge-landing" style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)' }}>A1</div>
                                <div className="level-info-landing">
                                    <h4>Beginner</h4>
                                    <p>Start your journey with basic conversation skills. 30 topics.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/a2" className="level-card-landing w-100" style={{ '--glow-color': '#2DD4BF' }}>
                                <div className="level-badge-landing" style={{ background: 'linear-gradient(135deg, #2DD4BF, #14B8A6)' }}>A2</div>
                                <div className="level-info-landing">
                                    <h4>Elementary</h4>
                                    <p>Build on the basics with everyday expressions. 35 topics.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/b1" className="level-card-landing w-100" style={{ '--glow-color': '#A78BFA' }}>
                                <div className="level-badge-landing" style={{ background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)' }}>B1</div>
                                <div className="level-info-landing">
                                    <h4>Intermediate</h4>
                                    <p>Travel and become an independent user. 30 topics.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/b2" className="level-card-landing w-100" style={{ '--glow-color': '#38BDF8' }}>
                                <div className="level-badge-landing" style={{ background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)' }}>B2</div>
                                <div className="level-info-landing">
                                    <h4>Upper Intermediate</h4>
                                    <p>Achieve fluency with spontaneous texts and interactions. 25 topics.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex">
                            <Link to="/niveles/c1" className="level-card-landing w-100" style={{ '--glow-color': '#34D399' }}>
                                <div className="level-badge-landing" style={{ background: 'linear-gradient(135deg, #34D399, #10B981)' }}>C1</div>
                                <div className="level-info-landing">
                                    <h4>Advanced</h4>
                                    <p>Master complex academic and professional texts. 21 topics.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-fondo)' }}>
                <div className="container">
                    <h2 className="section-title">Comprehensive Content</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">141</div>
                            <div className="stat-label">Total Topics</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5</div>
                            <div className="stat-label">Levels (A1-C1)</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">∞</div>
                            <div className="stat-label">Interactive Games</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Always Free</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding levels-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="section-title">Our Mission</h2>
                            <div style={{ fontSize: '1.2rem', color: 'var(--color-texto-secundario)', lineHeight: 1.8, textAlign: 'center' }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    LevelUpEnglish was created with a simple but powerful vision:
                                    <strong style={{ color: 'var(--color-texto-principal)' }}> to make quality English education accessible to everyone, everywhere</strong>.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    We believe that language should never be a barrier to opportunities. Whether you are a student,
                                    professional, or lifelong learner, you deserve access to comprehensive, engaging, and
                                    effective English instruction without breaking the bank.
                                </p>
                                <p>
                                    Through interactive games, structured lessons, and personalized progress tracking, 
                                    we've built a platform that makes learning English not only effective, but genuinely enjoyable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding cta-final-section">
                <div className="container text-center">
                    <h2 className="section-title">Ready to Start Your Journey?</h2>
                    <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                        Start learning today. No credit card required.
                    </p>
                    {user ? (
                        <Link to="/learn" className="cta-button-primary">
                            <i className="bi bi-play-circle-fill"></i> Go to Levels
                        </Link>
                    ) : (
                        <Link to="/register" className="cta-button-primary">
                            <i className="bi bi-person-plus-fill"></i> Create Free Account
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
};

export default Landing;
