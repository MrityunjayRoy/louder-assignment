import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Proposal from '@/models/Proposal';
import { generateEventProposal } from '@/lib/gemini';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Valid prompt is required' }, { status: 400 });
    }

    await connectToDatabase();

    // Generates a JSON venue proposal from Gemini using the prompt
    const aiResponse = await generateEventProposal(prompt);

    // Save mapping directly based on structured fields
    const newProposal = new Proposal({
      prompt,
      venueName: aiResponse.venueName,
      location: aiResponse.location,
      estimatedCost: aiResponse.estimatedCost,
      justification: aiResponse.justification,
    });

    const savedProposal = await newProposal.save();

    return NextResponse.json(savedProposal, { status: 201 });
  } catch (error: any) {
    console.error('POST /api/proposals error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch previously saved event proposals from MongoDB, sorted by newest
    const proposals = await Proposal.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json(proposals, { status: 200 });
  } catch (error: any) {
    console.error('GET /api/proposals error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
