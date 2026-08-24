"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import { Medicines } from "@/types/medicine.type";
import MedicineReviewItem from "./medicineReviewItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import MedicineReviewModal from "./medicineReviewModal";
import { MessageCircle, Send } from "lucide-react";

interface MedicineReviewsProps {
  medicine: Medicines;
}

export default function MedicineReviews({ medicine }: MedicineReviewsProps) {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      alert("로그인 상태가 아닙니다. 홈으로 이동합니다.");
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <Loading />;
  }

  const handleReviewSuccess = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <div className="w-full p-6 border border-gray-100 rounded-2xl shadow-sm mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-[#615ed6]" />
          <h2 className="font-bold text-xl">사용자 후기</h2>
          <p className="text-gray-500">({medicine.totalReviewCount}개)</p>
        </div>

        <Button
          type="button"
          size="default"
          className="!w-[6.1875rem] !h-8 !px-2 !py-0 bg-[#615ed6]"
          onClick={() => setOpen(true)}
        >
          <Send className="h-4 w-4" />
          후기 작성
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        {medicine.reviews.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-4">
            <MedicineReviewItem commentAuthor={user} review={comment} />
          </div>
        ))}
      </div>
      <MedicineReviewModal
        open={open}
        onOpenChange={setOpen}
        medicineId={medicine.id}
        onSuccess={handleReviewSuccess}
      />
    </div>
  );
}
