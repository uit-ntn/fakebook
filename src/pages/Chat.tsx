import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { ScrollArea } from '@/components/scroll-area';
import { Phone, Video, MoreVertical, Paperclip, Send, Search, X } from 'lucide-react';
import conversationApi from '@/services/conversationServices';
import dayjs from 'dayjs';
import messageApi from '@/services/messageServices';
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/userSlice';
import { socket, socketEmit, socketOff, socketOn } from '@/services/socketService';

// const friendListMock = [
//     {
//         friendInfo: {
//             _id: '1',
//             username: 'Alice',
//             lastMessage: 'Hey, how are you?',
//             lastMessageTime: '10:30 AM',
//         },
//     },
//     {
//         friendInfo: {
//             _id: '2',
//             username: 'Bob',
//             lastMessage: "Let's catch up later!",
//             lastMessageTime: 'Yesterday',
//         },
//     },
//     {
//         friendInfo: {
//             _id: '3',
//             username: 'Charlie',
//             lastMessage: 'See you at the meeting.',
//             lastMessageTime: '2 days ago',
//         },
//     },
// ];

const ChatPage = () => {
    const userInfo = useSelector(userSelector);
    const [friendList, setFriendList] = useState([]);
    const [listMessage, setListMessage] = useState<any[]>([]);
    const [friendSelected, setFriendSelected] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    useEffect(() => {
        getConversations();
    }, []);

    useEffect(() => {
        getMessages(friendSelected);
    }, [friendSelected]);

    useEffect(() => {
        socketOn('privateMessage', (data: any) => {
            console.log(data);
            getMessages(friendSelected);
        });
    }, []);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setSelectedFiles((prev) => [...prev, ...fileArray]);

            // Create previews for all selected files
            fileArray.forEach((file) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result as string;
                    setImagePreviews((prev) => [...prev, base64]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeImagePreview = (index: number) => {
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const clearAllPreviews = () => {
        setImagePreviews([]);
        setSelectedFiles([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const getConversations = async () => {
        await conversationApi.getConversations().then((res) => {
            console.log(res.data);
            setFriendList(res.data);
            setFriendSelected(res.data[0].friendId?._id);
        });
    };

    const getMessages = async (sendId: string) => {
        await messageApi.getList(sendId).then((res) => {
            console.log(res.data);
            setListMessage(res.data);
        });
    };

    const handleChat = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(message.trim());
        if (message.trim() || imagePreviews.length > 0) {
            if (imagePreviews.length > 0) {
                socketEmit('private-message', {
                    content: message.trim(),
                    files: imagePreviews,
                    receiveId: friendSelected,
                    sendId: userInfo?._id,
                });
            } else if (message.trim()) {
                socketEmit('private-message', {
                    content: message.trim(),
                    sendId: userInfo?._id,
                    receiveId: friendSelected,
                });
            }
            setMessage('');
            clearAllPreviews();
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/5 bg-white border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
                    <div className="flex relative mt-4">
                        <Input type="text" placeholder="Search user" className="bg-gray-100" />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <ScrollArea className="h-[calc(100vh-120px)]">
                    {friendList.map((friend: any, index) => (
                        <div
                            key={friend.friendId?._id ? friend.friendId?._id : index}
                            className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${
                                friend.friendId?._id === friendSelected ? 'bg-gray-100' : ''
                            }`}
                            onClick={() => setFriendSelected(friend.friendId?._id)}
                        >
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://i.pravatar.cc/100?u=${friend?.friendId?._id}`} />
                                <AvatarFallback>{friend.friendId?.username.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-3 flex-1">
                                <h3 className="text-sm font-semibold text-gray-800">{friend.friendId?.username}</h3>
                                <div className="text-sm text-gray-600 flex justify-between">
                                    <span className="truncate">{friend?.lastMessage}</span>
                                    <span className="ml-2 text-xs text-gray-400 whitespace-nowrap">
                                        {dayjs(friend?.timeLastSent).format('h:mm A')}
                                    </span>
                                </div>
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
                            <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
                            <AvatarFallback>
                                {friendList
                                    .find((f: any) => f.friendId?._id === friendSelected)
                                    ?.friendId.username.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <h3 className="ml-3 text-lg font-semibold text-gray-800">
                            {friendList.find((f: any): any => f.friendId?._id === friendSelected)?.friendId?.username}
                        </h3>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                            <Phone className="h-5 w-5 text-blue-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Video className="h-5 w-5 text-blue-500" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setShowSidebar((prev) => !prev)}>
                            <MoreVertical className="h-5 w-5 text-gray-500" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 bg-gray-50">
                    <div className="space-y-4 px-4 py-3">
                        {listMessage.map((msg: any) => (
                            <div
                                key={msg._id}
                                className={`flex ${
                                    msg?.sendId === userInfo?._id ? 'flex-row-reverse' : 'justify-start'
                                } items-center gap-3`}
                            >
                                <Avatar className="h-11 w-11">
                                    <AvatarImage src={`https://i.pravatar.cc/100?u=`} />
                                </Avatar>
                                <div
                                    className={`max-w-[60%] ${
                                        msg.sendId === userInfo?._id ? 'bg-blue-500 text-white' : 'bg-white'
                                    } rounded-lg p-2 shadow space-y-2`}
                                >
                                    {msg.content && (
                                        <p className="text-sm whitespace-pre-wrap break-words">{msg?.content}</p>
                                    )}
                                    {msg.images && Array.isArray(msg.images) && msg.images.length > 0 && (
                                        <div
                                            className={`grid gap-1 ${
                                                msg.images.length === 1
                                                    ? 'grid-cols-1'
                                                    : msg.images.length === 2
                                                    ? 'grid-cols-2'
                                                    : msg.images.length === 3
                                                    ? 'grid-cols-2'
                                                    : 'grid-cols-2'
                                            }`}
                                        >
                                            {msg.images.map((file: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className={`relative ${
                                                        msg.images.length === 3 && index === 2 ? 'col-span-2' : ''
                                                    }`}
                                                >
                                                    <img
                                                        src={file}
                                                        alt={`Shared image ${index + 1}`}
                                                        className="rounded-lg w-full h-full object-cover"
                                                        style={{
                                                            maxHeight: msg.images.length === 1 ? '300px' : '200px',
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <span
                                        className={`text-xs block ${
                                            msg.sendId === userInfo?._id ? 'text-white/80' : 'text-gray-500'
                                        }`}
                                    >
                                        {dayjs(msg?.createdAt).format('h:mm A')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Chat Input */}
                <div className="bg-white border-t border-gray-200 p-4">
                    {imagePreviews.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                            {imagePreviews.map((preview, index) => (
                                <div key={index} className="relative inline-block">
                                    <img src={preview} alt={`Preview ${index + 1}`} className="max-h-32 rounded-lg" />
                                    <button
                                        onClick={() => removeImagePreview(index)}
                                        className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-1 hover:bg-gray-700"
                                    >
                                        <X className="h-4 w-4 text-white" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center space-x-2">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            accept="image/*"
                            className="hidden"
                            multiple // Add this attribute
                        />
                        <Button variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()}>
                            <Paperclip className="h-5 w-5 text-gray-500" />
                        </Button>
                        <Input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 border-gray-200"
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
                <div className="w-64 bg-gray-100 border-l border-black-200 fixed right-0 top-0 h-screen p-4">
                    <div className="flex flex-col items-center">
                        <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
                            <AvatarFallback>
                                {friendList
                                    .find((f: any) => f.friendId._id === friendSelected)
                                    ?.friendId.username.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {friendList.find((f: any) => f.friendId._id === friendSelected)?.friendId.username}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">Active now</p>
                        <Button variant="outline" className="w-full mb-2">
                            Chat Info
                        </Button>
                        <Button variant="outline" className="w-full mb-2">
                            Customize Chat
                        </Button>
                        <Button variant="outline" className="w-full">
                            Privacy & Support
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPage;
