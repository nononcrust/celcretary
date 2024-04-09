import { api } from "@/services/shared";
import { useQuery } from "@tanstack/react-query";
import { EventType, Priority } from "./event";

export type ExpenseStatisticsByCategory = {
  // TODO: enum 으로 변경
  categories: {
    ageGroup: string;
    gender: string;
    occupation: string;
    eventType: EventType;
    eventPriority: Priority;
  };
  amounts: {
    max: number;
    min: number;
    avg: number;
    med: number;
  };
  headcount: number;
};

export type ExpenseStatisticsByDate = {
  year: number;
  month: number;
  total: number;
  types: {
    [EventType.BIRTHDAY]: number;
    [EventType.WEDDING]: number;
  };
};

export const ENDPOINT = "/statistics";

export const statisticsApi = {
  getExpenseStatisticsByCategory: async () => {
    const response = await api.get<GetExpenseStatisticsByCategoryApiResponse>(
      `${ENDPOINT}/category`,
    );
    return response.data;
  },
  getExpenseStatisticsByDate: async (params?: GetExpenseStatisticsByDateApiParams) => {
    const response = await api.get<GetExpenseStatisticsByDateApiResponse>(`${ENDPOINT}/me`, {
      params,
    });
    return response.data;
  },
};

interface GetExpenseStatisticsByCategoryApiResponse extends ExpenseStatisticsByCategory {}

interface GetExpenseStatisticsByDateApiParams {
  year?: number;
  month?: number;
}

interface GetExpenseStatisticsByDateApiResponse extends ExpenseStatisticsByDate {}

const queryKeys = {
  expenseStatisticsByCategory: () => [ENDPOINT, "by-category"],
  expenseStatisticsByDate: (params?: GetExpenseStatisticsByDateApiParams) => [
    ENDPOINT,
    "by-date",
    params,
  ],
};

export const useExpenseStatisticsByCategory = () => {
  return useQuery({
    queryKey: queryKeys.expenseStatisticsByCategory(),
    queryFn: statisticsApi.getExpenseStatisticsByCategory,
  });
};

export const useExpenseStatisticsByDate = (params?: GetExpenseStatisticsByDateApiParams) => {
  return useQuery({
    queryKey: queryKeys.expenseStatisticsByDate(params),
    queryFn: () => statisticsApi.getExpenseStatisticsByDate(params),
  });
};
