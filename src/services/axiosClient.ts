import axios, { AxiosInstance } from "axios";
import { getRefreshToken, getToken, setRefreshToken, setToken } from "../utils/localStorage";
import { API_ENDPOINT } from "../utils/endpoints";

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

// config Axios Client
const AxiosClient: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  responseType: "json",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Gắn Authorization Header
AxiosClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Auto Refresh Token
AxiosClient.interceptors.response.use(
  (response) => response, // Trả về toàn bộ response
  async (error) => {
    const originalRequest = error.config;
    const rftk = getRefreshToken();

    if (error?.response?.status === 401 && !!rftk && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await AxiosClient.post<RefreshTokenResponse>("/auth/refreshToken", {
          refreshToken: rftk,
        });
        const { accessToken, refreshToken } = res.data;

        setToken(accessToken);
        setRefreshToken(refreshToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return AxiosClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;
