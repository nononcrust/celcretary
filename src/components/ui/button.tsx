"use client";

import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] transition font-semibold border overflow-hidden",
    "focus-ring",
    "disabled:bg-accents-0 disabled:text-accents-4 disabled:border-accents-0 disabled:pointer-events-none",
  ),
  {
    variants: {
      variant: {
        default: "bg-accents-0 text-accents-5 border-accents-0",
        primary: "bg-primary text-white border-primary",
      },
      size: {
        small: "h-7 px-3 text-xs font-normal",
        medium: "w-full h-[50px] px-[12px] text-[13px] leading-5 font-normal",
        large: "h-[60px] px-4 w-full font-semibold",
      },
      align: {
        center: "justify-center",
        left: "justify-start",
        between: "justify-between",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      align: "center",
    },
  },
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      align,
      type = "button",
      asChild = false,
      children,
      startIcon,
      endIcon,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const iconStyle = size === "large" ? "w-6" : "w-4";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, align, className }))}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {startIcon && <Slot className={cn("mr-2", iconStyle)}>{startIcon}</Slot>}
        <Slottable>{children}</Slottable>
        {endIcon && <Slot className={cn("ml-2", iconStyle)}>{endIcon}</Slot>}
      </Comp>
    );
  },
);
Button.displayName = "Button";
