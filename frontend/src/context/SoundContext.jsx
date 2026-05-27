import React, { createContext, useContext, useState, useEffect } from 'react';
import useSound from 'use-sound';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const [soundEnabled, setSoundEnabled] = useState(() => {
        const saved = localStorage.getItem('soundEnabled');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const [play] = useSound('/sounds/click.mp3', { volume: 0.5 });

    useEffect(() => {
        localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
    }, [soundEnabled]);

    useEffect(() => {
        const handleGlobalClick = (e) => {
            if (!soundEnabled) return;

            // Check if clicked element or parent is an interactive element
            const interactiveElement = e.target.closest('button, a, .nav-link, .btn, [role="button"]');
            
            if (interactiveElement) {
                play();
            }
        };

        document.addEventListener('click', handleGlobalClick);
        return () => document.removeEventListener('click', handleGlobalClick);
    }, [soundEnabled, play]);

    const toggleSound = () => setSoundEnabled(!soundEnabled);

    return (
        <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useGlobalSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useGlobalSound must be used within a SoundProvider');
    }
    return context;
};
