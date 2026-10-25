import { delay } from "@/lib/ui";

export default function PageHero({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <section className="page-hero relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <div
            className="hero-a mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ ...delay(".02s"), color: "#c3dce4" }}
          >
            <span className="h-px w-9 bg-current" />
            Harbourview Private Hospital
          </div>

          <h1
            className="font-display text-4xl font-semibold leading-tight tracking-tight hero-a sm:text-5xl md:text-6xl lg:text-7xl"
            style={delay(".05s")}
          >
            {title}
          </h1>

          <p
            className="mt-5 max-w-2xl text-base leading-7 hero-a sm:mt-6 sm:text-lg sm:leading-8"
            style={{ ...delay(".2s"), color: "#c3dce4" }}
          >
            {sub}
          </p>

          <div
            aria-hidden="true"
            className="mt-8 h-1 w-16 rounded-full hero-a"
            style={{
              ...delay(".3s"),
              background: "linear-gradient(90deg, #75c5c1, #d7e9e8)",
            }}
          />
        </div>
      </div>
    </section>
  );
}