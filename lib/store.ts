import { create } from "zustand";

interface authorizationState {
  Authorization: boolean | null;
  updateAuthorization: (Authorization: boolean) => void;
}

interface messageState {
  message: string;
  updateMessage: (message: string) => void;
}

export const useAuthorization = create<authorizationState>((set) => ({
  Authorization: null,
  updateAuthorization: (Authorization: boolean) => {
    set({ Authorization });
  },
}));

export const useMessage = create<messageState>((set) => ({
  message: "", 
  updateMessage: (message: string) => {
    set({message}); 
  }
}))