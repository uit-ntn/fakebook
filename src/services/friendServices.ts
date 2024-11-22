import AxiosClient from "./axiosClient";

const API_ENDPOINT = "friend";

const friendApi = {
    getList: () => {
        return AxiosClient.get(API_ENDPOINT + "/list");
    },
};

export default friendApi;
