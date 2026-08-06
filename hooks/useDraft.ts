"use client";

import {
  deleteTemporaryArticle,
  getTemporaryArticles,
  postTemporaryArticle,
} from "@/services/community.client";
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
          category: String(article.category || ""),
          title: article.title,
          content: article.content,
          updatedAt: article.updatedAt,
        }));

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

  const saveDraft = async (draft: DraftInput, e?: React.SyntheticEvent) => {
    if(e) {
      e.preventDefault();
    }
    
    try {
      const res = await postTemporaryArticle({
        title: draft.title,
        content: draft.content,
        category: draft.category,
        updatedAt: draft.updatedAt
      });
      
      if (typeof res === "number" || typeof res?.data === "number") {
        alert("임시저장 되었습니다.");
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
    try {
      const res = await deleteTemporaryArticle(Number(id));

      if (res.isSuccess || res.status === 200 || res.status === 201) {
        alert("임시저장 글이 삭제되었습니다.");
        await loadDrafts();
        return true;
      }
    } catch (error) {
      alert("임시저장 삭제에 실패했습니다. 다시시도해주세요.");
      return false;
    }
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
