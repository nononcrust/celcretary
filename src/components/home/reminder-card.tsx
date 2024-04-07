import { PriorityBadge } from "@/components/shared/priority-badge";
import { Card } from "@/components/ui/card";
import { CheckIndicator } from "@/components/ui/check-indicator";
import { Priority } from "@/services/shared";

interface ReminderCardProps {
  id: string;
  checked: boolean;
  name: string;
  priority: Priority;
  onChange: (name: string) => void;
}

export const ReminderCard = ({ id, checked, name, priority, onChange }: ReminderCardProps) => {
  return (
    <button onClick={() => onChange(id)}>
      <Card>
        <Card.Content className="flex items-center p-[14px]">
          <CheckIndicator className="mr-2" checked={checked} />
          <p className="text-accents-5 mr-3 font-medium">{name}</p>
          <PriorityBadge priority={priority} />
        </Card.Content>
      </Card>
    </button>
  );
};
