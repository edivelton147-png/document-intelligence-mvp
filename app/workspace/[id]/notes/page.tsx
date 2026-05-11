import { WorkspaceSectionPlaceholder } from "@/components/workspace-section-placeholder";

export default function NotesPage({ params }: { params: { id: string } }) {
  return <WorkspaceSectionPlaceholder workspaceId={params.id} sectionId="notes" />;
}
