import Link from 'next/link';
import styles from './network-security.module.css';

export const metadata = {
  title: 'Network, Cabling & CCTV Installation in Dubai',
  description:
    'ZenStax plans and installs business networks, structured cabling, Wi-Fi and CCTV for offices and sites in Dubai and across the UAE. See the interactive site plan.',
  alternates: { canonical: '/services/network-security' },
  openGraph: {
    title: 'Network, Cabling & CCTV Installation in Dubai | ZenStax',
    description:
      'Business networks, structured cabling, Wi-Fi and CCTV for sites in Dubai and the UAE. Try the interactive site plan.',
    url: '/services/network-security',
    type: 'website',
  },
};

const benefits = [
  'Network planning and reliable connectivity foundations.',
  'Structured cabling and organized infrastructure support.',
  'Wi-Fi and network setup for business locations.',
  'CCTV and security-system installation support.',
  'A coordinated approach alongside your software and operational needs.',
];

const offerings = [
  {
    icon: '01',
    title: 'Network planning',
    text: 'Design a network that fits your site, your team size, and the systems you run, with room to grow.',
  },
  {
    icon: '02',
    title: 'Structured cabling',
    text: 'Clean, labelled cable runs from a central rack to every desk, room, and device that needs a connection.',
  },
  {
    icon: '03',
    title: 'Wi-Fi setup',
    text: 'Place access points where people actually work, with separate access for staff and guests.',
  },
  {
    icon: '04',
    title: 'CCTV installation',
    text: 'Position cameras at entrances and key areas, then set up recording and viewing for your team.',
  },
  {
    icon: '05',
    title: 'Racks and patching',
    text: 'Organise switches, patch panels, and equipment so faults are quick to find and changes are safe to make.',
  },
  {
    icon: '06',
    title: 'Joined-up with your software',
    text: 'Plan infrastructure alongside your CRM, ERP, and apps so the foundations match what you run on top.',
  },
];

const steps = [
  {
    title: 'Survey',
    text: 'We visit the site, note the layout, and agree what needs to be covered and connected.',
  },
  {
    title: 'Plan',
    text: 'You get a clear plan showing where equipment, cabling, and cameras will go.',
  },
  {
    title: 'Install',
    text: 'We install neatly and keep disruption to your daily operations as low as possible.',
  },
  {
    title: 'Test and hand over',
    text: 'We test coverage and connections, label everything, and walk your team through the result.',
  },
];

const previewItems = [
  { kind: 'Network', text: 'Access points placed from a site survey' },
  { kind: 'Cabling', text: 'Labelled runs to every outlet' },
  { kind: 'CCTV', text: 'Cameras at entrances and key areas' },
];

const kindClass = {
  Network: styles.kTrigger,
  Cabling: styles.kAi,
  CCTV: styles.kAction,
};

const faqs = [
  {
    q: 'What happens during a site survey?',
    a: 'We walk the site with you, note the layout, wall types, number of users and devices, and where equipment will sit. Then we recommend where access points, cabling, racks, and cameras should go.',
  },
  {
    q: 'Can you work with our existing cabling and equipment?',
    a: 'Where it is in good condition, yes. We check what you already have, reuse it where it makes sense, and replace only what is holding the network back.',
  },
  {
    q: 'Do you install CCTV for offices, shops, and warehouses?',
    a: 'We support CCTV and security-system installation for business sites. We plan camera positions around entrances, stock areas, and other key points, then set up recording and viewing for your team.',
  },
  {
    q: 'Do you work outside Dubai?',
    a: 'Yes. We support businesses in Dubai and across the UAE. Tell us the site location when you get in touch.',
  },
  {
    q: 'Why does network infrastructure matter for our software?',
    a: 'CRM, ERP, cloud tools, and mobile apps all depend on a stable connection. A well-planned network and clean cabling reduce the slowdowns and outages that staff would otherwise blame on the software.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Network Infrastructure and Security Systems',
      serviceType: 'Network, structured cabling, Wi-Fi, and CCTV installation',
      description:
        'Network planning, structured cabling, Wi-Fi setup, and CCTV and security-system installation for businesses in Dubai and the UAE.',
      provider: { '@type': 'Organization', name: 'ZenStax' },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function NetworkSecurityPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='page-hero'>
        <div className='container page-hero-content'>
          <p className='eyebrow'>Network & Security</p>

          <h1>
            Reliable infrastructure for
            <span> secure business operations.</span>
          </h1>

          <p>
            ZenStax supports the network, cabling, CCTV, and security systems
            that help businesses stay connected, protected, and operational.
          </p>

          <Link href='/demos/network-security' className='button button-primary'>
            Explore the Site Plan Demo
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>

      <section className='service-detail-section'>
        <div className='container split-layout'>
          <div>
            <p className='section-label'>Reliable foundations</p>

            <h2>Support the technology your business depends on.</h2>
          </div>

          <div className='content-copy'>
            <p>
              Your software and daily operations rely on secure, dependable
              infrastructure. We help businesses plan and implement practical
              network and security solutions that support their sites and teams.
            </p>

            <ul className='clean-list'>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href='/contact' className='button button-primary'>
              Discuss Infrastructure
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>What we install</p>
            <h2>The foundations your business runs on.</h2>
            <p>
              From a single office to a multi-room site in Dubai or the wider
              UAE, we plan the network, cabling, and security systems together
              so they work as one.
            </p>
          </div>

          <div className={styles.grid}>
            {offerings.map((item) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.showcase}`}>
          <div>
            <p className='section-label'>Interactive demo</p>
            <h2>See a site plan before anything is installed.</h2>
            <p>
              Open our sample office floor plan and switch between three layers:
              Wi-Fi coverage, structured cabling, and CCTV coverage. It shows
              the kind of clarity you get from a plan before work starts.
            </p>

            <ul className={styles.points}>
              <li>Wi-Fi access points placed for real coverage</li>
              <li>Cable runs from one rack to every outlet</li>
              <li>Camera positions and viewing areas</li>
            </ul>

            <Link href='/demos/network-security' className='button button-primary'>
              Open the Interactive Demo
              <span aria-hidden='true'>→</span>
            </Link>
          </div>

          <div className={styles.previewWrap}>
            <Link
              href='/demos/network-security'
              className={styles.previewLink}
              aria-label='Open the interactive site plan demo'
            >
              <div className={styles.preview} aria-hidden='true'>
                <span className={styles.pTag}>Sample site plan layers</span>
                {previewItems.map((item) => (
                  <div key={item.text} className={styles.pNode}>
                    <span className={`${styles.kind} ${kindClass[item.kind]}`}>
                      {item.kind}
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>How it works</p>
            <h2>From site visit to a tested, labelled installation.</h2>
          </div>

          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.title} className={styles.step}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>FAQ</p>
            <h2>Network and security questions, answered.</h2>
          </div>

          <div className={styles.faq}>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className='container'>
          <h2>Planning a new site or fixing an old network?</h2>
          <p>
            Tell us about your location and what you need to connect or
            protect. We will recommend a practical plan and explain each step
            clearly.
          </p>
          <Link href='/contact' className='button button-primary'>
            Discuss Infrastructure
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
