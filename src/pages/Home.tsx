import { Header } from '@/components/heading';
import { Post } from '@/components/post';
import { LeftSidebar } from '@/components/left-sidebar';
import { StatusUpdateForm } from '@/components/status-update-form';
import { useEffect, useState } from 'react';
import userApi from '../services/authServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, userSelector } from '../redux/userSlice';
import { RightSidebar } from '@/components/right-sidebar';

export default function Home() {
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
    ]);

    const getUserInfo = async () => {
        try {
            const res = await userApi.getInfo();
            dispatch(setUserInfo(res));
        } catch (error) {
            console.error('Failed to fetch user info:', error);
        }
    };

    const getFriends = async () => {
        try {
            const friendsList = await userApi.getListUsers();
            setFriends(friendsList);
        } catch (error) {
            console.error('Failed to fetch friends:', error);
        }
    };

    const handleAddPost = (newPost: any) => {
        setPosts((prev) => [newPost, ...prev]);
    };

    useEffect(() => {
        getUserInfo();
        getFriends();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto py-4 px-4">
                <div className="flex justify-between gap-4">
                    {/* Left Sidebar */}
                    <div className="w-1/5 hidden lg:block">
                        <LeftSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 max-w-2xl mx-auto">
                        <StatusUpdateForm onAddPost={handleAddPost} />
                        {posts.map((post, index) => (
                            <div className="my-4" key={index}>
                                <Post {...post} />
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-1/5 hidden lg:block">
                        <RightSidebar friends={friends} />
                    </div>
                </div>
            </main>
        </div>
    );
}
