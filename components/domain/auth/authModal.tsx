"use client";

/*
  로그인/회원가입 모달 컴포넌트
  공용 컴포넌트인 모달에서 로그인, 회원가입 모달을 따로 제작해서 사용
*/

import Modal from "@/components/common/modal";
import { AuthModalProps } from "@/types/auth.type";
import Login from "./login";
import Signup from "./signup";

export default function AuthModal({ open, onOpenChange, mode, onModeChange }: AuthModalProps) {
  
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={mode === "login" ? "로그인" : "회원가입"}
      size="xl"
      description={mode === "login" ? "PILTER에 오신것을 환영합니다. 로그인해주세요." : "PILTER에 새로 오신 것을 환영합니다. 회원가입 해주세요."}
    >
      {mode === "login" ? (
        <Login onOpenChange={onOpenChange} onSwitchToSignup={() => onModeChange("signup")} />
      ) : (
        <Signup onOpenChange={onOpenChange} onSwitchToLogin={() => onModeChange("login")} />
      )}
    </Modal>
  );
}
