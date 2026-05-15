import React, { useEffect } from 'react';
import '../pages/LevelGrid.css';

const alphabetData = [
    { letter: 'A', ipa: '/eɪ/' }, { letter: 'B', ipa: '/biː/' },
    { letter: 'C', ipa: '/siː/' }, { letter: 'D', ipa: '/diː/' },
    { letter: 'E', ipa: '/iː/' }, { letter: 'F', ipa: '/ɛf/' },
    { letter: 'G', ipa: '/dʒiː/' }, { letter: 'H', ipa: '/eɪtʃ/' },
    { letter: 'I', ipa: '/aɪ/' }, { letter: 'J', ipa: '/dʒeɪ/' },
    { letter: 'K', ipa: '/keɪ/' }, { letter: 'L', ipa: '/ɛl/' },
    { letter: 'M', ipa: '/ɛm/' }, { letter: 'N', ipa: '/ɛn/' },
    { letter: 'O', ipa: '/oʊ/' }, { letter: 'P', ipa: '/piː/' },
    { letter: 'Q', ipa: '/kjuː/' }, { letter: 'R', ipa: '/ɑːr/' },
    { letter: 'S', ipa: '/ɛs/' }, { letter: 'T', ipa: '/tiː/' },
    { letter: 'U', ipa: '/juː/' }, { letter: 'V', ipa: '/viː/' },
    { letter: 'W', ipa: '/ˈdʌbəl.juː/' }, { letter: 'X', ipa: '/ɛks/' },
    { letter: 'Y', ipa: '/waɪ/' }, { letter: 'Z', ipa: '/zɛd/ (UK) /ziː/ (US)', speakAs: 'Z' }
];

const symbolsData = [
    { char: '@', name: 'At' },
    { char: '.', name: 'Dot' },
    { char: '-', name: 'Hyphen' },
    { char: '_', name: 'Underscore' }
];

const AlphabetInteractive = () => {

    const playAudio = (text) => {
        if (!text || typeof text !== 'string') return;
        
        try {
            if (!window.speechSynthesis) return;

            window.speechSynthesis.resume();
            window.speechSynthesis.cancel(); 

            setTimeout(() => {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = 0.8; // Slightly slower for clear alphabet pronunciation
                
                utterance.onerror = (e) => console.error("Speech Synthesis Error:", e);
                
                window.speechSynthesis.speak(utterance);
            }, 50);
        } catch (error) {
            console.error("Audio Engine Critical Failure:", error);
        }
    };

    useEffect(() => {
        if (window.speechSynthesis) window.speechSynthesis.getVoices();
    }, []);

    return (
        <div className="theory-wrapper premium-content" style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: '1rem' }}>
            <div className="visual-card card-concept">
                <h4>Mastering the English Alphabet</h4>
                <p>The English alphabet is the foundation of literacy. Beyond simple letters, mastering the <strong>pronunciation</strong> and <strong>phonetic spelling</strong> is crucial for professional communication. Click any letter to hear its pronunciation.</p>
            </div>

            <div className="mt-4">
                <style>{`
                    .alphabet-grid-native {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
                        gap: 1rem;
                        margin-bottom: 2rem;
                    }
                    .alphabet-card {
                        background: var(--color-fondo-secundario);
                        border: 1px solid var(--color-borde);
                        border-radius: 1rem;
                        padding: 1.5rem 1rem;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .alphabet-card:hover {
                        transform: translateY(-5px);
                        border-color: var(--acento-primario);
                        box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.15);
                        background: rgba(14, 165, 233, 0.02);
                    }
                    .alphabet-card .letter {
                        font-size: 2.5rem;
                        font-weight: 800;
                        color: var(--color-texto-principal);
                        margin-bottom: 0.5rem;
                        line-height: 1;
                    }
                    .alphabet-card .ipa {
                        font-size: 0.9rem;
                        color: var(--acento-primario);
                        font-weight: 600;
                    }
                    .alphabet-card i {
                        font-size: 1.2rem;
                        color: var(--color-texto-secundario);
                        opacity: 0.5;
                        margin-bottom: 0.5rem;
                        transition: all 0.2s;
                    }
                    .alphabet-card:hover i {
                        opacity: 1;
                        color: var(--acento-primario);
                    }
                `}</style>
                <div className="alphabet-grid-native">
                    {alphabetData.map((item, idx) => (
                        <div key={idx} className="alphabet-card" onClick={() => playAudio(item.speakAs || item.letter)} title={`Listen to ${item.letter}`}>
                            <i className="bi bi-volume-up-fill"></i>
                            <span className="letter">{item.letter}</span>
                            <span className="ipa">{item.ipa}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="visual-card card-advanced">
                <h5>🚀 Professional Spelling (Symbols)</h5>
                <p>In business English, you must know how to spell symbols for email addresses. Click to listen:</p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                    {symbolsData.map((sym, idx) => (
                        <button 
                            key={idx} 
                            className="btn btn-outline-primary d-flex align-items-center rounded-pill px-4"
                            onClick={() => playAudio(sym.name)}
                        >
                            <span className="fs-5 fw-bold me-2">{sym.char}</span>
                            <span>{sym.name}</span>
                            <i className="bi bi-volume-up ms-2 opacity-75"></i>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlphabetInteractive;
