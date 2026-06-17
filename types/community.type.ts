/*
  게시글에 관한 타입
*/
export interface Category {
  id: number;
  name: string;
}

export interface Author {
  id: string;
  nickname: string;
  profileImage: string;
}

export interface Article {
  id: number; // 게시글 id
  title: string; // 게시글 제목 
  content: string; // 게시글 내용

  category: Category;

  author: Author;

  viewCount: number; // 조회수
  likeCount: number; // 좋아요 수
  commentCount: number; // 댓글 수
  isHot: boolean; // HOT한 게시물인가
  createdAt: string; // 생성일
  updatedAt: string; // 수정일
}

export interface Draft {
  id: string;
  categoryId: string;
  title: string;
  content: string;
  createdAt: string;
}

export type DraftInput = Omit<Draft, "id" | "createdAt">;