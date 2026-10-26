import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { Icon, ICONS } from "@/components/Icon";
import { CONFIG } from "@/lib/data";

export const metadata: Metadata = {
title: "Book an appointment",
description:
"Request an appointment with Harbourview Private Hospital. This is a demonstration booking form.",
};

export default async function BookPage({
searchParams,
}: {
searchParams: Promise<{ spec?: string; doctor?: string }>;
}) {
const { spec, doctor } = await searchParams;

const steps = [
"Submit your appointment request.",
"In a live booking system, the hospital team would review availability and contact you.",
"Have your referral and relevant health cover details ready if required.",
];

return (
<main className="mx-auto grid max-w-7xl items-start gap-3 px-4 pb-6 pt-2 lg:grid-cols-12 lg:gap-6">
<section className="card self-start rounded-2xl p-3 sm:p-4 lg:col-span-7">
<BookingForm
key={'${spec ?? ""}|${doctor ?? ""}'}
initialSpec={spec}
initialDoctor={doctor}
/>

    <p className="muted mt-3 text-xs leading-5">
      Demonstration website only. Do not enter real medical or personal
      information. Submissions may not be sent to a real hospital.
    </p>
  </section>

  <aside className="grid content-start gap-3 lg:col-span-5">
    <section className="card rounded-2xl p-4" data-rv>
      <h2 className="font-semibold text-[#163744]">
        What happens next
      </h2>

      <ol className="mt-3 grid gap-2 text-sm">
        {steps.map((step, index) => (
          <li key={step} className="check">
            <Icon d={ICONS.tick} size={18} />
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>

    <section className="card rounded-2xl p-4" data-rv>
      <h2 className="font-semibold text-[#163744]">
        Prefer to talk?
      </h2>
      <p className="muted mt-1 text-sm leading-5">
        Call{" "}
        <a className="underline underline-offset-4" href={`tel:${CONFIG.phoneLink}`}>
          {CONFIG.phone}
        </a>
        . Contact details shown are demonstration details.
      </p>
    </section>

    <section
      className="rounded-2xl p-4"
      style={{ border: "1px solid var(--alert)" }}
      data-rv
    >
      <h2 className="font-semibold" style={{ color: "var(--alert)" }}>
        This form is not for emergencies
      </h2>
      <p className="mt-1 text-sm leading-5">
        For a life threatening emergency in the United States, call 911.
      </p>
    </section>
  </aside>
</main>

);
}