import { PriorityBadge } from "@/components/shared/priority-badge";
import { Card } from "@/components/ui/card";
import { CheckIndicator } from "@/components/ui/check-indicator";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { Priority } from "@/services/event";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";

interface EventCardProps {
  id: string;
  checked: boolean;
  name: string;
  priority: Priority;
  date: Date;
  onChange: (name: string) => void;
}

export const EventCard = ({ id, checked, name, priority, date, onChange }: EventCardProps) => {
  return (
    <button onClick={() => onChange(id)}>
      <Card>
        <Card.Content className="flex">
          <div className="flex w-full">
            <CheckIndicator className="mr-2 mt-1" checked={checked} />
            <div className="flex w-full flex-col">
              <div className="flex items-center">
                <p className="mr-[10px] text-[32px] font-bold leading-none text-accents-5">D-5</p>
                <PriorityBadge priority={priority} />
              </div>
              <div className="flex w-full">
                <div className="mt-4 flex flex-col">
                  <p className="text-left text-[20px] font-bold">{name}</p>
                  <p className="flex items-center text-sm font-medium text-[#8A8A8A]">
                    <Icon.Clock2 className="mr-0.5 h-[14px] w-[14px]" />
                    {format(date, "aaaa hh:mm yyyy.MM.dd", { locale: ko })}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <IconButton asChild size="large" onClick={(e) => e.stopPropagation()}>
                <Link href={`/events/${id}`}>
                  <Icon.ChevronRight className="h-8 w-8" />
                </Link>
              </IconButton>
            </div>
          </div>
        </Card.Content>
      </Card>
    </button>
  );
};
