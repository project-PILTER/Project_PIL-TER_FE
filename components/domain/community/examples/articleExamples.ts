import { Article } from "@/types/community.type";


export const articles: Article[] = [
  {
    id: 1,
    title: "여름철 에어컨 사용 시 영유아 냉방병 예방 수칙",
    content: "<p>아이들은 성인보다 체온 조절 능력이 떨어집니다. 실내외 온도 차이를 5도 이내로 유지하고, 2시간마다 환기하는 것이 중요합니다.</p>",
    category: { id: 101, name: "소아청소년과" },
    author: { 
      id: "user_01", 
      nickname: "정성소아과_박원장", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "소아청소년과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 1540,
    likeCount: 120,
    commentCount: 2,
    isHot: true,
    createdAt: "2026-06-25T10:00:00Z",
    updatedAt: "2026-06-25T14:30:00Z",
    comments: [
      { id: "c1", categoryId: "101", title: "댓글1", content: "좋은 정보 감사합니다! 오늘부터 실천해야겠어요.", createdAt: "2026-06-25T11:00:00Z" },
      { id: "c2", categoryId: "101", title: "댓글2", content: "혹시 신생아 방 온도는 몇도가 적당할까요?", createdAt: "2026-06-25T12:15:00Z" }
    ]
  },
  {
    id: 2,
    title: "생후 6개월 아기 이유식 시작 시기 질문합니다 ㅠㅠ",
    content: "<p>완모 중인 아기인데 이제 딱 180일 되었어요. 쌀 미음부터 시작하면 될까요? 알레르기 반응 테스트는 어떻게 하는지 궁금합니다.</p>",
    category: { id: 101, name: "소아청소년과" },
    author: { 
      id: "user_02", 
      nickname: "초보맘_지우", 
      profileImage: null, // 프로필 이미지가 없는 경우
      isMedicalExpert: false, // 일반 유저
      expertTitle: undefined
    },
    imageUrl: "",
    viewCount: 340,
    likeCount: 8,
    commentCount: 1,
    isHot: false,
    createdAt: "2026-06-26T08:15:00Z",
    updatedAt: "2026-06-26T08:15:00Z",
    comments: [
      { id: "c3", categoryId: "101", title: "댓글3", content: "쌀 미음 3일 먹여보시고 이상 없으면 소고기 추가하세요!", createdAt: "2026-06-26T09:00:00Z" }
    ]
  },
  {
    id: 3,
    title: "직장인 거북목 예방을 위한 5분 스트레칭 루틴",
    content: "<p>모니터를 자주 보는 직장인들은 승모근과 심부경추굴곡근이 약해지기 쉽습니다. 턱 당기기 운동(Chin-tuck)을 수시로 해주세요.</p>",
    category: { id: 102, name: "정형외과" },
    author: { 
      id: "user_03", 
      nickname: "바른척추_강원장", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "정형외과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 2450,
    likeCount: 198,
    commentCount: 1,
    isHot: true,
    createdAt: "2026-06-20T03:00:00Z",
    updatedAt: "2026-06-21T05:00:00Z",
    comments: [
      { id: "c4", categoryId: "102", title: "댓글4", content: "일하다가 생각날 때마다 하니까 목이 한결 편하네요.", createdAt: "2026-06-20T04:20:00Z" }
    ]
  },
  {
    id: 4,
    title: "스쿼트 하다가 오른쪽 무릎에서 딱 소리가 나는데 병원 가야 하나요?",
    content: "<p>통증은 없는데 앉았다 일어날 때마다 무릎에서 소리가 납니다. 통증이 없어도 연골판에 무리가 가고 있는 걸까요?</p>",
    category: { id: 102, name: "정형외과" },
    author: { 
      id: "user_04", 
      nickname: "헬스보이99", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: false,
      expertTitle: undefined
    },
    imageUrl: "",
    viewCount: 880,
    likeCount: 12,
    commentCount: 0,
    isHot: false,
    createdAt: "2026-06-27T12:00:00Z",
    updatedAt: "2026-06-27T12:00:00Z",
    comments: []
  },
  {
    id: 5,
    title: "자외선 차단제(선크림) 올바른 선택 및 세안 방법",
    content: "<p>무기자차와 유기자차의 차이점을 알고 피부 타입에 맞게 선택해야 합니다. 또한, 잔여물이 남으면 트러블을 유발하므로 이중 세안이 필수입니다.</p>",
    category: { id: 103, name: "피부과" },
    author: { 
      id: "user_05", 
      nickname: "피부꿀팁_이선생", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "피부과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 3120,
    likeCount: 285,
    commentCount: 2,
    isHot: true,
    createdAt: "2026-06-24T15:45:00Z",
    updatedAt: "2026-06-24T16:20:00Z",
    comments: [
      { id: "c5", categoryId: "103", title: "댓글5", content: "민감성 피부는 무기자차가 확실히 자극이 덜하더라고요.", createdAt: "2026-06-24T17:00:00Z" },
      { id: "c6", categoryId: "103", title: "댓글6", content: "꿀정보 감사합니다!", createdAt: "2026-06-24T18:30:00Z" }
    ]
  },
  {
    id: 6,
    title: "턱 주변에 화농성 여드름이 계속 올라오는데 원인이 뭘까요?",
    content: "<p>최근 들어 스트레스를 많이 받아서 그런지 마스크 닿는 부위랑 턱 쪽에만 뒤집어지네요. 압출을 받아야 할까요?</p>",
    category: { id: 103, name: "피부과" },
    author: { 
      id: "user_06", 
      nickname: "매끈피부원망", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: false,
      expertTitle: undefined
    },
    imageUrl: "/logo/logo.png",
    viewCount: 620,
    likeCount: 15,
    commentCount: 0,
    isHot: false,
    createdAt: "2026-06-28T01:10:00Z",
    updatedAt: "2026-06-28T01:10:00Z",
    comments: []
  },
  {
    id: 7,
    title: "성인 당뇨 예방을 위한 당화혈색소(HbA1c) 관리 기준",
    content: "<p>공복 혈당 수치뿐만 아니라 3개월간의 평균 혈당을 대변하는 당화혈색소 수치를 5.6% 이하로 관리하는 것이 대사증후군 예방의 핵심입니다.</p>",
    category: { id: 104, name: "내과" },
    author: { 
      id: "user_07", 
      nickname: "내과_김닥터", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "내과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 1890,
    likeCount: 142,
    commentCount: 1,
    isHot: false,
    createdAt: "2026-06-23T06:30:00Z",
    updatedAt: "2026-06-23T09:00:00Z",
    comments: [
      { id: "c7", categoryId: "104", title: "댓글7", content: "정기 검진 때 당화혈색소도 꼭 확인해봐야겠네요.", createdAt: "2026-06-23T07:15:00Z" }
    ]
  },
  {
    id: 8,
    title: "며칠 전부터 명치 쪽이 쥐어짜듯 아픈데 위염일까요?",
    content: "<p>야식 먹고 바로 자는 습관이 있긴 한데, 제산제를 먹어도 통증이 가라앉지 않네요. 혹시 역류성 식도염 증상인가요?</p>",
    category: { id: 104, name: "내과" },
    author: { 
      id: "user_08", 
      nickname: "소화불량러", 
      profileImage: null,
      isMedicalExpert: false,
      expertTitle: undefined
    },
    imageUrl: "",
    viewCount: 920,
    likeCount: 11,
    commentCount: 1,
    isHot: false,
    createdAt: "2026-06-28T22:00:00Z",
    updatedAt: "2026-06-29T02:00:00Z",
    comments: [
      { id: "c8", categoryId: "104", title: "댓글8", content: "통증이 지속되면 내시경 검사를 꼭 받아보시는 걸 추천합니다.", createdAt: "2026-06-29T00:30:00Z" }
    ]
  },
  {
    id: 9,
    title: "현대인의 고질병 '번아웃 증후군' 자가진단과 극복법",
    content: "<p>끝없는 무기력감과 일에 대한 냉소적 태도가 지속된다면 의지 부족이 아닌 뇌의 지친 신호입니다. 완벽주의를 내려놓는 연습이 필요합니다.</p>",
    category: { id: 105, name: "정신건강의학과" },
    author: { 
      id: "user_09", 
      nickname: "마음쉼터_최원장", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: true,
      expertTitle: "정신건강의학과 전문의"
    },
    imageUrl: "/logo/logo.png",
    viewCount: 4110,
    likeCount: 354,
    commentCount: 1,
    isHot: true,
    createdAt: "2026-06-22T11:20:00Z",
    updatedAt: "2026-06-22T11:20:00Z",
    comments: [
      { id: "c9", categoryId: "105", title: "댓글9", content: "글 읽는데 눈물 날 뻔했네요.. 제 이야기 같습니다.", createdAt: "2026-06-22T13:00:00Z" }
    ]
  },
  {
    id: 10,
    title: "최근 들어 밤에 잠이 너무 안 오고 중간에 자주 깨요.",
    content: "<p>불면증 증상이 한 달 넘게 가고 있어요. 수면유도제를 약국에서 사 먹어보는 게 나을까요, 아니면 병원 상담을 받아야 할까요?</p>",
    category: { id: 105, name: "정신건강의학과" },
    author: { 
      id: "user_10", 
      nickname: "잠들고싶은밤", 
      profileImage: "/logo/logo.png",
      isMedicalExpert: false,
      expertTitle: undefined
    },
    imageUrl: "",
    viewCount: 1150,
    likeCount: 42,
    commentCount: 0,
    isHot: false,
    createdAt: "2026-06-29T10:00:00Z",
    updatedAt: "2026-06-29T10:00:00Z",
    comments: []
  }
];