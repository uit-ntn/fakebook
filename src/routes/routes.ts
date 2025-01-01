import React from "react";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

interface RouteType {
    path: string;
    page: React.ComponentType; // Kiểu dữ liệu cho component trang
}

const privateRoutes: RouteType[] = [
    { path: "/", page: Home },
    { path: "/chat", page: Chat },
];

const publicRoutes: RouteType[] = [
    { path: "/auth/login", page: Login },
    { path: "/auth/register", page: Signup },
];


export { privateRoutes, publicRoutes };
