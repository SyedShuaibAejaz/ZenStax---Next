'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SectionLabel from './SectionLabel';
import styles from './studio.module.css';

const DEMOS = [
  { tag: 'Website', title: 'Business website', description: 'A sample business website with smooth animation and a clean mobile layout.', href: '/demos/business-website' },
  { tag: 'Mobile', title: 'Service mobile app', description: 'Switch between a customer booking screen, job tracking, and a technician view.', href: '/demos/mobile-app' },
  { tag: 'AI', title: 'AI automation workflows', description: 'Step through lead follow-up, weekly reporting, and quote reminders.', href: '/demos/ai-automation' },
  { tag: 'Network', title: 'Network and CCTV site plan', description: 'Explore Wi-Fi coverage, structured cabling, and camera positions on a sample floor plan.', href: '/demos/network-security' },
  { tag: 'CRM', title: 'Real estate CRM', description: 'See how a CRM can organise leads, properties, and follow-ups for a real estate team.', href: '/demos/real-estate-crm' },
  { tag: 'ERP', title: 'Construction ERP', description: 'See how an ERP can bring projects, tasks, and operations into one system.', href: '/demos/construction-erp' },
];

export default function DemoReel() {
  const reelRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reel = reelRef.current;

    function update() {
      if (!reel) {
        return;
      }

      const max = reel.scrollWidth - reel.clientWidth;

      setProgress(max > 0 ? reel.scrollLeft / max : 0);
    }

    update();
    reel.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      reel.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  function move(direction) {
    const reel = reelRef.current;
    const first = reel.querySelector('a');
    const step = (first ? first.offsetWidth : 400) + 16;

    reel.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  return (
    <section className={styles.demos} id='demos' aria-labelledby='demos-title'>
      <div className={styles.wrap}>
        <SectionLabel n='04' label='See it in action' />

        <div className={styles.grid12}>
          <h2 id='demos-title' className={`${styles.display} ${styles.demosTitle} ${styles.reveal}`}>
            Explore live demos <span>of what we build.</span>
          </h2>

          <p className={`${styles.demosIntro} ${styles.reveal}`}>
            Open an interactive sample to see how a website, app, automation, CRM,
            ERP, or site plan could work for your business.
          </p>
        </div>
      </div>

      <div className={styles.reel} ref={reelRef} role='region' aria-label='Live demos'>
        {DEMOS.map((demo, index) => (
          <Link href={demo.href} className={styles.panel} key={demo.href}>
            <div className={styles.panelTop}>
              <span className={styles.tag}>{demo.tag}</span>
              <span className={`${styles.mono}`} style={{ color: '#7f9bb7' }}>
                {String(index + 1).padStart(2, '0')} / {String(DEMOS.length).padStart(2, '0')}
              </span>
            </div>

            <span className={styles.panelNum} aria-hidden='true'>
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{demo.title}</h3>
            <p>{demo.description}</p>

            <span className={styles.panelGo}>
              Try the demo
              <b aria-hidden='true'>→</b>
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.wrap}>
        <div className={styles.reelBar}>
          <div className={styles.track} aria-hidden='true'>
            <span
              className={styles.trackFill}
              style={{ '--p': `${Math.round((0.18 + 0.82 * progress) * 100)}%` }}
            />
          </div>

          <div className={styles.arrows}>
            <button type='button' className={styles.arrowBtn} aria-label='Previous demos' disabled={progress <= 0.01} onClick={() => move(-1)}>
              ←
            </button>
            <button type='button' className={styles.arrowBtn} aria-label='Next demos' disabled={progress >= 0.99} onClick={() => move(1)}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
