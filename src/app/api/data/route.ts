// src/app/api/data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // ここにデータを返すロジックを記述
  return NextResponse.json({ message: 'Hello, World!' });
}