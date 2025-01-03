import React, { useState } from "react";
import { Button } from "@/components/button";
import { Modal } from "antd";

interface Friend {
    _id: string;
    name: string;
    avatar: string;
    mutualFriends: number;      
    userId: string;
}

const mockFriends: Friend[] = [
    {
        _id: "1",
        name: "Minh",
        avatar: "https://i.pravatar.cc/150?u=user1",
        mutualFriends: 24,
        userId: "user1",
    },
    {
        _id: "2",
        name: "Nghĩa",
        avatar: "https://i.pravatar.cc/150?u=user2",
        mutualFriends: 12,
        userId: "user2",
    },
    {
        _id: "3",
        name: "Nguyên",
        avatar: "https://i.pravatar.cc/150?u=user3",
        mutualFriends: 18,
        userId: "user3",
    },
    {
        _id: "4",
        name: "Tính",
        avatar: "https://i.pravatar.cc/150?u=user4",
        mutualFriends: 0,
        userId: "user4",
    },
    {
        _id: "5",
        name: "Phú",
        avatar: "https://i.pravatar.cc/150?u=user5",
        mutualFriends: 5,
        userId: "user5",
    },
    {
        _id: "6",
        name: "Hương",
        avatar: "https://i.pravatar.cc/150?u=user6",
        mutualFriends: 8,
        userId: "user6",
    },
    {
        _id: "7",
        name: "Lan",
        avatar: "https://i.pravatar.cc/150?u=user7",
        mutualFriends: 10,
        userId: "user7",
    },
];

const AllFriends = () => {
    const [friends, setFriends] = useState<Friend[]>(mockFriends);
    const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewInfo = (friend: Friend) => {
        alert(`Xem thông tin của ${friend.name}`);
    };

    const handleDeleteFriend = (friend: Friend) => {
        setSelectedFriend(friend);
        setIsModalOpen(true);
    };

    const confirmDeleteFriend = () => {
        if (selectedFriend) {
            setFriends((prev) => prev.filter((friend) => friend._id !== selectedFriend._id));
            setIsModalOpen(false);
            alert(`Đã xóa bạn bè ${selectedFriend.name}`);
        }
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 bg-white rounded-md shadow-md mt-2 mx-3">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Danh sách bạn bè</h2>
                <a href="/all-friends" className="text-blue-500 hover:underline">
                    See all
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {friends.map((friend) => (
                    <div key={friend._id} className="bg-gray-100 text-gray-900 rounded-md shadow-sm border">
                        <img
                            src={friend.avatar || `https://i.pravatar.cc/150?u=${friend.userId}`}
                            alt={friend.name}
                            className="w-full h-60 object-cover rounded-md mb-2"
                        />
                        <div className="px-3">
                            <h3 className="text-lg font-semibold">{friend.name}</h3>
                            <div
                                className="h-6 text-sm text-gray-500 flex items-center"
                                style={{ minHeight: "1.5rem" }}
                            >
                                {friend.mutualFriends > 0 ? (
                                    <p>{friend.mutualFriends} bạn chung</p>
                                ) : (
                                    <span>&nbsp;</span>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 space-y-2 px-3 mb-2">
                            <Button
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={() => handleViewInfo(friend)}
                            >
                                Xem thông tin
                            </Button>
                            <Button
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900"
                                onClick={() => handleDeleteFriend(friend)}
                            >
                                Xoá bạn bè
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Xác nhận */}
            <Modal
                title="Xóa bạn bè"
                open={isModalOpen}
                onOk={confirmDeleteFriend}
                onCancel={cancelDelete}
                okText="Xác nhận"
                cancelText="Hủy"
            >
                <p>Bạn có chắc chắn muốn xóa {selectedFriend?.name} khỏi danh sách bạn bè không?</p>
            </Modal>
        </div>
    );
};

export default AllFriends;
