"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Icon } from "./icon";
import { IconButton } from "./icon-button";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  endAdornment?: React.ReactNode;
  allowNumberOnly?: boolean;
  onClear?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, allowNumberOnly, value, onChange, onClear, endAdornment, ...props }, ref) => {
    const onInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      if (allowNumberOnly) {
        const numericOnly = event.target.value.replace(/[^0-9]/g, "");
        event.target.value = numericOnly;
      }
    };

    return (
      <div className={cn("relative flex h-[32px]", className)}>
        <input
          type="text"
          className={cn(
            "h-full w-full border-b border-accents-1 pb-2 transition",
            "placeholder:text-accents-4",
            "focus-visible:border-accents-5 focus-visible:outline-none",
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          onInput={onInput}
          {...props}
        />
        {value && onClear && (
          <IconButton className="absolute right-0" onClick={onClear}>
            <Icon.X />
          </IconButton>
        )}
        {endAdornment && <div className="absolute right-0">{endAdornment}</div>}
      </div>
    );
  },
);
Input.displayName = "Input";
