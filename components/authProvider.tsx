"use client";

import { getUser, refreshAccessToken } from "@/services/auth.service";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuthStore();

  useEffect(() => {
    const initializeUser = async () => {
      if (auth.user) {
        auth.setLoading(false);
        return;
      }
      auth.setLoading(true);
      let currentToken = auth.accessToken;

      try {
        if (!currentToken) {
          console.log("accessToken이 없어 재발급을 시도합니다.");
          currentToken = await refreshAccessToken();
          auth.setAccessToken(currentToken);
        }

        if (currentToken) {
          const userInfo = await getUser(auth.accessToken);
          if (userInfo) {
            console.log("유저 정보 조회 성공", userInfo);
            auth.setUserInfo(userInfo);
          }
        }
      } catch (error) {
        console.error("인증 초기화 실패");
        auth.clearUser();
      } finally {
        auth.setLoading(false);
      }
    };

    initializeUser();
  }, []);

  return <>{children}</>;
}
