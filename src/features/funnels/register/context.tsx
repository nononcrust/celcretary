"use client";

import { Funnel } from "@/hooks/use-funnel";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "./funnel";

type RegisterFunnelContextValue = {
  funnel: Funnel;
  form: ReturnType<typeof useForm<FormSchema>>;
};

export const RegisterFunnelContext = createContext<RegisterFunnelContextValue | null>(null);

interface RegisterFunnelContextProviderProps extends RegisterFunnelContextValue {
  children: React.ReactNode;
}

export const RegisterFunnelContextProvider = ({
  children,
  ...props
}: RegisterFunnelContextProviderProps) => {
  const value = props;

  return <RegisterFunnelContext.Provider value={value}>{children}</RegisterFunnelContext.Provider>;
};

export const useRegisterFunnelContext = () => {
  const context = useContext(RegisterFunnelContext);

  if (!context) {
    throw new Error(
      "useRegisterFunnelContext는 RegisterFunnelContextProvider 컴포넌트 안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
