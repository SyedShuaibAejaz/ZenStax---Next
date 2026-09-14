import Link from "next/link";

export const metadata = {
  title: "Technology Services",
  description:
    "Explore ZenStax services: custom software, AI automation, CRM/ERP, mobile applications, network infrastructure, and security systems.",
};

const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Web applications, dashboards, client portals, and internal tools built around your exact workflow.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Automate repetitive tasks, reporting, customer follow-ups, and operational workflows.",
    href: "/services/ai",
  },
  {
    number: "03",
    title: "CRM & ERP",
    description:
      "Bring leads, customers, sales, projects, tasks, invoices, and reporting into one system.",
    href: "/services/crm-erp",
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Practical apps for customers, field teams, bookings, approvals, and operational access.",
    href: "/services/mobile-apps",
  },
  {
    number: "05",
    title: "Network Infrastructure",
    description:
      "Network planning, structured cabling, Wi-Fi, connectivity, and reliable IT foundations.",
    href: "/services/network-security",
  },
  {
    number: "06",
    title: "Security Systems",
    description:
      "CCTV and security-system installation support for better site, asset, and operational protection.",
    href: "/services/network-security",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">ZenStax Services</p>

          <h1>
            Solutions for businesses that need
            <span> clearer operations.</span>
          </h1>

          <p>
            We combine software, automation, CRM/ERP, mobile applications,
            network infrastructure, and security services to help businesses
            work with more clarity and control.
          </p>
        </div>
      </section>

      <section className="services-page-section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service) => (
              <article className="services-page-card" key={service.number}>
                <span>{service.number}</span>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <Link href={service.href} className="text-link">
                  Explore service <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-cta-section">
        <div className="container simple-cta-content">
          <div>
            <p className="section-label">Not sure where to start?</p>

            <h2>Tell us about the process you want to improve.</h2>

            <p>
              We will help you identify the most useful first step for your
              business.
            </p>
          </div>

          <Link href="/contact" className="button button-primary">
            Discuss Your Requirements
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}