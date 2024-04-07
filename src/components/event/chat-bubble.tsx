import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  className?: string;
  side?: "left" | "right";
  label?: string;
  variant?: "primary" | "default";
  children?: React.ReactNode;
}

// TODO: 뾰족한 UI 추가

export const ChatBubble = ({
  label,
  side = "left",
  className,
  variant,
  children,
}: ChatBubbleProps) => {
  return (
    <div className={cn("flex w-full", side === "right" && "justify-end", className)}>
      <div className="flex flex-col">
        {label && (
          <p className={cn("mb-1 text-sm text-[#8E8D94]", side === "right" && "text-right")}>
            {label}
          </p>
        )}
        <div
          className={cn(
            "text-accents-5 min-w-[266px] whitespace-pre-wrap rounded-[18px] bg-[#F2F4F7] px-3 py-[6px] text-sm",
            variant === "primary" && "bg-primary text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
