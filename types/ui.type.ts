// 모달에서 사용하는 타입들

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