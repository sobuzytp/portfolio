import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations";

const SettingsContext = createContext(null);

function readSaved(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(() => readSaved("theme", "dark"));
  const [lang, setLang] = useState(() => readSaved("lang", "bn"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("theme", theme);
      localStorage.setItem("lang", lang);
    } catch {
      /* storage not available */
    }
  }, [theme, lang]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "bn" ? "en" : "bn"));

  const value = { theme, lang, toggleTheme, toggleLang, t: translations[lang] };
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  return useContext(SettingsContext);
}
