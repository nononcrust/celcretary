"use client";

import { Funnel } from "@/hooks/use-funnel";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "./funnel";

type EventAddFunnelContextValue = {
  form: ReturnType<typeof useForm<FormSchema>>;
  funnel: Funnel;
};

export const EventAddFunnelContext = createContext<EventAddFunnelContextValue | null>(null);

interface EventAddFunnelContextProviderProps extends EventAddFunnelContextValue {
  children: React.ReactNode;
}

export const EventAddFunnelContextProvider = ({
  children,
  ...props
}: EventAddFunnelContextProviderProps) => {
  const value = props;

  return <EventAddFunnelContext.Provider value={value}>{children}</EventAddFunnelContext.Provider>;
};

export const useEventAddFunnelContext = () => {
  const context = useContext(EventAddFunnelContext);

  if (!context) {
    throw new Error(
      "useEventAddFunnelContext는 EventAddFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
