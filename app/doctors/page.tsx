import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import DoctorsBrowser from "@/components/DoctorsBrowser";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Find a Doctor",
  description:
    "Explore the doctors featured in the Harbourview Private Hospital demo directory in Sydney, Australia. Browse by name or specialty and view appointment options.",
};

export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: Promise<{ spec?: string }>;
}) {
  const { spec } = await searchParams;

  return (
    <>
      <PageHero
        title="Meet your care team"
        sub="Explore our featured doctor profiles, search by name or filter by specialty. Languages and profile details help you compare your options."
      />

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] muted">
                Doctor directory
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">
                Find a specialist
              </h2>
            </div>

            <span className="rounded-full border px-4 py-2 text-xs font-medium muted">
              Featured demo profiles
            </span>
          </div>

          <DoctorsBrowser
            key={spec ?? "all"}
            initialSpec={spec}
          />

          <p className="muted mt-6 text-xs leading-5">
            This is a demonstration website. Doctor profiles and directory
            information are illustrative and should be verified before making
            any healthcare decisions.
          </p>
        </div>
      </section>

      <CtaBand
        title="Need help finding the right specialist?"
        sub="Contact our team for general service information and guidance on arranging an appointment."
      />
    </>
  );
}