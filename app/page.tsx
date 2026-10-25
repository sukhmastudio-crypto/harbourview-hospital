import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import CtaBand from "@/components/CtaBand";
import DocCard from "@/components/DocCard";
import { Icon, ICONS } from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";
import { CONFIG, DOCTORS, SERVICES } from "@/lib/data";
import { delay } from "@/lib/ui";

const QUICK = [
  {
    href: "/book",
    icon: ICONS.calendar,
    title: "Book an appointment",
    sub: "Start with a simple request",
  },
  {
    href: "/doctors",
    icon: ICONS.search,
    title: "Find a specialist",
    sub: "Explore our medical team",
  },
  {
    href: "/visit",
    icon: ICONS.clipboard,
    title: "Plan your visit",
    sub: "Prepare for your appointment",
  },
  {
    href: `tel:${CONFIG.phoneLink}`,
    icon: ICONS.phone,
    title: CONFIG.phone,
    sub: "Speak with our team",
  },
];

const STATS = [
  { n: 38000, suffix: "", label: "patients cared for each year", text: "38,000" },
  { n: 312, suffix: "", label: "private rooms", text: "312" },
  { n: 480, suffix: "+", label: "visiting specialists", text: "480+" },
  { n: 39, suffix: "", label: "years caring for Sydney", text: "39" },
];

const WHY = [
  {
    icon: ICONS.dollar,
    title: "Clear costs, explained upfront",
    text: "Understand the expected costs and available options before proceeding with your care.",
  },
  {
    icon: ICONS.bed,
    title: "Comfort designed around you",
    text: "Thoughtfully designed spaces help patients and their families feel more comfortable.",
  },
  {
    icon: ICONS.phone,
    title: "Support beyond your appointment",
    text: "Clear follow-up guidance helps you understand the next steps in your care journey.",
  },
];

const REVIEWS = [
  {
    q: "Every nurse knew my name and my history. I never had to repeat myself once.",
    by: "Margaret, knee replacement",
  },
  {
    q: "The midwives let my husband stay overnight and made us feel like the only family on the ward.",
    by: "Priya, maternity",
  },
  {
    q: "Clear costs upfront, and a call the next morning to check how I was going.",
    by: "Tom, cardiac procedure",
  },
];

