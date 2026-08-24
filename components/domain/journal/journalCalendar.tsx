"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { JournalDiary } from "@/types/journal.type";
import { parse } from "date-fns";
import { ko } from "date-fns/locale";

interface JournalCalendarProps {
  journals: JournalDiary[];
  selectedDate?: Date;
  onSelect: (date: Date | undefined) => void;
}

export default function JournalCalendar({
  journals,
  selectedDate,
  onSelect,
}: JournalCalendarProps) {
  if (!journals || !Array.isArray(journals) || journals.length === 0) {
    return (
      <Calendar
        mode="single"
        locale={ko}
        selected={selectedDate}
        onSelect={onSelect}
        className="w-full"
      />
    );
  }
  const goodDays = journals
    .filter((journal) => journal.conditionStatus === "GOOD")
    .map((journal) => parse(journal.journalDate, "yyyy-MM-dd", new Date()));

  const normalDays = journals
    .filter((journal) => journal.conditionStatus === "NORMAL")
    .map((journal) => parse(journal.journalDate, "yyyy-MM-dd", new Date()));

  const badDays = journals
    .filter((journal) => journal.conditionStatus === "BAD")
    .map((journal) => parse(journal.journalDate, "yyyy-MM-dd", new Date()));

  return (
    <Card className="w-full rounded-3xl p-6 shadow-sm">
      <Calendar
        mode="single"
        locale={ko}
        selected={selectedDate}
        onSelect={onSelect}
        className="w-full"
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

      <div className="mt-4 flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span>좋음</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-500" />
          <span>보통</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span>나쁨</span>
        </div>
      </div>
    </Card>
  );
}
