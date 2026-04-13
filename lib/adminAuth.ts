import jwt from "jsonwebtoken";

const SESSION_TTL_SECONDS = 60 * 60 * 8;
const SESSION_ISSUER = "blue-orbit-admin";
const SESSION_AUDIENCE = "blue-orbit-admin";

export const ADMIN_SESSION_COOKIE = "bo_admin_session";

export type AdminSessionPayload = {
  sub: string;
  role: "admin";
};

export type AdminAuthConfig = {
  adminEmail: string;
  adminPasswordHash: string;
  adminSessionSecret: string;
};

export function getAdminAuthConfig(): AdminAuthConfig | null {
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const adminSessionSecret = process.env.ADMIN_SESSION_SECRET?.trim();

  if (!adminEmail || !adminPasswordHash || !adminSessionSecret) {
    return null;
  }

  return {
    adminEmail,
    adminPasswordHash,
    adminSessionSecret,
  };
}

export function createAdminSessionToken(
  adminEmail: string,
  sessionSecret: string,
): string {
  return jwt.sign({ role: "admin" }, sessionSecret, {
    subject: adminEmail,
    issuer: SESSION_ISSUER,
    audience: SESSION_AUDIENCE,
    expiresIn: SESSION_TTL_SECONDS,
  });
}

export function verifyAdminSessionToken(token: string): AdminSessionPayload | null {
  const config = getAdminAuthConfig();
  if (!config) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, config.adminSessionSecret, {
      issuer: SESSION_ISSUER,
      audience: SESSION_AUDIENCE,
    });

    if (typeof decoded !== "object" || !decoded) {
      return null;
    }

    if (typeof decoded.sub !== "string") {
      return null;
    }

    return {
      sub: decoded.sub,
      role: "admin",
    };
  } catch {
    return null;
  }
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_TTL_SECONDS,
  };
}

export function getClearedSessionCookieOptions() {
  return {
    ...getSessionCookieOptions(),
    maxAge: 0,
  };
}

