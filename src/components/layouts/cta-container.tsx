import React from "react";

interface CTAContainerProps {
  children: React.ReactNode;
}

export const CTAContainer = ({ children }: CTAContainerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-main p-4">
      {children}
    </div>
  );
};
