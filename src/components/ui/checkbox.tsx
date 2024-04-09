"use client";

import { cn } from "@/lib/utils";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { Icon } from "./icon";

interface CheckboxProps
  extends Omit<CheckboxPrimitives.CheckboxProps, "onCheckedChange" | "onChange"> {
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({ className, onChange, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitives.Root
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-full border border-accents-1 bg-white",
        "data-[state=checked]:border-yellow-subtle data-[state=checked]:bg-primary",
        className,
      )}
      onCheckedChange={onChange}
      {...props}
    >
      <CheckboxPrimitives.Indicator className="flex items-center justify-center">
        <Icon.Check className="h-4 w-4 translate-y-[1px] text-white" />
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
};
