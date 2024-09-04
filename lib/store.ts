import { create } from "zustand";

interface authorizationState {
  Authorization: boolean | null;
  updateAuthorization: (Authorization: boolean) => void;
}

export const useAuthorization = create<authorizationState>((set) => ({
  Authorization: null,
  updateAuthorization: (Authorization: boolean) => {
    set({ Authorization });
  },
}));
