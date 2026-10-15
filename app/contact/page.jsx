import { Suspense } from "react";
import ContactFormContent from "@/components/ContactFormContent";
import ui from "@/components/pages/pages.module.css";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact ZenStax",
  description:
    "Contact ZenStax to discuss custom software, AI automation, CRM/ERP, network infrastructure, and security requirements.",
};

function ContactLoading() {
  return (
    <>
      <section className={`${ui.pg} ${ui.hero} ${ui.onDark}`}>
        <div className={ui.wrap}>
          <div className={ui.heroUpper}>
            <div className={ui.gridLines} aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <div className={ui.metaBar}>
              <span className={ui.mono}>(03) Contact / ZenStax</span>
              <span className={ui.mono}>Ajman, United Arab Emirates</span>
              <span className={ui.mono}>Email · WhatsApp · Form</span>
            </div>

            <h1 className={ui.headline}>
              Tell us what is slowing{" "}
              <span className={ui.accent}>your business down.</span>
            </h1>
          </div>

          <div className={ui.band}>
            <p className={ui.lead}>
              Share your challenge, workflow, or project idea. We will help you
              identify a clear and practical next step.
            </p>
          </div>
        </div>
      </section>

      <section className={`${ui.pg} ${ui.sec} ${ui.secWhite}`}>
        <div className={ui.wrap}>
          <div className={styles.skeleton} aria-hidden="true">
            <div className={styles.skeletonBar} style={{ width: "45%" }} />
            <div className={styles.skeletonBar} style={{ width: "92%" }} />
            <div className={styles.skeletonBar} style={{ width: "78%" }} />
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
