"use server";

import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateEnquiryStatus(enquiryId: string, status: any) {
  const user = await verifyAdminSession();
  if (!user) throw new Error("Unauthorized");

  await db.enquiry.update({
    where: { id: enquiryId },
    data: { status },
  });

  revalidatePath("/admin/enquiries");
  revalidatePath("/admin/dashboard");
}

export async function deleteEnquiry(enquiryId: string) {
  const user = await verifyAdminSession();
  if (!user) throw new Error("Unauthorized");

  await db.enquiry.delete({
    where: { id: enquiryId },
  });

  revalidatePath("/admin/enquiries");
  revalidatePath("/admin/dashboard");
}
