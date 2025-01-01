import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User, Search, Phone, Video, MoreVertical, Paperclip, Send } from 'lucide-react';
import friendApi from '../services/friendServices';
import { socketEmit, socketOff, socketOn } from '../services/socketService';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';
import messageApi from '../services/messageServices';
import dayjs from 'dayjs';

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [friendList, setFriendList] = useState<any[]>([]);
    const [listMessage, setListMessage] = useState<any[]>([]);
    const [friendSelected, setFriendSelected] = useState('');
    const [showSidebar, setShowSidebar] = useState(false);
    const userInfo = useSelector(userSelector);

    useEffect(() => {
        getListFriend();
    }, []);

    useEffect(() => {
        if (friendSelected) {
            getListMessage();
        }
    }, [friendSelected]);

    useEffect(() => {
        socketOn('privateMessage', (data: any) => {
            if (data) {
                setListMessage((prevMessages) => [...prevMessages, data]);
            }
        });

        return () => {
            socketOff('privateMessage');
        };
    }, []);

    const getListFriend = async () => {
        try {
            const res = await friendApi.getList();
            if (Array.isArray(res)) {
                const friendAccept = res.filter((friend: any) => friend.status === 'ACCEPTED');
                if (friendAccept.length > 0) {
                    setFriendSelected(friendAccept[0]?.friendInfo?._id || '');
                }
                setFriendList(friendAccept);
            } else {
                console.error('getListFriend: Response is not an array:', res);
                setFriendList([]);
            }
        } catch (error) {
            console.error('Error fetching friend list:', error);
        }
    };

    const getListMessage = async () => {
        try {
            const res = await messageApi.getList(friendSelected);
            if (Array.isArray(res)) {
                setListMessage(res);
            } else {
                console.error('getListMessage: Response is not an array:', res);
                setListMessage([]);
            }
        } catch (error) {
            console.error('Error fetching message list:', error);
        }
    };

    const handleChat = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            socketEmit('private-message', {
                sendId: userInfo?._id,
                receiveId: friendSelected,
                content: message.trim(),
            });
            setMessage('');
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/5 bg-white border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5 text-blue-500" />
                        </Button>
                    </div>
                    <div className="flex relative">
                        <Input type="text" placeholder="Search user" className="bg-gray-100" />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <ScrollArea className="h-[calc(100vh-120px)]">
                    {friendList.map((item) => (
                        <div
                            key={item.friendInfo?._id}
                            className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer 
                ${item.friendInfo?._id === friendSelected ? 'bg-gray-100' : ''}`}
                            onClick={() => setFriendSelected(item.friendInfo?._id)}
                        >
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://i.pravatar.cc/100?u=${item.friendInfo?._id}`} />
                                <AvatarFallback>{item.friendInfo?.username?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-3 flex-1">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-semibold text-gray-800">{item.friendInfo?.username}</h3>
                                    <span className="text-xs text-gray-500">{item.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate">{item.recentMessage?.content}</p>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className={`flex-1 flex flex-col ${showSidebar ? 'mr-64' : ''}`}>
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={`https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/116264906_340041997020888_6356968955999431305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l0F7ei2XgSUQ7kNvgEJ6RII&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AhRmFTnWzj4OxH8aERAvFmR&oh=00_AYB9NLdKGWPjjd_maQy3fIr6G1i7yLbUeQ38eRDk-pip9w&oe=679C790F`} />
                            <AvatarFallback>{friendList.find((f) => f.friendInfo?._id === friendSelected)?.friendInfo?.username?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold text-gray-800">
                                <p className="text-sm text-gray-500">
                                    {userInfo?.username}
                                </p>
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                            <Phone className="h-5 w-5 text-blue-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Video className="h-5 w-5 text-blue-500" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setShowSidebar(!showSidebar)}>
                            <MoreVertical className="h-5 w-5 text-gray-500" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 bg-gray-50">
                    <div className="space-y-4 px-4 py-3">
                        {listMessage.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${userInfo?._id === msg.sendId ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[60%] ${userInfo?._id === msg.sendId ? 'bg-blue-500 text-white' : 'bg-white'
                                        } rounded-lg py-2 px-3 shadow`}
                                >
                                    <p className="text-sm">{msg.content}</p>
                                    <span className="text-xs mt-1 block text-gray-400">
                                        {dayjs(msg.createdAt).format('hh:mm A')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="bg-white border-t border-gray-200 p-4">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                            <Paperclip className="h-5 w-5 text-gray-500" />
                        </Button>
                        <Input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button size="icon" onClick={handleChat}>
                            <Send className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            {showSidebar && (
                <div className="w-64 bg-gray-100 border-l border-gray-200 fixed right-0 top-0 h-screen p-4">
                    <div className="flex flex-col items-center">
                        <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
                            <AvatarFallback>{friendList.find((f) => f.friendInfo?._id === friendSelected)?.friendInfo?.username?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            <p className="text-sm text-gray-500">
                                {userInfo?.username}
                            </p>
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Active now</p>
                        <Button variant="outline" className="w-full mb-2">Chat Info</Button>
                        <Button variant="outline" className="w-full mb-2">Customize Chat</Button>
                        <Button variant="outline" className="w-full">Privacy & Support</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
