import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { useFriendAddFunnelContext } from "./context";

export const FriendAddBirthday = () => {
  const { funnel, form } = useFriendAddFunnelContext();

  const friendName = form.watch("name");

  const canMoveToNext = !form.formState.errors.birthday && form.formState.dirtyFields.birthday;

  return (
    <div>
      <Title className="mt-5">{`${friendName}님의\n생일을 알려주세요`}</Title>
      <Form.Field
        name="birthday"
        control={form.control}
        render={({ field }) => (
          <Input
            className="mt-[54px]"
            type="date"
            placeholder="YYYY / MM / DD"
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
