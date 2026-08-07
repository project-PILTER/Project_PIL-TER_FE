import { User } from "./auth.type";

/*
  게시글에 관한 타입
*/
export interface Category {
  id: number;
  name: string;
}

export type Author=Omit<User, "email" | "createdAt">;

export type CommentUser = Omit<User, "email" | "createdAt">;

export interface Article {
  id: number; // 게시글 id
  title: string; // 게시글 제목 
  content: string; // 게시글 내용

  category: Category;

  author: Author;
  imageUrl: string;

  viewCount: number; // 조회수
  likeCount: number; // 좋아요 수
  commentCount: number; // 댓글 수
  isHot: boolean; // HOT한 게시물인가
  createdAt: string; // 생성일
  updatedAt: string; // 수정일
  comments: Comment[]; // 댓글들
}

export interface Draft {
  id: string;
  category: string;
  title: string;
  content: string;
  updatedAt: string;
}

export type DraftInput = Omit<Draft, "id" | "createdAt">;
export interface Comment {
  id: number;
  articleId: number;
  parentId: number | null // 대댓글시 부모 댓글 id
  author: CommentUser;
  content: string;
  likeCount: number;
  createdAt: string;
}

// api request 게시글
export interface ArticleInput {
  title: string;
  content: string;
  category: string;
  imageUrl?: string | null;
  draft: boolean;
  updatedAt: string;
}

export interface PostArticleInput {
  title: string;
  content: string;
  imageUrl?: string | null;
  draft: boolean;
  categoryId: string;
}

// getArticles에서 받는 response
export interface ArticleResponse<T> {
  content: T[];

  totalPages: number;
  totalElements: number;

  number: number;
  size: number;

  first: boolean;
  last: boolean;
  empty: boolean;
}

// api request 댓글
export interface CommentInput {
  communityArticleId: number;
  content: string;
}

// api request 임시저장
export interface TemporaryArticleInput {
  title: string;
  content: string;
  category: string;
  updatedAt: string;
}
