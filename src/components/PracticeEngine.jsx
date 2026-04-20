import React, { useState, useEffect } from 'react';

/* =====================================================================
   PracticeEngine.jsx
   Renders game data stored as JSON in the database.
   Supported game types:
     - multiple_choice
     - fill_in
     - unscramble
     - matching
     - spell_tool
     - number_words
     - memory_game
     - hangman_game
     - crossword_game
     - sentence_builder
     - trivia_game
     - fill_blanks_game
===================================================================== */

/** Stable Fisher-Yates shuffle — avoids V8 sort instability with Math.random()-0.5 */
const stableShuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const PracticeEngine = ({ data, onScoreUpdate }) => {
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

        if (onScoreUpdate) {
            const scorePercent = Math.round((newSet.size / totalQuestions) * 100);
            onScoreUpdate(scorePercent);
        }
    };

    return (
        <div className="practice-engine">
            {data.games.map((game, i) => (
                <div key={i} className="mb-5 p-4 bg-dark rounded shadow-sm border border-secondary" style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center mb-3 border-bottom border-secondary pb-3">
                        <div className="game-icon bg-gradient me-3 p-3 rounded-circle shadow-sm" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
                            <span className="fs-3">🎮</span>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-1 text-white">{game.title}</h4>
                            <p className="text-secondary mb-0">{game.instruction}</p>
                        </div>

                        {completedQuestions.has(`${i}`) && (
                            <div className="ms-auto animate__animated animate__zoomIn">
                                <span className="badge bg-success rounded-pill p-2 px-3 shadow-sm">
                                    <i className="bi bi-check-circle-fill me-2"></i>Completado
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="game-board position-relative" style={{ minHeight: '300px', filter: completedQuestions.has(`${i}`) ? 'brightness(0.7) grayscale(0.5)' : 'none', transition: 'all 0.5s', pointerEvents: completedQuestions.has(`${i}`) ? 'none' : 'auto' }}>
                        {game.type === 'multiple_choice'  && <MultipleChoice game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'fill_in'          && <FillIn game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'unscramble'       && <Unscramble game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'matching'         && <Matching game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'spell_tool'       && <SpellTool game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'number_words'     && <NumberWords game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'memory_game'      && <MemoryGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'hangman_game'     && <HangmanGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'crossword_game'   && <CrosswordGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'sentence_builder' && <SentenceBuilderGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'trivia_game'      && <TriviaGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'fill_blanks_game' && <FillBlanksGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'reading_comprehension' && <ReadingComprehension game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'cloze_test'       && <ClozeTest game={game} onCorrect={() => handleCorrect(i)} />}
                    </div>
                </div>
            ))}
        </div>
    );
};

/* ── shared feedback banner ─────────────────────────────────────────── */
const Feedback = ({ fb }) => {
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
const MultipleChoice = ({ game, onCorrect }) => {
    const [idx, setIdx] = useState(0);
    const [fb, setFb] = useState(null);
    const q = game.questions[idx];

    const shuffledOptions = React.useMemo(() => {
        if (!q || !q.options) return [];
        return stableShuffle(q.options);
    }, [q]);

    const choose = (opt) => {
        if (opt === q.a) {
            setFb({ type: 'success', text: '✅ Correct!' });
            if (idx === game.questions.length - 1) {
                setTimeout(() => onCorrect(), 1400);
            } else {
                setTimeout(() => { setFb(null); setIdx(i => i + 1); }, 1400);
            }
        } else {
            setFb({ type: 'error', text: '❌ Try again!' });
        }
    };

    return (
        <>
            <div className="text-center fs-5 fw-semibold mb-4 py-2 px-3 rounded" style={{ background: 'rgba(255,255,255,.05)' }}>{q.q}</div>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {shuffledOptions.map((opt, i) => (
                    <button key={i} className="btn btn-outline-primary px-4 py-2" onClick={() => choose(opt)}>{opt}</button>
                ))}
            </div>
            <Feedback fb={fb} />
        </>
    );
};

/* ── 2. Fill In ─────────────────────────────────────────────────────── */
const FillIn = ({ game, onCorrect }) => {
    const [idx, setIdx] = useState(0);
    const [val, setVal] = useState('');
    const [fb, setFb] = useState(null);
    const q = game.questions[idx];

    const check = () => {
        if (val.trim().toLowerCase() === q.a.toLowerCase()) {
            setFb({ type: 'success', text: '✅ Excellent!' });
            if (idx === game.questions.length - 1) {
                setTimeout(() => onCorrect(), 1400);
            } else {
                setTimeout(() => { setFb(null); setVal(''); setIdx(i => i + 1); }, 1400);
            }
        } else {
            setFb({ type: 'error', text: `❌ Almost! The answer is: "${q.a}"` });
        }
    };

    return (
        <>
            <div className="fs-5 fw-semibold mb-4 p-3 rounded text-center" style={{ background: 'rgba(255,255,255,.05)' }}>{q.q}</div>
            <div className="d-flex gap-2 mb-2">
                <input className="form-control" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && check()} />
                <button className="btn btn-primary" onClick={check}>Check</button>
            </div>
            <Feedback fb={fb} />
        </>
    );
};

/* ── 3. Unscramble ──────────────────────────────────────────────────── */
const Unscramble = ({ game, onCorrect }) => {
    const [idx, setIdx] = useState(0);
    const [val, setVal] = useState('');
    const [fb, setFb] = useState(null);
    const q = game.questions[idx];

    const check = () => {
        if (val.trim().toLowerCase() === q.a.toLowerCase()) {
            setFb({ type: 'success', text: '✅ Perfect!' });
            if (idx === game.questions.length - 1) {
                setTimeout(() => onCorrect(), 1400);
            } else {
                setTimeout(() => { setFb(null); setVal(''); setIdx(i => i + 1); }, 1400);
            }
        } else {
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
const Matching = ({ game, onCorrect }) => {
    const [selections, setSelections] = useState({});
    const [fb, setFb] = useState(null);
    const shuffled = React.useMemo(() => stableShuffle(game.questions.map(q => q.a)), [game]);

    const check = () => {
        const allRight = game.questions.every((q, i) => selections[i] === q.a);
        if (allRight) {
            setFb({ type: 'success', text: '✅ All matches are correct! Excellent logic!' });
            setTimeout(() => { if (onCorrect) onCorrect(); }, 1400);
        } else {
            setFb({ type: 'error', text: '❌ Some matches are incorrect. Check your connections!' });
        }
    };

    return (
        <div className="matching-game animate__animated animate__fadeIn">
            <div className="list-group shadow-sm mb-4">
                {game.questions.map((q, i) => (
                    <div key={i} className="list-group-item d-md-flex align-items-center justify-content-between p-3 gap-3 border-0 rounded-3 mb-2" style={{ background: 'rgba(255,255,255,0.03)', transition: 'all 0.2s' }}>
                        <div className="matching-question flex-grow-1">
                            <span className="badge bg-secondary-subtle text-secondary me-2">{i + 1}</span>
                            <span className="fw-medium text-light">{q.q}</span>
                        </div>
                        <div className="matching-selector mt-2 mt-md-0 d-flex align-items-center" style={{ minWidth: '180px' }}>
                            <i className="bi bi-arrow-right-short text-warning me-2 fs-4"></i>
                            <select 
                                className="form-select form-select-sm bg-dark text-light border-secondary" 
                                style={{ boxShadow: 'none' }}
                                onChange={e => setSelections(s => ({ ...s, [i]: e.target.value }))}
                            >
                                <option value="">Select match...</option>
                                {shuffled.map((a, j) => <option key={j} value={a}>{a}</option>)}
                            </select>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-warning btn-lg px-5 rounded-pill fw-bold shadow-sm" onClick={check}>
                    <i className="bi bi-check-circle me-2"></i> Verify All Connections
                </button>
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 5. Spell Tool ──────────────────────────────────────────────────── */
const SpellTool = ({ game, onCorrect }) => {
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

/* ── 6. Number Words ─────────────────────────────────────────────────── */
const numberToWords = (num) => {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens  = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (num === 0) return 'zero';
    function c(n) {
        if (n < 20) return units[n];
        if (n < 100) return tens[Math.floor(n/10)] + (n%10 > 0 ? '-' + units[n%10] : '');
        if (n < 1000) return units[Math.floor(n/100)] + ' hundred' + (n%100 > 0 ? ' and ' + c(n%100) : '');
        return c(Math.floor(n/1000)) + ' thousand' + (n%1000 > 0 ? ', ' + c(n%1000) : '');
    }
    return c(num);
};

const NumberWords = ({ game, onCorrect }) => {
    const min = 1, max = 10000, choices = 3;
    const [num] = useState(() => Math.floor(Math.random() * (max - min + 1)) + min);
    const correct = numberToWords(num);
    const [opts] = useState(() => {
        const s = new Set([correct]);
        while (s.size < choices) s.add(numberToWords(Math.floor(Math.random() * (max - min + 1)) + min));
        return stableShuffle([...s]);
    });
    const [fb, setFb] = useState(null);

    const choose = (opt) => {
        if (opt === correct) {
            setFb({ type: 'success', text: '✅ Correct!' });
            setTimeout(() => { if (onCorrect) onCorrect(); }, 1400);
        } else {
            setFb({ type: 'error', text: `❌ Incorrect. It was: "${correct}"` });
        }
    };

    return (
        <div className="text-center">
            <h1 className="display-4 fw-bold text-info mb-4">{num.toLocaleString('en-US')}</h1>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {opts.map((o, i) => <button key={i} className="btn btn-outline-primary" onClick={() => choose(o)}>{o}</button>)}
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

/* ── 7. Memory Game (Premium Arcade) ─────────────────────────────────── */
const MemoryGame = ({ game, onCorrect }) => {
    const [cards] = useState(() => {
        if (!game.pairs) return [];
        const deck = [];
        game.pairs.forEach((pair, i) => {
            deck.push({ id: `emoji-${i}`, matchId: i, type: 'emoji', content: pair.emoji });
            deck.push({ id: `word-${i}`, matchId: i, type: 'word', content: pair.word });
        });
        return stableShuffle(deck);
    });

    const [flippedIdxs, setFlippedIdxs] = useState([]);
    const [matchedIds, setMatchedIds] = useState([]);
    const [moves, setMoves] = useState(0);

    const handleFlip = (index) => {
        if (flippedIdxs.length === 2) return;
        if (flippedIdxs.includes(index) || matchedIds.includes(cards[index].matchId)) return;

        const newFlipped = [...flippedIdxs, index];
        setFlippedIdxs(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const first = cards[newFlipped[0]];
            const second = cards[newFlipped[1]];
            if (first.matchId === second.matchId) {
                setMatchedIds(prev => {
                    const newMatches = [...prev, first.matchId];
                    if (newMatches.length === game.pairs.length) {
                        setTimeout(() => onCorrect && onCorrect(), 1000);
                    }
                    return newMatches;
                });
                setTimeout(() => setFlippedIdxs([]), 600);
            } else {
                setTimeout(() => setFlippedIdxs([]), 1200);
            }
        }
    };

    return (
        <div className="memory-game-container text-center">
            <div className="d-flex justify-content-between mb-4">
                <span className="badge bg-info p-2">Movimientos: {moves}</span>
                <span className="badge bg-success p-2">Parejas: {matchedIds.length} / {game.pairs?.length}</span>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3">
                {cards.map((card, i) => {
                    const isFlipped = flippedIdxs.includes(i) || matchedIds.includes(card.matchId);
                    return (
                        <div key={card.id} onClick={() => handleFlip(i)}
                            style={{ width: '100px', height: '140px', cursor: 'pointer', perspective: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '100%', height: '100%', transition: 'transform 0.6s', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', position: 'relative' }}>
                                {/* Front (Hidden) */}
                                <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', borderRadius: '12px', border: '2px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem' }}>❓</div>
                                {/* Back (Revealed) */}
                                <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: 'white', borderRadius: '12px', border: '2px solid #ff9a9e', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'rotateY(180deg)', fontSize: card.type === 'emoji' ? '3rem' : '1.2rem', fontWeight: 'bold', color: '#333', textAlign: 'center', wordBreak: 'break-word', padding: '5px' }}>
                                    {card.type === 'emoji' && typeof card.content === 'string' && card.content.startsWith('/assets/') ? (
                                        <img src={card.content} alt="icon" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                                    ) : (
                                        card.content
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {matchedIds.length === game.pairs?.length && (
                <div className="alert alert-success mt-4 fw-bold animate__animated animate__tada">
                    ¡Felicidades! Completaste el juego en {moves} movimientos.
                </div>
            )}
        </div>
    );
};

/* ── 8. Hangman Game (Premium Arcade) ─────────────────────────────────── */
const HangmanGame = ({ game, onCorrect }) => {
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

/* ── 9. Crossword Game (Premium Arcade) ────────────────────────────────── */
const CrosswordGame = ({ game, onCorrect }) => {
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

/* ── 10. Sentence Builder Game (Premium Arcade) ─────────────────────────── */
const SentenceBuilderGame = ({ game, onCorrect }) => {
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
        if (status !== 'playing' && status !== 'incorrect') return;
        setAvailableWords(prev => prev.filter(w => w.id !== word.id));
        setSelectedWords(prev => {
            if (prev.some(w => w.id === word.id)) return prev;
            return [...prev, word];
        });
        setStatus('playing');
    };

    const deselectWord = (word) => {
        if (status !== 'playing' && status !== 'incorrect') return;
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

/* ── 11. Trivia Game (Premium Arcade) ────────────────────────────────── */
const TriviaGame = ({ game, onCorrect }) => {
    const [qIdx, setQIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('playing');
    const [score, setScore] = useState(0);

    const question = game.questions && game.questions[qIdx];

    const handleSelect = (idx) => {
        if (status !== 'playing') return;
        setSelectedOption(idx);

        if (idx === question.correctIdx) {
            setStatus('correct');
            setScore(s => s + 1);
        } else {
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
            <div className="text-center p-4">
                <h2 className="text-warning mb-3"><i className="bi bi-trophy-fill me-2"></i>¡Trivia Completada!</h2>
                <h4 className="text-white">Puntuación: {score} / {game.questions.length}</h4>
                <div className="progress mt-4 bg-dark" style={{ height: '20px' }}>
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: `${(score / game.questions.length) * 100}%` }}></div>
                </div>
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
                <h4 style={{ color: 'var(--color-texto-principal)' }}>{question.question}</h4>
            </div>

            <div className="options d-flex flex-column gap-3 max-w-md mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {question.options.map((opt, idx) => {
                    let bg = '#3e445b'; let border = '2px solid transparent'; let icon = null;
                    if (selectedOption !== null) {
                        if (idx === question.correctIdx) { bg = 'rgba(40,167,69,0.2)'; border = '2px solid #28a745'; icon = <i className="bi bi-check-circle-fill text-success ms-auto"></i>; }
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

/* ── 12. Fill in the Blanks Game (Premium Arcade) ────────────────────────── */
const FillBlanksGame = ({ game, onCorrect }) => {
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
                setStatus('incorrect');
            }
        }, 500);
    };

    if (!currentData) return null;

    if (status === 'won_all') {
        return (
            <div className="text-center p-4">
                <h2 className="text-success mb-3"><i className="bi bi-star-fill me-2 text-warning"></i>¡Todo Correcto!</h2>
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

/* ── 13. Reading Comprehension Game (Premium Arcade) ─────────────────────── */
const ReadingComprehension = ({ game, onCorrect }) => {
    const [qIdx, setQIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('playing');
    const [score, setScore] = useState(0);

    const question = game.questions && game.questions[qIdx];

    const handleSelect = (idx) => {
        if (status !== 'playing') return;
        setSelectedOption(idx);

        if (idx === question.correctIdx) {
            setStatus('correct');
            setScore(s => s + 1);
        } else {
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
            <div className="text-center p-4">
                <h2 className="text-warning mb-3"><i className="bi bi-trophy-fill me-2"></i>Reading Completed!</h2>
                <h4 className="text-white">Final Score: {score} / {game.questions.length}</h4>
                <div className="progress mt-4 bg-dark" style={{ height: '15px' }}>
                    <div className="progress-bar bg-success" style={{ width: `${(score / game.questions.length) * 100}%` }}></div>
                </div>
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
                                    if (idx === question.correctIdx) { bg = 'rgba(40,167,69,0.2)'; border = '2px solid #28a745'; }
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
                            <div className={`mt-4 p-2 rounded text-center fw-bold animate__animated animate__fadeIn ${selectedOption === question.correctIdx ? 'text-success' : 'text-danger'}`}
                                 style={{ background: 'rgba(255,255,255,0.05)' }}>
                                {selectedOption === question.correctIdx ? '✅ Correct Answer!' : `❌ Incorrect. The right answer was: ${question.options[question.correctIdx]}`}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ── 14. Cloze Test Game (Premium Arcade) ────────────────────────────────── */
const ClozeTest = ({ game, onCorrect }) => {
    const [userAnswers, setUserAnswers] = useState({});
    const [selectedGap, setSelectedGap] = useState(0);
    const [fb, setFb] = useState(null);
    const [isFinished, setIsFinished] = useState(false);

    const wordBank = React.useMemo(() => {
        const words = [...(game.answers || []), ...(game.distractors || [])];
        return stableShuffle(words);
    }, [game]);

    const handleWordSelect = (word) => {
        if (isFinished) return;
        setUserAnswers(prev => ({ ...prev, [selectedGap]: word }));
        // Auto-advance to next empty gap if possible
        const nextGap = Array.from({ length: game.answers.length }).findIndex((_, i) => !userAnswers[i] && i !== selectedGap);
        if (nextGap !== -1) setSelectedGap(nextGap);
    };

    const checkAll = () => {
        const correct = game.answers && game.answers.every((ans, i) => userAnswers[i] === ans);
        if (correct) {
            setFb({ type: 'success', text: '✅ Perfect! The text is complete and correct.' });
            setIsFinished(true);
            setTimeout(() => onCorrect && onCorrect(), 2000);
        } else {
            setFb({ type: 'error', text: '❌ Some words are in the wrong place. Try again!' });
        }
    };

    const renderText = () => {
        const parts = game.text.split(/\{\{\d+\}\}/);
        return (
            <div className="cloze-text lh-lg fs-5 text-start p-4 bg-dark border border-secondary rounded shadow-sm" style={{ color: '#e0e0e0' }}>
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < game.answers.length && (
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

            <div className="text-center mt-4">
                <button 
                    className="btn btn-warning btn-lg px-5 rounded-pill fw-bold shadow" 
                    onClick={checkAll}
                    disabled={isFinished || Object.keys(userAnswers).length < game.answers.length}
                >
                    <i className="bi bi-file-check me-2"></i> Verify Paragraph
                </button>
            </div>
            <Feedback fb={fb} />
        </div>
    );
};

export default PracticeEngine;
