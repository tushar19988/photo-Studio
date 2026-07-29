import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AdminLoginSchema } from "@/lib/validations";
import { AUTH_COOKIE_NAME } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = AdminLoginSchema.parse(body);

    // Default admin credentials check (or check DB if user exists)
    // Production note: Admin user seed can be updated in DB
    const adminEmail = process.env.ADMIN_EMAIL || "admin@shreeshyamstudio.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "Studio@2026";

    if (validated.email === adminEmail && validated.password === adminPassword) {
      const sessionUser = {
        id: "usr_admin_1",
        name: "Studio Administrator",
        email: validated.email,
        role: "SUPER_ADMIN",
      };

      const token = Buffer.from(JSON.stringify(sessionUser)).toString("base64");

      const cookieStore = await cookies();
      cookieStore.set(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return NextResponse.json({
        success: true,
        message: "Login successful",
        user: sessionUser,
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Authentication server error" },
      { status: 500 }
    );
  }
}
