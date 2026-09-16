import RealEstateCRMDemo from "./RealEstateCRMDemo";

export const metadata = {
  title: "Real Estate Lead CRM Demo",
  description:
    "Explore a fictional ZenStax demo showing how Dubai real estate teams can manage leads, viewings, follow-ups, agents, and sales pipeline activity in one CRM workflow.",
  alternates: {
    canonical: "https://www.zenstaxit.net/demos/real-estate-crm",
  },
  openGraph: {
    title: "Real Estate Lead CRM Demo | ZenStax",
    description:
      "A fictional CRM demo for managing real estate leads, agent follow-ups, viewings, and pipeline activity.",
    url: "https://www.zenstaxit.net/demos/real-estate-crm",
    type: "website",
  },
};

export default function RealEstateCRMDemoPage() {
  return <RealEstateCRMDemo />;
}