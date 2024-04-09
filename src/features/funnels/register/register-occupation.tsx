import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group";
import { OCCUPATION_LABEL } from "@/services/shared";
import { useRegisterFunnelContext } from "./context";

export const RegisterOccupation = () => {
  const { form } = useRegisterFunnelContext();

  const name = form.watch("name");

  const canMoveToNext = !form.formState.errors.occupation && form.formState.dirtyFields.occupation;

  return (
    <main>
      <Title>{`${name}님의\n직업을 선택해주세요`}</Title>
      <Subtitle className="mt-4">경조사비 통계에 이용돼요</Subtitle>
      <Form.Field
        name="occupation"
        control={form.control}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <ToggleButtonGroup
                className="mt-[54px] grid grid-cols-2"
                value={field.value}
                onChange={field.onChange}
              >
                {Object.entries(OCCUPATION_LABEL).map(([value, label]) => (
                  <ToggleButtonGroup.Item key={value} value={value}>
                    {label}
                  </ToggleButtonGroup.Item>
                ))}
              </ToggleButtonGroup>
            </Form.Control>
          </Form.Item>
        )}
      />
      <CTAContainer>
        <Button type="submit" variant="primary" size="large" disabled={!canMoveToNext}>
          가입하기
        </Button>
      </CTAContainer>
    </main>
  );
};
