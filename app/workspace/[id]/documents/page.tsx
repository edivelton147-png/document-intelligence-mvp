import { WorkspaceSectionPlaceholder } from "@/components/workspace-section-placeholder";

export default function DocumentsPage({ params }: { params: { id: string } }) {
  return <WorkspaceSectionPlaceholder workspaceId={params.id} sectionId="documents" />;
}
