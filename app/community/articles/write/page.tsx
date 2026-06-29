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
import { postArticle } from "@/services/community.service";
import { Draft } from "@/types/community.type";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ImageFileMap {
  blobUrl: string;
  file: File;
}

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFiles, setImageFiles] = useState<ImageFileMap[]>([]);

  const { drafts, saveDraft, loadDrafts, deleteDraft } = useDraft();
  const {editor, characterCount} = useCommunityEditor();

  if (!editor) return null;

  const handleImageFileAdd = (blobUrl: string, file: File) => {
    setImageFiles((prev) => [...prev, {blobUrl, file}]);
  }

  const handleOpenDrafts = () => {
    loadDrafts();
    setIsDraftModalOpen(true);
  }

  const handleSave = () => {
    saveDraft({title, categoryId, content: editor.getHTML()})
  }

  const handlePublish = async() => {
    if(!title.trim()) return alert("제목을 입력해주세요.");
    if(!categoryId) return alert("카테고리를 선택하세요.");
    if(editor.isEmpty) return alert("내용을 입력해주세요.");

    setIsSubmitting(true);

    // try {
    //   let contentHtml = editor.getHTML();
    //   let firstImageUrl: string | null = null;
    //   const currentImagesInEditor = imageFiles.filter((img) => contentHtml.includes(img.blobUrl));
    //   for(let i = 0; i < currentImagesInEditor.length; i++) {
    //     const {blobUrl, file} = currentImagesInEditor[i];

    //   }
    //   const response = await postArticle({
    //     title,
    //     content: editor.getHTML(),
    //     categoryId: Number(categoryId),
    //     draft: false,
    //     imageUrl
    //   })
    // } catch (error) {
      
    // }
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

      <WriteEditor editor={editor} characterCount={characterCount} onImageFileAdd={handleImageFileAdd}/>

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
