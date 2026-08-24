import { useCallback } from 'react';

const createAudioContext = () => {
    // Reutilizar el mismo contexto para evitar bloqueos del navegador
    if (typeof window !== 'undefined' && !window.audioCtx) {
        window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return window.audioCtx;
};

const useAudioFeedback = () => {
    
    // Sonido de "Pop" suave (mucho más amigable que el beep)
    const playClick = useCallback(() => {
        const ctx = createAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Onda sinusoidal rápida de alta a baja frecuencia (pop)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    }, []);

    // Sonido de "Éxito" (Arpegio tipo campana)
    const playSuccess = useCallback(() => {
        const ctx = createAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const playTone = (freq, startTime, duration) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.1, startTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + duration);
        };

        const now = ctx.currentTime;
        playTone(523.25, now, 0.15);       // Do
        playTone(659.25, now + 0.1, 0.15); // Mi
        playTone(783.99, now + 0.2, 0.3);  // Sol
    }, []);

    // Sonido de "Error" (Doble buzz suave)
    const playError = useCallback(() => {
        const ctx = createAudioContext();
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const playBuzz = (startTime) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(150, startTime);
            osc.frequency.exponentialRampToValueAtTime(100, startTime + 0.1);
            gain.gain.setValueAtTime(0.05, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.1);
        };

        const now = ctx.currentTime;
        playBuzz(now);
        playBuzz(now + 0.15);
    }, []);

    return { playClick, playSuccess, playError };
};

export default useAudioFeedback;
