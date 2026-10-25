import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
title: "About",
description:
"Discover Harbourview Private Hospital's patient-first philosophy, values and approach to care.",
};

const TIMELINE = [
["1987", "The fictional Harbourview story begins with a community-focused hospital concept."],
["1998", "A proposed expansion introduces a dedicated cardiac care service."],
["2006", "The concept grows to include maternity and family-focused care."],
["2014", "A specialist cancer care centre becomes part of the vision."],
["2020", "A western Sydney campus is added to the demonstration timeline."],
["2024", "A named-nurse approach highlights continuity and personal attention."],
];

const VALUES = [
[
"Clear communication",
"Understand your options, ask questions freely and receive information in language that feels clear.",
],
[
"Continuity of care",
"A coordinated approach helps patients and care teams stay connected throughout the care journey.",
],
[
"Respect for every person",
"Care should recognise each person's needs, culture, identity, preferences and family circumstances.",
],
];

const LEADERS = [
["Dr Eleanor Whitfield", "Chief Executive Officer", "EW"],
["Michael Tran", "Chief Nursing Officer", "MT"],
["Dr Kavita Joshi", "Director of Clinical Governance", "KJ"],
];

export default function AboutPage() {
return (
<>
<PageHero
title="About Harbourview"
sub="A patient-first hospital concept built around thoughtful care, clear communication and a more personal experience."
/>

  <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-20">
    <div className="lg:col-span-5" data-rv>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#26777b]">
        Our philosophy
      </span>
      <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-[#163744] sm:text-4xl">
        Built around the patient's story
      </h2>
      <div className="mt-6 h-1 w-16 rounded-full bg-[#26777b]" />
    </div>

    <div className="muted grid gap-5 text-base leading-8 lg:col-span-7 lg:text-lg" data-rv>
      <p>
        Every patient's experience is different. Our concept for Harbourview
        starts with a simple principle: people deserve to feel heard,
        informed and respected throughout their care journey.
      </p>
      <p>
        From the first enquiry to appointments and follow-up, the aim is to
        make information easier to understand and care feel more connected.
        Thoughtful service, accessible communication and teamwork shape the
        experience we want this hospital to represent.
      </p>
      <p className="text-sm leading-6">
        Harbourview Private Hospital is a fictional website concept created
        for demonstration purposes. Its history, people, facilities and
        services are illustrative and have not been verified as real.
      </p>
    </div>
  </section>

  <section className="soft py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-5">
      <div className="max-w-2xl" data-rv>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#26777b]">
          Our story
        </span>
        <h2 className="font-display mt-3 text-3xl font-semibold text-[#163744] sm:text-4xl">
          A journey shaped by care
        </h2>
        <p className="muted mt-3 leading-7">
          An illustrative timeline showing how the Harbourview hospital
          concept could be presented.
        </p>
      </div>

      <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TIMELINE.map(([year, description]) => (
          <li
            key={year}
            className="card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            data-rv
          >
            <p className="font-display text-3xl font-semibold text-[#26777b]">
              {year}
            </p>
            <p className="muted mt-3 text-sm leading-6">{description}</p>
          </li>
        ))}
      </ol>
      <p className="muted mt-4 text-xs">
        All dates and milestones above are fictional demonstration content.
      </p>
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
    <div data-rv>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#26777b]">
        What matters to us
      </span>
      <h2 className="font-display mt-3 text-3xl font-semibold text-[#163744] sm:text-4xl">
        The principles behind every interaction
      </h2>
    </div>

    <div className="mt-9 grid gap-5 md:grid-cols-3">
      {VALUES.map(([title, description], index) => (
        <article
          key={title}
          className="card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
          data-rv
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4f0ef] font-display text-lg font-semibold text-[#26777b]">
            0{index + 1}
          </span>
          <h3 className="font-display mt-5 text-xl font-semibold text-[#163744]">
            {title}
          </h3>
          <p className="muted mt-3 text-sm leading-7">{description}</p>
        </article>
      ))}
    </div>
  </section>

  <section className="soft py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-5">
      <div data-rv>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#26777b]">
          The people behind the concept
        </span>
        <h2 className="font-display mt-3 text-3xl font-semibold text-[#163744] sm:text-4xl">
          Leadership
        </h2>
        <p className="muted mt-3 max-w-2xl text-sm leading-7">
          Sample leadership profiles demonstrate how a hospital can
          introduce its executive and clinical governance team.
        </p>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {LEADERS.map(([name, role, initials]) => (
          <article
            key={name}
            className="card flex items-center gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            data-rv
          >
            <div
              className="avatar shrink-0"
              aria-hidden="true"
            >
              {initials}
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-[#163744]">
                {name}
              </h3>
              <p className="muted mt-1 text-sm">{role}</p>
              <p className="mt-2 text-xs text-[#26777b]">
                Fictional demo profile
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="navy py-16 lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5" data-rv>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ed4d1]">
          Safety first
        </span>
        <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
          Safety and quality matter
        </h2>
      </div>

      <div className="grid gap-4 lg:col-span-7" data-rv>
        <p
          className="text-sm leading-7"
          style={{ color: "var(--soft-on-navy)" }}
        >
          Safe healthcare relies on clear processes, open communication,
          clinical oversight and ongoing improvement. A real hospital
          should publish only accurate, current information about its
          safety systems, outcomes and accreditation.
        </p>
        <p
          className="text-sm leading-7"
          style={{ color: "var(--soft-on-navy)" }}
        >
          This demonstration does not claim actual accreditation,
          certification, clinical outcomes or regulatory approval. Such
          details must be verified and approved before a real hospital
          website goes live.
        </p>
      </div>
    </div>
  </section>

  <CtaBand
    title="Your care journey starts with a conversation"
    sub="Explore the demonstration experience or get in touch with our team."
  />
</>

);
}