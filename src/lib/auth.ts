import { cookies } from "next/headers";
import { db } from "./db";
import argon2 from "argon2";

const SESSION_COOKIE_NAME = "studio_admin_session";

export async function verifyAdminSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken) return null;

  try {
    const user = await db.user.findFirst({
      where: { id: sessionToken },
    });
    return user || null;
  } catch (error) {
    return null;
  }
}

export async function createAdminSession(userId: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
