/*
  로그인, 회원가입 관련 api 처리 함수들 모음
*/

import {
  LoginData,
  MypageInfo,
  ProfileDataRequest,
  Signup,
  TokenResponse,
  UserInfo,
} from "@/types/auth.type";
import { api } from "./axios";
import { getCookie } from "@/utils/cookie";

// 유저
// 유저 정보 조회
export async function getUser(
  accessToken: string | null,
): Promise<UserInfo | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`유저 정보 조회 실패 (Status: ${res.status})`);
    }

    const user: UserInfo = await res.json();

    return user;
  } catch (error) {
    console.error("유저 정보 조회 실패", error);
    return null;
  }
}

// 로그인
export async function loginUser(loginData: LoginData) {
  try {
    const res = await api.post("/login", loginData);
    console.log("서버가 준 응답", res);

    return res.data;
  } catch (error) {
    console.error("로그인 실패", error);
    throw error;
  }
}

// 회원가입
export async function signupUser(signupData: Signup) {
  try {
    const res = await api.post("/user/signup", signupData);

    return res.data;
  } catch (error) {
    console.error("회원 가입 실패", error);
    throw error;
  }
}

// 로그아웃
export async function logOut(id: number) {
  try {
    const res = await api.post("/logout", null, {
      params: {
        id,
      },
    });

    return res.data;
  } catch (error) {
    console.error("로그아웃 실패", error);
    throw error;
  }
}

// 새로고침 시 신규 토큰 발급

export const refreshAccessToken = async (): Promise<string> => {
  const res = await api.post<TokenResponse>("/token");

  return res.data.accessToken;
};

// 마이페이지

// 마이페이지 데이터 조회
export async function getMypage(): Promise<MypageInfo | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mypage`, {
      credentials: "include",
    });

    if (!res.ok) {
      console.error("마이페이지 데이터 로드 실패");
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("마이페이지 데이터 조회 실패", error);
    return null;
  }
}

// 마이페이지 회원정보 수정
export async function putProfile(profileData: ProfileDataRequest) {
  try {
    const res = await api.put("/mypage/profile", profileData);

    return res.data;
  } catch (error) {
    console.error("회원정보 수정 실패", error);
    throw error;
  }
}
