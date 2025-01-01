import AxiosClient from "./axiosClient";

export interface LoginData {
    username: string;
    password: string;
}

export interface RegisterData extends LoginData {
    username: string;
}

export interface RefreshTokenData {
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
    getInfo: () => {
        return AxiosClient.get("user/info");
    },
};

export default userApi;
