import { ScrollArea } from "@/components/scroll-area";
import dayjs from "dayjs";

export const ChatMessages = ({ listMessage, userInfo }: any) => {
  return (
    <ScrollArea className="flex-1 bg-gray-50">
      <div className="space-y-4 px-4 py-3">
        {listMessage.map((msg: any, index: number) => (
          <div key={index} className={`flex ${userInfo?._id === msg.sendId ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[60%] ${
                userInfo?._id === msg.sendId ? "bg-blue-500 text-white" : "bg-white"
              } rounded-lg py-2 px-3 shadow`}
            >
              <p className="text-sm">{msg.content}</p>
              <span className="text-xs mt-1 block text-gray-400">{dayjs(msg.createdAt).format("hh:mm A")}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
