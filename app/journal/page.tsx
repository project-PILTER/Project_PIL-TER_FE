import { journalExamples } from "@/components/domain/community/examples/journalExamples";
import JournalPageClient from "@/components/domain/community/journal/journalPageClint";

export default function JournalPage() {
  const journals = journalExamples;
  return(
    <JournalPageClient journals={journals} />
  )
}