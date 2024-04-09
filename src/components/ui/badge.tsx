import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const badgeVariants = cva(
  cn(
    "transition inline-flex items-center justify-center whitespace-nowrap px-3 py-1 rounded-full font-medium text-sm",
    "focus-ring",
  ),
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        red: "bg-red-light text-red",
        yellow: "bg-yellow-light text-yellow",
        green: "bg-green-light text-green",
        gray: "bg-gray-subtle text-bluegray",
        white: "bg-white text-bluegray",
      },
    },
    defaultVariants: {
      variant: "gray",
    },
  },
);

interface BadgeProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof badgeVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, startIcon, endIcon, children, className, onClick, ...props }, ref) => {
    return (
      <div
        className={cn(badgeVariants({ variant, className }), onClick && "cursor-pointer")}
        {...props}
        ref={ref}
        role={onClick ? "button" : undefined}
        onClick={onClick}
      >
        {startIcon && <Slot className="mr-1 w-5">{startIcon}</Slot>}
        {children}
        {endIcon}
      </div>
    );
  },
);

Badge.displayName = "Badge";
