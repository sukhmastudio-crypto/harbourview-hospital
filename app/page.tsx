import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import DocCard from "@/components/DocCard";
import { Icon, ICONS } from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";
import { CONFIG, DOCTORS, SERVICES } from "@/lib/data";

const QUICK = [
  {
    href: "/book",
    icon: ICONS.calendar,
    title: "Request an Appointment",
    sub: "Start with a simple request",
  },
  {
    href: "/doctors",
    icon: ICONS.search,
    title: "Find a Provider",
    sub: "Explore provider profiles",
  },
  {
    href: "/visit",
    icon: ICONS.clipboard,
    title: "Patient Resources",
    sub: "Prepare for your appointment",
  },
  {
    href: `tel:${CONFIG.phoneLink}`,
    icon: ICONS.phone,
    title: CONFIG.phone,
    sub: "Contact the clinic",
  },
];

const WHY = [
  {
    icon: ICONS.dollar,
    title: "Understand Your Care Costs",
    text: "Ask about insurance participation, expected out-of-pocket costs and payment policies before your visit.",
  },
  {
    icon: ICONS.bed,
    title: "Care That Respects Your Needs",
    text: "Discuss your concerns, preferences and health goals with your care team.",
  },
  {
    icon: ICONS.phone,
    title: "Know Your Next Steps",
    text: "Get clear information about follow-up visits, care options and referrals when applicable.",
  },
];

