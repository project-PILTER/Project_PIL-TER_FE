import { Article, ArticleResponse } from "@/types/community.type";
import { serverApiGet } from "./serverApi";

// 모든 게시글 가져오기
export async function getArticles(page: number): Promise<ArticleResponse<Article> | null> {
  try {
    const res = await serverApiGet<ArticleResponse<Article>>(`/community/articles?page=${page-1}&size=10`);

    return res;
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
    const res = await serverApiGet<Article>(`/community/articles/${id}`);

    return res;
  } catch (error) {
    console.error("특정 게시글 가져오기 실패", error);
    return null;
  }
}