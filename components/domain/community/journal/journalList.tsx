"use client";

import { JournalDiary } from "@/types/journal.type";
import JournalItem from "./journalItem";

interface JournalListProps {
  journals: JournalDiary[];
  onEdit?: (journal: JournalDiary) => void;
}

export default function JournalList({ journals, onEdit }: JournalListProps) {
  return (
    <div className="space-y-4">
      {journals.map((journal) => (
        <JournalItem key={journal.id} journal={journal} onEdit={onEdit} />
      ))}
    </div>
  );
}
