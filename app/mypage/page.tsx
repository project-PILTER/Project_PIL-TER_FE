import ActivityCountCard from "@/components/domain/mypage/activityCountCard";
import MonthlySummary from "@/components/domain/mypage/monthlySummary";
import { mockHealthRecords, monthlyActivitySummary, userActivityCounts } from "@/components/domain/mypage/mypageExamples";
import ProfileSection from "@/components/domain/mypage/profileSection";
import RecentJournal from "@/components/domain/mypage/recentJournal";

export default function Mypage() {
  return(
    <div className="w-7xl mx-auto px-4 py-6 space-y-6">
      <ProfileSection />

      <ActivityCountCard counts={userActivityCounts} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlySummary summary={monthlyActivitySummary} />
        <RecentJournal records={mockHealthRecords} />
      </div>
    </div>
  )
}