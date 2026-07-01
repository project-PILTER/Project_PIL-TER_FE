import { Button } from "@/components/ui/button";
import { FileText, Navigation, Save } from "lucide-react";

interface WriteHeaderProps {
  onOpenDrafts: () => void;
  onSave: () => void;
  onPublish: () => void;
  isEditMode?: boolean;
}

export default function WriteHeader({
  onOpenDrafts,
  onSave,
  onPublish,
  isEditMode,
}: WriteHeaderProps) {
  return (
    <div className="flex justify-end gap-2">
      {!isEditMode && (
        <Button variant="outline" onClick={onOpenDrafts}>
          <FileText size={18} />
          임시저장 목록
        </Button>
      )}

      {!isEditMode && (
        <Button variant="outline" onClick={onSave}>
          <Save size={18} />
          임시저장
        </Button>
      )}

      <Button className="bg-[#615ed6]" onClick={onPublish}>
        <Navigation size={18} />
        {isEditMode ? "수정하기" : "등록하기"}
      </Button>
    </div>
  );
}
