import { MonthlyActivitySummary, UserActivityCounts } from "@/types/auth.type";
import { RecentJournalRecord } from "@/types/journal.type";

export const userActivityCounts: UserActivityCounts = {
  totalPosts: 42,
  totalComments: 156,
  totalLikesReceived: 892,
  totalHealthDays: 127,
};

export const monthlyActivitySummary: MonthlyActivitySummary = {
  currentPosts: 8,
  targetPosts: 10,
  currentComments: 24,
  targetComments: 30,
  healthRecordRate: 90,
};

export const mockHealthRecords: RecentJournalRecord[] = [
  {
    id: "journal-001",
    dateLabel: "2026-06-29",
    status: "좋음",
  },
  {
    id: "journal-002",
    dateLabel: "2026-06-28",
    status: "보통",
  },
  {
    id: "journal-003",
    dateLabel: "2026-06-27",
    status: "나쁨",
  },
  {
    id: "journal-004",
    dateLabel: "2026-06-26",
    status: "좋음",
  },
  {
    id: "journal-005",
    dateLabel: "2026-06-25", // 커스텀 string 날짜 포맷 예시
    status: "보통",
  }
];