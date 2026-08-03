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
import {
  getArticleDetailClient,
  postArticle,
  putArticle,
} from "@/services/community.client";
import { Draft } from "@/types/community.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/components/domain/community/examples/categoryExamples";

interface ImageFileMap {
  blobUrl: string;
  file: File;
}

interface WritePageProps {
  articleId?: number;
}

export default function WritePage({ articleId }: WritePageProps) {
  const router = useRouter();
  const isEditMode = !!articleId;

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFiles, setImageFiles] = useState<ImageFileMap[]>([]);
  const [isLoading, setIsLoading] = useState(isEditMode);

  const { drafts, saveDraft, loadDrafts, deleteDraft } = useDraft();
  const { editor, characterCount } = useCommunityEditor();

  const selectedCategory = categories.find((c) => String(c.id) == categoryId);
  const categoryName = selectedCategory ? selectedCategory.name : "";

  useEffect(() => {
    if (!isEditMode || !articleId || !editor) return;

    const fetchOriginalArticle = async () => {
      try {
        const res = await getArticleDetailClient(articleId);
        if (res) {
          setTitle(res.title);
          setCategoryId(String(res.category.id));
          editor.commands.setContent(res.content);
        }
      } catch (error) {
        alert("기존 글을 불러오는데 실패했습니다.");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchOriginalArticle();
  }, [articleId, isEditMode, editor, router]);

  if (!editor || isLoading) return <div>로딩중...</div>;

  const handleImageFileAdd = (blobUrl: string, file: File) => {
    setImageFiles((prev) => [...prev, { blobUrl, file }]);
  };

  const handleOpenDrafts = async () => {
    await loadDrafts();
    setIsDraftModalOpen(true);
  };

  const handleSave = async () => {
    if(!title.trim() && editor.isEmpty) {
      return alert("저장할 내용이 없습니다.");
    }
    await saveDraft({title, content: editor.getHTML(), category: categoryName, updatedAt: new Date().toISOString()});
  }

  const handlePublish = async () => {
    if (!title.trim()) return alert("제목을 입력해주세요.");
    if (!categoryId) return alert("카테고리를 선택하세요.");
    if (editor.isEmpty) return alert("내용을 입력해주세요.");

    setIsSubmitting(true);

    try {
      if (isEditMode && articleId) {
        // 수정모드
        const res = await putArticle(
          {
            title,
            content: editor.getHTML(),
            categoryId: categoryName,
            imageUrl: "/logo/logo.png",
            draft: false,
          },
          articleId,
        );

        if (res && (res.isSuccess || res.ok)) {
          alert("수정이 완료되었습니다.");
          router.push(`/community/articles/${articleId}`);
        }
      } else {
        const res = await postArticle({
          title,
          content: editor.getHTML(),
          categoryId: categoryName,
          imageUrl: "/logo/logo.png",
          draft: false,
        });

        if (res && (res.isSuccess || res.id || res.data?.id)) {
          alert("글이 등록되었습니다.");
          router.push(`/community/articles`);
        } else {
          alert(res?.message || "글 등록에 실패했습니다.");
        }
      }
    } catch (error) {
      alert("요청 처리에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoadDraft = (draft: Draft) => {
    setTitle(draft.title);
    setCategoryId(draft.category);

    editor.commands.setContent(draft.content);

    setIsDraftModalOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <WriteHeader
        onOpenDrafts={isEditMode ? () => {} : handleOpenDrafts}
        onSave={handleSave}
        onPublish={handlePublish}
        isEditMode={isEditMode}
        isSubmitting={isSubmitting}
      />

      <WriteForm
        title={title}
        categoryId={categoryId}
        onTitleChange={setTitle}
        onCategoryChange={setCategoryId}
      />

      <WriteEditor
        editor={editor}
        characterCount={characterCount}
        onImageFileAdd={handleImageFileAdd}
      />

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
