"use client";

import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";
import { cn } from "@/lib/utils";
import { PRIORITY_LABEL, Priority } from "@/services/event";

const PRIORITIES = {
  [Priority.CRUCIAL]: PRIORITY_LABEL[Priority.CRUCIAL],
  [Priority.IMPORTANT]: PRIORITY_LABEL[Priority.IMPORTANT],
  [Priority.NORMAL]: PRIORITY_LABEL[Priority.NORMAL],
} as const;

const buttonStyle = {
  [Priority.CRUCIAL]: "text-red bg-red-light",
  [Priority.IMPORTANT]: "text-yellow bg-yellow-light",
  [Priority.NORMAL]: "text-green bg-green-light",
} as const;

export const EventAddPriority = () => {
  const { funnel, form } = useEventAddFunnelContext();

  const canMoveToNext = !form.formState.errors.priority && form.formState.dirtyFields.priority;

  return (
    <div>
      <Title className="mt-5 text-[26px]">경조사의 중요도를 선택해주세요</Title>
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
                  field.value === value && buttonStyle[value as keyof typeof Priority],
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
      <CTAContainer>
        <Button variant="primary" disabled={!canMoveToNext} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </div>
  );
};
