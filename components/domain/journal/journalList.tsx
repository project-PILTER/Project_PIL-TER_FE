"use client";

import { JournalDiary } from "@/types/journal.type";
import JournalItem from "./journalItem";

interface JournalListProps {
  journals: JournalDiary[];
  onEdit?: (journal: JournalDiary) => void;
  onDelete: (id: number) => void;
}

export default function JournalList({ journals, onEdit, onDelete }: JournalListProps) {
  if (!journals || !Array.isArray(journals) || journals.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        등록된 건강일지가 없습니다.
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {journals.map((journal) => (
        <JournalItem key={journal.id} journal={journal} onEdit={onEdit} onDelete={onDelete}/>
      ))}
    </div>
  );
}
