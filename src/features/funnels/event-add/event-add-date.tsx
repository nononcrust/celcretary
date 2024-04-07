"use client";

import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form } from "@/components/ui/form";
import { Title } from "@/components/ui/title";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";

export const EventAddDate = () => {
  const { funnel, form } = useEventAddFunnelContext();

  const isDateValid = !form.formState.errors.date && form.formState.dirtyFields.date;
  const isTimeValid = !form.formState.errors.time && form.formState.dirtyFields.time;

  const canMoveToNext = isDateValid && isTimeValid;

  return (
    <div className="mt-5 flex flex-1 flex-col justify-between">
      <div>
        <Title className="text-[26px]">경조사 일정을 입력해주세요.</Title>
        <div className="mt-10 flex flex-col gap-[10px]">
          <Form.Field
            name="date"
            control={form.control}
            render={({ field }) => (
              <Calendar selected={field.value} onSelect={field.onChange} disablePastDates />
            )}
          />
          {/* TODO: 스타일 추가 */}
          <Form.Field
            name="time"
            control={form.control}
            render={({ field }) => (
              <input
                className="mt-4 h-10"
                type="time"
                value={field.value}
                onChange={field.onChange}
              />
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
