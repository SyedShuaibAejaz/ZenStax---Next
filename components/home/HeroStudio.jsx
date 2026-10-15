import Link from 'next/link';
import HeroBlueprint from './HeroBlueprint';
import styles from './studio.module.css';

const POINTS = ['Built around your workflow', 'Clear, practical solutions', 'Dubai & UAE support'];

export default function HeroStudio() {
  return (
    <section className={`${styles.hero} ${styles.onDark}`} aria-labelledby='hero-title'>
      <div className={styles.wrap}>
        <div className={styles.upper}>
          <div className={styles.gridLines} aria-hidden='true'>
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className={styles.metaBar}>
            <span className={styles.mono}>(01) ZenStax / Engineering studio</span>
            <span className={styles.mono}>Dubai, UAE &nbsp; 25.2048° N, 55.2708° E</span>
            <span className={styles.mono}>Software · Data · Network · Security</span>
          </div>

          <h1 id='hero-title' className={styles.headline}>
            <span className={styles.line} style={{ '--i': 0 }}>
              <span>Technology that</span>
            </span>{' '}
            <span className={styles.line} style={{ '--i': 1 }}>
              <span>helps your business</span>
            </span>{' '}
            <span className={`${styles.line} ${styles.accent}`} style={{ '--i': 2 }}>
              <span>work better.</span>
            </span>
          </h1>
        </div>

        <div className={styles.band}>
          <div className={styles.cellBrief}>
            <div className={styles.cellLabel}>
              <span className={styles.mono}>Brief</span>
            </div>

            <p className={styles.lead}>
              ZenStax delivers custom software, AI automation, CRM/ERP, network
              infrastructure, and security solutions for businesses in Dubai and across
              the UAE.
            </p>

            <div className={styles.actions}>
              <Link href='/contact' className='button button-primary'>
                Discuss Your Project
                <span aria-hidden='true'>→</span>
              </Link>

              <Link href='/services' className='button button-secondary'>
                Explore Services
              </Link>
            </div>
          </div>

          <figure className={styles.cellFigure}>
            <div className={styles.cellLabel}>
              <span className={styles.mono}>System map</span>
            </div>

            <HeroBlueprint />

            <figcaption className={styles.figCap}>
              <span className={styles.mono}>Fig. 01</span>
              <span className={styles.mono}>One connected operation</span>
            </figcaption>
          </figure>

          <div className={styles.cellIndex}>
            <div className={styles.cellLabel}>
              <span className={styles.mono}>Principles</span>
            </div>

            <ol className={styles.points}>
              {POINTS.map((point, index) => (
                <li key={point}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {point}
                </li>
              ))}
            </ol>

            <a href='#capabilities' className={styles.cue}>
              <span>Capabilities</span>
              <span aria-hidden='true'>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
