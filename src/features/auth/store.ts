import { create } from "zustand";

type User = {
  id: string;
  nickname: string;
};

type Session = {
  user: User;
  token: string;
};

const DUMMY_SESSION: Session = {
  user: {
    id: "1",
    nickname: "노논",
  },
  token: "dummy-token",
};

interface AuthState {
  session: Session | null;
}

interface AuthAction {
  setSession: (session: Session) => void;
}

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  session: DUMMY_SESSION,
  setSession: (session) => set({ session }),
}));
