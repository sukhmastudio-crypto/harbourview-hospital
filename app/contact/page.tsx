import type { Metadata } from "next";
import MessageForm from "@/components/MessageForm";
import PageHero from "@/components/PageHero";
import { CAMPUSES, CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Explore the contact page concept for Harbourview Private Hospital, including demonstration campus details and an enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="We're here to help"
        sub="Have a question about an appointment or visiting a campus? Use the enquiry form below to explore our contact experience."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2">
        <div className="card self-start rounded-2xl p-6 sm:p-8">
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#26777b]">
              Get in touch
            </span>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[#163744]">
              Send an enquiry
            </h2>
            <p className="muted mt-2 text-sm leading-6">
              Share your general question using this demonstration form. Please
              do not include private medical or financial information.
            </p>
          </div>

          <MessageForm />

          <p className="muted mt-5 text-xs leading-5">
            Demonstration website only. Enquiries may not be delivered to a
            real hospital.
          </p>
        </div>

        <div className="grid content-start gap-5">
          <div
            className="rounded-2xl p-6"
            style={{ border: "1px solid var(--alert)" }}
            data-rv
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "rgba(180, 60, 60, 0.09)",
                  color: "var(--alert)",
                }}
                aria-hidden="true"
              >
                !
              </span>

              <div>
                <h2
                  className="font-semibold"
                  style={{ color: "var(--alert)" }}
                >
                  Medical emergency?
                </h2>
                <p className="mt-2 text-sm leading-6">
                  For a life-threatening emergency in the United States, call <strong>911</strong>.
                  Do not use this website's forms to request urgent medical
                  assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="card rounded-2xl p-6" data-rv>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#26777b]">
              Contact details
            </span>
            <h2 className="font-display mt-2 text-xl font-semibold text-[#163744]">
              Other ways to reach us
            </h2>

            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex flex-col justify-between gap-1 border-b border-[rgba(15,42,58,0.08)] pb-3 sm:flex-row sm:gap-4">
                <dt className="muted">Main switchboard</dt>
                <dd>
                  <a className="underline underline-offset-4" href={`tel:${CONFIG.phoneLink}`}>
                    {CONFIG.phone}
                  </a>
                </dd>
              </div>

              <div className="flex flex-col justify-between gap-1 border-b border-[rgba(15,42,58,0.08)] pb-3 sm:flex-row sm:gap-4">
                <dt className="muted">Billing enquiries</dt>
                
              </div>

              <div className="flex flex-col justify-between gap-1 border-b border-[rgba(15,42,58,0.08)] pb-3 sm:flex-row sm:gap-4">
                <dt className="muted">Medical records</dt>
                
              </div>

              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
                <dt className="muted">Email</dt>
                <dd className="break-all">
                  <a className="underline underline-offset-4" href={`mailto:${CONFIG.email}`}>
                    {CONFIG.email}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="muted mt-5 text-xs leading-5">
              All contact numbers and email details on this demo page are
              illustrative and may not connect to a real service.
            </p>
          </div>
        </div>
      </section>

      <section className="soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl" data-rv>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#26777b]">
              Find your way
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[#163744] sm:text-4xl">
              Our campuses
            </h2>
            <p className="muted mt-3 text-sm leading-6">
              Explore the example campus layouts and directions experience
              designed for Harbourview Private Hospital.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAMPUSES.map((campus, index) => (
              <article
                key={campus.name}
                className="card flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                data-rv
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5f3] text-sm font-semibold text-[#26777b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-[rgba(38,119,123,0.18)] px-3 py-1 text-xs text-[#26777b]">
                    Demo location
                  </span>
                </div>

                <h3 className="font-display mt-5 text-xl font-semibold text-[#163744]">
                  {campus.name}
                </h3>

                <p className="muted mt-2 text-sm leading-6">{campus.note}</p>

                <div className="mt-5 flex items-start gap-3">
                  <span className="mt-0.5 text-[#26777b]" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      width="19"
                      height="19"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <p className="text-sm leading-6">{campus.address}</p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[#26777b]" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      width="19"
                      height="19"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
                    </svg>
                  </span>
                  <a
                    className="text-sm underline underline-offset-4"
                    href={`tel:${campus.tel}`}
                  >
                    {campus.phone}
                  </a>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    className="btn btn-line flex w-full items-center justify-center gap-2 !px-4 !py-3 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${CONFIG.name} ${campus.address}`)}`}
                  >
                    View directions
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="muted mt-6 text-xs leading-5">
            Campus names, addresses and contact details are fictional
            demonstration content. Verify all details before using this design
            for a real healthcare provider.
          </p>
        </div>
      </section>
    </>
  );
}