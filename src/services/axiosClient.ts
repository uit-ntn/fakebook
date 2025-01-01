import axios, { AxiosInstance } from 'axios';
// import { parse, stringify } from "qs";
import { getRefreshToken, getToken, setRefreshToken, setToken } from '../utils/localStorage';
import { API_ENDPOINT } from '../utils/endpoints';

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

// instance axios with basic config (baseURL, headers, timeout, v.v.)
const AxiosClient: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});


AxiosClient.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    // Lấy token từ localStorage
    const token = getToken();

    // Nếu có token, gán vào Authorization header
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  (error) => {
    // Trả về lỗi nếu có vấn đề khi cấu hình request
    return Promise.reject(error);
  }
);

// Tự động refresh token nếu token hết hạn
AxiosClient.interceptors.response.use(
  (response) => {
    // Mặc định axios sẽ bọc data vào `response.data`,
    const res: any = response.data;
    return res;
  },

  async (error) => {
    // Lưu lại request ban đầu
    const originalRequest = error.config;
    // Lấy refreshToken từ localStorage
    const rftk = getRefreshToken();

    if (error?.response?.status === 401 && !!rftk && !originalRequest._retry) {
      // Đánh dấu request này đã retry
      originalRequest._retry = true;
      try {
        const res: RefreshTokenResponse = await AxiosClient.post('/auth/refreshToken', { refreshToken: rftk });
        const { accessToken, refreshToken } = res;

        // Cập nhật token mới vào localStorage
        setToken(accessToken);
        setRefreshToken(refreshToken);

        // Gán token mới cho request cũ trước khi retry
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
