// ui에서 사용하는 타입들

import { Editor } from "@tiptap/react";
export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  footer?: React.ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export interface ToolbarProps {
  editor: Editor | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPreview: () => void;
}

export interface ToolButtonProps {
  tooltip: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}