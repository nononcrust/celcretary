"use client";

import { Funnel, useFunnel } from "@/hooks/use-funnel";
import { createContext, useContext, useState } from "react";

type GiftAddFunnelContextValue = {
  funnel: Funnel;
  type?: string;
  date?: Date;
  setGiftType: (giftType: string) => void;
  setDate: (date: Date) => void;
};

const GiftAddFunnelContext = createContext<GiftAddFunnelContextValue | null>(null);

interface GiftAddFunnelContextProviderProps {
  children: React.ReactNode;
  steps: string[];
}

export const GiftAddFunnelContextProvider = ({
  children,
  steps,
}: GiftAddFunnelContextProviderProps) => {
  const funnel = useFunnel(steps);

  const [type, setGiftType] = useState<string>();
  const [date, setDate] = useState<Date>();

  const value = {
    funnel,
    type,
    date,
    setGiftType,
    setDate,
  };

  return <GiftAddFunnelContext.Provider value={value}>{children}</GiftAddFunnelContext.Provider>;
};

export const useGiftAddFunnelContext = () => {
  const context = useContext(GiftAddFunnelContext);

  if (!context) {
    throw new Error(
      "useGiftAddFunnelConext는 GiftAddFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
