import { Card } from "@/components/ui/card";
import { JournalDiary } from "@/types/journal.type";
import { getJournalStats } from "@/utils/journalStats";
import { Activity, CalendarDays, Smile, TrendingUp } from "lucide-react";

interface JournalSummaryProps {
  journals: JournalDiary[];
}

export default function JournalSummary({ journals }: JournalSummaryProps) {
  const { streak, averageCondition, averagePain, totalRecords } =
    getJournalStats(journals);
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-full">
            <CalendarDays className="text-primary h-6 w-6" />
          </div>
          <div>
            <p className="text-primary text-2xl font-bold">{streak}일</p>
            <p className="text-muted-foreground text-sm">연속 기록</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <Smile className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{averageCondition}</p>
            <p className="text-muted-foreground text-sm">평균 기분</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            <Activity className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{averagePain}/10</p>
            <p className="text-muted-foreground text-sm">평균 통증</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <TrendingUp className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{totalRecords}</p>
            <p className="text-muted-foreground text-sm">총 기록</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
