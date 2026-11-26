# AI Chatbot using LangChain + Groq

A clean, responsive general-purpose AI chatbot built with **Next.js**, **React**, **Tailwind CSS**, and **LangChain.js**, powered by **Groq** (Llama 3.3 70B).

## Features

- Answers questions on a wide range of topics
- Uses **LangChain.js** + **ChatGroq** integration
- Clean, modern, fully responsive chat UI (React + Tailwind)
- Conversation history (remembers previous messages in the current session)
- System prompt to define chatbot behaviour
- Markdown rendering for AI responses (code blocks, lists, tables, etc.)
- Loading states & proper error handling
- API key stored securely via environment variables

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI**: React + Tailwind CSS
- **AI**: LangChain.js + Groq (`llama-3.3-70b-versatile`)
- **Markdown**: `react-markdown` + `remark-gfm`

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vinyaspoojary318-cloud/ai-chatbot-langchain.git
cd ai-chatbot-langchain
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and add your Groq API key:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```
GROQ_API_KEY=gsk_your_actual_key_here
```

Get a free API key at: [https://console.groq.com/keys](https://console.groq.com/keys)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-chatbot-langchain/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts      # LangChain + Groq API route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── ChatInterface.tsx     # Main chat UI component
├── .env.example
├── package.json
└── README.md
```

## How it works

1. User sends a message from the chat interface.
2. The full conversation history is sent to `/api/chat`.
3. The API route uses **LangChain's `ChatGroq`** with a system prompt and the message history.
4. The model response is returned and rendered with Markdown support.
5. Conversation history is maintained in React state for the current session.

## Submission Notes

- GitHub repository: this repo
- Screenshots: take screenshots of the chat interface after running the app

## License

MIT
