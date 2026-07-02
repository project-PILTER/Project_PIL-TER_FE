import { User, UserInfo } from "@/types/auth.type";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  setUserInfo: (userInfo: UserInfo | null) => void;
  setLoading: (loading: boolean) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    id: 1,
    email: "test123@gmail.com",
    nickname: "희망을그대에게",
    profileImage: "/logo/logo.png",
    isMedicalExpert: false,
    createdAt: "2026-06-26"
  },
  isLoading: true,

  setUser: (user) => set({ user }),
  setUserInfo: (userInfo) => {
    if(!userInfo) {
      set({user:null});
      return;
    }

    const isMedical = userInfo.role === "DOCTOR" || userInfo.role === "EXPERT";

    const mappedUser: User = {
      id: userInfo.id,
      email: userInfo.email,
      nickname: userInfo.name,
      profileImage: "/logo/logo.png",
      createdAt: "2026-06-26",
      isMedicalExpert: isMedical,
      expertTitle: isMedical ? "전문의" : undefined
    };
    set({user: mappedUser})
  },
  setLoading: (isLoading) => set({isLoading}),
  clearUser: () => set({
    user: null,
    isLoading: false,
  }),
}))