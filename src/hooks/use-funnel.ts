import { useState } from "react";

export const useFunnel = (steps: string[]) => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const nextStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const canMoveToPrevious = currentStep !== steps[0];
  const canMoveToNext = currentStep !== steps[steps.length - 1];

  return {
    current: currentStep,
    previous: prevStep,
    next: nextStep,
    canMoveToPrevious,
    canMoveToNext,
  };
};

export type Funnel = ReturnType<typeof useFunnel>;
