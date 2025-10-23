import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://shehanlucinar.app.n8n.cloud/webhook/9988b242-f545-4bbc-a3a8-6c2c13d3fd0e';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, userId } = body;

    if (!message) {
      return NextResponse.json(
        {
          message: 'Message is required',
          products_mentioned: [],
          intent: 'error',
          sentiment: 'neutral',
          confidence: 'low',
          needs_human: false,
          next_action: 'retry'
        },
        { status: 400 }
      );
    }

    // Call the external webhook
    console.log('Calling webhook with:', { message, userId });
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        message,
        userId,
      }),
    });

    console.log('Webhook response status:', response.status);
    console.log('Webhook response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      
      // Return a fallback response instead of throwing an error
      return NextResponse.json({
        message: `I'm having trouble connecting to my knowledge base right now. The service returned: ${response.status} ${response.statusText}. Please try again in a moment.`,
        products_mentioned: [],
        intent: 'error',
        sentiment: 'neutral',
        confidence: 'low',
        needs_human: true,
        next_action: 'retry'
      });
    }

    const responseText = await response.text();
    
    // Parse the JSON string from the response
    let webhookData;
    try {
      // The response might be wrapped in JSON string format, so parse it
      const cleanedResponse = responseText.startsWith('```json') 
        ? responseText.replace(/```json\s*|\s*```/g, '')
        : responseText;
      webhookData = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error('Error parsing webhook response:', parseError);
      console.error('Raw response:', responseText);
      // Return the raw response if JSON parsing fails
      return NextResponse.json({
        message: responseText,
        products_mentioned: [],
        intent: 'unknown',
        sentiment: 'neutral',
        confidence: 'low',
        needs_human: false,
        next_action: 'provide_info'
      });
    }

    // Return the parsed webhook response
    return NextResponse.json(webhookData);
  } catch (error) {
    console.error('API route error:', error);
    
    let errorMessage = 'Sorry, I encountered an error processing your request. Please try again.';
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = 'Unable to connect to the AI service. Please check your internet connection and try again.';
    } else if (error instanceof SyntaxError) {
      errorMessage = 'Received an invalid response from the AI service. Please try again.';
    }
    
    // Return an error response that matches the expected structure
    return NextResponse.json(
      {
        message: errorMessage,
        products_mentioned: [],
        intent: 'error',
        sentiment: 'neutral',
        confidence: 'low',
        needs_human: true,
        next_action: 'retry'
      },
      { status: 500 }
    );
  }
}