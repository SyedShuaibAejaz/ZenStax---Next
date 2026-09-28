import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const serviceLinks = [
  { label: "Custom Software", href: "/services/web-development" },
  { label: "AI Automation", href: "/services/ai" },
  { label: "CRM & ERP", href: "/services/crm-erp" },
  { label: "Network & Security", href: "/services/network-security" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/971521302565?text=Hi%20ZenStax,%20I%20would%20like%20to%20discuss%20a%20software,%20automation,%20CRM/ERP,%20network,%20or%20security%20requirement.",
    icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenstaxit/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syed-shuaib-2772822a7",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">ZenStax</p>

          <h2>
            Software. Data.
            <span> Network.</span>
          </h2>

          <p>
            We help businesses replace manual work with practical software,
            automation, network, and security solutions.
          </p>

          <div className="social-links" aria-label="ZenStax social media">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow ZenStax on ${social.label}`}
                  title={social.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3>Services</h3>

          <div className="footer-links">
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href}>
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>

          <div className="footer-links">
            <a href="mailto:contactus@zenstaxit.net">contactus@zenstaxit.net</a>
            <Link href="/contact">Discuss a project</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} ZenStax. All rights reserved.</p>
        <p>Ajman, United Arab Emirates</p>
      </div>
    </footer>
  );
}