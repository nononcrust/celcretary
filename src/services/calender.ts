import { TimeString, api } from "@/services/shared";
import { useQuery } from "@tanstack/react-query";
import { Priority } from "./event";

export type CalendarItem = {
  id: number;
  name: string;
  priority: Priority;
  time: TimeString;
};

const ENDPOINT = "/calendar";

export const calendarApi = {
  getCalendarItemList: async (params?: GetCalendarItemListApiParams) => {
    const response = await api.get<GetCalendarItemListApiResponse>(ENDPOINT, {
      params,
    });
    return response.data;
  },
};

interface GetCalendarItemListApiParams {
  year?: number;
  month?: number;
}

interface GetCalendarItemListApiResponse {
  year: number;
  month: number;
  days: {
    [day: number]: CalendarItem[];
  };
}

const queryKeys = {
  calendar: (params?: GetCalendarItemListApiParams) => [ENDPOINT, params],
};

export const useCalenderItemList = (params?: GetCalendarItemListApiParams) => {
  return useQuery({
    queryKey: queryKeys.calendar(params),
    queryFn: () => calendarApi.getCalendarItemList(params),
  });
};
