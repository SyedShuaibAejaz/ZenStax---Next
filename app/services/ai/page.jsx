import Link from "next/link";

export const metadata = {
  title: "AI Automation Services",
  description:
    "ZenStax helps businesses automate repetitive tasks, customer follow-ups, reporting, and operational workflows.",
};

const benefits = [
  "Automate repetitive admin tasks and workflow steps.",
  "Create follow-up, notification, and reminder workflows.",
  "Improve response speed for leads and customer requests.",
  "Generate clearer reports from business data.",
  "Connect disconnected tools and reduce manual data entry.",
];

export default function AIPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">AI Automation</p>

          <h1>
            Reduce repetitive work.
            <span> Improve the way work moves.</span>
          </h1>

          <p>
            ZenStax designs practical automation that helps teams spend less
            time on manual tasks and more time on work that matters.
          </p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">What we help automate</p>

            <h2>Start with the task that wastes the most time.</h2>
          </div>

          <div className="content-copy">
            <p>
              AI automation is most useful when it is connected to a real
              workflow. We identify repeated steps, missed follow-ups, slow
              handovers, and manual reporting, then design an automation that
              supports your existing process.
            </p>

            <ul className="clean-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href="/contact" className="button button-primary">
              Discuss AI Automation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}