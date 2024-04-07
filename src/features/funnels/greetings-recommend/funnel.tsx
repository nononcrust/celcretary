"use client";

import {
  GreetingsRecommendFunnelContextProvider,
  useGreetingsRecommendFunnelContext,
} from "@/features/funnels/greetings-recommend/context";
import { GreetingsRecommendForm } from "@/features/funnels/greetings-recommend/greetings-recommend-form";
import { GreetingsRecommendResult } from "@/features/funnels/greetings-recommend/greetings-recommend-result";

const STEPS = ["form", "result"];

export const GreetingsRecommendFunnel = () => {
  return (
    <GreetingsRecommendFunnelContextProvider steps={STEPS}>
      <FunnelList />
    </GreetingsRecommendFunnelContextProvider>
  );
};

const FunnelList = () => {
  const { funnel } = useGreetingsRecommendFunnelContext();

  return (
    <>
      {funnel.current === "form" && <GreetingsRecommendForm />}
      {funnel.current === "result" && <GreetingsRecommendResult />}
    </>
  );
};
