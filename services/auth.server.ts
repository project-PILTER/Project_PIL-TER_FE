import { MypageInfo } from "@/types/auth.type";
import { serverApiGet } from "./serverApi";

// 마이페이지 데이터 조회
export async function getMypage(): Promise<MypageInfo | null> {
  try {
    const res = await serverApiGet<MypageInfo>("/mypage");

    return res;
  } catch (error) {
    console.error("마이페이지 데이터 조회 실패", error);
    return null;
  }
}