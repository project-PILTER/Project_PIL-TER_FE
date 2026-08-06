"use client";

import { getUser, refreshAccessToken } from "@/services/auth.client";
import { api } from "@/services/axios";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useEffect, useRef } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuthStore();
  const initialized = useRef(false);

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

          // refreshToken으로 새 accessToken 발급
          const currentToken = await refreshAccessToken();

          api.defaults.headers.common.Authorization = `Bearer ${currentToken}`;

          auth.setAccessToken(currentToken);

          const userInfo = await getUser();
          if (userInfo) {
            auth.setUserInfo(userInfo);
          }
        } catch (error) {
          if(axios.isAxiosError(error) && error.response?.status === 401) {
            localStorage.removeItem("isLoggedIn");
            auth.clearUser();
          }
          auth.clearUser();
          console.error('AuthProvider 재발급 에러 상세', error);
        } finally {
          auth.setLoading(false);
        }
      }
    };
    if(initialized.current) return;

    initialized.current = true;

    initializeUser();
  }, []);

  return <>{children}</>;
}
