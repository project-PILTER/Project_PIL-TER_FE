import {
  JournalDiary,
  OneJournalRequest,
} from "@/types/journal.type";
import { api } from "./axios";
import { JournalFormValues } from "@/schemas/journal.schema";

// 건강일지 조회
export async function getJournals(): Promise<JournalDiary[] | null> {
  try {
    const res = await api.get("/journals");

    return res.data;
  } catch (error) {
    console.error("건강일지 조회 실패", error);
    return null;
  }
}

// 건강일지 추가
export async function postJournal(journalData: JournalFormValues) {
  try {
    const res = await api.post("/journals", journalData);

    return res.data;
  } catch (error) {
    console.error("건강일지 추가 실패", error);
    throw error;
  }
}

// 건강일지 단건 조회
export async function getOneJournal(id: number) {
  try {
    const res = await api.get(`/journals/${id}`);

    return res.data;
  } catch (error) {
    console.error("건강일지 단건 조회 실패", error);
    return null;
  }
}

// 건강일지 수정
export async function putJournal(journalData: OneJournalRequest, id: number) {
  try {
    const res = await api.put(`/journals/${id}`, journalData);

    return res.data;
  } catch (error) {
    console.error("건강일지 수정 실패", error);
    throw error;
  }
}

// 건강일지 삭제
export async function deleteJournal(id: number) {
  try {
    const res = await api.delete(`/journals/${id}`);

    return res.data;
  } catch (error) {
    console.error("건강일지 삭제 실패", error);
    throw error;
  }
}
