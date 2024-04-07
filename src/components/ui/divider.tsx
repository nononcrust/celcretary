import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const dividerVariants = cva(cn(""), {
  variants: {
    variant: {
      line: "border-t border-accents-1",
      space: "h-2 bg-accents-1",
    },
  },
  defaultVariants: {
    variant: "line",
  },
});

interface DividerProps
  extends React.ComponentPropsWithoutRef<"hr">,
    VariantProps<typeof dividerVariants> {}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, variant, ...props }, ref) => {
    return <hr ref={ref} className={cn(dividerVariants({ variant, className }))} {...props} />;
  },
);
Divider.displayName = "Divider";
