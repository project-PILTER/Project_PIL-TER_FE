"use client";

import { Draft, DraftInput } from "@/types/community.type";
import { useState } from "react";

export default function useDraft() {
  const [drafts, setDrafts] = useState<Draft[]>([]);

  const saveDraft = (draft: DraftInput) => {
    const savedDrafts: Draft[] = JSON.parse(localStorage.getItem("community-drafts") ?? "[]");

    const newDraft = {
      ...draft,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    savedDrafts.push(newDraft);

    localStorage.setItem("community-drafts", JSON.stringify(savedDrafts));
    setDrafts(savedDrafts);

    alert("저장이 완료되었습니다.");
  }

  const deleteDraft = async (id: string) => {
    const updatedDrafts = drafts.filter((draft) => draft.id !== id)

    setDrafts(updatedDrafts);

    localStorage.setItem("community-drafts", JSON.stringify(updatedDrafts));
  }

  const loadDrafts = () => {
    const savedDrafts: Draft[] = JSON.parse(localStorage.getItem("community-drafts") ?? "[]");

    setDrafts(savedDrafts);
  }
  return{ drafts, saveDraft, deleteDraft, loadDrafts };
}