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

interface videoState {
  isPlay: boolean;
  elapsedTime: number;
  duration: number;
  title: string;
  banner: string;
  setPlay: (isPlay: boolean) => void;
  setElapsedTime: (elapsedTime: number) => void;
  setDuration: (duration: number) => void;
  setTitle: (title: string) => void;
  setBanner: (banner: string) => void;
  updateVideo: (data: Partial<Omit<videoState, 'updateVideo'>>) => void;
}

export const useVideo = create<videoState>((set) => ({
  isPlay: false,
  elapsedTime: 0,
  duration: 0,
  title: "",
  banner: "",


  setPlay: (isPlay: boolean) => set({ isPlay }),
  setElapsedTime: (elapsedTime: number) => set({ elapsedTime }),
  setDuration: (duration: number) => set({ duration }),
  setTitle: (title: string) => set({ title }),
  setBanner: (banner: string) => set({ banner }),
  updateVideo: (data) => set((state) => ({
    ...state,
    ...data,
  })),
}));