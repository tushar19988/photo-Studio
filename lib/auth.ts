import { cookies } from "next/headers";
import { db } from "@/lib/db";

export const AUTH_COOKIE_NAME = "sss_admin_session";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR";
}

export async function verifyAdminSession(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!sessionToken) {
      return null;
    }

    // Decode session payload
    const decoded = JSON.parse(Buffer.from(sessionToken, "base64").toString("utf-8"));

    if (decoded && decoded.id && decoded.email) {
      return decoded as SessionUser;
    }

    return null;
  } catch (error) {
    return null;
  }
}
