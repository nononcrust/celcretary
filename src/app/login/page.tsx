import Logo from "@/assets/images/logo.svg";
import { KakaoLoginButton } from "@/components/login/kakao-login-button";

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between px-4">
      <Logo className="mt-[210px]" />
      <div className="mb-[140px] flex w-full flex-col">
        <h1 className="whitespace-pre-wrap text-center text-[18px] text-[#3C3C3C]">
          {"경비서로 쉽게\n경조사 관리 시작해볼까요?"}
        </h1>
        <KakaoLoginButton className="mt-9" />
      </div>
    </main>
  );
}
