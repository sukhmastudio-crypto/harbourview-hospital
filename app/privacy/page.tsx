import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
title: "Privacy Notice",
description:
"Demonstration privacy notice explaining how a medical clinic website may handle personal information.",
};

export default function PrivacyPage() {
return (
<>
<PageHero
title="Privacy notice"
sub="Learn about privacy considerations for this medical clinic website concept."
/>

  <section className="mx-auto max-w-3xl px-5 py-14 prose-h">
    <p className="muted text-sm">
      DEMONSTRATION ONLY — Last updated: October 26, 2026.
    </p>

    <p>
      Harbourview Medical Clinic is a fictional clinic used to demonstrate
      a healthcare website design. This page is a sample notice, not a
      statement of the privacy practices of an operating healthcare
      provider. It has not been reviewed by a lawyer and should be
      customized and legally reviewed before any real clinic launches this
      website.
    </p>

    <h2>Information a real clinic website may collect</h2>
    <p>
      Depending on its features, a real website may collect information
      such as your name, contact details, appointment preferences and
      messages you submit. A healthcare provider may separately collect
      health and insurance information when arranging or providing care.
    </p>

    <h2>How information may be used</h2>
    <p>
      A real clinic may use information to respond to enquiries, manage
      appointments, coordinate care and meet applicable legal obligations.
      The purposes and lawful basis for collection must be explained by
      the actual provider.
    </p>

    <h2>Sharing and disclosure</h2>
    <p>
      Information-sharing practices depend on the provider, its service
      providers and applicable law. A real clinic should explain when
      information may be shared, with whom, and under what circumstances.
    </p>

    <h2>Security and retention</h2>
    <p>
      The actual provider must describe the safeguards it uses, how long
      information is retained, and how information is securely disposed of.
      This demonstration page does not verify or guarantee any security
      controls or data-retention practices.
    </p>

    <h2>Website forms and device storage</h2>
    <p>
      Before launch, the clinic should verify what each website form
      submits, where the information is sent, whether third-party services
      receive it, and whether cookies or local device storage are used.
      Do not submit real medical or personal information through a
      demonstration website.
    </p>

    <h2>Your privacy rights</h2>
    <p>
      Privacy rights and complaint procedures depend on the applicable
      laws and the actual organization operating the website. A real
      clinic should provide a verified privacy contact and explain how
      people can request access to or correction of their information.
    </p>

    <h2>Contact information</h2>
    <p>
      Harbourview Medical Clinic is a fictional demonstration brand.
      Contact details for a real privacy officer have not been provided.
      Replace this section with the operating clinic’s verified contact
      information before launch.
    </p>
  </section>
</>

);
}