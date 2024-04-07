import { cn } from "@/lib/utils";

interface ProgressBarProps extends React.ComponentPropsWithoutRef<"div"> {
  progress: number;
}

export const ProgressBar = ({ progress, className, ...props }: ProgressBarProps) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${progress}%`}
      className={cn("bg-accents-1 h-4 w-full overflow-hidden rounded-full", className)}
      {...props}
    >
      <div
        className="animate-progress bg-primary h-full rounded-l-full"
        style={{
          maxWidth: `${progress}%`,
        }}
      />
    </div>
  );
};
