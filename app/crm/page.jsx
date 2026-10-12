import Link from "next/link";
import styles from "./crm.module.css";

export const metadata = {
  title: "ZenStax CRM",
  description:
    "A modern CRM tailored to how your team sells: contacts, pipelines, custom fields, automations, lead capture forms and reports. Try the live demo.",
  alternates: {
    canonical: "https://www.zenstaxit.net/crm",
  },
  openGraph: {
    title: "ZenStax CRM",
    description:
      "A modern CRM tailored to your business, hosted for you. Explore the live demo.",
    url: "https://www.zenstaxit.net/crm",
    type: "website",
  },
};

// Set NEXT_PUBLIC_CRM_DEMO_URL to the demo address, for example https://your-crm-domain/demo
const demoUrl = process.env.NEXT_PUBLIC_CRM_DEMO_URL;

const features = [
  {
    title: "Contacts and companies",
    text: "Keep every person and organisation in one place, with notes, tasks and deals on the same record.",
  },
  {
    title: "Sales pipelines",
    text: "Drag deals between stages, run more than one pipeline, and see the value in each stage at a glance.",
  },
  {
    title: "Custom fields",
    text: "Add the fields your business actually uses to contacts, companies and deals, without a developer.",
  },
  {
    title: "Automations",
    text: "Create follow-up tasks or update a contact automatically when a deal is created or reaches a stage.",
  },
  {
    title: "Lead capture forms",
    text: "Publish a form for your website. Each enquiry becomes a contact with a note and a follow-up task.",
  },
  {
    title: "Reports and forecast",
    text: "Track won deals, win rate, lead sources and a weighted forecast, and export your data to CSV.",
  },
];

const steps = [
  {
    title: "Discovery call",
    text: "We learn how your team sells today: your stages, your fields and where leads come from.",
  },
  {
    title: "Tailoring",
    text: "We set up the CRM around your process, with your branding, pipelines, fields and automations.",
  },
  {
    title: "Launch",
    text: "Your team gets access, and we help you bring your existing contacts and deals across.",
  },
  {
    title: "Hosting",
    text: "Your CRM runs online on its own database, covered by one simple monthly fee.",
  },
];

const pricing = [
  {
    label: "One-time",
    title: "Tailoring",
    price: "Quoted for your project",
    text: "The cost depends on how much the CRM needs to be shaped around your workflow. After a short discovery call you receive a clear quote before any work starts.",
  },
  {
    label: "Monthly",
    title: "Hosting and database",
    price: "Billed monthly",
    text: "Your CRM is hosted online and your data lives in a database set up for your business, so it is not mixed with other companies.",
  },
];

export default function CRMPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">ZenStax CRM</p>

          <h1>
            A modern CRM, built
            <span> around how your team sells.</span>
          </h1>

          <p>
            Contacts, pipelines, follow-ups and reports in one clean workspace,
            tailored to your business and hosted for you.
          </p>

          <div className={styles.heroActions}>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Try the live demo
                <span aria-hidden="true">→</span>
              </a>
            )}

            <Link
              href="/contact"
              className={`button ${demoUrl ? "button-secondary" : "button-primary"}`}
            >
              Discuss your CRM
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">Explore it yourself</p>

            <h2>See the real product, not screenshots.</h2>
          </div>

          <div className="content-copy">
            <p>
              The live demo opens a read-only version of ZenStax CRM filled with
              sample data. Look through contacts, drag through the deal
              pipeline, open the reports and check the settings, all without
              creating an account.
            </p>

            <p>
              Nothing you do in the demo changes anything, and none of the data
              is real.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page-section">
        <div className="container">
          <div className="centered-content">
            <p className="section-label">What is inside</p>

            <h2>The tools a sales team uses every day.</h2>
          </div>

          <div className="services-page-grid" style={{ marginTop: 42 }}>
            {features.map((feature, index) => (
              <article key={feature.title} className="services-page-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-heading">
            <p className="section-label">How it works</p>

            <h2>Tailored to you, then hosted for you.</h2>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={step.title} className="process-step">
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="process-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="values-section">
        <div className="container">
          <div className="centered-content">
            <p className="section-label">Pricing</p>

            <h2>A tailored build, then a simple monthly fee.</h2>
          </div>

          <div className={styles.priceGrid}>
            {pricing.map((item) => (
              <article key={item.title} className={styles.priceCard}>
                <p className={styles.priceLabel}>{item.label}</p>
                <h3>{item.title}</h3>
                <p className={styles.priceValue}>{item.price}</p>
                <p className={styles.priceText}>{item.text}</p>
              </article>
            ))}
          </div>

          <p className={styles.priceNote}>
            Every business works differently, so we quote each CRM after talking
            to you. Book a call and you will get a clear price before you commit.
          </p>
        </div>
      </section>

      <section className="simple-cta-section">
        <div className="container simple-cta-content">
          <div>
            <p className="section-label">Next step</p>

            <h2>Tell us how your team sells today.</h2>

            <p>
              We will show you how ZenStax CRM can be shaped around your process
              and give you a clear quote.
            </p>
          </div>

          <Link href="/contact" className="button button-primary">
            Request a quote
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
