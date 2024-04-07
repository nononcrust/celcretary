"use client";

import { cn } from "@/lib/utils";
import { Event } from "@/services/event";
import { PRIORITY } from "@/services/shared";
import { differenceInCalendarDays } from "date-fns";
import { ko } from "date-fns/locale";
import { createContext, useContext, useEffect, useRef } from "react";
import { DateFormatter, DayPicker, DayProps, useDayRender } from "react-day-picker";

// TODO: collapse 기능 추가

interface CalendarProps {
  className?: string;
  selected?: Date;
  onSelect?: (date?: Date) => void;
  disablePastDates?: boolean;
  events?: Event[];
}

export const Calendar = ({
  className,
  selected,
  onSelect,
  disablePastDates = false,
  events = [],
}: CalendarProps) => {
  return (
    <CalderContext.Provider value={{ disablePastDates, events }}>
      <DayPicker
        className={className}
        locale={ko}
        mode="single"
        selected={selected}
        onSelect={onSelect}
        id="date-picker"
        showOutsideDays
        fixedWeeks
        formatters={{ formatCaption: formatCaption }}
        components={{
          Day: Day,
        }}
        classNames={{
          months: "w-full flex flex-col",
          caption: "flex justify-center relative items-center h-10",
          caption_label:
            "font-semibold absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center",
          nav: "flex items-center rounded-md w-full h-full justify-between border-b",
          nav_button: "rounded-full p-0.5 transition",
          nav_button_previous: "!absolute left-2",
          nav_button_next: "!absolute right-2",
          table: "w-full",
          head_row: "flex w-full",
          head_cell:
            "w-full h-[38px] text-accents-2 font-normal m-0 flex items-center justify-center p-0",
          row: "flex w-full mt-2 border-b",
          cell: "relative rounded-md p-0 text-center focus-within:relative w-full h-[70px]",
          day: cn("h-8 w-8 rounded-full p-0 text-center outline-none transition-all", "focus-ring"),
          day_outside: "text-accents-4 aria-selected:text-white",
          day_disabled: "text-accents-4 pointer-events-none bg-accents-5",
          day_hidden: "invisible",
          day_today: "bg-yellow-light",
          day_selected: "!bg-primary text-white",
        }}
      />
    </CalderContext.Provider>
  );
};

const Day = ({ date, displayMonth }: DayProps) => {
  const { disablePastDates, events } = useCalendarContext();
  const ref = useRef<HTMLButtonElement>(null);
  const { activeModifiers, buttonProps, divProps, isButton } = useDayRender(
    date,
    displayMonth,
    ref,
  );

  const { selected } = activeModifiers;

  useEffect(() => {
    if (selected) {
      ref.current?.focus();
    }
  }, [selected]);

  const disabled = isPastDate(date) && disablePastDates;
  const disabledStyle = "pointer-events-none text-accents-4";

  const eventsOnDate = getMax3EventsOnDate(events, date);

  if (!isButton) {
    <div
      {...divProps}
      className={cn(
        "flex items-center justify-center",
        divProps.className,
        disabled && disabledStyle,
      )}
    />;
  }

  const { children: buttonChildren, className: buttonClassName, ...buttonPropsRest } = buttonProps;

  return (
    <button
      ref={ref}
      type="button"
      className={cn("relative", buttonClassName, disabled && disabledStyle)}
      {...buttonPropsRest}
    >
      {buttonChildren}
      {eventsOnDate.length > 0 && (
        <div className="pointer-events-none absolute -bottom-5 flex items-center gap-1">
          {eventsOnDate.map((event) => (
            <EventIndicator key={event.id} priority={event.priority} />
          ))}
        </div>
      )}
    </button>
  );
};

const isPastDate = (date: Date) => {
  return differenceInCalendarDays(date, new Date()) < 0;
};

const formatCaption: DateFormatter = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년, ${month}월 ${day}일`;

  return formattedDate;
};

type CalendarContextValue = {
  disablePastDates: boolean;
  events: Event[];
};

const CalderContext = createContext<CalendarContextValue | null>(null);

const useCalendarContext = () => {
  const context = useContext(CalderContext);

  if (!context) {
    throw new Error("useCalendarContext는 Calendar 컴포넌트 안에서만 사용할 수 있습니다.");
  }

  return context;
};

const BG_COLOR = {
  [PRIORITY.CRUCIAL]: "bg-red",
  [PRIORITY.IMPORTANT]: "bg-primary",
  [PRIORITY.NORMAL]: "bg-green",
} as const;

interface EventIndicatorProps {
  priority: Event["priority"];
}

const EventIndicator = ({ priority }: EventIndicatorProps) => {
  return <div className={cn("h-2 w-2 rounded-full", BG_COLOR[priority])} />;
};

const getMax3EventsOnDate = (events: Event[], date: Date) => {
  return events
    .filter((event) => {
      const isEventToday = differenceInCalendarDays(new Date(event.scheduledAt), date) === 0;
      return isEventToday;
    })
    .slice(0, 3);
};
