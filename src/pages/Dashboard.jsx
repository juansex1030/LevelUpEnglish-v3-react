import React from 'react';
import { Link } from 'react-router-dom';

const LevelCard = ({ icon, cssClass, title, description, link }) => (
    <Link to={link} className="level-card-link">
        <div className={`level-card ${cssClass}`}>
            <i className={`bi ${icon} card-icon`}></i>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    </Link>
);

const Dashboard = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="main-title">Choose Your Path to Fluency</h1>
                <p className="lead text-muted">Select your current level to begin your learning adventure.</p>
            </div>

            <div className="level-grid">
                <LevelCard 
                    level="A1"
                    title="A1 Level"
                    cssClass="card-a1"
                    icon="bi-flag-fill"
                    description="Start your journey with the fundamental basics of English."
                    link="/niveles/a1"
                />
                <LevelCard 
                    level="A2"
                    title="A2 Level"
                    cssClass="card-a2"
                    icon="bi-lightbulb-fill"
                    description="Build upon your knowledge and handle simple, everyday conversations."
                    link="/niveles/a2"
                />
                <LevelCard 
                    level="B1"
                    title="B1 Level"
                    cssClass="card-b1"
                    icon="bi-compass-fill"
                    description="Travel, describe experiences, and become an independent user."
                    link="/niveles/b1"
                />
                <LevelCard 
                    level="B2"
                    title="B2 Level"
                    cssClass="card-b2"
                    icon="bi-chat-dots-fill"
                    description="Achieve fluency and spontaneity for regular, detailed interactions."
                    link="/niveles/b2"
                />
                <LevelCard 
                    level="C1"
                    title="C1 Level"
                    cssClass="card-c1"
                    icon="bi-award-fill"
                    description="Master the language for complex academic and professional tasks."
                    link="/niveles/c1"
                />
                <LevelCard 
                    level="Diccionario"
                    title="Dictionary"
                    cssClass="card-b1" /* Reusing B1 color as in original HTML */
                    icon="bi-book-half"
                    description="Search for words, listen to their pronunciation, and see usage examples."
                    link="/diccionario"
                />
            </div>
        </div>
    );
};

export default Dashboard;
