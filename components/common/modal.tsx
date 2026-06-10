/*
  모달 컴포넌트
  로그인, 게시글 수정, 건강일지 수정 등에 사용하기 위한 공용 컴포넌트
*/

import { ModalProps } from "@/types/modal.type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const sizeClasses = {
  sm: "max-w-sm h-[18.75rem]",
  md: "max-w-md h-[25rem]",
  lg: "max-w-lg h-[31.25rem]",
  xl: "max-w-xl h-[37.5rem]",
};

export default function Modal({
  open,
  onOpenChange,
  children,
  title,
  description,
  size,
  footer,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={sizeClasses[size ?? "md"]}>
        <DialogHeader>
          {title ? <DialogTitle>{title}</DialogTitle> : <p>PIL-TER</p>}
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : (
            <p>PILTER에 오신 것을 환영합니다.</p>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
