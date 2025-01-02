import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/avatar';
import { Button } from '@/components/button';

const friends = [
    { name: 'Lê Long', avatar: 'https://via.placeholder.com/100' },
    { name: 'Thanh Tĩnh', avatar: 'https://via.placeholder.com/100' },
    { name: 'Nguyễn Chí Thức', avatar: 'https://via.placeholder.com/100' },
    { name: 'Trần Ngọc Sang', avatar: 'https://via.placeholder.com/100' },
    { name: 'Tuấn Kiệt', avatar: 'https://via.placeholder.com/100' },
    { name: 'Nguyễn Kiệt', avatar: 'https://via.placeholder.com/100' },
    { name: 'Tình Thanh Doan', avatar: 'https://via.placeholder.com/100' },
    { name: 'Hồ Quân', avatar: 'https://via.placeholder.com/100' },
    { name: 'Khánh Mai', avatar: 'https://via.placeholder.com/100' },
];

export function FriendsList() {
    return (
        <div className="bg-white p-4 rounded-md shadow-md sticky top-4">
            {/* Header */}
            <h2 className="text-lg font-semibold mb-4">Bạn bè</h2>
            <p className="text-gray-500 mb-4">27 người bạn</p>

            {/* Friends Grid */}
            <div className="grid grid-cols-3 gap-4">
                {friends.map((friend, index) => (
                    <div key={index} className="text-center">
                        <Avatar className="h-28 w-28 mx-auto">
                            <AvatarImage src={friend.avatar} />
                            <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="mt-2 text-sm font-semibold">{friend.name}</p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <Button className="w-full mt-4">Xem tất cả bạn bè</Button>
        </div>
    );
}
