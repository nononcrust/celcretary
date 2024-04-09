import { Badge } from "@/components/ui/badge";
import { PRIORITY_LABEL, Priority } from "@/services/event";
import React from "react";

const badgeVariant = {
  [Priority.CRUCIAL]: "red",
  [Priority.IMPORTANT]: "yellow",
  [Priority.NORMAL]: "green",
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
