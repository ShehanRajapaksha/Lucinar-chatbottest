import Chatbot from '@/components/Chatbot';

export default function Home() {
  // Use the local API route as the webhook URL
  // In production, you would replace this with your actual webhook URL
  const webhookUrl = '/api/webhook';

  return (
    <main>
      <Chatbot webhookUrl={webhookUrl} />
    </main>
  );
}
