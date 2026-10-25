import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { Icon, ICONS } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { DOCTORS, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Medical Services",
  description:
    "Explore specialist medical services at Harbourview Private Hospital in Sydney, Australia. View care teams, service information and appointment options.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Specialist care, centred on you"
        sub="Explore our eight centres of care, meet the teams behind each service and find the information you need to plan your next step."
      />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="card rounded-2xl p-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-xs tracking-widest muted">
                  SERVICE {String(index + 1).padStart(2, "0")}
                </span>
                <span className="icobox mt-4 block w-fit">
                  <Icon d={service.icon} />
                </span>
                <h2 className="font-display text-xl font-semibold mt-4">
                  {service.name}
                </h2>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  Explore service
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {SERVICES.map((s, i) => {
        const team = DOCTORS.filter((d) => d.spec === s.spec);

        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`py-16 scroll-mt-24 ${
              i % 2 ? "soft" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-7" data-rv>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] muted">
                  <span className="h-px w-7 bg-current" />
                  Specialist service
                </span>

                <span className="icobox mt-5 block w-fit">
                  <Icon d={s.icon} />
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 leading-tight">
                  {s.name}
                </h2>

                <p className="muted mt-4 text-lg leading-8 max-w-2xl">
                  {s.long}
                </p>

                <h3 className="font-semibold mt-8">Areas of care</h3>

                <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-3 mt-4">
                  {s.treats.map((t) => (
                    <li key={t} className="check">
                      <Icon d={ICONS.tick} size={18} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    className="btn btn-teal"
                    href={`/book?spec=${encodeURIComponent(s.spec)}`}
                  >
                    Request an appointment
                  </Link>

                  <Link
                    className="btn btn-line"
                    href={`/doctors?spec=${encodeURIComponent(s.spec)}`}
                  >
                    Meet the team
                  </Link>
                </div>

                <p className="muted text-xs mt-4 leading-5">
                  Your GP may recommend a referral depending on the service
                  and your individual circumstances.
                </p>
              </div>

              <aside className="lg:col-span-5 self-start" data-rv>
                <div className="card rounded-2xl overflow-hidden">
                  <div className="p-6 md:p-7">
                    <span className="text-xs uppercase tracking-widest muted">
                      Service overview
                    </span>

                    <h3 className="font-display text-2xl font-semibold mt-2">
                      At a glance
                    </h3>

                    <dl className="mt-6 grid gap-5 text-sm">
                      <div className="border-b pb-4">
                        <dt className="muted">Location</dt>
                        <dd className="font-medium mt-1">{s.campus}</dd>
                      </div>

                      <div className="border-b pb-4">
                        <dt className="muted">Referral information</dt>
                        <dd className="font-medium mt-1">{s.ref}</dd>
                      </div>

                      <div className="border-b pb-4">
                        <dt className="muted">Typical stay</dt>
                        <dd className="font-medium mt-1">{s.stay}</dd>
                      </div>

                      <div>
                        <dt className="muted">Care team</dt>
                        <dd className="font-medium mt-1">
                          {team.length
                            ? team.map((doctor) => doctor.name).join(", ")
                            : "Contact our team for service information"}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="soft p-6 md:p-7">
                    <p className="font-semibold">Need help choosing?</p>
                    <p className="muted text-sm mt-2 leading-6">
                      Our team can help you understand the next steps for
                      arranging an appointment.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-medium text-sm mt-4"
                    >
                      Contact our team <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Finding the right service starts with a conversation"
        sub="Contact our team for general service information and guidance on arranging an appointment."
      />
    </>
  );
}