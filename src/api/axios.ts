import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://farmon-be.site/api',
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
    console.log('Request Config:', {
      url: config.url,
      baseURL: config.baseURL,
      method: config.method,
      headers: config.headers,
    });

    const token = localStorage.getItem('token');
    if (token && !publicEndpoints.some((endpoint) => config.url?.includes(endpoint))) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Response Error:', {
      status: error.response?.status,
      data: error.response?.data,
      config: error.config,
    });

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
