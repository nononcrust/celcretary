import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { useRegisterFunnelContext } from "./context";

export const RegisterName = () => {
  const { form, funnel } = useRegisterFunnelContext();

  const canMoveToNext = !form.formState.errors.name && form.formState.dirtyFields.name;

  return (
    <main>
      <Title>{"반가워요!\n이름을 입력해주세요"}</Title>
      <Form.Field
        name="name"
        control={form.control}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <Input className="mt-[54px]" {...field} onClear={() => field.onChange("")} />
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
