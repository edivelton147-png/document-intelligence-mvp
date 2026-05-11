import { WorkspaceSectionPlaceholder } from "@/components/workspace-section-placeholder";

export default function OutputsPage({ params }: { params: { id: string } }) {
  return <WorkspaceSectionPlaceholder workspaceId={params.id} sectionId="outputs" />;
}
