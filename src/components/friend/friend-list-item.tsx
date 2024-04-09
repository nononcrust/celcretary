import { ROUTE } from "@/constants/route";
import { Priority } from "@/services/event";
import Link from "next/link";
import { PriorityBadge } from "../shared/priority-badge";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { Icon } from "../ui/icon";

export const FriendListItem = () => {
  return (
    <li>
      <Link href={ROUTE.FRIEND.DETAIL("1")} className="relative flex h-[90px] items-center py-4">
        <Checkbox className="mr-4" />
        <Avatar className="mr-4 h-12 w-12">
          <Avatar.Fallback>
            <Icon.AvatarFemale />
          </Avatar.Fallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="font-medium text-accents-5">
              김도토리
              <span className="ml-[22px]">25세</span>
            </p>
            <Badge>친한 친구</Badge>
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-primary">남성</p>
            <PriorityBadge priority={Priority.CRUCIAL}>김밤비님의 경조사 D-8</PriorityBadge>
          </div>
        </div>
      </Link>
    </li>
  );
};
