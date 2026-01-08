import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import {
  GenerateInput,
  SYSTEM_PROMPT,
  constructUserPrompt,
} from '@/lib/prompts';

export async function POST(req: Request) {
  try {
    // --- SECURITY CHECK HYBRID ---

    // 1. Cek API Key (Buat akses dari Terminal/Luar)
    const incomingKey = req.headers.get('x-secret-key');
    const validKey = process.env.API_SECRET_KEY; // Ambil dari .env server

    // 2. Cek Origin (Buat akses dari Frontend Website sendiri)
    const origin = req.headers.get('origin');
    // List domain yang dibolehkan (Localhost buat dev, Domain asli buat prod)
    const allowedOrigins = ['http://localhost:3000', 'https://ui.nurrul.com'];

    // Logic Validasi:
    // Lolos if: (API Key Benar) OR (Origin-nya dari domain sendiri)
    const isApiKeyValid = validKey && incomingKey === validKey;
    const isOriginValid = origin && allowedOrigins.includes(origin);

    if (!isApiKeyValid && !isOriginValid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Akses ditolak.' },
        { status: 401 }
      );
    }

    // 4. Parse Body & Validate Input
    const body: GenerateInput = await req.json();

    if (!body.productName || !body.category) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      );
    }

    // 5. Call OpenAI
    // (Aman, karena cuma request yang punya kunci yang bisa sampai sini)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: constructUserPrompt(body) },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    // 6. Process Result
    const content = completion.choices[0].message.content;
    if (!content) throw new Error('No content generated');

    const data = JSON.parse(content);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal memproses permintaan' },
      { status: 500 }
    );
  }
}
