import { NextRequest, NextResponse } from 'next/server';
import { matchReport } from '@/lib/matcher';

const SYSTEM_PROMPT = `
You are a routing model for a market-intelligence demo.
Your job is to map the user's input to one of these mock report categories:
- earbuds
- petbrush
- yogamat

Return strict JSON only with this shape:
{
  "category": "earbuds" | "petbrush" | "yogamat",
  "rewritten_keyword": string,
  "reason": string,
  "confidence": number
}

Rules:
- Pick the closest category even if the user input is long or noisy.
- "rewritten_keyword" should be a clean product phrase suitable for a report title.
- Keep "reason" under 20 words.
- "confidence" should be between 0 and 1.
`;

type MockCategory = 'earbuds' | 'petbrush' | 'yogamat';

interface ModelMatchResult {
  category: MockCategory;
  rewritten_keyword: string;
  reason: string;
  confidence: number;
}

function normalizeCategory(input?: string): MockCategory {
  if (input === 'petbrush') return 'petbrush';
  if (input === 'yogamat') return 'yogamat';
  return 'earbuds';
}

function extractMessageContent(content: unknown): string {
  if (typeof content === 'string') return content;

  if (Array.isArray(content)) {
    const textPart = content.find((part) => part && typeof part === 'object' && 'text' in part);
    if (textPart && typeof textPart.text === 'string') {
      return textPart.text;
    }
  }

  return '';
}

function parseModelResult(rawText: string): ModelMatchResult | null {
  try {
    const parsed = JSON.parse(rawText);

    if (!parsed || typeof parsed !== 'object') return null;

    return {
      category: normalizeCategory(typeof parsed.category === 'string' ? parsed.category : undefined),
      rewritten_keyword:
        typeof parsed.rewritten_keyword === 'string' && parsed.rewritten_keyword.trim()
          ? parsed.rewritten_keyword.trim()
          : 'market product',
      reason: typeof parsed.reason === 'string' ? parsed.reason.trim() : 'Matched by model routing.',
      confidence:
        typeof parsed.confidence === 'number' && Number.isFinite(parsed.confidence)
          ? Math.max(0, Math.min(1, parsed.confidence))
          : 0.72,
    };
  } catch {
    return null;
  }
}

async function classifyWithModel(keyword: string, region: string, platform: string): Promise<ModelMatchResult | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseUrl = process.env.OPENAI_BASE_URL;
  const model = process.env.OPENAI_MODEL;

  if (!apiKey || !baseUrl || !model) {
    return null;
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `User input: ${keyword}\nRegion: ${region}\nPlatform: ${platform}\nChoose the best mock category.`,
        },
      ],
      response_format: { type: 'json_object' },
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Model request failed with status ${response.status}`);
  }

  const data = await response.json();
  const content = extractMessageContent(data?.choices?.[0]?.message?.content);
  return parseModelResult(content);
}

function matchKeywordFromCategory(category: MockCategory): string {
  if (category === 'petbrush') return 'pet grooming brush';
  if (category === 'yogamat') return 'yoga mat';
  return 'wireless earbuds';
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { keyword, region, platform } = body;

    if (!keyword || !region || !platform) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    let matchedBy: 'model' | 'local' = 'local';
    let reason = 'Matched with local keyword rules.';
    let confidence = 0.68;
    let matchedKeyword = keyword;

    try {
      const modelResult = await classifyWithModel(keyword, region, platform);

      if (modelResult) {
        matchedBy = 'model';
        matchedKeyword = matchKeywordFromCategory(modelResult.category);
        reason = modelResult.reason || reason;
        confidence = modelResult.confidence ?? confidence;
      }
    } catch {
      matchedBy = 'local';
    }

    const report = matchReport(matchedKeyword, region, platform);
    report.keyword = keyword;

    return NextResponse.json({
      success: true,
      report,
      routing: {
        matchedBy,
        matchedKeyword,
        reason,
        confidence,
      },
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
