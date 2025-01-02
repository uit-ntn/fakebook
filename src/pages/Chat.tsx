import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ScrollArea } from "@/components/scroll-area";
import { Phone, Video, MoreVertical, Paperclip, Send, Search } from "lucide-react";

const friendListMock = [
  {
    friendInfo: {
      _id: "1",
      username: "Alice",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "10:30 AM",
    },
  },
  {
    friendInfo: {
      _id: "2",
      username: "Bob",
      lastMessage: "Let's catch up later!",
      lastMessageTime: "Yesterday",
    },
  },
  {
    friendInfo: {
      _id: "3",
      username: "Charlie",
      lastMessage: "See you at the meeting.",
      lastMessageTime: "2 days ago",
    },
  },
];

const ChatPage = () => {
  const [friendList, setFriendList] = useState(friendListMock);
  const [listMessage, setListMessage] = useState([
    { id: 1, sendId: "1", content: "Hello, Alice!", createdAt: new Date() },
    { id: 2, sendId: "2", content: "Hi, Bob!", createdAt: new Date() },
  ]);
  const [friendSelected, setFriendSelected] = useState<string>("1");
  const [message, setMessage] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setListMessage((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sendId: "user",
          content: message.trim(),
          createdAt: new Date(),
        },
      ]);
      setMessage("");
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
          {friendList.map((friend) => (
            <div
              key={friend.friendInfo._id}
              className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${
                friend.friendInfo._id === friendSelected ? "bg-gray-100" : ""
              }`}
              onClick={() => setFriendSelected(friend.friendInfo._id)}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://i.pravatar.cc/100?u=${friend.friendInfo._id}`} />
                <AvatarFallback>{friend.friendInfo.username.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-semibold text-gray-800">{friend.friendInfo.username}</h3>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span className="truncate">{friend.friendInfo.lastMessage}</span>
                  <span className="ml-2 text-xs text-gray-400 whitespace-nowrap">
                    {friend.friendInfo.lastMessageTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className={`flex-1 flex flex-col ${showSidebar ? "mr-64" : ""}`}>
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
              <AvatarFallback>
                {friendList.find((f) => f.friendInfo._id === friendSelected)?.friendInfo.username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="ml-3 text-lg font-semibold text-gray-800">
              {friendList.find((f) => f.friendInfo._id === friendSelected)?.friendInfo.username}
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
            {listMessage.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sendId === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[60%] ${
                    msg.sendId === "user" ? "bg-blue-500 text-white" : "bg-white"
                  } rounded-lg py-2 px-3 shadow`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs mt-1 block text-gray-400">{new Date(msg.createdAt).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Chat Input */}
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
        <div className="w-64 bg-gray-100 border-l border-black-200 fixed right-0 top-0 h-screen p-4">
          <div className="flex flex-col items-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
              <AvatarFallback>
                {friendList.find((f) => f.friendInfo._id === friendSelected)?.friendInfo.username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {friendList.find((f) => f.friendInfo._id === friendSelected)?.friendInfo.username}
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
};

export default ChatPage;
