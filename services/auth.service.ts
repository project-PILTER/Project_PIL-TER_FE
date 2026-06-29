/*
  로그인, 회원가입 관련 api 처리 함수들 모음
*/

import { signupData, User } from "@/types/auth.type";
import { api } from "./axios";

// 유저 정보 조회
export async function getUser(): Promise<User | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      credentials: "include"
    })

    if(!res.ok) {
      throw new Error(`특정 게시글 조회 실패 (Status: ${res.status})` );
    }

    const user: User = await res.json();

    return user;
  } catch(error) {
    console.error("유저 정보 조회 실패", error);
    return null;
  }
}

// 회원가입
export async function signupUser(signupData: signupData) {
  try {
    const res = await api.post(`/login`, signupData);

    return res.data;
  } catch(error) {
    console.error("회원 가입 실패", error);
    throw error;
  }
}

// 마이페이지

// 마이페이지 데이터 조회
// export async function getMypage(): Promise<> {
  
// }