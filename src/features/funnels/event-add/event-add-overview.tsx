import { CTAContainer } from "@/components/layouts/cta-container";
import { PriorityBadge } from "@/components/shared/priority-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Icon } from "@/components/ui/icon";
import { Title } from "@/components/ui/title";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";
import { EVENT_TYPE_LABEL } from "@/services/shared";
import { format } from "date-fns";

export const EventAddOverview = () => {
  const { funnel, form } = useEventAddFunnelContext();

  const onConfirm = async () => {
    // TODO: 경조사 추가
    funnel.next();
  };

  const { name, date, time, type, priority } = form.getValues();

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 등록 전 확인해주세요</Title>
        <Card className="mt-10">
          <Card.Content>
            <p className="text-[20px] font-semibold text-accents-5">{name}</p>
            <div className="mt-[18px] flex gap-4 font-medium text-accents-5">
              {date && (
                <p className="flex items-center">
                  <Icon.Calendar className="mr-2 w-5" />
                  {format(date, "yyyy.MM.dd")}
                </p>
              )}
              <p className="flex items-center">
                <Icon.Clock2 className="mr-2 w-5" />
                {time}
              </p>
            </div>
            <Divider className="mt-3" />
            <div className="mt-5 flex items-center">
              <p className="mr-8 font-medium">이벤트 종류</p>
              <Badge>{EVENT_TYPE_LABEL[type as keyof typeof EVENT_TYPE_LABEL]}</Badge>
            </div>
            <div className="mt-5 flex items-center">
              <p className="mr-8 font-medium">이벤트 중요도</p>
              {priority && <PriorityBadge priority={priority} />}
            </div>
          </Card.Content>
        </Card>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!priority} onClick={onConfirm}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
