import React, { useState } from 'react';

/* =====================================================================
   PracticeEngine.jsx
   Renders game data stored as JSON in the database.
   Supported game types:
     - multiple_choice  → click a button, get instant feedback
     - fill_in          → type an answer and check
     - unscramble       → put words in correct order
     - matching         → match left column to right column
     - spell_tool       → type a name and see phonetic spelling
     - number_words     → guess the English word for a random number
===================================================================== */

const PracticeEngine = ({ data, onScoreUpdate }) => {
    const [completedQuestions, setCompletedQuestions] = React.useState(new Set());

    if (!data || !data.games) return null;

    const totalQuestions = data.games.reduce((acc, g) => {
        // Dynamic games don't have a fixed question list, we count them as 1 "goal"
        if (g.type === 'spell_tool' || g.type === 'number_words') return acc + 1;
        return acc + (g.questions?.length || 0);
    }, 0);

    const handleCorrect = (gameIdx, questionIdx) => {
        const key = `${gameIdx}-${questionIdx}`;
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
                <GameCard 
                    key={i} 
                    game={game} 
                    onCorrect={(qIdx) => handleCorrect(i, qIdx)} 
                />
            ))}
        </div>
    );
};

/* ── card shell ─────────────────────────────────────────────────────── */
const GameCard = ({ game, onCorrect }) => (
    <div className="pe-card mb-5 p-4" style={{
        background: 'var(--color-fondo-secundario, #1e2030)',
        border: '1px solid var(--color-borde, #2e3150)',
        borderRadius: '1rem',
    }}>
        <h3 className="mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{game.title}</h3>
        <p className="text-muted small mb-4">{game.instruction}</p>

        {game.type === 'multiple_choice' && <MultipleChoice game={game} onCorrect={onCorrect} />}
        {game.type === 'fill_in'         && <FillIn game={game} onCorrect={onCorrect} />}
        {game.type === 'unscramble'      && <Unscramble game={game} onCorrect={onCorrect} />}
        {game.type === 'matching'        && <Matching game={game} onCorrect={onCorrect} />}
        {game.type === 'spell_tool'      && <SpellTool game={game} onCorrect={() => onCorrect(0)} />}
        {game.type === 'number_words'    && <NumberWords game={game} onCorrect={() => onCorrect(0)} />}
    </div>
);

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

/* ── counter ────────────────────────────────────────────────────────── */
const Counter = ({ cur, total }) => (
    <div className="text-muted text-center mt-3" style={{ fontSize: '0.8rem' }}>
        Question {cur + 1} of {total}
    </div>
);

