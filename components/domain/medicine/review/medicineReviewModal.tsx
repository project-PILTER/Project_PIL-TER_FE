import Modal from "@/components/common/modal";
import MedicineReviewForm from "./medicineReviewForm";
import { MedicineReview } from "@/types/medicine.type";

interface MedicineReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  medicineId: number;
  review?: MedicineReview | null;
  onSuccess: () => void;
}

export default function MedicineReviewModal({
  open,
  onOpenChange,
  mode,
  medicineId,
  review,
  onSuccess,
}: MedicineReviewModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="2xl"
      title={mode === "create" ? "약 후기 작성" : "약 후기 수정"}
      description="복용 후의 경험한 효과와 부작용을 남겨주세요."
    >
      <MedicineReviewForm
        defaultValues={
          mode === "edit" && review
            ? {
                rating: review.rating,
                effect: review.effectType,
                purpose: review.symptomTag,
                content: review.content,
                sideEffect: "no",
              }
            : {
                rating: 0,
                content: "",
              }
        }
        onCancel={() => onOpenChange(false)}
        onSuccess={onSuccess}
        medicineId={medicineId}
        mode={mode}
      />
    </Modal>
  );
}
