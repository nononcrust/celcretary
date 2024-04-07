import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Title } from "@/components/ui/title";
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";
import { EVENT_TYPE_LABEL } from "@/services/shared";

export const EventAddType = () => {
  const { funnel, form } = useEventAddFunnelContext();

  const canMoveToNext = !form.formState.errors.type && form.formState.dirtyFields.type;

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">어떤 경조사를 등록할까요?</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Form.Field
            name="type"
            control={form.control}
            render={({ field }) => (
              <ToggleButtonGroup className="flex-col" value={field.value} onChange={field.onChange}>
                {Object.entries(EVENT_TYPE_LABEL).map(([value, label]) => (
                  <ToggleButtonGroup.Item key={value} value={value} align="left">
                    {label}
                  </ToggleButtonGroup.Item>
                ))}
              </ToggleButtonGroup>
            )}
          />
        </div>
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!canMoveToNext} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
