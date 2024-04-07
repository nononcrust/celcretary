import { CTAContainer } from "@/components/layouts/cta-container";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { ToggleButtonGroup } from "@/components/ui/toggle-button-group";
import { useRegisterFunnelContext } from "./context";

const OCCUPATION = {
  student: "학생",
  "self-employed": "자영업",
  employee: "회사원",
  "civil-servant": "공무원",
  unemployed: "무직",
  freelancer: "프리랜서",
  etc: "기타",
} as const;

export const RegisterOccupation = () => {
  const { form, funnel } = useRegisterFunnelContext();

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
                {Object.entries(OCCUPATION).map(([value, label]) => (
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
        <Button variant="primary" size="large" disabled={!canMoveToNext} onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </main>
  );
};
