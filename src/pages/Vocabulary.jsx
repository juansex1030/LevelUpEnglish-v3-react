import React, { useState } from 'react';
import './LevelGrid.css'; // Let's reuse LevelGrid CSS for headers/glows

import { vocabularyData } from '../data/vocabulary';

const Vocabulary = () => {
    const [activeTab, setActiveTab] = useState('regularVerbs');
    const [searchTerm, setSearchTerm] = useState('');

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
                        onClick={() => setActiveTab(key)}
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
        wordPair.es.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4">
            <style>{`
                .vocab-card {
                    background: var(--color-fondo-secundario);
                    border: 1px solid var(--color-borde);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    transition: all 0.3s ease;
                    height: 100%;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .vocab-card:hover {
                    transform: translateY(-5px);
                    border-color: ${currentCategory.color};
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
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
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            
            <div className="level-header" style={{ '--glow-color': currentCategory.color }}>
                <span className="level-badge" style={{ backgroundColor: currentCategory.color, color: '#fff' }}>
                    <i className={`bi ${currentCategory.icon} me-2`}></i> Vocabulario
                </span>
                <h1>Guía de Expresiones</h1>
                <p className="lead text-muted">Aprende y repasa las palabras más importantes del inglés divididas por categorías.</p>
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
                            placeholder={`Buscar en ${currentCategory.title.toLowerCase()}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ borderColor: 'var(--color-borde)', backgroundColor: 'var(--color-fondo-secundario)', color: 'var(--color-texto-principal)', boxShadow: 'none' }}
                        />
                        {searchTerm && (
                            <span className="input-group-text border-start-0" style={{ cursor: 'pointer', backgroundColor: 'var(--color-fondo-secundario)', borderColor: 'var(--color-borde)' }} onClick={() => setSearchTerm('')}>
                                <i className="bi bi-x-circle-fill text-muted"></i>
                            </span>
                        )}
                    </div>
                </div>

                <div className="words-grid">
                    {filteredWords.length > 0 ? (
                        filteredWords.map((wordPair, idx) => (
                            <div key={idx} className="vocab-card">
                                <span className="vocab-en">
                                    <i className="bi bi-volume-up me-2" style={{ fontSize: '1.2rem', cursor: 'pointer', opacity: 0.5 }} 
                                       onClick={() => {
                                           const utterance = new SpeechSynthesisUtterance(wordPair.en);
                                           utterance.lang = 'en-US';
                                           window.speechSynthesis.speak(utterance);
                                       }}
                                       title="Escuchar pronunciación"></i>
                                    {wordPair.en}
                                </span>
                                <div className="vocab-divider"></div>
                                <span className="vocab-es">{wordPair.es}</span>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5" style={{ gridColumn: '1 / -1' }}>
                            <i className="bi bi-search text-muted opacity-50 mb-3 d-block" style={{ fontSize: '3rem' }}></i>
                            <h4 className="text-muted fw-bold">No se encontraron resultados</h4>
                            <p className="text-muted">No hay palabras que coincidan con "{searchTerm}". Intenta buscar algo diferente.</p>
                            <button className="btn btn-outline-secondary mt-2 rounded-pill" onClick={() => setSearchTerm('')}>
                                Limpiar Búsqueda
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Vocabulary;
