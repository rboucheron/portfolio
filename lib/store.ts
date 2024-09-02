import { create } from "zustand";
import { getItem, setItem } from "./localStorage";

interface LangState {
  lang: "fr" | "eng";
  updateLang: (lang: "fr" | "eng") => void;
}

interface ThemeState {
  theme: "dark" | "clear";
  updateTheme: (theme: "dark" | "clear") => void;
}

interface UserPreference {
  theme: "dark" | "clear";
  lang: "fr" | "eng";
}

const getUserPreference = () => {
  const userPreference: null | UserPreference = getItem("userPreference");
  return userPreference;
};

export const useLang = create<LangState>((set) => {
  const userPreference = getUserPreference();
  return {
    lang: userPreference ? userPreference.lang : "fr",
    updateLang: (lang: "fr" | "eng") => {
      set({ lang });
      const updatedPreference = { ...userPreference, lang };
      setItem("userPreference", updatedPreference);
    },
  };
});

export const useTheme = create<ThemeState>((set) => {
  const userPreference = getUserPreference();
  return {
    theme: userPreference ? userPreference.theme : "clear",
    updateTheme: (theme: "dark" | "clear") => {
      set({ theme });
      const updatedPreference = { ...userPreference, theme };
      setItem("userPreference", updatedPreference);
    },
  };
});
