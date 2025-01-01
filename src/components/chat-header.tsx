import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { Phone, Video, MoreVertical } from "lucide-react";

export const ChatHeader = ({ friendSelected, friendList, setShowSidebar }: any) => {
    const selectedFriend = friendList.find((f: any) => f.friendInfo?._id === friendSelected);
    return (
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">

            <div className="flex items-center">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
                    <AvatarFallback>{selectedFriend?.friendInfo?.username?.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{selectedFriend?.friendInfo?.username}</h3>
            </div>


            <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5 text-blue-500" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5 text-blue-500" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setShowSidebar((prev: boolean) => !prev)}>
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                </Button>
            </div>
        </div>
    );
};
