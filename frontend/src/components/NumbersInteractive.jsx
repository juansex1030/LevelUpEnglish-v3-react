import React, { useEffect } from 'react';
import '../pages/LevelGrid.css';

const numbersData = [
    { num: 1, word: 'One' },
    { num: 2, word: 'Two' },
    { num: 3, word: 'Three' },
    { num: 4, word: 'Four' },
    { num: 5, word: 'Five' },
    { num: 6, word: 'Six' },
    { num: 7, word: 'Seven' },
    { num: 8, word: 'Eight' },
    { num: 9, word: 'Nine' },
    { num: 10, word: 'Ten' },
];

const teensData = [
    { num: 11, word: 'Eleven' }, { num: 12, word: 'Twelve' },
    { num: 13, word: 'Thirteen' }, { num: 14, word: 'Fourteen' },
    { num: 15, word: 'Fifteen' }, { num: 16, word: 'Sixteen' },
    { num: 17, word: 'Seventeen' }, { num: 18, word: 'Eighteen' },
    { num: 19, word: 'Nineteen' }, { num: 20, word: 'Twenty' },
];

const tensData = [
    { num: 30, word: 'Thirty' }, { num: 40, word: 'Forty' },
    { num: 50, word: 'Fifty' }, { num: 60, word: 'Sixty' },
    { num: 70, word: 'Seventy' }, { num: 80, word: 'Eighty' },
    { num: 90, word: 'Ninety' }, { num: 100, word: 'One hundred' },
];

const NumbersInteractive = () => {

    const playAudio = (text) => {
        if (!text || typeof text !== 'string') return;
        try {
            if (!window.speechSynthesis) return;
            window.speechSynthesis.resume();
            window.speechSynthesis.cancel();
            setTimeout(() => {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = 0.85;
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
            <style>{`
                .numbers-section-title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--acento-primario);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    margin: 1.5rem 0 0.75rem;
                }
                .num-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }
                @media (max-width: 600px) {
                    .num-grid { grid-template-columns: repeat(3, 1fr); }
                }
                .num-card {
                    background: var(--color-fondo-secundario);
                    border: 1px solid var(--color-borde);
                    border-radius: 0.875rem;
                    padding: 1rem 0.5rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.3rem;
                }
                .num-card:hover {
                    transform: translateY(-4px);
                    border-color: var(--acento-primario);
                    box-shadow: 0 8px 20px -4px rgba(14, 165, 233, 0.2);
                }
                .num-card .num-digit {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: var(--color-texto-principal);
                    line-height: 1;
                }
                .num-card .num-word {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--acento-primario);
                }
                .num-card i {
                    font-size: 0.9rem;
                    color: var(--color-texto-secundario);
                    opacity: 0.4;
                    transition: all 0.2s;
                }
                .num-card:hover i { opacity: 1; color: var(--acento-primario); }
                .num-card-small {
                    background: var(--color-fondo-secundario);
                    border: 1px solid var(--color-borde);
                    border-radius: 0.75rem;
                    padding: 0.65rem 0.5rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.2rem;
                }
                .num-card-small:hover {
                    transform: translateY(-3px);
                    border-color: var(--acento-primario);
                    box-shadow: 0 6px 14px -4px rgba(14, 165, 233, 0.18);
                }
                .num-card-small .num-digit { font-size: 1.2rem; font-weight: 700; color: var(--color-texto-principal); line-height:1; }
                .num-card-small .num-word { font-size: 0.7rem; font-weight: 600; color: var(--acento-primario); }
                .num-card-small i { font-size: 0.75rem; color: var(--color-texto-secundario); opacity: 0.4; transition: all 0.2s; }
                .num-card-small:hover i { opacity: 1; color: var(--acento-primario); }
            `}</style>

            {/* Intro card */}
            <div className="visual-card card-concept">
                <h4>🔢 Numbers 1–100</h4>
                <p>Numbers are the language of prices, dates, times, and phone numbers. Click on any number card below to hear its correct pronunciation in American English.</p>
            </div>

            {/* 1–10: Interactive with audio */}
            <p className="numbers-section-title">🔊 1–10 — Click to Listen</p>
            <div className="num-grid">
                {numbersData.map((item) => (
                    <div key={item.num} className="num-card" onClick={() => playAudio(item.word)} title={`Listen to ${item.word}`}>
                        <i className="bi bi-volume-up-fill"></i>
                        <span className="num-digit">{item.num}</span>
                        <span className="num-word">{item.word}</span>
                    </div>
                ))}
            </div>

            {/* Pattern box */}
            <div className="visual-card card-structure mt-3">
                <h5>🚀 How 1–10 Build Everything Else</h5>
                <p>The first 10 numbers are the <strong>building blocks</strong> of the entire number system in English. Once you master them, the rest follows a pattern:</p>
                <ul className="premium-list mt-2">
                    <li><strong>11–19 (Teens):</strong> Mostly irregular. These must be memorized.</li>
                    <li><strong>20–90 (Tens):</strong> Built from the base numbers + <em>-ty</em> (e.g., Three → Thirty).</li>
                    <li><strong>21–99 (Compounds):</strong> Tens + units with a hyphen (e.g., Twenty-<strong>three</strong>).</li>
                </ul>
            </div>

            {/* 11–20 */}
            <p className="numbers-section-title">11–20 — The Teens (Irregular)</p>
            <div className="num-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {teensData.map((item) => (
                    <div key={item.num} className="num-card-small" onClick={() => playAudio(item.word)} title={`Listen to ${item.word}`}>
                        <i className="bi bi-volume-up-fill"></i>
                        <span className="num-digit">{item.num}</span>
                        <span className="num-word">{item.word}</span>
                    </div>
                ))}
            </div>

            {/* 30–100 */}
            <p className="numbers-section-title">30–100 — The Tens</p>
            <div className="num-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {tensData.map((item) => (
                    <div key={item.num} className="num-card-small" onClick={() => playAudio(item.word)} title={`Listen to ${item.word}`}>
                        <i className="bi bi-volume-up-fill"></i>
                        <span className="num-digit">{item.num}</span>
                        <span className="num-word">{item.word}</span>
                    </div>
                ))}
            </div>

            {/* Warning card */}
            <div className="visual-card card-warning mt-3">
                <h5>⚠️ Common Confusion: -TEEN vs -TY</h5>
                <p>Many students mix these up in listening. The stress is the key difference:</p>
                <ul className="premium-list">
                    <li><strong>Thir-TEEN</strong> → stress on the <em>end</em>. (13)</li>
                    <li><strong>THIR-ty</strong> → stress on the <em>beginning</em>. (30)</li>
                </ul>
            </div>

            {/* Compound numbers */}
            <div className="visual-card card-examples mt-2">
                <h5>📝 Building Any Number (21–99)</h5>
                <p>Just combine the ten + unit with a <strong>hyphen</strong>:</p>
                <ul className="premium-list">
                    <li>25 → Twenty-<strong>five</strong></li>
                    <li>47 → Forty-<strong>seven</strong></li>
                    <li>83 → Eighty-<strong>three</strong></li>
                    <li>99 → Ninety-<strong>nine</strong></li>
                </ul>
            </div>
        </div>
    );
};

export default NumbersInteractive;
