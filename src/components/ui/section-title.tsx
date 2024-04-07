import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps extends React.ComponentPropsWithoutRef<"h2"> {}

export const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        className={cn("whitespace-pre-wrap text-[20px] font-semibold text-black", className)}
        ref={ref}
        {...props}
      >
        {children}
      </h2>
    );
  },
);
SectionTitle.displayName = "SectionTitle";
