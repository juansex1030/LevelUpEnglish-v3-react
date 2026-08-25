const getLocalApiUrl = () => {
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
        return `http://${window.location.hostname}:3000/api/v1`;
    }
    return import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';
};

const API_URL = import.meta.env.PROD 
    ? 'https://level-up-english-v3-react-backend.vercel.app/api/v1' 
    : getLocalApiUrl();

export default API_URL;
