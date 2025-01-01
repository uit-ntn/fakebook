import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Input } from "@/components/input";
import { ScrollArea } from "@/components/scroll-area";
import { Search } from "lucide-react";

export const ChatSidebar = ({ friendList, friendSelected, setFriendSelected }: any) => {
  return (
    <div className="w-1/5 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
        <div className="flex relative mt-4">
          <Input type="text" placeholder="Search user" className="bg-gray-100" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-120px)]">
        {friendList.map((friend: any) => (
          <div
            key={friend.friendInfo?._id}
            className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${
              friend.friendInfo?._id === friendSelected ? "bg-gray-100" : ""
            }`}
            onClick={() => setFriendSelected(friend.friendInfo?._id)}
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={`https://i.pravatar.cc/100?u=${friend.friendInfo?._id}`} />
              <AvatarFallback>{friend.friendInfo?.username?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-semibold text-gray-800">{friend.friendInfo?.username}</h3>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
