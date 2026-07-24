export const dynamic = 'force-dynamic';

import { journals } from "@/components/domain/community/examples/journalExamples";
import JournalPageClient from "@/components/domain/community/journal/journalPageClint";
import { getJournals } from "@/services/journal.service";

export default async function JournalPage() {
  // const journals = (await getJournals()) ?? [];

  return(
    <JournalPageClient journals={journals} />
  )
}