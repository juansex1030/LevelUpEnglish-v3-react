import React, { useState, useEffect } from 'react';

/* =====================================================================
   PracticeEngine.jsx
   Renders game data stored as JSON in the database.
   Supported game types:
     - multiple_choice, fill_in, unscramble, matching, etc.
     - New: word_search
===================================================================== */

/** Web Audio API Helper for Premium SFX - Now with more variety! */
const playSFX = (type) => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const now = ctx.currentTime;
        const playTone = (freq, type = 'sine', duration = 0.3, volume = 0.2, ramp = true) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(volume, now);
            if (ramp) gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
            osc.start(now);
            osc.stop(now + duration);
        };

        switch(type) {
            case 'success': // Default bright chime
                playTone(523.25, 'sine', 0.4); // C5
                setTimeout(() => playTone(659.25, 'sine', 0.4), 100); // E5
                break;
            case 'success_pop': // Short & cute
                playTone(800 + Math.random() * 200, 'sine', 0.1, 0.15);
                break;
            case 'success_chime': // Higher sparkling chime
                [880, 1174, 1318].forEach((f, i) => {
                    setTimeout(() => playTone(f, 'sine', 0.3, 0.1), i * 80);
                });
                break;
            case 'success_magic': { // Magical glissando
                const oscM = ctx.createOscillator();
                const gainM = ctx.createGain();
                oscM.connect(gainM); gainM.connect(ctx.destination);
                oscM.frequency.setValueAtTime(400, now);
                oscM.frequency.exponentialRampToValueAtTime(1200, now + 0.5);
                gainM.gain.setValueAtTime(0.1, now);
                gainM.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                oscM.start(now); oscM.stop(now + 0.5);
                break;
            }
            case 'error': // Classic error
                playTone(150, 'sawtooth', 0.4, 0.2);
                break;
            case 'error_buzz': // Buzzer
                playTone(100, 'square', 0.3, 0.1);
                break;
            case 'click':
                playTone(800 + Math.random() * 100, 'sine', 0.05, 0.1);
                break;
            case 'win':
                [523, 659, 783, 1046, 1318].forEach((f, i) => {
                    setTimeout(() => playTone(f, 'sine', 0.6, 0.15), i * 150);
                });
                break;
            default:
                playTone(440, 'sine', 0.2);
        }
    } catch { console.warn("Audio Context blocked"); }
};

/** Trigger Confetti Celebration */
const triggerConfetti = () => {
    if (window.confetti) {
        window.confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffca28', '#2575fc', '#0072ff', '#ffffff']
        });
    } else {
        // Fallback: try to load from CDN if not present
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
        script.onload = () => window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        document.head.appendChild(script);
    }
};

