import React from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { createPortfolioProject } from "@/server/actions/portfolio-admin";
import { CreateProjectModal } from "@/components/admin/create-project-modal";
import { DeleteProjectButton } from "@/components/admin/delete-project-button";
import { Plus, MapPin, Tag, ExternalLink } from "lucide-react";

export default async function AdminPortfolioPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const projects = await db.portfolioProject.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  const categories = await db.portfolioCategory.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Portfolio Projects</h1>
          <p className="text-xs text-neutral-400 font-light mt-1">
            Manage your online photography showcase and published story galleries.
          </p>
        </div>

        <CreateProjectModal categories={categories} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-400 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                  {project.category.name}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">{project.title}</h3>
                {project.location && (
                  <p className="text-xs text-neutral-400 flex items-center gap-1 font-light">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {project.location}
                  </p>
                )}
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-neutral-800/80 mt-4">
              <Link
                href={`/portfolio/${project.slug}`}
                target="_blank"
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View Page</span>
                <ExternalLink className="w-3 h-3" />
              </Link>

              <DeleteProjectButton projectId={project.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
