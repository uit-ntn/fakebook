import AxiosClient from './axiosClient';

const API_ENDPOINT = 'friend';

const friendApi = {
    getListFriend: () => {
        return AxiosClient.get(API_ENDPOINT + '/list');
    },
    addFriend: (userId: string) => {
        return AxiosClient.post(API_ENDPOINT + `/add-friend`, {}, { params: { friendId: userId } });
    },
    acceptFriend: (userId: string) => {
        return AxiosClient.post(API_ENDPOINT + `/accept-friend`, {}, { params: { friendId: userId } });
    },
    getFriendRequests: () => {
        return AxiosClient.get(API_ENDPOINT + '/pending-requests');
    },
};

export default friendApi;
