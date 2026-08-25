import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const LevelCard = ({ icon, cssClass, title, description, link }) => (
    <Link to={link} className="learn-card-link animate__animated animate__zoomIn">
        <div className={`learn-card ${cssClass}`}>
            <div className="learn-icon-wrapper">
                <i className={`bi ${icon}`}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </Link>
);

const Dashboard = () => {
    const { user, loading } = useAuth();

    if (loading) return <div>Cargando...</div>;

    // Not logged in → redirect to login
    if (!user) return <Navigate to="/login" />;
    
    // Logged in but hasn't done placement test → redirect to test
    if (!user.placement_test_completed) {
        return <Navigate to="/placement-test" />;
    }

    return (
        <div className="learn-container">
            <h1 className="learn-title">Tu Ruta de Aprendizaje</h1>
            <p className="learn-subtitle">Selecciona tu nivel para comenzar la aventura.</p>

            <div className="learn-grid">
                <LevelCard 
                    level="A1"
                    title="A1 Beginner"
                    cssClass="card-a1"
                    icon="bi-emoji-smile-fill"
                    description="Lo básico: vocabulario de supervivencia y frases del día a día."
                    link="/niveles/a1"
                />
                <LevelCard 
                    level="A2"
                    title="A2 Elementary"
                    cssClass="card-a2"
                    icon="bi-chat-dots-fill"
                    description="Maneja conversaciones sencillas y situaciones cotidianas."
                    link="/niveles/a2"
                />
                <LevelCard 
                    level="B1"
                    title="B1 Intermediate"
                    cssClass="card-b1"
                    icon="bi-airplane-fill"
                    description="Viaja y comunícate de manera independiente."
                    link="/niveles/b1"
                />
                <LevelCard 
                    level="B2"
                    title="B2 Upper Inter"
                    cssClass="card-b2"
                    icon="bi-lightbulb-fill"
                    description="Fluidez y espontaneidad para debatir ideas y opiniones."
                    link="/niveles/b2"
                />
                <LevelCard 
                    level="C1"
                    title="C1 Advanced"
                    cssClass="card-c1"
                    icon="bi-gem"
                    description="Dominio del idioma para tareas profesionales y académicas."
                    link="/niveles/c1"
                />
                <LevelCard 
                    level="Diccionario"
                    title="Diccionario"
                    cssClass="card-diccionario"
                    icon="bi-book-half"
                    description="Busca palabras, escucha pronunciaciones y ve ejemplos."
                    link="/diccionario"
                />
            </div>
        </div>
    );
};

export default Dashboard;
