import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucinar Chatbot",
  description: "Test Chatbot for Lucinar Sales AI System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
