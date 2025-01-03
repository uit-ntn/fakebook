import React, { useState } from "react";
import { Header } from "@/components/heading";
import { FriendSuggestions } from "@/components/friend-suggestions";
import { AboutSection } from "@/components/about-section";
import { FriendsList } from "@/components/friends-list";
import { StatusUpdateForm } from "@/components/status-update-form";
import { Post } from "@/components/post";
import { CoverAndAvatar } from "@/components/cover-and-avatar";

export default function Profile() {
    const [posts, setPosts] = useState([
        {
            userName: "Nhan1234567",
            date: "27 tháng 11, 2024",
            content: "Đã cập nhật ảnh đại diện của anh ấy.",
            imageUrl: "https://via.placeholder.com/800x600",
            likes: 150,
            comments: [{ userName: "Alice", content: "Looks great!", timestamp: "2h ago" }],
            shares: 5,
        },
        {
            userName: "Nhan1234567",
            date: "25 tháng 11, 2024",
            content: "Một ngày tuyệt vời để đi phượt!",
            imageUrl: "https://via.placeholder.com/800x600",
            likes: 200,
            comments: [{ userName: "Bob", content: "Quá đẹp luôn!", timestamp: "1 day ago" }],
            shares: 10,
        },
    ]);

    const handleAddPost = (newPost: any) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            <Header />

            {/* Cover and Avatar */}
            <CoverAndAvatar
                coverImage="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/378491468_1044676353224112_8663560805479422201_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BbvEM7i4HY8Q7kNvgHBs_81&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AtwjkVKkQ5B5Ha_ZpugjccV&oh=00_AYDMON9QubjBmdq0YdamWpdanZKunbdtfGWVI0TrD4p9XA&oe=677E201B"
                avatarImage="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/116264906_340041997020888_6356968955999431305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BNpeF58lw3kQ7kNvgFhrYgN&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AIVA4uFmwqlCs0KYJPngUgn&oh=00_AYBtaA0wuBVEv9-kTS4EEg9B-KzFLLsDum-EBx_yW_091Q&oe=679FC4CF"
                userName="Nhan1234567"
                friendsCount={19}
            />

            {/* Tabs */}
            <div className="border-b bg-white mt-20">
                <div className="flex justify-center space-x-8 px-16">
                    {["Posts", "About", "Friends", "Photos", "Videos", "Sports"].map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 font-semibold ${tab === "Posts" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-8 px-64 grid grid-cols-5 gap-8">
                {/* Left Sidebar */}
                <div className="space-y-8 col-span-2">
                    <AboutSection />
                    <FriendsList />
                </div>

                {/* Right Content */}
                <div className="space-y-4 col-span-3">
                    {/* Status Update Form */}
                    <StatusUpdateForm onAddPost={handleAddPost} />

                    {/* Posts */}
                    {posts.map((post, index) => (
                        <Post key={index} {...post} />
                    ))}
                </div>
            </div>

        </div>
    );
}
