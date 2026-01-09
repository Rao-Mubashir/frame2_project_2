import axios from 'axios';

// Use relative paths since we're deploying monolithically
const apiUrl = '';

export const API_BASE_URL = apiUrl;

// Create a pre-configured axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add interceptor for tokens
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
