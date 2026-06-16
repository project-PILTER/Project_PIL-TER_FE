import { Button } from "@/components/ui/button";
import { WriteHeaderProps } from "@/types/community.type";
import { FileText, Navigation, Save } from "lucide-react";

export default function WriteHeader({onOpenDrafts, onSave, onPublish}:WriteHeaderProps) {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={onOpenDrafts}>
        <FileText size={18}/>
        임시저장
        </Button>
      <Button variant="outline" onClick={onSave}>
        <Save size={18} />
        저장
        </Button>
      <Button className="bg-[#615ed6]" onClick={onPublish}>
        <Navigation size={18} />
        등록
      </Button>
    </div>
  );
}
