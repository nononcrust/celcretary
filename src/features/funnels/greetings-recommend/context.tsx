"use client";

import { Funnel, useFunnel } from "@/hooks/use-funnel";
import { EventType } from "@/services/shared";
import { createContext, useContext, useState } from "react";

type GreetingsRecommendFunnelContextValue = {
  funnel: Funnel;
  selectedRelationship: string | null;
  setSelectedRelationship: (value: string | null) => void;
  selectedEventType: EventType | null;
  setSelectedEventType: (value: EventType | null) => void;
  selectedFamily: string | null;
  setSelectedFamily: (value: string | null) => void;
  selectedEtcRelationship: string | null;
  setSelectedEtcRelationship: (value: string | null) => void;
  selectedEtcEventType: string | null;
  setSelectedEtcEventType: (value: string | null) => void;
};

export const GreetingsRecommendFunnelContext =
  createContext<GreetingsRecommendFunnelContextValue | null>(null);

interface GreetingsRecommendFunnelContextProviderProps {
  children: React.ReactNode;

  steps: string[];
}

export const GreetingsRecommendFunnelContextProvider = ({
  children,
  steps,
}: GreetingsRecommendFunnelContextProviderProps) => {
  const funnel = useFunnel(steps);

  const [selectedRelationship, setSelectedRelationship] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<EventType | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [selectedEtcRelationship, setSelectedEtcRelationship] = useState<string | null>(null);
  const [selectedEtcEventType, setSelectedEtcEventType] = useState<string | null>(null);

  const value = {
    funnel,
    selectedRelationship,
    setSelectedRelationship,
    selectedEventType,
    setSelectedEventType,
    selectedFamily,
    setSelectedFamily,
    selectedEtcRelationship,
    setSelectedEtcRelationship,
    selectedEtcEventType,
    setSelectedEtcEventType,
  };

  return (
    <GreetingsRecommendFunnelContext.Provider value={value}>
      {children}
    </GreetingsRecommendFunnelContext.Provider>
  );
};

export const useGreetingsRecommendFunnelContext = () => {
  const context = useContext(GreetingsRecommendFunnelContext);

  if (!context) {
    throw new Error(
      "useGreetingRecommendFunnelContext는 GreetingsRecommendFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
