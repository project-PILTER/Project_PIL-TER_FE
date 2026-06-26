import { MonthlyActivitySummary, UserActivityCounts } from "@/types/auth.type";

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