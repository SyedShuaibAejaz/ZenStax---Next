import Link from "next/link";
import styles from "./about.module.css";
import ui from "@/components/pages/pages.module.css";

export const metadata = {
  title: "About ZenStax",
  description:
    "Learn about ZenStax, a Dubai-based provider of custom software, AI automation, CRM/ERP, network infrastructure, and security solutions.",
};

const values = [
  {
    number: "01",
    title: "Practical first",
    description:
      "We focus on the business problem before choosing the technology.",
  },
  {
    number: "02",
    title: "Built around people",
    description:
      "Systems should be easy for real teams to understand and use every day.",
  },
  {
    number: "03",
    title: "Clear delivery",
    description:
      "We keep communication, scope, timelines, and next steps transparent.",
  },
  {
    number: "04",
    title: "Ready to grow",
    description:
      "We build foundations that can support new customers, staff, locations, and services.",
  },
];

const deliverables = [
  "Custom software",
  "AI automation",
  "CRM / ERP",
  "Mobile applications",
  "Network infrastructure",
  "Security systems",
];

export default function AboutPage() {
  return (
    <>
      <section className={`${ui.pg} ${ui.hero} ${ui.onDark}`} aria-labelledby="about-title">
        <div className={ui.wrap}>
          <div className={ui.heroUpper}>
            <div className={ui.gridLines} aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <div className={ui.metaBar}>
              <span className={ui.mono}>(02) About / ZenStax</span>
              <span className={ui.mono}>Ajman · Dubai, UAE</span>
              <span className={ui.mono}>Software · Data · Network · Security</span>
            </div>

            <h1 id="about-title" className={ui.headline}>
              Technology built around{" "}
              <span className={ui.accent}>real business operations.</span>
            </h1>
          </div>

          <div className={ui.band}>
            <p className={ui.lead}>
              ZenStax helps businesses replace manual, disconnected work with
              clear software, automation, data, network, and security solutions.
            </p>

            <div className={ui.heroAside}>
              <div className={ui.cellLabel}>
                <span className={ui.mono}>What we deliver</span>
              </div>

              <ul className={ui.caps}>
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${ui.pg} ${ui.sec} ${ui.secWhite}`}>
        <div className={ui.wrap}>
          <div className={ui.labelRow}>
            <span className={ui.mono}>Our approach</span>
            <span className={ui.mono}>(01)</span>
          </div>

          <div className={ui.grid12}>
            <h2 className={`${ui.display} ${styles.approachTitle}`}>
              We start with the workflow,{" "}
              <span>not the technology.</span>
            </h2>

            <div className={styles.approachCopy}>
              <p>
                Every business works differently. Before recommending a
                platform, dashboard, automation, CRM, network, or security
                solution, we first look at how work currently moves through the
                business.
              </p>

              <p>
                This helps us identify what is slowing the team down, where
                information gets lost, and which improvement will have the
                greatest practical value.
              </p>

              <p>
                Our goal is not to add unnecessary complexity. It is to create
                systems that make the work clearer, faster, more reliable, and
                easier to scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${ui.pg} ${ui.sec} ${ui.secSurface}`} aria-labelledby="values-title">
        <div className={ui.wrap}>
          <div className={ui.labelRow}>
            <span className={ui.mono}>How we think</span>
            <span className={ui.mono}>(02)</span>
          </div>

          <h2 id="values-title" className={`${ui.display} ${ui.reveal}`}>
            The principles behind <span>our work.</span>
          </h2>

          <div className={ui.reveal}>
            {values.map((value) => (
              <div className={styles.valueRow} key={value.number}>
                <span className={styles.valueNum}>{value.number}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${ui.pg} ${ui.sec} ${ui.secDark} ${ui.onDark}`}>
        <div className={ui.wrap}>
          <div className={ui.labelRow}>
            <span className={ui.mono}>What we deliver</span>
            <span className={ui.mono}>(03)</span>
          </div>

          <div className={ui.grid12}>
            <h2 className={`${ui.display} ${styles.deliverTitle}`}>
              One team for the systems <span>your business relies on.</span>
            </h2>

            <p className={`${ui.bodyCopy} ${styles.deliverCopy}`}>
              From customer-facing software and AI automation to CRM/ERP,
              network infrastructure, structured cabling, CCTV, and security
              support, ZenStax brings essential technology services together
              under one practical approach.
            </p>
          </div>

          <ul className={`${ui.caps} ${styles.deliverCaps}`}>
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.deliverAction}>
            <Link href="/services" className="button button-primary">
              Explore Our Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
