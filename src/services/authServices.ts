import AxiosClient from "./axiosClient";

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData extends LoginData {
    username: string;
}

interface RefreshTokenData {
    refreshToken: string;
}

const API_ENDPOINT = "auth";

const userApi = {
    login: (data: LoginData) => {
        console.log(data);
        return AxiosClient.post(API_ENDPOINT + "/login", data);
    },
    logout: (data: { userId: string }) => {
        return AxiosClient.post(API_ENDPOINT + "/logout", data);
    },
    register: (data: RegisterData) => {
        return AxiosClient.post(API_ENDPOINT + "/signup", data);
    },
    refreshToken: (refreshToken: string) => {
        return AxiosClient.post(API_ENDPOINT + "/refresh-token", { refreshToken });
    },
};

export default userApi;