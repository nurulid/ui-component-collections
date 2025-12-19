import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { GenerateInput, SYSTEM_PROMPT, constructUserPrompt } from '@/lib/prompts';

export async function POST(req: Request) {
  try {
    // 1. Parse & Validate
    const body: GenerateInput = await req.json();
    
    if (!body.productName || !body.category) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    // 2. Call OpenAI (Logic-nya bersih, prompt-nya ngambil dari helper)
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: constructUserPrompt(body) },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    // 3. Process Result
    const content = completion.choices[0].message.content;
    if (!content) throw new Error("No content generated");

    const data = JSON.parse(content);

    return NextResponse.json({ success: true, data });

    // Error Handling
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal memproses permintaan' },
      { status: 500 }
    );
  }
}
