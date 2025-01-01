import React, { useEffect, useState } from "react";
import { ChatSidebar } from "../components/chat-sidebar";
import { ChatHeader } from "../components/chat-header";
import { ChatMessages } from "../components/chat-messages";
import { ChatInput } from "../components/chat-input";
import { ChatRightSidebar } from "../components/chat-right-sidebar";
import friendApi from "../services/friendServices";
import messageApi from "../services/messageServices";
import { socketEmit, socketOn, socketOff } from "../services/socketService";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/userSlice";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [friendList, setFriendList] = useState<any[]>([]);
  const [listMessage, setListMessage] = useState<any[]>([]);
  const [friendSelected, setFriendSelected] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const userInfo = useSelector(userSelector);

  // Fetch friend list
  const getListFriend = async () => {
    try {
      const res = await friendApi.getList();
      if (Array.isArray(res)) {
        const friendAccept = res.filter((friend: any) => friend.status === "ACCEPTED");
        setFriendList(friendAccept);
        if (friendAccept.length > 0) {
          setFriendSelected(friendAccept[0]?.friendInfo?._id || "");
        }
      } else {
        console.error("getListFriend: Response is not an array:", res);
        setFriendList([]);
      }
    } catch (error) {
      console.error("Error fetching friend list:", error);
    }
  };

  // Fetch messages
  const getListMessage = async () => {
    try {
      const res = await messageApi.getList(friendSelected);
      if (Array.isArray(res)) {
        setListMessage(res);
      } else {
        console.error("getListMessage: Response is not an array:", res);
        setListMessage([]);
      }
    } catch (error) {
      console.error("Error fetching message list:", error);
    }
  };

  // Handle send message
  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      socketEmit("private-message", {
        sendId: userInfo?._id,
        receiveId: friendSelected,
        content: message.trim(),
      });
      setMessage("");
    }
  };

  // Fetch friend list on mount
  useEffect(() => {
    getListFriend();
  }, []);

  // Fetch messages when friendSelected changes
  useEffect(() => {
    if (friendSelected) {
      getListMessage();
    }
  }, [friendSelected]);

  // Set up socket listener for real-time messages
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

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <ChatSidebar
        friendList={friendList}
        friendSelected={friendSelected}
        setFriendSelected={setFriendSelected}
      />
      <div className={`flex-1 flex flex-col ${showSidebar ? "mr-64" : ""}`}>
        <ChatHeader
          friendSelected={friendSelected}
          friendList={friendList}
          setShowSidebar={setShowSidebar}
        />
        <ChatMessages listMessage={listMessage} userInfo={userInfo} />
        <ChatInput message={message} setMessage={setMessage} handleChat={handleChat} />
      </div>
      {showSidebar && <ChatRightSidebar friendSelected={friendSelected} friendList={friendList} />}
    </div>
  );
}
