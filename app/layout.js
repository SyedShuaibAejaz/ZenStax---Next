import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://www.zenstaxit.net";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const defaultTitle = "ZenStax | Software, Automation, CRM/ERP & Network Solutions";
const defaultDescription =
  "Custom software, AI automation, CRM/ERP, network infrastructure, and security solutions for businesses in Dubai and the UAE.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | ZenStax",
  },
  description: defaultDescription,
  applicationName: "ZenStax",
  openGraph: {
    type: "website",
    siteName: "ZenStax",
    locale: "en_AE",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ZenStax",
  legalName: "ZenStax FZC LLC",
  url: SITE_URL,
  description: defaultDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={manrope.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
