import { useAuthStore } from "./store";

export const useSession = () => {
  const { session } = useAuthStore();

  return { session };
};
