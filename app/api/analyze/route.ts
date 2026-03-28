import { NextRequest, NextResponse } from 'next/server';
import { matchReport } from '@/lib/matcher';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { keyword, region, platform } = body;

    if (!keyword || !region || !platform) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Simulate a short server processing delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const report = matchReport(keyword, region, platform);
    return NextResponse.json({ success: true, report });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
