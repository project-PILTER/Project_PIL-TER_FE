"use client";

import Modal from "@/components/common/modal";
import { Input } from "@/components/ui/input";
import { ProfileFormValues, profileSchema } from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { putProfile } from "@/services/auth.client";
import { useRouter } from "next/navigation";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  nickname: string;
  email: string;
}

export default function ProfileModal({
  open,
  onOpenChange,
  nickname,
  email
}: ProfileModalProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (open) {
      reset({
        nickname,
        email,
      });
    }
  }, [open, nickname, email, reset]);

  // imageUrl은 나중에 다시 처리
  const onSubmit = async(data: ProfileFormValues) => {
    try {
      const requestData = {
        nickname: data.nickname,
        profileImageUrl: "/logo/logo.png" 
      }
      await putProfile(requestData);
      
      alert("프로필이 성공적으로 수정되었습니다.");
      onOpenChange(false);

      router.refresh();
    } catch (error) {
      alert("프로필 수정 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="프로필 수정"
      description="개인 정보를 수정합니다."
      size="md"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
        <div className="space-y-2">
          <label>닉네임</label>

          <Input
            {...register("nickname")}
            placeholder="닉네임을 입력해주세요"
          />

          {errors.nickname && <p className="text-sm text-red-500">{errors.nickname.message}</p>}
        </div>

        <div className="space-y-2">
          <label>이메일</label>

          <Input {...register("email")} placeholder="이메일을 입력해주세요." readOnly/>
          <p className="text-xs text-gray-500">이메일은 변경할 수 없습니다.</p>

          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            취소
          </Button>
          <Button className="bg-[#5c59da]" type="submit">{isSubmitting ? "저장 중..." : "저장"}</Button>
        </div>
      </form>
    </Modal>
  );
}
