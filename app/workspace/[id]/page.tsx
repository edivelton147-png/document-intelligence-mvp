import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkspaceInternalNav } from "@/components/workspace-internal-nav";
import { getWorkspaceById, workspaces } from "@/lib/mock-data";
import type { Workspace } from "@/types/workspace";

export function generateStaticParams() {
  return workspaces.map((workspace) => ({ id: workspace.id }));
}

export default function WorkspacePage({ params }: { params: { id: string } }) {
  const workspace: Workspace | undefined = getWorkspaceById(params.id);

  if (!workspace) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <Link href="/" className="text-sm font-medium text-slate-500 transition hover:text-ink">
        ← Volver a Workspaces
      </Link>

      <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-soft lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slateblue">
              {workspace.domain}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
              {workspace.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
              {workspace.description}
            </p>
          </div>
          <div className="rounded-3xl bg-mist px-6 py-5">
            <p className="text-sm text-slate-500">Modo estricto</p>
            <p className="mt-2 text-2xl font-semibold text-ink">
              {workspace.strictMode ? "Activado" : "Desactivado"}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-mist p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slateblue">
            Resumen del flujo documental
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            {workspace.flowSummary}
          </p>
        </div>
      </section>

      <WorkspaceInternalNav workspace={workspace} />
    </div>
  );
}
