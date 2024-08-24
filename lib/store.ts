import { create } from "zustand";


export const useLang = create((set) => ({
  lang: "fr",
  updateLang: (lang: 'fr' | 'eng') => {
    set({ lang });
  },
}));

