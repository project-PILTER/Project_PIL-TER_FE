"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  postMedicineBookmark,
  postMedicineLike,
} from "@/services/medicine.client";
import { useAuthStore } from "@/stores/authStore";
import { Medicines } from "@/types/medicine.type";
import { Bookmark, Heart, MessageCircle, Pill, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface MedicineHeaderProps {
  medicine: Medicines;
}

export default function MedicineHeader({ medicine }: MedicineHeaderProps) {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !user) {
      alert("로그인 상태가 아닙니다. 홈으로 이동합니다.");
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <Loading />;
  }
  const hasImage =
    typeof medicine.itemImage === "string" &&
    medicine.itemImage.trim() !== "null";

  const displayMedicineName = medicine.medicineName.replace(
    /\s*\(수출명:.*?\)/g,
    "",
  );

  const handleBookmark = async () => {
    try {
      const res = await postMedicineBookmark(medicine.id, user.id);

      if (res === "북마크가 설정되었습니다.") {
        alert("약 북마크가 등록되었습니다.");
      } else {
        alert("약 북마크가 취소되었습니다.");
      }

      router.refresh();
    } catch (error) {
      console.error("약 북마크 실패");
      alert("약 북마크가 등록되지 않았습니다. 다시시도해주세요.");
    }
  };

  const handleLike = async () => {
    try {
      const res = await postMedicineLike(medicine.id);
      console.log("res 정보: ", res);

      if (res === "인기(Hot) 약품으로 지정되었습니다.") {
        alert("약 좋아요 등록 성공");
      } else {
        alert("약 좋아요 취소");
      }
    } catch (error) {
      console.error("약 좋아요 실패");
      alert("약 좋아요가 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <Card className="w-full p-5">
      <div className="flex gap-6">
        <div className="w-48 h-48 flex items-center justify-center bg-[#efeefa] font-bold hover:text-[#615ED6]">
          {hasImage ? (
            <Image
              className="w-full h-full object-contain"
              width={192}
              height={192}
              src={medicine.itemImage!}
              alt={medicine.medicineName}
            />
          ) : (
            <Pill className="w-10 h-10 text-[#a7a6e8]" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-4xl font-semibold">{displayMedicineName}</h3>

          <p className="mt-1 text-md text-gray-500 mt-2">
            {medicine.manufacturer}
          </p>

          <h3 className="mt-2 text-lg">{medicine.efficiency}</h3>

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${star <= medicine.averageRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}

              <span className="ml-1 text-lg font-bold">
                {medicine.averageRating.toFixed(1)}
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MessageCircle className="w-4 h-4" />
              <span>후기 {medicine.totalReviewCount}개</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Bookmark className="w-4 h-4" />
              <span>북마크 {medicine.bookmarkCount}개</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Heart className="w-4 h-4" />
              <span>좋아요 개</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Button
              className="bg-gray-100 text-gray-500 border-gray-100 rounded-lg hover:bg-[#615ed6]"
              onClick={handleBookmark}
            >
              <Bookmark />
              북마크
            </Button>

            <Button
              className="bg-gray-100 text-gray-500 hover:bg-[#615ed6]"
              onClick={handleLike}
            >
              <Heart />
              좋아요
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
