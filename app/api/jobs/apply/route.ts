import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  resumeUrl: z.string().url().optional().nullable(),
  coverLetter: z.string().min(20),
  jobSlug: z.string().min(2),
  honeypot: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please provide valid application details." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  return NextResponse.json({ message: "Application received. Our team will review it soon." }, { status: 201 });
}

