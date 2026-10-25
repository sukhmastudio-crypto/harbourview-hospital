import Image from "next/image";
import Link from "next/link";
import { initials, type Doctor } from "@/lib/data";

const doctorImages: Record<string, string> = {
  "Dr Amelia Chen": "/images/dr-amelia-chen.jpg",
  "Prof. Daniel Okafor": "/images/prof-daniel-okafor.jpg",
  "Dr Sophie Nguyen": "/images/dr-sophie-nguyen.jpg",
  "Dr Liam Patterson": "/images/dr-liam-patterson.jpg",
};

export default function DocCard({
  d,
  index = 0,
}: {
  d: Doctor;
  index?: number;
}) {
  const href = `/book?spec=${encodeURIComponent(
    d.spec
  )}&doctor=${encodeURIComponent(d.name)}`;

  const doctorInitials = initials(d.name);
  const imageSrc = doctorImages[d.name];

  return (
    <article
      className="card lift pop group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        animationDelay: `${Math.min(index, 8) * 65}ms`,
      }}
    >
      <div className="relative overflow-hidden border-b border-[rgba(15,42,58,0.08)] bg-[linear-gradient(135deg,#e8f2f3_0%,#f5f7f4_55%,#e8eee9_100%)] px-5 pb-5 pt-6">
        <div
          className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border border-[rgba(24,104,112,0.12)]"
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between gap-3">
          <span className="max-w-[80%] truncate rounded-full border border-[rgba(24,104,112,0.15)] bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-[#246b70]">
            {d.spec}
          </span>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#246b70]" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v4M16 3v4M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
              <path d="M12 10v6M9 13h6" />
            </svg>
          </span>
        </div>

        <div className="relative mt-5 flex items-center gap-4">
          <div className="relative h-[100px] w-[80px] shrink-0 overflow-hidden rounded-xl border-2 border-white bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${d.name} — demo doctor portrait`}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-[#174b55]">
                {doctorInitials}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#52757a]">
              Specialist profile
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#365b60]">
              Care and guidance tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="break-words text-lg font-semibold leading-snug tracking-tight text-[#163744]">
          {d.name}
        </h3>

        <p className="mt-2 text-sm font-semibold leading-relaxed text-[#26777b]">
          {d.role}
        </p>

        <div className="my-4 h-px w-full bg-[rgba(15,42,58,0.09)]" />

        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf4f3] text-[#26777b]" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
          </span>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-[#71858b]">
              Languages
            </p>
            <p className="mt-1 break-words text-sm leading-relaxed text-[#425c65]">
              {d.langs}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="btn btn-line flex w-full items-center justify-center gap-2 !px-4 !py-3 text-sm transition-all duration-200 group-hover:border-[#26777b]"
            aria-label={`Request an appointment with ${d.name}`}
          >
            Request an appointment
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          <p className="mt-3 text-center text-xs leading-5 text-[#71858b]">
            Demo profile · Details to be confirmed
          </p>
        </div>
      </div>
    </article>
  );
}