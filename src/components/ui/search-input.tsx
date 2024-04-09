"use client";

import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface SearchInputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Icon.Search className="absolute left-3 top-3 text-accents-3" />
      <input
        className={cn(
          "h-12 w-full rounded-[8px] bg-accents-0 p-3 pl-11 placeholder:text-accents-3",
          "focus-visible:outline-none",
        )}
        {...props}
      />
    </div>
  );
};
