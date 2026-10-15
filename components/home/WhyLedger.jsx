import Link from 'next/link';
import SectionLabel from './SectionLabel';
import styles from './studio.module.css';

const BEFORE = ['WhatsApp', 'Calls', 'Spreadsheets', 'Paper records', 'Disconnected tools'];
const AFTER = ['Clear', 'Reliable', 'Easy for teams to use'];

function Column({ label, items, className, result }) {
  return (
    <div className={styles.ledgerCol}>
      <span className={styles.mono}>{label}</span>

      <ul className={`${styles.ledgerList} ${className}`}>
        {items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ul>

      <p className={`${styles.mono} ${styles.ledgerResult}`}>{result}</p>
    </div>
  );
}

export default function WhyLedger() {
  return (
    <section className={styles.why} aria-labelledby='why-title'>
      <div className={styles.wrap}>
        <SectionLabel n='02' label='Why ZenStax' />

        <div className={styles.grid12}>
          <h2 id='why-title' className={`${styles.display} ${styles.whyTitle} ${styles.reveal}`}>
            Technology should make work <span>simpler, not harder.</span>
          </h2>

          <div className={`${styles.whyCopy} ${styles.reveal}`}>
            <p>
              Growing businesses often rely on WhatsApp, calls, spreadsheets, paper
              records, and disconnected tools. That creates manual work, missed
              follow-ups, and limited visibility.
            </p>

            <p>
              ZenStax helps bring essential operations into systems that are clear,
              reliable, and easy for teams to use.
            </p>

            <Link href='/about' className={styles.textLink}>
              Learn about ZenStax <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>

        <div className={`${styles.ledger} ${styles.reveal}`}>
          <Column
            label='Today'
            items={BEFORE}
            className={styles.before}
            result='= Manual work · Missed follow-ups · Limited visibility'
          />

          <div className={styles.ledgerMid} aria-hidden='true'>
            →
          </div>

          <Column
            label='With ZenStax'
            items={AFTER}
            className={styles.after}
            result='= Essential operations in one system'
          />
        </div>
      </div>
    </section>
  );
}
