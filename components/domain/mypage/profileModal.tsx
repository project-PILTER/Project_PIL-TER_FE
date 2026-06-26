import Modal from "@/components/common/modal";
import { Input } from "@/components/ui/input";
import { ProfileFormValues, profileSchema } from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

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
  email,
}: ProfileModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
    onOpenChange(false);
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
          <Button className="bg-[#5c59da]" type="submit">저장</Button>
        </div>
      </form>
    </Modal>
  );
}
