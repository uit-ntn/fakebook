import React, { useState } from 'react';

const notifications = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    title: `Notification ${index + 1}`,
    description: `This is the description for notification ${index + 1}.`,
    time: `${index + 1}m ago`,
    icon: index % 3 === 0 ? '👤' : index % 3 === 1 ? '💬' : '❤️',
    avatar: `https://i.pravatar.cc/40?u=${index + 1}`,
    username: `User ${index + 1}`,
}));

export function NotificationsDropdown() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div
            className={`absolute right-0 w-96 bg-white border rounded-md shadow-lg z-50 ${
                isExpanded ? 'h-[80vh]' : 'h-auto'
            }`}
        >
            {/* Header */}
            <div className="px-4 py-3 border-b">
                <h2 className="text-lg font-semibold">Notifications</h2>
            </div>

            {/* Notifications List */}
            <div className={`overflow-y-auto ${isExpanded ? 'max-h-[calc(80vh-4rem)]' : 'max-h-96'}`}>
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className="flex items-center p-4 space-x-3 border-b hover:bg-gray-100"
                    >
                        {/* Avatar on the left */}
                        <img
                            src={notification.avatar}
                            alt={notification.username}
                            className="w-10 h-10 rounded-full"
                        />

                        {/* Notification Content */}
                        <div className="flex-1">
                            <h3 className="font-semibold">{notification.username}</h3>
                            <p className="text-sm text-gray-500">{notification.description}</p>
                            <span className="text-xs text-gray-400">{notification.time}</span>
                        </div>

                        {/* Icon on the right */}
                        <span className="text-2xl text-gray-500">{notification.icon}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-white sticky bottom-0">
                <button
                    onClick={toggleExpanded}
                    className="text-blue-500 hover:underline w-full text-left"
                >
                    {isExpanded ? 'Collapse notifications' : 'See all notifications'}
                </button>
            </div>
        </div>
    );
}
