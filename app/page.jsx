import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Web applications, dashboards, portals, and internal systems designed for your workflow.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Automate repetitive work, customer follow-ups, reporting, and daily business processes.",
    href: "/services/ai",
  },
  {
    number: "03",
    title: "CRM & ERP",
    description:
      "Manage customers, operations, tasks, sales, and reports from one organized system.",
    href: "/services/crm-erp",
  },
  {
    number: "04",
    title: "Network & Security",
    description:
      "Network infrastructure, structured cabling, CCTV, and business security-system support.",
    href: "/services/network-security",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn your current workflow and identify what is slowing the team down.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We recommend a practical solution with a clear scope and implementation path.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, configure, and test the system around your operational needs.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We help your team use the solution and improve it as the business grows.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-content">
            <p className="eyebrow">
              Software <span>•</span> Data <span>•</span> Network{" "}
              <span>•</span> Security
            </p>

            <h1>
              Technology that helps your business
              <span> work better.</span>
            </h1>

            <p className="hero-copy">
              ZenStax delivers custom software, AI automation, CRM/ERP,
              network infrastructure, and security solutions for businesses in
              Dubai and across the UAE.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Discuss Your Project
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/services" className="button button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="hero-points">
              <span>Built around your workflow</span>
              <span>Clear, practical solutions</span>
              <span>Dubai & UAE support</span>
            </div>
          </div>

          <div className="hero-side-card">
            <p className="side-card-label">ZenStax solutions</p>

            <h2>
              Replace scattered work with
              <span> one clear system.</span>
            </h2>

            <div className="side-card-list">
              <div>
                <span>01</span>
                <p>Organise customer, team, and operational information.</p>
              </div>

              <div>
                <span>02</span>
                <p>Automate repetitive tasks and important follow-ups.</p>
              </div>

              <div>
                <span>03</span>
                <p>Improve visibility, service consistency, and control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div>
            <p className="section-label">Why ZenStax</p>

            <h2>
              Technology should make work
              <span> simpler, not harder.</span>
            </h2>
          </div>

          <div className="intro-content">
            <p>
              Growing businesses often rely on WhatsApp, calls, spreadsheets,
              paper records, and disconnected tools. That creates manual work,
              missed follow-ups, and limited visibility.
            </p>

            <p>
              ZenStax helps bring essential operations into systems that are
              clear, reliable, and easy for teams to use.
            </p>

            <Link href="/about" className="text-link">
              Learn about ZenStax <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">What we do</p>
              <h2>Solutions built around your business.</h2>
            </div>

            <Link href="/services" className="text-link desktop-link">
              View all services <span>→</span>
            </Link>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link href={service.href} className="service-link">
                  Learn more <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="container outcomes-grid">
          <div className="outcomes-copy">
            <p className="section-label">Business outcomes</p>

            <h2>Less manual work. More control over your operations.</h2>

            <p>
              We focus on the areas that have the greatest day-to-day impact:
              clearer processes, better team coordination, faster customer
              responses, and reliable information.
            </p>

            <Link href="/contact" className="button button-primary">
              Discuss Your Workflow
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="outcome-list">
            <div className="outcome-item">
              <span>01</span>
              <div>
                <h3>Organised operations</h3>
                <p>Keep customers, tasks, orders, and records in one place.</p>
              </div>
            </div>

            <div className="outcome-item">
              <span>02</span>
              <div>
                <h3>Automated follow-ups</h3>
                <p>Reduce routine reminders, messages, and manual admin work.</p>
              </div>
            </div>

            <div className="outcome-item">
              <span>03</span>
              <div>
                <h3>Better client service</h3>
                <p>Respond clearly, track requests, and give reliable updates.</p>
              </div>
            </div>

            <div className="outcome-item">
              <span>04</span>
              <div>
                <h3>Scalable foundation</h3>
                <p>Use systems that can support new staff, locations, and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-heading">
            <p className="section-label">How we work</p>
            <h2>From workflow problem to working solution.</h2>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>

                <div className="process-line" />

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="challenge-section">
  <div className="container">
    <div className="challenge-heading">
      <p className="section-label">Where should we start?</p>

      <h2>Choose the business challenge you want to improve.</h2>

      <p>
        You do not need to know the exact technology. Start with the problem,
        and ZenStax will help you identify the most practical solution.
      </p>
    </div>

    <div className="challenge-grid">
      <Link
        href="/contact?challenge=customer-follow-ups"
        className="challenge-card"
      >
        <span className="challenge-number">01</span>

        <h3>Customer follow-ups</h3>

        <p>
          Reduce missed leads, manual reminders, delayed replies, and customer
          follow-up work.
        </p>

        <span className="challenge-link">
          Explore solution <span>→</span>
        </span>
      </Link>

      <Link
        href="/contact?challenge=manual-work"
        className="challenge-card"
      >
        <span className="challenge-number">02</span>

        <h3>Too much manual work</h3>

        <p>
          Replace repetitive tasks, Excel files, paper records, and
          disconnected daily processes.
        </p>

        <span className="challenge-link">
          Explore solution <span>→</span>
        </span>
      </Link>

      <Link
        href="/contact?challenge=business-visibility"
        className="challenge-card"
      >
        <span className="challenge-number">03</span>

        <h3>Limited business visibility</h3>

        <p>
          Get a clearer view of operations, tasks, customers, records, and
          business reporting.
        </p>

        <span className="challenge-link">
          Explore solution <span>→</span>
        </span>
      </Link>

      <Link
        href="/contact?challenge=website-or-app"
        className="challenge-card"
      >
        <span className="challenge-number">04</span>

        <h3>Website or customer portal</h3>

        <p>
          Give customers and teams a professional digital place to enquire,
          book, access, or manage services.
        </p>

        <span className="challenge-link">
          Explore solution <span>→</span>
        </span>
      </Link>

      <Link
        href="/contact?challenge=crm-erp"
        className="challenge-card"
      >
        <span className="challenge-number">05</span>

        <h3>CRM or ERP setup</h3>

        <p>
          Manage leads, customers, sales, projects, tasks, invoices, and
          operations in one system.
        </p>

        <span className="challenge-link">
          Explore solution <span>→</span>
        </span>
      </Link>

      <Link
        href="/contact?challenge=network-security"
        className="challenge-card"
      >
        <span className="challenge-number">06</span>

        <h3>Network or security support</h3>

        <p>
          Improve network infrastructure, structured cabling, CCTV, and
          security systems for your business site.
        </p>

        <span className="challenge-link">
          Explore solution <span>→</span>
        </span>
      </Link>
    </div>
  </div>
</section>

      <section className="cta-banner">
        <div className="container cta-banner-content">
          <div>
            <p className="section-label">Start with a conversation</p>

            <h2>Ready to improve the way your business works?</h2>

            <p>
              Tell us what is slowing your team down. We will help you identify
              a clear and practical next step.
            </p>
          </div>

          <Link href="/contact" className="button button-light">
            Let&apos;s Talk
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}