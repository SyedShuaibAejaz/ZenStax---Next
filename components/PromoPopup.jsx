'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import FitBox from './FitBox';
import WelcomeArt from './WelcomeArt';
import { trackEvent } from './siteTracking';
import styles from './promo-popup.module.css';

const FLAG_KEY = 'zenstax-welcome-v1';
const LOGGED_KEY = 'zenstax-welcome-logged';

const BRAND_MS = 2400;
const WELCOME_MS = 3200;
const ADVANCE_MS = 320;
const LOGO = ['Z', 'e', 'n', 'S', 't', 'a', 'x'];

// Set to true to skip the intro for visitors arriving from a search engine.
// Google can penalise large interstitials on mobile.
const SKIP_FOR_SEARCH_VISITORS = false;
const SEARCH_ENGINES = /(^|\.)(google|bing|yahoo|duckduckgo|yandex|baidu|ecosia)\./i;

const QUESTIONS = [
  {
    key: 'interest',
    label: 'What are you looking for?',
    options: [
      { value: 'website', label: 'Website or web app' },
      { value: 'mobile', label: 'Mobile app' },
      { value: 'crm_erp', label: 'CRM or ERP' },
      { value: 'automation', label: 'AI and workflow automation' },
      { value: 'network', label: 'Network, CCTV and security' },
      { value: 'exploring', label: 'Just exploring' },
    ],
  },
  {
    key: 'industry',
    label: 'What kind of business do you run?',
    options: [
      { value: 'real-estate', label: 'Real estate' },
      { value: 'construction', label: 'Construction' },
      { value: 'retail', label: 'Retail and trading' },
      { value: 'services', label: 'Services and consulting' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    key: 'timeline',
    label: 'When do you need it?',
    options: [
      { value: 'asap', label: 'As soon as possible' },
      { value: '3-months', label: 'Within 3 months' },
      { value: 'researching', label: 'Just researching' },
    ],
  },
];

const AD_FOR_INTEREST = {
  website: 'website',
  mobile: 'mobile',
  network: 'network',
};

const ADS = {
  main: {
    eyebrow: 'Our featured solution',
    title: 'Run your whole business from one system.',
    accent: 'CRM, ERP and workflow automation.',
    text: 'Bring customers, projects, tasks, invoices, and reports together, then let automation handle the follow-ups, reminders, and reporting.',
    points: [
      'Leads, customers, and sales in one place',
      'Projects, tasks, and operations under control',
      'Automatic follow-ups, reminders, and weekly reports',
    ],
    primary: { label: 'Explore CRM & ERP', href: '/services/crm-erp' },
    links: [
      { label: 'Real estate CRM demo', href: '/demos/real-estate-crm' },
      { label: 'Construction ERP demo', href: '/demos/construction-erp' },
      { label: 'AI automation demo', href: '/demos/ai-automation' },
    ],
  },
  website: {
    eyebrow: 'Websites and web apps',
    title: 'A website that works as hard as your sales team.',
    accent: 'Fast, modern, and easy to find on Google.',
    text: 'We design and build business websites, portals, and web apps that look sharp on every device and are ready for search.',
    points: [
      'Mobile-first design with smooth animation',
      'SEO foundations built in from day one',
      'Enquiry forms and portals connected to your workflow',
    ],
    primary: { label: 'See the website demo', href: '/demos/business-website' },
    links: [{ label: 'Web development services', href: '/services/web-development' }],
  },
  mobile: {
    eyebrow: 'Mobile apps',
    title: 'Give customers and teams an app they will use.',
    accent: 'Bookings, job tracking, and approvals on mobile.',
    text: 'We build practical mobile apps for service delivery, field teams, and customer access, connected to your existing systems.',
    points: [
      'Customer booking and request screens',
      'Field-team tasks, checklists, and sign-off',
      'Connected to your CRM, ERP, and automation',
    ],
    primary: { label: 'Try the mobile app demo', href: '/demos/mobile-app' },
    links: [{ label: 'Mobile app services', href: '/services/mobile-apps' }],
  },
  network: {
    eyebrow: 'Network and security',
    title: 'Reliable connectivity and security for your site.',
    accent: 'Wi-Fi, structured cabling, and CCTV, planned properly.',
    text: 'We plan and install business networks, cabling, and camera systems so your people stay connected and your premises stay protected.',
    points: [
      'Wi-Fi coverage planned from a site survey',
      'Clean, labelled structured cabling',
      'CCTV positions reviewed on a plan before installation',
    ],
    primary: { label: 'Explore the site plan demo', href: '/demos/network-security' },
    links: [{ label: 'Network and security services', href: '/services/network-security' }],
  },
};

export default function PromoPopup() {
  const [stage, setStage] = useState('idle');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ interest: '', industry: '', timeline: '' });
  const [adKey, setAdKey] = useState('main');
  const dialogRef = useRef(null);
  const actionsRef = useRef({});
  const advanceRef = useRef(null);
  const brandMsRef = useRef(BRAND_MS);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(FLAG_KEY)) {
        return undefined;
      }
    } catch {
      return undefined;
    }

    if (SKIP_FOR_SEARCH_VISITORS && document.referrer) {
      try {
        if (SEARCH_ENGINES.test(new URL(document.referrer).hostname)) {
          return undefined;
        }
      } catch {
        // Ignore an unreadable referrer.
      }
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      brandMsRef.current = 700;
    }

    setStage('brand');

    try {
      if (!window.sessionStorage.getItem(LOGGED_KEY)) {
        window.sessionStorage.setItem(LOGGED_KEY, '1');
        trackEvent('welcome_shown');
      }
    } catch {
      // Ignore blocked storage.
    }

    return () => window.clearTimeout(advanceRef.current);
  }, []);

  useEffect(() => {
    let id;

    if (stage === 'brand') {
      id = window.setTimeout(() => setStage('welcome'), brandMsRef.current);
    } else if (stage === 'welcome') {
      id = window.setTimeout(() => setStage('survey'), WELCOME_MS);
    }

    return () => window.clearTimeout(id);
  }, [stage]);

  function markSeen() {
    try {
      window.localStorage.setItem(FLAG_KEY, String(Date.now()));
    } catch {
      // Ignore blocked storage.
    }
  }

  function openAd(interest) {
    const key = AD_FOR_INTEREST[interest] || 'main';

    markSeen();
    setAdKey(key);
    setStage('ad');
    trackEvent('ad_shown', { ad: key, interest: interest || null });
  }

  function finish(final) {
    window.clearTimeout(advanceRef.current);
    advanceRef.current = null;

    if (final.interest || final.industry || final.timeline) {
      trackEvent('welcome_answered', {
        interest: final.interest || null,
        industry: final.industry || null,
        timeline: final.timeline || null,
      });
    } else {
      trackEvent('welcome_skipped');
    }

    openAd(final.interest);
  }

  function goNext(current) {
    if (advanceRef.current) {
      return;
    }

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      finish(current);
    }
  }

  function choose(key, value) {
    if (advanceRef.current) {
      return;
    }

    const next = { ...answers, [key]: value };

    setAnswers(next);

    advanceRef.current = window.setTimeout(() => {
      advanceRef.current = null;

      if (step < QUESTIONS.length - 1) {
        setStep((current) => current + 1);
      } else {
        finish(next);
      }
    }, ADVANCE_MS);
  }

  function back() {
    if (advanceRef.current || step === 0) {
      return;
    }

    setStep(step - 1);
  }

  function skipAll() {
    finish(answers);
  }

  function closeAd() {
    trackEvent('ad_closed', { ad: adKey, interest: answers.interest || null });
    setStage('done');
  }

  function adClick(href) {
    trackEvent('ad_clicked', {
      ad: adKey,
      interest: answers.interest || null,
      target: href,
    });
    setStage('done');
  }

  useEffect(() => {
    actionsRef.current = { skipAll, closeAd, stage };
  });

  const active = stage !== 'idle' && stage !== 'done';

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.focus({ preventScroll: true });
    }
  }, [stage, step]);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();

        if (actionsRef.current.stage === 'ad') {
          actionsRef.current.closeAd();
        } else {
          actionsRef.current.skipAll();
        }

        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [active]);

  if (!active) {
    return null;
  }

  const question = QUESTIONS[step];
  const ad = ADS[adKey];

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (stage === 'ad' && event.target === event.currentTarget) {
          closeAd();
        }
      }}
    >
      {stage === 'brand' && (
        <>
          <div
            className={styles.brandStage}
            role='status'
            aria-label='Welcome to ZenStax'
          >
            <div className={styles.logoGlow} aria-hidden='true' />

            <p className={styles.logo} aria-hidden='true'>
              {LOGO.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className={`${styles.letter} ${index >= 3 ? styles.letterAccent : ''}`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </p>

            <span className={styles.logoLine} aria-hidden='true' />
          </div>

          <button type='button' className={styles.brandSkip} onClick={skipAll}>
            Skip
          </button>
        </>
      )}

      {(stage === 'welcome' || stage === 'survey') && (
        <FitBox className={styles.fitPanel}>
          <div
            className={styles.panel}
            role='dialog'
            aria-modal='true'
            aria-labelledby='welcome-title'
            ref={dialogRef}
            tabIndex={-1}
          >
            <p className={styles.brand}>
              Zen<span>Stax</span>
            </p>

            <p className={styles.eyebrow}>Welcome</p>

            <h2 id='welcome-title' className={styles.title}>
              Let us point you to the
              <span>right solution.</span>
            </h2>

            {stage === 'welcome' && (
              <p className={styles.preparing} role='status'>
                <span className={styles.dots} aria-hidden='true'>
                  <i />
                  <i />
                  <i />
                </span>
                Getting a few questions ready
              </p>
            )}

            {stage === 'survey' && (
              <div className={styles.surveyWrap}>
                <p className={styles.lead}>
                  Answer a few quick questions, or skip straight to the website.
                  Every question is optional and it takes about ten seconds.
                </p>

                <div className={styles.progress} aria-hidden='true'>
                  {QUESTIONS.map((item, index) => (
                    <span
                      key={item.key}
                      className={`${styles.step} ${index <= step ? styles.stepOn : ''}`}
                    />
                  ))}
                </div>

                <fieldset key={question.key} className={styles.question}>
                  <legend>
                    {question.label}
                    <span className={styles.optional}>
                      {step + 1} of {QUESTIONS.length}
                    </span>
                  </legend>

                  <div className={styles.chips}>
                    {question.options.map((option) => {
                      const selected = answers[question.key] === option.value;

                      return (
                        <button
                          key={option.value}
                          type='button'
                          className={`${styles.chip} ${selected ? styles.chipOn : ''}`}
                          aria-pressed={selected}
                          onClick={() => choose(question.key, option.value)}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className={styles.nav}>
                  {step > 0 && (
                    <button type='button' className={styles.skip} onClick={back}>
                      ← Back
                    </button>
                  )}

                  <button
                    type='button'
                    className={styles.skip}
                    onClick={() => goNext(answers)}
                  >
                    Skip this question
                  </button>

                  <button
                    type='button'
                    className={`${styles.skip} ${styles.navEnd}`}
                    onClick={skipAll}
                  >
                    Skip to website
                  </button>
                </div>

                <p className={styles.notice}>
                  We record your choices anonymously, with no name, email, phone
                  number, or IP address, to understand what visitors need and
                  improve our website. Read our{' '}
                  <a href='/privacy-policy' target='_blank' rel='noopener noreferrer'>
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </FitBox>
      )}

      {stage === 'ad' && (
        <FitBox className={styles.fitAd}>
          <div
            className={styles.adPanel}
            role='dialog'
            aria-modal='true'
            aria-labelledby='ad-title'
            ref={dialogRef}
            tabIndex={-1}
          >
            <button
              type='button'
              className={styles.closeBtn}
              aria-label='Close and continue to the website'
              onClick={closeAd}
            >
              ×
            </button>

            <div className={styles.adWrap}>
              <div className={styles.adCopy}>
                <p className={styles.brand}>
                  Zen<span>Stax</span>
                </p>

                <p className={styles.eyebrow}>{ad.eyebrow}</p>

                <h2 id='ad-title' className={styles.title}>
                  {ad.title}
                  <span>{ad.accent}</span>
                </h2>

                <p className={styles.lead}>{ad.text}</p>

                <ul className={styles.points}>
                  {ad.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <Link
                    href={ad.primary.href}
                    className='button button-primary'
                    onClick={() => adClick(ad.primary.href)}
                  >
                    {ad.primary.label}
                    <span aria-hidden='true'>→</span>
                  </Link>

                  <Link
                    href='/contact'
                    className='button button-secondary'
                    onClick={() => adClick('/contact')}
                  >
                    Talk to us
                  </Link>
                </div>

                <div className={styles.moreLinks}>
                  {ad.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => adClick(link.href)}
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>

                <button type='button' className={styles.skip} onClick={closeAd}>
                  Continue to the website
                </button>
              </div>

              <div className={styles.adArt}>
                <WelcomeArt name={adKey} />
              </div>
            </div>
          </div>
        </FitBox>
      )}
    </div>
  );
}
