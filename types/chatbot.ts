// Type definitions for chatbot messages and products

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  regular_price: number;
  purchasable: boolean;
  total_sales: number;
  stock_status: string;
  categories: string;
  description: string;
  permalink: string;
  image_url: string;
  created_at: string | null;
}

export interface WebhookResponse {
  message: string;
  products_mentioned: Product[];
  intent: string;
  sentiment: string;
  confidence: string;
  needs_human: boolean;
  next_action: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  products?: Product[];
}

export interface ChatResponse {
  text: string;
  products?: Product[];
}
