"use client";

import { useState, type FormEvent } from "react";
import { CONFIG } from "@/lib/data";
import { EMAIL_RE } from "@/lib/validate";
import { submitEnquiry } from "@/lib/submit";

type Errors = {
  name?: string;
  email?: string;
  text?: string;
};

export default function MessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  function clearError(field: keyof Errors) {
    setErrors((current) => ({ ...current, [field]: undefined }));
    setMsg(null);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (sending) return;

    const next: Errors = {};

    if (name.trim().length < 2) {
      next.name = "Please enter your name.";
    }

    if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (text.trim().length < 5) {
      next.text = "Please tell us how we can help (at least 5 characters).";
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
        type: "message",
        name: name.trim(),
        email: email.trim(),
        message: text.trim(),
        website: honey,
      });

      setMsg({
        text: res.demo
          ? "Demo mode: your form was tested, but no message was sent to the hospital."
          : "Your message was submitted. This demonstration website cannot guarantee a reply.",
        ok: true,
      });

      setName("");
      setEmail("");
      setText("");
      setHoney("");
      setErrors({});
    } catch {
      setMsg({
        text: "We couldn't submit your message. Please try again later.",
        ok: false,
      });
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "field w-full transition-all duration-200 focus:outline-none";

  return (
    <section className="w-full">
      <div className="mb-5">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#26777b]">
          Contact our team
        </span>

        <h2 className="font-display mt-2 text-2xl font-semibold text-[#163744] sm:text-3xl">
          Send us a message
        </h2>

        <p className="muted mt-2 text-sm leading-6">
          Use this demonstration form to explore the contact experience. Do not
          enter sensitive personal, financial or medical information.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
        <label className="grid gap-2 text-sm font-medium" htmlFor="mName">
          Full name
          <input
            id="mName"
            name="name"
            type="text"
            className={inputClass}
            autoComplete="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "mNameError" : undefined}
            required
          />
          {errors.name && (
            <span id="mNameError" className="err" role="alert">
              {errors.name}
            </span>
          )}
        </label>

        <label className="grid gap-2 text-sm font-medium" htmlFor="mEmail">
          Email address
          <input
            id="mEmail"
            name="email"
            type="email"
            className={inputClass}
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "mEmailError" : undefined}
            required
          />
          {errors.email && (
            <span id="mEmailError" className="err" role="alert">
              {errors.email}
            </span>
          )}
        </label>

        <label className="grid gap-2 text-sm font-medium" htmlFor="mText">
          How can we help?
          <textarea
            id="mText"
            name="message"
            rows={5}
            className={inputClass}
            placeholder="Write your general enquiry here..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              clearError("text");
            }}
            aria-invalid={!!errors.text}
            aria-describedby={errors.text ? "mTextError" : undefined}
            required
          />
          {errors.text && (
            <span id="mTextError" className="err" role="alert">
              {errors.text}
            </span>
          )}
        </label>

        {/* Honeypot field for basic bot filtering */}
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
          <label htmlFor="mWebsite">Leave this field empty</label>
          <input
            id="mWebsite"
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
              Sending message...
            </>
          ) : (
            <>
              Send enquiry
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
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4Z" />
              </svg>
            </>
          )}
        </button>

        {msg && (
          <div
            role={msg.ok ? "status" : "alert"}
            aria-live="polite"
            className={`rounded-xl border p-4 text-sm leading-6 ${
              msg.ok
                ? "border-[#c5dfd4] bg-[#eff8f3] text-[#245f4a]"
                : "border-[#f0cccc] bg-[#fff4f3] text-[#9b3737]"
            }`}
          >
            <p className="font-semibold">
              {msg.ok ? "Submission status" : "Please check your form"}
            </p>
            <p className="mt-1">{msg.text}</p>
          </div>
        )}

        <p className="muted text-xs leading-5">
          This is a fictional hospital demonstration website. Submitting this
          form may not deliver a message to any hospital.
        </p>

        <p className="muted text-xs">
          For emergencies in Australia, call 000.
        </p>
      </form>
    </section>
  );
}