import React from "react";
import { Header } from "@/components/header";
import { FriendLeftSidebar } from "@/components/friend-sidebar";
import FriendRequests from "@/components/friend-requests";

const Friends = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <Header />
            <div className="container mx-auto flex">
                {/* Left Sidebar */}
                <div className="w-64">
                    <FriendLeftSidebar />
                </div>
                {/* Main Content */}
                <div className="flex-1">
                    <FriendRequests />
                </div>
            </div>
        </div>
    );
};

export default Friends;

