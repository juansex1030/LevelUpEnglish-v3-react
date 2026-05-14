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
            case 'success_magic': // Magical glissando
                const oscM = ctx.createOscillator();
                const gainM = ctx.createGain();
                oscM.connect(gainM); gainM.connect(ctx.destination);
                oscM.frequency.setValueAtTime(400, now);
                oscM.frequency.exponentialRampToValueAtTime(1200, now + 0.5);
                gainM.gain.setValueAtTime(0.1, now);
                gainM.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                oscM.start(now); oscM.stop(now + 0.5);
                break;
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
    } catch (e) { console.warn("Audio Context blocked"); }
};

/** Trigger Confetti Celebration */
const triggerConfetti = () => {
    if (window.confetti) {
        window.confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffca28', '#28a745', '#0072ff', '#ffffff']
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

function PracticeEngine({ data, onScoreUpdate }) {
    const [completedQuestions, setCompletedQuestions] = React.useState(new Set());

    useEffect(() => {
        setCompletedQuestions(new Set());
    }, [data]);

    if (!data || !data.games) return null;

    const totalQuestions = data.games.length;

    const handleCorrect = (gameIdx) => {
        const key = `${gameIdx}`;
        if (completedQuestions.has(key)) return;

        const newSet = new Set(completedQuestions).add(key);
        setCompletedQuestions(newSet);
        playSFX('success');

        if (newSet.size === totalQuestions) {
            playSFX('win');
            triggerConfetti();
        }

        if (onScoreUpdate) {
            const scorePercent = Math.round((newSet.size / totalQuestions) * 100);
            onScoreUpdate(scorePercent);
        }
    };

    return (
        <div className="practice-engine">
            {data.games.map((game, i) => (
                <div key={i} className="mb-5 p-4 bg-dark text-white rounded-4 shadow-lg border border-secondary transition-all" 
                     style={{ position: 'relative', background: 'rgba(20, 22, 34, 0.95)', backdropFilter: 'blur(10px)' }}>
                    <div className="d-flex align-items-center mb-4 border-bottom border-secondary pb-3">
                        <div className="game-icon bg-gradient me-3 p-3 rounded-circle shadow-sm" style={{ background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)' }}>
                            <span className="fs-3">🎮</span>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-1 text-white">{game.title}</h4>
                            <p className="text-white-50 mb-0 small">{game.instruction}</p>
                        </div>

                        {completedQuestions.has(`${i}`) && (
                            <div className="ms-auto animate__animated animate__bounceIn">
                                <span className="badge bg-success rounded-pill p-2 px-3 shadow-sm border border-white-50">
                                    <i className="bi bi-patch-check-fill me-2"></i>Completado
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="game-board position-relative" style={{ minHeight: '300px', transition: 'all 0.5s' }}>
                        {game.type === 'multiple_choice'  && <MultipleChoice game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'fill_in'          && <FillIn game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'unscramble'       && <Unscramble game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'matching'         && <Matching game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'spell_tool'       && <SpellTool game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'hangman_game'     && <HangmanGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'sentence_builder' && <SentenceBuilderGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'trivia_game'      && <TriviaGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'reading_comprehension' && <ReadingComprehension game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'cloze_test'       && <ClozeTest game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'word_search'      && <WordSearchGame game={game} onCorrect={() => handleCorrect(i)} />}

                    </div>
                </div>
            ))}
        </div>
    );
};

/* ── shared feedback banner ─────────────────────────────────────────── */
function Feedback({ fb }) {
    if (!fb) return null;
    const ok = fb.type === 'success';
    return (
        <div className={`mt-3 p-2 rounded text-center fw-bold ${ok ? 'text-success' : 'text-danger'}`}
             style={{ background: ok ? 'rgba(40,167,69,.12)' : 'rgba(220,53,69,.12)', fontSize: '0.95rem' }}>
            {fb.text}
        </div>
    );
};

/* ── 1. Multiple Choice ─────────────────────────────────────────────── */
function MultipleChoice({ game, onCorrect }) {
    const [idx, setIdx] = useState(0);
    const [fb, setFb] = useState(null);
    const q = game.questions ? game.questions[idx] : null;
    if (!q) return <div className="p-4 text-center text-white-50">Cargando pregunta...</div>;

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

    const [attempts, setAttempts] = useState(0);

    const choose = (opt) => {
        if (fb?.type === 'success') return;
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

    return (
        <div className="multiple-choice animate__animated animate__fadeIn">
            <div className="text-center fs-5 fw-bold mb-4 py-3 px-3 rounded-4 shadow-sm" 
                 style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,0.1)' }}>{q.q}</div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
                {shuffledOptions.map((opt, i) => (
                    <button key={i} 
                            className="btn btn-outline-primary px-4 py-3 fw-bold rounded-pill shadow-sm transition-all hover-glow" 
                            style={{ minWidth: '150px' }}
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
            <div className="fs-5 fw-bold mb-4 p-4 rounded-4 text-center shadow-sm" 
                 style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,0.1)' }}>{q.q}</div>
            <div className="d-flex gap-3 mb-2 max-w-md mx-auto" style={{ maxWidth: '500px' }}>
                <input className="form-control form-control-lg bg-dark text-white border-secondary rounded-3" 
                       placeholder="Type your answer..."
                       value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && check()} />
                <button className="btn btn-primary px-4 rounded-3 fw-bold" onClick={check}>Check</button>
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 3. Unscramble ──────────────────────────────────────────────────── */
function Unscramble({ game, onCorrect }) {
    console.log("[PracticeEngine] Rendering Unscramble", game);
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
        <>
            <div className="p-3 rounded mb-4 text-center" style={{ background: 'rgba(255,255,255,.05)' }}><span className="text-muted d-block small">Scrambled:</span><span className="fw-bold fs-5">{q.q}</span></div>
            <div className="d-flex gap-2 mb-2">
                <input className="form-control" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && check()} />
                <button className="btn btn-primary" onClick={check}>Check</button>
            </div>
            <Feedback fb={fb} />
        </>
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
                                className="form-select bg-dark text-light border-secondary w-100" 
                                style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', padding: '10px', fontSize: '0.9rem', cursor: 'pointer' }}
                                onChange={e => setSelections(s => ({ ...s, [i]: e.target.value }))}
                            >
                                <option value="">Match...</option>
                                {shuffledOptions.map((a, j) => <option key={j} value={a}>{a}</option>)}
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
        <>
            <div className="d-flex gap-2 mb-3">
                <input className="form-control" value={name} onChange={e => setName(e.target.value)} onKeyDown={e => e.key === 'Enter' && spell()} />
                <button className="btn btn-primary" onClick={spell}>Spell it!</button>
            </div>
            {result && <div className="p-3 rounded text-center fw-bold fs-5 text-info">{result}</div>}
        </>
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
        <div className="hangman-container text-center p-4">
            <div className="d-flex justify-content-between mb-4">
                <span className="badge bg-secondary p-2">Palabra {wordIdx + 1} / {game.words.length}</span>
                <span className="badge bg-danger p-2"><i className="bi bi-heart-fill me-1"></i>x {lives}</span>
            </div>

            <div className="alert alert-info d-inline-block shadow-sm fw-bold mb-5">
                <i className="bi bi-lightbulb-fill text-warning me-2"></i> Pista: {currentWordData.hint}
            </div>

            <div className="word-display d-flex justify-content-center flex-wrap gap-2 mb-5">
                {currentWord.split('').map((letter, i) => (
                    <div key={i} style={{ width: '40px', height: '50px', borderBottom: letter === ' ' ? 'none' : '3px solid white', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', fontSize: '2rem', fontWeight: 'bold', color: 'white', margin: '0 5px' }}>
                        {(isLetterGuessed(letter) || gameStatus === 'lost') ? letter : ''}
                    </div>
                ))}
            </div>

            {gameStatus === 'playing' && (
                <div className="keyboard d-flex flex-wrap justify-content-center gap-2 max-w-md mx-auto">
                    {alphabet.map(letter => {
                        const isGuessed = guessedLetters.has(letter);
                        const isCorrect = isGuessed && currentWord.includes(letter);
                        const isWrong = isGuessed && !currentWord.includes(letter);
                        return (
                            <button key={letter}
                                onClick={() => handleGuess(letter)}
                                disabled={isGuessed}
                                className={`btn fw-bold shadow-sm ${isCorrect ? 'btn-success' : (isWrong ? 'btn-danger opacity-50' : 'btn-light')}`}
                                style={{ width: '45px', height: '45px' }}>
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
            {gameStatus === 'won_word' && (<div className="text-success fs-3 fw-bold mt-4 animate__animated animate__bounceIn">¡Correcto!</div>)}
            {gameStatus === 'won_all' && (<div className="text-success fs-2 fw-bold mt-4 animate__animated animate__tada">🏆 ¡Completaste todas las palabras!</div>)}
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
        <div className="crossword-container" style={{ margin: '0 auto', maxWidth: '800px', outline: 'none' }} tabIndex="0" onKeyDown={handleKeyDown}>
            {isWon && (
                <div className="alert alert-success text-center fw-bold animate__animated animate__tada my-3 shadow-sm border-0">
                    <i className="bi bi-star-fill text-warning me-2"></i> ¡Crucigrama perfecto! <i className="bi bi-star-fill text-warning ms-2"></i>
                </div>
            )}

            <div className="text-center p-3 mb-4 rounded shadow-sm bg-dark border border-secondary" style={{ color: 'var(--color-texto-principal)' }}>
                <i className="bi bi-info-circle text-info me-2"></i>
                <span className="fw-bold">{getActiveWordLabel()}</span>
            </div>

            <div className="d-flex justify-content-center">
                <div className="crossword-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${game.gridSize.cols}, 40px)`, gridTemplateRows: `repeat(${game.gridSize.rows}, 40px)`, gap: '2px', background: '#222', padding: '4px', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
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

                            let bg = isWon ? '#28a745' : (isSelected ? '#ffca28' : (isHighlightedPath ? '#fffde7' : 'white'));
                            let color = isWon ? 'white' : 'black';

                            const currentVal = userGrid[`${r}-${c}`];
                            if (showErrors && currentVal) {
                                if (currentVal !== answerGrid.grid[`${r}-${c}`]) { bg = '#f8d7da'; color = '#dc3545'; }
                                else { bg = '#d4edda'; color = '#28a745'; }
                            }

                            return (
                                <div key={`${r}-${c}`} onClick={() => handleCellClick(r, c)}
                                    className="d-flex justify-content-center align-items-center position-relative fw-bold"
                                    style={{ background: bg, color: color, cursor: 'pointer', transition: 'all 0.2s' }}>
                                    {answerGrid.cellNumbers[`${r}-${c}`] && (<span style={{ position: 'absolute', top: '1px', left: '3px', fontSize: '10px', color: '#555' }}>{answerGrid.cellNumbers[`${r}-${c}`]}</span>)}
                                    {currentVal}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {!isWon && (
                <div className="text-center mt-4 d-flex justify-content-center gap-3 flex-wrap">
                    <button className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm mb-2" onClick={() => setShowErrors(true)}>
                        <i className="bi bi-check2-circle me-2"></i> Verificar Respuestas
                    </button>
                    <button className="btn btn-outline-danger rounded-pill px-4 fw-bold shadow-sm mb-2" onClick={() => {
                        if (window.confirm('¿Estás seguro de que deseas reiniciar todo el crucigrama?')) {
                            setUserGrid({}); setShowErrors(false); setSelectedCell(null);
                        }
                    }}>
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
        setAvailableWords(stableShuffle(words));
        setSelectedWords([]);
        setStatus('playing');
    }, [sentenceIdx, game]);

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
        <div className="sentence-builder-container p-4 text-center">
            <h5 className="mb-4 text-info fw-bold">"{currentSentence.translation}"</h5>

            <div className="build-area mb-4 p-3 rounded d-flex flex-wrap gap-2 justify-content-center align-items-center"
                style={{
                    border: status === 'correct' ? '2px dashed #28a745' : (status === 'incorrect' ? '2px dashed #dc3545' : '2px dashed var(--color-borde)'),
                    minHeight: '80px', transition: 'all 0.3s',
                    background: status === 'correct' ? 'rgba(40,167,69,0.1)' : (status === 'incorrect' ? 'rgba(220,53,69,0.1)' : 'rgba(255,255,255,0.05)')
                }}>
                {selectedWords.length === 0 && <span className="text-muted" style={{ opacity: 0.5 }}>Toca palabras para formar la oración</span>}
                {selectedWords.map(w => (<button key={w.id} onClick={() => deselectWord(w)} className="btn btn-light fw-bold shadow-sm animate__animated animate__fadeIn">{w.text}</button>))}
            </div>

            <div className="word-bank d-flex flex-wrap gap-2 justify-content-center mb-4" style={{ minHeight: '80px' }}>
                {availableWords.map(w => (<button key={w.id} onClick={() => selectWord(w)} className="btn fw-bold shadow-sm" style={{ background: '#3e445b', color: 'white' }}>{w.text}</button>))}
            </div>

            {status !== 'correct' && status !== 'won_all' && (
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-secondary rounded-pill px-4" onClick={handleClear} disabled={selectedWords.length === 0}>Limpiar</button>
                    <button className="btn btn-warning rounded-pill px-4 fw-bold" onClick={handleCheck} disabled={selectedWords.length === 0}>Comprobar</button>
                </div>
            )}

            {status === 'correct' && (<div className="text-success fw-bold animate__animated animate__bounceIn"><i className="bi bi-check-circle-fill me-2 fs-4"></i> ¡Excelente!</div>)}
            {status === 'won_all' && (<div className="alert alert-success fw-bold animate__animated animate__tada my-3 shadow-sm border-0">🎉 ¡Completaste todas las oraciones!</div>)}

            <div className="mt-4 text-end"><span className="badge bg-dark text-white p-2">Oración {sentenceIdx + 1} de {game.sentences.length}</span></div>
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
    const rawOptions = question ? (question.options || question.o || []) : [];
    const answerText = question ? (question.answer || question.a) : '';

    const finalOptions = React.useMemo(() => {
        if (!question) return [];
        // If it's the new dense format {q, a, o}, sometimes 'a' is not in 'o'
        if (question.o && !question.options && answerText && !question.o.includes(answerText)) {
            return [answerText, ...question.o];
        }
        return rawOptions;
    }, [question, rawOptions, answerText]);

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
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: `${(score / game.questions.length) * 100}%` }}></div>
                </div>
                <button className="btn btn-warning rounded-pill px-5 fw-bold shadow-lg transform-hover" onClick={() => { setQIdx(0); setScore(0); setStatus('playing'); setSelectedOption(null); }}>
                    <i className="bi bi-arrow-counterclockwise me-2"></i>Mejorar Puntuación
                </button>
            </div>
        );
    }

    return (
        <div className="trivia-container p-4">
            <div className="d-flex justify-content-between mb-4">
                <span className="badge bg-info text-dark p-2 fs-6 fw-bold">Pregunta {qIdx + 1} / {game.questions.length}</span>
                <span className="badge bg-warning text-dark p-2 fs-6 fw-bold">Puntos: {score}</span>
            </div>

            <div className="question-box bg-dark p-4 rounded shadow-sm border border-secondary mb-4 text-center">
                <h4 style={{ color: 'var(--color-texto-principal)' }}>{qText}</h4>
            </div>

            <div className="options d-flex flex-column gap-3 max-w-md mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {finalOptions.map((opt, idx) => {
                    let bg = '#3e445b'; let border = '2px solid transparent'; let icon = null;
                    if (selectedOption !== null) {
                        if (idx === finalCorrectIdx) { bg = 'rgba(40,167,69,0.2)'; border = '2px solid #28a745'; icon = <i className="bi bi-check-circle-fill text-success ms-auto"></i>; }
                        else if (selectedOption === idx) { bg = 'rgba(220,53,69,0.2)'; border = '2px solid #dc3545'; icon = <i className="bi bi-x-circle-fill text-danger ms-auto"></i>; }
                        else { bg = 'rgba(0,0,0,0.2)'; }
                    }
                    return (
                        <button key={idx} className={`btn d-flex align-items-center text-start p-3 fw-bold fs-5 ${selectedOption === null ? 'trivia-btn-hover' : ''}`}
                            style={{ background: bg, border: border, color: 'white', transition: 'all 0.2s' }}
                            onClick={() => handleSelect(idx)} disabled={selectedOption !== null}>
                            <span className="me-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>{opt}{icon}
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
                <h2 className="text-success mb-3"><i className="bi bi-star-fill me-2 text-warning"></i>¡Todo Correcto!</h2>
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
            inputStyles.backgroundColor = 'rgba(40,167,69,0.2)'; inputStyles.border = '2px solid #28a745'; inputStyles.color = '#28a745';
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
        <div className="fill-blanks-container p-5 text-center">
            <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-secondary p-2">Completar #{sentenceIdx + 1} de {game.sentences.length}</span>
            </div>
            <form onSubmit={handleSubmit} className="mb-4 mt-5">
                {renderTextWithInput()}
                <div className="mt-5">
                    <button type="submit" className={`btn btn-lg rounded-pill px-5 fw-bold shadow-sm ${status === 'correct' ? 'btn-success' : 'btn-warning'}`}
                        disabled={!userInputs.trim() || status === 'checking' || status === 'correct'}>
                        {status === 'checking' ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-chevron-double-right me-2"></i>} Comprobar
                    </button>
                </div>
            </form>
            {status === 'incorrect' && (<div className="text-danger fw-bold mt-3 animate__animated animate__fadeIn">¡Inténtalo de nuevo! Asegúrate de escribirlo correctamente.</div>)}
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
    const rawOptions = question ? (question.options || question.o || []) : [];
    const answerText = question ? question.a : '';
    
    const finalOptions = React.useMemo(() => {
        if (!question) return [];
        if (question.o && !question.options && !question.o.includes(answerText)) {
            return [answerText, ...question.o];
        }
        return rawOptions;
    }, [question, rawOptions, answerText]);

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
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: `${(score / game.questions.length) * 100}%` }}></div>
                </div>
                <button className="btn btn-primary rounded-pill px-5 fw-bold shadow" onClick={() => { setQIdx(0); setScore(0); setStatus('playing'); setSelectedOption(null); }}>
                    <i className="bi bi-arrow-counterclockwise me-2"></i>Intentar de nuevo
                </button>
            </div>
        );
    }

    return (
        <div className="reading-comp-container px-3">
            <div className="row g-4">
                {/* Left Panel: The Text */}
                <div className="col-lg-6">
                    <div className="reading-text-pane p-4 rounded bg-dark border border-secondary shadow-sm" 
                         style={{ maxHeight: '500px', overflowY: 'auto', lineHeight: '1.8', color: '#e0e0e0', fontSize: '1.1rem' }}>
                        <h5 className="text-warning mb-3 fw-bold"><i className="bi bi-file-text me-2"></i>Reading Passage</h5>
                        <div style={{ whiteSpace: 'pre-wrap' }}>{game.text}</div>
                    </div>
                </div>

                {/* Right Panel: The Question */}
                <div className="col-lg-6">
                    <div className="question-pane p-4 rounded bg-dark border border-secondary shadow-sm h-100">
                        <div className="d-flex justify-content-between mb-4">
                            <span className="badge bg-secondary p-2">Question {qIdx + 1} of {game.questions.length}</span>
                        </div>
                        
                        <h4 className="mb-4 text-white fw-bold">{question.question}</h4>

                        <div className="d-flex flex-column gap-3">
                            {question.options.map((opt, idx) => {
                                let bg = '#2c3144'; let border = '2px solid transparent';
                                if (selectedOption !== null) {
                                    if (idx === finalCorrectIdx) { bg = 'rgba(40,167,69,0.2)'; border = '2px solid #28a745'; }
                                    else if (selectedOption === idx) { bg = 'rgba(220,53,69,0.2)'; border = '2px solid #dc3545'; }
                                }
                                return (
                                    <button key={idx} className="btn text-start p-3 fw-bold text-white shadow-sm"
                                        style={{ background: bg, border: border, transition: 'all 0.2s' }}
                                        onClick={() => handleSelect(idx)} disabled={selectedOption !== null}>
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>

                        {selectedOption !== null && (
                            <div className={`mt-4 p-2 rounded text-center fw-bold animate__animated animate__fadeIn ${selectedOption === finalCorrectIdx ? 'text-success' : 'text-danger'}`}
                                 style={{ background: 'rgba(255,255,255,0.05)' }}>
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
            <div className="cloze-text lh-lg fs-5 text-start p-4 bg-dark border border-secondary rounded shadow-sm" style={{ color: '#e0e0e0' }}>
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < (game.answers?.length || 0) && (
                            <button 
                                className={`btn btn-sm mx-1 px-3 fw-bold animate__animated ${selectedGap === i ? 'btn-outline-warning border-2' : (userAnswers[i] ? 'btn-primary' : 'btn-outline-secondary')}`}
                                style={{ minWidth: '80px', textTransform: 'none' }}
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
    if (!game) return null;
    const [foundCells, setFoundCells] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [currentGrid, setCurrentGrid] = useState([]);

    const wordsToFind = React.useMemo(() => game.words || [], [game.words]);

    // Internal Grid Generator
    const generateGrid = React.useCallback(() => {
        const size = 12;
        const newGrid = Array(size).fill().map(() => Array(size).fill(""));
        
        const placeWord = (word) => {
            const directions = [[0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]];
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
        return newGrid;
    }, [wordsToFind]);

    // Initialize or Reset
    const resetGame = () => {
        setFoundWords([]);
        setFoundCells([]);
        setSelectedCells([]);
        setCurrentGrid(generateGrid());
        playSFX('click');
    };

    useEffect(() => {
        setCurrentGrid(generateGrid());
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

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        const selectedWord = selectedCells.map(cell => currentGrid[cell.r][cell.c]).join('');
        const reversedWord = selectedWord.split('').reverse().join('');

        let match = null;
        const targetWords = wordsToFind.map(w => w.toUpperCase());
        if (targetWords.includes(selectedWord) && !foundWords.includes(selectedWord)) match = selectedWord;
        else if (targetWords.includes(reversedWord) && !foundWords.includes(reversedWord)) match = reversedWord;

        if (match) {
            setFoundWords(prev => {
                const next = [...prev, match];
                if (next.length === wordsToFind.length) setTimeout(() => onCorrect && onCorrect(), 1000);
                return next;
            });
            setFoundCells(prev => [...prev, ...selectedCells]);
            playSFX('success_magic');
        } else if (selectedCells.length > 1) {
            playSFX('error_buzz');
        }
        setSelectedCells([]);
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, [selectedCells, foundWords, isDragging, currentGrid]);

    if (currentGrid.length === 0) return null;

    return (
        <div className="word-search-container text-center p-3 animate__animated animate__fadeIn" style={{ userSelect: 'none' }}>
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="grid-wrapper d-inline-block p-3 bg-dark rounded-4 shadow-lg border border-secondary" style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)' }}>
                        {currentGrid.map((row, r) => (
                            <div key={r} className="d-flex">
                                {row.map((char, c) => (
                                    <div key={c}
                                        onMouseDown={() => handleCellMouseDown(r, c)}
                                        onMouseEnter={() => handleCellMouseEnter(r, c)}
                                        className={`d-flex justify-content-center align-items-center fw-bold rounded-1 transition-all ${foundCells.some(fc => fc.r === r && fc.c === c) ? 'animate__animated animate__pulse' : ''}`}
                                        style={{ 
                                            width: 'clamp(25px, 4vw, 38px)', height: 'clamp(25px, 4vw, 38px)', cursor: 'pointer', margin: '1px',
                                            background: selectedCells.some(sc => sc.r === r && sc.c === c) ? '#ffca28' : (foundCells.some(fc => fc.r === r && fc.c === c) ? 'rgba(40, 167, 69, 0.4)' : 'rgba(255,255,255,0.03)'),
                                            color: selectedCells.some(sc => sc.r === r && sc.c === c) ? '#000' : '#fff',
                                            fontSize: '1rem', border: foundCells.some(fc => fc.r === r && fc.c === c) ? '1px solid #28a745' : '1px solid transparent'
                                        }}
                                    >
                                        {char}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="word-list p-4 bg-dark rounded-4 border border-secondary shadow-sm h-100" style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <h6 className="text-warning mb-4 fw-bold d-flex align-items-center"><i className="bi bi-search me-2"></i> Palabras:</h6>
                        <div className="d-flex flex-column gap-2 overflow-auto" style={{ maxHeight: '350px' }}>
                            {wordsToFind.map(word => (
                                <div key={word} className={`p-2 rounded-3 transition-all d-flex justify-content-between align-items-center ${foundWords.includes(word.toUpperCase()) ? 'text-success border-success bg-success bg-opacity-10' : 'text-white-50 border-secondary'}`} style={{ border: '1px solid', fontSize: '0.85rem' }}>
                                    <span className={foundWords.includes(word.toUpperCase()) ? 'text-decoration-line-through' : ''}>{word}</span>
                                    {foundWords.includes(word.toUpperCase()) && <i className="bi bi-check-all fs-5"></i>}
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-outline-warning btn-sm w-100 mt-4 rounded-pill fw-bold" onClick={resetGame}>
                            <i className="bi bi-shuffle me-2"></i> Mezclar y Reiniciar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default PracticeEngine;

