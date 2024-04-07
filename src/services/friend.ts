import { Gift } from "@/services/gift";
import { DateString, api } from "@/services/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const GENDER = {
  MALE: "male",
  FEMALE: "female",
} as const;

type Gender = (typeof GENDER)[keyof typeof GENDER];

export type Friend = {
  id: number;
  name: string;
  age: number | null;
  gender: Gender;
  relationship: string;
};

const ENDPOINT = "/friends";

export const friendApi = {
  getFriendList: async () => {
    const response = await api.get<GetFriendListApiResponse>(ENDPOINT);
    return response.data;
  },
  getFriendById: async (id: string) => {
    const response = await api.get<GetFriendByIdApiResponse>(`${ENDPOINT}/${id}`);
    return response.data;
  },
  createFriend: async (body: CreateFriendApiBody) => {
    const response = await api.post(ENDPOINT, body);
    return response.data;
  },
  updateFriend: async (data: { id: string; body: UpdateFriendApiBody }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  delteFriend: async (id: string) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  },
};

interface GetFriendListApiResponse {
  friends: {
    id: Friend["id"];
    name: Friend["name"];
    age: Friend["age"];
    gender: Friend["gender"];
    relationship: Friend["relationship"];
    lastTribute: {
      date: DateString;
      eventType: string;
      giftName: string;
      price: number;
    };
  }[];
}

interface GetFriendByIdApiResponse {
  name: Friend["name"];
  age: Friend["age"];
  gender: Friend["gender"];
  relationship: Friend["relationship"];
  tributeList: Gift[];
}

interface CreateFriendApiBody {
  name: Friend["name"];
  age: Friend["age"];
  gender: Friend["gender"];
  relationship: Friend["relationship"];
}

type UpdateFriendApiBody = Partial<CreateFriendApiBody>;

const queryKeys = {
  all: () => [ENDPOINT],
  list: () => [ENDPOINT, "list"],
  detail: (id: string) => [ENDPOINT, id],
};

export const useFriendList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: friendApi.getFriendList,
  });
};

export const useFriendDetail = (id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => friendApi.getFriendById(id),
  });
};

export const useCreateFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: friendApi.createFriend,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.list(),
      });
    },
  });
};

export const useUpdateFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: friendApi.updateFriend,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useDeleteFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: friendApi.delteFriend,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
