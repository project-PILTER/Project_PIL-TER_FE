"use client";

import { getUser } from "@/services/auth.service";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const setLoading = useAuthStore((state) => state.setLoading);
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  useEffect(() => {
    const initializeUser = async () => {
    if(user || !accessToken) {
      setLoading(false);
      return;
    }
    setLoading(true);

    try {
      const userInfo = await getUser(accessToken);

      if(userInfo) {
        console.log("유저 정보 조회 성공", userInfo);
        setUserInfo(userInfo);
      }
    } catch (error) {
      console.error("인증 초기화 실패");
    } finally {
      setLoading(false);
    }
  }

    initializeUser();
  }, [accessToken])

  return <>{children}</>;
  
}