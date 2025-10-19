// Type definitions for chatbot messages and products

export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  currency?: string;
  image?: string;
  url?: string;
  [key: string]: any; // Allow additional properties
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
