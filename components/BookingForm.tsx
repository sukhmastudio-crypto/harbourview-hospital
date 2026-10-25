"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CAMPUSES, DOCTORS, SPECS } from "@/lib/data";
import { PHONE_RE, cleanPhone } from "@/lib/validate";
import { submitEnquiry } from "@/lib/submit";

type Recent = {
spec: string;
campus: string;
date: string;
doctor?: string;
};

type Errors = {
name?: string;
date?: string;
phone?: string;
};

export default function BookingForm({
initialSpec,
initialDoctor,
}: {
initialSpec?: string;
initialDoctor?: string;
}) {
const validDoctor = DOCTORS.find((d) => d.name === initialDoctor);
const validSpec = SPECS.includes(initialSpec ?? "")
? initialSpec!
: validDoctor?.spec ?? SPECS[0];

const [name, setName] = useState("");
const [spec, setSpec] = useState(validSpec);
const [campus, setCampus] = useState(CAMPUSES[0].name);
const [date, setDate] = useState("");
const [phone, setPhone] = useState("");
const [doctor, setDoctor] = useState(
validDoctor?.spec === validSpec ? validDoctor.name : ""
);
const [honey, setHoney] = useState("");
const [errors, setErrors] = useState<Errors>({});
const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
const [sending, setSending] = useState(false);
const [minDate, setMinDate] = useState("");
const [recent, setRecent] = useState<Recent[]>([]);

useEffect(() => {
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

setMinDate(
  [
    tomorrow.getFullYear(),
    String(tomorrow.getMonth() + 1).padStart(2, "0"),
    String(tomorrow.getDate()).padStart(2, "0"),
  ].join("-")
);

try {
  const saved: unknown = JSON.parse(
    localStorage.getItem("hv_requests") || "[]"
  );

  if (Array.isArray(saved)) {
    setRecent(
      saved
        .filter(
          (item): item is Recent =>
            item !== null &&
            typeof item === "object" &&
            typeof item.spec === "string" &&
            typeof item.campus === "string" &&
            typeof item.date === "string" &&
            (item.doctor === undefined ||
              typeof item.doctor === "string")
        )
        .slice(0, 10)
    );
  }
} catch {
  setRecent([]);
}

}, []);

function saveRecent(list: Recent[]) {
const limited = list.slice(0, 10);
setRecent(limited);

try {
  localStorage.setItem("hv_requests", JSON.stringify(limited));
} catch {
  // The form still works if local storage is unavailable.
}

}

function updateField(field: keyof Errors) {
setErrors((current) => ({ ...current, [field]: undefined }));
setMsg(null);
}

function handleSpecChange(nextSpec: string) {
setSpec(nextSpec);

const selectedDoctor = DOCTORS.find((d) => d.name === doctor);
if (selectedDoctor && selectedDoctor.spec !== nextSpec) {
  setDoctor("");
}

setMsg(null);

}

async function onSubmit(e: FormEvent<HTMLFormElement>) {
e.preventDefault();
if (sending) return;

const cleaned = cleanPhone(phone);
const next: Errors = {};

if (name.trim().length < 2) {
  next.name = "Please enter your full name.";
}

if (!date) {
  next.date = "Please select your preferred date.";
} else if (minDate && date < minDate) {
  next.date = "Please choose a date from tomorrow onwards.";
}

if (!PHONE_RE.test(cleaned)) {
  next.phone = "Enter a valid Australian phone number.";
}

if (
  doctor &&
  !DOCTORS.some((d) => d.name === doctor && d.spec === spec)
) {
  setDoctor("");
  setMsg({
    text: "The selected doctor does not match this specialty. Please select the doctor again.",
    ok: false,
  });
  return;
}

setErrors(next);

if (Object.keys(next).length > 0) {
  setMsg({
    text: "Please check the highlighted fields and try again.",
    ok: false,
  });
  return;
}

setSending(true);
setMsg(null);

try {
  const res = await submitEnquiry({
    type: "appointment",
    name: name.trim(),
    phone: cleaned,
    date,
    specialty: spec,
    campus,
    doctor,
    website: honey,
  });

  setMsg({
    text: res.demo
      ? "Demo mode: your form was tested, but no appointment request was sent to a hospital."
      : "Your request was submitted successfully. This does not confirm an appointment; confirmation depends on the receiving hospital.",
    ok: true,
  });

  saveRecent([
    { spec, campus, date, doctor: doctor || undefined },
    ...recent,
  ]);

  setName("");
  setPhone("");
  setDate("");
  setDoctor("");
  setErrors({});
} catch {
  setMsg({
    text: "We couldn't submit your request. Please try again or contact the hospital directly.",
    ok: false,
  });
} finally {
  setSending(false);
}

}

const inputClass = "field w-full min-w-0 transition-all duration-200 focus:outline-none";
const labelClass = "grid gap-1 text-sm font-medium";
const errorClass = "err text-xs";

return (
<section className="w-full">
<div className="mb-3">
<span className="inline-flex items-center gap-2 rounded-full border border-[rgba(38,119,123,0.18)] bg-[#edf5f3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#26777b]">
<span className="h-1.5 w-1.5 rounded-full bg-[#26777b]" />
Appointment enquiries
</span>

    <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-[#163744] sm:text-2xl">
      Book an appointment
    </h2>

    <p className="muted mt-1 text-xs leading-5">
      Explore the appointment booking experience using this demonstration
      form. Do not enter real personal or medical information.
    </p>
  </div>

  <form onSubmit={onSubmit} className="grid gap-2" noValidate>
    <label className={labelClass} htmlFor="bName">
      Full name
      <input
        id="bName"
        name="name"
        className={inputClass}
        autoComplete="name"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          updateField("name");
        }}
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? "bNameError" : undefined}
        required
      />
      {errors.name && (
        <span id="bNameError" className={errorClass} role="alert">
          {errors.name}
        </span>
      )}
    </label>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label className={labelClass} htmlFor="bSpec">
        Specialty
        <select
          id="bSpec"
          name="specialty"
          className={inputClass}
          value={spec}
          onChange={(e) => handleSpecChange(e.target.value)}
          required
        >
          {SPECS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClass} htmlFor="bLoc">
        Preferred campus
        <select
          id="bLoc"
          name="campus"
          className={inputClass}
          value={campus}
          onChange={(e) => setCampus(e.target.value)}
          required
        >
          {CAMPUSES.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </div>

    <label className={labelClass} htmlFor="bDoctor">
      Preferred doctor (optional)
      <select
        id="bDoctor"
        name="doctor"
        className={inputClass}
        value={doctor}
        onChange={(e) => {
          setDoctor(e.target.value);
          setMsg(null);
        }}
      >
        <option value="">No preference</option>
        {DOCTORS.filter((d) => d.spec === spec).map((d) => (
          <option key={d.name} value={d.name}>
            {d.name} — {d.role}
          </option>
        ))}
      </select>
    </label>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label className={labelClass} htmlFor="bDate">
        Preferred date
        <input
          id="bDate"
          name="date"
          type="date"
          className={inputClass}
          min={minDate || undefined}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            updateField("date");
          }}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "bDateError" : undefined}
          required
        />
        {errors.date && (
          <span id="bDateError" className={errorClass} role="alert">
            {errors.date}
          </span>
        )}
      </label>

      <label className={labelClass} htmlFor="bPhone">
        Australian phone number
        <input
          id="bPhone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="0412 345 678"
          className={inputClass}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            updateField("phone");
          }}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "bPhoneError" : undefined}
          required
        />
        {errors.phone && (
          <span id="bPhoneError" className={errorClass} role="alert">
            {errors.phone}
          </span>
        )}
      </label>
    </div>

    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <label htmlFor="bWebsite">Leave this field empty</label>
      <input
        id="bWebsite"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
      />
    </div>

    <button
      className="btn btn-teal flex w-full items-center justify-center gap-2"
      type="submit"
      disabled={sending}
      aria-busy={sending}
    >
      {sending ? (
        <>
          <svg
            className="animate-spin"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="3"
              opacity=".25"
            />
            <path
              d="M21 12a9 9 0 0 0-9-9"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          Processing request...
        </>
      ) : (
        <>
          Request an appointment
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </>
      )}
    </button>

    {msg && (
      <div
        role={msg.ok ? "status" : "alert"}
        aria-live="polite"
        className={`rounded-xl border p-3 text-sm leading-5 ${
          msg.ok
            ? "border-[#c5dfd4] bg-[#eff8f3] text-[#245f4a]"
            : "border-[#f0cccc] bg-[#fff4f3] text-[#9b3737]"
        }`}
      >
        <p className="font-semibold">
          {msg.ok ? "Request status" : "Something needs attention"}
        </p>
        <p className="mt-1">{msg.text}</p>
      </div>
    )}

    <p className="text-[11px] leading-4 text-[#71858b]">
      Demonstration website only. Submitting this form does not guarantee
      an appointment. Do not enter sensitive medical information.
    </p>
  </form>

  {recent.length > 0 && (
    <div className="mt-5 border-t border-[rgba(15,42,58,0.10)] pt-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-[#163744]">
          Recent requests on this device
        </h3>
        <button
          type="button"
          className="muted text-xs underline underline-offset-4"
          onClick={() => saveRecent([])}
        >
          Clear history
        </button>
      </div>

      <ul className="mt-2 grid gap-2">
        {recent.slice(0, 3).map((item, index) => (
          <li
            key={`${item.date}-${item.spec}-${index}`}
            className="rounded-xl border border-[rgba(15,42,58,0.07)] bg-[#f7f9f8] px-3 py-2"
          >
            <p className="text-sm font-medium text-[#163744]">
              {item.spec}
              {item.doctor ? ` · ${item.doctor}` : ""}
            </p>
            <p className="muted mt-1 text-xs">
              {item.campus} · {item.date}
            </p>
          </li>
        ))}
      </ul>

      <p className="muted mt-2 text-xs leading-5">
        This history is stored in your browser on this device. Other people
        using the same browser may be able to see it.
      </p>
    </div>
  )}
</section>

);
}