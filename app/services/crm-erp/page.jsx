import Link from "next/link";

export const metadata = {
  title: "CRM & ERP Solutions",
  description:
    "ZenStax provides CRM and ERP solutions to organize customers, sales, operations, tasks, invoices, and reporting.",
};

const benefits = [
  "Centralize customer, lead, and contact records.",
  "Track sales, quotations, invoices, payments, and follow-ups.",
  "Manage projects, work orders, tasks, approvals, and operations.",
  "Improve reporting and management visibility.",
  "Configure the system around your actual business process.",
];

export default function CRMERPPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">CRM & ERP Solutions</p>

          <h1>
            Bring your business information
            <span> into one clear system.</span>
          </h1>

          <p>
            ZenStax helps teams manage customers, sales, operations, records,
            and reporting without relying on scattered files and messages.
          </p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">Operational control</p>

            <h2>Know what is happening across your business.</h2>
          </div>

          <div className="content-copy">
            <p>
              CRM and ERP systems create a reliable source of information for
              your business. Instead of searching across spreadsheets and
              chats, your team can manage the workflow from one organized
              place.
            </p>

            <ul className="clean-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href="/contact" className="button button-primary">
              Discuss CRM / ERP
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="solutions-demo-section">
  <div className="container">
    <div className="solutions-demo-heading">
      <div>
        <p className="section-label">Interactive workflow demos</p>

        <h2>See how practical systems can organise your operations.</h2>
      </div>

      <p>
        Explore fictional ZenStax demo environments built to show how CRM and
        ERP workflows can improve visibility, ownership, follow-up, and daily
        operations.
      </p>
    </div>

    <div className="solutions-demo-grid">
      <article className="solution-demo-card">
        <div className="solution-demo-icon crm-demo-icon">◉</div>

        <p className="solution-demo-type">Lead management CRM</p>

        <h3>Real Estate Lead CRM</h3>

        <p>
          Track property enquiries from portals, WhatsApp, websites, social
          media, and referrals. Assign agents, schedule viewings, manage
          follow-ups, and keep every lead visible from first contact to
          closing.
        </p>

        <ul>
          <li>Lead pipeline and agent assignment</li>
          <li>Viewing and follow-up tracking</li>
          <li>Lead status and qualification reasons</li>
          <li>Management pipeline visibility</li>
        </ul>

        <Link
          href="/demos/real-estate-crm"
          className="button button-primary"
        >
          Open CRM Demo
          <span aria-hidden="true">→</span>
        </Link>
      </article>

      <article className="solution-demo-card erp-demo-card">
        <div className="solution-demo-icon erp-demo-icon">▦</div>

        <p className="solution-demo-type">Project operations ERP</p>

        <h3>Construction & Project ERP</h3>

        <p>
          Connect quotations, projects, site tasks, work orders, materials,
          progress reports, invoices, and receivables in one practical
          operations workspace.
        </p>

        <ul>
          <li>Project progress and budget visibility</li>
          <li>Work orders, task ownership, and due dates</li>
          <li>Material requests and delivery tracking</li>
          <li>Site reports, invoices, and receivables</li>
        </ul>

        <Link
          href="/demos/construction-erp"
          className="button button-primary"
        >
          Open ERP Demo
          <span aria-hidden="true">→</span>
        </Link>
      </article>
    </div>

    <p className="solutions-demo-note">
      <span>◈</span>
      Both environments use fictional sample data and demonstrate the type of
      workflow ZenStax can adapt around your actual business process.
    </p>
  </div>
</section>
    </>
  );
}