/* ── 1. Multiple Choice ─────────────────────────────────────────────── */
const MultipleChoice = ({ game, onCorrect }) => {
    const [idx, setIdx] = useState(0);
    const [fb, setFb] = useState(null);
    const q = game.questions[idx];

    const choose = (opt) => {
        if (opt === q.a) {
            setFb({ type: 'success', text: '✅ Correct!' });
            if (onCorrect) onCorrect(idx);
            setTimeout(() => { setFb(null); setIdx(i => (i + 1) % game.questions.length); }, 1400);
        } else {
            const hint = q.hint ? ` Hint: ${q.hint}` : '';
            setFb({ type: 'error', text: `❌ Try again!${hint}` });
        }
    };

    const renderQuestion = () => {
        if (q.isVisual && Array.isArray(q.q)) {
            return (
                <div className="d-flex justify-content-center align-items-center py-4" 
                     style={{ gap: q.near ? '1rem' : '8rem', transition: 'gap 0.5s ease-in-out' }}>
                    <span style={{ fontSize: '3.5rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>{q.q[0]}</span>
                    <span style={{ fontSize: '3.5rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>{q.q[1]}</span>
                </div>
            );
        }
        return (
            <div className="text-center fs-5 fw-semibold mb-4 py-2 px-3 rounded"
                 style={{ background: 'rgba(255,255,255,.05)', lineHeight: 1.6 }}>
                {q.q}
            </div>
        );
    };

    return (
        <>
            {renderQuestion()}
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {q.options.map((opt, i) => (
                    <button key={i}
                        className="btn btn-outline-primary px-4 py-2"
                        style={{ borderRadius: '2rem', minWidth: '100px' }}
                        onClick={() => choose(opt)}>
                        {opt}
                    </button>
                ))}
            </div>
            <Feedback fb={fb} />
            <Counter cur={idx} total={game.questions.length} />
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
        const clean = val.trim().toLowerCase().replace(/[.?!]/g, '');
        const correct = q.a.toLowerCase().replace(/[.?!]/g, '');
        if (clean === correct || clean === correct.replace(/don't/g, 'do not').replace(/doesn't/g, 'do not').replace(/didn't/g, 'did not').replace(/doesn't/g, 'does not')) {
            setFb({ type: 'success', text: '✅ Excellent!' });
            if (onCorrect) onCorrect(idx);
            setTimeout(() => { setFb(null); setVal(''); setIdx(i => (i + 1) % game.questions.length); }, 1400);
        } else {
            setFb({ type: 'error', text: `❌ Almost! The answer is: "${q.a}"` });
        }
    };

    return (
        <>
            <div className="fs-5 fw-semibold mb-4 p-3 rounded text-center"
                 style={{ background: 'rgba(255,255,255,.05)', lineHeight: 1.7 }}>
                {q.q}
            </div>
            <div className="d-flex gap-2 mb-2">
                <input className="form-control"
                    value={val}
                    onChange={e => setVal(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && check()}
                    placeholder="Type your answer..."
                    style={{ background: 'var(--color-fondo, #12131f)', color: 'inherit', border: '1px solid var(--color-borde, #2e3150)', borderRadius: '0.75rem' }}
                />
                <button className="btn btn-primary px-4" style={{ borderRadius: '0.75rem' }} onClick={check}>
                    Check
                </button>
            </div>
            <Feedback fb={fb} />
            <Counter cur={idx} total={game.questions.length} />
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
        const clean = val.trim().toLowerCase().replace(/[.?!]/g, '');
        if (clean === q.a.toLowerCase()) {
            setFb({ type: 'success', text: '✅ Perfect!' });
            if (onCorrect) onCorrect(idx);
            setTimeout(() => { setFb(null); setVal(''); setIdx(i => (i + 1) % game.questions.length); }, 1400);
        } else {
            setFb({ type: 'error', text: '❌ Not quite. Remember the correct word order.' });
        }
    };

    return (
        <>
            <div className="p-3 rounded mb-4 text-center"
                 style={{ background: 'rgba(255,255,255,.05)', border: '1px dashed var(--color-borde, #2e3150)' }}>
                <span className="text-muted small d-block mb-1">Scrambled words:</span>
                <span className="fs-5 fw-bold" style={{ letterSpacing: '1px' }}>{q.q}</span>
            </div>
            <div className="d-flex gap-2 mb-2">
                <input className="form-control"
                    value={val}
                    onChange={e => setVal(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && check()}
                    placeholder="Type the correct sentence..."
                    style={{ background: 'var(--color-fondo, #12131f)', color: 'inherit', border: '1px solid var(--color-borde, #2e3150)', borderRadius: '0.75rem' }}
                />
                <button className="btn btn-primary px-4" style={{ borderRadius: '0.75rem' }} onClick={check}>Check</button>
            </div>
            <Feedback fb={fb} />
            <Counter cur={idx} total={game.questions.length} />
        </>
    );
};

/* ── 4. Matching (dropdown) ─────────────────────────────────────────── */
const Matching = ({ game, onCorrect }) => {
    const answers = game.questions.map(q => q.a);
    const [selections, setSelections] = useState({});
    const [fb, setFb] = useState(null);
    // shuffle answers
    const [shuffled] = useState(() => [...answers].sort(() => Math.random() - 0.5));

    const check = () => {
        const allRight = game.questions.every((q, i) => selections[i] === q.a);
        if (allRight) {
            setFb({ type: 'success', text: '✅ All matches are correct! Great job!' });
            if (onCorrect) {
                // In matching, we count it as "one correct" for the whole set if they get them all right
                // Or we could trigger it for each one, but let's keep it simple
                game.questions.forEach((_, i) => onCorrect(i));
            }
        } else {
            setFb({ type: 'error', text: '❌ Some matches are incorrect. Try again!' });
        }
    };

    return (
        <>
            {game.questions.map((q, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                    <span className="fw-semibold" style={{ minWidth: '120px' }}>{q.q}</span>
                    <span className="text-muted">→</span>
                    <select
                        className="form-select form-select-sm w-auto"
                        value={selections[i] || ''}
                        onChange={e => setSelections(s => ({ ...s, [i]: e.target.value }))}
                        style={{ background: 'var(--color-fondo, #12131f)', color: 'inherit', border: '1px solid var(--color-borde, #2e3150)', borderRadius: '0.5rem' }}
                    >
                        <option value="">Choose…</option>
                        {shuffled.map((a, j) => <option key={j} value={a}>{a}</option>)}
                    </select>
                </div>
            ))}
            <button className="btn btn-primary mt-2 px-4" style={{ borderRadius: '0.75rem' }} onClick={check}>
                Check Matches
            </button>
            <Feedback fb={fb} />
        </>
    );
};

/* ── 5. Spell Tool ──────────────────────────────────────────────────── */
const SpellTool = ({ game, onCorrect }) => {
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const spell = () => {
        if (!name.trim()) { setResult('Please type a name first.'); return; }
        const upper = name.toUpperCase();
        const spelled = Array.from(upper).map(c => game.alphabet[c] || c).join(' - ');
        setResult(spelled);
        if (onCorrect) onCorrect();
    };

    return (
        <>
            <div className="d-flex gap-2 mb-3">
                <input className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && spell()}
                    placeholder="Your name..."
                    style={{ background: 'var(--color-fondo, #12131f)', color: 'inherit', border: '1px solid var(--color-borde, #2e3150)', borderRadius: '0.75rem' }}
                />
                <button className="btn btn-primary px-4" style={{ borderRadius: '0.75rem' }} onClick={spell}>Spell it!</button>
            </div>
            {result && (
                <div className="p-3 rounded text-center fw-bold fs-5"
                     style={{ background: 'rgba(99,102,241,.15)', color: '#a5b4fc', letterSpacing: '2px' }}>
                    {result}
                </div>
            )}
        </>
    );
};

/* ── 6. Number Words (random quiz) ─────────────────────────────────── */
const numberToWords = (num) => {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                   'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                   'seventeen', 'eighteen', 'nineteen'];
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

const randChoices = (correct, min, max, n) => {
    const s = new Set([correct]);
    while (s.size < n) s.add(numberToWords(Math.floor(Math.random() * (max - min + 1)) + min));
    return [...s].sort(() => Math.random() - 0.5);
};

const NumberWords = ({ game, onCorrect }) => {
    const { min = 1, max = 10000, choices = 3 } = game.config || {};
    const [num, setNum] = useState(() => Math.floor(Math.random() * (max - min + 1)) + min);
    const correct = numberToWords(num);
    const [opts, setOpts] = useState(() => randChoices(correct, min, max, choices));
    const [fb, setFb] = useState(null);

    const next = () => {
        // eslint-disable-next-line
        const n = Math.floor(Math.random() * (max - min + 1)) + min;
        const ans = numberToWords(n);
        setNum(n);
        setOpts(randChoices(ans, min, max, choices));
        setFb(null);
    };

    const choose = (opt) => {
        if (opt === correct) {
            setFb({ type: 'success', text: '✅ Correct!' });
            if (onCorrect) onCorrect();
            setTimeout(next, 1400);
        } else {
            setFb({ type: 'error', text: `❌ Incorrect. It was: "${correct}"` });
            setTimeout(next, 2500);
        }
    };

    return (
        <>
            <div className="text-center py-4">
                <span className="display-4 fw-bold" style={{ color: '#a5b4fc' }}>
                    {num.toLocaleString('en-US')}
                </span>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {opts.map((o, i) => (
                    <button key={i} className="btn btn-outline-primary px-4 py-2"
                            style={{ borderRadius: '2rem' }} onClick={() => choose(o)}>
                        {o}
                    </button>
                ))}
            </div>
            <Feedback fb={fb} />
        </>
    );
};

export default PracticeEngine;
