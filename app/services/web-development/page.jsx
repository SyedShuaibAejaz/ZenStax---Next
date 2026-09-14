import Link from "next/link";

export const metadata = {
  title: "Custom Software & Web Development",
  description:
    "ZenStax builds professional websites, web applications, dashboards, client portals, and internal software systems.",
};

const benefits = [
  "Professional business websites built for credibility and conversion.",
  "Customer portals and internal dashboards.",
  "Custom booking, enquiry, order, and service-management tools.",
  "Responsive experiences for desktop, tablet, and mobile.",
  "A scalable foundation for future automation and integrations.",
];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Custom Software</p>

          <h1>
            Software built for your workflow,
            <span> not a generic template.</span>
          </h1>

          <p>
            From business websites to dashboards, portals, and internal
            platforms, ZenStax builds web solutions that support real
            operations.
          </p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">What we build</p>

            <h2>Clear, useful systems that your team can rely on.</h2>
          </div>

          <div className="content-copy">
            <p>
              A good software solution should make it easier to serve
              customers, manage information, and run daily operations. We
              build around the process you already have and improve it where
              needed.
            </p>

            <ul className="clean-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href="/contact" className="button button-primary">
              Discuss Your Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}