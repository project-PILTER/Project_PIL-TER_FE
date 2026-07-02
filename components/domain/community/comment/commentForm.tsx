"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Author } from "@/types/community.type";
import defaultProfile from "../../../../public/logo/logo.png"
import { useForm } from "react-hook-form";
import { CommentFormData, commentSchema } from "@/schemas/community.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/types/auth.type";
import { useEffect } from "react";

interface CommentFormProps {
  author?: Author | User | null;
  onSubmit: (content: string) => Promise<void>;
  initialContent?: string;
}

export default function CommentForm({author, onSubmit, initialContent = ""}:CommentFormProps) {
  const profileSrc = author?.profileImage || defaultProfile;

  const isEditMode = !!initialContent;

  const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: initialContent
    }
  })

  useEffect(() => {
    if(initialContent) {
      reset({content: initialContent})
    }
  }, [initialContent, reset])
  

  const onValidSubmit = async(data: CommentFormData) => {
    try {
      await onSubmit(data.content);
      reset({content: ""});
    } catch (error) {
      console.error("댓글 등록 실패");
    }
  }
  return (
    <form onSubmit={handleSubmit(onValidSubmit)} className="w-full">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src={profileSrc} className="w-full h-full" width={40} height={40} alt="프로필" />
        </div>
        <div className="flex-1">
          <Textarea
            {...register("content")}
            placeholder="댓글을 입력하세요..."
            disabled={isSubmitting}
            className="h-20 min-h-[5rem] w-full border-gray-200 text-sm focus-visible:border-violet-500 resize-none p-3 transition-all"
          />
          {errors.content && (<span className="text-xs text-red-500">{errors.content.message}</span>)}
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <Button type="submit" className="gap-2 text-white font-medium bg-[#615ed6]" disabled={isSubmitting}>
          <SendHorizonal className="w-4 h-4"/>
          {isSubmitting ? (isEditMode ? "수정 중" : "등록 중") : (isEditMode ? "수정 완료" : "댓글 작성")}
        </Button>
      </div>
    </form>
  );
}
