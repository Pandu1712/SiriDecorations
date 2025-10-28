
import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  return (
    <a
      href="https://wa.me/919848976339"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-2 rounded-full w-10 h-10 shadow-xl hover:bg-green-600 transition-all"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppChat;
