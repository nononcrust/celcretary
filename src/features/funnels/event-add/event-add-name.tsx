import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";

export const EventAddName = () => {
  const { funnel, name, setName } = useEventAddFunnelContext();

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 이름을 입력해주세요.</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Input placeholder="이벤트 제목" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!name} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
