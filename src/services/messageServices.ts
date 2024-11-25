import AxiosClient from './axiosClient';

const API_ENDPOINT = 'message';

const messageApi = {
    getList: (sendId: string) => {
        return AxiosClient.get(API_ENDPOINT, { params: { sendId: sendId } });
    },
};

export default messageApi;
