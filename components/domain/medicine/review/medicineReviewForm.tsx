"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  MedicineReviewFormValues,
  medicineReviewSchema,
} from "@/schemas/medicine.schema";
import { postMedicineReview } from "@/services/medicine.client";
import { useAuthStore } from "@/stores/authStore";
import { MedicineReviewRequest } from "@/types/medicine.type";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  Star,
  ThumbsDown,
  ThumbsUp,
  TriangleAlert,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface MedicineReviewFormProps {
  onCancel: () => void;
  medicineId: number;
}

export default function MedicineReviewForm({
  onCancel,
  medicineId,
}: MedicineReviewFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MedicineReviewFormValues>({
    resolver: zodResolver(medicineReviewSchema),
    defaultValues: {
      rating: 0,
      content: "",
    },
  });
  const router = useRouter();

  const rating = watch("rating");
  const effect = watch("effect");
  const sideEffect = watch("sideEffect");

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

  const onSubmit = async (data: MedicineReviewFormValues) => {
    const request: MedicineReviewRequest = {
      rating: data.rating,
      effectType: data.effect,
      symptomTag: data.purpose,
      content: data.content,
    };
    try {
      const res = await postMedicineReview(medicineId, user.id, request);

      console.log("request 정보: ", request);

      console.log("post review 정보: ", res);
      alert("약 후기 작성이 완료되었습니다.");
      router.push("/medicines");
    } catch (error) {
      console.log("보내기 실패");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h3 className="font-medium">평점</h3>
      </div>

      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setValue("rating", star, { shouldValidate: true })}
            className="h-auto w-auto p-0 hover:bg-transparent focus:bg-transparent"
          >
            <Star
              className={`!h-8 !w-8 hover:text-yellow-300 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          </Button>
        ))}

        {errors.rating && (
          <p className="mt-2 text-sm text-red-500">{errors.rating.message}</p>
        )}
      </div>

      <div>
        <div className="mb-3 flex justify-between">
          <h3 className="font-medium">복용 목적</h3>
        </div>
        <Select
          onValueChange={(value) => {
            setValue("purpose", value as MedicineReviewFormValues["purpose"], {
              shouldValidate: true,
            });
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="복용 목적 선택" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="headache">두통</SelectItem>
            <SelectItem value="toothache">치통</SelectItem>
            <SelectItem value="fever">발열</SelectItem>
            <SelectItem value="muscle_pain">근육통</SelectItem>
            <SelectItem value="menstrual_pain">생리통</SelectItem>
            <SelectItem value="other">기타</SelectItem>
          </SelectContent>
        </Select>

        {errors.purpose && (
          <p className="mt-2 text-sm text-red-500">{errors.purpose.message}</p>
        )}
      </div>

      <div>
        <h3 className="mb-3 font-medium">효과 여부</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={() =>
              setValue("effect", "EFFECTIVE", { shouldValidate: true })
            }
            className={
              effect === "EFFECTIVE"
                ? "border-[#615ed6] bg-[#615ed6] text-white hover:bg-[#615ed6]"
                : "border-gray-200 bg-transparent text-black hover:bg-[#615ed6] hover:text-white"
            }
          >
            <ThumbsUp />
            효과 있음
          </Button>
          <Button
            type="button"
            onClick={() =>
              setValue("effect", "INEFFECTIVE", { shouldValidate: true })
            }
            className={
              effect === "INEFFECTIVE"
                ? "border-[#615ed6] bg-[#615ed6] text-white hover:bg-[#615ed6]"
                : "border-gray-200 bg-transparent text-black hover:bg-[#615ed6] hover:text-white"
            }
          >
            <ThumbsDown />
            효과 없음
          </Button>
        </div>

        {errors.effect && (
          <p className="mt-2 text-sm text-red-500">{errors.effect.message}</p>
        )}
      </div>

      <div>
        <h3 className="mb-3 font-medium">부작용 여부</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={() =>
              setValue("sideEffect", "yes", { shouldValidate: true })
            }
            className={
              sideEffect === "yes"
                ? "border-[#615ed6] bg-[#615ed6] text-white hover:bg-[#615ed6]"
                : "border-gray-200 bg-transparent text-black hover:bg-[#615ed6] hover:text-white"
            }
          >
            <TriangleAlert />
            있음
          </Button>
          <Button
            type="button"
            onClick={() =>
              setValue("sideEffect", "no", { shouldValidate: true })
            }
            className={
              sideEffect === "no"
                ? "border-[#615ed6] bg-[#615ed6] text-white hover:bg-[#615ed6] hover:text-white"
                : "border-gray-200 bg-transparent text-black hover:bg-[#615ed6] hover:text-white"
            }
          >
            <CheckCircle />
            없음
          </Button>
        </div>

        {errors.sideEffect && (
          <p className="mt-2 text-sm text-red-500">
            {errors.sideEffect.message}
          </p>
        )}
      </div>

      <div>
        <h3 className="mb-3 font-medium">후기내용</h3>
        <Textarea
          {...register("content")}
          placeholder="복용 후기를 자세히 작성해주세요..."
        ></Textarea>

        {errors.content && (
          <p className="mt-2 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="bg-[#615ED6] text-white hover:bg-[#7F82E8] mr-2"
      >
        후기 작성
      </Button>
      <Button type="button" variant="outline" onClick={onCancel}>
        취소
      </Button>
    </form>
  );
}
