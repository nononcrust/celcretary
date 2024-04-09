"use client";

import { Funnel } from "@/hooks/use-funnel";
import { EventType } from "@/services/event";
import { createContext, useContext } from "react";

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

interface GreetingsRecommendFunnelContextProviderProps
  extends GreetingsRecommendFunnelContextValue {
  children: React.ReactNode;
}

export const GreetingsRecommendFunnelContextProvider = ({
  children,
  ...props
}: GreetingsRecommendFunnelContextProviderProps) => {
  const value = props;

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
