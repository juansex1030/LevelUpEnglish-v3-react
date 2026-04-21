import axios from 'axios';
import API_URL from './config';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Crucial for HttpOnly Cookies
    headers: {
        'Content-Type': 'application/json',
        'X-App-Source': 'frontend'
    },
});

// Request Interceptor: Attach token from localStorage if present (fallback for blocked cookies)
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor: Handle global errors (like 401 Unauthorized)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.warn('Session expired or unauthorized.');
            // With cookies, we don't manually remove the token here.
            // The backend return 401/403 and we just need to let the app know.
        }
        return Promise.reject(error);
    }
);

export default apiClient;
