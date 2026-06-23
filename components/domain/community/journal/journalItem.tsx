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
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const conditionConfig = {
  GOOD: {
    label: "좋음",
    className: "bg-green-100 text-green-600",
  },
  NORMAL: {
    label: "보통",
    className: "bg-yellow-100 text-yellow-600",
  },
  BAD: {
    label: "나쁨",
    className: "bg-red-100 text-red-600",
  },
};

export default function JournalItem({
  journal,
  onEdit,
  onDelete,
}: JournalItemProps) {
  const condition = conditionConfig[journal.conditionStatus];

  return (
    <Card className="p-6">
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

            <Badge>{condition.label}</Badge>

            <p>{journal.painScore}</p>
          </div>
        </div>
        <div>
          <Button onClick={() => onEdit?.(journal.id)}>
            <Pencil />
          </Button>
          <Button onClick={() => onDelete?.(journal.id)}>
            <Trash2 />
          </Button>
        </div>
      </div>

      <p>{journal.content}</p>
    </Card>
  );
}
