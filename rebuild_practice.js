const fs = require('fs');

const originalCode = fs.readFileSync('src/components/PracticeEngine.jsx', 'utf8');

const additionalGames = `

/* ── 7. Memory Game (Premium Arcade) ────────────────────────────────── */
const MemoryGame = ({ game, onCorrect }) => {
    const [cards, setCards] = React.useState(() => {
        if (!game.pairs) return [];
        const deck = [];
        game.pairs.forEach((pair, i) => {
            deck.push({ id: \`emoji-\${i}\`, matchId: i, type: 'emoji', content: pair.emoji });
            deck.push({ id: \`word-\${i}\`, matchId: i, type: 'word', content: pair.word });
        });
        return deck.sort(() => Math.random() - 0.5);
    });

    const [flippedIdxs, setFlippedIdxs] = React.useState([]);
    const [matchedIds, setMatchedIds] = React.useState([]);
    const [moves, setMoves] = React.useState(0);

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
                            style={{ 
                                width: '100px', height: '140px', cursor: 'pointer',
                                perspective: '1000px',
                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                            <div style={{
                                width: '100%', height: '100%',
                                transition: 'transform 0.6s',
                                transformStyle: 'preserve-3d',
                                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute', width: '100%', height: '100%',
                                    backfaceVisibility: 'hidden',
                                    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                                    borderRadius: '12px',
                                    border: '2px solid white',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    fontSize: '2rem'
                                }}>❓</div>
                                <div style={{
                                    position: 'absolute', width: '100%', height: '100%',
                                    backfaceVisibility: 'hidden',
                                    background: 'white',
                                    borderRadius: '12px',
                                    border: '2px solid #ff9a9e',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    transform: 'rotateY(180deg)',
                                    fontSize: card.type === 'emoji' ? '3rem' : '1.2rem',
                                    fontWeight: 'bold', color: '#333', textAlign: 'center', wordBreak: 'break-word', padding: '5px'
                                }}>
                                    {card.content}
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
    const [wordIdx, setWordIdx] = React.useState(0);
    const [guessedLetters, setGuessedLetters] = React.useState(new Set());
    const [lives, setLives] = React.useState(6);
    const [gameStatus, setGameStatus] = React.useState('playing');

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
                    <div key={i} style={{
                        width: '40px', height: '50px', 
                        borderBottom: letter === ' ' ? 'none' : '3px solid white',
                        display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                        fontSize: '2rem', fontWeight: 'bold', color: 'white',
                        margin: '0 5px'
                    }}>
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
                                className={\`btn fw-bold shadow-sm \${isCorrect ? 'btn-success' : (isWrong ? 'btn-danger opacity-50' : 'btn-light')}\`}
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
                    <button className="btn btn-sm btn-danger ms-3" onClick={() => {
                        setLives(6); setGuessedLetters(new Set()); setGameStatus('playing');
                    }}>Reintentar</button>
                </div>
            )}
            
            {gameStatus === 'won_word' && (
                <div className="text-success fs-3 fw-bold mt-4 animate__animated animate__bounceIn">
                    ¡Correcto!
                </div>
            )}
            {gameStatus === 'won_all' && (
                <div className="text-success fs-2 fw-bold mt-4 animate__animated animate__tada">
                    🏆 ¡Completaste todas las palabras!
                </div>
            )}
        </div>
    );
};

/* ── 9. Crossword Game (Premium Arcade) ────────────────────────────────── */
const CrosswordGame = ({ game, onCorrect }) => {
    const [userGrid, setUserGrid] = React.useState({});
    const [selectedCell, setSelectedCell] = React.useState(null); 
    const [selectedDir, setSelectedDir] = React.useState('across'); 
    const [showErrors, setShowErrors] = React.useState(false);

    const answerGrid = React.useMemo(() => {
        const grid = {};
        const cellNumbers = {};
        if (!game.words) return { grid, cellNumbers };

        game.words.forEach(w => {
            const chars = w.word.toUpperCase().split('');
            chars.forEach((char, i) => {
                const r = w.dir === 'down' ? w.row + i : w.row;
                const c = w.dir === 'across' ? w.col + i : w.col;
                const key = \`\${r}-\${c}\`;
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

    React.useEffect(() => {
        if (isWon && onCorrect) {
            onCorrect();
        }
    }, [isWon, onCorrect]);

    const handleCellClick = (r, c) => {
        if (!answerGrid.grid[\`\${r}-\${c}\`]) return; 
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
            setUserGrid(prev => ({ ...prev, [\`\${r}-\${c}\`]: key.toUpperCase() }));
            setShowErrors(false);
            const nextR = selectedDir === 'down' ? r + 1 : r;
            const nextC = selectedDir === 'across' ? c + 1 : c;
            if (answerGrid.grid[\`\${nextR}-\${nextC}\`]) {
                setSelectedCell({ r: nextR, c: nextC });
            }
        } else if (key === 'Backspace') {
            setUserGrid(prev => ({ ...prev, [\`\${r}-\${c}\`]: '' }));
            setShowErrors(false);
            const prevR = selectedDir === 'down' ? r - 1 : r;
            const prevC = selectedDir === 'across' ? c - 1 : c;
            if (answerGrid.grid[\`\${prevR}-\${prevC}\`]) {
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
        return word ? \`\${word.num}. \${word.hint}\` : "Selecciona una casilla para ver la pista";
    };

    if (!game.gridSize) return null;

    return (
        <div className="crossword-container" style={{ outline: 'none' }} tabIndex="0" onKeyDown={handleKeyDown}>
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
                <div className="crossword-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: \`repeat(\${game.gridSize.cols}, 40px)\`,
                    gridTemplateRows: \`repeat(\${game.gridSize.rows}, 40px)\`,
                    gap: '2px', background: '#222', padding: '4px', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
                }}>
                    {Array.from({ length: game.gridSize.rows }).map((_, r) => 
                        Array.from({ length: game.gridSize.cols }).map((_, c) => {
                            const isCell = !!answerGrid.grid[\`\${r}-\${c}\`];
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

                            if (!isCell) return <div key={\`\${r}-\${c}\`} style={{ background: 'transparent' }} />;

                            let bg = isWon ? '#28a745' : (isSelected ? '#ffca28' : (isHighlightedPath ? '#fffde7' : 'white'));
                            let color = isWon ? 'white' : 'black';
                            
                            const currentVal = userGrid[\`\${r}-\${c}\`];
                            if (showErrors && currentVal) {
                                if (currentVal !== answerGrid.grid[\`\${r}-\${c}\`]) {
                                    bg = '#f8d7da'; color = '#dc3545';
                                } else {
                                    bg = '#d4edda'; color = '#28a745';
                                }
                            }

                            return (
                                <div key={\`\${r}-\${c}\`} onClick={() => handleCellClick(r, c)}
                                    className="d-flex justify-content-center align-items-center position-relative fw-bold"
                                    style={{ background: bg, color: color, cursor: 'pointer', transition: 'all 0.2s' }}>
                                    {answerGrid.cellNumbers[\`\${r}-\${c}\`] && (<span style={{ position: 'absolute', top: '1px', left: '3px', fontSize: '10px', color: '#555' }}>{answerGrid.cellNumbers[\`\${r}-\${c}\`]}</span>)}
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
                            if(window.confirm('¿Estás seguro de que deseas reiniciar todo el crucigrama?')) {
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
                        {game.words?.filter(w => w.dir === 'across').sort((a,b) => a.num - b.num).map(w => (
                            <li key={w.num} className="mb-1"><strong>{w.num}.</strong> {w.hint}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 text-start">
                    <h6 className="fw-bold" style={{ color: 'var(--color-texto-principal)' }}>⬇️ Verticales</h6>
                    <ul className="list-unstyled small text-muted">
                        {game.words?.filter(w => w.dir === 'down').sort((a,b) => a.num - b.num).map(w => (
                            <li key={w.num} className="mb-1"><strong>{w.num}.</strong> {w.hint}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

/* ── 10. Sentence Builder Game (Premium Arcade) ────────────────────────────────── */
const SentenceBuilderGame = ({ game, onCorrect }) => {
    const [sentenceIdx, setSentenceIdx] = React.useState(0);
    const [availableWords, setAvailableWords] = React.useState([]);
    const [selectedWords, setSelectedWords] = React.useState([]);
    const [status, setStatus] = React.useState('playing'); 

    const currentSentence = game.sentences && game.sentences[sentenceIdx];

    React.useEffect(() => {
        if (!currentSentence) return;
        const words = currentSentence.text.split(' ').map((w, i) => ({ id: \`w-\${i}\`, text: w }));
        if (currentSentence.distractors) {
            currentSentence.distractors.forEach((d, i) => words.push({ id: \`d-\${i}\`, text: d }));
        }
        setAvailableWords(words.sort(() => Math.random() - 0.5));
        setSelectedWords([]);
        setStatus('playing');
    }, [currentSentence]);

    const selectWord = (word) => {
        if (status !== 'playing' && status !== 'incorrect') return;
        setAvailableWords(prev => prev.filter(w => w.id !== word.id));
        setSelectedWords(prev => [...prev, word]);
        setStatus('playing');
    };

    const deselectWord = (word) => {
        if (status !== 'playing' && status !== 'incorrect') return;
        setSelectedWords(prev => prev.filter(w => w.id !== word.id));
        setAvailableWords(prev => [...prev, word]);
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

    if (!currentSentence) return null;

    return (
        <div className="sentence-builder-container p-4 text-center">
            <h5 className="mb-4 text-info fw-bold">"{currentSentence.translation}"</h5>
            
            <div className="build-area mb-4 p-3 rounded d-flex flex-wrap gap-2 justify-content-center align-items-center min-vh-25" 
                style={{ 
                    border: status === 'correct' ? '2px dashed #28a745' : (status === 'incorrect' ? '2px dashed #dc3545' : '2px dashed var(--color-borde)'),
                    minHeight: '80px', transition: 'all 0.3s',
                    background: status === 'correct' ? 'rgba(40, 167, 69, 0.1)' : (status === 'incorrect' ? 'rgba(220, 53, 69, 0.1)' : 'rgba(255, 255, 255, 0.05)')
                }}>
                {selectedWords.length === 0 && <span className="text-muted" style={{ opacity: 0.5 }}>Toca palabras para formar la oración</span>}
                {selectedWords.map(w => (<button key={w.id} onClick={() => deselectWord(w)} className="btn btn-light fw-bold shadow-sm animate__animated animate__fadeIn">{w.text}</button>))}
            </div>

            <div className="word-bank d-flex flex-wrap gap-2 justify-content-center mb-4 min-vh-25" style={{ minHeight: '80px' }}>
                {availableWords.map(w => (<button key={w.id} onClick={() => selectWord(w)} className="btn fw-bold shadow-sm" style={{ background: '#3e445b', color: 'white' }}>{w.text}</button>))}
            </div>

            {status !== 'correct' && status !== 'won_all' && (
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-secondary rounded-pill px-4" onClick={() => setSelectedWords([])} disabled={selectedWords.length === 0}>Limpiar</button>
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
    const [qIdx, setQIdx] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [status, setStatus] = React.useState('playing'); 
    const [score, setScore] = React.useState(0);

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
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: \`\${(score / game.questions.length) * 100}%\` }}></div>
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
                        if (idx === question.correctIdx) { bg = 'rgba(40, 167, 69, 0.2)'; border = '2px solid #28a745'; icon = <i className="bi bi-check-circle-fill text-success ms-auto"></i>; }
                        else if (selectedOption === idx) { bg = 'rgba(220, 53, 69, 0.2)'; border = '2px solid #dc3545'; icon = <i className="bi bi-x-circle-fill text-danger ms-auto"></i>; }
                        else { bg = 'rgba(0,0,0,0.2)'; }
                    }
                    return (
                        <button key={idx} className={\`btn d-flex align-items-center text-start p-3 fw-bold fs-5 \${selectedOption === null ? 'trivia-btn-hover' : ''}\`}
                            style={{ background: bg, border: border, color: 'white', transition: 'all 0.2s rounded' }}
                            onClick={() => handleSelect(idx)} disabled={selectedOption !== null}>
                            <span className="me-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>{opt}{icon}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

/* ── 12. Fill in the Blanks Game (Premium Arcade) ────────────────────────────────── */
const FillBlanksGame = ({ game, onCorrect }) => {
    const [sentenceIdx, setSentenceIdx] = React.useState(0);
    const [userInputs, setUserInputs] = React.useState('');
    const [status, setStatus] = React.useState('playing');

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
        const parts = currentData.text.split('____');
        if (parts.length < 2) return currentData.text; 
        
        let inputClass = "form-control fw-bold mx-2 text-center d-inline-block";
        let inputStyles = { width: '150px', display: 'inline-block', backgroundColor: '#3e445b', color: 'white', border: '2px solid transparent' };

        if (status === 'correct') { inputStyles.backgroundColor = 'rgba(40, 167, 69, 0.2)'; inputStyles.border = '2px solid #28a745'; inputStyles.color = '#28a745'; } 
        else if (status === 'incorrect') { inputStyles.backgroundColor = 'rgba(220, 53, 69, 0.2)'; inputStyles.border = '2px solid #dc3545'; inputStyles.color = '#dc3545'; inputClass += " animate__animated animate__headShake"; }

        return (
            <div className="fs-3 fw-bold lh-lg">
                <span>{parts[0]}</span>
                <input type="text" className={inputClass} style={inputStyles} value={userInputs} onChange={(e) => { setUserInputs(e.target.value); setStatus('playing'); }} disabled={status === 'checking' || status === 'correct'} autoComplete="off" autoFocus />
                <span>{parts[1]}</span>
            </div>
        );
    }

    return (
        <div className="fill-blanks-container p-5 text-center">
            <div className="d-flex justify-content-between mb-2">
                <span className="badge bg-secondary p-2">Completar #{sentenceIdx + 1} de {game.sentences.length}</span>
            </div>
            <form onSubmit={handleSubmit} className="mb-4 mt-5">
                {renderTextWithInput()}
                <div className="mt-5">
                    <button type="submit" className={\`btn btn-lg rounded-pill px-5 fw-bold shadow-sm \${status === 'correct' ? 'btn-success' : 'btn-warning'}\`} disabled={!userInputs.trim() || status === 'checking' || status === 'correct'}>
                        {status === 'checking' ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-chevron-double-right me-2"></i>} Comprobar
                    </button>
                </div>
            </form>
            {status === 'incorrect' && (<div className="text-danger fw-bold mt-3 animate__animated animate__fadeIn">¡Inténtalo de nuevo! Asegúrate de escribirlo correctamente.</div>)}
        </div>
    );
};

`;

