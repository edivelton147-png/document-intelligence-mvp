import type { Workspace } from "@/types/workspace";

const statusLabel: Record<Workspace["status"], string> = {
  draft: "Borrador",
  ready: "Listo",
  planned: "Planificado"
};

export function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slateblue">
            {workspace.focus}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-ink">{workspace.name}</h2>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-slate-600">
          {statusLabel[workspace.status]}
        </span>
      </div>

      <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
        {workspace.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm text-slate-500">Documentos</span>
        <span className="text-2xl font-semibold text-ink">{workspace.documentCount}</span>
      </div>
    </article>
  );
}
