import AxiosClient from './axiosClient';

const API_ENDPOINT = 'conversation';

const conversationApi = {
    getConversations: () => {
        return AxiosClient.get(API_ENDPOINT);
    },
};

export default conversationApi;
