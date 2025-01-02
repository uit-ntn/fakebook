import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Input } from "@/components/input";
import { ScrollArea } from "@/components/scroll-area";
import { Search, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Danh sách bạn bè mẫu
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

export const ChatSidebar = () => {
  const [friendSelected, setFriendSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="w-1/5 bg-white border-r border-gray-200 flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="flex relative">
            <Input type="text" placeholder="Search user" className="bg-gray-100" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Friend List */}
        <ScrollArea className="h-[calc(100vh-220px)]">
          {friendListMock.map((friend) => (
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
    </div>
  );
};
