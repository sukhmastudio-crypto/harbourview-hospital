import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Harbourview collects, uses and protects your personal and health information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy policy" sub="How Harbourview collects, uses and protects your personal information." />
      {/* TEMPLATE: have a lawyer review this policy for the client before launch (Privacy Act 1988 and the Australian Privacy Principles). */}
      <section className="mx-auto max-w-3xl px-5 py-14 prose-h">
        <p>Harbourview Private Hospital (ABN 00 000 000 000) is bound by the Privacy Act 1988 (Cth) and the Australian Privacy Principles. This policy explains how we handle your personal information, including health information. Last updated: 1 January 2026.</p>
        <h2>What we collect</h2>
        <ul>
          <li>Contact details, such as your name, phone, email and address.</li>
          <li>Medicare, health fund and referral details.</li>
          <li>Health information needed to treat you, such as your history, medications and test results.</li>
          <li>Details you give us through this website, such as appointment requests and messages.</li>
        </ul>
        <h2>Why we collect it</h2>
        <p>We collect information to provide care, arrange appointments, bill you and your health fund, meet our legal duties and improve our services. We only collect health information with your consent or where the law allows.</p>
        <h2>Who we share it with</h2>
        <p>We share information with your treating doctors, referrers, health funds, Medicare and government bodies where required. We do not sell your information. We do not send it overseas unless we tell you first.</p>
        <h2>How we keep it safe</h2>
        <p>Records are stored securely and only authorised staff can access them. Our systems are protected by access controls and regular security reviews.</p>
        <h2>Website information</h2>
        <p>Forms on this website send the details you enter to our team. This site stores your recent appointment requests and theme choice on your own device only.</p>
        <h2>Access and correction</h2>
        <p>You can ask to see or correct your information by contacting our Medical Records team on (02) 9000 0400.</p>
        <h2>Complaints</h2>
        <p>Contact our Privacy Officer at info@harbourview.example. If you are not satisfied, you can complain to the Office of the Australian Information Commissioner (oaic.gov.au).</p>
      </section>
    </>
  );
}
