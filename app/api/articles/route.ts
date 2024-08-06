import { NextRequest, NextResponse } from 'next/server';
import { articles } from '../../data';

export async function GET(request: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}