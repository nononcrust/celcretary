import { QueryClientConfig } from "@tanstack/react-query";
import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
    },
  },
} satisfies QueryClientConfig;

export const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export const Occupation = {
  STUDENT: "STUDENT",
  SELF_EMPLOYED: "SELF_EMPLOYED",
  OFFICE_WORKER: "OFFICE_WORKER",
  CIVIL_SERVANT: "CIVIL_SERVANT",
  UNEMPLOYED: "UNEMPLOYED",
  FREELANCER: "FREELANCER",
  ETC: "ETC",
} as const;

export type Occupation = (typeof Occupation)[keyof typeof Occupation];

export const GENDER_LABEL: Record<Gender, string> = {
  [Gender.MALE]: "남성",
  [Gender.FEMALE]: "여성",
} as const;

export const OCCUPATION_LABEL: Record<Occupation, string> = {
  [Occupation.STUDENT]: "학생",
  [Occupation.SELF_EMPLOYED]: "자영업",
  [Occupation.OFFICE_WORKER]: "회사원",
  [Occupation.CIVIL_SERVANT]: "공무원",
  [Occupation.UNEMPLOYED]: "무직",
  [Occupation.FREELANCER]: "프리랜서",
  [Occupation.ETC]: "기타",
} as const;

export const AGE_GROUP = {
  TWENTIES_LATE: "TWENTIES_LATE",
} as const;

export type AgeGroup = (typeof AGE_GROUP)[keyof typeof AGE_GROUP];

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

export const Relationship = {
  CLOSE_FRIEND: "CLOSE_FRIEND",
} as const;

export type Relationship = (typeof Relationship)[keyof typeof Relationship];
