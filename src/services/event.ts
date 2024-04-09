import { ISODateString, api } from "@/services/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const EventType = {
  BIRTHDAY: "BIRTHDAY",
  WEDDING: "WEDDING",
  FIRST_BIRTHDAY: "FIRST_BIRTHDAY",
  FUNERAL: "FUNERAL",
  ETC: "ETC",
} as const;

export type EventType = (typeof EventType)[keyof typeof EventType];

export const Priority = {
  CRUCIAL: "CRUCIAL",
  IMPORTANT: "IMPORTANT",
  NORMAL: "NORMAL",
} as const;

export type Priority = (typeof Priority)[keyof typeof Priority];

export type Event = {
  id: string;
  friendId: string;
  name: string;
  type: EventType;
  scheduledAt: ISODateString;
  priority: Priority;
};

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  [EventType.BIRTHDAY]: "생일",
  [EventType.WEDDING]: "결혼식",
  [EventType.FIRST_BIRTHDAY]: "돌잔치",
  [EventType.FUNERAL]: "장례식",
  [EventType.ETC]: "기타행사",
} as const;

export const PRIORITY_LABEL: Record<Priority, string> = {
  [Priority.CRUCIAL]: "매우 중요",
  [Priority.IMPORTANT]: "중요",
  [Priority.NORMAL]: "보통",
} as const;

const ENDPOINT = "/events";

export const eventApi = {
  getEventById: async (id: string) => {
    const response = await api.get<GetEventByIdApiResponse>(`${ENDPOINT}/${id}`);
    return response.data;
  },
  createEvent: async (body: CreateEventApiBody) => {
    const response = await api.post(ENDPOINT, body);
    return response.data;
  },
  updateEvent: async (data: { id: string; body: UpdateEventApiBody }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteEvent: async (ids: string[]) => {
    const response = await api.delete(ENDPOINT, { data: { ids } });
    return response.data;
  },
};

interface GetEventByIdApiResponse extends Event {}

interface CreateEventApiBody {
  friendId?: string;
  name: Event["name"];
  type: Event["type"];
  scheduledAt: Event["scheduledAt"];
  priority: Event["priority"];
}

type UpdateEventApiBody = Partial<CreateEventApiBody>;

const queryKeys = {
  all: () => [ENDPOINT],
  list: () => [ENDPOINT, "list"],
  detail: (id: string) => [ENDPOINT, id],
};

export const useEventDetail = (id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => eventApi.getEventById(id),
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventApi.createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.list(),
      });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventApi.updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventApi.deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
