import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/data";

export default function ServiceCard({
  s,
  wide = false,
}: {
  s: Service;
  wide?: boolean;
}) {
  return (
    <Link
      href={`/services#${s.slug}`}
      className={`service-card group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[22px] p-6 sm:p-7 ${
        wide ? "lg:col-span-2" : ""
      }`}
      data-rv
    >
      {/* Decorative background detail */}
      <span
        aria-hidden="true"
        className="service-card-orbit pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-gradient-to-bl from-[#e4f3f1]/70 to-transparent"
      />

      {/* Icon and action */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="service-card-icon flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px]">
          <Icon d={s.icon} />
        </span>

        <span
          aria-hidden="true"
          className="service-card-arrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
        >
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      {/* Service content */}
      <div className="relative z-10 mt-7">
        <p className="service-card-spec text-[10px] font-bold uppercase tracking-[0.2em]">
          {s.spec}
        </p>

        <h3 className="font-display mt-2.5 max-w-[28rem] text-[21px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#102f43] transition-colors duration-300 group-hover:text-[#087f80] sm:text-[23px]">
          {s.name}
        </h3>

        <p className="muted mt-3 max-w-[34rem] text-[13px] leading-[1.9] sm:text-sm">
          {s.blurb}
        </p>
      </div>

      {/* Bottom action */}
      <div className="relative z-10 mt-auto flex items-center gap-3 pt-7">
        <span className="service-card-rule h-px w-7 transition-all duration-300 group-hover:w-11" />

        <span className="text-[12px] font-bold tracking-[0.015em] text-[#176e75] sm:text-[13px]">
          Explore service
        </span>

        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-[#176e75] transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </Link>
  );
}