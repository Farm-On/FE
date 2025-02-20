import axios from 'axios';
import { toast } from 'react-toastify';

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
    switch (error.response?.status) {
      case 401:
        if (!publicEndpoints.some((endpoint) => error.config.url?.includes(endpoint))) {
          localStorage.removeItem('token');
          window.location.href = '/';
        }

        break;

      case 400:
        break;

      default:
        // 토스트
        toast.error(
          (error.response?.status ? `(${error.response?.status})` : '') +
            ' 앗! 서버와 통신 중에 오류가 발생하였습니다.',
          {
            position: 'bottom-right',
            autoClose: 5 * 1000,
            pauseOnHover: false,
          }
        );
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
