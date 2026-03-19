import { GoogleGenAI } from '@google/genai';

let ai: GoogleGenAI | null = null;

function getAiClient() {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
}

export async function generateEventProposal(prompt: string) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined in environment variables');
  }

  const systemInstruction = `
You are an expert AI Event Concierge. Your task is to recommend a venue for a corporate offsite or event based on a user's prompt.
You MUST respond with a strictly valid JSON object.
The JSON structure must exactly match the following:
{
  "venueName": "Name of the venue",
  "location": "City, State or Region",
  "estimatedCost": "A specific dollar amount or tightly constrained range",
  "justification": "A short, professional 2-3 sentence paragraph explaining why this venue perfectly fits the prompt requirements. Keep the paragraph in points"
}`;

  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('Failed to generate content from Gemini API');
    }

    // Try parsing the json output
    const parsedData = JSON.parse(text);
    return parsedData;
  } catch (error) {
    console.error('Error in Gemini API generation:', error);
    throw new Error('Failed to generate proposal');
  }
}
