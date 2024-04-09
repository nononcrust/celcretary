import { useQuery } from "@tanstack/react-query";
import { EventType, Priority } from "./event";
import { AgeGroup, Gender, Occupation, Relationship, api } from "./shared";

const ENDPOINT = "/greetings";

export const greetingsApi = {
  generateGreetingsByEvent: async (body: GenerateGreetingsByEventApiBody) => {
    const response = await api.put<GenerateGreetingsByEventApiResponse>(`${ENDPOINT}/event`, body);
    return response.data;
  },
  generateGreetingsByCategory: async (body: GenerateGreetingsByCategoryApiBody) => {
    const response = await api.put<GenerateGreetingsByCategoryApiResponse>(
      `${ENDPOINT}/category`,
      body,
    );
    return response.data;
  },
};

interface GenerateGreetingsByEventApiBody {
  eventId: number;
}

interface GenerateGreetingsByEventApiResponse {
  eventId: number;
  categories: {
    ageGroup: AgeGroup;
    gender: Gender;
    occupation: Occupation;
    relationship: Relationship;
    eventType: EventType;
  };
  greetings: string[];
}

interface GenerateGreetingsByCategoryApiBody {
  relationship: Relationship;
  eventType: EventType;
  eventPriority: Priority;
}

interface GenerateGreetingsByCategoryApiResponse {
  categories: {
    ageGroup: AgeGroup;
    gender: Gender;
    occupation: Occupation;
    relationship: Relationship;
    eventType: EventType;
  };
  greetings: string[];
}

const queryKeys = {
  all: () => [ENDPOINT],
  byEvent: () => [ENDPOINT, "event"],
  byCategory: (data: GenerateGreetingsByCategoryApiBody) => [ENDPOINT, "category", data],
};

export const useGreetingsByEvent = (data: GenerateGreetingsByEventApiBody) => {
  return useQuery({
    queryKey: [...queryKeys.byEvent(), data],
    queryFn: () => greetingsApi.generateGreetingsByEvent(data),
  });
};

export const useGreetingsByCategory = (data: GenerateGreetingsByCategoryApiBody) => {
  return useQuery({
    queryKey: queryKeys.byCategory(data),
    queryFn: () => greetingsApi.generateGreetingsByCategory(data),
  });
};
