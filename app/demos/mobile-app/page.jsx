import Link from 'next/link';
import styles from './mobile-app-demo.module.css';

export const metadata = {
  title: 'Mobile App Demo',
  description:
    'Interactive sample of a service booking and field-team mobile app designed by ZenStax. A fictional brand that shows what a practical business app can look like.',
  alternates: { canonical: '/demos/mobile-app' },
};

export default function MobileAppDemoPage() {
  return (
    <div className={styles.page}>
      <div className='container'>
        <div className={styles.stage}>
          <input
            type='radio'
            name='demo-screen'
            id='screen-book'
            className={`${styles.radio} ${styles.rA}`}
            aria-label='Customer booking screen'
            defaultChecked
          />
          <input
            type='radio'
            name='demo-screen'
            id='screen-track'
            className={`${styles.radio} ${styles.rB}`}
            aria-label='Job tracking screen'
          />
          <input
            type='radio'
            name='demo-screen'
            id='screen-team'
            className={`${styles.radio} ${styles.rC}`}
            aria-label='Technician screen'
          />

          <div className={styles.layout}>
            <div className={styles.copy}>
              <p className='eyebrow'>Interactive Demo</p>
              <h1>A mobile app your customers and team will actually use.</h1>
              <p className={styles.lead}>
                This sample shows one service app from both sides: a customer
                booking and tracking a job, and a technician working through the
                day. Pick a view below or tap the tabs inside the phone.
              </p>

              <ul className={styles.chapters}>
                <li>
                  <label htmlFor='screen-book' className={`${styles.chap} ${styles.chapA}`}>
                    <strong>1. Customer books a service</strong>
                    <span>Choose a service, pick a time, confirm in seconds.</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='screen-track' className={`${styles.chap} ${styles.chapB}`}>
                    <strong>2. Customer tracks the job</strong>
                    <span>Technician details, arrival time, and clear progress.</span>
                  </label>
                </li>
                <li>
                  <label htmlFor='screen-team' className={`${styles.chap} ${styles.chapC}`}>
                    <strong>3. Technician runs the day</strong>
                    <span>Job list, checklists, and supervisor approvals.</span>
                  </label>
                </li>
              </ul>

              <p className={styles.notice}>
                Sample app with a fictional brand and made-up names. Your app
                would use your own branding, services, and systems.
              </p>

              <div className={styles.actions}>
                <Link href='/contact' className='button button-primary'>
                  Discuss a Mobile App
                  <span aria-hidden='true'>→</span>
                </Link>
                <Link href='/services/mobile-apps' className={styles.back}>
                  Mobile app services
                </Link>
              </div>
            </div>

            <div className={styles.phone} role='group' aria-label='Sample mobile app'>
              <div className={styles.status} aria-hidden='true'>
                <span>9:41</span>
                <span>5G ▮▮▮</span>
              </div>

              <section className={`${styles.screen} ${styles.screenA}`} aria-label='Book a service'>
                <div>
                  <span className={styles.hello}>Good morning, Aisha</span>
                  <h2 className={styles.title}>Book a service</h2>
                </div>

                <div className={styles.chips}>
                  <span className={`${styles.chip} ${styles.on}`}>Cleaning</span>
                  <span className={styles.chip}>AC repair</span>
                  <span className={styles.chip}>Plumbing</span>
                  <span className={styles.chip}>Electrical</span>
                </div>

                <span className={styles.label}>Pick a time</span>
                <div className={styles.slots}>
                  <span className={`${styles.slot} ${styles.on}`}>Today 4 PM</span>
                  <span className={styles.slot}>Today 6 PM</span>
                  <span className={styles.slot}>Tomorrow 10 AM</span>
                  <span className={styles.slot}>Tomorrow 2 PM</span>
                </div>

                <div className={styles.address}>
                  <span className={styles.dot} />
                  Home · Apartment 1204
                </div>

                <div className={styles.primary}>Confirm booking</div>
              </section>

              <section className={`${styles.screen} ${styles.screenB}`} aria-label='Track your job'>
                <div>
                  <span className={styles.hello}>Booking #1042 · AC repair</span>
                  <h2 className={styles.title}>Your technician is on the way</h2>
                </div>

                <div className={styles.map} aria-hidden='true'>
                  <span className={styles.pin} />
                </div>

                <div className={styles.tech}>
                  <span className={styles.avatar}>O</span>
                  <span className={styles.techInfo}>
                    Omar K.
                    <small>AC specialist · 4.9 rating</small>
                  </span>
                  <span className={styles.eta}>18 min</span>
                </div>

                <ul className={styles.timeline}>
                  <li className={`${styles.tl} ${styles.tlDone}`}>Booking confirmed</li>
                  <li className={`${styles.tl} ${styles.tlDone}`}>Technician assigned</li>
                  <li className={`${styles.tl} ${styles.tlNow}`}>On the way</li>
                  <li className={styles.tl}>Job completed</li>
                </ul>
              </section>

              <section className={`${styles.screen} ${styles.screenC}`} aria-label='Technician jobs'>
                <div>
                  <span className={styles.hello}>Omar K. · Today</span>
                  <h2 className={styles.title}>3 jobs today</h2>
                </div>

                <div className={styles.job}>
                  <div className={styles.jobHead}>
                    10:00 Cleaning
                    <span className={`${styles.pill} ${styles.pillDone}`}>Done</span>
                  </div>
                </div>

                <div className={styles.job}>
                  <div className={styles.jobHead}>
                    13:30 AC repair
                    <span className={`${styles.pill} ${styles.pillNow}`}>In progress</span>
                  </div>
                  <ul className={styles.checks}>
                    <li><span className={`${styles.box} ${styles.boxOn}`}>✓</span>Arrived and checked in</li>
                    <li><span className={`${styles.box} ${styles.boxOn}`}>✓</span>Photo of the issue added</li>
                    <li><span className={styles.box} />Customer sign-off</li>
                  </ul>
                </div>

                <div className={styles.approved}>✓ Extra part approved by supervisor</div>

                <div className={styles.job}>
                  <div className={styles.jobHead}>
                    16:00 Plumbing
                    <span className={`${styles.pill} ${styles.pillNext}`}>Upcoming</span>
                  </div>
                </div>

                <div className={styles.primary}>Mark job complete</div>
              </section>

              <nav className={styles.nav} aria-label='Demo app tabs'>
                <label htmlFor='screen-book' className={`${styles.navItem} ${styles.navA}`}>
                  <b>+</b>Book
                </label>
                <label htmlFor='screen-track' className={`${styles.navItem} ${styles.navB}`}>
                  <b>◎</b>Track
                </label>
                <label htmlFor='screen-team' className={`${styles.navItem} ${styles.navC}`}>
                  <b>✓</b>Team
                </label>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
