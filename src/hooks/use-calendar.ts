import { useState } from "react";

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const onSelect = (date?: Date) => {
    setSelectedDate(date);
  };

  return {
    selected: selectedDate,
    onSelect,
  };
};
