import Link from "next/link";
import type { Workspace } from "@/types/workspace";

const statusLabel: Record<Workspace["status"], string> = {
  draft: "Borrador",
  ready: "Listo para revisar",
  planned: "Planificado"
};

export function WorkspaceInternalNav({ workspace }: { workspace: Workspace }) {
  return (
    <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft lg:sticky lg:top-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-2xl">
          {workspace.icon}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slateblue">
            Workspace
          </p>
          <p className="mt-1 font-semibold text-ink">{workspace.name}</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-2xl bg-mist px-4 py-3">
          <span className="text-slate-500">Estado</span>
          <span className="font-semibold text-ink">{statusLabel[workspace.status]}</span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-mist px-4 py-3">
          <span className="text-slate-500">Modo estricto</span>
          <span className="font-semibold text-ink">
            {workspace.strictMode ? "Activo" : "Flexible"}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-mist px-4 py-3">
          <span className="text-slate-500">Documentos</span>
          <span className="font-semibold text-ink">{workspace.documentCount}</span>
        </div>
      </div>

      <nav className="mt-6 space-y-2" aria-label="Secciones del workspace">
        {workspace.sections.map((section) => (
          <Link
            key={section.id}
            href={`/workspace/${workspace.id}/${section.id}`}
            className="block rounded-2xl border border-slate-100 px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:border-slateblue hover:bg-mist"
          >
            <span className="font-semibold text-ink">{section.label}</span>
            <span className="mt-1 block leading-5 text-slate-500">{section.description}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
