import type { Workspace, WorkspaceSection } from "@/types/workspace";

export const workspaceSections: WorkspaceSection[] = [
  {
    id: "documents",
    label: "Documentos",
    description: "Inventario local de archivos y materiales por revisar."
  },
  {
    id: "context",
    label: "Contexto",
    description: "Criterios, alcance y notas de referencia del workspace."
  },
  {
    id: "prompt",
    label: "Prompt",
    description: "Guía manual para estructurar preguntas y revisiones humanas."
  },
  {
    id: "outputs",
    label: "Outputs",
    description: "Resultados, matrices y entregables producidos fuera de la app."
  },
  {
    id: "notes",
    label: "Notas",
    description: "Bitácora personal de decisiones, pendientes y observaciones."
  }
];

export const workspaces: Workspace[] = [
  {
    id: "fen-2026",
    name: "FEN 2026",
    domain: "Gestión del riesgo y respuesta climática",
    description:
      "Workspace para ordenar documentación, criterios técnicos y evidencias relacionadas con escenarios del Fenómeno El Niño 2026.",
    strictMode: true,
    flowSummary:
      "Recolectar documentos fuente, validar relevancia manualmente, organizar hallazgos por tema y preparar outputs verificables para revisión final.",
    documentCount: 0,
    sections: workspaceSections,
    status: "ready",
    focus: "Gestión documental"
  },
  {
    id: "wash-tumbes",
    name: "WASH Tumbes",
    domain: "Agua, saneamiento e higiene",
    description:
      "Espacio de trabajo para estructurar información territorial, diagnósticos WASH y notas operativas enfocadas en Tumbes.",
    strictMode: true,
    flowSummary:
      "Separar insumos por fuente, contrastar datos críticos, sintetizar brechas y registrar decisiones humanas antes de producir entregables.",
    documentCount: 0,
    sections: workspaceSections,
    status: "ready",
    focus: "Diagnóstico territorial"
  },
  {
    id: "tesis-agua-saneamiento",
    name: "Tesis Agua y Saneamiento",
    domain: "Investigación académica aplicada",
    description:
      "Workspace para organizar bibliografía, argumentos, metodología y notas de avance de una tesis sobre agua y saneamiento.",
    strictMode: false,
    flowSummary:
      "Agrupar lecturas, extraer ideas clave, mantener trazabilidad de citas y consolidar notas para escritura académica posterior.",
    documentCount: 0,
    sections: workspaceSections,
    status: "draft",
    focus: "Investigación académica"
  },
  {
    id: "propuestas-tecnicas",
    name: "Propuestas Técnicas",
    domain: "Formulación y revisión de propuestas",
    description:
      "Área para preparar insumos, requisitos, matrices de cumplimiento y borradores de propuestas técnicas.",
    strictMode: true,
    flowSummary:
      "Revisar bases, identificar requisitos, mapear evidencias disponibles y producir una estructura de respuesta validada manualmente.",
    documentCount: 0,
    sections: workspaceSections,
    status: "ready",
    focus: "Revisión técnica"
  }
];

export function getWorkspaceById(id: string) {
  return workspaces.find((workspace) => workspace.id === id);
}
