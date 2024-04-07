import { QueryClientConfig } from "@tanstack/react-query";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB,
});

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
    },
  },
} satisfies QueryClientConfig;

export const RELATIONSHIP = {
  // TODO: 항목 추가
  CLOSE_FRIEND: "CLOSE_FRIEND",
} as const;

export type Relationship = (typeof RELATIONSHIP)[keyof typeof RELATIONSHIP];

export const GENDER = {
  MALE: "MALE",
  FEMALE: "FEMALE",
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export const OCCUPATION = {
  STUDENT: "STUDENT",
} as const;

export type Occupation = (typeof OCCUPATION)[keyof typeof OCCUPATION];

export const AGE_GROUP = {
  TWENTIES_LATE: "TWENTIES_LATE",
} as const;

export type AgeGroup = (typeof AGE_GROUP)[keyof typeof AGE_GROUP];

export const EVENT_TYPE = {
  BIRTHDAY: "BIRTHDAY",
  WEDDING: "WEDDING",
  FIRST_BIRTHDAY: "FIRST_BIRTHDAY",
  FUNERAL: "FUNERAL",
  ETC: "ETC",
} as const;

export type EventType = (typeof EVENT_TYPE)[keyof typeof EVENT_TYPE];

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  BIRTHDAY: "생일",
  WEDDING: "결혼식",
  FIRST_BIRTHDAY: "돌잔치",
  FUNERAL: "장례식",
  ETC: "기타행사",
} as const;

export const PRIORITY = {
  CRUCIAL: "CRUCIAL",
  IMPORTANT: "IMPORTANT",
  NORMAL: "NORMAL",
} as const;

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY];

export const PRIORITY_LABEL: Record<Priority, string> = {
  CRUCIAL: "매우 중요",
  IMPORTANT: "중요",
  NORMAL: "보통",
} as const;

/**
 * YYYY-MM-DD 형식의 날짜 문자열
 */
export type DateString = string;

/**
 * ISO 8601 형식의 날짜 문자열
 */
export type ISODateString = string;

/**
 * HH:MM 형식의 시간 문자열
 */
export type TimeString = string;
