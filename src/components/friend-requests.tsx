import React, { useState, useEffect } from "react";
import { Button } from "@/components/button";

interface FriendRequest {
    id: number;
    name: string;
    avatar: string;
    mutualFriends: number;
}

const mockFriendRequests: FriendRequest[] = [
    {
        id: 1,
        name: "Fuck",
        avatar: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-1/52774148_2007906386169723_2706314470086410240_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=XoHy1hoJryMQ7kNvgG6izc2&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=A-ikOiDci620B8AtymhbRla&oh=00_AYBv9FEYfY04Ha3GWFG5Pr_CuyEo-7ZfMXOobx0cjU-vOg&oe=679CCC33",
        mutualFriends: 24,
    },
    {
        id: 2,
        name: "Nghĩa",
        avatar: "https://via.placeholder.com/150",
        mutualFriends: 0,
    },
    {
        id: 3,
        name: "Nguyên",
        avatar: "https://via.placeholder.com/150",
        mutualFriends: 18,
    },
    {
        id: 4,
        name: "Tính",
        avatar: "https://via.placeholder.com/150",
        mutualFriends: 0,
    },
    {
        id: 5,
        name: "Phú",
        avatar: "https://via.placeholder.com/150",
        mutualFriends: 0,
    },
];

const FriendRequests = () => {
    const [requests, setRequests] = useState<FriendRequest[]>([]);

    useEffect(() => {
        setRequests(mockFriendRequests);
    }, []);

    const handleConfirm = (id: number) => {
        setRequests((prev) => prev.filter((request) => request.id !== id));
    };

    const handleDelete = (id: number) => {
        setRequests((prev) => prev.filter((request) => request.id !== id));
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
                    <div
                        key={request.id}
                        className="bg-gray-100 text-gray-900 rounded-md shadow-sm border-1"
                    >
                        <img
                            src={request.avatar}
                            alt={request.name}
                            className="w-80 h-60 object-cover rounded-md mb-2"
                        />
                        <div className="px-3">
                            <h3 className="text-lg font-semibold">{request.name}</h3>
                            <div
                                className="h-6 text-sm text-gray-500 flex items-center"
                                style={{ minHeight: "1.5rem" }}
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
                                onClick={() => handleConfirm(request.id)}
                            >
                                Xác nhận
                            </Button>
                            <Button
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900"
                                onClick={() => handleDelete(request.id)}
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
