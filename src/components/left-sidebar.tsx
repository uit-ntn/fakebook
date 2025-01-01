import { User, Users, Bookmark, Clock, Video, Store, Rss } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: <User className="w-5 h-5 text-blue-500" />, label: 'Nguyễn Thanh Nhân', path: '/profile' },
        { icon: <Users className="w-5 h-5 text-blue-500" />, label: 'Friends', path: '/friends' },
        { icon: <Bookmark className="w-5 h-5 text-purple-500" />, label: 'Saved', path: '/saved' },
        { icon: <Clock className="w-5 h-5 text-blue-400" />, label: 'Memories', path: '/memories' },
        { icon: <Users className="w-5 h-5 text-blue-400" />, label: 'Groups', path: '/groups' },
        { icon: <Video className="w-5 h-5 text-blue-500" />, label: 'Video', path: '/videos' },
        { icon: <Store className="w-5 h-5 text-blue-500" />, label: 'Marketplace', path: '/marketplace' },
        { icon: <Rss className="w-5 h-5 text-blue-500" />, label: 'Feeds', path: '/feeds' },
    ];

    return (
        <div className="sticky top-16 bg-gray-100 text-gray-800 p-4 rounded-md shadow-md w-60 h-[calc(100vh-64px)] overflow-y-auto">
            <ul className="space-y-4">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center space-x-4 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                        onClick={() => navigate(item.path)}
                    >
                        <div>{item.icon}</div>
                        <span className="text-sm font-medium">{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { LeftSidebar };
