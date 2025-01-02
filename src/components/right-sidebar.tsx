import { Button, message } from 'antd';
import React from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/userSlice';
import { filter } from 'lodash';
import friendApi from '@/services/friendServices';

interface Friend {
    _id: string;
    username: string;
    friends: any[];
}

interface RightSidebarProps {
    friends: Friend[];
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ friends }) => {
    const userInfo = useSelector(userSelector);

    const handleAddFriend = async (userId: string) => {
        console.log('Add friend');
        console.log(userId);
        await friendApi
            .addFriend(userId)
            .then((res) => {
                message.success(res.data.message);
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    };

    return (
        <div className="sticky top-16 bg-white shadow-md rounded-md p-4 max-h-[80vh] overflow-y-auto w-60">
            <h2 className="text-lg font-semibold mb-4">Liên hệ</h2>
            {friends.map((friend) => (
                <div key={friend?._id} className="flex items-center mb-3 w-full overflow-hidden">
                    <img
                        src={`https://i.pravatar.cc/40?u=${friend._id}`}
                        alt={friend.username}
                        className="w-10 h-10 rounded-full border border-gray-300 mr-3"
                    />
                    <div className="flex justify-between w-full">
                        <div className="text-sm">
                            <p className="font-medium text-ellipsis overflow-hidden w-24">{friend.username}</p>
                            <span className="text-green-500 text-xs">● Online</span>
                        </div>
                        {!friend.friends.map((f) => f.userId).includes(userInfo?._id) ? (
                            <div>
                                <Button
                                    type="dashed"
                                    shape="circle"
                                    icon={<UserAddOutlined />}
                                    onClick={() => handleAddFriend(friend._id)}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
};
