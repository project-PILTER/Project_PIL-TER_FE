"use client";

import ConfirmDialog from "@/components/common/confirmDialog";
import Dropdown from "@/components/common/dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { deleteMedicineReview } from "@/services/medicine.client";
import { User } from "@/types/auth.type";
import { MedicineReview } from "@/types/medicine.type";
import { DropdownOption } from "@/types/ui.type";
import { formatDateKorean } from "@/utils/date";
import {
  Heart,
  MessageCircle,
  Pencil,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MedicineReviewItemProps {
  commentAuthor: User;
  review: MedicineReview;
  onEdit: (data: MedicineReview) => void;
}

export default function MedicineReviewItem({
  commentAuthor,
  review,
  onEdit,
}: MedicineReviewItemProps) {
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const dropdownOptions: DropdownOption[] = [
    {
      label: "수정",
      icon: <Pencil className="w-3 h-3" />,
      onClick: () => onEdit(review),
    },
    {
      label: "삭제",
      icon: <Trash2 className="w-3 h-3" />,
      onClick: async () => {
        setDeleteOpen(true);
      },
    },
  ];

  const symptomTagLabel: Record<MedicineReview["symptomTag"], string> = {
    headache: "두통",
    toothache: "치통",
    fever: "발열",
    muscle_pain: "근육통",
    menstrual_pain: "생리통",
    other: "기타",
  };

  const handleDelete = async () => {
    try {
      await deleteMedicineReview(review.id);

      alert("약 후기 삭제가 완료되었습니다.");
      setDeleteOpen(false);
      router.refresh();
    } catch (error) {
      console.error("약 후기 삭제 실패");
      alert("약 후기 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={review.profileImage || "/logo/logo.png"}
              alt={review.nickname}
            />
            <AvatarFallback>{review.nickname}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm">{review.nickname}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <p suppressHydrationWarning>
                {formatDateKorean(review.createdAt)}
              </p>

              <span>·</span>

              <Badge
                variant="outline"
                className="font-normal text-xs px-2 py-1"
              >
                {symptomTagLabel[review.symptomTag]}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex items-center gap-0.5 mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>

          <Dropdown options={dropdownOptions} align="end" />
        </div>
      </div>

      <div className="mt-4">
        {review.effectType === "EFFECTIVE" ? (
          <Badge className="bg-green-100 text-green-600 hover:bg-green-100">
            <ThumbsUp className="w-3 h-3 mr-1" />
            효과 있음
          </Badge>
        ) : (
          <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">
            <ThumbsDown className="w-3 h-3 mr-1" />
            효과 없음
          </Badge>
        )}
      </div>

      <p className="mt-3 text-sm leading-6 text-gray-600">{review.content}</p>

      <div className="flex items-center gap-2 mt-4 text-xs">
        <Button
          type="button"
          className="flex items-center gap-1 bg-transparent text-gray-500"
        >
          <Heart />
          좋아요 {review.likeCount}
        </Button>

        <Button
          type="button"
          className="flex items-center gap-1 bg-transparent text-gray-500"
        >
          <MessageCircle />
          댓글
        </Button>
      </div>

      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="후기를 삭제하시겠습니까?"
        description="삭제한 후기는 복구할 수 없습니다. 정말 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={handleDelete}
      />
    </div>
  );
}
