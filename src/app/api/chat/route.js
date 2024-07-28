import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { userMessage } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const chat = model.startChat({
    history: [
      { role: 'user', parts: [{ text: userMessage }] },
      { role: 'model', parts: [{ text: 'Great to meet you. What would you like to know?' }] },
    ],
    generationConfig: { maxOutputTokens: 100 },
  });

  try {
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({ response: text });
  } catch (error) {
    return NextResponse.json({ error: 'Error occurred' }, { status: 500 });
  }
}
