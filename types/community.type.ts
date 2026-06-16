/*
  게시글에 관한 타입
*/

import { Editor } from "@tiptap/react";
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

export interface CommunityListProps {
  article: Article;
}

export interface WriteHeaderProps {
  onOpenDrafts: () => void;
  onSave: () => void;
  onPublish: () => void;
}

export interface WriteEditorProps {
  editor: Editor;
  characterCount: number;
}

export interface WriteFormProps {
  title: string;
  categoryId: string;
  onTitleChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export interface Draft {
  id: string;
  categoryId: string;
  title: string;
  content: string;
  createdAt: string;
}

export type DraftInput = Omit<Draft, "id" | "createdAt">;

export interface DraftCardProps {
  draft: Draft;
  onLoad: () => void;
  onDelete: () => void;
}

export interface DraftModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drafts: Draft[];
  onLoad: (draft: Draft) => void;
  onDelete: (draftId: string) => void;
}