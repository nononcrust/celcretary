import { Badge } from "@/components/ui/badge";
import { PRIORITY, PRIORITY_LABEL, Priority } from "@/services/shared";
import React from "react";

const badgeVariant = {
  [PRIORITY.CRUCIAL]: "red",
  [PRIORITY.IMPORTANT]: "yellow",
  [PRIORITY.NORMAL]: "green",
} as const;

interface PriorityBadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  priority: Priority;
}

export const PriorityBadge = ({ className, children, priority, ...props }: PriorityBadgeProps) => {
  return (
    <Badge variant={badgeVariant[priority]} className={className} {...props}>
      {PRIORITY_LABEL[priority]}
    </Badge>
  );
};
