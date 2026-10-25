/** Sends a form to /api/enquiry (default) or to NEXT_PUBLIC_FORM_ENDPOINT if set. */
export async function submitEnquiry(payload: Record<string, string>): Promise<{ demo: boolean }> {
  const external = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const url = external || "/api/enquiry";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Request failed");
  if (external) return { demo: false };
  const json = (await res.json()) as { demo?: boolean };
  return { demo: Boolean(json.demo) };
}
