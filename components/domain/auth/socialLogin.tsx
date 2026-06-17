/*
  소셜 로그인 버튼들로
  카카오, 구글, 네이버로 이루어져 있다.
*/

import Image from "next/image";
import kakaoLogin from "../../../public/auth/kakao_login.png";
import googleLogin from "../../../public/auth/google_login.png";
import naverLogin from "../../../public/auth/naver_login.png";

interface SocialLoginProps {
  onOpenChange: (open: boolean) => void;
}

export default function SocialLogin({ onOpenChange }: SocialLoginProps) {
  const handleSocialLogin = (type: "kakao" | "google" | "naver") => {
    onOpenChange(false);

    const urls = {
      kakao:
        `https://kauth.kakao.com/oauth/authorize` +
        `?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}` +
        `&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}` +
        `&response_type=code`,
      google:
        `https://accounts.google.com/o/oauth2/v2/auth` +
        `?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
        `&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}` +
        `&response_type=code` +
        `&scope=openid email profile`,
      naver:
        `https://nid.naver.com/oauth2.0/authorize` +
        `?response_type=code` +
        `&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}` +
        `&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}` +
        `&state=naverLogin`,
    };

    window.location.replace(urls[type]);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => handleSocialLogin("kakao")}>
        <Image
          src={kakaoLogin}
          className="cursor-pointer"
          alt="카카오 로그인"
          width={240}
          height={80}
        />
      </button>
      <button onClick={() => handleSocialLogin("google")}>
        <Image src={googleLogin} className="cursor-pointer" alt="구글 로그인" width={240} height={80}/>
      </button>
      <button onClick={() => handleSocialLogin("naver")}>
        <Image
          src={naverLogin}
          className="cursor-pointer"
          alt="네이버 로그인"
          width={240}
          height={80}
        />
      </button>
    </div>
  );
}
