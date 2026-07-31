import { Button } from "@/components/ui/button";
import { FileText, Loader2, Navigation, Save } from "lucide-react";

interface WriteHeaderProps {
  onOpenDrafts: () => void;
  onSave: () => void;
  onPublish: () => void;
  isEditMode?: boolean;
  isSubmitting?: boolean;
}

export default function WriteHeader({
  onOpenDrafts,
  onSave,
  onPublish,
  isEditMode,
  isSubmitting
}: WriteHeaderProps) {
  return (
    <div className="flex justify-end gap-2">
      {!isEditMode && (
        <Button variant="outline" onClick={onOpenDrafts} disabled={isSubmitting}>
          <FileText size={18} />
          임시저장 목록
        </Button>
      )}

      {!isEditMode && (
        <Button type="button" variant="outline" onClick={onSave} disabled={isSubmitting}>
          <Save size={18} />
          임시저장
        </Button>
      )}

      <Button className="bg-[#615ed6]" onClick={onPublish} disabled={isSubmitting}>
        {isSubmitting ? (
          <div>
            <Loader2 size={18} />
            {isEditMode ? "수정 중..." : "등록 중..."}
          </div>
        ) : (
          <div>
            <Navigation size={18} />
            {isEditMode ? "수정" : "등록"}
          </div>
        )}
        
      </Button>
    </div>
  );
}
