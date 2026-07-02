import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { RecentJournalRecord } from "@/types/journal.type";
import { getRelativeTime } from "@/utils/date";

interface RecentJournalProps {
  records: RecentJournalRecord[];
}

export default function RecentJournal({ records }: RecentJournalProps) {
  const getStatusColor: Record<string, string> = {
    좋음: "bg-green-50 text-green-500 border-green-100",
    보통: "bg-yellow-50 text-yellow-500 border-yellow-100",
    나쁨: "bg-red-50 text-red-500 border-red-100",
  };
  return (
    <Card className="p-6 border border-gray-100 shadow-sm rounded-2xl h-full flex flex-col justify-start gap-6">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-[#5c59da]" />
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">최근 건강 기록</h2>
      </div>

      <div className="space-y-3">
        {records.slice(0,4).map((record) => (
          <div
            key={record.id}
            className="bg-gray-100 dark:bg-[#141529] p-2 rounded-lg flex items-center justify-between gap-4"
          >
            <div className="flex flex-col gap-1 min-w-0 flex-1 text-left">
              <span className="text-sm font-bold text-gray-700 dark:text-[#686b85]">
                {getRelativeTime(record.dateLabel)}
              </span>
            </div>
            <Badge
              variant="outline"
              className={`text-xs font-semibold px-3 py-1 rounded-md border shadow-none ${getStatusColor[record.status] || "bg-gray-50 text-gray-500 border-gray-100"}`}
            >
              {record.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
