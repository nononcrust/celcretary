import { TogetherHistoryItem } from "@/components/friend/together-history-item";
import { Header } from "@/components/layouts/header";
import { PriorityBadge } from "@/components/shared/priority-badge";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { Title } from "@/components/ui/title";
import { ROUTE } from "@/constants/route";
import { Priority } from "@/services/event";
import Link from "next/link";

export default function FriendDetailPage() {
  return (
    <div className="px-4">
      <Header className="justify-end">
        <IconButton size="large" asChild>
          <Link href={ROUTE.FRIEND.LIST}>
            <Icon.X className="h-8 w-8" />
          </Link>
        </IconButton>
      </Header>
      <main>
        <Title className="mt-5">김밤비님 상세정보</Title>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Icon.AvatarMale className="mr-2 h-[68px] w-[68px] rounded-full" />
            <PriorityBadge priority={Priority.CRUCIAL}>김밤비님의 경조사 D-8</PriorityBadge>
          </div>
          <IconButton>
            <Icon.SquarePen className="text-accents-4" />
          </IconButton>
        </div>
        <div className="mt-5 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-[20px] font-semibold">김밤비</p>
            <p>D+1</p>
            <p>25세</p>
          </div>
          <p className="mt-3 text-xs text-primary">여성</p>
        </div>
        <Divider className="mt-2" />
        <div className="mt-7 flex items-center">
          <p className="mr-4 text-[20px] font-semibold">나와의 관계</p>
          <Badge>친한친구</Badge>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-[20px] font-semibold">함께한 내역</p>
          <IconButton>
            <Icon.CirclePlus className="text-accents-4" />
          </IconButton>
        </div>
        <div className="mt-6 flex flex-col gap-5">
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
          <TogetherHistoryItem />
        </div>
      </main>
    </div>
  );
}
