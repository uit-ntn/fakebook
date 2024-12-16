import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.REACT_APP_BASE_URL; 
const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer YOUR_ACCESS_TOKEN`
  }
});

// handling request
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('Request config:', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// handling response
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  (error) => {
    console.error('Error response:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
