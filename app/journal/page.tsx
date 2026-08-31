export const dynamic = "force-dynamic";

import JournalPageClient from "@/components/domain/journal/journalPageClint";
import { getJournals } from "@/services/journal.server";

export default async function JournalPage() {
  const journals = (await getJournals()) ?? [];

  console.log("journals 정보: ", journals);

  return <JournalPageClient journals={journals} />;
}
