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

export interface RecentJournalRecord {
  id: string;
  dateLabel: "오늘" | "어제" | "2일 전" | string; // ui 표시 날짜
  status: "아주 좋음" | "좋음" | "보통" | "나쁨" | "아주 나쁨" | string;
}

export type JournalRequest = Omit<JournalDiary, 'id' | 'createdAt' | 'userId'>;

export type OneJournalRequest = Omit<JournalDiary, 'id' | 'createdAt' | 'userId' | 'journalDate'>