"use client";
/*
  게시글 작성 페이지
  카테고리 기능, 제목 입력 기능 추가 예정
*/
import DraftModal from "@/components/domain/community/write/draftModal";
import WriteEditor from "@/components/domain/community/write/writeEditor";
import WriteForm from "@/components/domain/community/write/writeForm";
import WriteHeader from "@/components/domain/community/write/writeHeader";
import useCommunityEditor from "@/hooks/useCommunityEditor";
import useDraft from "@/hooks/useDraft";
import { Draft } from "@/types/community.type";
import { useState } from "react";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const { drafts, saveDraft, loadDrafts, deleteDraft } = useDraft();
  const {editor, characterCount} = useCommunityEditor();

  if (!editor) return null;

  const handleOpenDrafts = () => {
    loadDrafts();
    setIsDraftModalOpen(true);
  }

  const handleSave = () => {
    saveDraft({title, categoryId, content: editor.getHTML()})
  }

  const handlePublish = () => {
    console.log("게시")
  }

  const handleLoadDraft = (draft: Draft) => {
    setTitle(draft.title);
    setCategoryId(draft.categoryId);

    editor.commands.setContent(draft.content);

    setIsDraftModalOpen(false);
  }

  return (
    <div className="w-4xl mx-auto mt-4">
      <WriteHeader
        onOpenDrafts={handleOpenDrafts}
        onSave={handleSave}
        onPublish={handlePublish}
      />
      
      <WriteForm title={title} categoryId={categoryId} onTitleChange={setTitle} onCategoryChange={setCategoryId} />

      <WriteEditor editor={editor} characterCount={characterCount} />

      <DraftModal
        open={isDraftModalOpen}
        onOpenChange={setIsDraftModalOpen}
        drafts={drafts}
        onLoad={handleLoadDraft}
        onDelete={deleteDraft}
      />
    </div>
  );
}
