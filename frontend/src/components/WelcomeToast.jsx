import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import './WelcomeToast.css';

const MOTIVATIONAL_MESSAGES = [
    { emoji: '🚀', title: '¡Bienvenido de vuelta!', msg: 'Cada lección te acerca más a la fluidez. ¡Tú puedes lograrlo!' },
    { emoji: '🌟', title: '¡Aquí vamos!', msg: 'Los grandes logros empiezan con un pequeño paso. ¡El tuyo empieza hoy!' },
    { emoji: '🎯', title: '¡Listo para aprender!', msg: 'La constancia es tu superpoder. ¡Sigue adelante sin parar!' },
    { emoji: '🦅', title: '¡De regreso al ruedo!', msg: 'Cada vez que vuelves, tu inglés mejora. ¡Eso es dedicación real!' },
    { emoji: '💡', title: '¡Mente encendida!', msg: 'El aprendizaje nunca duerme, y tú tampoco te rindes. ¡Genial!' },
    { emoji: '🏆', title: '¡Un campeón ha llegado!', msg: 'El éxito es la suma de pequeños esfuerzos repetidos cada día.' },
    { emoji: '⚡', title: '¡Energía al máximo!', msg: 'Hoy es un gran día para aprender algo nuevo en inglés.' },
    { emoji: '🌍', title: '¡El mundo te espera!', msg: 'Dominar el inglés abre puertas que ni imaginas. ¡Sigue!' },
];

const WelcomeModal = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [msg] = useState(
        () => MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)]
    );

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Trigger when user logs in
    useEffect(() => {
        if (!user) return;
        const flag = sessionStorage.getItem('show_welcome');
        if (flag !== 'true') return;
        sessionStorage.removeItem('show_welcome');
        setIsOpen(true);
    }, [user]);

    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    return (
        <div className="wm-backdrop" onClick={handleClose} role="dialog" aria-modal="true">
            <div className="wm-card" onClick={(e) => e.stopPropagation()}>

                {/* Close button */}
                <button className="wm-close-btn" onClick={handleClose} aria-label="Cerrar">
                    <i className="bi bi-x-lg" />
                </button>

                {/* Top glow bar */}
                <div className="wm-glow-bar" />

                {/* Emoji */}
                <div className="wm-emoji">{msg.emoji}</div>

                {/* Title */}
                <h2 className="wm-title">
                    {msg.title}
                    {user?.username && (
                        <span className="wm-username"> {user.username}</span>
                    )}
                </h2>

                {/* Message */}
                <p className="wm-subtitle">{msg.msg}</p>

                {/* Start button */}
                <button className="wm-start-btn" onClick={handleClose}>
                    <i className="bi bi-lightning-charge-fill me-2" />
                    ¡Empezar ahora!
                </button>

                <p className="wm-hint">o haz clic fuera para cerrar</p>
            </div>
        </div>
    );
};

export default WelcomeModal;
