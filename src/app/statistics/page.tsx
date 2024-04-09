"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";
import { cn } from "@/lib/utils";
import { EVENT_TYPE_LABEL, EventType } from "@/services/event";
import { useState } from "react";

const AGES = ["10대", "20대", "30대", "40대", "50대", "60대", "70대", "80대", "90대 이상"];

const STEPS = ["연령대", "직업", "관계", "성별", "경조사"];

const DUMMY_STATISTICS = {
  total: 150000,
  progress: 48,
};

export default function StatisticsPage() {
  const [currentAge, setCurrentAge] = useState<string>();
  const [currentStep, setCurrentStep] = useState(1);

  const currentMonth = new Date().getMonth();

  const [month, setMonth] = useState(currentMonth);

  const statistics = DUMMY_STATISTICS;

  const canMoveToPreviousMonth = month > 0;
  const canMoveToNextMonth = month <= 11;

  const moveToPreviousMonth = () => {
    if (canMoveToPreviousMonth) {
      setMonth((prev) => prev - 1);
    }
  };

  const moveToNextMonth = () => {
    if (canMoveToNextMonth) {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <main className="px-4">
      <Title className="mt-[116px]">경조사 평균 알아보기</Title>
      <Subtitle>{"관계별, 연령대별, 경조사별 평균으로\n적당한 경조사 비용을 알아보세요."}</Subtitle>
      <Stepper className="mt-[54px]" currentStep={currentStep} totalSteps={5} />
      <div className="mt-2 flex items-center justify-between px-6">
        {STEPS.map((step, index) => (
          <p
            key={index}
            className={cn("text-sm", currentStep > index ? "text-accents-5" : "text-accents-2")}
          >
            {step}
          </p>
        ))}
      </div>
      <Card className="mt-4">
        <Card.Content>
          <div className="flex items-center justify-between">
            <p className="font-medium">연령대 태그를 선택해주세요</p>
            <IconButton>
              <Icon.ChevronRight />
            </IconButton>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {AGES.map((age, index) => (
              <Badge
                key={index}
                variant={currentAge === age ? "primary" : "white"}
                onClick={() => setCurrentAge(age)}
              >
                {age}
              </Badge>
            ))}
          </div>
        </Card.Content>
      </Card>
      <Title className="mt-[50px]">{"이번달 경조사에 사용한\n금액은 얼마일까요?"}</Title>
      <Card className="mt-5">
        <Card.Content>
          <div className="flex items-center gap-1">
            <IconButton
              className="text-accents-2"
              onClick={moveToPreviousMonth}
              disabled={canMoveToPreviousMonth}
            >
              <Icon.ChevronLeft />
            </IconButton>
            <p className="translate-y-[1px] text-base font-semibold">3월</p>
            <IconButton
              className="text-accents-2"
              onClick={moveToNextMonth}
              disabled={canMoveToNextMonth}
            >
              <Icon.ChevronRight />
            </IconButton>
          </div>
          <p className="mt-3 text-[20px] font-semibold">총 {statistics.total.toLocaleString()}</p>
          <ProgressBar className="mt-2" progress={48} />
          <div className="mt-4 divide-y divide-accents-1">
            <StatisticsCardItem eventType={EventType.WEDDING} percentage={80} amount={100000} />
            <StatisticsCardItem eventType={EventType.BIRTHDAY} percentage={20} amount={50000} />
          </div>
        </Card.Content>
      </Card>
    </main>
  );
}

interface StepperProps {
  className?: string;
  currentStep: number;
  totalSteps: number;
}

const Stepper = ({ currentStep, totalSteps, className }: StepperProps) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("h-1 w-full overflow-hidden rounded-full bg-accents-1", className)}>
      <div
        className="h-full rounded-l-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

interface StatisticsCardItemProps {
  eventType: EventType;
  percentage: number;
  amount: number;
}

const StatisticsCardItem = ({ eventType, percentage, amount }: StatisticsCardItemProps) => {
  return (
    <div className="flex items-center justify-between py-[10px]">
      <div className="flex items-center">
        <Badge className="mr-2" variant="white">
          {EVENT_TYPE_LABEL[eventType]}
        </Badge>
        <p className="text-sm font-medium">{percentage}%</p>
      </div>
      <p className="font-medium">{amount.toLocaleString()}원</p>
    </div>
  );
};
