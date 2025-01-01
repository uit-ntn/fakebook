import React from 'react';
import { UserCircle, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DropdownMenuProps {
    onLogout: () => void;
}

export function DropdownMenu({ onLogout }: DropdownMenuProps) {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
            <a
                href="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                <UserCircle className="h-5 w-5 mr-2 text-gray-500" />
                Trang cá nhân
            </a>
            <a
                href="/settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                <Settings className="h-5 w-5 mr-2 text-gray-500" />
                Cài đặt
            </a>
            <button
                onClick={onLogout}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                <LogOut className="h-5 w-5 mr-2 text-gray-500" />
                Đăng xuất
            </button>
        </div>
    );
}
