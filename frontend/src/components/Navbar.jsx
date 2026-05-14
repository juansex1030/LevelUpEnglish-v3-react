import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(document.body.getAttribute('data-bs-theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 60) {
                setScrolled(true);
            } else if (offset < 10) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const body = document.body;
        const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            body.setAttribute('data-bs-theme', 'light');
            setTheme('light');
        } else {
            body.classList.remove('light-mode');
            body.setAttribute('data-bs-theme', 'dark');
            setTheme('dark');
        }
        localStorage.setItem('theme', currentTheme);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="mobile-controls left">
                    <button 
                        className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Logo */}
                <Link className="brand-logo" to="/" onClick={closeMenu}>
                    <div className="logo-icon-wrapper">
                        <i className="bi bi-rocket-takeoff-fill"></i>
                    </div>
                    <span className="brand-text">LevelUp<span className="brand-highlight">English</span></span>
                </Link>

                {/* Mobile Theme Toggle (Positioned via CSS in mobile, hidden in desktop) */}
                <button className="theme-toggle-btn mobile-theme" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? <i className="bi bi-sun-fill text-warning"></i> : <i className="bi bi-moon-stars-fill text-primary"></i>}
                </button>

                {/* Navigation Links */}
                <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li>
                            <Link className={`nav-link ${location.pathname === '/learn' ? 'active' : ''}`} to="/learn" onClick={closeMenu}>
                                <i className="bi bi-grid-fill nav-icon"></i> All Topics
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname === '/practice-zone' ? 'active' : ''} text-warning fw-bold`} to="/practice-zone" onClick={closeMenu} style={{ letterSpacing: '0.5px' }}>
                                <span className="nav-emoji">🎯</span> Practice Zone
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname.includes('/a1') ? 'active' : ''}`} to="/niveles/a1" onClick={closeMenu}>
                                <span className="level-dot a1"></span> A1
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname.includes('/a2') ? 'active' : ''}`} to="/niveles/a2" onClick={closeMenu}>
                                <span className="level-dot a2"></span> A2
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname.includes('/b1') ? 'active' : ''}`} to="/niveles/b1" onClick={closeMenu}>
                                <span className="level-dot b1"></span> B1
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname.includes('/b2') ? 'active' : ''}`} to="/niveles/b2" onClick={closeMenu}>
                                <span className="level-dot b2"></span> B2
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname.includes('/c1') ? 'active' : ''}`} to="/niveles/c1" onClick={closeMenu}>
                                <span className="level-dot c1"></span> C1
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname === '/diccionario' ? 'active' : ''}`} to="/diccionario" onClick={closeMenu}>
                                <i className="bi bi-book-half nav-icon"></i> Dictionary
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${location.pathname === '/vocabulario' ? 'active' : ''}`} to="/vocabulario" onClick={closeMenu}>
                                <i className="bi bi-card-list nav-icon"></i> Vocabulary
                            </Link>
                        </li>
                    </ul>

                    {/* Right Side Actions */}
                    <div className="nav-actions">
                        <button className="theme-toggle-btn desktop-theme" onClick={toggleTheme} aria-label="Toggle theme" title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
                            {theme === 'dark' ? <i className="bi bi-sun-fill text-warning"></i> : <i className="bi bi-moon-stars-fill text-primary"></i>}
                        </button>

                        {user ? (
                            <div className="user-dropdown-container">
                                <button className="user-profile-btn" style={{ fontSize: user?.avatar && user.avatar !== 'default' ? '1.5rem' : 'inherit' }}>
                                    {user.avatar && user.avatar !== 'default' ? (
                                        user.avatar.startsWith('http') ? (
                                            <div className="avatar-img-wrapper" style={{ marginRight: '8px' }}>
                                                <img 
                                                    src={user.avatar} 
                                                    alt={user.username} 
                                                    className="rounded-circle shadow-sm"
                                                    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ marginRight: '8px', lineHeight: 1 }}>{user.avatar}</div>
                                        )
                                    ) : (
                                        <div className="avatar">
                                            {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
                                        </div>
                                    )}
                                    <span className="username">{user.username || 'User'}</span>
                                    <i className="bi bi-chevron-down ms-1 text-sm"></i>
                                </button>
                                <div className="user-dropdown-menu">
                                    <div className="dropdown-header">
                                        <p className="user-email">{user.email}</p>
                                    </div>
                                    <Link className="dropdown-item" to="/profile" onClick={closeMenu}>
                                        <i className="bi bi-person text-primary"></i> Mi Perfil
                                    </Link>
                                    <Link className="dropdown-item" to="/progress" onClick={closeMenu}>
                                        <i className="bi bi-graph-up text-success"></i> My Progress
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right"></i> Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link className="btn-login" to="/login" onClick={closeMenu}>
                                    Login
                                </Link>
                                <Link className="btn-register" to="/register" onClick={closeMenu}>
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