const CARE_POINTS = [
  {
    number: "01",
    title: "Request a Visit",
    text: "Share your appointment needs with the clinic. Your request is not confirmed until the clinic responds.",
  },
  {
    number: "02",
    title: "Prepare for Your Appointment",
    text: "Check what to bring, ask about insurance and confirm any instructions before your visit.",
  },
  {
    number: "03",
    title: "Discuss Your Care",
    text: "Talk through your concerns, available options and recommended next steps with your provider.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* CINEMATIC HERO WITH APPOINTMENT PANEL */}
      <section className="relative isolate overflow-hidden bg-[#0b2029] text-white">
        <div className="absolute inset-0 -z-20 lg:left-[32%]">
          <img
            src="/images/harbourview-hospital.png"
            alt="Modern hospital building"
            className="h-full w-full object-cover object-[60%_center]"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2029] via-[#0b2029]/90 to-[#0b2029]/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2029]/65 to-transparent" />

        <div className="mx-auto grid min-h-[500px] max-w-[1500px] items-center gap-10 px-5 py-10 sm:px-8 lg:min-h-[510px] lg:grid-cols-12 lg:gap-8 lg:px-12">
          {/* LEFT: HERO COPY */}
          <div className="relative z-10 lg:col-span-7" data-rv>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#75d2c5]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a6e2d9]">
                Harbourview Medical Clinic
              </p>
            </div>

            <h1 className="max-w-[620px] font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl xl:text-[4.1rem]">
              Better care
              <br />
              begins with
              <br />
              <span className="text-[#8bd8ce]">being heard.</span>
            </h1>

            <p className="mt-5 max-w-[430px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Explore medical services, meet your care team and take the next
              step towards care that considers your individual needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#c9eee6] px-5 py-3 text-sm font-semibold text-[#102e37] transition hover:bg-white"
              >
                Request an Appointment <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-b border-white/40 py-3 text-sm font-medium text-white/90 hover:border-[#8bd8ce] hover:text-[#8bd8ce]"
              >
                Explore Services <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/15 pt-5 text-xs text-white/70 sm:text-sm">
              <span>Personal attention</span>
              <span className="text-[#75d2c5]">✳</span>
              <span>Clear guidance</span>
            </div>
          </div>

          {/* RIGHT: COMPACT APPOINTMENT PANEL */}
          <div className="relative z-10 lg:col-span-5" data-rv>
            <div className="ml-auto max-w-[410px] rounded-2xl border border-white/20 bg-[#102832]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8bd8ce]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                    Request a visit
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-white/65">
                    Tell us what kind of appointment you need.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#8bd8ce]/30 bg-[#8bd8ce]/10 text-xl text-[#8bd8ce]">
                  +
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Step 01
                  </p>
                  <p className="mt-1 text-sm font-medium">Choose a service</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Step 02
                  </p>
                  <p className="mt-1 text-sm font-medium">Send your request</p>
                </div>
              </div>

              <Link
                href="/book"
                className="mt-4 flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#c9eee6] px-4 py-3 text-sm font-bold text-[#102e37] transition hover:bg-white"
              >
                Continue to Appointment Form
                <span aria-hidden="true">→</span>
              </Link>

              <p className="mt-3 text-center text-[10px] leading-5 text-white/50">
                Appointment requests are subject to clinic confirmation.
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#8bd8ce]/50 to-transparent"
        />
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
              Our Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Thoughtful care for every stage of life.
            </h2>
            <p className="muted mt-4 text-lg leading-8">
              Explore available services and find a place to begin your
              healthcare journey.
            </p>
          </div>

          <Link href="/services" className="btn btn-line">
            View All Services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} s={s} wide={i === 0} />
          ))}
        </div>
      </section>

      {/* CLINIC BENEFITS */}
      <section className="navy py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-2xl text-center" data-rv>
            <p
              className="text-sm font-semibold uppercase tracking-[.16em]"
              style={{ color: "#77d9d0" }}
            >
              A Better Care Experience
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Healthcare, centred around you.
            </h2>

            <p
              className="mt-4 text-base leading-7"
              style={{ color: "var(--soft-on-navy)" }}
            >
              From your first appointment request to follow-up planning,
              understand what to expect at each step.
            </p>
          </div>

          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              {
                title: "Personalized Attention",
                text: "Care conversations shaped around your needs and concerns.",
              },
              {
                title: "Convenient Appointment Requests",
                text: "A straightforward way to contact the clinic about a visit.",
              },
              {
                title: "Clear Next Steps",
                text: "Understand your options and how to move forward with your care.",
              },
            ].map((item) => (
              <div key={item.title} className="mx-auto max-w-sm" data-rv>
                <h3 className="font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--soft-on-navy)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HARBOURVIEW */}
      <section className="why-section relative overflow-hidden">
        <div
          aria-hidden="true"
          className="why-decoration pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5" data-rv>
            <div className="mb-5 flex items-center gap-3">
              <span className="why-eyebrow-line" />
              <p className="teal text-xs font-bold uppercase tracking-[0.2em]">
                The Harbourview Approach
              </p>
            </div>

            <h2 className="font-display max-w-lg text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#102f43] sm:text-5xl lg:text-[3.4rem]">
              Care that puts you first.
            </h2>

            <p className="muted mt-6 max-w-md text-base leading-8 sm:text-lg">
              Your healthcare should feel personal, clear and convenient. We
              focus on listening to your concerns, explaining your options and
              helping you take the next step with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/about" className="why-cta btn btn-teal group">
                Discover Our Approach
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

      {/* PROVIDERS */}
      <section className="soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl" data-rv>
              <p className="teal text-sm font-bold uppercase tracking-[.16em]">
                Meet the Team
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Expertise with a human touch.
              </h2>
              <p className="muted mt-4 text-lg leading-8">
                Explore provider profiles and learn about their areas of
                practice before requesting an appointment.
              </p>
            </div>

            <Link href="/doctors" className="btn btn-line">
              Meet Our Providers <span aria-hidden="true">→</span>
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

      {/* WHAT TO EXPECT */}
      <section className="testimonials-section relative overflow-hidden">
        <div
          aria-hidden="true"
          className="testimonials-orbit pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full border"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center" data-rv>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="testimonials-heading-line" />
              <p className="teal text-xs font-bold uppercase tracking-[0.2em]">
                Your Visit
              </p>
              <span className="testimonials-heading-line" />
            </div>

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#102f43] sm:text-4xl lg:text-5xl">
              Know what to expect.
              <br className="hidden sm:block" /> Feel ready for your visit.
            </h2>

            <p className="muted mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base sm:leading-8">
              A few simple steps can help you prepare for an appointment and
              have a more productive conversation about your health.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-5 md:mt-14 md:grid-cols-3">
            {CARE_POINTS.map((item) => (
              <article
                key={item.number}
                className="testimonial-card group relative flex min-h-[200px] flex-col overflow-hidden rounded-[18px] p-5 sm:p-6"
                data-rv
              >
                <span
                  aria-hidden="true"
                  className="testimonial-card-glow pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="testimonial-number text-xs font-bold tracking-[0.18em]">
                    {item.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl text-[#087f80]"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="font-display relative z-10 mt-5 text-xl font-semibold tracking-tight text-[#17394a]">
                  {item.title}
                </h3>

                <p className="muted relative z-10 mt-3 flex-1 text-sm leading-7">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/visit" className="btn btn-line">
              Prepare for Your Visit <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        title="Your next step starts with a conversation."
        sub="Send an appointment request and the clinic team can guide you through the next steps."
      />
    </>
  );
}