import "./globals.css";

export const metadata = {
  title: "AI Chatbot | LangChain + Groq",
  description:
    "A general-purpose AI chatbot built with Next.js, React, Tailwind CSS, and LangChain.js using Groq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
