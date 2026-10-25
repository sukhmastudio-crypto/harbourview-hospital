import Link from "next/link";

export default function CtaBand({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <section className="soft relative overflow-hidden py-12 sm:py-14 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-current opacity-10 sm:h-64 sm:w-64"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full border border-current opacity-10 sm:h-56 sm:w-56"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center" data-rv>
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] muted">
          <span className="h-px w-6 bg-current" />
          Here for your next step
          <span className="h-px w-6 bg-current" />
        </span>

        <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem]">
          {title}
        </h2>

        <p className="muted mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
          {sub}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/book" className="btn btn-teal">
            Request an appointment
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>

          <Link href="/contact" className="btn btn-line">
            Contact our team
          </Link>
        </div>

        <p className="muted mt-4 text-[11px] leading-5">
          For general enquiries and appointment assistance.
        </p>
      </div>
    </section>
  );
}