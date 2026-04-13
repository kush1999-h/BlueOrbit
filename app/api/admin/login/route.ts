import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminAuthConfig,
  getSessionCookieOptions,
} from "@/lib/adminAuth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please enter a valid email and password." }, { status: 400 });
  }

  const config = getAdminAuthConfig();
  if (!config) {
    return NextResponse.json({ message: "Admin authentication is not configured." }, { status: 500 });
  }

  const email = parsed.data.email.trim().toLowerCase();
  const isEmailMatch = email === config.adminEmail;
  const isPasswordMatch = isEmailMatch
    ? await bcrypt.compare(parsed.data.password, config.adminPasswordHash)
    : false;

  if (!isEmailMatch || !isPasswordMatch) {
    return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
  }

  const token = createAdminSessionToken(config.adminEmail, config.adminSessionSecret);
  const response = NextResponse.json({ message: "Login successful." }, { status: 200 });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, getSessionCookieOptions());

  return response;
}

