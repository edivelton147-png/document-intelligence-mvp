import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkspaceInternalNav } from "@/components/workspace-internal-nav";
import { getWorkspaceById, workspaces } from "@/lib/mock-data";
import type { Workspace } from "@/types/workspace";

const statusLabel: Record<Workspace["status"], string> = {
  draft: "Borrador",
  ready: "Listo",
  planned: "Planificado"
};

type LocalWorkspaceDocument = {
  name: string;
  type: string;
  date: string;
  status: string;
  priority: string;
};

const documentStatusMeta: Record<LocalWorkspaceDocument["status"], { label: string; className: string }> = {
  pending: {
    label: "Pendiente",
    className: "bg-slate-100 text-slate-600"
  },
  reviewing: {
    label: "En revisión",
    className: "bg-amber-50 text-amber-700"
  },
  validated: {
    label: "Validado",
    className: "bg-emerald-50 text-emerald-700"
  }
};

const priorityLabel: Record<LocalWorkspaceDocument["priority"], string> = {
  high: "Alta",
  medium: "Media",
  low: "Baja"
};

export function generateStaticParams() {
  return workspaces.map((workspace) => ({ id: workspace.id }));
}

export default function WorkspacePage({ params }: { params: { id: string } }) {
  const workspace = getWorkspaceById(params.id);

  if (!workspace) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
        <Link href="/" className="transition hover:text-ink">
          Workspaces
        </Link>
        <span>/</span>
        <span className="text-ink">{workspace.name}</span>
      </div>

      <section className="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-soft">
        <div className="border-b border-slate-100 bg-gradient-to-br from-white to-mist p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-soft">
                  {workspace.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slateblue">
                    {workspace.domain}
                  </p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
                    {workspace.name}
                  </h1>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600">{workspace.description}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5">
              <p className="text-sm text-slate-500">Última actualización</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{workspace.lastUpdated}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Documentos mock</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{workspace.documentCount}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Estado visual</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{statusLabel[workspace.status]}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Modo de revisión</p>
              <p className="mt-2 text-3xl font-semibold text-ink">
                {workspace.strictMode ? "Estricto" : "Flexible"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slateblue">
            Resumen del flujo documental
          </p>
          <p className="mt-3 max-w-4xl leading-7 text-slate-700">{workspace.flowSummary}</p>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
        <WorkspaceInternalNav workspace={workspace} />

        <div className="space-y-6">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slateblue">
                  Documentos recientes
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">Inventario de revisión</h2>
              </div>
              <p className="text-sm text-slate-500">Datos mock para uso personal</p>
            </div>

            <div className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100">
              {workspace.documents.map((document) => {
                const documentStatus = documentStatusMeta[document.status];

                return (
                  <div
                    key={document.id}
                    className="grid gap-3 bg-white p-4 text-sm transition hover:bg-mist md:grid-cols-[1fr_120px_120px_100px] md:items-center"
                  >
                    <div>
                      <p className="font-semibold text-ink">{document.name}</p>
                      <p className="mt-1 text-slate-500">{document.type}</p>
                    </div>
                    <span className="text-slate-500">{document.date}</span>
                    <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${documentStatus.className}`}>
                      {documentStatus.label}
                    </span>
                    <span className="font-medium text-slate-600">
                      Prioridad {priorityLabel[document.priority]}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-2">
            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slateblue">
                Notas mock
              </p>
              <div className="mt-5 space-y-4">
                {workspace.notes.map((note) => (
                  <article key={note.id} className="rounded-2xl bg-mist p-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-ink">{note.title}</h3>
                      <span className="text-xs font-medium text-slate-400">{note.date}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{note.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slateblue">
                Actividad reciente
              </p>
              <div className="mt-5 space-y-4">
                {workspace.activity.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slateblue" />
                    <div>
                      <p className="text-sm font-medium text-ink">{activity.label}</p>
                      <p className="mt-1 text-xs text-slate-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
