import { differenceInDays } from "date-fns";

export const isIn10DaysFromNow = (date: Date) => {
  return new Date().getDate() + 10 >= date.getDate();
};

export const getDaysLeft = (date: Date) => {
  const now = new Date();
  const daysLeft = differenceInDays(date, now);

  return daysLeft;
};
