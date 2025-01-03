import React, { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ScrollArea } from "@/components/scroll-area";
import { Paperclip, Send, Search } from "lucide-react";
import dayjs from "dayjs";

const ChatPage = () => {
  // Mock dữ liệu người dùng và danh sách bạn bè
  const userInfo = { _id: "1", username: "User" }; // Người dùng hiện tại
  const [friendList, setFriendList] = useState([
    { friendId: { _id: "2", username: "Alice" }, lastMessage: "Chào bạn!", timeLastSent: new Date() },
    { friendId: { _id: "3", username: "Bob" }, lastMessage: "Tối nay đi đâu không?", timeLastSent: new Date() },
    { friendId: { _id: "4", username: "Charlie" }, lastMessage: "Hẹn gặp ngày mai nhé!", timeLastSent: new Date() },
  ]);

  // Mock dữ liệu tin nhắn
  const [listMessage, setListMessage] = useState<
  { _id: string; sendId: string; receiveId: string; content: string; images: string[]; createdAt: Date }[]
>([
  { _id: "1", sendId: "1", receiveId: "2", content: "Hello Alice!", images: [], createdAt: new Date() },
  { _id: "2", sendId: "2", receiveId: "1", content: "Chào bạn!", images: [], createdAt: new Date() },
]);


  const [friendSelected, setFriendSelected] = useState("2"); // ID bạn bè được chọn
  const [message, setMessage] = useState(""); // Nội dung tin nhắn
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Lọc tin nhắn giữa người dùng và bạn bè được chọn
  const filteredMessages = listMessage.filter(
    (msg) =>
      (msg.sendId === userInfo._id && msg.receiveId === friendSelected) ||
      (msg.receiveId === userInfo._id && msg.sendId === friendSelected)
  );

  // Xử lý gửi tin nhắn
  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || imagePreviews.length > 0) {
      const newMessage = {
        _id: new Date().toISOString(),
        sendId: userInfo._id,
        receiveId: friendSelected,
        content: message.trim(),
        images: imagePreviews, // Thêm ảnh đã chọn
        createdAt: new Date(),
      };
      setListMessage((prev) => [...prev, newMessage]);
      setMessage("");
      setImagePreviews([]);
      setSelectedFiles([]);
    }
  };

  // Xử lý chọn file
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles((prev) => [...prev, ...fileArray]);

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

  // Giao diện chính
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Danh sách bạn bè</h2>
          <div className="relative mt-4">
            <Input type="text" placeholder="Tìm kiếm..." />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          {friendList.map((friend) => (
            <div
              key={friend.friendId._id}
              className={`p-3 flex items-center hover:bg-gray-100 cursor-pointer ${
                friend.friendId._id === friendSelected ? "bg-gray-200" : ""
              }`}
              onClick={() => setFriendSelected(friend.friendId._id)}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://i.pravatar.cc/100?u=${friend.friendId._id}`} />
                <AvatarFallback>{friend.friendId.username.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h3 className="text-sm font-semibold">{friend.friendId.username}</h3>
                <p className="text-xs text-gray-500 truncate">{friend.lastMessage}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b p-4 flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`https://i.pravatar.cc/100?u=${friendSelected}`} />
          </Avatar>
          <h3 className="ml-3 text-lg font-semibold">
            {friendList.find((f) => f.friendId._id === friendSelected)?.friendId.username}
          </h3>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          {filteredMessages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.sendId === userInfo._id ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`p-2 rounded-lg max-w-[60%] ${
                  msg.sendId === userInfo._id ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {msg.content}
                {msg.images && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {msg.images.map((image, index) => (
                      <img key={index} src={image} alt="Image" className="rounded-lg max-h-40" />
                    ))}
                  </div>
                )}
                <p className="text-xs mt-1 text-right">
                  {dayjs(msg.createdAt).format("HH:mm")}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          {imagePreviews.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative inline-block">
                  <img src={preview} alt="Preview" className="max-h-32 rounded-lg" />
                </div>
              ))}
            </div>
          )}
          <form className="flex items-center space-x-2" onSubmit={handleChat}>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelect}
              accept="image/*"
              multiple
            />
            <Button variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()}>
              <Paperclip />
            </Button>
            <Input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
