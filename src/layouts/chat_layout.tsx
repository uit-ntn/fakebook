import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, Search, Phone, Video, MoreVertical, Paperclip, Send } from "lucide-react";
import friendApi from "../services/friendServices";
import { socketEmit, socketOff, socketOn } from "../services/socketService";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/userSlice";
import messageApi from "../services/messageServices";
import dayjs from "dayjs";

export default function ChatPage() {
    const [message, setMessage] = useState("");
    const [friendList, setFriendList] = useState<any[]>([]);
    const [listMessage, setListMessage] = useState<any[]>([]);
    const [friendSelected, setFriendSelected] = useState<string | null>(null);
    const userInfo = useSelector(userSelector);

    useEffect(() => {
        fetchFriendList();
    }, []);

    useEffect(() => {
        if (friendSelected) {
            fetchMessages();
        }
    }, [friendSelected]);

    useEffect(() => {
        socketOn("privateMessage", (data: any) => {
            if (data) {
                setListMessage((prevMessages) => [...prevMessages, data]);
            }
        });

        return () => {
            socketOff("privateMessage");
        };
    }, []);

    const fetchFriendList = async () => {
        try {
            const res = await friendApi.getList();
            if (Array.isArray(res)) {
                const acceptedFriends = res.filter((friend: any) => friend.status === "ACCEPTED");
                setFriendList(acceptedFriends);
                if (acceptedFriends.length > 0) {
                    setFriendSelected(acceptedFriends[0].friendInfo?._id || null);
                }
            }
        } catch (error) {
            console.error("Failed to fetch friend list:", error);
        }
    };

    const fetchMessages = async () => {
        try {
            if (!friendSelected) return;
            const res = await messageApi.getList(friendSelected);
            if (Array.isArray(res)) {
                setListMessage(res);
            } else {
                setListMessage([]);
            }
        } catch (error) {
            console.error("Failed to fetch messages:", error);
        }
    };

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (message.trim() && friendSelected) {
            socketEmit("private-message", {
                sendId: userInfo?._id,
                receiveId: friendSelected,
                content: message.trim(),
            });
            setMessage("");
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
                    {friendList.map((friend: any) => (
                        <div
                            key={friend.friendInfo?._id}
                            className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${friend.friendInfo?._id === friendSelected ? "bg-gray-100" : ""
                                }`}
                            onClick={() => setFriendSelected(friend.friendInfo?._id)}
                        >
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://i.pravatar.cc/100?u=${friend.friendInfo?._id}`} />
                                <AvatarFallback>
                                    {friend.friendInfo?.username?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="ml-3 flex-1">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        {friend.friendInfo?.username}
                                    </h3>
                                    <span className="text-xs text-gray-500">{friend.friendInfo?.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate">
                                    {friend.recentMessage?.content}
                                </p>
                            </div>
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
                            <AvatarImage src={`https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/116264906_340041997020888_6356968955999431305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l0F7ei2XgSUQ7kNvgE7nL9r&_nc_oc=AdhWVUAryqNigH2gkhk9T-FpPACAjT_LeLoWq8QUX6lfVuRa-AZFWigfAu3T4lV7gy0&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=A14eDjStwNxG4ijzNxTaR3C&oh=00_AYBlw3L35bndiBbdQJsTQuHrHWcGjLNesmgVgYF3pQqDaQ&oe=679C790F`} />
                            <AvatarFallback>
                                {friendList.find((f) => f.friendInfo?._id === friendSelected)?.friendInfo?.username?.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {friendList.find((f) => f.friendInfo?._id === friendSelected)?.friendInfo?.username}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {userInfo?.username}
                            </p>
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
                        {listMessage.map((msg: any) => (
                            <div
                                key={msg._id}
                                className={`flex ${userInfo?._id === msg.sendId ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[60%] ${userInfo?._id === msg.sendId
                                        ? "bg-blue-500 text-white"
                                        : "bg-white"
                                        } rounded-lg py-2 px-3 shadow`}
                                >
                                    <p className="text-sm">{msg.content}</p>
                                    <span
                                        className={`text-xs ${userInfo?._id === msg.sendId ? "text-white" : "text-gray-400"
                                            } mt-1 block`}
                                    >
                                        {dayjs(msg.createdAt).format("hh:mm A")}
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
                        <Button size="icon" onClick={handleSendMessage}>
                            <Send className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
