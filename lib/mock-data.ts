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
    documentCount: 12,
    sections: workspaceSections,
    status: "ready",
    focus: "Gestión documental",
    icon: "🌦️",
    lastUpdated: "10 mayo 2026",
    documents: [
      {
        id: "fen-escenarios-senamhi",
        name: "Escenarios climáticos FEN 2026",
        type: "Informe técnico",
        date: "08 mayo 2026",
        status: "reviewing",
        priority: "high"
      },
      {
        id: "fen-matriz-riesgos",
        name: "Matriz de riesgos por región",
        type: "Hoja de cálculo",
        date: "05 mayo 2026",
        status: "validated",
        priority: "high"
      },
      {
        id: "fen-acta-coordinacion",
        name: "Acta de coordinación intersectorial",
        type: "Acta",
        date: "02 mayo 2026",
        status: "pending",
        priority: "medium"
      }
    ],
    notes: [
      {
        id: "fen-note-1",
        title: "Criterio de revisión",
        body: "Separar pronósticos, impactos esperados y medidas operativas antes de consolidar conclusiones.",
        date: "10 mayo 2026"
      },
      {
        id: "fen-note-2",
        title: "Pendiente humano",
        body: "Confirmar que las cifras regionales correspondan a la versión final del informe técnico.",
        date: "09 mayo 2026"
      }
    ],
    activity: [
      { id: "fen-act-1", label: "Se validó la matriz de riesgos", date: "Hoy" },
      { id: "fen-act-2", label: "Se agregó acta de coordinación", date: "Ayer" },
      { id: "fen-act-3", label: "Se actualizó el resumen documental", date: "08 mayo" }
    ]
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
    documentCount: 9,
    sections: workspaceSections,
    status: "ready",
    focus: "Diagnóstico territorial",
    icon: "💧",
    lastUpdated: "09 mayo 2026",
    documents: [
      {
        id: "wash-diagnostico-provincial",
        name: "Diagnóstico WASH provincial",
        type: "Diagnóstico",
        date: "07 mayo 2026",
        status: "validated",
        priority: "high"
      },
      {
        id: "wash-brechas-servicio",
        name: "Brechas de servicio por distrito",
        type: "Matriz",
        date: "04 mayo 2026",
        status: "reviewing",
        priority: "high"
      },
      {
        id: "wash-notas-campo",
        name: "Notas de campo Tumbes",
        type: "Notas",
        date: "30 abril 2026",
        status: "pending",
        priority: "medium"
      }
    ],
    notes: [
      {
        id: "wash-note-1",
        title: "Lectura territorial",
        body: "Mantener separados los datos de cobertura, continuidad y calidad del servicio.",
        date: "09 mayo 2026"
      },
      {
        id: "wash-note-2",
        title: "Dato sensible",
        body: "Revisar manualmente cualquier cifra de población antes de reutilizarla en outputs.",
        date: "07 mayo 2026"
      }
    ],
    activity: [
      { id: "wash-act-1", label: "Se clasificaron brechas por distrito", date: "Hoy" },
      { id: "wash-act-2", label: "Se marcó diagnóstico como validado", date: "09 mayo" },
      { id: "wash-act-3", label: "Se añadió nota de revisión territorial", date: "07 mayo" }
    ]
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
    documentCount: 18,
    sections: workspaceSections,
    status: "draft",
    focus: "Investigación académica",
    icon: "📚",
    lastUpdated: "06 mayo 2026",
    documents: [
      {
        id: "tesis-marco-teorico",
        name: "Marco teórico consolidado",
        type: "Documento",
        date: "06 mayo 2026",
        status: "reviewing",
        priority: "medium"
      },
      {
        id: "tesis-bibliografia-base",
        name: "Bibliografía base anotada",
        type: "Bibliografía",
        date: "01 mayo 2026",
        status: "validated",
        priority: "high"
      },
      {
        id: "tesis-metodologia",
        name: "Notas de metodología",
        type: "Notas",
        date: "28 abril 2026",
        status: "pending",
        priority: "medium"
      }
    ],
    notes: [
      {
        id: "tesis-note-1",
        title: "Trazabilidad de citas",
        body: "No mover una cita al borrador final sin verificar página, año y fuente primaria.",
        date: "06 mayo 2026"
      },
      {
        id: "tesis-note-2",
        title: "Próximo bloque",
        body: "Cerrar el contraste entre enfoque comunitario y sostenibilidad operativa.",
        date: "04 mayo 2026"
      }
    ],
    activity: [
      { id: "tesis-act-1", label: "Se actualizó marco teórico", date: "06 mayo" },
      { id: "tesis-act-2", label: "Se validó bibliografía base", date: "01 mayo" },
      { id: "tesis-act-3", label: "Se abrió nota metodológica", date: "28 abril" }
    ]
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
    documentCount: 7,
    sections: workspaceSections,
    status: "ready",
    focus: "Revisión técnica",
    icon: "🧩",
    lastUpdated: "08 mayo 2026",
    documents: [
      {
        id: "prop-terminos-referencia",
        name: "Términos de referencia",
        type: "Bases",
        date: "08 mayo 2026",
        status: "reviewing",
        priority: "high"
      },
      {
        id: "prop-matriz-cumplimiento",
        name: "Matriz de cumplimiento",
        type: "Matriz",
        date: "07 mayo 2026",
        status: "pending",
        priority: "high"
      },
      {
        id: "prop-experiencia-equipo",
        name: "Experiencia del equipo",
        type: "Anexo",
        date: "03 mayo 2026",
        status: "validated",
        priority: "medium"
      }
    ],
    notes: [
      {
        id: "prop-note-1",
        title: "Riesgo principal",
        body: "Verificar requisitos obligatorios antes de redactar cualquier respuesta técnica.",
        date: "08 mayo 2026"
      },
      {
        id: "prop-note-2",
        title: "Evidencias",
        body: "Mapear cada experiencia del equipo contra el requisito específico de las bases.",
        date: "07 mayo 2026"
      }
    ],
    activity: [
      { id: "prop-act-1", label: "Se cargaron términos de referencia", date: "Hoy" },
      { id: "prop-act-2", label: "Se creó matriz de cumplimiento", date: "08 mayo" },
      { id: "prop-act-3", label: "Se validó anexo de experiencia", date: "03 mayo" }
    ]
  }
];

export function getWorkspaceById(id: string) {
  return workspaces.find((workspace) => workspace.id === id);
}
