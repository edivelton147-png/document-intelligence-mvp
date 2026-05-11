import { WorkspaceSectionPlaceholder } from "@/components/workspace-section-placeholder";

export default function ContextPage({ params }: { params: { id: string } }) {
  return <WorkspaceSectionPlaceholder workspaceId={params.id} sectionId="context" />;
}
