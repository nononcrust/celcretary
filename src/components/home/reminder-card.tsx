import { PriorityBadge } from "@/components/shared/priority-badge";
import { Card } from "@/components/ui/card";
import { CheckIndicator } from "@/components/ui/check-indicator";
import { Priority } from "@/services/event";

interface ReminderCardProps {
  id: string;
  checked: boolean;
  name: string;
  priority: Priority;
  onChange: (name: string) => void;
}

export const ReminderCard = ({ id, checked, name, priority, onChange }: ReminderCardProps) => {
  return (
    <button className="focus-ring rounded-md" onClick={() => onChange(id)}>
      <Card>
        <Card.Content className="flex items-center p-[14px]">
          <CheckIndicator className="mr-2" checked={checked} />
          <p className="mr-3 font-medium text-accents-5">{name}</p>
          <PriorityBadge priority={priority} />
        </Card.Content>
      </Card>
    </button>
  );
};
