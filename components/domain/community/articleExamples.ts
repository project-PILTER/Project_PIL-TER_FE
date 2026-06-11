import { Article } from "@/types/community.type";

export const articles: Article[] = [
  {
    id: 1,
    title: "두통이 3일째 계속되는데 병원 가야 할까요?",
    content: "진통제를 먹어도 잠깐만 괜찮아지고 다시 아프네요.",
    category: {
      id: 1,
      name: "두통"
    },
    author: {
      id: "user001",
      nickname: "건강최고",
      profileImage: "/logo/logo.png"
    },
    viewCount: 523,
    likeCount: 31,
    commentCount: 14,
    isHot: true,
    createdAt: "2026-06-11",
    updatedAt: "2026-06-11"
  },
  {
    id: 2,
    title: "감기약 먹고 졸린 이유가 뭔가요?",
    content: "낮에 먹었는데 너무 졸려서 업무 집중이 안 됩니다.",
    category: {
      id: 2,
      name: "감기"
    },
    author: {
      id: "user002",
      nickname: "직장인A",
      profileImage: "/logo/logo.png"
    },
    viewCount: 201,
    likeCount: 12,
    commentCount: 4,
    isHot: false,
    createdAt: "2026-06-11",
    updatedAt: "2026-06-11"
  },
  {
    id: 3,
    title: "비염 때문에 잠을 못 자겠어요",
    content: "밤마다 코가 막혀서 자주 깨는데 좋은 방법 있을까요?",
    category: {
      id: 3,
      name: "비염"
    },
    author: {
      id: "user003",
      nickname: "코막힘",
      profileImage: "/logo/logo.png"
    },
    viewCount: 412,
    likeCount: 22,
    commentCount: 18,
    isHot: true,
    createdAt: "2026-06-10",
    updatedAt: "2026-06-10"
  },
  {
    id: 4,
    title: "소화불량에 효과 있었던 약 추천",
    content: "기름진 음식 먹고 나면 항상 속이 더부룩합니다.",
    category: {
      id: 4,
      name: "소화불량"
    },
    author: {
      id: "user004",
      nickname: "위튼튼",
      profileImage: "/logo/logo.png"
    },
    viewCount: 178,
    likeCount: 9,
    commentCount: 3,
    isHot: false,
    createdAt: "2026-06-09",
    updatedAt: "2026-06-09"
  },
  {
    id: 5,
    title: "허리 통증 때문에 운동을 쉬고 있습니다",
    content: "앉아 있을 때 특히 심한데 스트레칭 추천 부탁드립니다.",
    category: {
      id: 5,
      name: "근육통"
    },
    author: {
      id: "user005",
      nickname: "운동러",
      profileImage: "/logo/logo.png"
    },
    viewCount: 320,
    likeCount: 15,
    commentCount: 7,
    isHot: false,
    createdAt: "2026-06-08",
    updatedAt: "2026-06-08"
  },
  {
    id: 6,
    title: "알레르기 약 장기 복용해도 괜찮나요?",
    content: "계절마다 복용 중인데 걱정이 됩니다.",
    category: {
      id: 6,
      name: "알레르기"
    },
    author: {
      id: "user006",
      nickname: "꽃가루",
      profileImage: "/logo/logo.png"
    },
    viewCount: 287,
    likeCount: 18,
    commentCount: 12,
    isHot: false,
    createdAt: "2026-06-08",
    updatedAt: "2026-06-08"
  },
  {
    id: 7,
    title: "불면증 때문에 멜라토닌 먹어보신 분?",
    content: "실제로 효과가 있는지 궁금합니다.",
    category: {
      id: 7,
      name: "수면"
    },
    author: {
      id: "user007",
      nickname: "잠좀자자",
      profileImage: "/logo/logo.png"
    },
    viewCount: 640,
    likeCount: 44,
    commentCount: 26,
    isHot: true,
    createdAt: "2026-06-07",
    updatedAt: "2026-06-07"
  },
  {
    id: 8,
    title: "눈이 자주 건조한데 인공눈물 추천",
    content: "컴퓨터를 오래 사용해서 그런지 눈이 뻑뻑합니다.",
    category: {
      id: 8,
      name: "안구건조증"
    },
    author: {
      id: "user008",
      nickname: "개발자",
      profileImage: "/logo/logo.png"
    },
    viewCount: 192,
    likeCount: 10,
    commentCount: 5,
    isHot: false,
    createdAt: "2026-06-06",
    updatedAt: "2026-06-06"
  },
  {
    id: 9,
    title: "고혈압 약 복용 시간 언제가 좋나요?",
    content: "아침과 저녁 중 어느 때가 더 효과적인지 궁금합니다.",
    category: {
      id: 9,
      name: "고혈압"
    },
    author: {
      id: "user009",
      nickname: "건강관리",
      profileImage: "/logo/logo.png"
    },
    viewCount: 501,
    likeCount: 28,
    commentCount: 11,
    isHot: true,
    createdAt: "2026-06-05",
    updatedAt: "2026-06-05"
  },
  {
    id: 10,
    title: "위염 증상 있을 때 먹기 좋은 음식",
    content: "자극적이지 않은 식단 추천 부탁드립니다.",
    category: {
      id: 10,
      name: "위염"
    },
    author: {
      id: "user010",
      nickname: "식단관리",
      profileImage: "/logo/logo.png"
    },
    viewCount: 260,
    likeCount: 13,
    commentCount: 6,
    isHot: false,
    createdAt: "2026-06-04",
    updatedAt: "2026-06-04"
  }
];