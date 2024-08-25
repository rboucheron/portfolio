import { create } from "zustand";

interface LangState {
  lang: 'fr' | 'eng';
  updateLang: (lang: 'fr' | 'eng') => void;
}

export const useLang = create<LangState>((set) => ({
  lang: "fr",
  updateLang: (lang: 'fr' | 'eng') => {
    set({ lang });
  },
}));