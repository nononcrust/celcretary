"use client";

import { GreetingsRecommendFunnelContextProvider } from "@/features/funnels/greetings-recommend/context";
import { GreetingsRecommendForm } from "@/features/funnels/greetings-recommend/greetings-recommend-form";
import { GreetingsRecommendResult } from "@/features/funnels/greetings-recommend/greetings-recommend-result";
import { useFunnel } from "@/hooks/use-funnel";
import { EventType } from "@/services/event";
import { useState } from "react";

const STEPS = ["form", "result"] as const;

export const GreetingsRecommendFunnel = () => {
  const funnel = useFunnel(STEPS);

  const [selectedRelationship, setSelectedRelationship] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<EventType | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [selectedEtcRelationship, setSelectedEtcRelationship] = useState<string | null>(null);
  const [selectedEtcEventType, setSelectedEtcEventType] = useState<string | null>(null);

  return (
    <GreetingsRecommendFunnelContextProvider
      funnel={funnel}
      selectedRelationship={selectedRelationship}
      setSelectedRelationship={setSelectedRelationship}
      selectedEventType={selectedEventType}
      setSelectedEventType={setSelectedEventType}
      selectedFamily={selectedFamily}
      setSelectedFamily={setSelectedFamily}
      selectedEtcRelationship={selectedEtcRelationship}
      setSelectedEtcRelationship={setSelectedEtcRelationship}
      selectedEtcEventType={selectedEtcEventType}
      setSelectedEtcEventType={setSelectedEtcEventType}
    >
      {funnel.current === "form" && <GreetingsRecommendForm />}
      {funnel.current === "result" && <GreetingsRecommendResult />}
    </GreetingsRecommendFunnelContextProvider>
  );
};
