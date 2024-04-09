import { cn } from "@/lib/utils";
import { UserProfile } from "./user-profile";

interface UpcomingEventsProps {
  className?: string;
}

export const UpcomingEvents = ({ className }: UpcomingEventsProps) => {
  return (
    <div className={cn("rounded-[8px] px-4 py-3 shadow-md", className)}>
      <p className="text-[24px] font-bold">다가오는 경조사</p>
      <div className="mt-4 flex justify-between">
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </div>
  );
};
