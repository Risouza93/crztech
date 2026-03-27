import React, { createContext, useState, useContext } from "react";
import { translations } from "../i18n/translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");

  const toggleLang = () => {
    const next = lang === "pt" ? "en" : "pt";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);