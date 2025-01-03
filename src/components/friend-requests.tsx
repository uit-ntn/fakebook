import React, { useState, useEffect } from 'react';
import { Button } from '@/components/button';
import friendApi from '@/services/friendServices';
import { message } from 'antd';
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/userSlice';

interface FriendRequest {
    _id: string;
    name: string;
    avatar: string;
    mutualFriends: number;
    sentBy: string;
    status: string;
    userId: string;
}

const mockFriendRequests: FriendRequest[] = [
    {
        _id: '1',
        name: 'Minh',
        avatar: 'https://i.pravatar.cc/150?u=user1',
        mutualFriends: 24,
        sentBy: 'Minh',
        status: 'pending',
        userId: 'user1',
    },
    {
        _id: '2',
        name: 'Nghĩa',
        avatar: 'https://i.pravatar.cc/150?u=user2',
        mutualFriends: 12,
        sentBy: 'Nghĩa',
        status: 'pending',
        userId: 'user2',
    },
    {
        _id: '3',
        name: 'Nguyên',
        avatar: 'https://i.pravatar.cc/150?u=user3',
        mutualFriends: 18,
        sentBy: 'Nguyên',
        status: 'pending',
        userId: 'user3',
    },
    {
        _id: '4',
        name: 'Tính',
        avatar: 'https://i.pravatar.cc/150?u=user4',
        mutualFriends: 0,
        sentBy: 'Tính',
        status: 'pending',
        userId: 'user4',
    },
    {
        _id: '5',
        name: 'Phú',
        avatar: 'https://i.pravatar.cc/150?u=user5',
        mutualFriends: 5,
        sentBy: 'Phú',
        status: 'pending',
        userId: 'user5',
    },
    {
        _id: '6',
        name: 'Hương',
        avatar: 'https://i.pravatar.cc/150?u=user6',
        mutualFriends: 8,
        sentBy: 'Hương',
        status: 'pending',
        userId: 'user6',
    },
    {
        _id: '7',
        name: 'Lan',
        avatar: 'https://i.pravatar.cc/150?u=user7',
        mutualFriends: 10,
        sentBy: 'Lan',
        status: 'pending',
        userId: 'user7',
    },
];

const FriendRequests = () => {
    const userInfo = useSelector(userSelector);
    const [requests, setRequests] = useState<FriendRequest[]>([]);

    useEffect(() => {
        getFriendRequests();
    }, []);

    const getFriendRequests = async () => {
        try {
            const res = await friendApi.getFriendRequests();
            const filteredRequests = res.data.filter((request: any) => request.sentBy !== userInfo?.username);
            if (filteredRequests.length === 0) {
                // Use mock data if no requests
                setRequests(mockFriendRequests);
            } else {
                setRequests(filteredRequests);
            }
        } catch (error) {
            console.error('Failed to fetch friend requests, using mock data', error);
            setRequests(mockFriendRequests);
        }
    };

    const handleConfirm = async (id: string) => {
        try {
            const res = await friendApi.acceptFriend(id);
            message.success(res.data.message);
            getFriendRequests();
        } catch (error) {
            console.error('Error confirming friend request:', error);
            message.error('Failed to confirm friend request');
        }
    };

    const handleDelete = (id: string) => {
        setRequests((prev) => prev.filter((request) => request.userId !== id));
        message.info('Friend request deleted');
    };

    return (
        <div className="p-4 bg-white rounded-md shadow-md mt-2 mx-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Lời mời kết bạn</h2>
                <a href="/friend-requests" className="text-blue-500 hover:underline">
                    See all
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {requests.map((request) => (
                    <div key={request._id} className="bg-gray-100 text-gray-900 rounded-md shadow-sm border">
                        <img
                            src={request.avatar || `https://i.pravatar.cc/150?u=${request.userId}`}
                            alt={request.name}
                            className="w-full h-60 object-cover rounded-md mb-2"
                        />
                        <div className="px-3">
                            <h3 className="text-lg font-semibold">{request.name}</h3>
                            <div
                                className="h-6 text-sm text-gray-500 flex items-center"
                                style={{ minHeight: '1.5rem' }}
                            >
                                {request.mutualFriends > 0 ? (
                                    <p>{request.mutualFriends} bạn chung</p>
                                ) : (
                                    <span>&nbsp;</span>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 space-y-2 px-3 mb-2">
                            <Button
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={() => handleConfirm(request.userId)}
                            >
                                Xác nhận
                            </Button>
                            <Button
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900"
                                onClick={() => handleDelete(request.userId)}
                            >
                                Xoá
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendRequests;
