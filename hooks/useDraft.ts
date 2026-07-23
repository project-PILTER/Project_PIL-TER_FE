"use client";

import { getTemporaryArticles, postTemporaryArticle } from "@/services/community.service";
import { Article, Draft, DraftInput } from "@/types/community.type";
import { useCallback, useEffect, useState } from "react";

export default function useDraft() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadDrafts = useCallback(async () => {
    setIsLoading(true);
    try {
      const res: Article[] | null = await getTemporaryArticles();
      if (res) {
        const mappedDrafts: Draft[] = res.map((article) => ({
          id: String(article.id),
          categoryId: String(article.category?.name || ""),
          title: article.title,
          content: article.content,
          createdAt: article.createdAt
        }))

        setDrafts(mappedDrafts);
      } else {
        setDrafts([]);
        return;
      }
    } catch (error) {
      console.error("임시저장 조회 실패");
      setDrafts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveDraft = async (draft: DraftInput) => {
    try {
      const res = await postTemporaryArticle({
      title: draft.title,
      content: draft.content,
      categoryId: draft.categoryId
      });
      if(res.isSuccess || res.status === 200 || res.id) {
        await loadDrafts();
        return true;
      } else {
        alert("임시저장 실패");
      }  
    } catch (error) {
      console.error("임시저장 에러");
      return false;
    }
  };

  const deleteDraft = async (id: string) => {
    // const res = await deleteDraft(id);
    // await loadDrafts();
    // if(res) {
    //   alert("임시저장 글 삭제 완료");
    // } else {
    //   alert("임시저장 삭제 실패");
    // }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) {
        await loadDrafts();
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [loadDrafts]);

  return { drafts, saveDraft, deleteDraft, loadDrafts, isLoading };
}
