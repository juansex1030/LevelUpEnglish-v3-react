import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import apiClient from '../api/apiClient';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await apiClient.post('/auth/login', formData);
            
            // Critical check: Ensure only admins can log into this panel
            if (!response.data.user.is_admin) {
                setError('Acceso denegado. No tienes permisos de administrador.');
                setLoading(false);
                return;
            }

            login(response.data.user);
            navigate('/');
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.msg || err.response?.data?.error || 'Inicio de sesión fallido. Verifica tus credenciales.');
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0" style={{background: 'var(--color-fondo-secundario, #1a1a1a)', color: 'var(--color-texto-principal, #fff)'}}>
                        <div className="card-body p-5">
                            <div className="text-center mb-4">
                                <h1 className="fw-bold"><i className="bi bi-shield-lock text-warning"></i></h1>
                                <h2>Admin Portal</h2>
                                <p className="text-muted">Acceso exclusivo para administradores</p>
                            </div>

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
                                    <input 
                                        type="password"
                                        className="form-control" 
                                        id="password" 
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="d-grid mt-4">
                                    <button type="submit" className="btn btn-warning btn-lg fw-bold" disabled={loading}>
                                        {loading ? 'Verificando...' : 'Acceder al Panel'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
