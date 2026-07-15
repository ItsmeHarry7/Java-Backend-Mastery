import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/auth',
});

// Automatically attach the JWT token to every protected request if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (userData) => API.post('/register', userData);
export const loginUser = (credentials) => API.post('/login', credentials);
export const getUserProfile = () => API.get('/profile');