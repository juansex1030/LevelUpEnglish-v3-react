import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import API_URL from '../api/config';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/auth/login`, formData);
            login(response.data.token, response.data.user);
            sessionStorage.setItem('show_welcome', 'true');
            navigate('/learn');
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.msg || err.response?.data?.error || 'Inicio de sesión fallido. Verifica tu correo y contraseña.');
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4">Iniciar Sesión</h2>
                            <p className="text-center text-muted mb-4">Bienvenido de nuevo</p>

                            {error && <div className="alert alert-danger">{error}</div>}

                            <form onSubmit={handleSubmit}>
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
                                    <label htmlFor="password" className="form-label">Contraseña</label>
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

                                <div className="mb-3 form-check">
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

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                        {loading ? 'Ingresando...' : 'Ingresar'}
                                    </button>
                                </div>
                            </form>

                            <hr className="my-4" />

                            <div className="text-center mb-3">
                                <small className="text-muted">¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></small>
                            </div>

                            {/* Google OAuth button placeholder */}
                            <div className="d-grid">
                                <button type="button" className="btn btn-outline-danger" onClick={() => alert('Pronto: Inicio con Google / API')}>
                                    <i className="bi bi-google me-2"></i>
                                    Continuar con Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
