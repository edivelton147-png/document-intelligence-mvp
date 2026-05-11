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
  documentFlowSummary: string;
  documentCount: number;
  sections: WorkspaceSection[];
};
