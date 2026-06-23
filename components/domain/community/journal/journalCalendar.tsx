import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { JournalDiary } from "@/types/journal.type";

interface JournalCalendarProps {
  journals: JournalDiary[];
  selectedDate?: Date;
  onSelect: (date: Date | undefined) => void;
}

export default function journalCalendar({
  journals,
  selectedDate,
  onSelect,
}: JournalCalendarProps) {
  const goodDays = journals
    .filter((journal) => journal.conditionStatus === "GOOD")
    .map((journal) => new Date(journal.journalDate));
  const normalDays = journals
    .filter((journal) => journal.conditionStatus === "NORMAL")
    .map((journal) => new Date(journal.journalDate));
  const badDays = journals
    .filter((journal) => journal.conditionStatus === "BAD")
    .map((journal) => new Date(journal.journalDate));
  return (
    <Card>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        className="rounded-x1 border"
        modifiers={{
          good: goodDays,
          normal: normalDays,
          bad: badDays,
        }}
        modifiersClassNames={{
          good: "journalGood",
          normal: "journalNormal",
          bad: "journalBad",
        }}
      />
    </Card>
  );
}
