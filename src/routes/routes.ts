import React from 'react';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Friends from '@/pages/Friend';
import Profile from '@/pages/Profile';
import ForgotPassword from '@/pages/ForgotPassword';

interface RouteType {
    path: string;
    page: React.ComponentType; // Kiểu dữ liệu cho component trang
}

const privateRoutes: RouteType[] = [
    { path: '/', page: Home },
    { path: '/chat', page: Chat },
    { path: '/friends', page: Friends },
    { path: '/profile', page: Profile },
];

const publicRoutes: RouteType[] = [
    { path: '/login', page: Login },
    { path: '/signup', page: Signup },
    { path: '/forgot-password', page: ForgotPassword }
];

export { privateRoutes, publicRoutes };
