import Link from "next/link";

export const metadata = {
  title: "Network Infrastructure & Security Systems",
  description:
    "ZenStax supports network infrastructure, structured cabling, CCTV, and security-system installation for businesses in Dubai and the UAE.",
};

const benefits = [
  "Network planning and reliable connectivity foundations.",
  "Structured cabling and organized infrastructure support.",
  "Wi-Fi and network setup for business locations.",
  "CCTV and security-system installation support.",
  "A coordinated approach alongside your software and operational needs.",
];

export default function NetworkSecurityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Network & Security</p>

          <h1>
            Reliable infrastructure for
            <span> secure business operations.</span>
          </h1>

          <p>
            ZenStax supports the network, cabling, CCTV, and security systems
            that help businesses stay connected, protected, and operational.
          </p>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">Reliable foundations</p>

            <h2>Support the technology your business depends on.</h2>
          </div>

          <div className="content-copy">
            <p>
              Your software and daily operations rely on secure, dependable
              infrastructure. We help businesses plan and implement practical
              network and security solutions that support their sites and teams.
            </p>

            <ul className="clean-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href="/contact" className="button button-primary">
              Discuss Infrastructure
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}