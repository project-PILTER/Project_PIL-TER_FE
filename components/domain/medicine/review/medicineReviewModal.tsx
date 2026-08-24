import Modal from "@/components/common/modal";
import MedicineReviewForm from "./medicineReviewForm";

interface MedicineReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  medicineId: number;
  onSuccess?: () => void;
}

export default function MedicineReviewModal({
  open,
  onOpenChange,
  medicineId,
  onSuccess,
}: MedicineReviewModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="2xl"
      title="약품 후기 작성"
      description="복용 후의 경험한 효과와 부작용을 남겨주세요."
    >
      <MedicineReviewForm
        onCancel={() => onOpenChange(false)}
        medicineId={medicineId}
      />
    </Modal>
  );
}
