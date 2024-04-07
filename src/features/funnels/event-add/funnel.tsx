"use client";

import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { ROUTE } from "@/constants/route";
import {
  EventAddFunnelContextProvider,
  useEventAddFunnelContext,
} from "@/features/funnels/event-add/context";
import { EventAddComplete } from "@/features/funnels/event-add/event-add-complete";
import { EventAddDate } from "@/features/funnels/event-add/event-add-date";
import { EventAddFriend } from "@/features/funnels/event-add/event-add-friend";
import { EventAddName } from "@/features/funnels/event-add/event-add-name";
import { EventAddOverview } from "@/features/funnels/event-add/event-add-overview";
import { EventAddPriority } from "@/features/funnels/event-add/event-add-priority";
import { EventAddType } from "@/features/funnels/event-add/event-add-type";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const STEPS = ["type", "name", "date", "friend", "priority", "overview", "complete"];

export const EventAddFunnel = () => {
  return (
    <EventAddFunnelContextProvider steps={STEPS}>
      <PageHeader />
      <FunnelList />
    </EventAddFunnelContextProvider>
  );
};

const FunnelList = () => {
  const { funnel } = useEventAddFunnelContext();

  return (
    <>
      {funnel.current === "type" && <EventAddType />}
      {funnel.current === "name" && <EventAddName />}
      {funnel.current === "date" && <EventAddDate />}
      {funnel.current === "friend" && <EventAddFriend />}
      {funnel.current === "priority" && <EventAddPriority />}
      {funnel.current === "overview" && <EventAddOverview />}
      {funnel.current === "complete" && <EventAddComplete />}
    </>
  );
};

const PageHeader = () => {
  const { funnel } = useEventAddFunnelContext();

  const router = useRouter();

  return (
    <div className={cn("flex justify-between", !funnel.canMoveToPrevious && "justify-end")}>
      {funnel.canMoveToPrevious && (
        <IconButton size="large" onClick={funnel.previous}>
          <Icon.ChevronLeft />
        </IconButton>
      )}
      <IconButton size="large" onClick={() => router.push(ROUTE.HOME)}>
        <Icon.X />
      </IconButton>
    </div>
  );
};
