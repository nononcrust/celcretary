"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  allowNumberOnly?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, allowNumberOnly, ...props }, ref) => {
    const onInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      if (allowNumberOnly) {
        const numericOnly = event.target.value.replace(/[^0-9]/g, "");
        event.target.value = numericOnly;
      }
    };

    return (
      <input
        type="text"
        className={cn(
          "h-[32px] w-full border-b border-[#D9D9D9] pb-2",
          "placeholder:text-accents-4",
          "focus-visible:outline-none",
          className,
        )}
        ref={ref}
        onInput={onInput}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
