import Link from "next/link";

export const metadata = {
  title: "Mobile App Development",
  description:
    "ZenStax develops practical mobile applications for customers, field teams, bookings, operations, and business workflows.",
};

const benefits = [
  "Customer-facing service, booking, and request applications.",
  "Field-team apps for task updates, records, and approvals.",
  "Mobile access to key operational information.",
  "Simple interfaces designed around the people who use them.",
  "Connected workflows with dashboards, CRM, ERP, or automation.",
];

export default function MobileAppsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Mobile Applications</p>

          <h1>
            Give customers and teams the right tools
            <span> wherever they work.</span>
          </h1>

          <p>
            ZenStax develops practical mobile experiences for bookings,
            service delivery, field operations, approvals, and customer access.
          </p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">Mobile, with a purpose</p>

            <h2>Build an app when it creates a better workflow.</h2>
          </div>

          <div className="content-copy">
            <p>
              We do not recommend an app simply because it sounds modern. We
              recommend it when mobile access can improve customer experience,
              staff productivity, operational speed, or service visibility.
            </p>

            <ul className="clean-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href="/contact" className="button button-primary">
              Discuss a Mobile App
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}