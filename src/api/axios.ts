import axios from 'axios';

const BASE_URL = 'http://43.201.137.131:8080/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 401 에러 해결을 위해 인터셉터 수정
axiosInstance.interceptors.request.use(
  (config) => {
    // 인증이 필요없는 엔드포인트 목록
    const publicEndpoints = ['/generate', '/verify', '/user/join', '/login'];

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
      if (
        !error.config.url?.includes('/generate') &&
        !error.config.url?.includes('/verify') &&
        !error.config.url?.includes('/user/join') &&
        !error.config.url?.includes('/login')
      ) {
        localStorage.removeItem('token');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
