export type WorkspaceSectionId = "documents" | "context" | "prompt" | "outputs" | "notes";

export type WorkspaceSection = {
  id: WorkspaceSectionId;
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
};
