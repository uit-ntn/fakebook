import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Paperclip, Send } from "lucide-react";

export const ChatInput = ({ message, setMessage, handleChat }: any) => {
  return (
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
  );
};
