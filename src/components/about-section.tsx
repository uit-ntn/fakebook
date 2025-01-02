import React from 'react';
import { Button } from '@/components/button';

export function AboutSection() {
    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Giới thiệu</h2>
            <p>Hỗn loạn</p>
            <Button className="w-full mt-4">Chỉnh sửa tiểu sử</Button>
            <ul className="mt-4 space-y-2">
                <li>
                    <span className="font-semibold">Từng học tại:</span> Đại học ABC
                </li>
                <li>
                    <span className="font-semibold">Sống tại:</span> TP. Hồ Chí Minh
                </li>
                <li>
                    <span className="font-semibold">Đến từ:</span> Đà Lạt
                </li>
            </ul>
            <Button className="w-full mt-4">Thêm nội dung đáng chú ý</Button>
        </div>
    );
}
