import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkspaceById } from "@/lib/mock-data";
import type { WorkspaceSectionId } from "@/types/workspace";

type WorkspaceSectionPlaceholderProps = {
  workspaceId: string;
  sectionId: WorkspaceSectionId;
};

export function WorkspaceSectionPlaceholder({
  workspaceId,
  sectionId
}: WorkspaceSectionPlaceholderProps) {
  const workspace = getWorkspaceById(workspaceId);

  if (!workspace) {
    notFound();
  }

  const section = workspace.sections?.find((item) => item.id === sectionId);

  if (!section) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
        <Link href="/" className="transition hover:text-ink">
          Workspaces
        </Link>
        <span>/</span>
        <Link href={`/workspace/${workspace.id}`} className="transition hover:text-ink">
          {workspace.name}
        </Link>
        <span>/</span>
        <span className="text-ink">{section.label}</span>
      </div>

      <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-soft lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slateblue">
          Placeholder · {workspace.domain}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">
          {section.label}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
          {section.description} Esta sección queda preparada solo como estructura visual de
          Fase 0. No conecta con Supabase, backend, APIs ni datos reales.
        </p>

        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-mist p-6">
          <p className="font-semibold text-ink">Contenido pendiente</p>
          <p className="mt-2 leading-7 text-slate-600">
            Aquí se incorporarán datos locales o persistencia cuando avance el MVP. Por ahora
            se mantiene como placeholder navegable para validar la arquitectura de rutas.
          </p>
        </div>
      </section>
    </div>
  );
}
