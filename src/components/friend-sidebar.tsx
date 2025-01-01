import React from "react";
import { Users, UserPlus, Gift, Settings, List } from 'lucide-react';

const friendMenuItems = [
    { icon: <UserPlus className="w-5 h-5 text-blue-500" />, label: 'Lời mời kết bạn', path: '/friends', hasArrow: true },
    { icon: <Users className="w-5 h-5 text-blue-500" />, label: 'Đề xuất', path: '/friends/suggestions', hasArrow: true },
    { icon: <Users className="w-5 h-5 text-blue-500" />, label: 'Tất cả bạn bè', path: '/friends/all', hasArrow: true },
    { icon: <Gift className="w-5 h-5 text-blue-500" />, label: 'Sinh nhật', path: '/friends/birthdays', hasArrow: true }
];

const FriendLeftSidebar = () => {
    return (
        <div className="sticky top-16 bg-white text-gray-900 p-4 rounded-md shadow-md w-64 h-[calc(100vh-64px)] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Bạn bè</h2>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <Settings className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Menu Items */}
            <ul className="space-y-2">
                {friendMenuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-100 ${
                            index === 0 ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => console.log(`Navigate to ${item.path}`)} // Replace with navigation logic
                    >
                        <div className="flex items-center space-x-4">
                            {item.icon}
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { FriendLeftSidebar };
