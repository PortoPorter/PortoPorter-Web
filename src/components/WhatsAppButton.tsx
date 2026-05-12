import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351912345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-terracotta text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center gap-2"
      aria-label="Chat with the Porter"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline font-sans font-bold uppercase tracking-widest text-[10px]">Chat with the Porter</span>
    </a>
  );
}
