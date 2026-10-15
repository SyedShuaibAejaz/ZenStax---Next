import SectionLabel from './SectionLabel';
import styles from './studio.module.css';

const STEPS = [
  { title: 'Understand', text: 'We learn your current workflow and identify what is slowing the team down.' },
  { title: 'Plan', text: 'We recommend a practical solution with a clear scope and implementation path.' },
  { title: 'Build', text: 'We develop, configure, and test the system around your operational needs.' },
  { title: 'Support', text: 'We help your team use the solution and improve it as the business grows.' },
];

export default function ProcessStairs() {
  return (
    <section className={styles.process} aria-labelledby='process-title'>
      <div className={styles.wrap}>
        <SectionLabel n='06' label='How we work' />

        <h2 id='process-title' className={`${styles.display} ${styles.processTitle} ${styles.reveal}`}>
          From workflow problem <span>to working solution.</span>
        </h2>

        <ol className={styles.stairs} style={{ listStyle: 'none', padding: 0 }}>
          {STEPS.map((step, index) => (
            <li className={`${styles.step} ${styles.reveal}`} style={{ '--i': index }} key={step.title}>
              <span className={styles.stepNum} aria-hidden='true'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
