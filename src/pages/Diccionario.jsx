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
            setWarning('Por favor, escribe una palabra para buscar.');
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
                        setError(`No se encontraron definiciones en inglés para la traducción: "${translatedWord}".`);
                    }
                } else {
                    setError(`No se encontró la palabra "${query}" en el diccionario. Verifica la ortografía.`);
                }
            }
        } catch {
            setError('Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const playAudio = (audioUrl) => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        }
    };

    return (
        <div className="container py-4">
            <style>{`
                .dictionary-container { max-width: 900px; margin: 0 auto; }
                .search-box { background: var(--color-fondo-secundario); border: 2px solid var(--color-borde); border-radius: 1rem; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: all 0.3s ease; }
                .search-box:hover { border-color: var(--acento-primario); box-shadow: 0 0 20px -5px var(--acento-primario); }
                .search-input-wrapper { position: relative; }
                .search-input-wrapper .search-icon { position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); color: var(--color-texto-secundario); font-size: 1.5rem; pointer-events: none; }
                .search-input { background-color: var(--color-fondo); color: var(--color-texto-principal); border: 2px solid var(--color-borde); border-radius: 0.75rem; padding: 1rem 1rem 1rem 3.5rem; font-size: 1.1rem; width: 100%; transition: all 0.3s ease; }
                .search-input:focus { outline: none; border-color: var(--acento-primario); box-shadow: 0 0 0 3px rgba(45,212,191,0.1); }
                .search-btn { background: linear-gradient(135deg, var(--acento-primario), var(--acento-secundario)); color: var(--color-fondo); border: none; border-radius: 0.75rem; padding: 1rem 2rem; font-weight: 700; font-size: 1.1rem; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
                .search-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(45,212,191,0.4); }
                .result-card { background: var(--color-fondo-secundario); border: 1px solid var(--color-borde); border-radius: 1rem; padding: 2rem; margin-bottom: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); animation: fadeInUp 0.5s ease; }
                .translation-card { background: linear-gradient(135deg, rgba(45,212,191,0.1), rgba(251,191,36,0.1)); border-left: 4px solid var(--acento-primario); }
                .word-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid var(--color-borde); }
                .word-title { font-size: 3rem; font-weight: 800; color: var(--color-texto-principal); margin: 0; background: linear-gradient(135deg, var(--acento-primario), var(--acento-secundario)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
                .phonetic-text { font-size: 1.2rem; color: var(--color-texto-secundario); font-style: italic; margin-top: 0.5rem; }
                .audio-btn { background: var(--acento-primario); color: var(--color-fondo); border: none; border-radius: 50%; width: 60px; height: 60px; font-size: 1.8rem; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; }
                .audio-btn:hover { transform: scale(1.1); box-shadow: 0 0 20px var(--acento-primario); }
                .part-of-speech-badge { display: inline-block; background: var(--acento-secundario); color: var(--color-fondo); padding: 0.5rem 1rem; border-radius: 2rem; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
                .definition-item { padding: 1rem 0; border-left: 3px solid transparent; padding-left: 1rem; margin-bottom: 0.5rem; transition: all 0.3s ease; }
                .definition-item:hover { border-left-color: var(--acento-primario); background: rgba(45,212,191,0.05); border-radius: 0.5rem; }
                .definition-text { font-size: 1.1rem; color: var(--color-texto-principal); margin-bottom: 0.5rem; }
                .example-text { font-size: 1rem; color: var(--color-texto-secundario); font-style: italic; padding-left: 1rem; border-left: 2px solid var(--color-borde); }
                .loading-spinner { display: inline-block; width: 50px; height: 50px; border: 5px solid var(--color-borde); border-top-color: var(--acento-primario); border-radius: 50%; animation: spin 1s linear infinite; }
                @keyframes spin { to { transform: rotate(360deg); } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .empty-state { text-align: center; padding: 4rem 2rem; color: var(--color-texto-secundario); }
                .translation-label { font-size: 0.9rem; color: var(--color-texto-secundario); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 0.5rem; }
                .translation-text { font-size: 2.5rem; font-weight: 700; color: var(--acento-primario); margin-bottom: 0.5rem; }
                .error-message { background: rgba(248,113,113,0.1); border-left: 4px solid var(--feedback-incorrecto); padding: 1.5rem; border-radius: 0.5rem; color: var(--feedback-incorrecto); font-weight: 600; }
                .warning-message { background: rgba(251,191,36,0.1); border-left: 4px solid var(--acento-secundario); padding: 1.5rem; border-radius: 0.5rem; color: var(--acento-secundario); font-weight: 600; }
            `}</style>
            
            <div className="level-header" style={{ '--glow-color': 'var(--acento-primario)' }}>
                <span className="level-badge">Herramienta</span>
                <h1>Diccionario y Traductor</h1>
                <p className="lead text-muted">Busca cualquier palabra en inglés o español para ver su traducción, definición y pronunciación.</p>
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
                            placeholder="Escribe una palabra (ej: apple, success, manzana...)" 
                            autoFocus 
                        />
                    </div>
                    <div className="d-flex gap-2 mt-3">
                        <button className="search-btn flex-grow-1" onClick={handleSearch} disabled={loading}>
                            {loading ? <div className="spinner-border spinner-border-sm me-2"></div> : <i className="bi bi-search me-2"></i>}
                            {loading ? 'Buscando...' : 'Buscar'}
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
                            <i className="bi bi-book" style={{ fontSize: '4rem', color: 'var(--acento-primario)', marginBottom: '1rem', display: 'block' }}></i>
                            <h4 style={{ color: 'var(--color-texto-principal)' }}>¡Comienza a explorar!</h4>
                            <p>Los resultados de tu búsqueda aparecerán aquí.</p>
                        </div>
                    )}

                    {loading && (
                        <div className="text-center py-5">
                            <div className="loading-spinner mx-auto mb-3"></div>
                            <p style={{ color: 'var(--color-texto-secundario)', fontSize: '1.1rem' }}>Buscando información...</p>
                        </div>
                    )}

                    {results && !loading && (
                        <>
                            <div className="result-card translation-card">
                                <div className="translation-label">
                                    <i className="bi bi-translate me-2"></i>Traducción
                                </div>
                                <div className="translation-text">{results.translation}</div>
                                <div className="searched-for">
                                    Buscaste: <strong>"{results.original}"</strong>
                                </div>
                            </div>

                            {results.dictionary && (
                                <div className="result-card">
                                    <div className="word-header">
                                        <div>
                                            <h2 className="word-title">{results.dictionary.word}</h2>
                                            {results.dictionary.phonetic && <p className="phonetic-text">{results.dictionary.phonetic}</p>}
                                        </div>
                                        {results.dictionary.phonetics?.find(f => f.audio && f.audio !== '') && (
                                            <div>
                                                <button 
                                                    className="audio-btn" 
                                                    onClick={() => playAudio(results.dictionary.phonetics.find(f => f.audio && f.audio !== '').audio)} 
                                                    title="Escuchar pronunciación"
                                                >
                                                    <i className="bi bi-volume-up-fill"></i>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {results.dictionary.meanings?.map((meaning, idx) => (
                                        <div key={idx} className="mb-4">
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
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Diccionario;
