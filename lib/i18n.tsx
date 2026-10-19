"use client";

/**
 * Language scaffold — English today, Dzongkha prepared.
 *
 * To translate: add Dzongkha strings under `dz` using the same keys as `en`.
 * Any key missing from `dz` automatically falls back to English, so the site
 * can be translated one section at a time.
 *
 * Longer content (biography text) lives in /data/buliTrulku.ts. When you are
 * ready to translate it, add a parallel file such as /data/buliTrulku.dz.ts
 * and pick between them using `lang` from `useLang()`.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "dz";

const en = {
  "nav.story": "Story",
  "nav.lineage": "Lineage",
  "nav.timeline": "Timeline",
  "nav.teachers": "Teachers",
  "nav.places": "Places",
  "nav.foundation": "Foundation",
  "nav.gallery": "Gallery",
  "nav.legacy": "Legacy",
  "nav.search": "Search",
  "nav.menu": "Menu",
  "hero.begin": "Begin His Story",
  "image.soon": "Photograph coming soon",
  "lang.soon": "Dzongkha translation coming soon",
} as const;

export type MessageKey = keyof typeof en;

// Add Dzongkha translations here, e.g.  "nav.story": "…"
const dz: Partial<Record<MessageKey, string>> = {};

const dictionaries: Record<Lang, Partial<Record<MessageKey, string>>> = {
  en,
  dz,
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: MessageKey) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => en[k],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === "dz" ? "dz" : "en";
  }, [lang]);

  useEffect(() => {
    if (!notice) return;
    const id = window.setTimeout(() => setNotice(false), 3500);
    return () => window.clearTimeout(id);
  }, [notice]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    // Until Dzongkha strings exist, tell the visitor kindly.
    setNotice(l === "dz" && Object.keys(dz).length === 0);
  }, []);

  const t = useCallback(
    (key: MessageKey) => dictionaries[lang][key] ?? en[key],
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LangContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 border border-gold/50 bg-night/95 px-6 py-3 text-sm tracking-wide text-gold-soft transition-opacity duration-500 ${
          notice ? "opacity-100" : "opacity-0"
        }`}
      >
        {notice ? en["lang.soon"] : ""}
      </div>
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
