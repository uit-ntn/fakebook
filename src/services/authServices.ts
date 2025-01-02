import AxiosClient from './axiosClient';

export interface LoginData {
    username: string;
    password: string;
}

export interface RegisterData {
    username: string;
    password: string;
}

export interface RefreshTokenData {
    refreshToken: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface UserInfoResponse {
    _id: string;
    username: string;
    messages: any[];
    friends: any[];
    createdAt: string;
}

const API_ENDPOINT = 'auth';

const userApi = {
    /**
     * Login API
     * @param data { username, password }
     * @returns LoginResponse
     */
    login: async (data: LoginData): Promise<LoginResponse> => {
        console.log('Sending login request:', data);
        try {
            const res = await AxiosClient.post<LoginResponse>(`${API_ENDPOINT}/login`, data);
            console.log('Full response:', res); // Log toàn bộ phản hồi
            console.log('Response data:', res.data); // Log dữ liệu JSON trả về
            return res.data;
        } catch (error: any) {
            console.error('Login API error:', error.response || error.message);
            throw error;
        }
    },

    /**
     * Register API
     * @param data { username, password }
     * @returns void
     */
    register: async (data: RegisterData): Promise<void> => {
        console.log('Sending register request:', data);
        try {
            const res = await AxiosClient.post(`${API_ENDPOINT}/register`, data);
            console.log('Registration successful:', res.data);
        } catch (error: any) {
            console.error('Register API error:', error.response || error.message);
            throw error;
        }
    },

    /**
     * Logout API
     * @param data { userId }
     * @returns void
     */
    logout: async (data: { userId: string }): Promise<void> => {
        console.log('Sending logout request for user:', data.userId);
        try {
            const res = await AxiosClient.post(`${API_ENDPOINT}/logout`, data);
            console.log('Logout successful:', res.data);
        } catch (error: any) {
            console.error('Logout API error:', error.response || error.message);
            throw error;
        }
    },

    /**
     * Refresh Token API
     * @param refreshToken
     * @returns LoginResponse
     */
    refreshToken: async (refreshToken: string): Promise<LoginResponse> => {
        console.log('Sending refresh token request.');
        try {
            const res = await AxiosClient.post<LoginResponse>(`${API_ENDPOINT}/refresh-token`, {
                refreshToken,
            });
            console.log('Refresh token successful:', res.data);
            return res.data;
        } catch (error: any) {
            console.error('Refresh Token API error:', error.response || error.message);
            throw error;
        }
    },

    /**
     * Get User Info API
     * @returns UserInfoResponse
     */
    getInfo: async (): Promise<UserInfoResponse> => {
        console.log('Fetching user info...');
        try {
            const res = await AxiosClient.get<UserInfoResponse>('user/info');
            console.log('User info fetched successfully:', res.data);
            return res.data;
        } catch (error: any) {
            console.error('Get User Info API error:', error.response || error.message);
            throw error;
        }
    },

    getListUsers: async () => {
        console.log('Fetching list users...');
        try {
            const res = await AxiosClient.get('user/list');
            console.log('List users fetched successfully:', res.data);
            return res.data;
        } catch (error: any) {
            console.error('Get List Users API error:', error.response || error.message);
            throw error;
        }
    },
};

export default userApi;
