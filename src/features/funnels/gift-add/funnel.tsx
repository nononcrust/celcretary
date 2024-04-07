"use client";

import {
  GiftAddFunnelContextProvider,
  useGiftAddFunnelContext,
} from "@/features/funnels/gift-add/context";
import { GiftAddType } from "@/features/funnels/gift-add/gift-add-type";

const STEPS = ["type", "date", "form", "complete"];

export const GiftAddFunnel = () => {
  return (
    <GiftAddFunnelContextProvider steps={STEPS}>
      <FunnelList />
    </GiftAddFunnelContextProvider>
  );
};

const FunnelList = () => {
  const { funnel } = useGiftAddFunnelContext();

  return <>{funnel.current === "type" && <GiftAddType />}</>;
};
