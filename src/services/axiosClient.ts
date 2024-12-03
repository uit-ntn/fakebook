import axios, { AxiosInstance } from 'axios';
// import { parse, stringify } from "qs";
import { getRefreshToken, getToken, setRefreshToken, setToken } from '../utils/localStorage';
import { API_ENDPOINT } from '../utils/endpoints';

interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

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
        let token: any = null;
        token = getToken();
        if (token) {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }
        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    function (response) {
        return response.data ?? response;
    },

    async function (error) {
        const originalRequest = error.config;
        const rftk = getRefreshToken();

        if (error?.response?.status === 401 && !!rftk && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res: RefreshTokenResponse = await AxiosClient.post('/auth/refreshToken', { refreshToken: rftk });
                const { accessToken, refreshToken } = res;
                // console.log(res);
                setToken(accessToken);
                setRefreshToken(refreshToken);
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return AxiosClient(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
    }
);

export default AxiosClient;
