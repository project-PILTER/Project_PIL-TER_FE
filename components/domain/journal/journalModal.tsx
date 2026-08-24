import { JournalDiary } from "@/types/journal.type";
import JournalForm from "./journalForm";
import { JournalFormValues } from "@/schemas/journal.schema";
import Modal from "@/components/common/modal";

interface JournalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  journal?: JournalDiary;
  onSubmit: (data: JournalFormValues) => void;
}

export default function JournalModal({
  open,
  onOpenChange,
  mode,
  journal,
  onSubmit,
}: JournalModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="2xl"
      title={mode === "create" ? "오늘의 건강 기록" : "건강 기록 수정"}
      description="오늘의 건강 상태를 기록해보세요."
    >
      <JournalForm
        defaultValues={
          mode === "edit" && journal
            ? {
                conditionStatus: journal.conditionStatus,
                painScore: journal.painScore,
                symptoms: journal.symptoms,
                supplements: journal.supplements,
                content: journal.content,
              }
            : undefined
        }
        onSubmit={(data) => {
          onSubmit(data);
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </Modal>
  );
}
