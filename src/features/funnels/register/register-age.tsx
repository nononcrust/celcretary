import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { useRegisterFunnelContext } from "./context";

export const RegisterAge = () => {
  const { form, funnel } = useRegisterFunnelContext();

  const name = form.watch("name");

  const canMoveToNext = !form.formState.errors.age && form.formState.dirtyFields.age;

  return (
    <main>
      <Title>{`${name}님의\n나이가 궁금해요!`}</Title>
      <Form.Field
        name="age"
        control={form.control}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <Input
                className="mt-[54px] w-[62px]"
                allowNumberOnly
                endAdornment={<p>세</p>}
                maxLength={2}
                {...field}
              />
            </Form.Control>
          </Form.Item>
        )}
      />
      <CTAContainer>
        <Button variant="primary" size="large" disabled={!canMoveToNext} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </main>
  );
};
