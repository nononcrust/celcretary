import { cn } from "@/lib/utils";
import React from "react";

interface SubtitleProps extends React.ComponentPropsWithoutRef<"p"> {}

export const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        className={cn("text-accents-4 mt-2 whitespace-pre-wrap text-[18px] font-medium", className)}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Subtitle.displayName = "Subtitle";
