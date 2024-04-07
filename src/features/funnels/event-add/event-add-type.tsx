import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";
import { EVENT_TYPE_LABEL } from "@/services/shared";

export const EventAddType = () => {
  const { funnel, eventType, setEventType } = useEventAddFunnelContext();

  const onEventTypeSelect = (eventType: string) => {
    setEventType(eventType);
  };

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">어떤 경조사를 등록할까요?</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          {Object.entries(EVENT_TYPE_LABEL).map(([value, label]) => (
            <Button
              size="large"
              align="left"
              key={value}
              onClick={() => onEventTypeSelect(value)}
              variant={value === eventType ? "primary" : "default"}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!eventType} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
