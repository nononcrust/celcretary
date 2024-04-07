import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const iconButtonVariants = cva(
  cn(
    "inline-flex justify-center items-center border border-transparent rounded-md",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
  ),
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
  ({ children, size, className, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ size, className }))}
        ref={ref}
        type="button"
        role="button"
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        <Slot className={cn(iconButtonVariants({ size }))}>{children}</Slot>
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
