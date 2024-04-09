import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { KAKAO_LOGIN_URL } from "@/services/kakao";
import Link, { LinkProps } from "next/link";

interface KakaoLoginButtonProps extends Omit<LinkProps, "href"> {
  className?: string;
}

export const KakaoLoginButton = ({ className, ...props }: KakaoLoginButtonProps) => {
  return (
    <Link
      href={KAKAO_LOGIN_URL}
      className={cn(
        "bg-kakao flex h-[56px] w-full items-center justify-center rounded-[8px] text-[18px] font-semibold text-accents-5",
        "focus-ring",
        className,
      )}
      {...props}
    >
      <Icon.Kakao className="mr-3" />
      카카오로 로그인
    </Link>
  );
};
