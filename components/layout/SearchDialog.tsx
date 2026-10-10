"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { lineage, teachers, places, lifeEvents } from "@/data/buliTrulku";
import { chapterId } from "@/lib/utils";

interface Entry {
  label: string;
  kind: string;
  href: string;
  hint?: string;
}

function buildIndex(): Entry[] {
  return [
    ...lineage.map((l) => ({
      label: l.name,
      kind: `Lineage · Chapter ${l.number}`,
      href: `/#${chapterId(l.number)}`,
      hint: l.place,
    })),
    ...lifeEvents.map((e) => ({
      label: e.title,
      kind: `Timeline · ${e.when}`,
      href: "/timeline",
      hint: e.description,
    })),
    ...teachers.map((t) => ({
      label: t.name,
      kind: "Teacher",
      href: `/teachers#${t.id}`,
      hint: t.relationship,
    })),
    ...places.map((p) => ({
      label: p.name,
      kind: "Place",
      href: `/places#${p.id}`,
      hint: p.region,
    })),
  ];
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return index
      .filter((e) => `${e.label} ${e.hint ?? ""} ${e.kind}`.toLowerCase().includes(term))
      .slice(0, 12);
  }, [q, index]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-night/90 px-5 pt-[14vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Search the biography"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl border border-gold/40 bg-night-soft p-6 text-ivory shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-gold/30 pb-4">
          <Search className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search names, teachers, places…"
            aria-label="Search"
            className="w-full bg-transparent font-display text-xl text-ivory placeholder:text-ivory/40 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="text-ivory/60 transition hover:text-gold-light"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="mt-3 max-h-[50vh] overflow-y-auto" aria-live="polite">
          {q && results.length === 0 && (
            <li className="py-6 text-center text-sm text-ivory/60">
              Nothing in the biography matches “{q}”.
            </li>
          )}
          {results.map((r) => (
            <li key={`${r.kind}-${r.label}`}>
              <Link
                href={r.href}
                onClick={onClose}
                className="block border-b border-gold/10 px-1 py-3 transition hover:bg-gold/10"
              >
                <span className="eyebrow block text-[0.6rem] text-gold-light">
                  {r.kind}
                </span>
                <span className="font-display text-xl">{r.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        {!q && (
          <p className="py-6 text-center text-sm text-ivory/50">
            Try “Dudjom”, “Zangthi” or “Lama Karpo”.
          </p>
        )}
      </div>
    </div>
  );
}
