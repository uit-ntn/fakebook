import React, { useState } from 'react';
import { Header } from '@/components/heading';
import { FriendSuggestions } from '@/components/friend-suggestions';
import { AboutSection } from '@/components/about-section';
import { FriendsList } from '@/components/friends-list';
import { StatusUpdateForm } from '@/components/status-update-form';
import { Post } from '@/components/post';

export default function Profile() {
    const [posts] = useState([
        {
            userName: 'Thiên Mệnh Nhân',
            date: '27 tháng 11, 2024',
            content: 'Đã cập nhật ảnh đại diện của anh ấy.',
            imageUrl: 'https://via.placeholder.com/800x600',
            likes: 150,
            comments: [{ userName: 'Alice', content: 'Looks great!', timestamp: '2h ago' }],
            shares: 5,
        },
        {
            userName: 'Thiên Mệnh Nhân',
            date: '25 tháng 11, 2024',
            content: 'Một ngày tuyệt vời để đi phượt!',
            imageUrl: 'https://via.placeholder.com/800x600',
            likes: 200,
            comments: [{ userName: 'Bob', content: 'Quá đẹp luôn!', timestamp: '1 day ago' }],
            shares: 10,
        },
    ]);

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            <Header />

            {/* Cover and Avatar */}
            <div className="relative bg-gray-300 h-80">
                <img
                    src="https://via.placeholder.com/1200x600"
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-12 left-8">
                    <div className="h-60 w-60 border-4 border-white rounded-full bg-gray-200">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Avatar"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="border-b bg-white mt-16 mx-16">
                <div className="flex space-x-8 px-16">
                    {['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Sports'].map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 font-semibold ${tab === 'Posts'
                                ? 'text-blue-500 border-b-2 border-blue-500'
                                : 'text-gray-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-4 px-16 space-y-8">


                {/* Friend Suggestions */}
                <FriendSuggestions />

                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="flex-shrink-0 w-1/3 space-y-8">
                        <AboutSection />
                        <FriendsList />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 space-y-4">
                        {/* Status Update Form */}
                        <StatusUpdateForm />

                        {/* Posts */}
                        {posts.map((post, index) => (
                            <Post key={index} {...post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
