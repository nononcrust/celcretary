import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group";
import { useRegisterFunnelContext } from "./context";

export const RegisterGender = () => {
  const { form, funnel } = useRegisterFunnelContext();

  const name = form.watch("name");

  const canMoveToNext = !form.formState.errors.gender && form.formState.dirtyFields.gender;

  return (
    <main>
      <Title>{`${name}님의\n성별을 선택해주세요`}</Title>
      <Subtitle className="mt-4">경조사비 통계에 이용돼요</Subtitle>
      <Form.Field
        name="gender"
        control={form.control}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <ToggleButtonGroup
                className="mt-[54px]"
                value={field.value}
                onChange={field.onChange}
              >
                <ToggleButtonGroup.Item value="male">남성</ToggleButtonGroup.Item>
                <ToggleButtonGroup.Item value="female">여성</ToggleButtonGroup.Item>
              </ToggleButtonGroup>
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
