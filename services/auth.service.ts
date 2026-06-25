/*
  로그인, 회원가입 관련 api 처리 함수들 모음
*/

import { User } from "@/types/auth.type";

export async function getUser(): Promise<User | null> {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    //   credentials: "include"
    // })
    // if(!res.ok) {
    //   return null;
    // }
    // const user: User = await res.json();

    // return user;
    const res = await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      email: "health@example.com",
      nickname: "건강지키미",
      profileImage: "/logo/logo.png", // 가짜 이미지 URL을 넣거나 빈 값 유지
      isMedicalExpert: true,
      expertTitle: "헬스 마스터",
      createdAt: "2024-03-05"
    };
  } catch(error) {
    console.error("유저 정보 조회 실패", error);
    return null;
  }
}