"use client";

/*
  로그인 버튼 컴포넌트
  로그인 관련된 로직 실행
*/

import { Button } from "../ui/button";
import { LogIn, LogOut, User } from "lucide-react";
import { useState } from "react";
import AuthModal from "../domain/auth/authModal";
import Image from "next/image";
import { useAuthStore } from "@/stores/authStore";
import { DropdownOption } from "@/types/ui.type";
import { useRouter } from "next/navigation";
import { logOut } from "@/services/auth.service";
import Dropdown from "../common/dropdown";
import Skeleton from "../domain/mypage/skeleton";

export default function LoginButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const isLoading = useAuthStore((state) => state.isLoading);

  if(isLoading) {
    return (<Skeleton />)
  }

  if (user) {
    const dropdownOptions: DropdownOption[] = [
      {
        label: "마이페이지",
        icon: <User className="w-4 h-4" />,
        onClick: () => router.push("/mypage"),
        className: "hover:bg-gray-100 dark:hover:bg-neutral-100"
      },
      {
        label: "로그아웃",
        icon: <LogOut className="w-4 h-4" />,
        onClick: async () => {
          try {
            await logOut(user.id);
          } catch (error) {
            console.error("서버 로그아웃 처리 실패")
          }

          clearUser();
          alert("로그아웃 되었습니다.");

          localStorage.removeItem("isLoggedIn");
          router.push("/");
          router.refresh();
        },
        className: "hover:bg-red-50 dark:hover:bg-red-950"
      }
    ]
    return (
      <Dropdown options={dropdownOptions} align="end" trigger={
        <Button className="bg-transparent hover:bg-neutral-100 border-none rounded-full p-0 w-10 h-10">
          {user.profileImage ? (
            <Image src={user.profileImage} alt={user.nickname} width={40} height={40} className="rounded-full object-cover border border-gray-200 dark:border-neutral-100" />
          ) : (
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-medium">{user.nickname}</div>
          )}
        </Button>
      } />
    )
  }

  return (
    <div>
      <Button
        className="bg-white dark:bg-black text-black dark:text-white hover:bg-[#e4e3f5]"
        onClick={() => {
          setMode("login");
          setOpen(true);
        }}
      >
        <LogIn className="mr-1" />
        로그인
      </Button>

      <AuthModal
        open={open}
        onOpenChange={setOpen}
        mode={mode}
        onModeChange={setMode}
      />
    </div>
  );
}

