'use client';

import { Message } from '@/types/chatbot';
import ProductCard from './ProductCard';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex flex-col mb-4 ${isUser ? 'items-end' : 'items-start'}`}>
      <div className={isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}>
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
      
      {message.products && message.products.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3 max-w-2xl">
          {message.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      <span className="text-xs text-gray-500 mt-1">
        {new Date(message.timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
}
