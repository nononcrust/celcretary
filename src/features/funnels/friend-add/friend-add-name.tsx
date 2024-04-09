import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { useFriendAddFunnelContext } from "./context";

export const FriendAddName = () => {
  const { form, funnel } = useFriendAddFunnelContext();

  const canMoveToNext = !form.formState.errors.name && form.formState.dirtyFields.name;

  return (
    <div>
      <Title className="mt-5">{"추가할 친구의\n이름을 입력해주세요"}</Title>
      <Form.Field
        name="name"
        control={form.control}
        render={({ field }) => (
          <Input
            className="mt-[54px]"
            placeholder="이름"
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
