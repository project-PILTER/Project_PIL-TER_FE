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

      const hasLoggedInBefore = localStorage.getItem("isLoggedIn") === "true";

      if(!hasLoggedInBefore) {
        auth.clearUser();
        return;
      }

      if (!auth.accessToken) {
        try {
          auth.setLoading(true);
          const currentToken = await refreshAccessToken();
          auth.setAccessToken(currentToken);

          const userInfo = await getUser(currentToken);
          if (userInfo) {
            auth.setUserInfo(userInfo);
          }
        } catch (error) {
          localStorage.removeItem("isLoggedIn");
          
          console.error('AuthProvider 재발급 에러 상세', error);
          auth.clearUser();
        } finally {
          auth.setLoading(false);
        }
      }
    };
    initializeUser();
  }, []);

  return <>{children}</>;
}
