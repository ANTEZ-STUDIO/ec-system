import { NextRequest, NextResponse } from 'next/server';

const products = [
  { id: 1,  name: 'ファイヤーキャンドル',  price: 2200 },
  { id: 2,  name: 'プリザーブドフラワー',  price: 3200 },
  { id: 3,  name: '陶器のフラワーベース',  price: 1800 },
  { id: 4,  name: 'リードディフューザー',  price: 1500 }
];

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const productId = parseInt(id, 10);

  const product = products.find(p => p.id === productId);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json(
      { message: '商品が見つかりませんでした。' },
      { status: 404 }
    );
  }
}
