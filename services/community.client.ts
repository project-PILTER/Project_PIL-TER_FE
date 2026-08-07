/*
  커뮤니티 관련 api 함수들 모음
*/

import {
  Article,
  ArticleInput,
  CommentInput,
  PostArticleInput,
  PutCommentRequest,
  TemporaryArticleInput,
} from "@/types/community.type";
import { api } from "./axios";

// 새로운 게시글 등록
export async function postArticle(articleData: PostArticleInput) {
  try {
    const res = await api.post("/community/articles", articleData);

    return res.data;
  } catch (error) {
    console.error("게시글 등록 실패", error);
    throw error;
  }
}

// 게시글 수정
export async function putArticle(articleData: ArticleInput, id: number) {
  try {
    const res = await api.put(`/community/articles/${id}`, articleData);

    return res.data;
  } catch (error) {
    console.error("게시글 수정 실패", error);
    throw error;
  }
}

// 게시글 삭제
export async function deleteArticle(id: number) {
  try {
    const res = await api.delete(`/community/articles/${id}`);

    return res.data;
  } catch (error) {
    console.error("게시글 삭제 실패", error);
    throw error;
  }
}

// 특정 게시글 조회
export async function getArticleDetailClient(
  id: number,
): Promise<Article | null> {
  try {
    const res = await api.get(`/community/articles/${id}`);

    return res.data;
  } catch (error) {
    console.error("특정 게시글 가져오기 실패", error);
    return null;
  }
}

// 임시저장 글 조회
export async function getTemporaryArticles(): Promise<Article[] | null> {
  try {
    const res = await api.get("/community/articles/drafts");

    return await res.data;
  } catch (error) {
    console.error("임시 저장 글 조회 실패", error);
    return null;
  }
}

// 임시저장 단건 조회(이어쓰기용)
export async function getTemporaryDetailArticle(
  id: number,
): Promise<Article[] | null> {
  try {
    const res = await api.get(`/community/articles/drafts/${id}`);

    return res.data;
  } catch (error) {
    console.error("임시저장 단건 조회 실패", error);
    return null;
  }
}

// 임시저장 생성
export async function postTemporaryArticle(data: TemporaryArticleInput) {
  try {
    const res = await api.post("/community/articles/drafts", data);
    return res.data;
  } catch (error) {
    console.error("임시저장 생성 실패", error);
    return null;
  }
}

// 임시저장 글 삭제
export async function deleteTemporaryArticle(id: number) {
  try {
    const res = await api.delete(`/community/articles/drafts/${id}`);
    return res.data;
  } catch (error) {
    console.error("임시저장 글 삭제 실패", error);
    return null;
  }
}

//댓글

// 댓글 작성
export async function postComment(commentData: CommentInput) {
  try {
    const res = await api.post(`/community/comments`, commentData);

    return res.data;
  } catch (error) {
    console.error("댓글 작성 실패", error);
    throw error;
  }
}

// 댓글 수정
export async function putComment(data: PutCommentRequest, id: number) {
  try {
    const res = await api.put(`/community/comments/${id}`, data);

    return res.data;
  } catch (error) {
    console.error("댓글 수정 실패", error);
    throw error;
  }
}

// 댓글 삭제
export async function deleteComment(id: number) {
  try {
    const res = await api.delete(`/community/comments/${id}`);

    return res.data;
  } catch (error) {
    console.error("댓글 삭제 실패", error);
    throw error;
  }
}

// 좋아요

// 게시글 좋아요
export async function postLike(id: number) {
  try {
    const res = await api.post(`/community/articles/${id}/likes`);

    return res.data;
  } catch (error) {
    console.error("좋아요 실패", error);
    throw error;
  }
}

// 댓글 좋아요
export async function postCommentLike(id: number) {
  try {
    const res = await api.post(`/community/comments/${id}/likes`);

    return res.data;
  } catch (error) {
    console.error("댓글 좋아요 실패", error);
    throw error;
  }
}
