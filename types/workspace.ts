export type WorkspaceStatus = "draft" | "ready" | "planned";

export type WorkspaceDocumentStatus = "pending" | "reviewing" | "validated";

export type WorkspaceDocumentPriority = "high" | "medium" | "low";

export type WorkspaceDocument = {
  id: string;
  name: string;
  type: string;
  date: string;
  status: WorkspaceDocumentStatus;
  priority: WorkspaceDocumentPriority;
};

export type WorkspaceNote = {
  id: string;
  title: string;
  body: string;
  date: string;
};

export type WorkspaceActivity = {
  id: string;
  label: string;
  date: string;
};

export type WorkspaceSection = {
  id: "documents" | "context" | "prompt" | "outputs" | "notes";
  label: string;
  description: string;
};

export type Workspace = {
  id: string;
  name: string;
  domain: string;
  description: string;
  strictMode: boolean;
  documentCount: number;
  flowSummary: string;
  sections: WorkspaceSection[];
  status: WorkspaceStatus;
  focus: string;
  icon: string;
  lastUpdated: string;
  documents: WorkspaceDocument[];
  notes: WorkspaceNote[];
  activity: WorkspaceActivity[];
};
