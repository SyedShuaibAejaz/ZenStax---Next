import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.zenstaxit.net"),
  title: {
    default: "ZenStax | Software, Automation, CRM/ERP & Network Solutions",
    template: "%s | ZenStax",
  },
  description:
    "Custom software, AI automation, CRM/ERP, network infrastructure, and security solutions for businesses in Dubai and the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}