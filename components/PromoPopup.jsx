'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './promo-popup.module.css';

const STORAGE_KEY = 'zenstax-promo-seen';
const DELAY_MS = 5000;

const items = [
  {
    tag: 'Website',
    title: 'Business website',
    text: 'Animated company site, built for mobile.',
    href: '/demos/business-website',
  },
  {
    tag: 'Mobile app',
    title: 'Service mobile app',
    text: 'Booking, job tracking, and a technician view.',
    href: '/demos/mobile-app',
  },
  {
    tag: 'AI',
    title: 'AI automation workflows',
    text: 'Lead follow-up, reports, and quote reminders.',
    href: '/demos/ai-automation',
  },
  {
    tag: 'Network',
    title: 'Network and CCTV site plan',
    text: 'Wi-Fi, cabling, and camera coverage.',
    href: '/demos/network-security',
  },
];

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) {
        return undefined;
      }
    } catch {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        return;
      }

      setOpen(true);
    }, DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <aside
      className={styles.card}
      aria-label='Featured work'
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
        }
      }}
    >
      <div className={styles.top}>
        <p className={styles.label}>Featured work</p>
        <button
          type='button'
          className={styles.close}
          aria-label='Close featured work'
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      </div>

      <h2 className={styles.title}>See what we can build for your business</h2>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.item}>
              <span className={styles.itemText}>
                <span className={styles.tag}>{item.tag}</span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
              <span className={styles.arrow} aria-hidden='true'>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <Link href='/contact' className='button button-primary'>
          Discuss Your Project
          <span aria-hidden='true'>→</span>
        </Link>
        <button
          type='button'
          className={styles.later}
          onClick={() => setOpen(false)}
        >
          Maybe later
        </button>
      </div>
    </aside>
  );
}
