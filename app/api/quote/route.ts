import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  servicesNeeded: z.array(z.string()).default([]),
  modulesInterested: z.array(z.string()).default([]),
  usersCount: z.union([z.string(), z.number()]).optional().nullable(),
  timeline: z.string().optional().nullable(),
  budgetRange: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  honeypot: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please provide valid quote details." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  return NextResponse.json(
    { message: "Quote request received. We will respond within 24-48 hours." },
    { status: 201 },
  );
}