const newEngine = originalCode.replace(
    /const PracticeEngine =[^]*?return \([^]*?\}\);\s*\};/, 
    \`const PracticeEngine = ({ data, onScoreUpdate }) => {
    const [completedQuestions, setCompletedQuestions] = React.useState(new Set());
    const [shuffledGames, setShuffledGames] = React.useState([]);

    React.useEffect(() => {
        if (data && data.games) {
            setShuffledGames([...data.games].sort(() => Math.random() - 0.5));
        }
    }, [data]);

    if (!data || !data.games) return null;

    const totalQuestions = data.games.length;

    const handleCorrect = (gameIdx) => {
        const key = \\\`\${gameIdx}\\\`;
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
            {shuffledGames.map((game, i) => (
                <div key={i} className="mb-5 p-4 bg-dark rounded shadow-sm border border-secondary" style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center mb-3 border-bottom border-secondary pb-3">
                        <div className="game-icon bg-gradient me-3 p-3 rounded-circle shadow-sm" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
                            <span className="fs-3">🎮</span>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-1 text-white">{game.title}</h4>
                            <p className="text-secondary mb-0">{game.instruction}</p>
                        </div>
                        
                        {completedQuestions.has(\\\`\${i}\\\`) && (
                            <div className="ms-auto animate__animated animate__zoomIn">
                                <span className="badge bg-success rounded-pill p-2 px-3 shadow-sm">
                                    <i className="bi bi-check-circle-fill me-2"></i>Completado
                                </span>
                            </div>
                        )}
                    </div>
                    
                    <div className="game-board position-relative" style={{ minHeight: '300px', filter: completedQuestions.has(\\\`\${i}\\\`) ? 'brightness(0.7) grayscale(0.5)' : 'none', transition: 'all 0.5s', pointerEvents: completedQuestions.has(\\\`\${i}\\\`) ? 'none' : 'auto' }}>
                        {game.type === 'multiple_choice' && <MultipleChoice game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'fill_in'         && <FillIn game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'unscramble'      && <Unscramble game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'matching'        && <Matching game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'spell_tool'      && <SpellTool game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'number_words'    && <NumberWords game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'memory_game'     && <MemoryGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'hangman_game'    && <HangmanGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'crossword_game'  && <CrosswordGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'sentence_builder'&& <SentenceBuilderGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'trivia_game'     && <TriviaGame game={game} onCorrect={() => handleCorrect(i)} />}
                        {game.type === 'fill_blanks_game'&& <FillBlanksGame game={game} onCorrect={() => handleCorrect(i)} />}
                    </div>
                </div>
            ))}
        </div>
    );
};\`)
.replace(/const GameCard = [^]*?\s*?/, '')
.replace('export default PracticeEngine;', additionalGames + '\nexport default PracticeEngine;');

fs.writeFileSync('src/components/PracticeEngine.jsx', newEngine);
