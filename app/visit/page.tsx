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
  { t: "Referral and booking", d: "Bring your GP referral. We check your health fund cover and give you a written cost estimate before you commit." },
  { t: "Pre-admission check", d: "A nurse reviews your medications and history by phone or in person, and answers questions about fasting and what to pack." },
  { t: "Admission day", d: "Check in at the Level 1 concierge. Your named nurse meets you and stays your point of contact until discharge." },
  { t: "Recovery at home", d: "A nurse rings you within 48 hours of discharge, and rehabilitation or home-visit services are booked before you leave." },
];

const HOURS = [
  ["General wards", "10 am to 8 pm", "Up to four visitors at a time"],
  ["Maternity", "Partners any time; visitors 2 pm to 8 pm", "Partners can stay overnight"],
  ["Paediatrics", "Parents 24 hours; visitors 10 am to 7 pm", "One parent bed beside every child"],
  ["Intensive care", "By arrangement", "Ask the nurse in charge"],
  ["Emergency", "One or two support people", "Depends on how busy we are"],
];

export default function VisitPage() {
  return (
    <>
      <PageHero title="Patient information" sub="Everything you need before, during and after your stay." />

      <section className="mx-auto max-w-7xl px-5 py-16 grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5" data-rv>
          <h2 className="font-display text-3xl font-semibold">Your visit, step by step</h2>
          <p className="muted mt-3 text-lg">Most planned admissions follow the same path. Your care coordinator walks you through each stage.</p>
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
            <p className="mt-3 text-sm" style={{ color: "var(--soft-on-navy)" }}>We have agreements with most Australian private health insurers, and accept DVA, workers compensation and CTP claims. Ask us for a no-obligation quote.</p>
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
