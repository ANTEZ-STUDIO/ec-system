import { NextRequest, NextResponse } from 'next/server';

const products = [
  { id: 1,  name: 'ファイヤーキャンドル',  price: 2200 },
  { id: 2,  name: 'プリザーブドフラワー',  price: 3200 },
  { id: 3,  name: '陶器のフラワーベース',  price: 1800 },
  { id: 4,  name: 'リードディフューザー',  price: 1500 }
];

export async function GET() {
  return NextResponse.json(products);
}
