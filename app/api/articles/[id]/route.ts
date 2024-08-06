import { NextRequest, NextResponse } from 'next/server';
import { articles } from '../../../data';

type Params = {
  id: string;
};

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    return NextResponse.json(filtered[0], { status: 200 });
  } else {
    return NextResponse.json({ message: `Article with the id of ${id} is not found` }, { status: 404 });
  }
}
