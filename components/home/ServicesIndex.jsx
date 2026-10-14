'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ServicePlate } from './ServicePlates';
import styles from './studio.module.css';

const SERVICES = [
  {
    id: '01',
    title: 'Custom Software',
    tag: 'Web · Dashboards · Portals',
    description:
      'Web applications, dashboards, portals, and internal systems designed for your workflow.',
    capabilities: ['Web applications', 'Dashboards', 'Customer portals', 'Internal systems'],
    href: '/services/web-development',
    plate: 'software',
  },
  {
    id: '02',
    title: 'AI Automation',
    tag: 'Workflows · Follow-ups · Reporting',
    description:
      'Automate repetitive work, customer follow-ups, reporting, and daily business processes.',
    capabilities: ['Repetitive work', 'Customer follow-ups', 'Reporting', 'Daily processes'],
    href: '/services/ai',
    plate: 'ai',
  },
  {
    id: '03',
    title: 'CRM & ERP',
    tag: 'Customers · Operations · Sales',
    description:
      'Manage customers, operations, tasks, sales, and reports from one organized system.',
    capabilities: ['Customers', 'Operations and tasks', 'Sales', 'Reports'],
    href: '/services/crm-erp',
    plate: 'crm',
  },
  {
    id: '04',
    title: 'Network & Security',
    tag: 'Infrastructure · Cabling · CCTV',
    description:
      'Network infrastructure, structured cabling, CCTV, and business security-system support.',
    capabilities: ['Infrastructure', 'Structured cabling', 'CCTV', 'Security systems'],
    href: '/services/network-security',
    plate: 'network',
  },
];

export default function ServicesIndex() {
  const [open, setOpen] = useState(0);
  const [hot, setHot] = useState(null);
  const shown = hot === null ? open : hot;
  const current = SERVICES[shown];

  return (
    <section className={styles.services} id='capabilities' aria-labelledby='services-title'>
      <div className={styles.frame}>
        <div className={styles.secHead}>
          <p className={styles.mono}>(04) Services &amp; capabilities</p>

          <h2 id='services-title' className={styles.secTitle}>
            Solutions built <span>around your business.</span>
          </h2>

          <Link href='/services' className={styles.textLink}>
            View all services →
          </Link>
        </div>

        <div className={styles.split}>
          <ul className={styles.list}>
            {SERVICES.map((service, index) => {
              const isOpen = open === index;

              return (
                <li
                  key={service.id}
                  className={`${styles.row} ${isOpen ? styles.rowOpen : ''} ${hot === index ? styles.rowHot : ''}`}
                  onMouseEnter={() => setHot(index)}
                  onMouseLeave={() => setHot(null)}
                >
                  <button
                    type='button'
                    id={`service-btn-${service.id}`}
                    className={styles.rowHead}
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.id}`}
                    onClick={() => setOpen(index)}
                    onFocus={() => setHot(index)}
                    onBlur={() => setHot(null)}
                  >
                    <span className={styles.rowNum}>{service.id}</span>
                    <span className={styles.rowTitle}>{service.title}</span>
                    <span className={styles.rowTag}>{service.tag}</span>
                    <span className={styles.rowArrow} aria-hidden='true'>→</span>
                  </button>

                  <div
                    id={`service-panel-${service.id}`}
                    role='region'
                    aria-labelledby={`service-btn-${service.id}`}
                    className={styles.rowBody}
                    inert={!isOpen}
                  >
                    <div className={styles.rowBodyInner}>
                      <div>
                        <p className={styles.rowText}>{service.description}</p>

                        <ul className={styles.caps}>
                          {service.capabilities.map((capability) => (
                            <li key={capability}>{capability}</li>
                          ))}
                        </ul>

                        <Link href={service.href} className={styles.rowLink}>
                          View service <span aria-hidden='true'>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.plateWrap} aria-hidden='true'>
            <div className={styles.plate}>
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  className={`${styles.plateLayer} ${shown === index ? styles.plateOn : ''}`}
                >
                  <ServicePlate kind={service.plate} />
                </div>
              ))}
            </div>

            <div className={styles.plateCap}>
              <span className={styles.mono}>Fig. 02.{shown + 1}</span>
              <span className={styles.mono}>{current.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