export default function HomePage() {
  return (
    <>
      {/* PREMIUM FULL-BACKGROUND HERO */}
      <section className="relative isolate min-h-[440px] overflow-hidden bg-[#102e32] sm:min-h-[500px] lg:min-h-[540px]">
        {/* Hospital background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/harbourview-hospital.png"
            alt="Harbourview Private Hospital building"
            className="h-full w-full object-cover object-[65%_center]"
          />
        </div>

        {/* Refined dark gradient: strongest behind the text */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2529]/95 via-[#0b2529]/80 to-[#0b2529]/25" />

        {/* Subtle lower shade for depth */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2529]/45 via-transparent to-[#0b2529]/10" />

        <div className="mx-auto flex min-h-[440px] max-w-7xl items-center px-5 py-10 sm:min-h-[500px] sm:px-8 sm:py-12 lg:min-h-[540px] lg:py-14">
          <div className="max-w-[650px] text-white">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#83d5c9]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b4e6df] sm:text-sm">
                Harbourview Private Hospital
              </p>
            </div>

            <h1 className="max-w-[620px] text-[2.7rem] font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
              Exceptional care.
              <br />
              <span className="font-normal text-[#c2e5df]">
                A more personal
                <br className="hidden sm:block" /> experience.
              </span>
            </h1>

            <p className="mt-6 max-w-[490px] text-base leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
              Expert specialists, thoughtful care and a team that puts you
              first — every step of your healthcare journey.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#d4eee8] px-6 py-3 text-sm font-semibold text-[#10383a] shadow-sm transition duration-200 hover:bg-white"
              >
                Book an appointment
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-white/40 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-white/70 hover:bg-white/10"
              >
                Explore our services
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-sm text-white/75 sm:mt-12">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#83d5c9]" />
                Specialist-led care
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <span>Support centred around you</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-5 sm:-mt-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map((q) => {
            const inner = (
              <>
                <span className="icobox">
                  <Icon d={q.icon} />
                </span>
                <span className="min-w-0">
                  <b className="block">{q.title}</b>
                  <span className="muted text-sm">{q.sub}</span>
                </span>
              </>
            );

            const cls = "card lift flex items-center gap-4 rounded-2xl p-5";

            return q.href.startsWith("tel:") ? (
              <a key={q.title} href={q.href} className={cls} data-rv>
                {inner}
              </a>
            ) : (
              <Link key={q.title} href={q.href} className={cls} data-rv>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl" data-rv>
            <p className="teal text-sm font-bold uppercase tracking-[.16em]">
              Our services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Thoughtful care for every stage of life.
            </h2>
            <p className="muted mt-4 text-lg leading-8">
              Explore our care services and find the right place to begin your
              healthcare journey.
            </p>
          </div>
          <Link href="/services" className="btn btn-line">
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} s={s} wide={i === 0} />
          ))}
        </div>
      </section>

      {/* HOSPITAL STATISTICS — VERIFY BEFORE PUBLISHING */}
      <section className="navy py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-2xl text-center" data-rv>
            <p
              className="text-sm font-semibold uppercase tracking-[.16em]"
              style={{ color: "#77d9d0" }}
            >
              Harbourview at a glance
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              A commitment to better care.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} data-rv>
                <p
                  className="font-display text-4xl font-semibold sm:text-5xl"
                  data-count={s.n}
                  data-suffix={s.suffix || undefined}
                >
                  {s.text}
                </p>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "var(--soft-on-navy)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-center text-xs"
            style={{ color: "var(--soft-on-navy)" }}
          >
            Demonstration figures: verify all statistics before publication.
          </p>
        </div>
      </section>

      {/* WHY HARBOURVIEW */}
<section className="why-section relative overflow-hidden">
  <div
    aria-hidden="true"
    className="why-decoration pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border"
  />

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
    {/* Left editorial content */}
    <div className="lg:col-span-5" data-rv>
      <div className="mb-5 flex items-center gap-3">
        <span className="why-eyebrow-line" />
        <p className="teal text-xs font-bold uppercase tracking-[0.2em]">
          The Harbourview difference
        </p>
      </div>

      <h2 className="font-display max-w-lg text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#102f43] sm:text-5xl lg:text-[3.4rem]">
        Healthcare that keeps you{" "}
        <span className="why-heading-accent">informed.</span>
      </h2>

      <p className="muted mt-6 max-w-md text-base leading-8 sm:text-lg">
        Knowing what happens next can make a difference. We believe in
        listening carefully, explaining options and treating every patient
        with respect.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Link
          href="/about"
          className="why-cta btn btn-teal group"
        >
          Discover our approach
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

        <span className="why-trust-note text-xs font-medium tracking-wide">
          Care with clarity and compassion
        </span>
      </div>
    </div>

    {/* Right benefit cards */}
    <div className="grid gap-4 lg:col-span-7">
      {WHY.map((w, i) => (
        <div
          key={w.title}
          className="why-card group relative flex gap-4 overflow-hidden rounded-2xl p-5 sm:gap-5 sm:p-7"
          data-rv
          style={{ "--why-index": i } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="why-card-glow pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full"
          />

          <div className="relative z-10 flex shrink-0 flex-col items-center gap-3">
            <span className="why-icon flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14">
              <Icon d={w.icon} />
            </span>

            <span className="why-card-index hidden text-[10px] font-bold tracking-[0.15em] sm:block">
              0{i + 1}
            </span>
          </div>

          <div className="relative z-10 min-w-0 flex-1 pt-0.5">
            <div className="mb-1 flex items-center gap-3 sm:hidden">
              <span className="why-card-index text-[10px] font-bold tracking-[0.15em]">
                0{i + 1}
              </span>
              <span className="why-mini-line" />
            </div>

            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-[#102f43] transition-colors duration-300 group-hover:text-[#087f80] sm:text-xl">
              {w.title}
            </h3>

            <p className="muted mt-2 text-sm leading-7 sm:mt-3">
              {w.text}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="why-card-marker absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0"
          />
        </div>
      ))}
    </div>
  </div>
</section>
      {/* DOCTORS */}
      <section className="soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl" data-rv>
              <p className="teal text-sm font-bold uppercase tracking-[.16em]">
                Meet the team
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Expertise with a human touch.
              </h2>
              <p className="muted mt-4 text-lg leading-8">
                Explore our specialists and learn about their areas of practice
                before requesting an appointment.
              </p>
            </div>
            <Link href="/doctors" className="btn btn-line">
              Meet our doctors <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 2, 4, 6]
              .filter((i) => Boolean(DOCTORS[i]))
              .map((i, n) => (
                <DocCard key={DOCTORS[i].name} d={DOCTORS[i]} index={n} />
              ))}
          </div>
        </div>
      </section>

     {/* PATIENT EXPERIENCES — VERIFY BEFORE PUBLISHING */}
<section className="testimonials-section relative overflow-hidden">
  <div
    aria-hidden="true"
    className="testimonials-orbit pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full border"
  />

  <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:py-28">
    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center" data-rv>
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="testimonials-heading-line" />
        <p className="teal text-xs font-bold uppercase tracking-[0.2em]">
          Patient experiences
        </p>
        <span className="testimonials-heading-line" />
      </div>

      <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#102f43] sm:text-4xl lg:text-5xl">
        Care is personal.
        <br className="hidden sm:block" /> It should feel that way.
      </h2>

      <p className="muted mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base sm:leading-8">
        Every patient’s experience is unique. Learn more about our approach
        and the support available throughout your care.
      </p>
    </div>

    {/* Testimonial cards */}
    <div className="mt-10 grid items-stretch gap-5 md:mt-14 md:grid-cols-3">
      {REVIEWS.map((r, i) => (
        <figure
          key={r.by}
          className="testimonial-card group relative flex min-h-[180px] flex-col overflow-hidden rounded-[18px] p-4 sm:p-5"
          data-rv
        >
          <span
            aria-hidden="true"
            className="testimonial-card-glow pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
          />

          <div className="relative z-10 flex items-center justify-between">
            <span
              aria-hidden="true"
              className="testimonial-quote font-display text-[76px] leading-[0.9]"
            >
              “
            </span>

            <span className="testimonial-number text-[10px] font-bold tracking-[0.18em]">
              0{i + 1} / 0{REVIEWS.length}
            </span>
          </div>
<blockquote
 className="font-display relative z-10 mt-1 flex-1 text-sm font-medium leading-6 tracking-[-0.01em] text-[#17394a] sm:text-base">
            {r.q}
          </blockquote>

          <div className="testimonial-divider relative z-10 my-3 h-px w-full" />

          <figcaption className="relative z-10 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="testimonial-avatar flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
            >
              {r.by.trim().charAt(0)}
            </span>

            <span className="muted text-sm font-medium leading-6">
              {r.by}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>

    {/* Disclosure */}
    <p className="testimonials-disclaimer mx-auto mt-7 max-w-2xl text-center text-[11px] leading-6 sm:text-xs">
      Sample testimonial content for design preview only. Replace with
      genuine, authorised patient feedback before publishing.
    </p>
  </div>
</section>

      {/* FINAL CTA */}
      <CtaBand
        title="Your next step starts with a conversation."
        sub="Send an appointment request and our team can guide you through the next steps."
      />
    </>
  );
}