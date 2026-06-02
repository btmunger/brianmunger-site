import OpenAI from 'openai';

type RequestBody = {
  gauge?: unknown;
  river?: string;
  weather?: unknown;
};

type VercelRequest = {
  body?: RequestBody;
  method?: string;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OPENAI_API_KEY is not configured' });
  }

  const { gauge, river, weather } = req.body ?? {};

  if (!river) {
    return res.status(400).json({ error: 'River is required' });
  }

  try {
    const response = await client.responses.create({
      model: 'gpt-5.2',
      input: [
        {
          role: 'system',
          content:
            'You are a practical Oregon fly fishing assistant. Suggest flies from observed weather and river gauge data. Be concise and avoid safety guarantees.',
        },
        {
          role: 'user',
          content: `River: ${river}
Weather: ${JSON.stringify(weather)}
Gauge: ${JSON.stringify(gauge)}

Suggest 3 to 5 flies. For each fly, include a short reason. End with one short note about presentation depth or retrieve speed.`,
        },
      ],
    });

    return res.status(200).json({ suggestions: response.output_text });
  } catch {
    return res.status(500).json({ error: 'Fly suggestions unavailable' });
  }
}
