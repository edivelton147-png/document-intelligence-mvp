import { WorkspaceSectionPlaceholder } from "@/components/workspace-section-placeholder";

export default function PromptPage({ params }: { params: { id: string } }) {
  return <WorkspaceSectionPlaceholder workspaceId={params.id} sectionId="prompt" />;
}
