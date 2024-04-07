import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";
import { cn } from "@/lib/utils";
import { PRIORITY, PRIORITY_LABEL, Priority } from "@/services/shared";

const PRIORITIES = {
  [PRIORITY.CRUCIAL]: PRIORITY_LABEL[PRIORITY.CRUCIAL],
  [PRIORITY.IMPORTANT]: PRIORITY_LABEL[PRIORITY.IMPORTANT],
  [PRIORITY.NORMAL]: PRIORITY_LABEL[PRIORITY.NORMAL],
} as const;

const buttonStyle = {
  [PRIORITY.CRUCIAL]: "text-red border-red-light bg-red-light",
  [PRIORITY.IMPORTANT]: "text-yellow border-yellow-light bg-yellow-light",
  [PRIORITY.NORMAL]: "text-green border-green-light bg-green-light",
} as const;

export const EventAddPriority = () => {
  const { funnel, priority, setPriority } = useEventAddFunnelContext();

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사의 중요도를 선택해주세요</Title>
        <Subtitle>더 중요한 경조사를 먼저 알려드릴게요</Subtitle>
        <div className="mt-[54px] flex gap-[10px]">
          {Object.entries(PRIORITIES).map(([value, label]) => (
            <Button
              className={cn(
                "h-11",
                priority === value && buttonStyle[value as keyof typeof PRIORITIES],
              )}
              key={value}
              onClick={() => setPriority(value as Priority)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!priority} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
