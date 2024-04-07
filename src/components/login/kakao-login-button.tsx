import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import React from "react";

interface KakaoLoginButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const KakaoLoginButton = ({ className, ...props }: KakaoLoginButtonProps) => {
  return (
    <button
      className={cn(
        "bg-kakao flex h-[56px] w-full items-center justify-center rounded-[8px] text-[18px] font-semibold text-accents-5",
        "focus-ring",
        className,
      )}
      {...props}
    >
      <Icon.Kakao className="mr-3" />
      카카오로 로그인
    </button>
  );
};
