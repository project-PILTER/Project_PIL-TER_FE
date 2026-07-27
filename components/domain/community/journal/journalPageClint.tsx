"use client";

import { JournalFormValues } from "@/schemas/journal.schema";
import { JournalDiary } from "@/types/journal.type";
import { useState } from "react";
import JournalSummary from "./journalSummary";
import JournalList from "./journalList";
import JournalCalendar from "./journalCalendar";
import JournalModal from "./journalModal";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { deleteJournal, postJournal, putJournal } from "@/services/journal.client";
import { useRouter } from "next/navigation";

interface JournalPageClientProps {
  journals: JournalDiary[];
}

export default function JournalPageClient({
  journals,
}: JournalPageClientProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedJournal, setSelectedJournal] = useState<
    JournalDiary | undefined
  >();

  const handleEdit = async(journal: JournalDiary) => {
    setMode("edit");
    setSelectedJournal(journal);
    setOpen(true);
  };

  const handleSubmit = async(data: JournalFormValues) => {
    try {
      if(mode === "edit" && selectedJournal) {
        await putJournal(data, selectedJournal.id);
        alert("건강기록이 수정되었습니다.");
      } else {
        await postJournal(data);
        alert("건강기록이 등록되었습니다.");
      }

      setOpen(false);
      router.refresh();
    } catch (error) {
      alert("건강기록 처리 실패");
      setOpen(false);
    }
  };

  const handleDelete = async(id: number) => {
    try {
      await deleteJournal(id);
      alert("건강기록이 삭제되었습니다.");
    } catch (error) {
      alert("건강기록 삭제 실패");
    }
  }

  const filteredJournals = selectedDate
    ? journals.filter(
        (journal) => journal.journalDate === format(selectedDate, "yyyy-MM-dd"),
      )
    : journals;

  return (
    <div className="container mx-auto w-full max-w-7xl p-6 space-y-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">건강 일지</h1>
          <p className="text-muted-foreground mt-1">
            매일의 건강 상태를 기록하고 관리하세요.
          </p>
        </div>
        <Button
          className="bg-[#625FD7] hover:bg-[#7F7CE8] text-white gap-4 h-12"
          size="lg"
          onClick={() => {
            setMode("create");
            setOpen(true);
          }}
        >
          <Plus />
          오늘 기록하기
        </Button>
      </div>
      <JournalSummary journals={journals} />

      <div className="grid gap-6 lg:grid-cols-[1fr_21.875rem]">
        <div className="space-y-4">
          <JournalList journals={filteredJournals} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
        <div>
          <JournalCalendar
            journals={journals}
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
      <JournalModal
        open={open}
        onOpenChange={setOpen}
        mode={mode}
        journal={selectedJournal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
