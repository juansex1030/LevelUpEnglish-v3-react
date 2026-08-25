import React, { useState, useEffect } from 'react';
import './InstallPWA.css';

const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
        promptInstall.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };

    if (!supportsPWA) {
        return null;
    }

    return (
        <button 
            className="btn btn-outline-primary d-flex align-items-center gap-2 pwa-install-btn fw-bold"
            onClick={onClick}
            title="Instalar como Aplicación Nativa"
            style={{ borderRadius: '12px' }}
        >
            <i className="bi bi-download"></i>
            <span className="d-none d-md-inline">Instalar App</span>
        </button>
    );
};

export default InstallPWA;
