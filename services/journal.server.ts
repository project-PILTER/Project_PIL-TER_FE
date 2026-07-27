import { JournalDiary } from "@/types/journal.type";
import { serverApiGet } from "./serverApi";

// 건강일지 조회
export async function getJournals(): Promise<JournalDiary[] | null> {
  try {
    const res = await serverApiGet("/journals");

    return res;
  } catch (error) {
    console.error("건강일지 조회 실패", error);
    return null;
  }
}