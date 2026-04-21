import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import apiClient from '../api/apiClient';

const Profile = () => {
    const { user, login } = useAuth();
    
    // Fallback if not loaded yet
    const initialUsername = user?.username || '';
    
    const [formData, setFormData] = useState({
        newUsername: initialUsername,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        avatar: user?.avatar || 'default'
    });

    const PREDEFINED_AVATARS = ['🐶', '🐱', '🦊', '🐼', '🐨', '🦁', '🦉', '🚀', '🛸', '🎮', '💎', '👑'];
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);
    
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);
    const [cancelStatus, setCancelStatus] = useState({ loading: false, msg: '', type: '' });

    const handleCancelSubscription = async () => {
        const confirmed = window.confirm(
            '¿Estás seguro de que deseas CANCELAR la renovación de tu suscripción Premium?\n\n' +
            '• Tu acceso Premium seguirá activo hasta la fecha de vencimiento ya pagada.\n' +
            '• No se realizarán cobros adicionales.\n' +
            '• Si tienes un reclamo de reembolso, contáctanos primero.'
        );
        if (!confirmed) return;
        setCancelStatus({ loading: true, msg: '', type: '' });
        try {
            const res = await apiClient.delete('/auth/subscription');
            // Do NOT revoke is_premium — user keeps access until premium_until expires
            const expiryMsg = res.data.premium_until
                ? ` Tu acceso termina el ${new Date(res.data.premium_until).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}.`
                : '';
            setCancelStatus({ loading: false, msg: res.data.msg + expiryMsg, type: 'success' });
        } catch (err) {
            setCancelStatus({ loading: false, msg: err.response?.data?.msg || 'Error al cancelar. Intenta más tarde.', type: 'danger' });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAvatarSelect = (emoji) => {
        setFormData({ ...formData, avatar: emoji });
        setIsEditingAvatar(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', msg: '' });

        if (formData.newPassword && formData.newPassword !== formData.confirmNewPassword) {
            return setStatus({ type: 'danger', msg: 'Las contraseñas nuevas no coinciden' });
        }

        if (!formData.currentPassword) {
            return setStatus({ type: 'warning', msg: 'Debes ingresar tu contraseña actual para guardar cambios' });
        }

        try {
            setLoading(true);
            const response = await apiClient.put('/auth/profile', {
                newUsername: formData.newUsername,
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
                avatar: formData.avatar
            });

            setStatus({ type: 'success', msg: response.data.msg });
            
            // Update context with new user data
            if (response.data.user) {
                login(response.data.user);
            }
            
            // Clear passwords
            setFormData({ ...formData, currentPassword: '', newPassword: '', confirmNewPassword: '' });

        } catch (error) {
            setStatus({ 
                type: 'danger', 
                msg: error.response?.data?.msg || 'Error al actualizar el perfil' 
            });
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    const initials = user.username ? user.username.substring(0, 2).toUpperCase() : 'US';
    const displayAvatar = formData.avatar === 'default' ? initials : formData.avatar;

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 mt-4">
                    <div className="card shadow border-0" style={{ borderRadius: '1rem', overflow: 'hidden', backgroundColor: 'var(--color-fondo-primario)' }}>
                        
                        <div className="card-header text-center pt-5 pb-4 border-bottom-0 position-relative" style={{ backgroundColor: 'var(--color-fondo-primario)' }}>
                            <div className="position-absolute w-100" style={{ top: 0, left: 0, height: '80px', background: 'linear-gradient(135deg, var(--acento-primario) 0%, var(--acento-secundario) 100%)' }}></div>
                            
                            <div className="position-relative d-inline-block mx-auto mb-3">
                                <div className="d-flex align-items-center justify-content-center shadow" 
                                    style={{ 
                                        width: '100px', 
                                        height: '100px', 
                                        fontSize: formData.avatar === 'default' ? '2.5rem' : '3.5rem', 
                                        fontWeight: '800',
                                        backgroundColor: 'var(--color-fondo-secundario)',
                                        color: 'var(--acento-primario)',
                                        borderRadius: '50%',
                                        marginTop: '-10px',
                                        border: '4px solid var(--color-fondo-primario)',
                                        lineHeight: 1
                                    }}>
                                    {formData.avatar === 'default' ? (
                                        initials
                                    ) : (
                                        formData.avatar.startsWith('http') ? (
                                            <img 
                                                src={formData.avatar} 
                                                alt={user.username} 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    borderRadius: '50%', 
                                                    objectFit: 'cover' 
                                                }} 
                                            />
                                        ) : (
                                            formData.avatar
                                        )
                                    )}
                                </div>
                                
                                <button 
                                    className="btn btn-sm btn-light position-absolute rounded-circle shadow-sm"
                                    onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                                    style={{ 
                                        bottom: '0', 
                                        right: '0', 
                                        width: '32px', 
                                        height: '32px', 
                                        padding: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--acento-primario)',
                                        border: '2px solid var(--color-fondo-primario)',
                                        zIndex: 10
                                    }}
                                    title="Cambiar Foto de Perfil"
                                >
                                    <i className="bi bi-pencil-fill" style={{ fontSize: '0.8rem' }}></i>
                                </button>
                            </div>

                            {isEditingAvatar && (
                                <div className="p-3 mb-4 rounded shadow-sm mx-auto" style={{ backgroundColor: 'var(--color-fondo-secundario)', border: '1px solid var(--color-borde)', maxWidth: '300px', animation: 'fadeIn 0.2s ease' }}>
                                    <p className="small mb-2 fw-bold text-muted">SELECCIONA UN AVATAR</p>
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: '40px', height: '40px', fontSize: '0.9rem' }}
                                            onClick={() => handleAvatarSelect('default')}
                                            title="Usar iniciales"
                                        >
                                            {initials.substring(0,1)}
                                        </button>
                                        {PREDEFINED_AVATARS.map((emoji, idx) => (
                                            <button 
                                                key={idx}
                                                type="button" 
                                                className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ width: '40px', height: '40px', fontSize: '1.2rem', padding: 0, backgroundColor: 'transparent', border: '1px solid var(--color-borde)' }}
                                                onClick={() => handleAvatarSelect(emoji)}
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                    <button className="btn btn-sm btn-link text-muted mt-2 text-decoration-none" onClick={() => setIsEditingAvatar(false)}>Cerrar</button>
                                </div>
                            )}

                            <h3 className="mb-1 fw-bold" style={{ color: 'var(--color-texto-principal)' }}>{user.username}</h3>
                            <p className="mb-0" style={{ color: 'var(--color-texto-secundario)' }}>{user.email}</p>
                            {user.is_admin && <span className="badge bg-danger mt-2 px-3 py-2 rounded-pill shadow-sm"><i className="bi bi-shield-lock me-1"></i> Administrador</span>}
                        </div>

                        <div className="card-body p-4 p-md-5" style={{ backgroundColor: 'var(--color-fondo-secundario)' }}>
                            <h5 className="mb-4 fw-bold" style={{ color: 'var(--color-texto-principal)' }}>Editar Perfil y Seguridad</h5>

                            {status.msg && (
                                <div className={`alert alert-${status.type} alert-dismissible fade show shadow-sm`} role="alert" style={{ borderRadius: '0.5rem' }}>
                                    {status.type === 'success' ? <i className="bi bi-check-circle-fill me-2"></i> : <i className="bi bi-exclamation-triangle-fill me-2"></i>}
                                    {status.msg}
                                    <button type="button" className="btn-close" onClick={() => setStatus({ type: '', msg: '' })}></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label fw-bold small" style={{ color: 'var(--color-texto-secundario)' }}>NOMBRE DE USUARIO</label>
                                    <div className="input-group">
                                        <span className="input-group-text border-end-0" style={{ backgroundColor: 'transparent', borderColor: 'var(--color-borde)', color: 'var(--color-texto-secundario)' }}><i className="bi bi-person"></i></span>
                                        <input 
                                            type="text" 
                                            className="form-control border-start-0 py-2" 
                                            name="newUsername" 
                                            value={formData.newUsername} 
                                            onChange={handleChange}
                                            style={{ backgroundColor: 'transparent', borderColor: 'var(--color-borde)', color: 'var(--color-texto-principal)', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>

                                <hr className="my-4" style={{ borderColor: 'var(--color-borde)' }} />
                                <h6 className="fw-bold mb-3 small" style={{ color: 'var(--color-texto-secundario)' }}>CAMBIAR CONTRASEÑA (OPCIONAL)</h6>

                                <div className="mb-3">
                                    <label className="form-label small" style={{ color: 'var(--color-texto-secundario)' }}>NUEVA CONTRASEÑA</label>
                                    <div className="input-group">
                                        <span className="input-group-text border-end-0" style={{ backgroundColor: 'transparent', borderColor: 'var(--color-borde)', color: 'var(--color-texto-secundario)' }}><i className="bi bi-key"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control border-start-0 py-2" 
                                            name="newPassword" 
                                            value={formData.newPassword} 
                                            onChange={handleChange}
                                            placeholder="Dejar en blanco para no cambiarla"
                                            style={{ backgroundColor: 'transparent', borderColor: 'var(--color-borde)', color: 'var(--color-texto-principal)', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small" style={{ color: 'var(--color-texto-secundario)' }}>CONFIRMAR NUEVA CONTRASEÑA</label>
                                    <div className="input-group">
                                        <span className="input-group-text border-end-0" style={{ backgroundColor: 'transparent', borderColor: 'var(--color-borde)', color: 'var(--color-texto-secundario)' }}><i className="bi bi-key-fill"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control border-start-0 py-2" 
                                            name="confirmNewPassword" 
                                            value={formData.confirmNewPassword} 
                                            onChange={handleChange}
                                            placeholder="Confirma la nueva contraseña"
                                            style={{ backgroundColor: 'transparent', borderColor: 'var(--color-borde)', color: 'var(--color-texto-principal)', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>

                                <div className="p-3 mb-4 rounded" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                                    <div className="d-flex align-items-center text-warning" style={{ color: '#D97706' }}>
                                        <i className="bi bi-shield-check fs-4 me-3" style={{ color: '#D97706' }}></i>
                                        <small className="fw-medium">Por seguridad, se requiere tu contraseña actual para guardar cualquier cambio.</small>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold" style={{ color: 'var(--color-texto-principal)' }}>CONTRASEÑA ACTUAL <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text border-warning text-warning" style={{ backgroundColor: 'transparent' }}><i className="bi bi-lock-fill"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control border-warning py-2 shadow-sm" 
                                            name="currentPassword" 
                                            value={formData.currentPassword} 
                                            onChange={handleChange}
                                            placeholder="Ingresa tu contraseña actual"
                                            required
                                            style={{ backgroundColor: 'transparent', color: 'var(--color-texto-principal)', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn w-100 py-3 fw-bold text-white shadow-sm mt-2" 
                                    disabled={loading}
                                    style={{ 
                                        backgroundColor: 'var(--acento-primario)', 
                                        borderRadius: '0.75rem',
                                        transition: 'all 0.2s ease',
                                        border: 'none'
                                    }}
                                >
                                    {loading ? (
                                        <><span className="spinner-border spinner-border-sm me-2"></span>Guardando...</>
                                    ) : (
                                        <><i className="bi bi-save me-2"></i>Guardar Cambios</>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* === SUBSCRIPTION STATUS SECTION === */}
                        <div className="card-footer p-4 p-md-5 border-top" style={{ backgroundColor: 'var(--color-fondo-primario)', borderColor: 'var(--color-borde)' }}>
                            <h5 className="mb-3 fw-bold" style={{ color: 'var(--color-texto-principal)' }}>
                                <i className="bi bi-award-fill me-2" style={{ color: '#F59E0B' }}></i>Mi Suscripción
                            </h5>

                            {user.is_premium ? (
                                <>
                                    <div className="p-3 rounded-3 mb-3" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(217,119,6,0.08))', border: '1px solid rgba(245,158,11,0.3)' }}>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="fw-bold" style={{ color: '#D97706' }}>🏅 Plan Premium Activo</span>
                                            <span className="badge" style={{ backgroundColor: '#F59E0B', color: '#fff', fontSize: '0.75rem' }}>PRO</span>
                                        </div>
                                        {user.premium_until && (
                                            <p className="small mb-0" style={{ color: 'var(--color-texto-secundario)' }}>
                                                Vence el <strong style={{ color: 'var(--color-texto-principal)' }}>
                                                    {new Date(user.premium_until).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </strong>
                                            </p>
                                        )}
                                    </div>

                                    {cancelStatus.msg && (
                                        <div className={`alert alert-${cancelStatus.type} small py-2 px-3 rounded-3 mb-3`}>{cancelStatus.msg}</div>
                                    )}

                                    <div className="p-3 rounded-3 mb-3" style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
                                        <p className="small mb-0" style={{ color: 'var(--color-texto-secundario)' }}>
                                            <i className="bi bi-info-circle me-1 text-danger"></i>
                                            Cancelar tu suscripción <strong>no genera un reembolso automático</strong>. Si tienes un problema con tu pago, <a href="/support" style={{ color: 'var(--acento-primario)' }}>contáctanos primero</a>.
                                        </p>
                                    </div>

                                    <button
                                        className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold"
                                        onClick={handleCancelSubscription}
                                        disabled={cancelStatus.loading}
                                    >
                                        {cancelStatus.loading
                                            ? <><span className="spinner-border spinner-border-sm me-2"></span>Cancelando...</>
                                            : <><i className="bi bi-x-circle me-2"></i>Cancelar Suscripción</>
                                        }
                                    </button>
                                </>
                            ) : (
                                <div className="p-3 rounded-3 text-center" style={{ backgroundColor: 'var(--color-fondo-secundario)', border: '1px solid var(--color-borde)' }}>
                                    <p className="mb-2" style={{ color: 'var(--color-texto-secundario)' }}>Actualmente estás en el <strong>Plan Gratuito</strong>.</p>
                                    <button className="btn btn-sm rounded-pill px-4 fw-bold text-white-50 bg-secondary" disabled>
                                        <i className="bi bi-clock-history me-2"></i> No disponible por ahora
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
