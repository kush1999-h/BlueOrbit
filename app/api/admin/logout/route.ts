import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getClearedSessionCookieOptions,
} from "@/lib/adminAuth";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out." }, { status: 200 });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", getClearedSessionCookieOptions());
  return response;
}

