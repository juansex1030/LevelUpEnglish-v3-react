import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/apiClient';
import { useAuth } from '../context/AuthContext';
import './PlacementTest.css';

const placementQuestions = [
    // A1
    { q: 'I ____ a student.', options: ['am', 'is', 'are', 'be'], a: 'am' },
    { q: 'She ____ like apples.', options: ["don't", 'doesn\'t', 'isn\'t', 'not'], a: 'doesn\'t' },
    { q: '____ is your name?', options: ['Who', 'How', 'What', 'Where'], a: 'What' },
    // A2
    { q: 'I went to the store ____ buy some milk.', options: ['for', 'to', 'so', 'because'], a: 'to' },
    { q: 'He is taller ____ his brother.', options: ['that', 'then', 'than', 'as'], a: 'than' },
    { q: 'I ____ seen that movie yet.', options: ['haven\'t', 'didn\'t', 'don\'t', 'wasn\'t'], a: 'haven\'t' },
    // B1
    { q: 'If it rains tomorrow, we ____ at home.', options: ['stay', 'will stay', 'stayed', 'would stay'], a: 'will stay' },
    { q: 'I look forward ____ you soon.', options: ['to see', 'to seeing', 'seeing', 'see'], a: 'to seeing' },
    { q: 'She asked me what time ____.', options: ['was it', 'it was', 'is it', 'it is'], a: 'it was' },
    // B2
    { q: 'By this time next year, I ____ from university.', options: ['will graduate', 'will have graduated', 'graduate', 'have graduated'], a: 'will have graduated' },
    { q: 'I wish I ____ more time to study yesterday.', options: ['had', 'have had', 'had had', 'have'], a: 'had had' },
    { q: 'Not only ____ late, but he also forgot his books.', options: ['he was', 'was he', 'did he', 'he did'], a: 'was he' },
];

function PlacementTest() {
    const { user, verifyUser } = useAuth(); 
    const navigate = useNavigate();
    
    const [step, setStep] = useState('intro'); // 'intro', 'test', 'result'
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [resultLevel, setResultLevel] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    // If user already completed the test, send them to progress immediately
    useEffect(() => {
        if (user && user.placement_test_completed) {
            navigate('/progress', { replace: true });
        }
    }, [user, navigate]);

    const submitResult = async (finalScore, startFromScratch = false) => {
        setIsSubmitting(true);
        try {
            const res = await api.post('/auth/placement', { score: finalScore, startFromScratch });
            setResultLevel(res.data.level);
            // Update local user context so we don't get trapped in a redirect loop
            if (verifyUser) {
                await verifyUser();
            }
            setStep('result');
        } catch (error) {
            console.error('Error submitting placement test:', error);
            alert('Hubo un error al guardar tu resultado. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAnswer = (option) => {
        if (showAnswer) return;
        setSelectedOption(option);
        setShowAnswer(true);

        const q = placementQuestions[currentQIndex];
        let newScore = score;
        if (option === q.a) {
            newScore += 1;
            setScore(newScore);
        }

        const isLastQuestion = currentQIndex + 1 >= placementQuestions.length;
        // Lock buttons immediately if this is the last question
        if (isLastQuestion) setIsSubmitting(true);

        setTimeout(() => {
            setShowAnswer(false);
            setSelectedOption(null);
            if (!isLastQuestion) {
                setCurrentQIndex(currentQIndex + 1);
            } else {
                submitResult(newScore, false);
            }
        }, 1200);
    };

    if (step === 'intro') {
        return (
            <div className="placement-container d-flex align-items-center justify-content-center min-vh-100">
                <div className="placement-card text-center p-5 rounded-4 shadow-lg animate__animated animate__zoomIn">
                    <h1 className="fw-bold mb-3 text-white">¡Bienvenido a LevelUp English!</h1>
                    <p className="text-white-50 mb-4 fs-5">
                        Para personalizar tu experiencia, necesitamos saber tu nivel actual de inglés.
                    </p>
                    <div className="d-flex flex-column gap-3 mx-auto" style={{ maxWidth: '400px' }}>
                        <button 
                            className="btn btn-primary btn-lg rounded-pill fw-bold py-3 shadow"
                            onClick={() => setStep('test')}
                        >
                            <i className="bi bi-ui-checks-grid me-2"></i> Hacer prueba rápida (2 mins)
                        </button>
                        <button 
                            className="btn btn-outline-light btn-lg rounded-pill fw-bold py-3"
                            onClick={() => submitResult(0, true)}
                            disabled={isSubmitting}
                        >
                            <i className="bi bi-play-circle me-2"></i> No sé nada, empezar desde cero (A1)
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'test') {
        const q = placementQuestions[currentQIndex];
        return (
            <div className="placement-container d-flex align-items-center justify-content-center min-vh-100 p-3">
                <div className="placement-card w-100 p-4 p-md-5 rounded-4 shadow-lg animate__animated animate__fadeIn" style={{ maxWidth: '600px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="badge bg-primary fs-6">Pregunta {currentQIndex + 1} de {placementQuestions.length}</span>
                        <div className="progress w-50" style={{ height: '10px' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: `${((currentQIndex) / placementQuestions.length) * 100}%` }}></div>
                        </div>
                    </div>
                    
                    <h3 className="mb-4 text-white text-center fw-bold">{q.q}</h3>
                    
                    <div className="row g-3">
                        {q.options.map((opt, idx) => {
                            let btnClass = "btn btn-outline-light w-100 rounded-pill px-4 py-3 h-100";
                            if (showAnswer) {
                                if (opt === q.a) btnClass = "btn btn-success w-100 rounded-pill px-4 py-3 h-100 text-white border-success";
                                else if (opt === selectedOption) btnClass = "btn btn-danger w-100 rounded-pill px-4 py-3 h-100 text-white border-danger";
                            }
                            return (
                                <div className="col-6" key={idx}>
                                    <button 
                                        className={btnClass}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={showAnswer || isSubmitting}
                                    >
                                        {opt}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'result') {
        return (
            <div className="placement-container d-flex align-items-center justify-content-center min-vh-100 p-3">
                <div className="placement-card text-center p-5 rounded-4 shadow-lg animate__animated animate__jackInTheBox" style={{ maxWidth: '500px' }}>
                    <i className="bi bi-trophy text-warning" style={{ fontSize: '4rem' }}></i>
                    <h2 className="fw-bold text-white mt-3 mb-2">¡Prueba Completada!</h2>
                    <p className="text-white-50 fs-5 mb-4">Basado en tus resultados, tu nivel recomendado es:</p>
                    
                    <div className="display-1 fw-bold text-primary mb-4">
                        {resultLevel}
                    </div>

                    <p className="text-light mb-4">
                        Hemos desbloqueado el contenido adecuado para ti. ¡Estás listo para empezar!
                    </p>

                    <button 
                        className="btn btn-primary btn-lg rounded-pill fw-bold w-100 py-3 shadow"
                        onClick={() => navigate('/progress')}
                    >
                        Ver mi Progreso <i className="bi bi-bar-chart-line ms-2"></i>
                    </button>
                </div>
            </div>
        );
    }

    return null;
}

export default PlacementTest;
