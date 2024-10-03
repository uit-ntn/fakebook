import React from "react";
import Home from "../pages/Home";

interface RouteType {
  path: string;
  page: React.ComponentType; // Kiểu dữ liệu cho component trang
}

const privateRoutes: RouteType[] = [];

const publicRoutes: RouteType[] = [
  { path: "/", page: Home },
];

const adminRoutes: RouteType[] = [];

export { privateRoutes, publicRoutes, adminRoutes };
