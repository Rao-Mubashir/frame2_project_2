import axios from 'axios';

// Get the API URL from environment variables, or fallback to local
let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// NUCLEAR FIX: In Render Blueprints, the hostname is often passed as 'frame2-backend'
// We MUST force it to be the public .onrender.com address for the browser to see it.
if (apiUrl.includes('frame2-backend') && !apiUrl.includes('.onrender.com')) {
    apiUrl = apiUrl.replace('frame2-backend', 'frame2-backend.onrender.com');
}

// Ensure protocol is present
if (!apiUrl.startsWith('http')) {
    apiUrl = `https://${apiUrl}`;
}

// Remove trailing slash if present
apiUrl = apiUrl.replace(/\/$/, "");

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
