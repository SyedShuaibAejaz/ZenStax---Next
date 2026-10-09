import Link from "next/link";
import styles from "./web-development.module.css";

const PAGE_PATH = "/services/web-development";
const SITE_URL = "https://www.zenstaxit.net";

export const metadata = {
  title: "Custom Software & Web Development in the UAE",
  description:
    "ZenStax builds business websites, web applications, client portals, dashboards, and internal software for UAE companies. View a live demo and request a quote.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Custom Software & Web Development in the UAE | ZenStax",
    description:
      "Business websites, web applications, client portals, and dashboards built around how your team actually works.",
    url: PAGE_PATH,
    siteName: "ZenStax",
    locale: "en_AE",
    type: "website",
  },
};

const offerings = [
  {
    title: "Business websites",
    text: "Fast, responsive company websites that explain what you do clearly and make it easy for customers to contact you.",
  },
  {
    title: "Web applications",
    text: "Custom tools for the work your team repeats every day, built around your process instead of a generic template.",
  },
  {
    title: "Client and customer portals",
    text: "Secure areas where customers can submit requests, track progress, and find their information without calling you.",
  },
  {
    title: "Dashboards and reporting",
    text: "One clear view of leads, jobs, orders, or finances, so managers stop chasing updates across spreadsheets.",
  },
  {
    title: "Booking, enquiry and order tools",
    text: "Forms and workflows that capture requests properly and route them to the right person.",
  },
  {
    title: "Integrations and automation",
    text: "Connect your website and internal tools to the systems you already use, and remove repeated manual entry.",
  },
];

const steps = [
  {
    title: "Discover",
    text: "We learn how your team works today, where time is lost, and what the website or system must achieve.",
  },
  {
    title: "Design",
    text: "We agree the pages, workflows, and layout before building, so you can see the direction early.",
  },
  {
    title: "Build",
    text: "We develop in clear stages and share progress, so there are no surprises at the end.",
  },
  {
    title: "Launch and support",
    text: "We test, launch, and guide your team through using it, then stay available for improvements.",
  },
];

const faqs = [
  {
    q: "What is the difference between a website and a web application?",
    a: "A website mainly presents your business and generates enquiries. A web application lets users do something: log in, submit requests, track orders, or manage records. Many projects combine both.",
  },
  {
    q: "Do you build from templates or custom code?",
    a: "We recommend whichever fits the requirement. A simple brochure site may not need custom development, while a portal or internal system usually does. We explain the trade-offs before you commit.",
  },
  {
    q: "Can you connect the new system to the tools we already use?",
    a: "Often, yes. During discovery we check which systems you use and whether they can be integrated, so the new solution fits into your existing operations.",
  },
  {
    q: "How long does a project take and what does it cost?",
    a: "It depends on scope. After a short discovery conversation we provide a clear scope, timeline, and estimate before any work starts.",
  },
  {
    q: "Do you work with companies across the UAE?",
    a: "Yes. ZenStax is UAE-based and works with teams across the UAE, both on-site where needed and remotely.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Software & Web Development",
    serviceType: "Web development and custom software development",
    description:
      "Business websites, web applications, client portals, dashboards, and internal software systems.",
    url: `${SITE_URL}${PAGE_PATH}`,
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ZenStax",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Software & Web Development",
        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Custom Software &amp; Web Development</p>

          <h1>
            Websites and web applications
            <span> built around how your business works.</span>
          </h1>

          <p>
            ZenStax designs and builds business websites, customer portals,
            dashboards, and internal software for companies in the UAE, so your
            team spends less time on manual work and more time serving
            customers.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className="button button-primary">
              Discuss Your Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/demos/business-website"
              className="button button-secondary"
            >
              View Demo Website
            </Link>
          </div>
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
              A good website or software system should make it easier to serve
              customers, manage information, and run daily operations. We
              start from the process you already have and improve it where it
              slows people down.
            </p>
            <p>
              The result is a solution that is easy to use, easy to maintain,
              and ready to grow into automation and integrations later.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.offerSection} aria-labelledby="offer-heading">
        <div className="container">
          <p className="section-label">Services</p>
          <h2 id="offer-heading" className={styles.sectionTitle}>
            Web solutions for real business operations.
          </h2>

          <div className={styles.offerGrid}>
            {offerings.map((item, index) => (
              <article key={item.title} className={styles.offerCard}>
                <span className={styles.offerNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.showcaseSection} aria-labelledby="showcase-heading">
        <div className="container">
          <div className={styles.showcaseHeader}>
            <div>
              <p className="section-label">Demo website</p>
              <h2 id="showcase-heading" className={styles.sectionTitleLight}>
                See the standard of work before you commit.
              </h2>
            </div>
            <p>
              This sample website for a fictional interior design studio shows
              our approach to layout, typography, mobile design, and enquiry
              flow. Open it and try it on your phone.
            </p>
          </div>

          <div className={styles.browser}>
            <div className={styles.browserBar} aria-hidden="true">
              <span />
              <span />
              <span />
              <div className={styles.browserUrl}>
                sahara-interiors.example
              </div>
            </div>

            <Link
              href="/demos/business-website"
              className={styles.browserViewport}
              aria-label="Open the ZenStax demo website"
            >
              <div className={styles.previewSite} aria-hidden="true">
                <div className={styles.previewNav}>
                  <b>
                    Sahara<em>Interiors</em>
                  </b>
                  <i />
                </div>
                <div className={styles.previewHero}>
                  <small>Interior design studio</small>
                  <strong>
                    Spaces designed to feel calm, <em>and work properly.</em>
                  </strong>
                  <span />
                </div>
                <div className={styles.previewCards}>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.showcaseActions}>
            <Link
              href="/demos/business-website"
              className="button button-primary"
            >
              Open Demo Website
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/services/crm-erp" className="button button-secondary">
              See CRM &amp; ERP demos
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-heading">
            <p className="section-label">How we work</p>
            <h2>A simple process from first call to launch.</h2>
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

      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className={`container ${styles.faqLayout}`}>
          <div>
            <p className="section-label">FAQ</p>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              Common questions about web development.
            </h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-cta-section">
        <div className="container simple-cta-content">
          <div>
            <p className="section-label">Next step</p>
            <h2>Tell us what you want to improve.</h2>
            <p>
              Share a short description of your business and what is slowing
              your team down. We will suggest a practical approach and a clear
              scope.
            </p>
          </div>
          <Link href="/contact" className="button button-primary">
            Discuss Your Project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
