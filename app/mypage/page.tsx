import { mypageInfo } from "@/components/domain/auth/mypageExamples";
import ActivityCountCard from "@/components/domain/mypage/activityCountCard";
import MonthlySummary from "@/components/domain/mypage/monthlySummary";
import { monthlyActivitySummary, userActivityCounts } from "@/components/domain/mypage/mypageExamples";
import ProfileSection from "@/components/domain/mypage/profileSection";
import RecentJournal from "@/components/domain/mypage/recentJournal";
import { getMypage } from "@/services/auth.service";
import { RecentJournalRecord } from "@/types/journal.type";
import { redirect } from "next/navigation";

export default async function Mypage() {
  // const mypageData = await getMypage();

  // if(!mypageData) {
  //   redirect("/");
  // }

  let recordsArray: RecentJournalRecord[] = [];
  
  if(mypageInfo.recentJournals) {
    const conditionMap: Record<string, string> = {
      EXCELLENT: "아주 좋음",
      GOOD: "좋음",
      NORMAL: "보통",
      BAD: "나쁨",
      AWFUL: "아주 나쁨"
    }
    const statusText = conditionMap[mypageInfo.recentJournals.condition] || "보통";

    recordsArray = [
      {
        id: "1",
        dateLabel: mypageInfo.recentJournals.dataLabel,
        status: statusText
      }
    ]
  }

  return(
    <div className="w-7xl mx-auto px-4 py-6 space-y-6">
      <ProfileSection data={mypageInfo} />

      <ActivityCountCard counts={userActivityCounts} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlySummary summary={monthlyActivitySummary} />
        <RecentJournal records={recordsArray} />
      </div>
    </div>
  )
}