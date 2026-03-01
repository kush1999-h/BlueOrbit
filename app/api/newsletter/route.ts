import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  honeypot: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  return NextResponse.json({ message: "You are now subscribed." }, { status: 201 });
}

