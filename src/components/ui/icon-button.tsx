import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const iconButtonVariants = cva(
  cn("inline-flex justify-center items-center border border-transparent rounded-md", "focus-ring"),
  {
    variants: {
      size: {
        medium: "min-w-6 h-6",
        large: "min-w-8 h-8",
      },
    },
  },
);

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, size, className, disabled, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(iconButtonVariants({ size, className }))}
        ref={ref}
        type="button"
        role="button"
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
IconButton.displayName = "IconButton";
