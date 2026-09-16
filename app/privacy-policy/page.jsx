import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ZenStax",
  description:
    "Read how ZenStax collects, uses, protects, and manages personal information submitted through zenstaxit.net.",
  alternates: {
    canonical: "https://www.zenstaxit.net/privacy-policy",
  },
};

const LAST_UPDATED = "September 16, 2026";
const PRIVACY_EMAIL = "contactus@zenstaxit.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <p className="section-label">Legal information</p>
          <h1>Privacy Policy</h1>
          <p>
            This policy explains how ZenStax collects, uses, stores, and
            protects personal information when you use our website or contact
            us about our services.
          </p>
          <p className="legal-last-updated">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-layout">
          <aside className="legal-toc" aria-label="Privacy policy sections">
            <p>On this page</p>
            <a href="#who-we-are">Who we are</a>
            <a href="#information-we-collect">Information we collect</a>
            <a href="#how-we-use-information">How we use information</a>
            <a href="#analytics">Analytics and cookies</a>
            <a href="#sharing">How information is shared</a>
            <a href="#retention-security">Retention and security</a>
            <a href="#your-rights">Your rights</a>
            <a href="#contact">Contact us</a>
          </aside>

          <article className="legal-content">
            <p className="legal-intro">
              ZenStax provides software, data, network, CRM, ERP, security,
              and workflow-automation services. We aim to collect only the
              information needed to respond to enquiries, provide our services,
              operate our website, and improve how visitors use it.
            </p>

            <section id="who-we-are">
              <h2>1. Who we are</h2>
              <p>
                ZenStax (referred to in this policy as “ZenStax”, “we”, “us”,
                or “our”) operates <strong>zenstaxit.net</strong> and provides
                business technology services from the United Arab Emirates.
              </p>
              <p>
                For questions about privacy or this policy, contact us at{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
              </p>
            </section>

            <section id="information-we-collect">
              <h2>2. Information we collect</h2>
              <p>We may collect the following categories of information:</p>

              <h3>Information you provide directly</h3>
              <ul>
                <li>
                  Your name, company name, email address, phone number, and job
                  title.
                </li>
                <li>
                  The contents of an enquiry, service request, meeting request,
                  or message you send to us.
                </li>
                <li>
                  Information you provide during calls, meetings, proposals, or
                  service delivery.
                </li>
              </ul>

              <h3>Website and technical information</h3>
              <ul>
                <li>
                  Pages viewed, referring source, approximate location, device
                  type, browser, and visit timing.
                </li>
                <li>
                  General interaction events, such as a CRM demo view, a
                  contact-button click, a WhatsApp click, or a contact-form
                  submission.
                </li>
                <li>
                  Information necessary to protect the website against misuse,
                  fraud, spam, or security threats.
                </li>
              </ul>

              <p>
                Please do not send confidential client records, passwords,
                payment-card information, government-identification documents,
                or other sensitive personal information through our general
                website contact form unless we specifically request it through
                an appropriate secure channel.
              </p>
            </section>

            <section id="how-we-use-information">
              <h2>3. How we use information</h2>
              <p>We may use personal information to:</p>

              <ul>
                <li>
                  Respond to enquiries and communicate about requested services.
                </li>
                <li>
                  Arrange consultations, prepare proposals, and provide CRM,
                  ERP, software, data, network, security, or automation
                  services.
                </li>
                <li>
                  Maintain business records and manage customer relationships.
                </li>
                <li>
                  Improve website content, services, user experience, and
                  conversion paths.
                </li>
                <li>
                  Measure the performance of pages, demonstrations, and contact
                  calls to action.
                </li>
                <li>
                  Protect our systems, prevent misuse, and comply with
                  applicable legal obligations.
                </li>
              </ul>

              <p>
                We do not sell personal information. We do not use website
                analytics events to intentionally collect a visitor’s name,
                email address, telephone number, enquiry text, or other direct
                personal identifiers.
              </p>
            </section>

            <section id="analytics">
              <h2>4. Analytics and cookies</h2>
              <p>
                We may use privacy-conscious website analytics, including Vercel
                Web Analytics, to understand aggregated website usage. This can
                include page views and general events such as visits to a demo,
                clicks on a call-to-action button, clicks on a WhatsApp or phone
                link, or a completed contact form.
              </p>

              <p>
                Analytics helps us understand which pages are useful, whether a
                visitor reaches the contact page, and which general traffic
                sources bring visitors to our website. We use this information
                to improve our website and business communications.
              </p>

              <p>
                We may use essential cookies or similar technologies needed for
                the website to function, for security, and to remember basic
                preferences. If we add non-essential advertising, retargeting,
                heatmap, session-recording, or marketing-cookie technologies,
                we will update this policy and provide an appropriate notice or
                consent mechanism where required.
              </p>
            </section>

            <section id="sharing">
              <h2>5. How information is shared</h2>
              <p>
                We may share personal information only when reasonably necessary
                for the purposes described in this policy, including with:
              </p>

              <ul>
                <li>
                  Hosting, analytics, email, communications, CRM, and other
                  technology service providers that help us operate our
                  business.
                </li>
                <li>
                  Professional advisers, insurers, financial institutions, or
                  authorities where necessary for legitimate business, legal,
                  security, or compliance purposes.
                </li>
                <li>
                  A successor organisation in connection with a merger,
                  acquisition, restructuring, or sale of business assets,
                  subject to appropriate safeguards.
                </li>
              </ul>

              <p>
                We require service providers to handle information responsibly
                and only for appropriate service-related purposes. We do not
                sell or rent personal information to third parties.
              </p>
            </section>

            <section id="retention-security">
              <h2>6. Retention and security</h2>
              <p>
                We retain personal information only for as long as reasonably
                needed to respond to an enquiry, provide services, maintain
                business records, resolve disputes, protect our business, or
                comply with legal and accounting obligations.
              </p>

              <p>
                We use reasonable organisational, technical, and administrative
                measures designed to protect information against unauthorised
                access, loss, misuse, alteration, or disclosure. However, no
                website, email system, or internet transmission can be
                guaranteed completely secure.
              </p>
            </section>

            <section id="your-rights">
              <h2>7. Your rights and choices</h2>
              <p>
                Subject to applicable law, you may request access to, correction
                of, deletion of, restriction of, or information about the use
                of your personal information. Where processing relies on your
                consent, you may withdraw that consent at any time. Withdrawal
                will not affect processing that occurred before the withdrawal
                or processing that is otherwise permitted or required by law.
              </p>

              <p>
                To make a request, email{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> with
                the subject line “Privacy Request.” We may need to verify your
                identity before completing a request.
              </p>
            </section>

            <section>
              <h2>8. International processing</h2>
              <p>
                Our service providers may process information in countries other
                than the country where you live. When this occurs, we take
                reasonable steps to use appropriate safeguards and to limit
                processing to the purposes described in this policy.
              </p>
            </section>

            <section>
              <h2>9. Children’s privacy</h2>
              <p>
                Our website and services are intended for businesses and adults.
                We do not knowingly collect personal information from children.
                If you believe a child has provided personal information to us,
                please contact us so that we can take appropriate action.
              </p>
            </section>

            <section>
              <h2>10. Changes to this policy</h2>
              <p>
                We may update this policy from time to time to reflect changes
                in our services, website technologies, or legal obligations. We
                will post the updated version on this page and update the “Last
                updated” date above.
              </p>
            </section>

            <section id="contact">
              <h2>11. Contact us</h2>
              <p>
                For privacy questions, requests, or concerns, contact ZenStax
                at:
              </p>

              <p className="legal-contact-card">
                <strong>ZenStax</strong>
                <br />
                United Arab Emirates
                <br />
                Email:{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
                <br />
                Website:{" "}
                <a href="https://www.zenstaxit.net">zenstaxit.net</a>
              </p>
            </section>

            <div className="legal-note">
              <strong>Important:</strong> This page is a general website privacy
              policy template prepared for ZenStax and is not legal advice. Have
              a qualified legal adviser review it before relying on it as your
              final compliance policy, especially if you add advertising pixels,
              session recordings, payment processing, client portals, or process
              sensitive client data.
            </div>

            <Link href="/" className="legal-back-link">
              ← Back to ZenStax home
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}