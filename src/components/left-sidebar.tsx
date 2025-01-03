import { User, Users, Bookmark, Clock, Video, Store, Rss } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice'; // Đảm bảo đường dẫn chính xác

const LeftSidebar = () => {
    const navigate = useNavigate();
    const user = useSelector(userSelector); // Lấy thông tin người dùng từ Redux store

    const menuItems = [
        { icon: <User className="w-5 h-5 text-blue-500" />, label: user?.username || 'Nguyễn Thanh Nhân', path: '/profile' },
        { icon: <Users className="w-5 h-5 text-blue-500" />, label: 'Bạn bè', path: '/friends' },
        { icon: <Bookmark className="w-5 h-5 text-purple-500" />, label: 'Đã lưu', path: '/saved' },
        { icon: <Clock className="w-5 h-5 text-blue-400" />, label: 'Kỷ niệm', path: '/memories' },
        { icon: <Users className="w-5 h-5 text-blue-400" />, label: 'Nhóm', path: '/groups' },
        { icon: <Video className="w-5 h-5 text-blue-500" />, label: 'Video', path: '/videos' },
        { icon: <Store className="w-5 h-5 text-blue-500" />, label: 'Marketplace', path: '/marketplace' },
        { icon: <Rss className="w-5 h-5 text-blue-500" />, label: 'Phản hồi', path: '/feeds' },
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
