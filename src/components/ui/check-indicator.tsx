import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface CheckIndicatorProps extends React.ComponentPropsWithoutRef<"div"> {
  checked?: boolean;
}

export const CheckIndicator = ({ className, checked, ...props }: CheckIndicatorProps) => {
  return (
    <div
      className={cn(
        "border-accents-1 flex h-6 min-w-6 items-center justify-center rounded-full border-[1.5px] bg-white text-white transition",
        checked && "border-yellow-light bg-primary",
        className,
      )}
      {...props}
    >
      {checked && <Icon.Check className="w-4 translate-y-[1px]" />}
    </div>
  );
};
