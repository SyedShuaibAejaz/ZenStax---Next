import Link from "next/link";

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

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">About ZenStax</p>

          <h1>
            Technology built around
            <span> real business operations.</span>
          </h1>

          <p>
            ZenStax helps businesses replace manual, disconnected work with
            clear software, automation, data, network, and security solutions.
          </p>
        </div>
      </section>

      <section className="standard-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">Our approach</p>

            <h2>We start with the workflow, not the technology.</h2>
          </div>

          <div className="content-copy">
            <p>
              Every business works differently. Before recommending a platform,
              dashboard, automation, CRM, network, or security solution, we
              first look at how work currently moves through the business.
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
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">How we think</p>
              <h2>The principles behind our work.</h2>
            </div>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="standard-section">
        <div className="container centered-content">
          <p className="section-label">What we deliver</p>

          <h2>One team for the systems your business relies on.</h2>

          <p>
            From customer-facing software and AI automation to CRM/ERP,
            network infrastructure, structured cabling, CCTV, and security
            support, ZenStax brings essential technology services together
            under one practical approach.
          </p>

          <Link href="/services" className="button button-primary">
            Explore Our Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}