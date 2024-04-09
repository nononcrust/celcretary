"use client";

import { Funnel } from "@/hooks/use-funnel";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "./funnel";

type FriendAddFunnelContextValue = {
  form: ReturnType<typeof useForm<FormSchema>>;
  funnel: Funnel;
};

export const FriendAddFunnelContext = createContext<FriendAddFunnelContextValue | null>(null);

interface FriendAddFunnelContextProviderProps extends FriendAddFunnelContextValue {
  children: React.ReactNode;
}

export const FriendAddFunnelContextProvider = ({
  children,
  ...props
}: FriendAddFunnelContextProviderProps) => {
  const value = props;

  return (
    <FriendAddFunnelContext.Provider value={value}>{children}</FriendAddFunnelContext.Provider>
  );
};

export const useFriendAddFunnelContext = () => {
  const context = useContext(FriendAddFunnelContext);

  if (!context) {
    throw new Error(
      "useFriendAddFunnelContext는 FriendAddFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
