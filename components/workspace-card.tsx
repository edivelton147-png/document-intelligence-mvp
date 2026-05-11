import Link from "next/link";
import type { Workspace } from "@/types/workspace";

const statusMeta: Record<Workspace["status"], { label: string; className: string }> = {
  draft: {
    label: "Borrador",
    className: "border-amber-200 bg-amber-50 text-amber-700"
  },
  ready: {
    label: "Listo",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700"
  },
  planned: {
    label: "Planificado",
    className: "border-slate-200 bg-slate-50 text-slate-600"
  }
};

export function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  const status = statusMeta[workspace.status];

  return (
    <Link
      href={`/workspace/${workspace.id}`}
      className="group block h-full rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slateblue/30"
    >
      <article className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-2xl ring-1 ring-slate-100 transition group-hover:scale-105">
              {workspace.icon}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slateblue">
                {workspace.focus}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-ink">{workspace.name}</h2>
            </div>
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}>
            {status.label}
          </span>
        </div>

        <p className="mt-5 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">
          {workspace.description}
        </p>

        <div className="mt-6 rounded-2xl bg-mist p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Dominio
          </p>
          <p className="mt-2 text-sm font-medium leading-5 text-ink">{workspace.domain}</p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs font-medium text-slate-400">Documentos</p>
            <p className="mt-1 text-2xl font-semibold text-ink">{workspace.documentCount}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Última actualización</p>
            <p className="mt-1 text-sm font-semibold text-ink">{workspace.lastUpdated}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
