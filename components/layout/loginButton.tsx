"use client";

/*
  로그인 버튼 컴포넌트
  로그인 관련된 로직 실행
*/

import { Button } from "../ui/button";
import { LogIn, LogOut, User } from "lucide-react";
import { useState } from "react";
import AuthModal from "../domain/auth/authModal";
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/stores/authStore";
import { DropdownOption } from "@/types/ui.type";
import { useRouter } from "next/navigation";
import { logOut } from "@/services/auth.service";
import Dropdown from "../common/dropdown";

export default function LoginButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

  const user = useAuthStore((state) => state.user);

  if(!user) {
    router.push("/");
    return null;
  }

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
      onClick: async() => {
        await logOut(user.id);
        console.log("로그아웃 실행")
      },
      className: "hover:bg-red-50 dark:hover:bg-red-950"
    }
  ]

  if(user) {
    return(
      <Dropdown options={dropdownOptions} align="end" trigger={
        <Button>
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
