export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  EVENT: {
    LIST: "/events",
    ADD: "/events/add",
    DETAIL: (id: string) => `/events/${id}`,
  },
  STATISTICS: "/statistics",
  GIFT: {
    ADD: "/gifts/add",
  },
  GREETINGS: {
    RECOMMEND: "/greetings/recommend",
  },
  FRIEND: {
    LIST: "/friends",
    ADD: "/friends/add",
    DETAIL: (id: string) => `/friends/${id}`,
  },
} as const;
