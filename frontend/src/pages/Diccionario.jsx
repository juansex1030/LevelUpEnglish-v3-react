import React, { useState } from 'react';
import axios from 'axios';

const Diccionario = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [warning, setWarning] = useState(null);
    const [results, setResults] = useState(null);

    const handleSearch = async () => {
        const query = searchTerm.trim();
        if (!query) {
            setWarning('Please enter a word to search.');
            setResults(null);
            setError(null);
            return;
        }

        setLoading(true);
        setError(null);
        setWarning(null);
        setResults(null);

        try {
            // 1. Try English dictionary first
            let isEnglish = false;
            let dictData = null;
            let currentQuery = query;

            try {
                const dictRes = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentQuery}`);
                dictData = dictRes.data;
                isEnglish = true;
            } catch {
                // Not an English word
                isEnglish = false;
            }

            if (isEnglish) {
                // Find translation to Spanish
                const transRes = await axios.get(`https://api.mymemory.translated.net/get?q=${currentQuery}&langpair=en|es`);
                setResults({
                    original: query,
                    translation: transRes.data.responseData.translatedText,
                    dictionary: dictData[0]
                });
            } else {
                // Translate Spanish to English first
                const transRes = await axios.get(`https://api.mymemory.translated.net/get?q=${query}&langpair=es|en`);
                const translatedWord = transRes.data.responseData.translatedText;

                if (translatedWord && translatedWord.toLowerCase() !== query.toLowerCase()) {
                    try {
                        const dictRes = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${translatedWord}`);
                        dictData = dictRes.data;
                        
                        setResults({
                            original: query,
                            translation: translatedWord,
                            dictionary: dictData[0]
                        });
                    } catch {
                        setError(`No English definitions found for the translation: "${translatedWord}".`);
                    }
                } else {
                    setError(`The word "${query}" was not found in the dictionary. Please check the spelling.`);
                }
            }
        } catch {
            setError('Connection error. Please check your internet connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const playAudio = (text) => {
        if (!text) return;
        if (window.speechSynthesis.speaking) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="container py-4">
            <style>{`
                .dictionary-container { 
                    max-width: 1100px; 
                    margin: 0 auto; 
                    --acento-primario: #0ea5e9; /* Sky Blue */
                    --acento-secundario: #38bdf8; /* Lighter Blue */
                }
                
                /* Bento Grid */
                .results-bento {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                @media (min-width: 992px) {
                    .results-bento {
                        grid-template-columns: 380px 1fr;
                    }
                }
                .bento-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
                
                /* Cyber-Tech Search Box */
                .search-box { 
                    background: rgba(10, 25, 47, 0.4); 
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(45,212,191,0.2); 
                    border-radius: 1.5rem; 
                    padding: 2rem; 
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3); 
                    transition: all 0.4s ease; 
                }
                .search-box:hover { 
                    border-color: rgba(45,212,191,0.6); 
                    box-shadow: 0 0 20px -2px rgba(45,212,191,0.3); 
                }
                
                .search-input-wrapper { position: relative; }
                .search-input-wrapper .search-icon { 
                    position: absolute; left: 1.5rem; top: 50%; transform: translateY(-50%); 
                    color: rgba(45,212,191,0.7); font-size: 1.5rem; pointer-events: none; 
                    transition: all 0.3s ease;
                }
                .search-input { 
                    background-color: rgba(255, 255, 255, 0.03); 
                    color: #fff; 
                    border: 2px solid rgba(255, 255, 255, 0.05); 
                    border-radius: 1rem; 
                    padding: 1.2rem 1rem 1.2rem 4rem; 
                    font-size: 1.2rem; 
                    width: 100%; 
                    transition: all 0.3s ease; 
                }
                .search-input:focus { 
                    outline: none; 
                    border-color: var(--acento-primario); 
                    background-color: rgba(0, 0, 0, 0.2);
                    box-shadow: 0 0 15px rgba(45,212,191,0.2), inset 0 0 10px rgba(45,212,191,0.1); 
                }
                .search-input:focus + .search-icon {
                    color: var(--acento-primario);
                    text-shadow: 0 0 8px var(--acento-primario);
                }
                .search-input::placeholder { color: rgba(255,255,255,0.3); }
                
                .search-btn { 
                    background: linear-gradient(135deg, rgba(45,212,191,0.8), rgba(14,165,233,0.8)); 
                    color: #fff; 
                    border: 1px solid rgba(255,255,255,0.2); 
                    border-radius: 1rem; 
                    padding: 1rem 2rem; 
                    font-weight: 700; 
                    font-size: 1.1rem; 
                    transition: all 0.3s ease; 
                    text-transform: uppercase; 
                    letter-spacing: 2px; 
                    backdrop-filter: blur(5px);
                }
                .search-btn:hover { 
                    transform: translateY(-2px); 
                    box-shadow: 0 0 20px rgba(45,212,191,0.6); 
                    border-color: #fff;
                }
                
                /* Holographic Result Cards */
                .result-card { 
                    background: rgba(15, 23, 42, 0.6); 
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05); 
                    border-radius: 1.5rem; 
                    padding: 2.5rem; 
                    margin-bottom: 2rem; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.05); 
                    animation: fadeInUp 0.5s ease backwards; 
                }
                
                .translation-card { 
                    background: linear-gradient(135deg, rgba(45,212,191,0.05), rgba(14,165,233,0.05)); 
                    border-left: 4px solid var(--acento-primario); 
                    border-top: 1px solid rgba(255,255,255,0.05);
                    border-right: 1px solid rgba(255,255,255,0.05);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                
                .word-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
                .word-title { font-size: 3.5rem; font-weight: 900; color: #fff; margin: 0; text-shadow: 0 0 20px rgba(45,212,191,0.3); letter-spacing: -1px; }
                .phonetic-text { font-size: 1.3rem; color: rgba(255,255,255,0.5); font-style: italic; margin-top: 0.5rem; letter-spacing: 1px; }
                
                .audio-btn { 
                    background: rgba(255,255,255,0.05); 
                    color: var(--acento-primario); 
                    border: 1px solid rgba(45,212,191,0.3); 
                    border-radius: 50%; 
                    width: 65px; height: 65px; 
                    font-size: 1.8rem; 
                    cursor: pointer; 
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
                    display: flex; align-items: center; justify-content: center; 
                }
                .audio-btn:hover { 
                    transform: scale(1.1); 
                    background: rgba(45,212,191,0.1);
                    box-shadow: 0 0 20px rgba(45,212,191,0.4), inset 0 0 10px rgba(45,212,191,0.2); 
                }
                
                .part-of-speech-badge { 
                    display: inline-block; 
                    background: transparent; 
                    color: var(--acento-primario); 
                    border: 1px solid var(--acento-primario);
                    padding: 0.4rem 1.2rem; 
                    border-radius: 2rem; 
                    font-weight: 600; 
                    font-size: 0.85rem; 
                    text-transform: uppercase; 
                    letter-spacing: 2px; 
                    margin-bottom: 1.5rem; 
                    box-shadow: 0 0 10px rgba(45,212,191,0.2);
                }
                
                .definition-item { 
                    padding: 1.2rem; 
                    border-left: 2px solid rgba(255,255,255,0.1); 
                    margin-bottom: 1rem; 
                    transition: all 0.3s ease; 
                    background: rgba(255,255,255,0.02);
                    border-radius: 0 0.5rem 0.5rem 0;
                }
                .definition-item:hover { 
                    border-left-color: var(--acento-primario); 
                    background: rgba(45,212,191,0.05); 
                }
                .definition-text { font-size: 1.15rem; color: rgba(255,255,255,0.9); margin-bottom: 0.5rem; line-height: 1.6; }
                .example-text { font-size: 1.05rem; color: rgba(255,255,255,0.5); font-style: italic; padding-left: 1rem; border-left: 2px solid rgba(255,255,255,0.1); margin-top: 0.8rem; }
                
                .loading-spinner { display: inline-block; width: 50px; height: 50px; border: 4px solid rgba(45,212,191,0.1); border-top-color: var(--acento-primario); border-radius: 50%; animation: spin 1s linear infinite; box-shadow: 0 0 15px rgba(45,212,191,0.2); }
                @keyframes spin { to { transform: rotate(360deg); } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                
                .empty-state { text-align: center; padding: 5rem 2rem; color: rgba(255,255,255,0.4); }
                .translation-label { font-size: 0.85rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 0.8rem; }
                .translation-text { font-size: 3rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem; text-shadow: 0 0 20px rgba(255,255,255,0.2); }
                .searched-for { font-size: 0.95rem; color: rgba(255,255,255,0.4); }
                
                .error-message { background: rgba(248,113,113,0.1); border: 1px solid rgba(248,113,113,0.2); border-left: 4px solid var(--feedback-incorrecto); padding: 1.5rem; border-radius: 1rem; color: var(--feedback-incorrecto); font-weight: 500; }
                .warning-message { background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.2); border-left: 4px solid var(--acento-secundario); padding: 1.5rem; border-radius: 1rem; color: var(--acento-secundario); font-weight: 500; }
            `}</style>
            
            <div className="level-header" style={{ '--glow-color': 'var(--acento-primario)' }}>
                <span className="level-badge" style={{ backgroundColor: 'transparent', border: '1px solid var(--acento-primario)', color: 'var(--acento-primario)', letterSpacing: '2px' }}>[ TOOL ]</span>
                <h1>Dictionary & Translator</h1>
                <p className="lead text-muted">Search any word in English or Spanish to see its translation, definition, and pronunciation.</p>
            </div>

            <div className="dictionary-container">
                <div className="search-box">
                    <div className="search-input-wrapper">
                        <i className="bi bi-search search-icon"></i>
                        <input 
                            type="text" 
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type a word (e.g., apple, success, manzana...)" 
                            autoFocus 
                        />
                    </div>
                    <div className="d-flex gap-2 mt-4">
                        <button className="search-btn flex-grow-1" onClick={handleSearch} disabled={loading}>
                            {loading ? <div className="spinner-border spinner-border-sm me-2"></div> : <i className="bi bi-search me-2"></i>}
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    {warning && (
                        <div className="result-card warning-message">
                            <i className="bi bi-exclamation-triangle me-2"></i> {warning}
                        </div>
                    )}

                    {error && (
                        <div className="result-card error-message">
                            <i className="bi bi-x-circle me-2"></i> {error}
                        </div>
                    )}

                    {!results && !loading && !error && !warning && (
                        <div className="empty-state">
                            <i className="bi bi-rocket-takeoff" style={{ fontSize: '4rem', color: 'rgba(45,212,191,0.5)', marginBottom: '1.5rem', display: 'block', filter: 'drop-shadow(0 0 15px rgba(45,212,191,0.3))' }}></i>
                            <h4 style={{ color: 'rgba(255,255,255,0.8)', fontWeight: '600' }}>Start Exploring!</h4>
                            <p>Your search results will appear here in holographic panels.</p>
                        </div>
                    )}

                    {loading && (
                        <div className="text-center py-5">
                            <div className="loading-spinner mx-auto mb-3"></div>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', letterSpacing: '1px' }}>Searching database...</p>
                        </div>
                    )}

                    {results && !loading && (
                        <div className="results-bento">
                            <div className="bento-sidebar">
                                <div className="result-card translation-card" style={{ marginBottom: 0 }}>
                                    <div className="translation-label">
                                        <i className="bi bi-translate me-2"></i>Translation
                                    </div>
                                    <div className="translation-text">{results.translation}</div>
                                    <div className="searched-for">
                                        You searched for: <strong>"{results.original}"</strong>
                                    </div>
                                </div>

                                {results.dictionary && (
                                    <div className="result-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 0 }}>
                                        <h2 className="word-title" style={{ fontSize: '2.8rem' }}>{results.dictionary.word}</h2>
                                        {results.dictionary.phonetic && <p className="phonetic-text mb-4">{results.dictionary.phonetic}</p>}
                                        <button 
                                            className="audio-btn" 
                                            onClick={() => playAudio(results.dictionary.word)} 
                                            title="Listen to pronunciation"
                                        >
                                            <i className="bi bi-volume-up-fill"></i>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {results.dictionary && (
                                <div className="bento-main">
                                    <div className="result-card" style={{ height: '100%', marginBottom: 0 }}>
                                        <h3 style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontWeight: 600, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            <i className="bi bi-journal-text me-2"></i>Definitions
                                        </h3>
                                        
                                        {results.dictionary.meanings?.map((meaning, idx) => (
                                            <div key={idx} className="mb-5">
                                                <div className="part-of-speech-badge">{meaning.partOfSpeech}</div>
                                                {meaning.definitions.map((def, defIdx) => (
                                                    <div key={defIdx} className="definition-item">
                                                        <div className="definition-text">
                                                            <strong style={{ color: 'var(--acento-secundario)' }}>{defIdx + 1}.</strong> {def.definition}
                                                        </div>
                                                        {def.example && (
                                                            <div className="example-text mt-2">
                                                                <i className="bi bi-chat-quote me-2"></i> "{def.example}"
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Diccionario;
