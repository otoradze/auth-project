import { NextResponse } from 'next/server';
import { connectMongoDB } from '../api-configs/mongodb';
import User from '../api-configs/user';

export async function POST(request: any) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: 'user Registered' }, { status: 201 });
}
