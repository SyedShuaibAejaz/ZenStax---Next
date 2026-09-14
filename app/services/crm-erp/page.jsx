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
    </>
  );
}