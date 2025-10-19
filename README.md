# Lucinar Chatbot - Sales AI System

A modern, responsive chatbot application built with Next.js 15, TypeScript, and Tailwind CSS. This chatbot features a clean UI with product cards and webhook integration for AI-powered conversations.

## Features

- ✨ **Modern UI**: Clean, responsive chat interface with bubble-style messages
- 🔄 **Loading Indicators**: Animated chat loader while waiting for responses
- 🛍️ **Product Cards**: Dynamic product display with images, descriptions, and pricing
- 🔗 **Webhook Integration**: Posts messages to configurable webhook endpoints
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Next.js 15**: Built with the latest Next.js App Router
- 🎨 **Tailwind CSS**: Utility-first styling for rapid development
- 📝 **TypeScript**: Full type safety throughout the application

## Project Structure

```
Lucinar-chatbottest/
├── app/                      # Next.js App Router directory
│   ├── api/                  # API routes
│   │   └── webhook/          # Webhook handler endpoint
│   │       └── route.ts
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── Chatbot.tsx          # Main chatbot component
│   ├── ChatLoader.tsx       # Loading indicator
│   ├── ChatMessage.tsx      # Individual message display
│   └── ProductCard.tsx      # Product card component
├── types/                    # TypeScript type definitions
│   └── chatbot.ts           # Chatbot-related types
├── lib/                      # Utility functions (future use)
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShehanRajapaksha/Lucinar-chatbottest.git
cd Lucinar-chatbottest
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Usage

### Basic Chat

1. Type a message in the input field at the bottom
2. Click "Send" or press Enter
3. Watch the animated loader while waiting for the response
4. View the bot's response in a chat bubble

### Viewing Products

Ask the bot to show products:
- "show me some products"
- "I want to buy something"
- "show products"

The bot will display product cards with:
- Product images
- Name and description
- Price
- "View Details" button

### Webhook Configuration

The chatbot posts messages to a webhook URL. By default, it uses the local API route `/api/webhook`. To use an external webhook:

1. Open `app/page.tsx`
2. Update the `webhookUrl` prop:

```typescript
<Chatbot webhookUrl="https://your-webhook-url.com/endpoint" />
```

### Webhook Response Format

The webhook should return JSON in one of these formats:

**Simple text response:**
```json
{
  "text": "Your response message"
}
```

**Response with products:**
```json
{
  "text": "Here are some products:",
  "products": [
    {
      "id": "1",
      "name": "Product Name",
      "description": "Product description",
      "price": 99.99,
      "currency": "$",
      "image": "https://example.com/image.jpg",
      "url": "https://example.com/product"
    }
  ]
}
```

**Alternative format:**
```json
{
  "message": "Response text",
  "products": [...]
}
```

## Customization

### Styling

Modify `app/globals.css` to customize:
- Color schemes
- Chat bubble styles
- Animations

### Product Card Layout

Edit `components/ProductCard.tsx` to change:
- Card dimensions
- Information displayed
- Button styles

### Message Types

Add new message types in `types/chatbot.ts` and update components accordingly.

## API Routes

### POST /api/webhook

Demo webhook endpoint that simulates AI responses.

**Request:**
```json
{
  "message": "User message text"
}
```

**Response:**
```json
{
  "text": "Bot response",
  "products": [...]  // Optional
}
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Checklist

- [x] Next.js app with standard folder structure
- [x] Minimal chatbot UI
- [x] Webhook POST functionality
- [x] Bubble chat loader animation
- [x] Message destructuring from webhook response
- [x] Product data display
- [x] Dynamic product cards
- [x] TypeScript support
- [x] Responsive design
- [x] Tailwind CSS styling

## License

ISC

## Author

Lucinar Sales AI System
