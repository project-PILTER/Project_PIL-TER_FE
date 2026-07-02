import { Article } from "@/types/community.type";

export const articles: Article[] = [
  {
    id: 1,
    title: "항암 치료 중 식사 관리 및 면역력 높이는 방법",
    content: "항암 치료를 받으실 때 가장 중요한 것 중 하나가 영양 섭취입니다. 입맛이 없으시더라도 단백질 위주의 식단을 구성하셔야 하며, 날음식은 감염 위험이 있으니 반드시 피하셔야 합니다. 보호자 분들이 자주 묻는 질문들을 정리했습니다.",
    category: { id: 2, name: "암" },
    author: { 
      id: 1, 
      nickname: "김종양 박사", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "혈액종양내과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 3420,
    likeCount: 210,
    commentCount: 2,
    isHot: true,
    createdAt: "2026-06-25T10:00:00Z",
    updatedAt: "2026-06-25T14:30:00Z",
    comments: [
      {
        id: 1001,
        articleId: 1,
        parentId: null,
        author: { 
          id: 11, // 변경: "user_normal_01" -> 11
          nickname: "희망을그대에게", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "어머니가 곧 2차 항암 들어가시는데 식단을 어떻게 짜야 할지 막막했습니다. 전문의 선생님 글이라 정말 큰 도움이 되네요.",
        likeCount: 15,
        createdAt: "2026-06-25T11:15:00Z"
      },
      {
        id: 1002,
        articleId: 1,
        parentId: 1001,
        author: { 
          id: 1, // 변경: "user_expert_01" -> 1 (위의 김종양 박사와 동일인)
          nickname: "김종양 박사", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: true,
          expertTitle: "혈액종양내과 전문의"
        },
        content: "어머님의 쾌유를 빕니다. 고기를 삶거나 푹 익혀서 부드럽게 드시도록 도와주세요. 궁금한 점이 있다면 언제든 편하게 댓글 남겨주세요.",
        likeCount: 8,
        createdAt: "2026-06-25T11:45:00Z"
      }
    ]
  },
  {
    id: 2,
    title: "직장인 번아웃 증후군 자가진단 및 극복 루틴",
    content: "최근 부쩍 무기력하고 출근길이 공포스럽게 느껴진다면 번아웃 증후군을 의심해봐야 합니다. 일과 일상의 명확한 경계를 긋고, 하루 10분씩 온전히 나만을 위한 이완 시간을 갖는 정신건강 관리법을 소개합니다.",
    category: { id: 3, name: "정신건강" },
    author: { 
      id: 2, // 변경: "user_expert_02" -> 2
      nickname: "마음테라피", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "정신건강의학과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 2450,
    likeCount: 185,
    commentCount: 1,
    isHot: true,
    createdAt: "2026-06-28T09:00:00Z",
    updatedAt: "2026-06-28T09:00:00Z",
    comments: [
      {
        id: 2001,
        articleId: 2,
        parentId: null,
        author: { 
          id: 12, // 변경: "user_normal_02" -> 12
          nickname: "야근요정", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "글 읽는데 눈물이 핑 도네요. 딱 제 이야기입니다. 오늘부터 퇴근 후엔 업무 메신저 알림을 꺼야겠어요.",
        likeCount: 32,
        createdAt: "2026-06-28T13:20:00Z"
      }
    ]
  },
  {
    id: 3,
    title: "일상 속 바른 자세를 위한 거북목 예방 3분 스트레칭",
    content: "모니터를 오랫동안 보는 현대인들에게 거북목은 고질병입니다. 거북목 상태가 지속되면 목디스크로 발전할 수 있으니 의자에서 가볍게 할 수 있는 맥켄지 운동과 턱 당기기 스트레칭을 생활화해보세요.",
    category: { id: 1, name: "공통" },
    author: { 
      id: 13, // 변경: "user_normal_03" -> 13
      nickname: "건강지킴이", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: false
    },
    imageUrl: "/logo/logo.png",
    viewCount: 980,
    likeCount: 42,
    commentCount: 0,
    isHot: false,
    createdAt: "2026-06-29T12:10:00Z",
    updatedAt: "2026-06-29T12:10:00Z",
    comments: []
  },
  {
    id: 4,
    title: "유방암 자가진단 시기와 올바른 방법 (동영상 가이드 포함)",
    content: "유방암은 조기 발견 시 생존율이 매우 높은 암 중 하나입니다. 매달 생리가 끝난 후 3~5일 사이에 거울을 보며 모양을 관찰하고, 누워서 촉진을 진행하는 올바른 자가진단 루틴을 공유해 드립니다.",
    category: { id: 2, name: "암" },
    author: { 
      id: 3, // 변경: "user_expert_03" -> 3
      nickname: "박유방 의사", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "외과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 1890,
    likeCount: 124,
    commentCount: 1,
    isHot: false,
    createdAt: "2026-06-30T15:00:00Z",
    updatedAt: "2026-06-30T15:00:00Z",
    comments: [
      {
        id: 4001,
        articleId: 4,
        parentId: null,
        author: { 
          id: 14, // 변경: "user_normal_04" -> 14
          nickname: "건강한내일", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "시기가 언제인지 늘 헷갈렸는데 생리 끝나고 하는 거였군요! 좋은 팁 감사합니다.",
        likeCount: 14,
        createdAt: "2026-06-30T16:40:00Z"
      }
    ]
  },
  {
    id: 5,
    title: "불면증을 극복하는 수면 위생 환경 만들기 5원칙",
    content: "잠자리에 누워서 30분 이상 뒤척이신다면 수면 위생을 점검해야 합니다. 침실 온도는 20도 안팎 유지, 수면 1시간 전 스마트폰 금지, 낮 시간 햇볕 쬐기 등 뇌가 숙면 모드로 들어갈 수 있도록 돕는 조건들을 알아봅니다.",
    category: { id: 3, name: "정신건강" },
    author: { 
      id: 2, // 변경: "user_expert_02" -> 2 (마음테라피)
      nickname: "마음테라피", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "정신건강의학과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 3120,
    likeCount: 240,
    commentCount: 1,
    isHot: true,
    createdAt: "2026-07-01T02:00:00Z",
    updatedAt: "2026-07-01T04:15:00Z",
    comments: [
      {
        id: 5001,
        articleId: 5,
        parentId: null,
        author: { 
          id: 15, // 변경: "user_normal_05" -> 15
          nickname: "프로꿀잠러", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "휴대폰 멀리 두고 자는 것만으로도 수면의 질이 확 달라지더라고요. 추천합니다.",
        likeCount: 22,
        createdAt: "2026-07-01T03:00:00Z"
      }
    ]
  },
  {
    id: 6,
    title: "암 환우를 위한 건강한 저염식 밑반찬 레시피 공유",
    content: "항암 치료 시 입맛을 돋우면서도 나트륨을 과하게 섭취하지 않는 간장 무조림, 버섯 들깨볶음 레시피입니다. 자극적인 양념 대신 다시마 멸치 육수와 들깨가루를 활용해 깊은 맛을 냈습니다.",
    category: { id: 2, name: "암" },
    author: { 
      id: 11, // 변경: "user_normal_01" -> 11 (희망을그대에게)
      nickname: "희망을그대에게", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: false
    },
    imageUrl: "/logo/logo.png",
    viewCount: 1420,
    likeCount: 78,
    commentCount: 0,
    isHot: false,
    createdAt: "2026-07-01T08:30:00Z",
    updatedAt: "2026-07-01T08:30:00Z",
    comments: []
  },
  {
    id: 7,
    title: "영양제, 언제 먹어야 가장 효과적일까요? (식전 vs 식후)",
    content: "종합비타민, 오메가3, 유산균, 칼슘제 등 몸에 좋은 영양제도 먹는 시간에 따라 흡수율이 완전히 달라집니다. 수용성과 지용성 비타민의 특성에 맞춰 올바른 섭취 타임라인을 짜 드립니다.",
    category: { id: 1, name: "공통" },
    author: { 
      id: 4, // 변경: "user_expert_04" -> 4
      nickname: "약사김씨", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "가정의학과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 4120,
    likeCount: 310,
    commentCount: 1,
    isHot: true,
    createdAt: "2026-07-01T23:00:00Z",
    updatedAt: "2026-07-01T23:00:00Z",
    comments: [
      {
        id: 7001,
        articleId: 7,
        parentId: null,
        author: { 
          id: 16, // 변경: "user_normal_06" -> 16
          nickname: "건강염려증", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "유산균은 공복에, 오메가3는 식후에! 머릿속에 꼭 저장해놓고 실천하겠습니다.",
        likeCount: 19,
        createdAt: "2026-07-02T01:10:00Z"
      }
    ]
  },
  {
    id: 8,
    title: "가벼운 우울감과 우울증의 차이, 치료가 필요한 순간은?",
    content: "누구나 일시적으로 기분이 가라앉을 수 있습니다. 하지만 우울한 기분이 2주 이상 지속되고 식욕 저하, 의욕 상실, 수면 장애 등이 동반된다면 마음의 감기라 불리는 우울증일 가능성이 높습니다. 주저 말고 전문가를 찾으셔야 합니다.",
    category: { id: 3, name: "정신건강" },
    author: { 
      id: 2, // 변경: "user_expert_02" -> 2 (마음테라피)
      nickname: "마음테라피", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "정신건강의학과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 1750,
    likeCount: 95,
    commentCount: 1,
    isHot: false,
    createdAt: "2026-07-02T02:00:00Z",
    updatedAt: "2026-07-02T02:45:00Z",
    comments: [
      {
        id: 8001,
        articleId: 8,
        parentId: null,
        author: { 
          id: 12, // 변경: "user_normal_02" -> 12 (야근요정)
          nickname: "야근요정", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "정신과 방문에 대한 문턱이 많이 낮아졌으면 좋겠어요. 아프면 병원에 가는 게 당연하니까요.",
        likeCount: 26,
        createdAt: "2026-07-02T03:15:00Z"
      }
    ]
  },
  {
    id: 9,
    title: "대장암 예방을 위한 식습관과 정기 대장내시경의 중요성",
    content: "서구화된 식습관으로 인해 국내 대장암 발병률이 꾸준히 늘고 있습니다. 과도한 적색육 섭취를 줄이고 신선한 야채와 통곡물을 가까이하세요. 특히 50세 이상이라면 증상이 없어도 5년 주기로 내시경 검사를 받는 것이 필수적입니다.",
    category: { id: 2, name: "암" },
    author: { 
      id: 1, // 변경: "user_expert_01" -> 1 (김종양 박사)
      nickname: "김종양 박사", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "혈액종양내과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 1220,
    likeCount: 59,
    commentCount: 0,
    isHot: false,
    createdAt: "2026-07-02T06:00:00Z",
    updatedAt: "2026-07-02T06:00:00Z",
    comments: []
  },
  {
    id: 10,
    title: "하루 물 2리터 마시기 프로젝트, 진짜 건강에 도움이 될까?",
    content: "물은 우리 몸의 대사를 원활하게 해주고 피부 미용 coffee 변비 예방에 탁월합니다. 하지만 무작정 2리터를 채우기보다, 본인의 체중과 활동량에 맞춰 조금씩 자주 나눠 마시는 것이 좋습니다. 올바른 수분 섭취 가이드라인을 알려드립니다.",
    category: { id: 1, name: "공통" },
    author: { 
      id: 17, // 변경: "user_normal_07" -> 17
      nickname: "물하마", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: false
    },
    imageUrl: "/logo/logo.png",
    viewCount: 2280,
    likeCount: 94,
    commentCount: 1,
    isHot: false,
    createdAt: "2026-07-02T09:10:00Z",
    updatedAt: "2026-07-02T09:15:00Z",
    comments: [
      {
        id: 10001,
        articleId: 10,
        parentId: null,
        author: { 
          id: 13, // 변경: "user_normal_03" -> 13 (건강지킴이)
          nickname: "건강지킴이", 
          profileImage: "/logo/logo.png",
          isMedicalExpert: false
        },
        content: "한 번에 벌컥벌컥 마시는 게 아니라 나눠 마셔야 하는 거였군요. 텀블러 두고 수시로 마셔야겠습니다.",
        likeCount: 9,
        createdAt: "2026-07-02T09:50:00Z"
      }
    ]
  }
];