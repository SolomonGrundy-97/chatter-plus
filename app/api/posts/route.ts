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
let idCounter = 1;

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const newPost: Post = {
    id: idCounter++,
    title,
    content,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  };
  posts.push(newPost);
  return NextResponse.json({ message: 'Post added successfully!', post: newPost });
}
