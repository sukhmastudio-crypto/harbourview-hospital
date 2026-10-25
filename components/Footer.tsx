import Link from "next/link";
import { CONFIG, NAV } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <footer className="navy pt-10 pb-6 sm:pt-12 sm:pb-7">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 text-sm sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {/* Hospital information */}
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold tracking-tight">
              {CONFIG.name}
            </p>

            <span
              className="mt-3 block h-0.5 w-10 rounded-full"
              style={{ background: "#77d9d0" }}
            />

            <p
              className="mt-3 max-w-md leading-6"
              style={{ color: "var(--soft-on-navy)" }}
            >
              {CONFIG.name} acknowledges the Traditional Custodians of the
              lands on which we work, and pays respect to Elders past and
              present.
            </p>

            <p
              className="mt-2 text-xs"
              style={{ color: "var(--soft-on-navy)" }}
            >
              ABN 00 000 000 000
            </p>
          </div>

          {/* Explore links */}
          <div>
            <p className="font-semibold">Explore</p>

            <ul
              className="mt-3 grid gap-2"
              style={{ color: "var(--soft-on-navy)" }}
            >
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    className="transition-colors duration-200 hover:text-white"
                    href={n.href}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  className="transition-colors duration-200 hover:text-white"
                  href="/book"
                >
                  Book online
                </Link>
              </li>

              <li>
                <Link
                  className="transition-colors duration-200 hover:text-white"
                  href="/privacy"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <p className="font-semibold">Contact</p>

            <ul
              className="mt-3 grid gap-3 leading-6"
              style={{ color: "var(--soft-on-navy)" }}
            >
              <li>
                120 Harbour Street
                <br />
                Sydney NSW 2000
              </li>

              <li>
                <a
                  className="transition-colors duration-200 hover:text-white"
                  href={`tel:${CONFIG.phoneLink}`}
                >
                  {CONFIG.phone}
                </a>
              </li>

              <li>
                <a
                  className="break-words transition-colors duration-200 hover:text-white"
                  href={`mailto:${CONFIG.email}`}
                >
                  {CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal information */}
        <div
          className="mx-auto mt-8 grid max-w-7xl gap-2 px-5 pt-5 text-[11px] leading-5 sm:mt-10 sm:pt-6 sm:text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,.15)",
            color: "#8fb2bf",
          }}
        >
          <p>
            This website offers general information only and is not medical
            advice. Always consult a registered health professional. In an
            emergency call 000.
          </p>

          <p>
            © {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile quick actions */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 p-3 md:hidden"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--line)",
          paddingBottom: "calc(.75rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <a href={`tel:${CONFIG.phoneLink}`} className="btn btn-line !py-2.5">
          Call us
        </a>

        <Link href="/book" className="btn btn-teal !py-2.5">
          Book online
        </Link>
      </div>
    </>
  );
}