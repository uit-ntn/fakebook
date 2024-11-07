import React from "react";
import Home from "../pages/Home";
import ChatLayout from "../layouts/chat_layout";

interface RouteType {
  path: string;
  page: React.ComponentType; // Kiểu dữ liệu cho component trang
}

const privateRoutes: RouteType[] = [];

const publicRoutes: RouteType[] = [
  { path: "/", page: Home },
  {path : "/chat", page : ChatLayout}
];

const adminRoutes: RouteType[] = [];

export { privateRoutes, publicRoutes, adminRoutes };
