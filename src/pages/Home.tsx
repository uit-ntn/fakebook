import { Header } from '@/components/Header';
import { Post } from '@/components/post';
import { FriendRecommendations } from '@/components/friend-recommendations';
import { StatusUpdateForm } from '@/components/status-update-form';
import { useEffect, useState } from 'react';
import { socketEmit } from '../services/socketService';
import userApi from '../services/authServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import { getToken } from '../utils/localStorage';

const Home = () => {
    const dispatch = useDispatch();

    const getUserInfo = async () => {
        const accessToken = getToken();
        if (accessToken) {
            try {
                console.log("Fetching user info...");
                const res = await userApi.getInfo();
                console.log("User info fetched successfully:", res);
    
                // Lưu thông tin người dùng vào Redux store
                dispatch(setUserInfo(res)); // Truyền trực tiếp res thay vì res.data
                socketEmit('connection', res._id); // Truy cập trực tiếp _id
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        }
    };
    

    useEffect(() => {
        getUserInfo();
    }, []);

    const posts = [
        {
            userName: 'John Doe',
            date: 'October 11',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor #hashtag',
            imageUrl: 'https://picsum.photos/800/600',
            likes: 177,
            comments: [
                { userName: 'Alice Johnson', content: 'Great post!', timestamp: '2h ago' },
                { userName: 'Bob Smith', content: 'I totally agree with you.', timestamp: '1h ago' },
                { userName: 'Carol Williams', content: 'Thanks for sharing this!', timestamp: '30m ago' },
            ],
            shares: 5,
        },
        {
            userName: 'Jane Smith',
            date: 'October 10',
            content: 'Another interesting post with a different image #social',
            imageUrl: 'https://picsum.photos/800/600',
            likes: 230,
            comments: [
                { userName: 'David Brown', content: 'This is really insightful.', timestamp: '5h ago' },
                { userName: 'Eva Davis', content: 'I have a different perspective on this.', timestamp: '3h ago' },
            ],
            shares: 8,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto py-4 px-4">
                <div className="flex justify-center gap-4">
                    <div className="w-screen max-w-3xl">
                        <StatusUpdateForm />
                        {posts.map((post, index) => (
                            <Post key={index} {...post} />
                        ))}
                    </div>
                    <div className="hidden lg:block w-80">
                        <div className="sticky top-16">
                            <FriendRecommendations />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
