import ConstructionERPDemo from "./ConstructionERPDemo";

export const metadata = {
  title: "Construction ERP Demo | ZenStax",
  description:
    "Explore a fictional ZenStax ERP demo for contractors and project teams. Track quotations, projects, site tasks, materials, invoices, and receivables in one workflow.",
  alternates: {
    canonical: "https://www.zenstaxit.net/demos/construction-erp",
  },
  openGraph: {
    title: "Construction ERP Demo | ZenStax",
    description:
      "A fictional project-operations ERP demo for contractors, engineering firms, and project teams.",
    url: "https://www.zenstaxit.net/demos/construction-erp",
    type: "website",
  },
};

export default function ConstructionERPPage() {
  return <ConstructionERPDemo />;
}