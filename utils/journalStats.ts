import { JournalDiary } from "@/types/journal.type";

export function getJournalStats(journals: JournalDiary[]) {
  const totalRecords = journals.length;
  
  const averagePain =
    journals.length === 0
      ? 0
      : Number(
          (
            journals.reduce((sum, journal) => sum + journal.painScore, 0) /
            journals.length
          ).toFixed(1),
        );

  const conditionCount = {
    EXCELLENT: 0,
    GOOD: 0,
    NORMAL: 0,
    BAD: 0,
    AWFUL: 0
  };

  journals.forEach((journal) => {
    conditionCount[journal.conditionStatus]++;
  });

  const conditionLabel = {
    EXCELLENT: "아주 좋음",
    GOOD: "좋음",
    NORMAL: "보통",
    BAD: "나쁨",
    AWFUL: "아주 나쁨"
  };

  const averageCondition =
    conditionLabel[
      Object.entries(conditionCount).sort(
        (a, b) => b[1] - a[1],
      )[0][0] as keyof typeof conditionLabel
    ];

  const sortedDates = journals
    .map((journal) => journal.journalDate)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  let streak = 0;

  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) {
      streak++;
      continue;
    }

    const current = new Date(sortedDates[i - 1]);
    const next = new Date(sortedDates[i]);

    const diff = (current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return { streak, averageCondition, averagePain, totalRecords };
}
