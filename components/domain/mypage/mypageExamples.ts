import { MonthlyActivitySummary, RecentJournalRecord, UserActivityCounts } from "@/types/auth.type";

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
    note: "아침 조깅 3km 완료 및 비타민 섭취, 전반적으로 몸이 가벼움",
    status: "좋음",
  },
  {
    id: "journal-002",
    dateLabel: "2026-06-28",
    note: "늦은 시간까지 이어진 프로젝트 야근으로 인해 수면 시간이 4시간 미만이라 피곤함",
    status: "보통",
  },
  {
    id: "journal-003",
    dateLabel: "2026-06-27",
    note: "주말 회식으로 인한 과식 및 야식 섭취, 소화 불량 증세 있음",
    status: "나쁨",
  },
  {
    id: "journal-004",
    dateLabel: "2026-06-26",
    note: "헬스장 상체 웨이트 트레이닝 1시간 루틴 소화, 약간의 근육통",
    status: "좋음",
  },
  {
    id: "journal-005",
    dateLabel: "2026-06-25", // 커스텀 string 날짜 포맷 예시
    note: "가벼운 산책 및 스트레칭 위주의 휴식일",
    status: "보통",
  }
];