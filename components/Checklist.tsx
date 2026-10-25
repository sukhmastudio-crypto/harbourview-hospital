"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  "Medicare card", "Private health fund card", "GP referral letter", "Photo ID",
  "List of current medications", "Comfortable clothes and slippers", "Toiletries", "Glasses, hearing aids or dentures",
];

export default function Checklist() {
  const [done, setDone] = useState<number[]>([]);

  useEffect(() => {
    try {
      setDone(JSON.parse(localStorage.getItem("hv_pack") || "[]") as number[]);
    } catch {}
  }, []);

  function toggle(i: number) {
    const next = done.includes(i) ? done.filter((x) => x !== i) : [...done, i];
    setDone(next);
    try {
      localStorage.setItem("hv_pack", JSON.stringify(next));
    } catch {}
  }

  return (
    <>
      <div className="lg:col-span-5">
        <h2 className="font-display text-3xl font-semibold">What to bring</h2>
        <p className="muted mt-3 text-lg">Tick items off as you pack. Your list is saved on this device.</p>
        <p className="mt-6 text-sm font-semibold" aria-live="polite">{done.length} of {ITEMS.length} packed</p>
        <div className="mt-2 h-2 rounded-full" style={{ background: "var(--line)" }}>
          <div className="h-2 rounded-full" style={{ background: "var(--btn)", width: `${(done.length / ITEMS.length) * 100}%`, transition: "width .4s" }} />
        </div>
      </div>
      <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
        {ITEMS.map((t, i) => (
          <label key={t} className="card rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="h-5 w-5" style={{ accentColor: "var(--teal)" }} checked={done.includes(i)} onChange={() => toggle(i)} />
            <span>{t}</span>
          </label>
        ))}
      </div>
    </>
  );
}
