import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  subject: z.string().min(3),
  message: z.string().min(10),
  honeypot: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please provide valid form data." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  return NextResponse.json({ message: "Thanks. Your message was sent successfully." }, { status: 201 });
}

