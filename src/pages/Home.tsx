import { Header } from '@/components/heading';
import { Post } from '@/components/post';
import { LeftSidebar } from '@/components/left-sidebar';
import { StatusUpdateForm } from '@/components/status-update-form';
import { useEffect, useState } from 'react';
import { socket, socketEmit, socketOff } from '../services/socketService';
import userApi from '../services/authServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, userSelector } from '../redux/userSlice';
import { getToken } from '../utils/localStorage';
import { RightSidebar } from '@/components/right-sidebar';

const FriendSidebar = ({ friends }) => {
    return (
        <div className="sticky top-16 bg-white shadow-md rounded-md p-4 max-h-[80vh] overflow-y-auto">
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

const Home = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(userSelector);
    const [friends, setFriends] = useState<any[]>([]);
    const [posts, setPosts] = useState([
        {
            userName: 'Nguyễn Văn A',
            date: '11 Tháng Mười',
            content: 'Chill chill',
            imageUrl: 'https://picsum.photos/800/600',
            likes: 17,
            comments: [
                { userName: 'Trần Thị B', content: 'Bài viết hay quá!', timestamp: '2 giờ trước' },
                { userName: 'Lê Văn C', content: 'Tôi hoàn toàn đồng ý với bạn.', timestamp: '1 giờ trước' },
                { userName: 'Phạm Thị D', content: 'Cảm ơn bạn đã chia sẻ điều này!', timestamp: '30 phút trước' },
            ],
            shares: 5,
        },
        {
            userName: 'Lê Thị E',
            date: '10 Tháng Mười',
            content: 'Cũng ko chill lắm #xã hội',
            imageUrl: 'https://picsum.photos/800/600',
            likes: 23,
            comments: [
                { userName: 'Ngô Văn F', content: 'Thật sự rất sâu sắc.', timestamp: '5 giờ trước' },
                { userName: 'Đinh Thị G', content: 'Tôi có góc nhìn khác về vấn đề này.', timestamp: '3 giờ trước' },
            ],
            shares: 8,
        },
    ]);
    
    const getUserInfo = async () => {
        const accessToken = getToken();
        if (accessToken) {
            try {
                const res = await userApi.getInfo();
                dispatch(setUserInfo(res));
                socketEmit('connection', res._id);
            } catch (error) {
                console.error('Failed to fetch user info:', error);
            }
        }
    };

    const getFriends = async () => {
        // // Mock danh sách bạn bè
        // const mockFriends = [
        //     { id: 1, name: 'Trần Phúc' },
        //     { id: 2, name: 'Thanh Tính' },
        //     { id: 3, name: 'Huỳnh Phú' },
        //     { id: 4, name: 'Huỳnh Tỷ' },
        //     { id: 5, name: 'Kim Lê' },
        //     { id: 6, name: 'Nguyễn Minh Duy' },
        //     { id: 7, name: 'Tuấn Anh' },
        //     { id: 8, name: 'Kay Nguyễn' },
        //     { id: 9, name: 'Nguyễn Tấn Thành' },
        //     { id: 10, name: 'Kim Chi' },
        //     { id: 11, name: 'Trúc Quỳnh' },
        // ];
        // setFriends(mockFriends);
        userApi.getListUsers().then((res) => {
            // console.log(res);
            setFriends(res);
        });
    };

    useEffect(() => {
        getUserInfo();
        getFriends();
        socketEmit('connection', userInfo?._id);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto py-4 px-4">
                <div className="flex justify-between gap-4">
                    {/* Left Sidebar */}
                    <LeftSidebar />

                    {/* Main Content */}
                    <div className="flex-1 max-w-3xl">
                        <StatusUpdateForm />
                        {posts.map((post, index) => (
                            <Post key={index} {...post} />
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <RightSidebar friends={friends} />
                </div>
            </main>
        </div>
    );
};

export default Home;
