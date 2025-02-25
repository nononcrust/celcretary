"use client";

import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { useEventAddFunnelContext } from "@/features/funnels/event-add/context";

export const EventAddName = () => {
  const { funnel, form } = useEventAddFunnelContext();

  const canMoveToNext = !form.formState.errors.name && form.formState.dirtyFields.name;

  return (
    <div>
      <Title className="mt-5 text-[26px]">경조사 이름을 입력해주세요.</Title>
      <Form.Field
        name="name"
        control={form.control}
        render={({ field }) => (
          <Input
            className="mt-10"
            placeholder="이벤트 제목"
            value={field.value}
            onChange={field.onChange}
            onClear={() => field.onChange("")}
          />
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
