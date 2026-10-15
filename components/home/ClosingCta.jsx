import Link from 'next/link';
import SectionLabel from './SectionLabel';
import styles from './studio.module.css';

export default function ClosingCta() {
  return (
    <section className={styles.closing} aria-labelledby='closing-title'>
      <div className={styles.wrap}>
        <SectionLabel n='08' label='Start with a conversation' />

        <div className={styles.grid12}>
          <h2 id='closing-title' className={`${styles.closingTitle} ${styles.reveal}`}>
            Ready to improve the way your business works?
          </h2>

          <p className={`${styles.closingCopy} ${styles.reveal}`}>
            Tell us what is slowing your team down. We will help you identify a clear
            and practical next step.
          </p>

          <div className={styles.closingAction}>
            <Link href='/contact' className='button button-light'>
              Let&apos;s Talk
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
