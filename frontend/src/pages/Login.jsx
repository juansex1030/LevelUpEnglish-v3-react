import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import apiClient from '../api/apiClient';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    // --- LOGIN STATES ---
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // --- FORGOT PASSWORD STATES ---
    const [viewMode, setViewMode] = useState('login'); // 'login' | 'forgotEmail' | 'forgotOtp'
    const [resetEmail, setResetEmail] = useState('');
    const [resetOtp, setResetOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);

        try {
            const response = await apiClient.post('/auth/login', formData);
            login(response.data.user);
            sessionStorage.setItem('show_welcome', 'true');
            navigate('/learn');
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.msg || err.response?.data?.error || 'Inicio de sesión fallido. Verifica tu correo y contraseña.');
            setLoading(false);
        }
    };

    const handleRequestOtp = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);
        try {
            const res = await apiClient.post('/auth/forgot-password', { email: resetEmail });
            setSuccessMsg(res.data.msg);
            setViewMode('forgotOtp');
        } catch (err) {
            setError(err.response?.data?.msg || 'Error al solicitar el código. Intente de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);
        try {
            const res = await apiClient.post('/auth/reset-password', { 
                email: resetEmail, 
                otp: resetOtp, 
                newPassword 
            });
            setSuccessMsg(res.data.msg);
            setViewMode('login');
            // Clean state
            setResetEmail('');
            setResetOtp('');
            setNewPassword('');
        } catch (err) {
            setError(err.response?.data?.msg || 'Error al restablecer la contraseña.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSuccess = async (credentialResponse) => {
        setLoading(true);
        setError('');
        try {
            const res = await apiClient.post('/auth/google', {
                token: credentialResponse.credential
            });
            login(res.data.user);
            sessionStorage.setItem('show_welcome', 'true');
            navigate('/learn');
        } catch (err) {
            console.error("Google login failed:", err);
            setError(err.response?.data?.msg || 'Error al iniciar sesión con Google.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleError = () => {
        setError('Error al conectar con Google. Revisa tu conexión.');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-5">

                            {error && <div className="alert alert-danger">{error}</div>}
                            {successMsg && <div className="alert alert-success">{successMsg}</div>}

                            {/* ======================================= */}
                            {/*             MODO: LOGIN                 */}
                            {/* ======================================= */}
                            {viewMode === 'login' && (
                                <>
                                    <h2 className="text-center mb-4">Iniciar Sesión</h2>
                                    <p className="text-center text-muted mb-4">Bienvenido de nuevo</p>

                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required 
                                                autoFocus 
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="password" className="form-label">Contraseña</label>
                                                <a href="#" className="small text-decoration-none" onClick={(e) => { e.preventDefault(); setViewMode('forgotEmail'); setError(''); setSuccessMsg(''); }}>
                                                    ¿Olvidaste tu contraseña?
                                                </a>
                                            </div>
                                            <div className="input-group">
                                                <input 
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="form-control" 
                                                    id="password" 
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    tabIndex={-1}
                                                    title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                                >
                                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mb-4 form-check">
                                            <input 
                                                type="checkbox" 
                                                className="form-check-input" 
                                                id="remember" 
                                                name="remember"
                                                checked={formData.remember}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="remember">Recordarme</label>
                                        </div>

                                        <div className="d-grid mb-3">
                                            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                                {loading ? 'Ingresando...' : 'Ingresar'}
                                            </button>
                                        </div>
                                    </form>

                                    <hr className="my-4" />

                                    <div className="text-center mb-3">
                                        <small className="text-muted">¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></small>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <GoogleLogin
                                            onSuccess={handleGoogleSuccess}
                                            onError={handleGoogleError}
                                            useOneTap
                                            theme="outline"
                                            size="large"
                                            text="continue_with"
                                            shape="pill"
                                        />
                                    </div>
                                </>
                            )}

                            {/* ======================================= */}
                            {/*      MODO: PEDIR CÓDIGO EMAIL           */}
                            {/* ======================================= */}
                            {viewMode === 'forgotEmail' && (
                                <>
                                    <h2 className="text-center mb-4">Recuperar Contraseña</h2>
                                    <p className="text-center text-muted mb-4">Ingresa tu correo para recibir un código de verificación.</p>

                                    <form onSubmit={handleRequestOtp}>
                                        <div className="mb-4">
                                            <label className="form-label">Correo Electrónico</label>
                                            <input 
                                                type="email" 
                                                className="form-control form-control-lg" 
                                                value={resetEmail}
                                                onChange={(e) => setResetEmail(e.target.value)}
                                                required 
                                                autoFocus 
                                            />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                                {loading ? 'Enviando...' : 'Enviar Código OTP'}
                                            </button>
                                            <button type="button" className="btn btn-light" onClick={() => { setViewMode('login'); setError(''); setSuccessMsg(''); }}>
                                                Volver al Inicio
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}

                            {/* ======================================= */}
                            {/*      MODO: VERIFICAR OTP & RESET        */}
                            {/* ======================================= */}
                            {viewMode === 'forgotOtp' && (
                                <>
                                    <h2 className="text-center mb-4">Verificar Código</h2>
                                    <p className="text-center text-muted mb-4">Hemos enviado un código a <strong>{resetEmail}</strong></p>

                                    <form onSubmit={handleResetPassword}>
                                        <div className="mb-3">
                                            <label className="form-label">Código OTP (6 dígitos)</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-lg text-center fw-bold" 
                                                value={resetOtp}
                                                onChange={(e) => setResetOtp(e.target.value)}
                                                placeholder="123456"
                                                maxLength="6"
                                                required 
                                                autoFocus
                                                style={{ letterSpacing: '5px' }}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Nueva Contraseña</label>
                                            <div className="input-group">
                                                <input 
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="form-control form-control-lg" 
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    required 
                                                    minLength="6"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    tabIndex={-1}
                                                >
                                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-success btn-lg" disabled={loading}>
                                                {loading ? 'Procesando...' : 'Restablecer Contraseña'}
                                            </button>
                                            <button type="button" className="btn btn-light" onClick={() => { setViewMode('forgotEmail'); setError(''); setSuccessMsg(''); }}>
                                                Reenviar Código
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
