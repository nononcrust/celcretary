import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatPhoneNumberInput = (input: string) => {
  const cleaned = ("" + input).replace(/\D/g, "");

  const part1 = cleaned.slice(0, 3);
  const part2 = cleaned.slice(3, 7);
  const part3 = cleaned.slice(7, 11);

  if (cleaned.length > 7) {
    return `${part1}-${part2}-${part3}`;
  } else if (cleaned.length > 3) {
    return `${part1}-${part2}`;
  } else {
    return part1;
  }
};

export const formatDateInput = (input: string) => {
  const cleaned = ("" + input).replace(/\D/g, "");

  const year = cleaned.slice(0, 4);
  const month = cleaned.slice(4, 6);
  const day = cleaned.slice(6, 8);

  if (cleaned.length > 6) {
    return `${year} / ${month} / ${day}`;
  } else if (cleaned.length > 4) {
    return `${year} / ${month}`;
  } else {
    return year;
  }
};
