import { NextResponse } from "next/server";
import { EMAIL_RE, PHONE_RE, cleanPhone } from "@/lib/validate";

type Body = Record<string, unknown>;
const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (str(body.website)) return NextResponse.json({ ok: true, demo: true });

  const type = str(body.type, 20);
  let clean: Record<string, string>;

  if (type === "appointment") {
    clean = {
      type,
      name: str(body.name, 100),
      phone: cleanPhone(str(body.phone, 30)),
      date: str(body.date, 20),
      specialty: str(body.specialty, 60),
      campus: str(body.campus, 60),
      doctor: str(body.doctor, 100),
    };
    if (clean.name.length < 2 || !PHONE_RE.test(clean.phone) || !clean.date || !clean.specialty || !clean.campus) {
      return NextResponse.json({ ok: false, error: "Please check the form fields" }, { status: 422 });
    }
  } else if (type === "message") {
    clean = { type, name: str(body.name, 100), email: str(body.email, 150), message: str(body.message, 2000) };
    if (clean.name.length < 2 || !EMAIL_RE.test(clean.email) || clean.message.length < 5) {
      return NextResponse.json({ ok: false, error: "Please check the form fields" }, { status: 422 });
    }
  } else {
    return NextResponse.json({ ok: false, error: "Unknown form" }, { status: 400 });
  }

  const hook = process.env.FORM_WEBHOOK_URL;
  if (hook) {
    try {
      const r = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...clean, receivedAt: new Date().toISOString() }),
      });
      if (!r.ok) throw new Error("Webhook failed");
    } catch {
      return NextResponse.json({ ok: false, error: "Could not deliver" }, { status: 502 });
    }
  } else {
    // Demo mode: nothing is delivered. Set FORM_WEBHOOK_URL in .env.local to go live.
    console.log("[enquiry:demo]", clean.type);
  }
  return NextResponse.json({ ok: true, demo: !hook });
}
