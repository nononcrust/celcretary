import { BottomTab } from "@/components/layouts/bottom-tab";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-white pb-[92px]">
      {children}
      <BottomTab />
    </div>
  );
};
