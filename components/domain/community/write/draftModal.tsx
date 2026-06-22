import { Button } from "@/components/ui/button";
import DraftCard from "./draftCard";
import Modal from "@/components/common/modal";
import { Draft } from "@/types/community.type";

interface DraftModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drafts: Draft[];
  onLoad: (draft: Draft) => void;
  onDelete: (draftId: string) => void;
}

export default function DraftModal({
  open,
  onOpenChange,
  drafts,
  onLoad,
  onDelete,
}: DraftModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="임시 저장한 글"
      description="저장한 게시글 목록입니다."
      size="lg"
    >
      <div className="flex-1 space-y-3 overflow-y-auto pr-2">
        {drafts.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            저장된 게시글이 없습니다.
          </p>
        ) : (
          drafts.map((draft) => (
            <DraftCard
              key={draft.id}
              draft={draft}
              onLoad={() => onLoad(draft)}
              onDelete={() => onDelete(draft.id)}
            />
          ))
        )}
      </div>
      <div>
        <Button onClick={() => onOpenChange(false)}>닫기</Button>
      </div>
    </Modal>
  );
}
