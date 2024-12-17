import React from "react";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
interface RouteType {
  path: string;
  page: React.ComponentType; // Kiểu dữ liệu cho component trang
}

const privateRoutes: RouteType[] = [];

const publicRoutes: RouteType[] = [
  { path: "/", page: Home },
  { path: "/auth/login", page: SignIn },
  { path: "/auth/signup", page: SignUp }
];

const adminRoutes: RouteType[] = [];

export { privateRoutes, publicRoutes, adminRoutes };
