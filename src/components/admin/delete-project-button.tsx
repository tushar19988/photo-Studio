"use client";

import React, { useTransition } from "react";
import { deletePortfolioProject } from "@/server/actions/portfolio-admin";
import { Trash2 } from "lucide-react";

export function DeleteProjectButton({ projectId }: { projectId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this portfolio project?")) {
      startTransition(async () => {
        await deletePortfolioProject(projectId);
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="p-2 rounded-lg bg-rose-950/40 border border-rose-900/50 text-rose-400 hover:text-rose-300 transition-colors disabled:opacity-50"
      title="Delete Project"
    >
      <Trash2 className="w-3.5 h-3.5" />
    </button>
  );
}
