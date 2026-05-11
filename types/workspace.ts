export type WorkspaceStatus = "draft" | "ready" | "planned";

export type Workspace = {
  id: string;
  name: string;
  description: string;
  documentCount: number;
  status: WorkspaceStatus;
  focus: string;
};
