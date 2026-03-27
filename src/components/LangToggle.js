import React from "react";
import { useLang } from "../context/LangContext";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button onClick={toggleLang} className="theme-toggle">
      {lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
    </button>
  );
}