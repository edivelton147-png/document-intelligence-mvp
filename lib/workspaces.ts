import type { Workspace } from "@/types/workspace";
import { workspaceSections } from "@/lib/mock-data";

export const workspaces: Workspace[] = [
  {
    id: "personal-archive",
    name: "Archivo personal",
    domain: "Gestión documental personal",
    description:
      "Espacio base para centralizar documentos importantes antes de analizarlos manualmente.",
    strictMode: false,
    documentCount: 0,
    flowSummary:
      "Centralizar documentos, ordenarlos por contexto y mantener una revisión humana antes de producir cualquier salida.",
    sections: workspaceSections,
    status: "ready",
    focus: "Organización inicial"
  },
  {
    id: "research-notes",
    name: "Notas de investigación",
    domain: "Investigación documental",
    description:
      "Área preparada para clasificar hallazgos, resúmenes y decisiones documentadas.",
    strictMode: false,
    documentCount: 0,
    flowSummary:
      "Clasificar hallazgos, registrar resúmenes y sostener decisiones documentadas mediante revisión humana.",
    sections: workspaceSections,
    status: "draft",
    focus: "Lectura asistida por revisión humana"
  },
  {
    id: "future-supabase",
    name: "Datos estructurados",
    domain: "Persistencia futura",
    description:
      "Placeholder para conectar Supabase más adelante sin acoplar la interfaz al backend todavía.",
    strictMode: false,
    documentCount: 0,
    flowSummary:
      "Mantener una estructura visual preparada para persistencia futura sin activar conexiones externas todavía.",
    sections: workspaceSections,
    status: "planned",
    focus: "Persistencia futura"
  }
];
