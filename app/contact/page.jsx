import { Suspense } from "react";
import ContactFormContent from "@/components/ContactFormContent";

export const metadata = {
  title: "Contact ZenStax",
  description:
    "Contact ZenStax to discuss custom software, AI automation, CRM/ERP, network infrastructure, and security requirements.",
};

function ContactLoading() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Contact ZenStax</p>

          <h1>
            Tell us what is slowing
            <span> your business down.</span>
          </h1>

          <p>
            Share your challenge, workflow, or project idea. We will help you
            identify a clear and practical next step.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-loading">
            Loading contact form...
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactFormContent />
    </Suspense>
  );
}