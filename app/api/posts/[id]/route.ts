import { NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: string[];
}

let posts: Post[] = [];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id));
  if (post) {
    return NextResponse.json(post);
  }
  return NextResponse.json({ message: 'Post not found' }, { status: 404 });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { title, content } = await request.json();
  const post = posts.find((p) => p.id === parseInt(params.id));
  if (post) {
    post.title = title;
    post.content = content;
    return NextResponse.json({ message: 'Post updated successfully!', post });
  }
  return NextResponse.json({ message: 'Post not found' }, { status: 404 });
}
