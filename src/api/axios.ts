import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const publicEndpoints = [
  '/generate',
  '/verify',
  '/user/join',
  '/login',
  '/user/find-email',
  '/user/reset-password',
];

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && !publicEndpoints.some((endpoint) => config.url?.includes(endpoint))) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (!publicEndpoints.some((endpoint) => error.config.url?.includes(endpoint))) {
        localStorage.removeItem('token');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
