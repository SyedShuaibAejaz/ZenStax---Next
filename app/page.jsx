import ChallengeIndex from '../components/home/ChallengeIndex';
import ClosingCta from '../components/home/ClosingCta';
import DemoReel from '../components/home/DemoReel';
import HeroStudio from '../components/home/HeroStudio';
import OutcomesStatements from '../components/home/OutcomesStatements';
import ProcessStairs from '../components/home/ProcessStairs';
import ServicesIndex from '../components/home/ServicesIndex';
import WhyLedger from '../components/home/WhyLedger';
import PromoPopup from '../components/PromoPopup';

export const metadata = {
  title: {
    absolute: 'ZenStax | Software, AI, CRM/ERP & Network Solutions in Dubai',
  },
  description:
    'ZenStax delivers custom software, AI automation, CRM/ERP, network infrastructure and security solutions for businesses in Dubai and across the UAE. See live demos.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ZenStax | Software, AI, CRM/ERP & Network Solutions in Dubai',
    description:
      'Custom software, AI automation, CRM/ERP, network infrastructure and security for businesses in Dubai and the UAE.',
    url: '/',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ZenStax',
  url: 'https://www.zenstaxit.net',
  inLanguage: 'en',
  description:
    'Custom software, AI automation, CRM/ERP, network infrastructure and security solutions for businesses in Dubai and across the UAE.',
};

export default function HomePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroStudio />
      <WhyLedger />
      <ServicesIndex />
      <DemoReel />
      <OutcomesStatements />
      <ProcessStairs />
      <ChallengeIndex />
      <ClosingCta />

      <PromoPopup />
    </>
  );
}
