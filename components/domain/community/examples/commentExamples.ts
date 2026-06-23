import { Comment } from "@/types/community.type";

export const comments: Comment[] = [
  // ==========================================
  // 게시글 1: "두통이 3일째 계속되는데 병원 가야 할까요?"
  // ==========================================
  {
    id: 101,
    articleId: 1,
    parentId: null,
    author: { id: "doc001", nickname: "신경과전문의", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "신경과전문의" },
    content: "말씀하신 증상이 전형적인 편두통 증상이네요. 주 2-3회라면 예방 치료를 고려해볼 수 있습니다. 신경과 전문의 상담을 권합니다. 특히 빛에 민감해지는 증상(광과민증)은 편두통의 특징적인 증상입니다.",
    likeCount: 45,
    createdAt: "2026-06-11 14:00"
  },
  {
    id: 102,
    articleId: 1,
    parentId: 101, // 101번 댓글에 대한 답글 (시안의 '건강지킴이')
    author: { id: "user011", nickname: "건강지킴이", profileImage: "/logo/logo.png" },
    content: "답변 감사합니다! 예방 치료라면 어떤 방식인가요?",
    likeCount: 3,
    createdAt: "2026-06-11 15:00"
  },
  {
    id: 103,
    articleId: 1,
    parentId: 101, // 101번 댓글에 대한 답글 (시안의 '신경과전문의' 재답변)
    author: { id: "doc001", nickname: "신경과전문의", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "신경과전문의" },
    content: "베타차단제나 항우울제 계열 약물을 사용하는데, 개인 상태에 따라 다르니 병원에서 상담 받으시는게 좋습니다.",
    likeCount: 12,
    createdAt: "2026-06-11 15:30"
  },
  {
    id: 104,
    articleId: 1,
    parentId: null,
    author: { id: "user012", nickname: "편두통탈출", profileImage: "/logo/logo.png" },
    content: "저도 비슷한 증상으로 고생했어요. 결국 신경과에서 예방약 처방받고 많이 좋아졌습니다. 서울이시면 강남세브란스 두통클리닉 추천드려요!",
    likeCount: 28,
    createdAt: "2026-06-11 13:00"
  },
  {
    id: 105,
    articleId: 1,
    parentId: null,
    author: { id: "user013", nickname: "요가강사민지", profileImage: "/logo/logo.png" },
    content: "스트레스성 두통에는 목과 어깨 스트레칭이 도움이 많이 됩니다. 특히 승모근 스트레칭을 자주 해주세요. 유튜브에 '편두통 스트레칭'으로 검색하시면 좋은 영상 많아요!",
    likeCount: 19,
    createdAt: "2026-06-11 11:00"
  },

  // ==========================================
  // 게시글 2: "감기약 먹고 졸린 이유가 뭔가요?"
  // ==========================================
  {
    id: 201,
    articleId: 2,
    parentId: null,
    author: { id: "doc002", nickname: "으랏차차약사", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "약사" },
    content: "감기약에 흔히 포함되는 '항히스타민제' 성분 때문에 졸음이 유발됩니다. 콧물이나 재채기를 완화해주지만 뇌의 각성을 막아 졸리게 만듭니다.",
    likeCount: 32,
    createdAt: "2026-06-11 12:00"
  },
  {
    id: 202,
    articleId: 2,
    parentId: 201,
    author: { id: "user002", nickname: "직장인A", profileImage: "/logo/logo.png" },
    content: "아하 그래서 그렇군요! 혹시 졸리지 않는 감기약도 처방이나 구매가 가능한가요?",
    likeCount: 2,
    createdAt: "2026-06-11 12:15"
  },
  {
    id: 203,
    articleId: 2,
    parentId: 201,
    author: { id: "doc002", nickname: "으랏차차약사", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "약사" },
    content: "네, 졸음 부작용이 덜한 2세대나 3세대 항히스타민제를 사용해달라고 의사나 약사에게 미리 말씀하시면 조절이 가능합니다.",
    likeCount: 15,
    createdAt: "2026-06-11 12:40"
  },
  {
    id: 204,
    articleId: 2,
    parentId: null,
    author: { id: "user014", nickname: "커피수혈", profileImage: "/logo/logo.png" },
    content: "진짜 공감합니다.. 저도 낮에는 졸려서 죽겠더라고요. 그래서 저는 낮에는 타이레놀 같은 단일 성분만 먹고 종합감기약은 밤에만 먹어요.",
    likeCount: 8,
    createdAt: "2026-06-11 11:30"
  },
  {
    id: 205,
    articleId: 2,
    parentId: null,
    author: { id: "user015", nickname: "얼죽아", profileImage: "/logo/logo.png" },
    content: "감기약 먹고 운전하는 건 절대 피하셔야 해요! 예전에 한번 졸음운전 할 뻔해서 식겁했습니다.",
    likeCount: 11,
    createdAt: "2026-06-11 10:00"
  },

  // ==========================================
  // 게시글 3: "비염 때문에 잠을 못 자겠어요"
  // ==========================================
  {
    id: 301,
    articleId: 3,
    parentId: null,
    author: { id: "doc003", nickname: "이비인후과원장", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "이비인후과 전문의" },
    content: "누우면 코 점막의 혈관이 확장되어 코가 더 막히게 됩니다. 베개를 조금 높여서 주무시거나, 주무시기 전 코 세척(식염수)을 하시는 것이 큰 도움이 됩니다.",
    likeCount: 51,
    createdAt: "2026-06-10 23:00"
  },
  {
    id: 302,
    articleId: 3,
    parentId: null,
    author: { id: "user016", nickname: "작두콩차마니아", profileImage: "/logo/logo.png" },
    content: "전 아침저녁으로 작두콩차 끓여 마시고 비염 진짜 많이 개선됐어요! 따뜻하게 해서 수증기 코로 들이마시는 것도 좋습니다.",
    likeCount: 24,
    createdAt: "2026-06-10 22:10"
  },
  {
    id: 303,
    articleId: 3,
    parentId: null,
    author: { id: "user017", nickname: "노즈스위퍼", profileImage: "/logo/logo.png" },
    content: "코세척 처음엔 무서운데 적응되면 신세계입니다. 자기 전에 꼭 하고 자요. 안 하면 답답해서 잠이 안 올 지경입니다.",
    likeCount: 19,
    createdAt: "2026-06-10 21:40"
  },
  {
    id: 304,
    articleId: 3,
    parentId: null,
    author: { id: "user018", nickname: "습도조절기", profileImage: "/logo/logo.png" },
    content: "방 안 습도 50~60% 무조건 유지해보세요. 가습기 틀고 자니까 확실히 새벽에 코 막혀서 깨는 횟수가 줄었습니다.",
    likeCount: 14,
    createdAt: "2026-06-10 21:15"
  },
  {
    id: 305,
    articleId: 3,
    parentId: 304,
    author: { id: "user003", nickname: "코막힘", profileImage: "/logo/logo.png" },
    content: "당장 오늘 밤부터 가습기 세게 틀고 자봐야겠네요. 다들 꿀팁 감사합니다 ㅠㅠ",
    likeCount: 4,
    createdAt: "2026-06-10 23:45"
  },

  // ==========================================
  // 게시글 4: "소화불량에 효과 있었던 약 추천"
  // ==========================================
  {
    id: 401,
    articleId: 4,
    parentId: null,
    author: { id: "user019", nickname: "매실원액", profileImage: "/logo/logo.png" },
    content: "약은 아니지만 기름진 거 먹고 속 더부룩할 때 따뜻한 매실차 한 잔 마시면 소화제 먹는 것보다 속이 편안해지더라고요.",
    likeCount: 13,
    createdAt: "2026-06-09 19:30"
  },
  {
    id: 402,
    articleId: 4,
    parentId: null,
    author: { id: "doc002", nickname: "으랏차차약사", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "약사" },
    content: "기름진 음식 소화에는 쓸개즙 분비를 촉진하거나 지방 분해 효소(리파아제) 함량이 높은 소화제를 약국에서 지명해서 드시는 것이 효과적입니다.",
    likeCount: 22,
    createdAt: "2026-06-09 20:00"
  },
  {
    id: 403,
    articleId: 4,
    parentId: 402,
    author: { id: "user004", nickname: "위튼튼", profileImage: "/logo/logo.png" },
    content: "지방 분해 효소 기억해두겠습니다! 감사합니다 약사님.",
    likeCount: 2,
    createdAt: "2026-06-09 20:15"
  },
  {
    id: 404,
    articleId: 4,
    parentId: null,
    author: { id: "user020", nickname: "카베진러버", profileImage: "/logo/logo.png" },
    content: "전 일본 갈 때마다 카베진 사 와서 상비약으로 먹는데 속 쓰림이나 더부룩함 달고 사시는 분들한테 잘 맞아요.",
    likeCount: 7,
    createdAt: "2026-06-09 18:40"
  },
  {
    id: 405,
    articleId: 4,
    parentId: null,
    author: { id: "user021", nickname: "소화엔걷기", profileImage: "/logo/logo.png" },
    content: "약 먹는 것도 좋지만 기름진 거 먹은 날엔 귀찮아도 밖에서 30분만 산책하고 들어오세요. 위장 운동에 최고입니다.",
    likeCount: 9,
    createdAt: "2026-06-09 18:10"
  },

  // ==========================================
  // 게시글 5: "허리 통증 때문에 운동을 쉬고 있습니다"
  // ==========================================
  {
    id: 501,
    articleId: 5,
    parentId: null,
    author: { id: "doc004", nickname: "바른척추", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "정형외과전문의" },
    content: "앉아있을 때 통증이 심하다면 척추 요추 전만이 무너져 디스크에 압력이 가해지는 상태일 수 있습니다. 통증이 있을 때는 과도한 스트레칭보다는 '맥켄지 신전 운동'처럼 허리를 뒤로 젖히는 가벼운 동작만 하시고 통증이 유발되는 동작은 즉시 중단하세요.",
    likeCount: 38,
    createdAt: "2026-06-08 15:00"
  },
  {
    id: 502,
    articleId: 5,
    parentId: 501,
    author: { id: "user005", nickname: "운동러", profileImage: "/logo/logo.png" },
    content: "아 햄스트링 늘린다고 앞으로 숙이는 스트레칭 많이 했는데... 그게 독이었군요 ㅠㅠ 알려주셔서 감사합니다.",
    likeCount: 5,
    createdAt: "2026-06-08 15:45"
  },
  {
    id: 503,
    articleId: 5,
    parentId: null,
    author: { id: "user022", nickname: "필라테스맨", profileImage: "/logo/logo.png" },
    content: "허리 아플 땐 오래 앉아있는 게 제일 최악이더라고요. 50분 일하고 5분은 무조건 일어나서 서 계시거나 걸으세요.",
    likeCount: 14,
    createdAt: "2026-06-08 11:20"
  },
  {
    id: 504,
    articleId: 5,
    parentId: null,
    author: { id: "user023", nickname: "커블체어", profileImage: "/logo/logo.png" },
    content: "회사 의자에 등받이 쿠션 하나 대보세요. 자세 강제로 고정되니까 허리에 가해지는 부담이 확실히 덜합니다.",
    likeCount: 6,
    createdAt: "2026-06-08 10:05"
  },
  {
    id: 505,
    articleId: 5,
    parentId: null,
    author: { id: "user024", nickname: "통증타파", profileImage: "/logo/logo.png" },
    content: "스트레칭으로 해결하려고 하지 마시고 며칠 지속되면 병원 가서 엑스레이부터 찍어보시는 걸 추천합니다.",
    likeCount: 11,
    createdAt: "2026-06-08 09:30"
  },

  // ==========================================
  // 게시글 6: "알레르기 약 장기 복용해도 괜찮나요?"
  // ==========================================
  {
    id: 601,
    articleId: 6,
    parentId: null,
    author: { id: "doc002", nickname: "으랏차차약사", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "약사" },
    content: "최근 많이 쓰이는 2세대 항히스타민제 계열 알레르기 약들은 장기 복용해도 비교적 안전하며 내성이 거의 생기지 않는 것으로 알려져 있습니다. 다만 안구 건조나 입 마름 증상이 심해질 수 있으니 수분 섭취를 늘려주세요.",
    likeCount: 29,
    createdAt: "2026-06-08 17:00"
  },
  {
    id: 602,
    articleId: 6,
    parentId: 601,
    author: { id: "user006", nickname: "꽃가루", profileImage: "/logo/logo.png" },
    content: "내성이 생길까 봐 안 먹고 버티다가 증상만 심해졌었는데 안심하고 먹어도 되겠네요! 답변 정말 감사합니다.",
    likeCount: 4,
    createdAt: "2026-06-08 18:20"
  },
  {
    id: 603,
    articleId: 6,
    parentId: null,
    author: { id: "user025", nickname: "지르텍마니아", profileImage: "/logo/logo.png" },
    content: "저 봄여름가을 3계절 내내 지르텍 달고 사는데 5년째 아무 문제 없습니다 ㅋㅋ 안 먹으면 일상생활이 안 돼요.",
    likeCount: 12,
    createdAt: "2026-06-08 16:10"
  },
  {
    id: 604,
    articleId: 6,
    parentId: null,
    author: { id: "user026", nickname: "면역력업", profileImage: "/logo/logo.png" },
    content: "약 먹으면서 유산균이랑 비타민D 챙겨 드셔 보세요. 면역 과민반응 줄여주는데 도움 된다고 해서 먹는데 기분 탓인지 좀 덜한 느낌이에요.",
    likeCount: 8,
    createdAt: "2026-06-08 14:40"
  },
  {
    id: 605,
    articleId: 6,
    parentId: null,
    author: { id: "user027", nickname: "환절기싫어", profileImage: "/logo/logo.png" },
    content: "간이나 신장이 원래 안 좋으신 분 아니라면 하루 한 알 정량 지키는 건 장기 복용해도 괜찮다고 의사 선생님이 그러셨어요.",
    likeCount: 10,
    createdAt: "2026-06-08 13:15"
  },

  // ==========================================
  // 게시글 7: "불면증 때문에 멜라토닌 먹어보신 분?"
  // ==========================================
  {
    id: 701,
    articleId: 7,
    parentId: null,
    author: { id: "doc001", nickname: "신경과전문의", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "신경과전문의" },
    content: "멜라토닌은 수면 리듬이 깨진 경우(시차 적응, 교대 근무 등) 효과적입니다. 다만 만성 불면증의 근본 해결책은 아니며, 국내에서는 전문의 처방이 필요한 전문의약품이므로 병원에 내원하시어 정확한 진단을 받으시길 권합니다.",
    likeCount: 55,
    createdAt: "2026-06-07 10:00"
  },
  {
    id: 702,
    articleId: 7,
    parentId: 701,
    author: { id: "user028", nickname: "해외직구족", profileImage: "/logo/logo.png" },
    content: "아.. 직구로 파는 건 건강기능식품인 줄 알았는데 한국에선 처방약이군요. 정보 감사합니다.",
    likeCount: 7,
    createdAt: "2026-06-07 11:10"
  },
  {
    id: 703,
    articleId: 7,
    parentId: null,
    author: { id: "user029", nickname: "꿀잠자고파", profileImage: "/logo/logo.png" },
    content: "처방받아서 서카딘(멜라토닌 성분) 먹어봤는데 드라마틱하게 스르륵 잠드는 유도제 느낌은 아니구, 밤에 뒤척이는 게 좀 줄어드는 느낌이었어요.",
    likeCount: 22,
    createdAt: "2026-06-07 09:15"
  },
  {
    id: 704,
    articleId: 7,
    parentId: null,
    author: { id: "user030", nickname: "암막커튼", profileImage: "/logo/logo.png" },
    content: "멜라토닌 분비 늘리려면 낮에 햇볕 30분 이상 쬐고 잘 때 방안을 완전히 깜깜하게 하셔야 해요. 스마트폰 빛이 멜라토닌 분비 다 방해한대요.",
    likeCount: 31,
    createdAt: "2026-06-07 08:40"
  },
  {
    id: 705,
    articleId: 7,
    parentId: null,
    author: { id: "user031", nickname: "상추도사", profileImage: "/logo/logo.png" },
    content: "천연 멜라토닌이 많다는 타트체리 주스나 락투카리움 성분 있는 상추 많이 드셔 보세요! 저는 심리적으로 안정돼서 좋더라고 /logo/logo.png.",
    likeCount: 13,
    createdAt: "2026-06-07 08:10"
  },

  // ==========================================
  // 게시글 8: "눈이 자주 건조한데 인공눈물 추천"
  // ==========================================
  {
    id: 801,
    articleId: 8,
    parentId: null,
    author: { id: "doc005", nickname: "밝은안과", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "안과전문의" },
    content: "자주 넣으실 거라면 보존제가 없는 '일회용 인공눈물(CMC 성분이나 히알루론산 성분)'을 사용하셔야 점막 세포 손상을 막을 수 있습니다. 일회용은 개봉 후 24시간 이내에 쓰고 남은 건 버리셔야 합니다.",
    likeCount: 26,
    createdAt: "2026-06-06 14:00"
  },
  {
    id: 802,
    articleId: 8,
    parentId: 801,
    author: { id: "user008", nickname: "개발자", profileImage: "/logo/logo.png" },
    content: "일회용 뚜껑 다시 닫아서 며칠씩 쓰곤 했는데 당장 버려야겠네요 ㄷㄷ 좋은 정보 고맙습니다.",
    likeCount: 6,
    createdAt: "2026-06-06 14:50"
  },
  {
    id: 803,
    articleId: 8,
    parentId: null,
    author: { id: "user032", nickname: "아이클린", profileImage: "/logo/logo.png" },
    content: "약국에서 파는 리프레쉬 플러스나 하이레인 자주 써요. 확실히 통에 든 것보다 일회용이 눈에 자극이 덜하고 편안해요.",
    likeCount: 11,
    createdAt: "2026-06-06 13:20"
  },
  {
    id: 804,
    articleId: 8,
    parentId: null,
    author: { id: "user033", nickname: "온열안대", profileImage: "/logo/logo.png" },
    content: "자기 전에 팥 찜질팩이나 온열안대 하고 자면 마이봄샘 기름 막힌 게 녹아서 인공눈물 안 넣어도 다음날 눈이 훨씬 촉촉해집니다. 강추해요!",
    likeCount: 18,
    createdAt: "2026-06-06 11:05"
  },
  {
    id: 805,
    articleId: 8,
    parentId: null,
    author: { id: "user034", nickname: "블루라이트", profileImage: "/logo/logo.png" },
    content: "컴퓨터 하실 때 눈 깜빡임 횟수가 절반 이하로 준대요. 의식적으로라도 눈을 자주 깜빡여주시는 게 최고입니다.",
    likeCount: 9,
    createdAt: "2026-06-06 10:30"
  },

  // ==========================================
  // 게시글 9: "고혈압 약 복용 시간 언제가 좋나요?"
  // ==========================================
  {
    id: 901,
    articleId: 9,
    parentId: null,
    author: { id: "doc006", nickname: "하트내과", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "순환기내과 전문의" },
    content: "일반적으로 혈압은 잠에서 깨는 아침에 상승하므로 '아침 식사 후'에 복용하는 것이 표준적입니다. 다만, 환자분의 24시간 혈압 변동 양상에 따라 저녁 복용이 유리한 경우도 있으므로 처방해주신 주치의 선생님 가이드를 따르는 것이 가장 정확합니다.",
    likeCount: 39,
    createdAt: "2026-06-05 09:30"
  },
  {
    id: 902,
    articleId: 9,
    parentId: 901,
    author: { id: "user009", nickname: "건강관리", profileImage: "/logo/logo.png" },
    content: "아침에 먹는 게 기본이군요! 임의로 저녁으로 바꾸지 말고 다음 외래 때 꼭 여쭤봐야겠습니다.",
    likeCount: 3,
    createdAt: "2026-06-05 10:15"
  },
  {
    id: 903,
    articleId: 9,
    parentId: null,
    author: { id: "user035", nickname: "꾸준함이답", profileImage: "/logo/logo.png" },
    content: "언제 먹냐보다 매일 '같은 시간'에 빼먹지 않고 규칙적으로 먹는 게 제일 중요하다고 하더라고요. 전 알람 맞춰놓고 아침 8시에 꼭 먹습니다.",
    likeCount: 17,
    createdAt: "2026-06-05 08:45"
  },
  {
    id: 904,
    articleId: 9,
    parentId: null,
    author: { id: "user036", nickname: "저염식단", profileImage: "/logo/logo.png" },
    content: "저희 아버지는 혈압약 드시면서 자꾸 깜빡하셔서 아침 식탁 정중앙에 약 통 올려놓으니까 안 잊어버리시고 잘 드시네요.",
    likeCount: 12,
    createdAt: "2026-06-05 08:20"
  },
  {
    id: 905,
    articleId: 9,
    parentId: null,
    author: { id: "user037", nickname: "혈압측정기", profileImage: "/logo/logo.png" },
    content: "병원 가기 전에 집에서 아침, 저녁으로 혈압 재서 수첩에 기록해 가면 의사 선생님이 시간대 조정해주실 때 엄청 도움 됩니다.",
    likeCount: 14,
    createdAt: "2026-06-05 08:00"
  },

  // ==========================================
  // 게시글 10: "위염 증상 있을 때 먹기 좋은 음식"
  // ==========================================
  {
    id: 1001,
    articleId: 10,
    parentId: null,
    author: { id: "doc007", nickname: "소화기전문", profileImage: "/logo/logo.png", isMedicalExpert: true, expertTitle: "소화기내과 전문의" },
    content: "위염 초기에는 위벽 자극을 최소화하기 위해 미음이나 흰죽을 드시는 게 좋고, 증상이 호전되면 '양배추'나 '마'를 추천합니다. 양배추의 비타민 U 성분은 위장 점막의 재생을 돕는 효과가 있습니다.",
    likeCount: 34,
    createdAt: "2026-06-04 15:20"
  },
  {
    id: 1002,
    articleId: 10,
    parentId: null,
    author: { id: "user038", nickname: "양배추즙생사", profileImage: "/logo/logo.png" },
    content: "양배추즙 진짜 강추합니다. 맛은 약간 걸레 빤 물(?) 같지만 아침 공복에 한 달만 마시면 속 쓰린 거 싹 사라집니다.",
    likeCount: 15,
    createdAt: "2026-06-04 14:40"
  },
  {
    id: 1003,
    articleId: 10,
    parentId: 1002,
    author: { id: "user039", nickname: "초딩입맛", profileImage: "/logo/logo.png" },
    content: "ㅋㅋㅋ 맛 표현 격하게 공감되네요. 근데 진짜 위에는 양배추만 한 게 없는 것 같아요.",
    likeCount: 5,
    createdAt: "2026-06-04 15:10"
  },
  {
    id: 1004,
    articleId: 10,
    parentId: null,
    author: { id: "user040", nickname: "부드러운두부", profileImage: "/logo/logo.png" },
    content: "간 안 한 부드러운 순두부 계란찜도 속 편하고 단백질 보충에 아주 좋습니다. 자극적인 배달음식만 일주일 끊어도 살 것 같아요.",
    likeCount: 11,
    createdAt: "2026-06-04 13:15"
  },
  {
    id: 1005,
    articleId: 10,
    parentId: null,
    author: { id: "user041", nickname: "금지목록", profileImage: "/logo/logo.png" },
    content: "아무리 좋은 음식 먹어도 식후에 바로 눕는 습관이랑 커피, 탄산음료 안 끊으면 위염 재발하더라고요. 나쁜 습관부터 끊는 게 먼저입니다!",
    likeCount: 23,
    createdAt: "2026-06-04 12:50"
  }
];