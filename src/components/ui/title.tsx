import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps extends React.ComponentPropsWithoutRef<"h1"> {}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "whitespace-pre-wrap text-[24px] font-semibold leading-8 text-black",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  },
);
Title.displayName = "Title";
