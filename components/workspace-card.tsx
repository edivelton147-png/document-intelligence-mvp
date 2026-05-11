import Link from "next/link";
import type { Workspace } from "@/types/workspace";

export function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slateblue">
            {workspace.domain}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-ink">{workspace.name}</h2>
        </div>
        <span className="shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-medium text-slate-600">
          {workspace.strictMode ? "Modo estricto" : "Modo flexible"}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{workspace.description}</p>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Documentos mock</span>
          <span className="text-2xl font-semibold text-ink">{workspace.documentCount}</span>
        </div>
        <Link
          href={`/workspace/${workspace.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
        >
          Abrir workspace
        </Link>
      </div>
    </article>
  );
}
