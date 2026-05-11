import type { Workspace } from "@/types/workspace";

export const workspaces: Workspace[] = [
  {
    id: "personal-archive",
    name: "Archivo personal",
    description:
      "Espacio base para centralizar documentos importantes antes de analizarlos manualmente.",
    documentCount: 0,
    status: "ready",
    focus: "Organización inicial"
  },
  {
    id: "research-notes",
    name: "Notas de investigación",
    description:
      "Área preparada para clasificar hallazgos, resúmenes y decisiones documentadas.",
    documentCount: 0,
    status: "draft",
    focus: "Lectura asistida por revisión humana"
  },
  {
    id: "future-supabase",
    name: "Datos estructurados",
    description:
      "Placeholder para conectar Supabase más adelante sin acoplar la interfaz al backend todavía.",
    documentCount: 0,
    status: "planned",
    focus: "Persistencia futura"
  }
];
