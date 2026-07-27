export const dynamic = 'force-dynamic';

import JournalPageClient from "@/components/domain/community/journal/journalPageClint";
import { getJournals } from "@/services/journal.server";

export default async function JournalPage() {
  const journals = (await getJournals()) ?? [];

  return(
    <JournalPageClient journals={journals} />
  )
}