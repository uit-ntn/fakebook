import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/avatar';
import { Button } from '@/components/button';

const friendSuggestions = [
    { name: 'Hắc Phong', mutualFriends: 5, avatar: 'https://via.placeholder.com/100' },
    { name: 'Hoàng Mi', mutualFriends: 3, avatar: 'https://via.placeholder.com/100' },
    { name: 'Nhị Lang', mutualFriends: 10, avatar: 'https://via.placeholder.com/100' },
    { name: 'Nhân', mutualFriends: 2, avatar: 'https://via.placeholder.com/100' },
    { name: 'Nghĩa', mutualFriends: 1, avatar: 'https://via.placeholder.com/100' },
];

export function FriendSuggestions() {
    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Những người bạn có thể biết</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {friendSuggestions.map((friend, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-40 bg-gray-100 p-4 rounded-md shadow"
                    >
                        <Avatar className="h-16 w-16 mx-auto">
                            <AvatarImage src={friend.avatar} />
                            <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-center mt-2">
                            <p className="font-semibold">{friend.name}</p>
                            <p className="text-sm text-gray-500">
                                {friend.mutualFriends} bạn chung
                            </p>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-2">
                            Thêm bạn bè
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
