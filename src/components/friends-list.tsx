import React from "react";

const friends = [
    { id: 1, name: "Nhân", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Trần Phúc", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Nguyên", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Huỳnh Phú", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5, name: "Tỷ", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, name: "Tính", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 7, name: "Sang", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 8, name: "Nghĩa", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 9, name: "Tuấn", avatar: "https://randomuser.me/api/portraits/men/9.jpg" }
];

export function FriendsList() {
    return (
        <div className="bg-white p-4 rounded-md shadow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Friends</h3>
                <a href="#" className="text-blue-500 hover:underline">
                    See all friends
                </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {friends.map((friend) => (
                    <div key={friend.id} className="flex flex-col items-center">
                        <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <p className="text-sm font-semibold mt-2">{friend.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
