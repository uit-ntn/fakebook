import { useEffect, useState } from 'react';
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
    const [friendList, setFriendList] = useState([]);
    const [listMessage, setListMessage] = useState<any[]>([]);
    const [friendSelected, setFriendSelected] = useState('');
    const userInfo = useSelector(userSelector);

    // console.log(userInfo);
    // console.log(friendSelected);
    console.log(listMessage);

    useEffect(() => {
        getListFriend();
    }, []);

    useEffect(() => {
        getListMessage();
    }, [friendSelected]);

    useEffect(() => {
        socketOn('privateMessage', (data: any) => {
            if (data) {
                console.log(data);
                setListMessage((prevMessages) => [...prevMessages, data]);
            }
        });

        return () => {
            socketOff('privateMessage');
        };
    }, []); // <-- Don't add listMessage as dependency to avoid infinite loop

    const getListFriend = async () => {
        await friendApi.getList().then((res: any) => {
            const friendAccept = res.filter((friend: any) => friend.status === 'ACCEPTED');
            console.log('Friend object structure:', friendAccept[0]); // Add this line to inspect the structure
            setFriendSelected(friendAccept[0].friendInfo?._id); // Set the first friend as the selected friend
            setFriendList(friendAccept);
        });
    };
    console.log(friendList);
    const getListMessage = async () => {
        // Call the API to get the list of messages
        await messageApi.getList(friendSelected).then((res: any) => {
            console.log(res);
            setListMessage(res);
        });
    };

    const handleChat = (e: any) => {
        e.preventDefault();
        // console.log(message);
        socketEmit('private-message', {
            sendId: userInfo?._id,
            receiveId: friendSelected,
            content: message, // Use the message state
        });
        setMessage(''); // Clear the input after sending
    };

    // const conversations = [
    //     { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '2m', unread: 2 },
    //     { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: '1h', unread: 0 },
    //     { id: 3, name: 'Bob Johnson', lastMessage: 'Thanks for your help', time: '2h', unread: 1 },
    // ];

    // const messages = [
    //     { id: 1, sender: 'John Doe', content: 'Hey there!', time: '10:00 AM', isMine: false },
    //     { id: 2, sender: 'You', content: 'Hi John! How are you?', time: '10:02 AM', isMine: true },
    //     {
    //         id: 3,
    //         sender: 'John Doe',
    //         content: "I'm doing great, thanks for asking. How about you?",
    //         time: '10:05 AM',
    //         isMine: false,
    //     },
    //     {
    //         id: 4,
    //         sender: 'You',
    //         content: "I'm good too. Just working on some projects.",
    //         time: '10:07 AM',
    //         isMine: true,
    //     },
    // ];

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
                    {friendList.map((item: any) => (
                        <div
                            key={item.friendInfo?._id}
                            className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer 
                                ${item.friendInfo?._id === friendSelected ? 'bg-gray-100' : ''}`}
                            onClick={() => setFriendSelected(item.friendInfo?._id)}
                        >
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://i.pravatar.cc/100?u=${item.friendInfo?.id}`} />
                                <AvatarFallback>{item.friendInfo?.username.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-3 flex-1">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-semibold text-gray-800">{item.friendInfo?.username}</h3>
                                    <span className="text-xs text-gray-500">{item.friendInfo?.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate">{item.recentMessage?.content}</p>
                            </div>
                            {item.friendInfo?.unread > 0 && (
                                <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {item.friendInfo?.unread}
                                </span>
                            )}
                        </div>
                    ))}
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://i.pravatar.cc/100?u=1" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                            <p className="text-sm text-gray-500">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                            <Phone className="h-5 w-5 text-blue-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Video className="h-5 w-5 text-blue-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5 text-gray-500" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 bg-gray-50">
                    <div className="space-y-4 px-4 py-3">
                        {listMessage.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${userInfo?._id == msg.receiveId ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[60%] ${
                                        userInfo?._id == msg.receiveId ? 'bg-blue-500 text-white' : 'bg-white'
                                    } rounded-lg py-2 px-3 shadow`}
                                >
                                    <p className="text-sm">{msg.content}</p>
                                    <span
                                        className={`text-xs ${
                                            userInfo?._id == msg.receiveId ? ' text-white' : 'text-gray-400'
                                        } mt-1 block`}
                                    >
                                        {dayjs().format('mm:ss A')}
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
        </div>
    );
}
