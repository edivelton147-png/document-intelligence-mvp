import { WorkspaceCard } from "@/components/workspace-card";
import { workspaces } from "@/lib/mock-data";
import type { Workspace } from "@/types/workspace";

export default function WorkspacesPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <section className="rounded-[2rem] bg-white p-8 shadow-soft lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slateblue">
              Workspaces
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
              Inteligencia documental simple, personal y verificable.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Fase 0 visual con datos mock/locales. Cada workspace representa un contexto
              documental distinto, sin Supabase, backend, APIs externas ni automatizaciones.
            </p>
          </div>
          <div className="rounded-3xl bg-ink px-6 py-5 text-white">
            <p className="text-sm text-slate-300">Estado del MVP</p>
            <p className="mt-2 text-2xl font-semibold">Fase 0 visual</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {workspaces.map((workspace: Workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </section>
    </div>
  );
}
