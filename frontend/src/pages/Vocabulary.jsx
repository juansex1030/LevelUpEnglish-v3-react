import React, { useState } from 'react';
import './LevelGrid.css'; // Let's reuse LevelGrid CSS for headers/glows

import { vocabularyData } from '../data/vocabulary';

const Vocabulary = () => {
    const [activeTab, setActiveTab] = useState('regularVerbs');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 20;

    const renderTabs = () => {
        return (
            <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
                {Object.entries(vocabularyData).map(([key, category]) => (
                    <button
                        key={key}
                        className={`btn ${activeTab === key ? 'fw-bold shadow-sm' : ''}`}
                        style={{
                            backgroundColor: activeTab === key ? category.color : 'var(--color-fondo-secundario)',
                            color: activeTab === key ? '#fff' : 'var(--color-texto-secundario)',
                            border: `1px solid ${activeTab === key ? 'transparent' : 'var(--color-borde)'}`,
                            borderRadius: '2rem',
                            padding: '0.6rem 1.5rem',
                            transition: 'all 0.3s ease'
                        }}
                        onClick={() => {
                            setActiveTab(key);
                            setCurrentPage(1);
                        }}
                    >
                        <i className={`bi ${category.icon} me-2`}></i>
                        {category.title}
                    </button>
                ))}
            </div>
        );
    };

    const currentCategory = vocabularyData[activeTab];

    const filteredWords = currentCategory.words.filter(wordPair =>
        wordPair.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wordPair.es.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (wordPair.past && wordPair.past.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (wordPair.part && wordPair.part.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredWords.length / ITEMS_PER_PAGE);
    const paginatedWords = filteredWords.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const playAudio = (text) => {
        if (!text || typeof text !== 'string') return;

        // Prevenir spam de clicks: ignoramos la petición si actualmente ya está pronuciando algo
        if (window.speechSynthesis.speaking) return;

        const cleanText = text.split('/')[0].trim();

        // Evita que la API se quede "atascada" si hubo errores previos
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Un poco más lento para mejor claridad

        // Manejador de errores por si falla
        utterance.onerror = (e) => console.error("Speech Synthesis Error:", e);

        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="container py-4">
            <style>{`
                .vocab-card {
                    background: var(--color-fondo-primario);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1.5rem;
                    padding: 1.5rem;
                    transition: all 0.3s ease;
                    height: 100%;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1), inset 0 2px 5px rgba(255,255,255,0.03);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                .vocab-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; height: 4px;
                    background: ${currentCategory.color};
                    opacity: 0.8;
                }
                .vocab-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15), inset 0 2px 5px rgba(255,255,255,0.05);
                    border-color: rgba(255, 255, 255, 0.1);
                }
                .vocab-en {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: ${currentCategory.color};
                    margin-bottom: 0.5rem;
                }
                .vocab-es {
                    font-size: 1.1rem;
                    color: var(--color-texto-secundario);
                    font-weight: 500;
                }
                .vocab-divider {
                    height: 2px;
                    background: linear-gradient(90deg, ${currentCategory.color} 0%, transparent 100%);
                    width: 50px;
                    margin: 0.8rem 0;
                }
                .words-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                    animation: fadeIn 0.5s ease;
                }
                .words-grid.words-grid-verbs {
                    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
                }
                .verb-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 0.5rem;
                    text-align: center;
                }
                .verb-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 0.5rem;
                }
                .verb-label {
                    font-size: 0.75rem;
                    font-weight: bold;
                    color: var(--color-texto-secundario);
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    opacity: 0.7;
                    letter-spacing: 0.5px;
                }
                .verb-es {
                    border-top: none;
                    margin-top: 0;
                    padding-top: 0;
                }
                .vocab-es-small {
                    font-size: 0.95rem;
                    color: var(--color-texto-secundario);
                    font-weight: 400;
                    margin-top: 0.3rem;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .words-grid.words-grid-verbs {
                        grid-template-columns: 1fr;
                    }
                    .vocab-card {
                        padding: 1rem 0.75rem;
                    }
                    .verb-grid {
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 0.25rem;
                    }
                    .verb-column {
                        padding: 0 0.25rem;
                        overflow: hidden;
                    }
                    .verb-label {
                        font-size: 0.6rem;
                        letter-spacing: 0;
                    }
                    .vocab-en {
                        font-size: 0.95rem !important;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 100%;
                    }
                    .vocab-es-small {
                        font-size: 0.75rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 100%;
                    }
                    .bi-volume-up {
                        font-size: 0.9rem !important;
                        margin-right: 0.2rem !important;
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="level-header" style={{ '--glow-color': currentCategory.color }}>
                <span className="level-badge" style={{ backgroundColor: currentCategory.color, color: '#fff' }}>
                    <i className={`bi ${currentCategory.icon} me-2`}></i> Vocabulary
                </span>
                <h1>Expression Guide</h1>
                <p className="lead text-muted">Learn and review the most important English words categorized for you.</p>
            </div>

            <div className="mt-5">
                {renderTabs()}

                <div className="text-center mb-5 mt-3" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <h3 className="fw-bold" style={{ color: currentCategory.color }}>{currentCategory.title}</h3>
                    <p className="text-muted mb-4">{currentCategory.description}</p>

                    <div className="input-group mx-auto" style={{ maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderRadius: '2rem', overflow: 'hidden' }}>
                        <span className="input-group-text border-end-0" style={{ backgroundColor: 'var(--color-fondo-secundario)', color: currentCategory.color, borderColor: 'var(--color-borde)' }}>
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0 border-end-0 py-2"
                            placeholder={`Search in ${currentCategory.title.toLowerCase()}...`}
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            style={{ borderColor: 'var(--color-borde)', backgroundColor: 'var(--color-fondo-secundario)', color: 'var(--color-texto-principal)', boxShadow: 'none' }}
                        />
                        {searchTerm && (
                            <span className="input-group-text border-start-0" style={{ cursor: 'pointer', backgroundColor: 'var(--color-fondo-secundario)', borderColor: 'var(--color-borde)' }} onClick={() => setSearchTerm('')}>
                                <i className="bi bi-x-circle-fill text-muted"></i>
                            </span>
                        )}
                    </div>
                </div>

                <div className={`words-grid ${activeTab.includes('Verbs') ? 'words-grid-verbs' : ''}`}>
                    {paginatedWords.length > 0 ? (
                        paginatedWords.map((wordPair, idx) => {
                            const isVerb = wordPair.past && wordPair.part;
                            return (
                                <div key={idx} className="vocab-card">
                                    {isVerb ? (
                                        <>
                                            <div className="verb-grid">
                                                <div className="verb-column">
                                                    <span className="verb-label">Infinitive</span>
                                                    <span className="vocab-en text-center w-100" style={{ fontSize: '1.2rem' }}>
                                                        <i className="bi bi-volume-up me-2" style={{ fontSize: '1.2rem', cursor: 'pointer', opacity: 0.5 }}
                                                            onClick={() => playAudio(wordPair.en)}
                                                            title="Listen to infinitive"></i>
                                                        {wordPair.en}
                                                    </span>
                                                    <span className="vocab-es-small">{wordPair.es}</span>
                                                </div>
                                                <div className="verb-column" style={{ borderLeft: '1px solid var(--color-borde)', borderRight: '1px solid var(--color-borde)' }}>
                                                    <span className="verb-label">Past</span>
                                                    <span className="vocab-en text-center w-100" style={{ fontSize: '1.2rem' }}>
                                                        <i className="bi bi-volume-up me-2" style={{ fontSize: '1.2rem', cursor: 'pointer', opacity: 0.5 }}
                                                            onClick={() => playAudio(wordPair.past)}
                                                            title="Listen to past"></i>
                                                        {wordPair.past}
                                                    </span>
                                                    <span className="vocab-es-small">{wordPair.esPast || '-'}</span>
                                                </div>
                                                <div className="verb-column">
                                                    <span className="verb-label">Participle</span>
                                                    <span className="vocab-en text-center w-100" style={{ fontSize: '1.2rem' }}>
                                                        <i className="bi bi-volume-up me-2" style={{ fontSize: '1.2rem', cursor: 'pointer', opacity: 0.5 }}
                                                            onClick={() => playAudio(wordPair.part)}
                                                            title="Listen to participle"></i>
                                                        {wordPair.part}
                                                    </span>
                                                    <span className="vocab-es-small">{wordPair.esPart || '-'}</span>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span className="vocab-en">
                                                <i className="bi bi-volume-up me-2" style={{ fontSize: '1.2rem', cursor: 'pointer', opacity: 0.5 }}
                                                    onClick={() => playAudio(wordPair.en)}
                                                    title="Listen to pronunciation"></i>
                                                {wordPair.en}
                                            </span>
                                            <div className="vocab-divider"></div>
                                            <span className="vocab-es">{wordPair.es}</span>
                                        </>
                                    )}
                                </div>
                            )
                        })
                    ) : (
                        <div className="text-center py-5" style={{ gridColumn: '1 / -1' }}>
                            <i className="bi bi-search text-muted opacity-50 mb-3 d-block" style={{ fontSize: '3rem' }}></i>
                            <h4 className="text-muted fw-bold">No results found</h4>
                            <p className="text-muted">No words match "{searchTerm}". Try searching for something else.</p>
                            <button className="btn btn-outline-secondary mt-2 rounded-pill" onClick={() => { setSearchTerm(''); setCurrentPage(1); }}>
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-5 pb-4">
                        <button 
                            className="btn shadow-sm px-4 rounded-pill"
                            style={{ backgroundColor: 'var(--color-fondo-secundario)', color: 'var(--color-texto-principal)', border: '1px solid var(--color-borde)' }}
                            disabled={currentPage === 1}
                            onClick={() => {
                                setCurrentPage(p => p - 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <i className="bi bi-chevron-left me-2"></i> Previous
                        </button>
                        <span className="fw-bold text-muted">Page {currentPage} of {totalPages}</span>
                        <button 
                            className="btn shadow-sm px-4 rounded-pill"
                            style={{ backgroundColor: 'var(--color-fondo-secundario)', color: 'var(--color-texto-principal)', border: '1px solid var(--color-borde)' }}
                            disabled={currentPage === totalPages}
                            onClick={() => {
                                setCurrentPage(p => p + 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            Next <i className="bi bi-chevron-right ms-2"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Vocabulary;
