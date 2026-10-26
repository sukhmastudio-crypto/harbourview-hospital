import type { Metadata } from "next";
import Checklist from "@/components/Checklist";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import { FUNDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Patient information",
  description: "What to bring, visiting hours, health funds, costs and frequently asked questions for patients.",
};

const STEPS = [
  {
    t: "Request an appointment",
    d: "Contact our team to ask about available appointments and the services offered at the clinic.",
  },
  {
    t: "Prepare for your visit",
    d: "Bring your photo ID, current medication list, relevant medical records and insurance information, if applicable.",
  },
  {
    t: "Meet your care team",
    d: "Discuss your concerns, medical history and care options with your healthcare provider.",
  },
  {
    t: "Follow-up care",
    d: "Your provider will explain recommended next steps, prescriptions or follow-up appointments, as appropriate.",
  },
];

const HOURS = [
  ["Primary care", "By appointment", "Confirm availability with the clinic"],
  ["Specialty services", "By appointment", "Availability varies by service"],
  ["Appointment check-in", "Arrive a little early", "Bring your required documents"],
  ["Family or support person", "Ask when booking", "Policies may vary by appointment"],
];

export default function VisitPage() {
  return (
    <>
      <PageHero title="Patient information" sub="Everything you need before, during and after your stay." />

      <section className="mx-auto max-w-7xl px-5 py-16 grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5" data-rv>
          <h2 className="font-display text-3xl font-semibold">Your visit, step by step</h2>
          <p className="muted mt-3 text-lg">
  Every clinic visit is different. Our team can help you understand the appointment process and prepare for your visit.
</p>
        </div>
        <ol className="lg:col-span-7 grid gap-4">
          {STEPS.map((s, i) => (
            <li key={s.t} className="card rounded-2xl p-5 flex gap-4" data-rv>
              <span className="font-display text-3xl teal">{i + 1}</span>
              <div><h3 className="font-semibold">{s.t}</h3><p className="muted text-sm mt-1">{s.d}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="soft py-16">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10">
          <Checklist />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold" data-rv>Visiting hours</h2>
        <div className="card rounded-2xl mt-6 overflow-x-auto" data-rv>
          <table className="t">
            <thead><tr><th>Area</th><th>Visiting</th><th>Notes</th></tr></thead>
            <tbody>{HOURS.map((r) => (<tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>))}</tbody>
          </table>
        </div>
      </section>

      <section className="navy py-14">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-3 gap-8 lg:gap-10">
          <div data-rv>
            <h2 className="font-display text-2xl font-semibold">Covered by major health funds</h2>
            <p className="mt-3 text-sm" style={{ color: "var(--soft-on-navy)" }}>
  Insurance coverage and out-of-pocket costs depend on your plan and the services you receive. Contact your insurer and the clinic to confirm coverage, accepted plans and any expected costs before your appointment.
</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm font-semibold">
            {FUNDS.map((f) => (<div key={f} className="rounded-xl py-5" style={{ background: "rgba(255,255,255,.08)" }} data-rv>{f}</div>))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold mb-8" data-rv>Questions patients ask</h2>
        <Faq />
      </section>

      <CtaBand title="Still have a question?" sub="Our patient liaison team is here Monday to Friday, 8 am to 6 pm." />
    </>
  );
}
