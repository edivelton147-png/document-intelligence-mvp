export type WorkspaceStatus = "draft" | "ready" | "planned";

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
