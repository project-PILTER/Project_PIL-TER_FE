export type conditionType = "GOOD" | "NORMAL" | "BAD";

export interface JournalDiary {
  id: number;
  userId: number;
  journalDate: string;
  conditionStatus: conditionType;
  painScore: number; // 1~10
  content: string;
  symptoms: string[];
  supplements: string[];
  createdAt: string;
}

export type JournalRequest = Omit<JournalDiary, 'id' | 'createdAt'>;