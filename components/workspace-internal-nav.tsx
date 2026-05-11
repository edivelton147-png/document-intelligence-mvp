import Link from "next/link";
import type { Workspace } from "@/types/workspace";

export function WorkspaceInternalNav({ workspace }: { workspace: Workspace }) {
  return (
    <nav className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5" aria-label="Secciones del workspace">
      {(workspace.sections ?? []).map((section) => (
        <Link
          key={section.id}
          href={`/workspace/${workspace.id}/${section.id}`}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm transition hover:-translate-y-0.5 hover:border-slateblue hover:shadow-soft"
        >
          <span className="font-semibold text-ink">{section.label}</span>
          <span className="mt-2 block leading-5 text-slate-500">{section.description}</span>
        </Link>
      ))}
    </nav>
  );
}
