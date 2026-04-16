import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

const Register = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (formData.password !== formData.confirm_password) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        setLoading(true);

        try {
            await apiClient.post('/auth/register', formData);
            setLoading(false);
            // After register, the user is already logged in via cookie in the new backend logic.
            // We can redirect to /learn or stay at /login. Let's redirect to /login for clarity
            // or just trigger the auth context. Let's stay with /login for now as per current flow.
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.msg || err.response?.data?.error || 'Error al registrarse. Intenta nuevamente.');
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4">Crear Cuenta</h2>
                            <p className="text-center text-muted mb-4">Únete a LevelUpEnglish</p>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Usuario</label>
                                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                    <small className="text-muted">Mínimo 6 caracteres</small>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirm_password" className="form-label">Confirmar Contraseña</label>
                                    <input type="password" className="form-control" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                        {loading ? 'Registrando...' : 'Registrarse'}
                                    </button>
                                </div>
                            </form>
                            <hr className="my-4" />
                            <div className="text-center">
                                <small className="text-muted">¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
