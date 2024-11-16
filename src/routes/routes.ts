import React from "react";
import Home from "../pages/Home";
import ChatLayout from "../layouts/chat_layout";
import Login from "../pages/Login";
import Register from "../pages/Register";

interface RouteType {
    path: string;
    page: React.ComponentType; // Kiểu dữ liệu cho component trang
}

const privateRoutes: RouteType[] = [
    { path: "/", page: Home },
    { path: "/chat", page: ChatLayout },
];

const publicRoutes: RouteType[] = [
    { path: "/", page: Login },
    { path: "/register", page: Register },
];

const adminRoutes: RouteType[] = [];

export { privateRoutes, publicRoutes, adminRoutes };
