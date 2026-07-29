"use server";

import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateSiteSettings(prevState: any, formData: FormData) {
  const user = await verifyAdminSession();
  if (!user) return { error: "Unauthorized" };

  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const email = formData.get("email") as string;
  const whatsappNumber = formData.get("whatsappNumber") as string;

  try {
    await db.siteSettings.upsert({
      where: { id: "default" },
      update: {
        phone,
        address,
        email,
        whatsappNumber,
      },
      create: {
        id: "default",
        phone,
        address,
        email,
        whatsappNumber,
      },
    });

    revalidatePath("/");
    revalidatePath("/contact");
    revalidatePath("/admin/settings");
    return { success: true, message: "Site settings updated successfully!" };
  } catch (error) {
    console.error("Failed to update settings:", error);
    return { error: "Failed to update settings." };
  }
}
