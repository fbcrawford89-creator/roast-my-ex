import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, reason, tone, focus } = body;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing OPENAI_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const prompt = `
      Write a ${tone} roast for a person named ${name || 'my ex'}.
      The situation: ${reason || 'They were chaotic, dramatic, and not worth my time.'}
      Focus on ${focus || 'overall chaos'}.

      Requirements:
      - Keep it funny, sharp, and original.
      - Make it safe and non-hateful.
      - Avoid direct threats or abusive language.
      - Should feel like a viral breakup post.
      - Return valid JSON with exactly this shape:
      {
        "roast": "...",
        "adCopy": "..."
      }
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.9,
      messages: [
        {
          role: 'system',
          content: 'You are a creative comedy writer who makes funny, edgy, safe, viral breakup content.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = completion.choices[0]?.message?.content || '{}';
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { roast: content, adCopy: 'Roast My Ex' };

    return NextResponse.json({
      roast: parsed.roast || 'You were a lesson, not a highlight.',
      adCopy:
        parsed.adCopy ||
        'Send your ex a roast they will never forget. Create your viral breakup comeback in 10 seconds.',
    });
  } catch (error) {
    console.error('Roast generation failed:', error);
    return NextResponse.json(
      { error: 'Failed to generate a roast. Please try again.' },
      { status: 500 }
    );
  }
}
