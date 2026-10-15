import Link from 'next/link';
import SectionLabel from './SectionLabel';
import styles from './studio.module.css';

const OUTCOMES = [
  { title: 'Organised operations', text: 'Keep customers, tasks, orders, and records in one place.' },
  { title: 'Automated follow-ups', text: 'Reduce routine reminders, messages, and manual admin work.' },
  { title: 'Better client service', text: 'Respond clearly, track requests, and give reliable updates.' },
  { title: 'Scalable foundation', text: 'Use systems that can support new staff, locations, and growth.' },
];

export default function OutcomesStatements() {
  return (
    <section className={`${styles.outcomes} ${styles.onDark}`} aria-labelledby='outcomes-title'>
      <div className={styles.wrap}>
        <SectionLabel n='05' label='Business outcomes' />

        <div className={styles.grid12}>
          <h2 id='outcomes-title' className={`${styles.display} ${styles.outTitle} ${styles.reveal}`}>
            Less manual work. <span>More control over your operations.</span>
          </h2>

          <p className={`${styles.outCopy} ${styles.reveal}`}>
            We focus on the areas that have the greatest day-to-day impact: clearer
            processes, better team coordination, faster customer responses, and
            reliable information.
          </p>

          <div className={styles.outAction}>
            <Link href='/contact' className='button button-primary'>
              Discuss Your Workflow
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>

        <ol className={styles.statements}>
          {OUTCOMES.map((outcome, index) => (
            <li className={`${styles.statement} ${styles.reveal}`} key={outcome.title}>
              <span className={styles.mono}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
