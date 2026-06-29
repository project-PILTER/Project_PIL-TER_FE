/*
  커뮤니티 관련 api 함수들 모음
*/

import { Article, ArticleInput, CommentInput,  } from "@/types/community.type";
import { api } from "./axios";

// 모든 게시글 가져오기
export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/articles`);

    if(!res.ok) {
      throw new Error(`특정 게시글 조회 실패 (Status: ${res.status})` );
    }

    return await res.json();
  } catch(error) {
    console.error("게시글 가져오기 실패");
    throw(error);
  }
  
}

// 새로운 게시글 등록
export async function postArticle(articleData: ArticleInput) {
  try {
    const res = await api.post("/community/articles", articleData);

    return res.data;
  } catch(error) {
    console.error("게시글 등록 실패", error);
    throw error;
  }
}

// 특정 게시글 조회
export async function getArticleDetail(id: number): Promise<Article> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/articles/${id}`);

    if(!res.ok) {
      throw new Error(`특정 게시글 조회 실패 (Status: ${res.status})` );
    }

    return await res.json();
  } catch(error) {
    console.error("특정 게시글 가져오기 실패", error);
    throw error;
  }
}

// 게시글 수정
export async function putArticle(articleData: ArticleInput, id: number) {
  try {
    const res = await api.put(`/community/articles/${id}`, articleData);

    return res.data;
  } catch(error) {
    console.error("게시글 수정 실패", error);
    throw error;
  }
}

// 게시글 삭제
export async function deleteArticle(id: number) {
  try {
    const res = await api.delete(`/community/articles/${id}`);

    return res.data;
  } catch(error) {
    console.error("게시글 삭제 실패", error);
    throw error;
  }
}

// 임시저장 글 조회
export async function getTemporaryArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community/articles/drafts`);

    if(!res.ok) {
      throw new Error(`임시저장 게시글 조회 실패 (Status: ${res.status})`);
    }
    return await res.json();
  } catch (error) {
    console.error("임시 저장 글 조회 실패", error);
    throw error;
  }
}

//댓글

// 댓글 작성
export async function postComment(commentData: CommentInput) {
  try {
    const res = await api.post(`/community/comments`, commentData);

    return res.data;
  } catch(error) {
    console.error("댓글 작성 실패", error);
    throw error;
  }
}

// 댓글 수정
export async function putComment(commentData: CommentInput, id: number) {
  try {
    const res = await api.put(`/community/comments/${id}`, commentData.content);

    return res.data;
  } catch(error) {
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

// 좋아요 보내기
export async function postLike(id: number) {
  try {
    const res = await api.post(`/community/articles/${id}/likes`);

    return res.data;
  } catch (error) {
    console.error("좋아요 실패", error);
    throw error;
  }
}