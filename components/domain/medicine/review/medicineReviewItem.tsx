"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types/auth.type";
import { MedicineReview } from "@/types/medicine.type";
import { getRelativeTime } from "@/utils/date";
import { Star } from "lucide-react";

interface MedicineReviewItemProps {
  commentAuthor: User;
  review: MedicineReview;
}

export default function MedicineReviewItem({
  commentAuthor,
  review,
}: MedicineReviewItemProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-start w-full">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={commentAuthor.profileImage ?? undefined}
            alt={commentAuthor.nickname}
          />
          <AvatarFallback>{commentAuthor.nickname}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm">{commentAuthor.nickname}</p>
              {commentAuthor.isMedicalExpert && (
                <Badge className="bg-[#eceef9] rounded-xl font-medium text-black text-xs px-2 py-2">
                  {commentAuthor.expertTitle || "인증의료인"}
                </Badge>
              )}
              <p className="text-xs" suppressHydrationWarning>
                {getRelativeTime(review.createdAt)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <p>{review.content}</p>
      </div>
    </div>
  );
}
