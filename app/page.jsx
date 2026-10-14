import Link from 'next/link';
import HeroStudio from '../components/home/HeroStudio';
import ServicesIndex from '../components/home/ServicesIndex';
import PromoPopup from '../components/PromoPopup';
import styles from './home-motion.module.css';

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

const demos = [
  {
    tag: 'Website',
    title: 'Business website',
    description:
      'A sample business website with smooth animation and a clean mobile layout.',
    href: '/demos/business-website',
  },
  {
    tag: 'Mobile',
    title: 'Service mobile app',
    description:
      'Switch between a customer booking screen, job tracking, and a technician view.',
    href: '/demos/mobile-app',
  },
  {
    tag: 'AI',
    title: 'AI automation workflows',
    description:
      'Step through lead follow-up, weekly reporting, and quote reminders.',
    href: '/demos/ai-automation',
  },
  {
    tag: 'Network',
    title: 'Network and CCTV site plan',
    description:
      'Explore Wi-Fi coverage, structured cabling, and camera positions on a sample floor plan.',
    href: '/demos/network-security',
  },
  {
    tag: 'CRM',
    title: 'Real estate CRM',
    description:
      'See how a CRM can organise leads, properties, and follow-ups for a real estate team.',
    href: '/demos/real-estate-crm',
  },
  {
    tag: 'ERP',
    title: 'Construction ERP',
    description:
      'See how an ERP can bring projects, tasks, and operations into one system.',
    href: '/demos/construction-erp',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn your current workflow and identify what is slowing the team down.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We recommend a practical solution with a clear scope and implementation path.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop, configure, and test the system around your operational needs.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'We help your team use the solution and improve it as the business grows.',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroStudio />

      <section className='intro-section'>
        <div className='container intro-grid'>
          <div className={styles.reveal}>
            <p className='section-label'>Why ZenStax</p>

            <h2>
              Technology should make work
              <span> simpler, not harder.</span>
            </h2>
          </div>

          <div className={`intro-content ${styles.reveal}`} style={{ '--i': 1 }}>
            <p>
              Growing businesses often rely on WhatsApp, calls, spreadsheets,
              paper records, and disconnected tools. That creates manual work,
              missed follow-ups, and limited visibility.
            </p>

            <p>
              ZenStax helps bring essential operations into systems that are
              clear, reliable, and easy for teams to use.
            </p>

            <Link href='/about' className='text-link'>
              Learn about ZenStax <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <ServicesIndex />

      <section className={styles.demos} id='demos'>
        <div className='container'>
          <div className={`${styles.demosHead} ${styles.reveal}`}>
            <p className='section-label'>See it in action</p>
            <h2>Explore live demos of what we build.</h2>
            <p>
              Open an interactive sample to see how a website, app, automation,
              CRM, ERP, or site plan could work for your business.
            </p>
          </div>

          <div className={styles.demoGrid}>
            {demos.map((demo, index) => (
              <Link
                href={demo.href}
                className={`${styles.demoCard} ${styles.reveal}`}
                style={{ '--i': index % 3 }}
                key={demo.href}
              >
                <span className={styles.demoTag}>{demo.tag}</span>
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
                <span className={styles.demoGo}>
                  Try the demo <span aria-hidden='true'>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='outcomes-section'>
        <div className='container outcomes-grid'>
          <div className={`outcomes-copy ${styles.reveal}`}>
            <p className='section-label'>Business outcomes</p>

            <h2>Less manual work. More control over your operations.</h2>

            <p>
              We focus on the areas that have the greatest day-to-day impact:
              clearer processes, better team coordination, faster customer
              responses, and reliable information.
            </p>

            <Link href='/contact' className='button button-primary'>
              Discuss Your Workflow
              <span aria-hidden='true'>→</span>
            </Link>
          </div>

          <div className='outcome-list'>
            <div className={`outcome-item ${styles.reveal}`}>
              <span>01</span>
              <div>
                <h3>Organised operations</h3>
                <p>Keep customers, tasks, orders, and records in one place.</p>
              </div>
            </div>

            <div className={`outcome-item ${styles.reveal}`}>
              <span>02</span>
              <div>
                <h3>Automated follow-ups</h3>
                <p>Reduce routine reminders, messages, and manual admin work.</p>
              </div>
            </div>

            <div className={`outcome-item ${styles.reveal}`}>
              <span>03</span>
              <div>
                <h3>Better client service</h3>
                <p>Respond clearly, track requests, and give reliable updates.</p>
              </div>
            </div>

            <div className={`outcome-item ${styles.reveal}`}>
              <span>04</span>
              <div>
                <h3>Scalable foundation</h3>
                <p>Use systems that can support new staff, locations, and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='process-section'>
        <div className='container'>
          <div className={`process-heading ${styles.reveal}`}>
            <p className='section-label'>How we work</p>
            <h2>From workflow problem to working solution.</h2>
          </div>

          <div className='process-grid'>
            {process.map((step, index) => (
              <article
                className={`process-step ${styles.reveal}`}
                style={{ '--i': index }}
                key={step.number}
              >
                <span className='process-number'>{step.number}</span>

                <div className='process-line' />

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='challenge-section'>
        <div className='container'>
          <div className={`challenge-heading ${styles.reveal}`}>
            <p className='section-label'>Where should we start?</p>

            <h2>Choose the business challenge you want to improve.</h2>

            <p>
              You do not need to know the exact technology. Start with the
              problem, and ZenStax will help you identify the most practical
              solution.
            </p>
          </div>

          <div className='challenge-grid'>
            <Link
              href='/contact?challenge=customer-follow-ups'
              className={`challenge-card ${styles.reveal}`}
              style={{ '--i': 0 }}
            >
              <span className='challenge-number'>01</span>

              <h3>Customer follow-ups</h3>

              <p>
                Reduce missed leads, manual reminders, delayed replies, and
                customer follow-up work.
              </p>

              <span className='challenge-link'>
                Explore solution <span>→</span>
              </span>
            </Link>

            <Link
              href='/contact?challenge=manual-work'
              className={`challenge-card ${styles.reveal}`}
              style={{ '--i': 1 }}
            >
              <span className='challenge-number'>02</span>

              <h3>Too much manual work</h3>

              <p>
                Replace repetitive tasks, Excel files, paper records, and
                disconnected daily processes.
              </p>

              <span className='challenge-link'>
                Explore solution <span>→</span>
              </span>
            </Link>

            <Link
              href='/contact?challenge=business-visibility'
              className={`challenge-card ${styles.reveal}`}
              style={{ '--i': 2 }}
            >
              <span className='challenge-number'>03</span>

              <h3>Limited business visibility</h3>

              <p>
                Get a clearer view of operations, tasks, customers, records, and
                business reporting.
              </p>

              <span className='challenge-link'>
                Explore solution <span>→</span>
              </span>
            </Link>

            <Link
              href='/contact?challenge=website-or-app'
              className={`challenge-card ${styles.reveal}`}
              style={{ '--i': 0 }}
            >
              <span className='challenge-number'>04</span>

              <h3>Website or customer portal</h3>

              <p>
                Give customers and teams a professional digital place to
                enquire, book, access, or manage services.
              </p>

              <span className='challenge-link'>
                Explore solution <span>→</span>
              </span>
            </Link>

            <Link
              href='/contact?challenge=crm-erp'
              className={`challenge-card ${styles.reveal}`}
              style={{ '--i': 1 }}
            >
              <span className='challenge-number'>05</span>

              <h3>CRM or ERP setup</h3>

              <p>
                Manage leads, customers, sales, projects, tasks, invoices, and
                operations in one system.
              </p>

              <span className='challenge-link'>
                Explore solution <span>→</span>
              </span>
            </Link>

            <Link
              href='/contact?challenge=network-security'
              className={`challenge-card ${styles.reveal}`}
              style={{ '--i': 2 }}
            >
              <span className='challenge-number'>06</span>

              <h3>Network or security support</h3>

              <p>
                Improve network infrastructure, structured cabling, CCTV, and
                security systems for your business site.
              </p>

              <span className='challenge-link'>
                Explore solution <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className='cta-banner'>
        <div className='container cta-banner-content'>
          <div className={styles.reveal}>
            <p className='section-label'>Start with a conversation</p>

            <h2>Ready to improve the way your business works?</h2>

            <p>
              Tell us what is slowing your team down. We will help you identify
              a clear and practical next step.
            </p>
          </div>

          <Link href='/contact' className='button button-light'>
            Let&apos;s Talk
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>

      <PromoPopup />
    </>
  );
}
