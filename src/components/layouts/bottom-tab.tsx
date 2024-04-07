"use client";

import { Icon } from "@/components/ui/icon";
import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { usePathname } from "next/navigation";

const bottomTabVisibleRoutes = [ROUTE.HOME, ROUTE.FRIEND.LIST, ROUTE.STATISTICS] as const;

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const bottomNav: NavItem[] = [
  {
    label: "메인",
    icon: <Icon.Home />,
    href: ROUTE.HOME,
  },
  {
    label: "추천문구",
    icon: <Icon.MessageSquare />,
    href: ROUTE.GREETINGS.RECOMMEND,
  },
  {
    label: "경조사 등록",
    icon: <Icon.CalendarPlus />,
    href: ROUTE.EVENT.ADD,
  },
  {
    label: "친구",
    icon: <Icon.UserSquare2 />,
    href: ROUTE.FRIEND.LIST,
  },
  {
    label: "통계",
    icon: <Icon.BarChart />,
    href: ROUTE.STATISTICS,
  },
] as const;

export const BottomTab = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const isVisible = bottomTabVisibleRoutes.includes(pathname);

  if (!isVisible) return null;

  return (
    <nav className="max-w-main border-accents-2 fixed bottom-0 left-0 right-0 mx-auto flex h-[92px] w-full justify-between border-t bg-white px-[10px] pt-4">
      {bottomNav.map((item, index) => (
        <BottomTabItem key={index} item={item} isActive={isActive(item.href)} />
      ))}
    </nav>
  );
};

interface BottomTabItemProps {
  item: NavItem;
  isActive: boolean;
}

const BottomTabItem = ({ item, isActive }: BottomTabItemProps) => {
  return (
    <Link
      href={item.href}
      className={cn(
        "text-accents-4 focus-ring flex h-[42px] w-[58px] flex-col items-center rounded-md",
        isActive && "text-primary",
      )}
    >
      <Slot className="h-6 w-6">{item.icon}</Slot>
      <p className="mt-1 text-xs">{item.label}</p>
    </Link>
  );
};
