import { ChatGroq } from "@langchain/groq";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are a helpful, friendly, and knowledgeable AI assistant built with LangChain and Groq.
You can answer questions on a wide variety of topics including science, technology, history, programming, general knowledge, and more.
Be concise yet informative. Use Markdown formatting for better readability (lists, code blocks, bold, etc.).
If you don't know something, say so honestly. Maintain a professional yet approachable tone.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured. Please add it to your .env.local file." },
        { status: 500 }
      );
    }

    const model = new ChatGroq({
      apiKey,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      maxTokens: 2048,
    });

    const langchainMessages = [
      new SystemMessage(SYSTEM_PROMPT),
      ...messages.map((msg) => {
        if (msg.role === "user") {
          return new HumanMessage(msg.content);
        } else {
          return new AIMessage(msg.content);
        }
      }),
    ];

    const response = await model.invoke(langchainMessages);

    return NextResponse.json({
      role: "assistant",
      content: response.content,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
