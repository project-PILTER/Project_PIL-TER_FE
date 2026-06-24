"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import JournalModal from "../domain/community/journal/journalModal";

export default function JournalCreateButton() {
  const [open, setOpen] = useState(false);
  return(
    <div>
      <Button onClick={() => {
        setOpen(true);
      }}>
        오늘 기록하기
      </Button>

      <JournalModal open={open} onOpenChange={setOpen} />
    </div>
  )
}