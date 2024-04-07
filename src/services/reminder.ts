import { DateString, api } from "@/services/shared";
import { useQuery } from "@tanstack/react-query";
import { Event } from "./event";

export type Reminder = {
  id: number;
  name: Event["name"];
  scheduledAt: Event["scheduledAt"];
  priority: Event["priority"];
};

const ENDPOINT = "/reminder";

export const reminderApi = {
  getReminderList: async (params?: GetReminderListApiParams) => {
    const response = await api.get<GetReminderListApiResponse>(ENDPOINT, {
      params,
    });
    return response.data;
  },
};

interface GetReminderListApiParams {
  dDate?: DateString;
}

interface GetReminderListApiResponse {
  dDate: DateString;
  events: Reminder[];
  count: number;
}

const queryKeys = {
  list: (params?: GetReminderListApiParams) => [ENDPOINT, params] as const,
};

export const useReminderList = (params?: GetReminderListApiParams) => {
  return useQuery({
    queryKey: queryKeys.list(params),
    queryFn: () => reminderApi.getReminderList(params),
  });
};
