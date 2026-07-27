import { Article } from "@/types/community.type";
import { serverApiGet } from "./serverApi";

// 모든 게시글 가져오기
export async function getArticles(): Promise<Article[] | null> {
  try {
    const res = await serverApiGet("/community/articles");

    return await res.data;
  } catch (error) {
    console.error("게시글 가져오기 실패", error);
    return null;
  }
}

// 특정 게시글 조회
export async function getArticleDetail(
  id: number,
): Promise<Article | null> {
  try {
    const res = await serverApiGet(`/community/articles/${id}`);

    return res.data;
  } catch (error) {
    console.error("특정 게시글 가져오기 실패", error);
    return null;
  }
}