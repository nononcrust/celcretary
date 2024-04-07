"use client";

import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";
import { cn } from "@/lib/utils";
import { PRIORITY, PRIORITY_LABEL } from "@/services/shared";

const PRIORITIES = {
  [PRIORITY.CRUCIAL]: PRIORITY_LABEL[PRIORITY.CRUCIAL],
  [PRIORITY.IMPORTANT]: PRIORITY_LABEL[PRIORITY.IMPORTANT],
  [PRIORITY.NORMAL]: PRIORITY_LABEL[PRIORITY.NORMAL],
} as const;

const buttonStyle = {
  [PRIORITY.CRUCIAL]: "text-red bg-red-light",
  [PRIORITY.IMPORTANT]: "text-yellow bg-yellow-light",
  [PRIORITY.NORMAL]: "text-green bg-green-light",
} as const;

export const EventAddPriority = () => {
  const { funnel, form } = useEventAddFunnelContext();

  const canMoveToNext = !form.formState.errors.priority && form.formState.dirtyFields.priority;

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div className="w-full">
        <Title className="text-[26px]">경조사의 중요도를 선택해주세요</Title>
        <Subtitle>더 중요한 경조사를 먼저 알려드릴게요</Subtitle>
        <Form.Field
          name="priority"
          control={form.control}
          render={({ field }) => (
            <ToggleButtonGroup className="mt-[54px]" value={field.value} onChange={field.onChange}>
              {Object.entries(PRIORITIES).map(([value, label]) => (
                <ToggleButtonGroup.Item
                  className={cn(
                    "border-transparent",
                    field.value === value && buttonStyle[value as keyof typeof PRIORITY],
                  )}
                  key={value}
                  value={value}
                >
                  {label}
                </ToggleButtonGroup.Item>
              ))}
            </ToggleButtonGroup>
          )}
        />
      </div>
      <CTAContainer>
        <Button variant="primary" disabled={!canMoveToNext} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
