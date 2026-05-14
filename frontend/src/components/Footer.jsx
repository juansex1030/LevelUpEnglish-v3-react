import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="row gy-4 py-5">
                    <div className="col-lg-4">
                        <Link className="brand-logo mb-3 d-inline-block" to="/">
                            <div className="logo-icon-wrapper">
                                <i className="bi bi-rocket-takeoff-fill"></i>
                            </div>
                            <span className="brand-text">LevelUp<span className="brand-highlight">English</span></span>
                        </Link>
                        <p className="text-muted pe-lg-5">
                            We power your English learning with interactive tools, advanced theory, and immersive practice.
                        </p>
                        <div className="social-links d-flex gap-3 mt-3">
                            <a href="https://www.facebook.com/Lvupenglish" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-3 col-lg-2">
                        <h6 className="footer-title">Platform</h6>
                        <ul className="footer-links list-unstyled">
                            <li><Link to="/niveles/a1">A1 Level</Link></li>
                            <li><Link to="/niveles/a2">A2 Level</Link></li>
                            <li><Link to="/niveles/b1">B1 Level</Link></li>
                            <li><Link to="/niveles/b2">B2 Level</Link></li>
                            <li><Link to="/niveles/c1">C1 Level</Link></li>
                            <li><Link to="/practice-zone">Practice Zone</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-2">
                        <h6 className="footer-title">Resources</h6>
                        <ul className="footer-links list-unstyled">
                            <li><Link to="/diccionario">Dictionary</Link></li>
                            <li><Link to="/vocabulario">Vocabulary</Link></li>
                            <li><Link to="/progress">My Progress</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <h6 className="footer-title">Contact & Support</h6>
                        <p className="text-muted small mb-3">
                            Any questions, complaints, or suggestions? Write to us directly or use our support inbox.
                        </p>
                        <div className="contact-info">
                            <p className="mb-2">
                                <i className="bi bi-envelope-at-fill text-primary me-2"></i>
                                <a href="mailto:lvupenglishco@gmail.com" className="text-decoration-none email-link">
                                    lvupenglishco@gmail.com
                                </a>
                            </p>
                            <Link to="/support" className="btn btn-primary btn-sm mt-2 rounded-pill px-4">
                                Go to Support <i className="bi bi-arrow-right ms-1"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom py-4 border-top">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start text-muted small">
                            © {new Date().getFullYear()} LevelUpEnglish. All rights reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                            <Link to="#" className="text-muted small text-decoration-none me-3">Privacy</Link>
                            <Link to="#" className="text-muted small text-decoration-none">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
