import axios from 'axios';
import API_URL from './config';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Crucial for HttpOnly Cookies
    headers: {
        'Content-Type': 'application/json',
        'X-App-Source': 'admin'
    },
});

// Request Interceptor: Attach token from localStorage if present (fallback for blocked cookies)
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('admin_token') || localStorage.getItem('token');
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
            console.warn('Admin session expired or unauthorized.');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
