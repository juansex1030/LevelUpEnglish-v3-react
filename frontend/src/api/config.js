const API_URL = import.meta.env.VITE_API_URL || (
    import.meta.env.PROD 
        ? 'https://level-up-english-v3-react-backend.vercel.app/api/v1' 
        : 'http://localhost:3000/api/v1'
);

export default API_URL;
