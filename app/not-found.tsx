import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="font-display text-6xl teal">404</p>
      <h1 className="font-display text-3xl font-semibold mt-4">We can’t find that page</h1>
      <p className="muted mt-3 text-lg">It may have moved. Try the home page, or call us if you need help.</p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn btn-teal">Go home</Link>
        <Link href="/contact" className="btn btn-line">Contact us</Link>
      </div>
    </section>
  );
}
