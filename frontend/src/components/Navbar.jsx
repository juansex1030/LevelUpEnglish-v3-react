import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useAudioFeedback from '../hooks/useAudioFeedback';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(document.body.getAttribute('data-bs-theme') || 'light');
    const { playClick } = useAudioFeedback();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        playClick();
        const body = document.body;
        const isDark = body.getAttribute('data-bs-theme') === 'dark';
        if (isDark) {
            body.setAttribute('data-bs-theme', 'light');
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-bs-theme', 'dark');
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const handleLogout = () => {
        playClick();
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    const handleNavClick = () => {
        playClick();
        closeMenu();
    };

    return (
        <>
            {isMenuOpen && <div className="mobile-menu-backdrop" onClick={closeMenu} />}

            <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <Link className="brand-logo" to="/" onClick={handleNavClick}>
                        <div className="logo-icon-wrapper">
                            <i className="bi bi-rocket-takeoff-fill"></i>
                        </div>
                        <span className="brand-text">LevelUp<span className="brand-highlight">English</span></span>
                    </Link>
                </div>

                {user && (
                    <div className="mobile-drawer-user">
                        <div className="avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            {(!user.avatar || user.avatar === 'default') ? (
                                user.username ? user.username.charAt(0).toUpperCase() : 'U'
                            ) : user.avatar.startsWith('http') ? (
                                <img src={user.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                user.avatar
                            )}
                        </div>
                        <div className="user-details">
                            <p className="user-name">{user.username || 'User'}</p>
                            <p className="user-email">{user.email}</p>
                        </div>
                    </div>
                )}

                <div className="mobile-drawer-links">
                    <Link className={`mobile-nav-link ${location.pathname === '/learn' ? 'active' : ''}`} to="/learn" onClick={closeMenu}>
                        <i className="bi bi-journal-text"></i> All Levels
                    </Link>
                    <Link className={`mobile-nav-link ${location.pathname === '/practice-zone' ? 'active' : ''}`} to="/practice-zone" onClick={closeMenu}>
                        <i className="bi bi-controller"></i> Practice Zone
                    </Link>
                    <Link className={`mobile-nav-link ${location.pathname === '/diccionario' ? 'active' : ''}`} to="/diccionario" onClick={closeMenu}>
                        <i className="bi bi-book"></i> Dictionary
                    </Link>
                    <Link className={`mobile-nav-link ${location.pathname === '/vocabulario' ? 'active' : ''}`} to="/vocabulario" onClick={closeMenu}>
                        <i className="bi bi-translate"></i> Vocabulary
                    </Link>
                </div>

                <div className="mobile-drawer-footer">
                    {user ? (
                        <>
                            <Link className="mobile-nav-link" to="/progress" onClick={closeMenu}>
                                <i className="bi bi-bar-chart-fill"></i> My Progress
                            </Link>
                            <Link className="mobile-nav-link" to="/profile" onClick={closeMenu}>
                                <i className="bi bi-person-fill"></i> Profile
                            </Link>
                            <button className="mobile-nav-link logout-btn" onClick={handleLogout}>
                                <i className="bi bi-box-arrow-right"></i> Logout
                            </button>
                        </>
                    ) : (
                        <div className="auth-buttons-mobile">
                            <Link className="btn-login-mobile" to="/login" onClick={closeMenu}>Login</Link>
                            <Link className="btn-register-mobile" to="/register" onClick={closeMenu}>Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>

            <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    
                    <div className="mobile-controls">
                        <button className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} onClick={() => { playClick(); setIsMenuOpen(!isMenuOpen); }}>
                            <span></span><span></span><span></span>
                        </button>
                    </div>

                    <Link className="brand-logo" to="/" onClick={handleNavClick}>
                        <div className="logo-icon-wrapper">
                            <i className="bi bi-rocket-takeoff-fill"></i>
                        </div>
                        <span className="brand-text">LevelUp<span className="brand-highlight">English</span></span>
                    </Link>

                    <div className="nav-menu">
                        <ul className="nav-links">
                            <li>
                                <Link className={`nav-link ${location.pathname === '/learn' ? 'active' : ''}`} to="/learn" onClick={playClick}>
                                    Learn
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/practice-zone' ? 'active' : ''}`} to="/practice-zone" onClick={playClick}>
                                    Practice
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/diccionario' ? 'active' : ''}`} to="/diccionario" onClick={playClick}>
                                    Dictionary
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/vocabulario' ? 'active' : ''}`} to="/vocabulario" onClick={playClick}>
                                    Vocabulary
                                </Link>
                            </li>
                        </ul>

                        <div className="nav-actions">
                            <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme">
                                {theme === 'dark' ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
                            </button>

                            {user ? (
                                <div className="user-dropdown-container">
                                    <button className="user-profile-btn">
                                        <div className="avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                            {(!user.avatar || user.avatar === 'default') ? (
                                                user.username ? user.username.charAt(0).toUpperCase() : 'U'
                                            ) : user.avatar.startsWith('http') ? (
                                                <img src={user.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                user.avatar
                                            )}
                                        </div>
                                        <span>{user.username || 'User'}</span>
                                        <i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="user-dropdown-menu">
                                        <div className="dropdown-header">
                                            <p className="user-email">{user.email}</p>
                                        </div>
                                        <Link className="dropdown-item" to="/progress" onClick={handleNavClick}>
                                            <i className="bi bi-bar-chart-fill"></i> My Progress
                                        </Link>
                                        <Link className="dropdown-item" to="/profile" onClick={handleNavClick}>
                                            <i className="bi bi-person-fill"></i> Profile
                                        </Link>
                                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                                            <i className="bi bi-box-arrow-right"></i> Logout
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="auth-buttons">
                                    <Link className="btn-login" to="/login" onClick={playClick}>
                                        Login
                                    </Link>
                                    <Link className="btn-register" to="/register" onClick={playClick}>
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
