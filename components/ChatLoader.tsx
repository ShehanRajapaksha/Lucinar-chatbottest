'use client';

export default function ChatLoader() {
  return (
    <div className="flex items-start mb-4">
      <div className="chat-bubble-bot flex space-x-2">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}
