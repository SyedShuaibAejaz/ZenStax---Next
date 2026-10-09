import Link from 'next/link';
import styles from './mobile-apps.module.css';

export const metadata = {
  title: 'Mobile App Development for Business',
  description:
    'ZenStax builds practical mobile apps for bookings, field teams, approvals and customer service, connected to your CRM, ERP and dashboards. Try the live demo.',
  alternates: { canonical: '/services/mobile-apps' },
  openGraph: {
    title: 'Mobile App Development for Business | ZenStax',
    description:
      'Practical mobile apps for bookings, field teams, approvals and customer service. Try the interactive demo.',
    url: '/services/mobile-apps',
    type: 'website',
  },
};

const benefits = [
  'Customer-facing service, booking, and request applications.',
  'Field-team apps for task updates, records, and approvals.',
  'Mobile access to key operational information.',
  'Simple interfaces designed around the people who use them.',
  'Connected workflows with dashboards, CRM, ERP, or automation.',
];

const offerings = [
  {
    icon: '01',
    title: 'Customer booking apps',
    text: 'Let customers request services, pick a time slot, and follow progress without calling your office.',
  },
  {
    icon: '02',
    title: 'Field-team apps',
    text: 'Give technicians and staff their daily jobs, checklists, photos, and customer sign-off in one place.',
  },
  {
    icon: '03',
    title: 'Approval and task apps',
    text: 'Move requests, purchase approvals, and task updates off chat threads and paper forms.',
  },
  {
    icon: '04',
    title: 'Mobile dashboards',
    text: 'Put the numbers managers check every day, such as sales, jobs, and stock, on their phone.',
  },
  {
    icon: '05',
    title: 'Customer portals',
    text: 'Offer account details, invoices, order history, and support requests in a simple app or installable web app.',
  },
  {
    icon: '06',
    title: 'Integrated workflows',
    text: 'Connect the app to your CRM, ERP, notifications, and automation so data is entered once.',
  },
];

const steps = [
  {
    title: 'Discover',
    text: 'We map who will use the app, what they do today, and where time is lost.',
  },
  {
    title: 'Prototype',
    text: 'You tap through clickable screens before any development starts.',
  },
  {
    title: 'Build',
    text: 'We develop in short stages with regular demos, then test on real devices.',
  },
  {
    title: 'Launch and support',
    text: 'We help you release the app, train your team, and keep improving it.',
  },
];

const faqs = [
  {
    q: 'Do I need a mobile app or is a website enough?',
    a: 'If people mostly read information or fill in an occasional form, a responsive website is usually enough and costs less. An app makes sense when users need quick repeated access, work in the field, need notifications, or use device features such as the camera and location.',
  },
  {
    q: 'Will the app work on both iPhone and Android?',
    a: 'We plan for both. Depending on your needs we recommend a cross-platform app, a native app, or an installable web app, and we explain the trade-offs in cost, speed, and features before you decide.',
  },
  {
    q: 'Can the app connect to our existing systems?',
    a: 'Yes. Apps can read from and write to your CRM, ERP, databases, and automation tools so your team does not enter the same data twice.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'It depends on the number of screens, user roles, and integrations. We start with a focused first version and confirm a timeline and scope after a short discovery conversation.',
  },
  {
    q: 'Can you help publish the app to the App Store and Google Play?',
    a: 'Yes. We guide you through developer accounts, store listings, testing, and release, or you can distribute the app privately to your own team.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Mobile App Development',
      serviceType: 'Mobile application development',
      description:
        'Practical mobile apps for customer bookings, field teams, approvals, and business workflows, connected to CRM, ERP, dashboards, and automation.',
      provider: { '@type': 'Organization', name: 'ZenStax' },
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

export default function MobileAppsPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='page-hero'>
        <div className='container page-hero-content'>
          <p className='eyebrow'>Mobile Applications</p>

          <h1>
            Give customers and teams the right tools
            <span> wherever they work.</span>
          </h1>

          <p>
            ZenStax develops practical mobile experiences for bookings,
            service delivery, field operations, approvals, and customer access.
          </p>

          <Link href='/demos/mobile-app' className='button button-primary'>
            Try the Live Demo
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>

      <section className='service-detail-section'>
        <div className='container split-layout'>
          <div>
            <p className='section-label'>Mobile, with a purpose</p>

            <h2>Build an app when it creates a better workflow.</h2>
          </div>

          <div className='content-copy'>
            <p>
              We do not recommend an app simply because it sounds modern. We
              recommend it when mobile access can improve customer experience,
              staff productivity, operational speed, or service visibility.
            </p>

            <ul className='clean-list'>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href='/contact' className='button button-primary'>
              Discuss a Mobile App
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>What we build</p>
            <h2>Mobile apps for the way your business runs.</h2>
            <p>
              Every app starts with a real workflow, so the screens stay simple
              and the people using them know what to do next.
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
            <p className='section-label'>Live demo</p>
            <h2>See a mobile app before you commit to one.</h2>
            <p>
              Open our interactive sample of a service booking and field-team
              app. Switch between the customer view, live job tracking, and the
              technician screen to see how one app can serve both sides of a
              service business.
            </p>

            <ul className={styles.points}>
              <li>Customer booking with simple time slots</li>
              <li>Live job status and technician updates</li>
              <li>Checklists and approvals for the field team</li>
            </ul>

            <Link href='/demos/mobile-app' className='button button-primary'>
              Open the Interactive Demo
              <span aria-hidden='true'>→</span>
            </Link>
          </div>

          <div className={styles.phoneWrap}>
            <Link
              href='/demos/mobile-app'
              className={styles.phoneLink}
              aria-label='Open the interactive mobile app demo'
            >
              <div className={styles.phone} aria-hidden='true'>
                <div className={styles.pTop}>
                  <span>Good morning, Aisha</span>
                  <strong>Book a service</strong>
                </div>
                <div className={styles.pChips}>
                  <span className={styles.on}>Cleaning</span>
                  <span>AC repair</span>
                  <span>Plumbing</span>
                </div>
                <div className={styles.pSlots}>
                  <span className={styles.on}>Today 4 PM</span>
                  <span>Today 6 PM</span>
                  <span>Tomorrow 10 AM</span>
                  <span>Tomorrow 2 PM</span>
                </div>
                <div className={styles.pBtn}>Confirm booking</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>How it works</p>
            <h2>From idea to a working app in four steps.</h2>
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
            <h2>Mobile app questions, answered.</h2>
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
          <h2>Have a workflow that belongs on a phone?</h2>
          <p>
            Tell us who would use the app and what they need to get done. We
            will tell you honestly whether an app, a web app, or a simpler
            tool is the right fit.
          </p>
          <Link href='/contact' className='button button-primary'>
            Discuss a Mobile App
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
