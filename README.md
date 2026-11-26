# AI Chatbot using LangChain + Groq

A clean, responsive general-purpose AI chatbot built with **Next.js**, **React**, **Tailwind CSS**, and **LangChain.js**, powered by **Groq**.

> Written in **JavaScript** (no TypeScript)

## Features

- Answers questions on different topics
- Uses **LangChain.js** + **ChatGroq**
- Clean responsive chat UI with React + Tailwind CSS
- Conversation history (remembers previous messages)
- System prompt for chatbot behaviour
- Markdown formatting for AI responses
- Loading states and error handling
- API key stored in environment variables

## How to Run

```bash
git clone https://github.com/vinyaspoojary318-cloud/ai-chatbot-langchain.git
cd ai-chatbot-langchain
npm install
```

Create `.env.local` file:

```
GROQ_API_KEY=your_groq_api_key_here
```

Then start:

```bash
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.js     ← LangChain + Groq API
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
└── components/
    └── ChatInterface.jsx     ← Chat UI
```

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- LangChain.js
- Groq (Llama 3.3)
