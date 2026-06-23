import { JournalDiary } from "@/types/journal.type";

export const journalExamples: JournalDiary[] = [
  {
    id: 1,
    userId: 1,
    journalDate: "2026-06-23",
    conditionStatus: "GOOD",
    painScore: 2,
    content:
      "오늘은 컨디션이 좋아서 아침에 가볍게 산책을 다녀왔다. 업무 집중도도 높았고 특별한 증상은 없었다.",
    symptoms: [],
    supplements: ["비타민C", "오메가3"],
    createdAt: "2026-06-23T20:30:00",
  },
  {
    id: 2,
    userId: 1,
    journalDate: "2026-06-22",
    conditionStatus: "NORMAL",
    painScore: 4,
    content:
      "오후부터 약간의 피로감이 있었지만 일상생활에는 큰 지장이 없었다.",
    symptoms: ["피로감"],
    supplements: ["비타민D"],
    createdAt: "2026-06-22T21:10:00",
  },
  {
    id: 3,
    userId: 1,
    journalDate: "2026-06-21",
    conditionStatus: "BAD",
    painScore: 8,
    content:
      "두통이 심해서 대부분의 시간을 휴식하며 보냈다. 집중하기 어려웠다.",
    symptoms: ["두통", "어지러움"],
    supplements: ["타이레놀"],
    createdAt: "2026-06-21T19:50:00",
  },
  {
    id: 4,
    userId: 1,
    journalDate: "2026-06-20",
    conditionStatus: "GOOD",
    painScore: 1,
    content:
      "몸 상태가 매우 좋았다. 운동 후에도 피로감이 거의 없었고 기분도 좋았다.",
    symptoms: [],
    supplements: ["오메가3", "마그네슘"],
    createdAt: "2026-06-20T22:00:00",
  },
  {
    id: 5,
    userId: 1,
    journalDate: "2026-06-19",
    conditionStatus: "NORMAL",
    painScore: 3,
    content:
      "목이 조금 따끔거렸지만 심하지는 않았다. 수분을 충분히 섭취했다.",
    symptoms: ["인후통"],
    supplements: ["비타민C"],
    createdAt: "2026-06-19T20:40:00",
  },
  {
    id: 6,
    userId: 1,
    journalDate: "2026-06-18",
    conditionStatus: "BAD",
    painScore: 7,
    content:
      "감기 증상으로 인해 하루 종일 몸이 무겁고 피곤했다.",
    symptoms: ["기침", "피로감", "콧물"],
    supplements: ["종합감기약"],
    createdAt: "2026-06-18T18:30:00",
  },
  {
    id: 7,
    userId: 1,
    journalDate: "2026-06-17",
    conditionStatus: "GOOD",
    painScore: 2,
    content:
      "충분한 수면을 취해서 하루 종일 상쾌했다. 업무 효율도 높았다.",
    symptoms: [],
    supplements: ["마그네슘"],
    createdAt: "2026-06-17T21:00:00",
  },
  {
    id: 8,
    userId: 1,
    journalDate: "2026-06-16",
    conditionStatus: "NORMAL",
    painScore: 5,
    content:
      "오랫동안 앉아서 일한 탓인지 허리에 약간의 통증이 있었다.",
    symptoms: ["허리 통증"],
    supplements: ["오메가3"],
    createdAt: "2026-06-16T22:20:00",
  },
  {
    id: 9,
    userId: 1,
    journalDate: "2026-06-15",
    conditionStatus: "GOOD",
    painScore: 1,
    content:
      "전반적으로 건강 상태가 양호했다. 저녁에 운동도 무리 없이 마쳤다.",
    symptoms: [],
    supplements: ["비타민D", "오메가3"],
    createdAt: "2026-06-15T20:15:00",
  },
  {
    id: 10,
    userId: 1,
    journalDate: "2026-06-14",
    conditionStatus: "BAD",
    painScore: 9,
    content:
      "편두통과 메스꺼움이 심해 병원 진료를 받았다.",
    symptoms: ["편두통", "메스꺼움"],
    supplements: ["진통제"],
    createdAt: "2026-06-14T17:45:00",
  },
];