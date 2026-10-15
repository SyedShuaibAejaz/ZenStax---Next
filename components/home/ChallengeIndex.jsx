import Link from 'next/link';
import SectionLabel from './SectionLabel';
import styles from './studio.module.css';

const CHALLENGES = [
  { title: 'Customer follow-ups', text: 'Reduce missed leads, manual reminders, delayed replies, and customer follow-up work.', href: '/contact?challenge=customer-follow-ups' },
  { title: 'Too much manual work', text: 'Replace repetitive tasks, Excel files, paper records, and disconnected daily processes.', href: '/contact?challenge=manual-work' },
  { title: 'Limited business visibility', text: 'Get a clearer view of operations, tasks, customers, records, and business reporting.', href: '/contact?challenge=business-visibility' },
  { title: 'Website or customer portal', text: 'Give customers and teams a professional digital place to enquire, book, access, or manage services.', href: '/contact?challenge=website-or-app' },
  { title: 'CRM or ERP setup', text: 'Manage leads, customers, sales, projects, tasks, invoices, and operations in one system.', href: '/contact?challenge=crm-erp' },
  { title: 'Network or security support', text: 'Improve network infrastructure, structured cabling, CCTV, and security systems for your business site.', href: '/contact?challenge=network-security' },
];

export default function ChallengeIndex() {
  return (
    <section className={styles.challenges} aria-labelledby='challenges-title'>
      <div className={styles.wrap}>
        <SectionLabel n='07' label='Where should we start?' />

        <div className={styles.grid12}>
          <h2 id='challenges-title' className={`${styles.display} ${styles.chTitle} ${styles.reveal}`}>
            Choose the business challenge <span>you want to improve.</span>
          </h2>

          <p className={`${styles.chIntro} ${styles.reveal}`}>
            You do not need to know the exact technology. Start with the problem, and
            ZenStax will help you identify the most practical solution.
          </p>
        </div>

        <ul className={styles.chList}>
          {CHALLENGES.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.chRow}>
                <span className={styles.chNum}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.chName}>{item.title}</span>
                <span className={styles.chDesc}>{item.text}</span>
                <span className={styles.chArrow} aria-hidden='true'>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
