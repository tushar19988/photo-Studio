"use server";

import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createPortfolioProject(prevState: any, formData: FormData) {
  const user = await verifyAdminSession();
  if (!user) return { error: "Unauthorized" };

  const title = formData.get("title") as string;
  const slug = (formData.get("slug") as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const categoryId = formData.get("categoryId") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;
  const coverImage = formData.get("coverImage") as string;

  if (!title || !categoryId || !coverImage) {
    return { error: "Title, Category, and Cover Image URL are required." };
  }

  try {
    await db.portfolioProject.create({
      data: {
        title,
        slug,
        categoryId,
        location: location || null,
        description: description || null,
        coverImage,
        published: true,
        featured: true,
      },
    });

    revalidatePath("/portfolio");
    revalidatePath("/admin/portfolio");
    return { success: true, message: "Project created successfully!" };
  } catch (error) {
    console.error("Create portfolio error:", error);
    return { error: "Failed to create project. Ensure slug is unique." };
  }
}

export async function deletePortfolioProject(projectId: string) {
  const user = await verifyAdminSession();
  if (!user) throw new Error("Unauthorized");

  await db.portfolioProject.delete({
    where: { id: projectId },
  });

  revalidatePath("/portfolio");
  revalidatePath("/admin/portfolio");
}
