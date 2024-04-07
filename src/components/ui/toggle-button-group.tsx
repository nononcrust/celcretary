"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { Button, ButtonProps } from "./button";

interface ToggleButtonGroupProps extends Omit<ButtonProps, "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

const ToggleButtonGroupImpl = ({
  value,
  onChange,
  children,
  className,
}: ToggleButtonGroupProps) => {
  const contextValue = {
    value,
    onChange,
  };

  return (
    <ToggleButtonGroupContextProvider value={contextValue}>
      <div className={cn("flex gap-[10px]", className)}>{children}</div>
    </ToggleButtonGroupContextProvider>
  );
};
ToggleButtonGroupImpl.displayName = "ToggleButton.Group";

type ToggleButtonGroupContextValue = {
  value: string;
  onChange: (value: string) => void;
};

const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextValue | null>(null);

interface ToggleButtonGroupContextProviderProps {
  children: React.ReactNode;
  value: {
    value: string;
    onChange: (value: string) => void;
  };
}

const ToggleButtonGroupContextProvider = ({
  children,
  value,
}: ToggleButtonGroupContextProviderProps) => {
  return (
    <ToggleButtonGroupContext.Provider value={value}>{children}</ToggleButtonGroupContext.Provider>
  );
};

const useToggleButtonGroupContext = () => {
  const context = useContext(ToggleButtonGroupContext);

  if (!context) {
    throw new Error("useToggleButtonGroupContext는 ToggleButtonGroup 안에서만 사용할 수 있습니다.");
  }

  return context;
};

interface ToggleButtonGroupItemProps extends ButtonProps {
  value: string;
}

const ToggleButtonGroupItem = ({
  value,
  children,
  className,
  ...props
}: ToggleButtonGroupItemProps) => {
  const { value: currentValue, onChange } = useToggleButtonGroupContext();

  const onClick = () => {
    if (currentValue !== value) {
      onChange(value);
    }
  };

  return (
    <Button
      className={cn("w-full", className)}
      variant={value === currentValue ? "primary" : "default"}
      {...props}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const ToggleButtonGroup = Object.assign(ToggleButtonGroupImpl, {
  Item: ToggleButtonGroupItem,
});
