import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { JournalDiary } from "@/types/journal.type";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Pencil, Trash2 } from "lucide-react";

interface JournalItemProps {
  journal: JournalDiary;
  onEdit?: (journal: JournalDiary) => void;
  onDelete?: (id: number) => void;
}

const conditionConfig = {
  EXCELLENT: {
    label: "아주 좋음",
    className: ""
  },
  GOOD: {
    label: "좋음",
    className: " ml-2 bg-green-100 text-green-600",
  },
  NORMAL: {
    label: "보통",
    className: "ml-2 bg-yellow-100 text-yellow-600",
  },
  BAD: {
    label: "나쁨",
    className: "ml-2 bg-red-100 text-red-600",
  },
  AWFUL: {
    label: "아주 나쁨",
    className: ""
  }
};

export default function JournalItem({
  journal,
  onEdit,
  onDelete,
}: JournalItemProps) {
  const condition = conditionConfig[journal.conditionStatus];

  return (
    <Card className="relative p-6 overflow-hidden">
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-1",
          journal.conditionStatus === "GOOD" && "bg-green-500",
          journal.conditionStatus === "NORMAL" && "bg-yellow-500",
          journal.conditionStatus === "BAD" && "bg-red-500",
        )}
      />
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold">
              {format(new Date(journal.journalDate), "M월 d일 (EEE)", {
                locale: ko,
              })}
            </h3>

            <Badge className={condition.className}>{condition.label}</Badge>

            <p className="ml-2 text-muted-foreground text-sm">
              {" "}
              통증 {journal.painScore}/10
            </p>
          </div>
        </div>
        <div>
          <Button
            className="bg-transparent text-black dark:text-white hover:text-white hover:bg-[#7F82E8] rounded-lg"
            onClick={() => onEdit?.(journal)}
          >
            <Pencil />
          </Button>
          <Button
            className="bg-transparent text-red-500 hover:bg-[#7F82E8]"
            onClick={() => onDelete?.(journal.id)}
          >
            <Trash2 />
          </Button>
        </div>
      </div>

      <p>{journal.content}</p>
    </Card>
  );
}
