import { Card } from "@/components/ui/card";

export const ReminderPlaceholder = () => {
  return (
    <Card>
      <Card.Content className="flex items-center justify-center whitespace-pre-wrap p-[14px]">
        {"잊은 경조사는 없으신가요?\n다가오는 경조사가 없어요."}
      </Card.Content>
    </Card>
  );
};