/** Stable Fisher-Yates shuffle — avoids V8 sort instability with Math.random()-0.5 */
const stableShuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function PracticeEngine({ data, onScoreUpdate, isCompleted, storageKey }) {
    const [achievementToast, setAchievementToast] = useState(null);
    const [completedQuestions, setCompletedQuestions] = React.useState(() => {
        if (isCompleted && data && data.games) {
            return new Set(data.games.map((_, i) => `${i}`));
        }
        if (storageKey) {
            try {
                const stored = localStorage.getItem(storageKey);
                if (stored) {
                    return new Set(JSON.parse(stored));
                }
            } catch (e) {
                console.error("Error reading localStorage key", e);
            }
        }
        return new Set();
    });

    useEffect(() => {
        let active = true;
        const timer = setTimeout(() => {
            if (!active) return;
            if (isCompleted && data && data.games) {
                const allIdxs = new Set(data.games.map((_, i) => `${i}`));
                setCompletedQuestions(allIdxs);
            } else if (!isCompleted) {
                if (storageKey) {
                    try {
                        const stored = localStorage.getItem(storageKey);
                        if (stored) {
                            setCompletedQuestions(new Set(JSON.parse(stored)));
                            return;
                        }
                    } catch {
                        // ignore localStorage read error
                    }
                }
                setCompletedQuestions(new Set());
            }
        }, 0);
        return () => {
            active = false;
            clearTimeout(timer);
        };
    }, [data, isCompleted, storageKey]);

    useEffect(() => {
        if (onScoreUpdate && data && data.games) {
            const scorePercent = Math.round((completedQuestions.size / data.games.length) * 100);
            onScoreUpdate(scorePercent);
        }
    }, [completedQuestions, data, onScoreUpdate]);

    if (!data || !data.games) return null;

    const totalQuestions = data.games.length;

    const handleCorrect = (gameIdx) => {
        const key = `${gameIdx}`;
        if (completedQuestions.has(key)) return;

        const newSet = new Set(completedQuestions).add(key);
        setCompletedQuestions(newSet);
        playSFX('success');

        // ==== Achievement Logic ====
        if (storageKey) {
            try {
                // Extract userId from storageKey (format: levelup_premium_practice_userId_...)
                const parts = storageKey.split('_');
                const userId = parts[3] || 'guest';
                if (userId !== 'guest') {
                    const achKey = `levelup_achievements_${userId}`;
                    const currentAchs = new Set(JSON.parse(localStorage.getItem(achKey) || '[]'));
                    const newlyUnlocked = [];

                    // 1. "Primer Paso" (First exercise)
                    if (!currentAchs.has('first_step')) {
                        currentAchs.add('first_step');
                        newlyUnlocked.push({ id: 'first_step', name: 'Primer Paso', icon: 'bi-rocket-takeoff-fill', color: '#1CB0F6' });
                    }

                    // 2. Streaks logic (simplified session streak for now, counting total completed in this session)
                    let currentStreak = parseInt(sessionStorage.getItem('sessionStreak') || '0', 10);
                    currentStreak++;
                    sessionStorage.setItem('sessionStreak', currentStreak.toString());
                    
                    if (currentStreak >= 3 && !currentAchs.has('streak_3')) {
                        currentAchs.add('streak_3');
                        newlyUnlocked.push({ id: 'streak_3', name: 'En Racha', icon: 'bi-fire', color: '#FF9800' });
                    }
                    if (currentStreak >= 10 && !currentAchs.has('streak_10')) {
                        currentAchs.add('streak_10');
                        newlyUnlocked.push({ id: 'streak_10', name: 'Imparable', icon: 'bi-lightning-charge-fill', color: '#CE82FF' });
                    }

                    if (newlyUnlocked.length > 0) {
                        localStorage.setItem(achKey, JSON.stringify(Array.from(currentAchs)));
                        // Trigger toast
                        setAchievementToast(newlyUnlocked[0]);
                        setTimeout(() => setAchievementToast(null), 4000);
                        playSFX('win');
                    }
                }
            } catch (e) { console.error("Error evaluating achievements", e); }
        }
        // ===========================

        if (storageKey) {
            try {
                localStorage.setItem(storageKey, JSON.stringify(Array.from(newSet)));
            } catch {
                // ignore localStorage write error
            }
        }

        if (newSet.size === totalQuestions) {
            playSFX('win');
            triggerConfetti();
        }
    };

    return (
        <div className="practice-engine position-relative">
            {achievementToast && (
                <div 
                    className="achievement-toast-overlay position-fixed animate__animated animate__fadeInDown"
                    style={{
                        top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999,
                        background: 'var(--color-fondo-secundario)',
                        border: `2px solid ${achievementToast.color}`,
                        borderRadius: '50px',
                        padding: '10px 25px',
                        display: 'flex', alignItems: 'center', gap: '15px',
                        boxShadow: `0 10px 30px rgba(0,0,0,0.5)`
                    }}
                >
                    <div 
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            backgroundColor: achievementToast.color, color: 'white', fontSize: '1.2rem'
                        }}
                    >
                        <i className={`bi ${achievementToast.icon}`}></i>
                    </div>
                    <div>
                        <div className="fw-bold text-white mb-0" style={{ fontSize: '0.8rem', opacity: 0.8 }}>¡NUEVA INSIGNIA!</div>
                        <div className="fw-bold" style={{ color: achievementToast.color, fontSize: '1.1rem' }}>{achievementToast.name}</div>
                    </div>
                </div>
            )}
            
            {data.games.map((game, i) => (
                <div key={i} className="mb-5 p-4 rounded-4 transition-all shadow-lg" 
                     style={{ 
                         position: 'relative', 
                         background: 'rgba(15, 15, 25, 0.7)', 
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255,255,255,0.1)', 
                         boxShadow: '0 12px 40px rgba(0,0,0,0.4)' 
                     }}>
                    <div className="d-flex align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="game-icon me-3 p-3 rounded-circle shadow" style={{ background: 'var(--acento-primario)', color: '#111' }}>
                            <span className="fs-4">🎮</span>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-1 text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{game.title}</h4>
                            <p className="mb-0 small" style={{ color: 'rgba(255,255,255,0.7)' }}>{game.instruction}</p>
                        </div>

                        {completedQuestions.has(`${i}`) && (
                            <div className="ms-auto animate__animated animate__bounceIn">
                                <span className="badge bg-primary rounded-pill p-2 px-3 shadow-sm border border-white-50">
                                    <i className="bi bi-patch-check-fill me-2"></i>Completado
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="game-board position-relative" style={{ minHeight: completedQuestions.has(`${i}`) ? '150px' : '300px', transition: 'all 0.5s' }}>
                        {completedQuestions.has(`${i}`) ? (
                            <div className="d-flex flex-column align-items-center justify-content-center p-5 text-center animate__animated animate__fadeIn">
                                <div className="display-4 text-primary mb-3">🎉</div>
                                <h4 className="fw-bold text-primary">¡Ejercicio Completado!</h4>
                                <p className="text-white-50">Has respondido correctamente a todas las preguntas de esta actividad.</p>
                                <button className="btn btn-outline-light btn-sm mt-2 rounded-pill px-3" onClick={() => {
                                    const newSet = new Set(completedQuestions);
                                    newSet.delete(`${i}`);
                                    setCompletedQuestions(newSet);
                                    if (storageKey) {
                                        try {
                                            localStorage.setItem(storageKey, JSON.stringify(Array.from(newSet)));
                                        } catch {
                                            // ignore localStorage write error
                                        }
                                    }
                                }}>
                                    <i className="bi bi-arrow-counterclockwise me-1"></i> Intentar de nuevo
                                </button>
                            </div>
                        ) : (
                            <>
                                 {game.type === 'multiple_choice'  && <MultipleChoice game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'fill_in'          && <FillIn game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'unscramble'       && <Unscramble game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'matching'         && <Matching game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'spell_tool'       && <SpellTool game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'hangman_game'     && <HangmanGame game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'crossword'        && <CrosswordGame game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'fill_blanks'      && <FillBlanksGame game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'sentence_builder' && <SentenceBuilderGame game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'trivia_game'      && <TriviaGame game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'reading_comprehension' && <ReadingComprehension game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'cloze_test'       && <ClozeTest game={game} onCorrect={() => handleCorrect(i)} />}
                                {game.type === 'word_search'      && <WordSearchGame game={game} onCorrect={() => handleCorrect(i)} />}
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ── shared feedback banner ─────────────────────────────────────────── */
function Feedback({ fb }) {
    if (!fb) return null;
    const ok = fb.type === 'success';
    return (
        <div className={`mt-4 p-3 rounded-4 text-center fw-bold animate__animated animate__fadeInUp ${ok ? 'text-primary border-primary' : 'text-danger border-danger'}`}
             style={{ 
                 background: ok ? 'rgba(37,117,252,0.1)' : 'rgba(220,53,69,0.1)', 
                 border: '1px solid',
                 backdropFilter: 'blur(10px)',
                 fontSize: '1.05rem',
                 boxShadow: ok ? '0 0 20px rgba(37,117,252,0.2)' : '0 0 20px rgba(220,53,69,0.2)'
             }}>
            {fb.text}
        </div>
    );
};

function MultipleChoice({ game, onCorrect }) {
    const [idx, setIdx] = useState(0);
    const [fb, setFb] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const q = game.questions ? game.questions[idx] : null;

    const finalOptions = React.useMemo(() => {
        if (!q) return [];
        const raw = q.options || q.o || [];
        if (q.a && !raw.includes(q.a)) {
            return [q.a, ...raw];
        }
        return raw;
    }, [q]);

    const shuffledOptions = React.useMemo(() => {
        if (finalOptions.length === 0) return [];
        return stableShuffle(finalOptions);
    }, [finalOptions]);

    const choose = (opt) => {
        if (!q || fb?.type === 'success') return;
        if (opt === q.a) {
            playSFX('success_pop');
            setFb({ type: 'success', text: '✅ Correct!' });
            setAttempts(0);
            if (idx === game.questions.length - 1) {
                setTimeout(() => onCorrect(), 1400);
            } else {
                setTimeout(() => { setFb(null); setIdx(i => i + 1); }, 1400);
            }
        } else {
            playSFX('error_buzz');
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            setFb({ 
                type: 'error', 
                text: newAttempts >= 2 ? `❌ Incorrect. Hint: The answer starts with "${q.a[0]}"` : '❌ Try again!' 
            });
        }
    };

    if (!q) return <div className="p-4 text-center text-white-50">Cargando pregunta...</div>;

    return (
        <div className="multiple-choice animate__animated animate__fadeIn">
            <div className="text-center fs-4 fw-bold mb-5 py-4 px-4 rounded-4 shadow" 
                 style={{ 
                     background: 'rgba(0,0,0,0.4)', 
                     border: '1px solid rgba(255,255,255,0.05)', 
                     color: '#fff',
                     textShadow: '0 2px 10px rgba(0,0,0,0.5)' 
                 }}>{q.q}</div>
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {shuffledOptions.map((opt, i) => (
                    <button key={i} 
                            className="btn px-4 py-3 fw-bold rounded-4 transition-all" 
                            style={{ 
                                minWidth: '160px',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#e0e0e0',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                transform: 'translateY(0)',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--acento-primario)'; e.currentTarget.style.color = '#111'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px var(--acento-primario)'; e.currentTarget.style.border = '1px solid var(--acento-primario)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'; }}
                            onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(2px)'; }}
                            onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            onClick={() => choose(opt)}>{opt}</button>
                ))}
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 2. Fill In ─────────────────────────────────────────────────────── */
function FillIn({ game, onCorrect }) {
    const [idx, setIdx] = useState(0);
    const [val, setVal] = useState('');
    const [fb, setFb] = useState(null);
    const q = game.questions[idx];

    const check = () => {
        if (val.trim().toLowerCase() === q.a.toLowerCase()) {
            playSFX('success_chime');
            setFb({ type: 'success', text: '✅ Excellent!' });
            if (idx === game.questions.length - 1) {
                setTimeout(() => onCorrect(), 1400);
            } else {
                setTimeout(() => { setFb(null); setVal(''); setIdx(i => i + 1); }, 1400);
            }
        } else {
            playSFX('error');
            setFb({ type: 'error', text: `❌ Almost! The answer is: "${q.a}"` });
        }
    };

    return (
        <div className="fill-in animate__animated animate__fadeIn">
            <div className="fs-4 fw-bold mb-5 p-4 rounded-4 text-center shadow" 
                 style={{ 
                     background: 'rgba(0,0,0,0.4)', 
                     border: '1px solid rgba(255,255,255,0.05)', 
                     color: '#fff',
                     textShadow: '0 2px 10px rgba(0,0,0,0.5)' 
                 }}>{q.q}</div>
            <div className="d-flex gap-3 mb-2 max-w-md mx-auto" style={{ maxWidth: '600px' }}>
                <input className="form-control form-control-lg rounded-4 shadow-sm" 
                       style={{ 
                           background: 'rgba(255,255,255,0.05)', 
                           color: '#fff', 
                           border: '1px solid rgba(255,255,255,0.2)',
                           backdropFilter: 'blur(10px)',
                           transition: 'all 0.3s'
                       }}
                       placeholder="Type your answer..."
                       value={val} 
                       onChange={e => setVal(e.target.value)} 
                       onKeyDown={e => e.key === 'Enter' && check()}
                       onFocus={(e) => { e.currentTarget.style.border = '1px solid var(--acento-primario)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(37,117,252,0.3)'; }}
                       onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <button className="btn px-4 rounded-4 fw-bold shadow-sm" 
                        onClick={check}
                        style={{ 
                            background: 'var(--acento-primario)', 
                            color: '#111', 
                            border: 'none',
                            transition: 'all 0.2s',
                            minWidth: '120px'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(37,117,252,0.4)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                    Check
                </button>
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 3. Unscramble ──────────────────────────────────────────────────── */
function Unscramble({ game, onCorrect }) {
    const [idx, setIdx] = useState(0);
    const [val, setVal] = useState('');
    const [fb, setFb] = useState(null);
    const q = game.questions ? game.questions[idx] : null;
    if (!q) return null;

    const check = () => {
        if (val.trim().toLowerCase() === q.a.toLowerCase()) {
            playSFX('success_pop');
            setFb({ type: 'success', text: '✅ Perfect!' });
            if (idx === game.questions.length - 1) {
                setTimeout(() => onCorrect(), 1400);
            } else {
                setTimeout(() => { setFb(null); setVal(''); setIdx(i => i + 1); }, 1400);
            }
        } else {
            playSFX('error_buzz');
            setFb({ type: 'error', text: '❌ Not quite. Remember the correct word order.' });
        }
    };

    return (
        <div className="unscramble animate__animated animate__fadeIn">
            <div className="p-4 rounded-4 mb-5 text-center shadow" 
                 style={{ 
                     background: 'rgba(0,0,0,0.3)', 
                     border: '1px dashed rgba(255,255,255,0.2)',
                     backdropFilter: 'blur(10px)'
                 }}>
                <span className="d-block small mb-2 text-uppercase fw-bold" style={{ color: 'var(--acento-primario)', letterSpacing: '2px' }}>Scrambled Word</span>
                <span className="fw-bold fs-2" style={{ color: '#fff', letterSpacing: '4px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{q.q}</span>
            </div>
            <div className="d-flex gap-3 mb-2 max-w-md mx-auto" style={{ maxWidth: '500px' }}>
                <input className="form-control form-control-lg rounded-4 shadow-sm text-center" 
                       style={{ 
                           background: 'rgba(255,255,255,0.05)', 
                           color: '#fff', 
                           border: '1px solid rgba(255,255,255,0.2)',
                           backdropFilter: 'blur(10px)',
                           letterSpacing: '2px',
                           transition: 'all 0.3s'
                       }}
                       placeholder="Type here..."
                       value={val} 
                       onChange={e => setVal(e.target.value)} 
                       onKeyDown={e => e.key === 'Enter' && check()}
                       onFocus={(e) => { e.currentTarget.style.border = '1px solid var(--acento-primario)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(37,117,252,0.3)'; }}
                       onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <button className="btn px-4 fw-bold rounded-4 shadow-sm" 
                        onClick={check} 
                        style={{ 
                            background: 'var(--acento-primario)', 
                            color: '#111', 
                            border: 'none',
                            transition: 'all 0.2s',
                            minWidth: '120px'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(37,117,252,0.4)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                    Check
                </button>
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 4. Matching ─────────────────────────────────────────────────────── */
function Matching({ game, onCorrect }) {
    const [selections, setSelections] = useState({});
    const [fb, setFb] = useState(null);
    
    // Limit to 8 items to keep UI clean
    const limitedQuestions = React.useMemo(() => (game.questions || []).slice(0, 8), [game.questions]);
    const shuffledOptions = React.useMemo(() => stableShuffle(limitedQuestions.map(q => q.a)), [limitedQuestions]);

    const check = () => {
        const allRight = limitedQuestions.every((q, i) => selections[i] === q.a);
        if (allRight) {
            playSFX('success_magic');
            setFb({ type: 'success', text: '✅ ¡Excelente! Todas las conexiones son correctas.' });
            setTimeout(() => { if (onCorrect) onCorrect(); }, 1400);
        } else {
            playSFX('error');
            setFb({ type: 'error', text: '❌ Algunas conexiones no son correctas. ¡Sigue intentando!' });
        }
    };

    return (
        <div className="matching-game animate__animated animate__fadeIn">
            <div className="d-grid gap-4 mb-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))' }}>
                {limitedQuestions.map((q, i) => (
                    <div key={i} className="d-flex align-items-center justify-content-between p-4 gap-4 rounded-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(15px)', transition: 'all 0.3s ease' }}>
                        <div className="matching-question flex-grow-1 d-flex align-items-start" style={{ minWidth: '0' }}>
                            <span className="badge bg-primary rounded-circle text-white me-3 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', flexShrink: 0, fontSize: '0.8rem' }}>{i + 1}</span>
                            <div className="text-light fw-bold" style={{ fontSize: '1.05rem', lineHeight: '1.4', whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'left' }}>
                                {q.q}
                            </div>
                        </div>
                        <div className="matching-selector" style={{ minWidth: '180px', flexShrink: 0 }}>
                            <select 
                                className="form-select w-100 fw-bold" 
                                style={{ 
                                    borderRadius: '12px', 
                                    background: 'rgba(255,255,255,0.1)', 
                                    color: '#fff',
                                    border: '1px solid rgba(255,255,255,0.2)', 
                                    padding: '12px', 
                                    fontSize: '0.95rem', 
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s'
                                }}
                                onChange={e => setSelections(s => ({ ...s, [i]: e.target.value }))}
                                onFocus={(e) => { e.currentTarget.style.border = '1px solid var(--acento-primario)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(37,117,252,0.3)'; }}
                                onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <option value="" style={{ color: '#000' }}>Match...</option>
                                {shuffledOptions.map((a, j) => <option key={j} value={a} style={{ color: '#000' }}>{a}</option>)}
                            </select>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button 
                    className="btn btn-primary btn-lg px-5 rounded-pill fw-bold shadow" 
                    onClick={check}
                    style={{ background: 'linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)', border: 'none' }}
                >
                    <i className="bi bi-check-all me-2"></i> Verificar Resultados
                </button>
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 5. Spell Tool ──────────────────────────────────────────────────── */
function SpellTool({ game, onCorrect }) {
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const spell = () => {
        if (!name.trim()) return;
        const spelled = Array.from(name.toUpperCase()).map(c => game.alphabet[c] || c).join(' - ');
        setResult(spelled);
        setTimeout(() => { if (onCorrect) onCorrect(); }, 1000);
    };

    return (
        <div className="spell-tool animate__animated animate__fadeIn max-w-md mx-auto" style={{ maxWidth: '500px' }}>
            <div className="d-flex gap-3 mb-4">
                <input className="form-control form-control-lg rounded-4 shadow-sm" 
                       style={{ 
                           background: 'rgba(255,255,255,0.05)', 
                           color: '#fff', 
                           border: '1px solid rgba(255,255,255,0.2)',
                           backdropFilter: 'blur(10px)',
                           transition: 'all 0.3s'
                       }}
                       placeholder="Type a word..."
                       value={name} 
                       onChange={e => setName(e.target.value)} 
                       onKeyDown={e => e.key === 'Enter' && spell()}
                       onFocus={(e) => { e.currentTarget.style.border = '1px solid var(--acento-primario)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(37,117,252,0.3)'; }}
                       onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <button className="btn px-4 fw-bold rounded-4 shadow-sm" 
                        onClick={spell}
                        style={{ 
                            background: 'var(--acento-primario)', 
                            color: '#111', 
                            border: 'none',
                            transition: 'all 0.2s',
                            minWidth: '120px'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(37,117,252,0.4)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                    Spell it!
                </button>
            </div>
            {result && (
                <div className="p-4 rounded-4 text-center fw-bold fs-4 animate__animated animate__zoomIn shadow" 
                     style={{ 
                         background: 'rgba(37,117,252,0.1)', 
                         border: '1px solid var(--acento-primario)',
                         color: '#fff',
                         textShadow: '0 0 10px rgba(37,117,252,0.5)'
                     }}>
                    {result}
                </div>
            )}
        </div>
    );
};

/* ── 8. Hangman Game (Practice Zone) ─────────────────────────────────── */
function HangmanGame({ game, onCorrect }) {
    const [wordIdx, setWordIdx] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [lives, setLives] = useState(6);
    const [gameStatus, setGameStatus] = useState('playing');

    const currentWordData = game.words && game.words[wordIdx];
    const currentWord = currentWordData ? currentWordData.word.toUpperCase() : '';

    const isLetterGuessed = (letter) => guessedLetters.has(letter) || letter === ' ';

    const handleGuess = (letter) => {
        if (gameStatus !== 'playing' || guessedLetters.has(letter)) return;

        const newGuessed = new Set(guessedLetters).add(letter);
        setGuessedLetters(newGuessed);

        if (!currentWord.includes(letter)) {
            const nextLives = lives - 1;
            setLives(nextLives);
            if (nextLives === 0) setGameStatus('lost');
        } else {
            const newIsWordGuessed = currentWord && currentWord.split('').every(l => newGuessed.has(l) || l === ' ');
            if (newIsWordGuessed && currentWord.length > 0) {
                setGameStatus('won_word');
                setTimeout(() => {
                    if (wordIdx + 1 < game.words.length) {
                        setWordIdx(i => i + 1);
                        setGuessedLetters(new Set());
                        setLives(6);
                        setGameStatus('playing');
                    } else {
                        setGameStatus('won_all');
                        if (onCorrect) onCorrect();
                    }
                }, 1500);
            }
        }
    };

    if (!currentWord) return null;

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="hangman-container text-center p-4 rounded-4 shadow-lg animate__animated animate__fadeIn" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            <div className="d-flex justify-content-between mb-4">
                <span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 15px', fontSize: '0.9rem' }}>
                    Palabra {wordIdx + 1} / {game.words.length}
                </span>
                <span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(220,53,69,0.2)', color: '#ff6b6b', border: '1px solid rgba(220,53,69,0.5)', padding: '8px 15px', fontSize: '0.9rem' }}>
                    <i className="bi bi-heart-fill me-2 text-danger"></i> {lives}
                </span>
            </div>

            <div className="alert d-inline-block shadow-sm fw-bold mb-5 rounded-4" style={{ background: 'rgba(255,193,7,0.1)', border: '1px solid rgba(255,193,7,0.3)', color: '#ffdca8' }}>
                <i className="bi bi-lightbulb-fill text-warning me-2"></i> Pista: {currentWordData.hint}
            </div>

            <div className="word-display d-flex justify-content-center flex-wrap gap-3 mb-5">
                {currentWord.split('').map((letter, i) => (
                    <div key={i} className="rounded-3 shadow-sm" style={{ 
                        width: '45px', 
                        height: '55px', 
                        background: letter === ' ' ? 'transparent' : 'rgba(255,255,255,0.05)',
                        borderBottom: letter === ' ' ? 'none' : '3px solid var(--acento-primario)', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        fontSize: '2rem', 
                        fontWeight: 'bold', 
                        color: 'white',
                        textShadow: (isLetterGuessed(letter) || gameStatus === 'lost') ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                    }}>
                        {(isLetterGuessed(letter) || gameStatus === 'lost') ? letter : ''}
                    </div>
                ))}
            </div>

            {gameStatus === 'playing' && (
                <div className="keyboard d-flex flex-wrap justify-content-center gap-2 max-w-md mx-auto" style={{ maxWidth: '600px' }}>
                    {alphabet.map(letter => {
                        const isGuessed = guessedLetters.has(letter);
                        const isCorrect = isGuessed && currentWord.includes(letter);
                        const isWrong = isGuessed && !currentWord.includes(letter);
                        
                        let btnStyle = { background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' };
                        if (isCorrect) btnStyle = { background: 'rgba(37,117,252,0.2)', color: '#2575fc', border: '1px solid rgba(37,117,252,0.5)' };
                        if (isWrong) btnStyle = { background: 'rgba(220,53,69,0.2)', color: '#dc3545', border: '1px solid rgba(220,53,69,0.5)', opacity: 0.5 };
                        
                        return (
                            <button key={letter}
                                onClick={() => handleGuess(letter)}
                                disabled={isGuessed}
                                className="btn fw-bold rounded-3 transition-all"
                                style={{ 
                                    width: '45px', 
                                    height: '45px', 
                                    ...btnStyle,
                                    transform: isGuessed ? 'scale(0.95)' : 'scale(1)'
                                }}
                                onMouseOver={(e) => { if (!isGuessed) { e.currentTarget.style.background = 'var(--acento-primario)'; e.currentTarget.style.color = '#111'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                                onMouseOut={(e) => { if (!isGuessed) { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1)'; } }}>
                                {letter}
                            </button>
                        );
                    })}
                </div>
            )}

            {gameStatus === 'lost' && (
                <div className="alert alert-danger mt-4 fw-bold animate__animated animate__shakeX">
                    ¡Perdiste! La palabra era: {currentWord}
                    <button className="btn btn-sm btn-danger ms-3" onClick={() => { setLives(6); setGuessedLetters(new Set()); setGameStatus('playing'); }}>Reintentar</button>
                </div>
            )}
            {gameStatus === 'won_word' && (<div className="text-primary fs-3 fw-bold mt-4 animate__animated animate__bounceIn">¡Correcto!</div>)}
            {gameStatus === 'won_all' && (<div className="text-primary fs-2 fw-bold mt-4 animate__animated animate__tada">🏆 ¡Completaste todas las palabras!</div>)}
        </div>
    );
};

/* ── 9. Crossword Game (Practice Zone) ────────────────────────────────── */
function CrosswordGame({ game, onCorrect }) {
    const [userGrid, setUserGrid] = useState({});
    const [selectedCell, setSelectedCell] = useState(null);
    const [selectedDir, setSelectedDir] = useState('across');
    const [showErrors, setShowErrors] = useState(false);

    const answerGrid = React.useMemo(() => {
        const grid = {};
        const cellNumbers = {};
        if (!game.words) return { grid, cellNumbers };

        game.words.forEach(w => {
            const chars = w.word.toUpperCase().split('');
            chars.forEach((char, i) => {
                const r = w.dir === 'down' ? w.row + i : w.row;
                const c = w.dir === 'across' ? w.col + i : w.col;
                const key = `${r}-${c}`;
                grid[key] = char;
                if (i === 0) cellNumbers[key] = w.num;
            });
        });
        return { grid, cellNumbers };
    }, [game.words]);

    const isWon = React.useMemo(() => {
        const keys = Object.keys(answerGrid.grid);
        if (keys.length === 0) return false;
        return keys.every(k => (userGrid[k] || '').toUpperCase() === answerGrid.grid[k]);
    }, [userGrid, answerGrid]);

    useEffect(() => {
        if (isWon && onCorrect) {
            onCorrect();
        }
    }, [isWon, onCorrect]);

    const handleCellClick = (r, c) => {
        if (!answerGrid.grid[`${r}-${c}`]) return;
        if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
            setSelectedDir(prev => prev === 'across' ? 'down' : 'across');
        } else {
            setSelectedCell({ r, c });
        }
    };

    const handleKeyDown = (e) => {
        if (!selectedCell || isWon) return;
        const key = e.key;
        const { r, c } = selectedCell;

        if (/^[a-zA-Z]$/.test(key)) {
            setUserGrid(prev => ({ ...prev, [`${r}-${c}`]: key.toUpperCase() }));
            setShowErrors(false);
            const nextR = selectedDir === 'down' ? r + 1 : r;
            const nextC = selectedDir === 'across' ? c + 1 : c;
            if (answerGrid.grid[`${nextR}-${nextC}`]) {
                setSelectedCell({ r: nextR, c: nextC });
            }
        } else if (key === 'Backspace') {
            setUserGrid(prev => ({ ...prev, [`${r}-${c}`]: '' }));
            setShowErrors(false);
            const prevR = selectedDir === 'down' ? r - 1 : r;
            const prevC = selectedDir === 'across' ? c - 1 : c;
            if (answerGrid.grid[`${prevR}-${prevC}`]) {
                setSelectedCell({ r: prevR, c: prevC });
            }
        }
    };

    const getActiveWordLabel = () => {
        if (!selectedCell) return "Selecciona una casilla para ver la pista";
        const word = game.words?.find(w => {
            if (w.dir !== selectedDir) return false;
            if (w.dir === 'across') {
                return w.row === selectedCell.r && selectedCell.c >= w.col && selectedCell.c < w.col + w.word.length;
            } else {
                return w.col === selectedCell.c && selectedCell.r >= w.row && selectedCell.r < w.row + w.word.length;
            }
        });
        return word ? `${word.num} ${word.dir === 'across' ? 'Horizontal' : 'Vertical'}: ${word.hint}` : "Selecciona una casilla para ver la pista";
    };

    if (!game.gridSize) return null;

    return (
        <div className="crossword-container animate__animated animate__fadeIn" style={{ margin: '0 auto', maxWidth: '800px', outline: 'none' }} tabIndex="0" onKeyDown={handleKeyDown}>
            {isWon && (
                <div className="alert text-center fw-bold animate__animated animate__tada my-4 shadow-lg border-0 rounded-4" style={{ background: 'rgba(37,117,252,0.2)', color: '#2575fc', border: '1px solid rgba(37,117,252,0.5)', backdropFilter: 'blur(10px)' }}>
                    <i className="bi bi-star-fill text-warning me-2"></i> ¡Crucigrama perfecto! <i className="bi bi-star-fill text-warning ms-2"></i>
                </div>
            )}

            <div className="text-center p-4 mb-5 rounded-4 shadow-lg" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', backdropFilter: 'blur(10px)' }}>
                <i className="bi bi-info-circle text-info me-2 fs-5 align-middle"></i>
                <span className="fw-bold fs-5 align-middle" style={{ letterSpacing: '1px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{getActiveWordLabel()}</span>
            </div>

            <div className="d-flex justify-content-center mb-5">
                <div className="crossword-grid" style={{ overflowX: "auto", maxWidth: "100%", display: "grid", gridTemplateColumns: `repeat(${game.gridSize.cols}, 45px)`, gridTemplateRows: `repeat(${game.gridSize.rows}, 45px)`, gap: '4px', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
                    {Array.from({ length: game.gridSize.rows }).map((_, r) =>
                        Array.from({ length: game.gridSize.cols }).map((_, c) => {
                            const isCell = !!answerGrid.grid[`${r}-${c}`];
                            const isSelected = selectedCell && selectedCell.r === r && selectedCell.c === c;

                            let isHighlightedPath = false;
                            if (selectedCell) {
                                const activeW = game.words?.find(w => {
                                    if (w.dir !== selectedDir) return false;
                                    if (w.dir === 'across') return w.row === selectedCell.r && selectedCell.c >= w.col && selectedCell.c < w.col + w.word.length;
                                    return w.col === selectedCell.c && selectedCell.r >= w.row && selectedCell.r < w.row + w.word.length;
                                });
                                if (activeW) {
                                    if (activeW.dir === 'across') {
                                        isHighlightedPath = r === activeW.row && c >= activeW.col && c < activeW.col + activeW.word.length;
                                    } else {
                                        isHighlightedPath = c === activeW.col && r >= activeW.row && r < activeW.row + activeW.word.length;
                                    }
                                }
                            }

                            if (!isCell) return <div key={`${r}-${c}`} style={{ background: 'transparent' }} />;

                            let bg = isWon ? 'rgba(37,117,252,0.3)' : (isSelected ? 'rgba(37,117,252,0.4)' : (isHighlightedPath ? 'rgba(37,117,252,0.15)' : 'rgba(255,255,255,0.05)'));
                            let color = isWon ? '#fff' : '#e0e0e0';
                            let border = isWon ? '1px solid rgba(37,117,252,0.5)' : (isSelected ? '2px solid var(--acento-primario)' : (isHighlightedPath ? '1px solid rgba(37,117,252,0.3)' : '1px solid rgba(255,255,255,0.2)'));

                            const currentVal = userGrid[`${r}-${c}`];
                            if (showErrors && currentVal) {
                                if (currentVal !== answerGrid.grid[`${r}-${c}`]) { bg = 'rgba(220,53,69,0.3)'; color = '#ff6b6b'; border = '1px solid rgba(220,53,69,0.5)'; }
                                else { bg = 'rgba(37,117,252,0.3)'; color = '#2575fc'; border = '1px solid rgba(37,117,252,0.5)'; }
                            }

                            return (
                                <div key={`${r}-${c}`} onClick={() => handleCellClick(r, c)}
                                    className="d-flex justify-content-center align-items-center position-relative fw-bold rounded-2 transition-all shadow-sm"
                                    style={{ background: bg, color: color, border: border, cursor: 'pointer', transition: 'all 0.2s', fontSize: '1.2rem', textTransform: 'uppercase' }}>
                                    {answerGrid.cellNumbers[`${r}-${c}`] && (<span style={{ position: 'absolute', top: '2px', left: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{answerGrid.cellNumbers[`${r}-${c}`]}</span>)}
                                    {currentVal}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {!isWon && (
                <div className="text-center mt-4 d-flex justify-content-center gap-3 flex-wrap">
                    <button className="btn rounded-pill px-4 py-2 fw-bold shadow-sm mb-2" onClick={() => setShowErrors(true)} style={{ background: 'rgba(255,193,7,0.2)', color: '#ffdca8', border: '1px solid rgba(255,193,7,0.5)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,193,7,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,193,7,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        <i className="bi bi-check2-circle me-2"></i> Verificar Respuestas
                    </button>
                    <button className="btn rounded-pill px-4 py-2 fw-bold shadow-sm mb-2" onClick={() => {
                        if (window.confirm('¿Estás seguro de que deseas reiniciar todo el crucigrama?')) {
                            setUserGrid({}); setShowErrors(false); setSelectedCell(null);
                        }
                    }} style={{ background: 'rgba(220,53,69,0.1)', color: '#ff6b6b', border: '1px solid rgba(220,53,69,0.3)' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(220,53,69,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(220,53,69,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        <i className="bi bi-arrow-counterclockwise me-2"></i> Reiniciar
                    </button>
                </div>
            )}

            <div className="row mt-4 px-3">
                <div className="col-md-6 text-start">
                    <h6 className="fw-bold" style={{ color: 'var(--color-texto-principal)' }}>➡️ Horizontales</h6>
                    <ul className="list-unstyled small text-muted">
                        {game.words?.filter(w => w.dir === 'across').sort((a, b) => a.num - b.num).map(w => (
                            <li key={w.num} className="mb-1"><strong>{w.num}.</strong> {w.hint}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 text-start">
                    <h6 className="fw-bold" style={{ color: 'var(--color-texto-principal)' }}>⬇️ Verticales</h6>
                    <ul className="list-unstyled small text-muted">
                        {game.words?.filter(w => w.dir === 'down').sort((a, b) => a.num - b.num).map(w => (
                            <li key={w.num} className="mb-1"><strong>{w.num}.</strong> {w.hint}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

/* ── 10. Sentence Builder Game (Practice Zone) ─────────────────────────── */
function SentenceBuilderGame({ game, onCorrect }) {
    const [sentenceIdx, setSentenceIdx] = useState(0);
    const [availableWords, setAvailableWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [status, setStatus] = useState('playing');

    const currentSentence = game.sentences && game.sentences[sentenceIdx];

    useEffect(() => {
        if (!currentSentence) return;
        const words = currentSentence.text.split(' ').map((w, i) => ({ id: `w-${i}`, text: w }));
        if (currentSentence.distractors) {
            currentSentence.distractors.forEach((d, i) => words.push({ id: `d-${i}`, text: d }));
        }
        const timer = setTimeout(() => {
            setAvailableWords(stableShuffle(words));
            setSelectedWords([]);
            setStatus('playing');
        }, 0);
        return () => clearTimeout(timer);
    }, [sentenceIdx, game, currentSentence]);

    const selectWord = (word) => {
        if (status === 'correct') return;
        setAvailableWords(prev => prev.filter(w => w.id !== word.id));
        setSelectedWords(prev => {
            if (prev.some(w => w.id === word.id)) return prev;
            return [...prev, word];
        });
        setStatus('playing');
    };

    const deselectWord = (word) => {
        if (status === 'correct') return;
        setSelectedWords(prev => prev.filter(w => w.id !== word.id));
        setAvailableWords(prev => {
            if (prev.some(w => w.id === word.id)) return prev;
            return [...prev, word];
        });
        setStatus('playing');
    };

    const handleCheck = () => {
        const attempt = selectedWords.map(w => w.text).join(' ');
        if (attempt === currentSentence.text) {
            playSFX('success_chime');
            setStatus('correct');
            setTimeout(() => {
                if (sentenceIdx + 1 < game.sentences.length) {
                    setSentenceIdx(i => i + 1);
                } else {
                    setStatus('won_all');
                    if (onCorrect) onCorrect();
                }
            }, 1500);
        } else {
            playSFX('error');
            setStatus('incorrect');
        }
    };

    const handleClear = () => {
        setAvailableWords(prev => [...prev, ...selectedWords]);
        setSelectedWords([]);
        setStatus('playing');
    };

    if (!currentSentence) return null;

    return (
        <div className="sentence-builder-container p-4 text-center rounded-4 shadow-lg animate__animated animate__fadeIn" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            <h5 className="mb-4 fw-bold" style={{ color: 'var(--acento-primario)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>"{currentSentence.translation}"</h5>

            <div className="build-area mb-4 p-4 rounded-4 d-flex flex-wrap gap-2 justify-content-center align-items-center shadow-sm"
                style={{
                    border: status === 'correct' ? '2px dashed #2575fc' : (status === 'incorrect' ? '2px dashed #dc3545' : '2px dashed rgba(255,255,255,0.2)'),
                    minHeight: '100px', transition: 'all 0.3s',
                    background: status === 'correct' ? 'rgba(37,117,252,0.1)' : (status === 'incorrect' ? 'rgba(220,53,69,0.1)' : 'rgba(255,255,255,0.02)')
                }}>
                {selectedWords.length === 0 && <span className="text-white-50" style={{ letterSpacing: '1px' }}>Toca palabras para formar la oración</span>}
                {selectedWords.map(w => (
                    <button key={w.id} onClick={() => deselectWord(w)} className="btn fw-bold shadow-sm animate__animated animate__zoomIn" style={{ background: 'var(--acento-primario)', color: '#111', borderRadius: '12px' }}>
                        {w.text}
                    </button>
                ))}
            </div>

            <div className="word-bank d-flex flex-wrap gap-2 justify-content-center mb-4" style={{ minHeight: '80px' }}>
                {availableWords.map(w => (
                    <button key={w.id} onClick={() => selectWord(w)} className="btn fw-bold shadow-sm transition-all" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                        {w.text}
                    </button>
                ))}
            </div>

            {status !== 'correct' && status !== 'won_all' && (
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn rounded-pill px-4 shadow-sm" onClick={handleClear} disabled={selectedWords.length === 0} style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Limpiar</button>
                    <button className="btn rounded-pill px-4 fw-bold shadow-sm" onClick={handleCheck} disabled={selectedWords.length === 0} style={{ background: 'var(--acento-primario)', color: '#111', border: 'none' }}>Comprobar</button>
                </div>
            )}

            {status === 'correct' && (<div className="text-primary fw-bold fs-4 animate__animated animate__bounceIn" style={{ textShadow: '0 2px 10px rgba(37,117,252,0.5)' }}><i className="bi bi-check-circle-fill me-2 fs-3 align-middle"></i> ¡Excelente!</div>)}
            {status === 'won_all' && (<div className="alert fw-bold animate__animated animate__tada my-3 shadow-lg border-0 rounded-4" style={{ background: 'rgba(37,117,252,0.2)', color: '#2575fc', border: '1px solid rgba(37,117,252,0.5)', backdropFilter: 'blur(10px)' }}>🎉 ¡Completaste todas las oraciones!</div>)}

            <div className="mt-4 text-end"><span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '8px 15px' }}>Oración {sentenceIdx + 1} de {game.sentences.length}</span></div>
        </div>
    );
};

/* ── 11. Trivia Game (Practice Zone) ────────────────────────────────── */
function TriviaGame({ game, onCorrect }) {
    const [qIdx, setQIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('playing');
    const [score, setScore] = useState(0);

    const question = game.questions && game.questions[qIdx];
    
    // Resilience Logic
    const qText = question ? (question.question || question.q) : '';
    const answerText = question ? (question.answer || question.a) : '';

    const finalOptions = React.useMemo(() => {
        if (!question) return [];
        const rawOptions = question.options || question.o || [];
        // If it's the new dense format {q, a, o}, sometimes 'a' is not in 'o'
        if (question.o && !question.options && answerText && !question.o.includes(answerText)) {
            return [answerText, ...question.o];
        }
        return rawOptions;
    }, [question, answerText]);

    const finalCorrectIdx = React.useMemo(() => {
        if (!question) return 0;
        if (question.correctIdx !== undefined) return question.correctIdx;
        return finalOptions.indexOf(answerText);
    }, [question, finalOptions, answerText]);

    const handleSelect = (idx) => {
        if (status !== 'playing') return;
        setSelectedOption(idx);

        if (idx === finalCorrectIdx) {
            playSFX('success_pop');
            setStatus('correct');
            setScore(s => s + 1);
        } else {
            playSFX('error_buzz');
            setStatus('incorrect');
        }

        setTimeout(() => {
            if (qIdx + 1 < game.questions.length) {
                setQIdx(i => i + 1);
                setSelectedOption(null);
                setStatus('playing');
            } else {
                setStatus('won_all');
                if (onCorrect) onCorrect();
            }
        }, 1500);
    };

    if (!question) return null;

    if (status === 'won_all') {
        return (
            <div className="text-center p-4 animate__animated animate__zoomIn">
                <h2 className="text-warning mb-3"><i className="bi bi-trophy-fill me-2"></i>¡Trivia Completada!</h2>
                <h4 className="text-white mb-4">Puntuación: {score} / {game.questions.length}</h4>
                <div className="progress mb-4 bg-dark" style={{ height: '20px', borderRadius: '10px' }}>
                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: `${(score / game.questions.length) * 100}%` }}></div>
                </div>
                <button className="btn btn-warning rounded-pill px-5 fw-bold shadow-lg transform-hover" onClick={() => { setQIdx(0); setScore(0); setStatus('playing'); setSelectedOption(null); }}>
                    <i className="bi bi-arrow-counterclockwise me-2"></i>Mejorar Puntuación
                </button>
            </div>
        );
    }

    return (
        <div className="trivia-container p-4 rounded-4 shadow-lg animate__animated animate__fadeIn" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            <div className="d-flex justify-content-between mb-5">
                <span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 15px', fontSize: '0.9rem', color: '#fff' }}>
                    Pregunta {qIdx + 1} / {game.questions.length}
                </span>
                <span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(255,193,7,0.2)', border: '1px solid rgba(255,193,7,0.5)', color: '#ffdca8', padding: '8px 15px', fontSize: '0.9rem' }}>
                    <i className="bi bi-star-fill text-warning me-1"></i> {score}
                </span>
            </div>

            <div className="question-box p-4 rounded-4 shadow-sm border-0 mb-5 text-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <h3 className="fw-bold" style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{qText}</h3>
            </div>

            <div className="options d-flex flex-column gap-3 max-w-md mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {finalOptions.map((opt, idx) => {
                    let bg = 'rgba(255,255,255,0.05)'; let border = '1px solid rgba(255,255,255,0.2)'; let icon = null; let textColor = '#e0e0e0';
                    if (selectedOption !== null) {
                        if (idx === finalCorrectIdx) { bg = 'rgba(37,117,252,0.2)'; border = '1px solid rgba(37,117,252,0.5)'; textColor = '#2575fc'; icon = <i className="bi bi-check-circle-fill text-primary ms-auto fs-5 align-middle"></i>; }
                        else if (selectedOption === idx) { bg = 'rgba(220,53,69,0.2)'; border = '1px solid rgba(220,53,69,0.5)'; textColor = '#dc3545'; icon = <i className="bi bi-x-circle-fill text-danger ms-auto fs-5 align-middle"></i>; }
                        else { bg = 'rgba(0,0,0,0.2)'; border = '1px solid rgba(255,255,255,0.05)'; textColor = '#888'; }
                    }
                    return (
                        <button key={idx} className="btn d-flex align-items-center text-start p-3 fw-bold rounded-4 shadow-sm transition-all"
                            style={{ background: bg, border: border, color: textColor, transition: 'all 0.2s', fontSize: '1.1rem' }}
                            onClick={() => handleSelect(idx)} disabled={selectedOption !== null}
                            onMouseOver={(e) => { if (selectedOption === null) { e.currentTarget.style.background = 'var(--acento-primario)'; e.currentTarget.style.color = '#111'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                            onMouseOut={(e) => { if (selectedOption === null) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                        >
                            <span className="me-3" style={{ opacity: selectedOption === null ? 0.5 : 1 }}>{String.fromCharCode(65 + idx)}.</span>{opt}{icon}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

/* ── 12. Fill in the Blanks Game (Practice Zone) ────────────────────────── */
function FillBlanksGame({ game, onCorrect }) {
    const [sentenceIdx, setSentenceIdx] = useState(0);
    const [userInputs, setUserInputs] = useState('');
    const [status, setStatus] = useState('playing');

    const currentData = game.sentences && game.sentences[sentenceIdx];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status !== 'playing' && status !== 'incorrect') return;

        setStatus('checking');
        const isMatch = userInputs.trim().toLowerCase() === currentData.answer.trim().toLowerCase();

        setTimeout(() => {
            if (isMatch) {
                playSFX('success');
                setStatus('correct');
                setTimeout(() => {
                    if (sentenceIdx + 1 < game.sentences.length) {
                        setSentenceIdx(i => i + 1); setUserInputs(''); setStatus('playing');
                    } else {
                        setStatus('won_all');
                        if (onCorrect) onCorrect();
                    }
                }, 1500);
            } else {
                playSFX('error');
                setStatus('incorrect');
            }
        }, 500);
    };

    if (!currentData) return null;

    if (status === 'won_all') {
        return (
            <div className="text-center p-4 animate__animated animate__zoomIn">
                <h2 className="text-primary mb-3"><i className="bi bi-star-fill me-2 text-warning"></i>¡Todo Correcto!</h2>
                <button className="btn btn-outline-light rounded-pill px-4 mt-2" onClick={() => { setSentenceIdx(0); setStatus('playing'); }}>
                    <i className="bi bi-arrow-counterclockwise me-2"></i>Volver a jugar
                </button>
            </div>
        );
    }

    const renderTextWithInput = () => {
        const parts = currentData.text.split(/_{2,}/);
        if (parts.length < 2) return currentData.text;

        let inputClass = "form-control fw-bold mx-2 text-center d-inline-block";
        let inputStyles = { width: '150px', display: 'inline-block', backgroundColor: '#3e445b', color: 'white', border: '2px solid transparent' };

        if (status === 'correct') {
            inputStyles.backgroundColor = 'rgba(37,117,252,0.2)'; inputStyles.border = '2px solid #2575fc'; inputStyles.color = '#2575fc';
        } else if (status === 'incorrect') {
            inputStyles.backgroundColor = 'rgba(220,53,69,0.2)'; inputStyles.border = '2px solid #dc3545'; inputStyles.color = '#dc3545';
            inputClass += ' animate__animated animate__headShake';
        }

        return (
            <div className="fs-3 fw-bold lh-lg">
                <span>{parts[0]}</span>
                <input type="text" className={inputClass} style={inputStyles} value={userInputs}
                    onChange={(e) => { setUserInputs(e.target.value); setStatus('playing'); }}
                    disabled={status === 'checking' || status === 'correct'}
                    autoComplete="off" autoFocus />
                <span>{parts[1]}</span>
            </div>
        );
    };

    return (
        <div className="fill-blanks-container p-5 text-center rounded-4 shadow-lg animate__animated animate__fadeIn" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            <div className="d-flex justify-content-between mb-2">
                <span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 15px', color: '#fff' }}>
                    Completar #{sentenceIdx + 1} de {game.sentences.length}
                </span>
            </div>
            <form onSubmit={handleSubmit} className="mb-4 mt-5">
                {renderTextWithInput()}
                <div className="mt-5">
                    <button type="submit" className="btn btn-lg rounded-pill px-5 fw-bold shadow-sm transition-all"
                        style={{ 
                            background: status === 'correct' ? 'rgba(37,117,252,0.2)' : 'var(--acento-primario)',
                            color: status === 'correct' ? '#2575fc' : '#111',
                            border: status === 'correct' ? '1px solid rgba(37,117,252,0.5)' : 'none',
                        }}
                        disabled={!userInputs.trim() || status === 'checking' || status === 'correct'}>
                        {status === 'checking' ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-chevron-double-right me-2"></i>} Comprobar
                    </button>
                </div>
            </form>
            {status === 'incorrect' && (<div className="text-danger fw-bold mt-3 animate__animated animate__fadeIn" style={{ textShadow: '0 0 10px rgba(220,53,69,0.5)' }}>¡Inténtalo de nuevo! Asegúrate de escribirlo correctamente.</div>)}
        </div>
    );
};

/* ── 13. Reading Comprehension Game (Practice Zone) ─────────────────────── */
function ReadingComprehension({ game, onCorrect }) {
    const [qIdx, setQIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('playing');
    const [score, setScore] = useState(0);

    const question = game.questions && game.questions[qIdx];
    
    // Resilience: Support both structures
    const qText = question ? (question.question || question.q) : '';
    const answerText = question ? question.a : '';
    
    const finalOptions = React.useMemo(() => {
        if (!question) return [];
        const rawOptions = question.options || question.o || [];
        if (question.o && !question.options && !question.o.includes(answerText)) {
            return [answerText, ...question.o];
        }
        return rawOptions;
    }, [question, answerText]);

    const finalCorrectIdx = React.useMemo(() => {
        if (!question) return 0;
        if (question.correctIdx !== undefined) return question.correctIdx;
        return finalOptions.indexOf(answerText);
    }, [question, finalOptions, answerText]);

    const handleSelect = (idx) => {
        if (status !== 'playing') return;
        setSelectedOption(idx);

        if (idx === finalCorrectIdx) {
            playSFX('success_chime');
            setStatus('correct');
            setScore(s => s + 1);
        } else {
            playSFX('error_buzz');
            setStatus('incorrect');
        }

        setTimeout(() => {
            if (qIdx + 1 < game.questions.length) {
                setQIdx(i => i + 1);
                setSelectedOption(null);
                setStatus('playing');
            } else {
                setStatus('won_all');
                if (onCorrect) onCorrect();
            }
        }, 2000);
    };

    if (status === 'won_all') {
        return (
            <div className="text-center p-4 animate__animated animate__zoomIn">
                <h2 className="text-warning mb-3"><i className="bi bi-trophy-fill me-2"></i>Reading Completed!</h2>
                <h4 className="text-white mb-4">Final Score: {score} / {game.questions.length}</h4>
                <div className="progress mb-4 bg-dark" style={{ height: '15px', borderRadius: '10px' }}>
                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: `${(score / game.questions.length) * 100}%` }}></div>
                </div>
                <button className="btn btn-primary rounded-pill px-5 fw-bold shadow" onClick={() => { setQIdx(0); setScore(0); setStatus('playing'); setSelectedOption(null); }}>
                    <i className="bi bi-arrow-counterclockwise me-2"></i>Intentar de nuevo
                </button>
            </div>
        );
    }

    return (
        <div className="reading-comp-container px-3 animate__animated animate__fadeIn">
            <div className="row g-4">
                {/* Left Panel: The Text */}
                <div className="col-lg-6">
                    <div className="reading-text-pane p-4 rounded-4 shadow-lg" 
                         style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', maxHeight: '500px', overflowY: 'auto', lineHeight: '1.8', color: '#e0e0e0', fontSize: '1.1rem' }}>
                        <h5 className="mb-4 fw-bold" style={{ color: 'var(--acento-primario)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}><i className="bi bi-file-text me-2"></i>Reading Passage</h5>
                        <div style={{ whiteSpace: 'pre-wrap' }}>{game.text}</div>
                    </div>
                </div>

                {/* Right Panel: The Question */}
                <div className="col-lg-6">
                    <div className="question-pane p-4 rounded-4 shadow-lg h-100" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                        <div className="d-flex justify-content-between mb-4">
                            <span className="badge rounded-pill shadow-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 15px', color: '#fff' }}>Question {qIdx + 1} of {game.questions.length}</span>
                        </div>
                        
                        <h4 className="mb-4 text-white fw-bold" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{qText}</h4>

                        <div className="d-flex flex-column gap-3">
                            {finalOptions.map((opt, idx) => {
                                let bg = 'rgba(255,255,255,0.05)'; let border = '1px solid rgba(255,255,255,0.2)'; let textColor = '#e0e0e0';
                                if (selectedOption !== null) {
                                    if (idx === finalCorrectIdx) { bg = 'rgba(37,117,252,0.2)'; border = '1px solid rgba(37,117,252,0.5)'; textColor = '#2575fc'; }
                                    else if (selectedOption === idx) { bg = 'rgba(220,53,69,0.2)'; border = '1px solid rgba(220,53,69,0.5)'; textColor = '#dc3545'; }
                                }
                                return (
                                    <button key={idx} className="btn text-start p-3 fw-bold rounded-4 shadow-sm transition-all"
                                        style={{ background: bg, border: border, color: textColor, transition: 'all 0.2s', fontSize: '1.05rem' }}
                                        onClick={() => handleSelect(idx)} disabled={selectedOption !== null}
                                        onMouseOver={(e) => { if (selectedOption === null) { e.currentTarget.style.background = 'var(--acento-primario)'; e.currentTarget.style.color = '#111'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                                        onMouseOut={(e) => { if (selectedOption === null) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#e0e0e0'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                                    >
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>

                        {selectedOption !== null && (
                            <div className={`mt-4 p-3 rounded-4 text-center fw-bold animate__animated animate__fadeIn ${selectedOption === finalCorrectIdx ? 'text-primary' : 'text-danger'}`}
                                 style={{ background: selectedOption === finalCorrectIdx ? 'rgba(37,117,252,0.1)' : 'rgba(220,53,69,0.1)', border: selectedOption === finalCorrectIdx ? '1px solid rgba(37,117,252,0.3)' : '1px solid rgba(220,53,69,0.3)' }}>
                                {selectedOption === finalCorrectIdx ? '✅ Correct Answer!' : `❌ Incorrect. The right answer was: ${finalOptions[finalCorrectIdx]}`}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ── 14. Cloze Test Game (Practice Zone) ────────────────────────────────── */
function ClozeTest({ game, onCorrect }) {
    const [userAnswers, setUserAnswers] = useState({});
    const [selectedGap, setSelectedGap] = useState(0);
    const [fb, setFb] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const [clozeIdx, setClozeIdx] = useState(0); 
    const [attempts, setAttempts] = useState(0);

    const wordBank = React.useMemo(() => {
        if (game.text) {
            const words = [...(game.answers || []), ...(game.distractors || [])];
            return stableShuffle(words);
        }
        if (game.questions) {
            const answers = game.questions.map(q => q.a);
            return stableShuffle(answers);
        }
        return [];
    }, [game]);

    const handleWordSelect = (word) => {
        if (isFinished) return;
        if (!game.text) {
             setUserAnswers({ ...userAnswers, [clozeIdx]: word });
        } else {
             setUserAnswers(prev => ({ ...prev, [selectedGap]: word }));
             const nextGap = Array.from({ length: game.answers.length }).findIndex((_, i) => !userAnswers[i] && i !== selectedGap);
             if (nextGap !== -1) setSelectedGap(nextGap);
        }
    };

    const check = () => {
        if (!game.text) {
            const q = game.questions[clozeIdx];
            const isCorrect = userAnswers[clozeIdx] === q.a;
            if (isCorrect) {
                playSFX('success_pop');
                setFb({ type: 'success', text: '✅ Correct!' });
                setAttempts(0);
                setTimeout(() => {
                    if (clozeIdx + 1 < game.questions.length) {
                        setClozeIdx(clozeIdx + 1);
                        setFb(null);
                    } else {
                        onCorrect();
                    }
                }, 1200);
            } else {
                playSFX('error_buzz');
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);
                setFb({ 
                    type: 'error', 
                    text: newAttempts >= 2 ? `❌ Wrong. Hint: The answer is "${q.a}"` : '❌ Some words are in the wrong place. Try again!' 
                });
            }
        } else {
            const correct = game.answers && game.answers.every((ans, i) => userAnswers[i] === ans);
            if (correct) {
                playSFX('success');
                setFb({ type: 'success', text: '✅ Perfect! The text is complete and correct.' });
                setIsFinished(true);
                setTimeout(() => onCorrect && onCorrect(), 2000);
            } else {
                playSFX('error');
                setFb({ type: 'error', text: '❌ Some words are in the wrong place. Try again!' });
            }
        }
    };

    const renderText = () => {
        if (!game.text && game.questions) {
            const q = game.questions[clozeIdx];
            if (!q) return <div>No questions found for Cloze Test fallback.</div>;
            const parts = q.q ? q.q.split(/\[___\]/) : ["", ""];
            return (
                <div className="cloze-sequence-mode text-center p-4">
                    <div className="mb-4 text-muted small">Oración {clozeIdx + 1} de {game.questions.length}</div>
                    <div className="fs-3 fw-bold lh-lg mb-5" style={{ color: '#e0e0e0' }}>
                        <span>{parts[0]}</span>
                        <span className="badge bg-warning text-dark mx-2 px-3 py-2 border border-white" style={{ minWidth: '120px', display: 'inline-block' }}>
                            {userAnswers[clozeIdx] || '_______'}
                        </span>
                        <span>{parts[1]}</span>
                    </div>
                    
                    <div className="d-flex flex-column align-items-center gap-3 mt-5">
                        <div className="d-flex gap-2 mx-auto" style={{ maxWidth: '500px', width: '100%' }}>
                            <input 
                                className="form-control form-control-lg bg-dark text-white border-warning text-center"
                                placeholder="Type here or click a word..."
                                value={userAnswers[clozeIdx] || ''}
                                onChange={(e) => setUserAnswers(prev => ({ ...prev, [clozeIdx]: e.target.value }))}
                                onKeyDown={(e) => e.key === 'Enter' && check()}
                                autoFocus
                            />
                            <button className="btn btn-warning fw-bold px-4" onClick={check}>
                                {clozeIdx + 1 < game.questions.length ? 'Next' : 'Finish'}
                            </button>
                        </div>

                        <div className="word-bank mt-4 p-3 bg-black bg-opacity-20 rounded border border-secondary w-100">
                            <p className="text-secondary small mb-2 text-center">WORD BANK</p>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                {wordBank.map((word, idx) => (
                                    <button 
                                        key={idx} 
                                        className={`btn btn-sm btn-outline-info rounded-pill ${Object.values(userAnswers).includes(word) ? 'opacity-50' : ''}`}
                                        onClick={() => handleWordSelect(word)}
                                    >
                                        {word}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        const parts = (game.text || "").split(/\{\{\d+\}\}/);
        return (
            <div className="cloze-text lh-lg fs-5 text-start p-4 rounded-4 shadow-lg animate__animated animate__fadeIn" style={{ color: '#e0e0e0', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < (game.answers?.length || 0) && (
                            <button 
                                className={`btn btn-sm mx-1 px-3 fw-bold animate__animated ${selectedGap === i ? 'btn-outline-warning border-2' : (userAnswers[i] ? 'btn-primary' : 'btn-outline-light')}`}
                                style={{ 
                                    minWidth: '80px', 
                                    textTransform: 'none',
                                    borderRadius: '12px',
                                    background: selectedGap === i ? 'rgba(255,193,7,0.1)' : (userAnswers[i] ? 'var(--acento-primario)' : 'rgba(255,255,255,0.05)'),
                                    color: selectedGap === i ? '#ffdca8' : (userAnswers[i] ? '#111' : '#fff'),
                                    border: selectedGap === i ? '2px solid rgba(255,193,7,0.5)' : (userAnswers[i] ? 'none' : '1px solid rgba(255,255,255,0.2)'),
                                    boxShadow: selectedGap === i ? '0 0 10px rgba(255,193,7,0.3)' : 'none'
                                }}
                                onClick={() => setSelectedGap(i)}
                            >
                                {userAnswers[i] || `(${i + 1})`}
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    return (
        <div className="cloze-test-container">
            {renderText()}

            {game.text && (
                <div className="word-bank mt-4 p-3 bg-black rounded border border-secondary shadow-inner">
                    <p className="text-secondary small mb-3 fw-bold"><i className="bi bi-box-fill me-2"></i>WORD BANK (Select a gap, then pick a word)</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {wordBank.map((word, idx) => (
                            <button 
                                key={idx} 
                                className={`btn btn-outline-info fw-bold py-2 px-3 rounded-pill transition-all ${Object.values(userAnswers).includes(word) ? 'opacity-50 grayscale' : 'hover-glow'}`}
                                onClick={() => handleWordSelect(word)}
                                disabled={isFinished}
                            >
                                {word}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="text-center mt-4">
                {!isFinished ? (
                    game.text && (
                        <button 
                            className="btn btn-warning btn-lg px-5 rounded-pill fw-bold shadow" 
                            onClick={check}
                            disabled={Object.keys(userAnswers).length < (game.answers?.length || 0)}
                        >
                            <i className="bi bi-file-check me-2"></i> Verify Paragraph
                        </button>
                    )
                ) : (
                    <button className="btn btn-outline-success btn-lg px-5 rounded-pill fw-bold" onClick={() => { setIsFinished(false); setUserAnswers({}); setFb(null); }}>
                        <i className="bi bi-arrow-counterclockwise me-2"></i> Reset Paragraph
                    </button>
                )}
            </div>
            <Feedback fb={fb} />
        </div>
    );
};


/* ── 15. Word Search Game (Practice Zone) ───────────────────────────────── */
function WordSearchGame({ game, onCorrect }) {
    const [foundWords, setFoundWords] = useState([]);
    const [foundCells, setFoundCells] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [currentGrid, setCurrentGrid] = useState([]);
    const [placedWords, setPlacedWords] = useState([]);

    const wordsToFind = React.useMemo(() => {
        const rawWords = game?.words || [];
        return rawWords.filter(w => w.length <= 12).slice(0, 8);
    }, [game?.words]);
    // Internal Grid Generator
    const generateGrid = React.useCallback(() => {
        const size = 12;
        const newGrid = Array(size).fill().map(() => Array(size).fill(""));
        const successfullyPlaced = [];
        
        const placeWord = (word) => {
            // Forward directions only: horizontal (right), vertical (down), diagonal (down-right)
            const directions = [[0, 1], [1, 0], [1, 1]];
            let placed = false;
            let attempts = 0;
            while (!placed && attempts < 50) {
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const r = Math.floor(Math.random() * size);
                const c = Math.floor(Math.random() * size);
                let canPlace = true;
                for (let i = 0; i < word.length; i++) {
                    const nr = r + i * dir[0], nc = c + i * dir[1];
                    if (nr < 0 || nr >= size || nc < 0 || nc >= size || (newGrid[nr][nc] !== "" && newGrid[nr][nc] !== word[i])) {
                        canPlace = false; break;
                    }
                }
                if (canPlace) {
                    for (let i = 0; i < word.length; i++) newGrid[r + i * dir[0]][c + i * dir[1]] = word[i];
                    placed = true;
                    successfullyPlaced.push(word);
                }
                attempts++;
            }
        };

        wordsToFind.forEach(w => placeWord(w.toUpperCase()));
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (newGrid[r][c] === "") newGrid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
        return { grid: newGrid, placed: successfullyPlaced };
    }, [wordsToFind]);

    // Initialize or Reset
    const resetGame = () => {
        setFoundWords([]);
        setFoundCells([]);
        setSelectedCells([]);
        const result = generateGrid();
        setCurrentGrid(result.grid);
        setPlacedWords(result.placed);
        playSFX('click');
    };

    useEffect(() => {
        const result = generateGrid();
        setCurrentGrid(result.grid);
        setPlacedWords(result.placed);
    }, [generateGrid]);

    const handleCellMouseDown = (r, c) => {
        setIsDragging(true);
        setSelectedCells([{ r, c }]);
        playSFX('click');
    };

    const handleCellMouseEnter = (r, c) => {
        if (!isDragging) return;
        
        const start = selectedCells[0];
        if (!start) return;

        const dr = r - start.r;
        const dc = c - start.c;
        const absDr = Math.abs(dr);
        const absDc = Math.abs(dc);

        // Check if current position forms a straight line (H, V, or 45-deg Diagonal)
        const isHorizontal = dr === 0;
        const isVertical = dc === 0;
        const isDiagonal = absDr === absDc;

        if (isHorizontal || isVertical || isDiagonal) {
            const steps = Math.max(absDr, absDc);
            const stepR = dr === 0 ? 0 : dr / absDr;
            const stepC = dc === 0 ? 0 : dc / absDc;

            const newSelection = [];
            for (let i = 0; i <= steps; i++) {
                newSelection.push({ 
                    r: start.r + Math.round(i * stepR), 
                    c: start.c + Math.round(i * stepC) 
                });
            }
            setSelectedCells(newSelection);
        }
    };

    const handleMouseUp = React.useCallback(() => {
        if (!isDragging) return;
        setIsDragging(false);
        const selectedWord = selectedCells.map(cell => currentGrid[cell.r]?.[cell.c]).join('');
        const reversedWord = selectedWord.split('').reverse().join('');

        let match = null;
        const targetWords = placedWords.map(w => w.toUpperCase());
        if (targetWords.includes(selectedWord) && !foundWords.includes(selectedWord)) match = selectedWord;
        else if (targetWords.includes(reversedWord) && !foundWords.includes(reversedWord)) match = reversedWord;

        if (match) {
            setFoundWords(prev => {
                const next = [...prev, match];
                if (next.length === placedWords.length) setTimeout(() => onCorrect && onCorrect(), 1000);
                return next;
            });
            setFoundCells(prev => [...prev, ...selectedCells]);
            playSFX('success_magic');
        } else if (selectedCells.length > 1) {
            playSFX('error_buzz');
        }
        setSelectedCells([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging, selectedCells, currentGrid, wordsToFind, foundWords, onCorrect]);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseUp]);

    if (!game || currentGrid.length === 0) return null;

    return (
        <div className="word-search-container text-center p-4 animate__animated animate__fadeIn rounded-4 shadow-lg" style={{ userSelect: 'none', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="grid-wrapper d-inline-block p-4 rounded-4 shadow-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {currentGrid.map((row, r) => (
                            <div key={r} className="d-flex">
                                {row.map((char, c) => {
                                    const isFound = foundCells.some(fc => fc.r === r && fc.c === c);
                                    const isSelected = selectedCells.some(sc => sc.r === r && sc.c === c);
                                    let bg = 'rgba(255,255,255,0.03)';
                                    let color = '#fff';
                                    let border = '1px solid rgba(255,255,255,0.05)';
                                    
                                    if (isSelected) {
                                        bg = 'rgba(37,117,252,0.4)';
                                        color = '#fff';
                                        border = '1px solid var(--acento-primario)';
                                    } else if (isFound) {
                                        bg = 'rgba(37,117,252,0.3)';
                                        color = '#2575fc';
                                        border = '1px solid rgba(37,117,252,0.5)';
                                    }

                                    return (
                                        <div key={c}
                                            onMouseDown={() => handleCellMouseDown(r, c)}
                                            onMouseEnter={() => handleCellMouseEnter(r, c)}
                                            className={`d-flex justify-content-center align-items-center fw-bold rounded-2 transition-all ${isFound ? 'animate__animated animate__pulse' : ''}`}
                                            style={{ 
                                                width: 'clamp(28px, 4vw, 42px)', height: 'clamp(28px, 4vw, 42px)', cursor: 'pointer', margin: '2px',
                                                background: bg, color: color, fontSize: '1.1rem', border: border,
                                                boxShadow: isSelected ? '0 0 10px rgba(37,117,252,0.3)' : (isFound ? '0 0 10px rgba(37,117,252,0.3)' : 'none')
                                            }}
                                        >
                                            {char}
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="word-list p-4 rounded-4 shadow-sm h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h6 className="mb-4 fw-bold d-flex align-items-center" style={{ color: 'var(--acento-primario)' }}><i className="bi bi-search me-2"></i> Palabras:</h6>
                        <div className="d-flex flex-column gap-3 overflow-auto" style={{ maxHeight: '400px' }}>
                            {placedWords.map(word => {
                                const isFound = foundWords.includes(word.toUpperCase());
                                return (
                                    <div key={word} className={`p-3 rounded-4 transition-all d-flex justify-content-between align-items-center shadow-sm`} 
                                        style={{ 
                                            border: isFound ? '1px solid rgba(37,117,252,0.5)' : '1px solid rgba(255,255,255,0.1)', 
                                            background: isFound ? 'rgba(37,117,252,0.1)' : 'rgba(255,255,255,0.05)',
                                            color: isFound ? '#2575fc' : '#e0e0e0',
                                            fontSize: '1rem', letterSpacing: '1px'
                                        }}>
                                        <span className={isFound ? 'text-decoration-line-through opacity-75' : ''}>{word}</span>
                                        {isFound && <i className="bi bi-check-circle-fill fs-5 text-primary"></i>}
                                    </div>
                                )
                            })}
                        </div>
                        <button className="btn w-100 mt-4 rounded-pill fw-bold shadow-sm transition-all" onClick={resetGame}
                            style={{ background: 'rgba(255,193,7,0.1)', color: '#ffdca8', border: '1px solid rgba(255,193,7,0.3)' }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,193,7,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,193,7,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <i className="bi bi-shuffle me-2"></i> Mezclar y Reiniciar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default PracticeEngine;

