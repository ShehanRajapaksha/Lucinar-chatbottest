import Chatbot from '@/components/Chatbot';

export default function Home() {
  // Use the local API route to bypass CORS issues
  const webhookUrl = '/api/chat';

  return (
    <main>
      <Chatbot webhookUrl={webhookUrl} />
    </main>
  );
}
