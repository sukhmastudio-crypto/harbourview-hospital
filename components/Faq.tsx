import { FAQS } from "@/lib/data";

export default function Faq() {
  return (
    <div className="grid gap-3">
      {FAQS.map((f) => (
        <details key={f.q} className="card rounded-xl px-5 py-4" data-rv>
          <summary className="flex items-center justify-between gap-4 font-semibold">
            {f.q}
            <span className="plus text-2xl leading-none" aria-hidden="true">+</span>
          </summary>
          <p className="muted mt-3 text-sm">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
