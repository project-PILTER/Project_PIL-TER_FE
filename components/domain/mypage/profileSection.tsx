"use client";

import { Camera, Pencil, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import ProfileModal from "./profileModal";
import { MypageInfo } from "@/types/auth.type";
import { useAuthStore } from "@/stores/authStore";

interface ProfileSectionProps {
  data: MypageInfo;
}

export default function ProfileSection({data}:ProfileSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

  const handleProfileImageChange = () => {
    fileInputRef.current?.click();
  };

  const joinedDate = new Date(data.createdAt).toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="w-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">

        <div className="relative w-28 h-28">
          <div className="relative w-full h-full rounded-full bg-[#5c59da] text-white flex items-center justify-center text-2xl font-bold overflow-hidden shadow-inner">
            {user?.profileImage ? (
              <Image
                src={user.profileImage}
                alt={`${data.nickname}의 프로필`}
                fill
                className="object-cover"
              />
            ) : (
              <span>{data.nickname.charAt(0).toUpperCase() ?? "?"}</span>
            )}
          </div>
          <div>
            <Input ref={fileInputRef} type="file" accept="image/*" hidden />
              <Button onClick={handleProfileImageChange} aria-label="프로필 사진 변경" className="absolute bottom-1 right-1 w-9 h-9 rounded-fill bg-[#5c59da] text-white border-2 border-white hover:bg-[#4a47c5] shadow-md transition-colors p-0 flex items-center justify-center">
                <Camera
                  size="icon"
                  className="w-4 h-4"
                />
              </Button>
          </div>
        </div>

        <div className="text-center sm:text-left space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <h2 className="text-2xl font-bold text-gray-900">{data.nickname}</h2>

            {user?.isMedicalExpert ? (
              <span className="bg-[#efeefa] text-[#6e6ed7] text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                {user.expertTitle || "헬스 마스터"}
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">일반 회원</span>
            )}
          </div>

          <p className="text-sm text-gray-500">{data.email}</p>
          {data.createdAt && <p className="text-xs text-gray-400">{joinedDate} 가입</p>}
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
        <Button onClick={() => setIsProfileModalOpen(true)} className="group h-10 px-4 rounded-xl border-gray-200 hover:bg-[#5c59da] hover:text-white text-gray-700  font-medium text-sm flex items-center gap-1.5 transition-all" variant="outline">
          <Pencil className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
          프로필 수정
        </Button>

        <Button className=" group h-10 px-4 rounded-xl border-gray-200 text-gray-700 hover:bg-[#5c59da] hover:text-white font-medium text-sm flex items-center gap-1.5 transition-all" variant="outline">
          <Settings className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
          설정
        </Button>
      </div>

      <ProfileModal open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen} nickname={data.nickname} email={data.email} />
    </div>
  );
}
