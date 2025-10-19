import { NextRequest, NextResponse } from 'next/server';

// Mock webhook handler - simulates a chatbot response
// In production, this would call your actual AI service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userMessage = body.message || '';

    // Simulate some processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if the message contains product-related keywords
    const productKeywords = ['product', 'show', 'buy', 'shop', 'purchase'];
    const shouldShowProducts = productKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    // Prepare response
    const response: any = {
      text: '',
    };

    if (shouldShowProducts) {
      response.text = "Here are some products you might be interested in:";
      response.products = [
        {
          id: '1',
          name: 'Premium Headphones',
          description: 'High-quality wireless headphones with noise cancellation',
          price: 299.99,
          currency: '$',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
          url: '#',
        },
        {
          id: '2',
          name: 'Smart Watch',
          description: 'Advanced fitness tracking and notifications',
          price: 399.99,
          currency: '$',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
          url: '#',
        },
      ];
    } else if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      response.text = "Hello! I'm the Lucinar Sales AI assistant. How can I help you today? You can ask me to show you products!";
    } else if (userMessage.toLowerCase().includes('help')) {
      response.text = "I can help you find products and answer questions. Try asking me to 'show products' or say 'hello'!";
    } else {
      response.text = `Thank you for your message: "${userMessage}". I'm a demo chatbot. Try asking me to 'show products'!`;
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { text: 'Sorry, I encountered an error processing your request.' },
      { status: 500 }
    );
  }
}
