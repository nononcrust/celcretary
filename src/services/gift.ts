import { DateString, EventType, api } from "@/services/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type Gift = {
  id: number;
  type: EventType;
  name: string;
  price: number;
  isReceived: boolean;
  date: DateString;
};

const ENDPOINT = "/tributes";

export const giftApi = {
  createGift: async (body: CreateGiftApiBody) => {
    const response = await api.post(ENDPOINT, body);
    return response.data;
  },
  updateGift: async (data: { id: number; body: UpdateGiftApiBody }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteGift: async (id: number) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  },
};

interface CreateGiftApiBody {
  frientId: number;
  type: Gift["type"];
  name: Gift["name"];
  price: Gift["price"];
  date: Gift["date"];
}

type UpdateGiftApiBody = Partial<CreateGiftApiBody>;

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useCreateGift = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: giftApi.createGift,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.list(),
      });
    },
  });
};

export const useUpdateGift = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: giftApi.updateGift,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useDeleteGift = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: giftApi.deleteGift,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
