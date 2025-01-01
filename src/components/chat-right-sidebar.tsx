import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";

export const ChatRightSidebar = ({ friendSelected, friendList }: any) => {
    const selectedFriend = friendList.find((f: any) => f.friendInfo?._id === friendSelected);
    return (
        <div className="w-64 bg-gray-100 border-l border-black-200 fixed right-0 top-0 h-screen p-4">
            <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
                    <AvatarFallback>{selectedFriend?.friendInfo?.username?.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{selectedFriend?.friendInfo?.username}</h3>
                <p className="text-sm text-gray-500 mb-4">Active now</p>
                <Button variant="outline" className="w-full mb-2">Chat Info</Button>
                <Button variant="outline" className="w-full mb-2">Customize Chat</Button>
                <Button variant="outline" className="w-full">Privacy & Support</Button>
            </div>
        </div>
    );
};
