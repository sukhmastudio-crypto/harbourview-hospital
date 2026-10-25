"use client";

import { useState } from "react";
import { DOCTORS, SPECS } from "@/lib/data";
import DocCard from "./DocCard";

export default function DoctorsBrowser({
  initialSpec,
}: {
  initialSpec?: string;
}) {
  const [spec, setSpec] = useState(
    initialSpec && SPECS.includes(initialSpec) ? initialSpec : "All"
  );
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const list = DOCTORS.filter(
    (d) =>
      (spec === "All" || d.spec === spec) &&
      (!q ||
        `${d.name} ${d.spec} ${d.role} ${d.langs}`
          .toLowerCase()
          .includes(q))
  );

  const hasFilters = spec !== "All" || query.length > 0;

  function clearFilters() {
    setSpec("All");
    setQuery("");
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:py-12">
      <div className="card rounded-2xl p-5 sm:p-7">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            Search our directory
          </h2>
          <p className="muted text-sm leading-6">
            Search by doctor name, specialty, area of focus or language.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="dSearch"
            >
              Doctor or keyword
            </label>

            <input
              id="dSearch"
              type="search"
              className="field w-full"
              placeholder="e.g. cardiology, English..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>

          {hasFilters && (
            <button
              type="button"
              className="btn btn-line"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-medium">Browse by specialty</p>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by specialty"
          >
            {["All", ...SPECS].map((s) => (
              <button
                key={s}
                type="button"
                className="chip"
                aria-pressed={spec === s}
                onClick={() => setSpec(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold">
            {spec === "All" ? "Featured doctors" : spec}
          </h3>
          <p className="muted mt-1 text-sm" aria-live="polite">
            {list.length} {list.length === 1 ? "profile" : "profiles"} found
          </p>
        </div>

        {hasFilters && (
          <span className="rounded-full border px-3 py-1.5 text-xs muted">
            Filtered results
          </span>
        )}
      </div>

      {list.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((d, i) => (
            <DocCard key={d.name} d={d} index={i} />
          ))}
        </div>
      ) : (
        <div className="card mt-5 rounded-2xl px-5 py-12 text-center">
          <h3 className="font-display text-xl font-semibold">
            No matching profiles
          </h3>
          <p className="muted mx-auto mt-2 max-w-md text-sm leading-6">
            Try another search term or clear your filters to browse all
            featured demo profiles.
          </p>
          <button
            type="button"
            className="btn btn-teal mt-5"
            onClick={clearFilters}
          >
            Show all doctors
          </button>
        </div>
      )}

      <p className="muted mt-6 text-xs leading-5">
        Doctor profiles shown here are illustrative demo content and are not
        a verified directory of practising clinicians.
      </p>
    </section>
  );
}