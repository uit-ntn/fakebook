import React from 'react';

interface Friend {
  id: number;
  name: string;
}

interface RightSidebarProps {
  friends: Friend[];
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ friends }) => {
  return (
    <div className="sticky top-16 bg-white shadow-md rounded-md p-4 max-h-[80vh] overflow-y-auto w-60">
      <h2 className="text-lg font-semibold mb-4">Liên hệ</h2>
      {friends.map((friend, index) => (
        <div key={index} className="flex items-center mb-3">
          <img
            src={`https://i.pravatar.cc/40?u=${friend.id}`}
            alt={friend.name}
            className="w-10 h-10 rounded-full border border-gray-300 mr-3"
          />
          <div className="text-sm">
            <p className="font-medium">{friend.name}</p>
            <span className="text-green-500 text-xs">● Online</span>
          </div>
        </div>
      ))}
    </div>
  );
};