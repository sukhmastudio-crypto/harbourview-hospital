"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONFIG, NAV } from "@/lib/data";
import { Icon, ICONS } from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function toggleTheme() {
    const el = document.documentElement;
    const dark = el.dataset.theme
      ? el.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    const next = dark ? "light" : "dark";
    el.dataset.theme = next;

    try {
      localStorage.setItem("hv_theme", next);
    } catch {}
  }

  return (
    <>
      {/* EMERGENCY INFORMATION BAR */}
      <div className="topbar text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-5 py-2">
          <p className="flex items-center gap-2">
            <span className="pulse dot" />
            <span>
  Personalized care. Convenient appointments. A healthier you.
</span>
          </p>

          <a
            className="hidden items-center gap-2 font-medium transition hover:underline sm:inline-flex"
            href={`tel:${CONFIG.phoneLink}`}
          >
            <Icon d={ICONS.phone} size={14} />
            Switchboard {CONFIG.phone}
          </a>
        </div>
      </div>

      {/* PREMIUM STICKY HEADER */}
      <header className="hdr sticky top-0 z-40 border-b border-black/[0.06] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          {/* BRAND */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${CONFIG.name} home`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#103b40] shadow-sm transition duration-200 group-hover:bg-[#174d50]">
              <svg
                width="27"
                height="27"
                viewBox="0 0 34 34"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M17 6.5V27.5M6.5 17H27.5"
                  stroke="#BDE9DF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="flex min-w-0 flex-col">
              <span className="truncate font-display text-lg font-semibold leading-tight tracking-[-0.035em] text-[#17383B] sm:text-xl">
                {CONFIG.short}
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#6B8583] sm:text-[10px]">
                PRIVATE MEDICAL CARE
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden h-full items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {NAV.map((n) => {
              const active =
  pathname === n.href ||
  (pathname !== "/" && pathname.startsWith(`${n.href}/`));

              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={pathname === n.href ? "page" : undefined}
                  className={`relative flex h-full items-center px-3 text-[13px] font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#17635D]"
                      : "text-[#526467] hover:text-[#17635D]"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute bottom-[17px] left-3 right-3 h-[2px] rounded-full bg-[#3D9C8D] transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E9E7] text-[#405C5B] transition hover:border-[#B5D4CE] hover:bg-[#F0F7F5]"
              aria-label="Switch colour theme"
              title="Switch colour theme"
            >
              <Icon d={ICONS.moon} size={18} />
            </button>

            <Link
              href="/book"
              className="hidden min-h-10 items-center justify-center gap-2 rounded-lg bg-[#103B40] px-4 text-[13px] font-semibold text-white shadow-sm transition duration-200 hover:bg-[#19534F] sm:inline-flex sm:px-5"
            >
              <span>Request Appointment</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E1E9E7] text-[#244B4C] transition hover:bg-[#F0F7F5] lg:hidden"
              aria-expanded={open}
              aria-controls="mnav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon d={ICONS.menu} size={21} />
            </button>
          </div>
        </div>

        {/* TABLET NAVIGATION */}
        <nav
          className="hidden border-t border-[#E8EFED] px-5 py-2 lg:flex lg:justify-center lg:gap-6 xl:hidden"
          aria-label="Tablet navigation"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`py-2 text-sm transition ${
                pathname === n.href
                  ? "font-semibold text-[#17635D]"
                  : "text-[#526467] hover:text-[#17635D]"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE NAVIGATION */}
        <div
          id="mnav"
          className={`overflow-hidden border-t border-[#E8EFED] bg-white transition-[max-height,opacity] duration-200 lg:hidden ${
            open
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 border-transparent opacity-0"
          }`}
          aria-hidden={!open}
        >
          <nav className="mx-auto max-w-7xl px-5 py-3" aria-label="Mobile navigation">
            {NAV.map((n) => {
              const active =
  pathname === n.href ||
  (pathname !== "/" && pathname.startsWith(`${n.href}/`));

              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={pathname === n.href ? "page" : undefined}
                  tabIndex={open ? 0 : -1}
                  className={`flex items-center justify-between border-b border-[#EDF1F0] py-3.5 text-sm ${
                    active
                      ? "font-semibold text-[#17635D]"
                      : "font-medium text-[#344F50]"
                  }`}
                >
                  {n.label}
                  <span aria-hidden="true" className="text-[#8AA5A0]">
                    →
                  </span>
                </Link>
              );
            })}

            <Link
              href="/book"
              tabIndex={open ? 0 : -1}
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#103B40] px-5 text-sm font-semibold text-white transition hover:bg-[#19534F]"
            >
              Book an appointment <span aria-hidden="true">↗</span>
            </Link>

            <a
              href={`tel:${CONFIG.phoneLink}`}
              tabIndex={open ? 0 : -1}
              className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#345C58]"
            >
              <Icon d={ICONS.phone} size={16} />
              Call {CONFIG.phone}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}