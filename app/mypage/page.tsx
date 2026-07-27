export const dynamic = 'force-dynamic';

import ActivityCountCard from "@/components/domain/mypage/activityCountCard";
import MonthlySummary from "@/components/domain/mypage/monthlySummary";
import { monthlyActivitySummary} from "@/components/domain/mypage/mypageExamples";
import ProfileSection from "@/components/domain/mypage/profileSection";
import RecentJournal from "@/components/domain/mypage/recentJournal";
import { getMypage } from "@/services/auth.server";
import { MonthlyActivitySummary, UserActivityCounts } from "@/types/auth.type";
import { RecentJournalRecord } from "@/types/journal.type";
import { redirect } from "next/navigation";

export default async function Mypage() {
  const mypageData = await getMypage();

  console.log("마이페이지 데이터", mypageData);

  if(!mypageData) {
    console.log("마이페이지 데이터 없음", mypageData);
    redirect("/");
  }

  let recordsArray: RecentJournalRecord[] = [];
  
  if(Array.isArray(mypageData.recentJournals) && mypageData.recentJournals.length > 0) {
    const conditionMap: Record<string, string> = {
      EXCELLENT: "아주 좋음",
      GOOD: "좋음",
      NORMAL: "보통",
      BAD: "나쁨",
      AWFUL: "아주 나쁨"
    }

    const recent = mypageData.recentJournals[0];
    const statusText = conditionMap[mypageData.recentJournals.condition] || "보통";

    recordsArray = [
      {
        id: String(recent.id ?? "1"),
        dateLabel: recent.dataLabel || recent.createdAt || "",
        status: statusText
      }
    ]
  }

  const userActivityCounts:UserActivityCounts = {
    totalPosts: mypageData.articleCount,
    totalLikesReceived: mypageData.totalLikesReceived,
    totalComments: mypageData.commentCount,
    totalHealthDays: mypageData.continuousHealthDays ?? 0
  }

  // const monthlyActivitySummary: MonthlyActivitySummary = {
  //   currentPosts: mypageData.current,
  //   targetPosts: 10,
  //   currentComments: 24,
  //   targetComments: 30,
  //   healthRecordRate: 90,
  // }

  return(
    <div className="w-full max-w-7xl mx-auto px-4 py-6 space-y-6">
      <ProfileSection data={mypageData} />

      <ActivityCountCard counts={userActivityCounts} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlySummary summary={monthlyActivitySummary} />
        <RecentJournal records={recordsArray} />
      </div>
    </div>
  )
}