import Link from 'next/link';
import styles from './ai-demo.module.css';

export const metadata = {
  title: 'AI Automation Demo',
  description:
    'Interactive demo of three business automations by ZenStax: lead follow-up, a weekly report, and quote reminders. See the trigger, the AI step, and the result.',
  alternates: { canonical: '/demos/ai-automation' },
};

const scenarios = [
  {
    key: 'A',
    id: 'scenario-lead',
    short: 'Lead follow-up',
    summary: 'A new enquiry gets a fast, relevant reply and reaches the right person.',
    steps: [
      { kind: 'Trigger', title: 'New enquiry arrives', text: 'A customer fills in your website form or sends an email.' },
      { kind: 'AI', title: 'Request is read and sorted', text: 'The automation finds the service needed and the urgency, and separates sales, support, and spam.' },
      { kind: 'Action', title: 'Reply sent, task created', text: 'A tailored acknowledgement goes out and a follow-up task is added to your CRM.' },
      { kind: 'Action', title: 'Owner is notified', text: 'The right team member receives a short summary with the customer details.' },
    ],
    sampleTitle: 'What your team sees',
    sample: [
      ['Category', 'Sales enquiry'],
      ['Service', 'Website redesign'],
      ['Urgency', 'High, wants a call this week'],
      ['Assigned to', 'Sales team'],
      ['Customer reply', 'Sent within a minute'],
    ],
  },
  {
    key: 'B',
    id: 'scenario-report',
    short: 'Weekly report',
    summary: 'Numbers from several tools become one short report, delivered on schedule.',
    steps: [
      { kind: 'Trigger', title: 'Every Monday at 8:00', text: 'The schedule starts the report without anyone remembering to run it.' },
      { kind: 'Action', title: 'Data is collected', text: 'Sales, jobs, and invoice figures are pulled from your existing tools.' },
      { kind: 'AI', title: 'Summary is written', text: 'AI turns the numbers into plain language and flags anything unusual.' },
      { kind: 'Action', title: 'Report is delivered', text: 'Managers receive it by email or in your team chat.' },
    ],
    sampleTitle: 'What managers read',
    sample: [
      ['Orders', 'Up 8% on last week'],
      ['Jobs completed', '42 of 46 scheduled'],
      ['Open invoices', '5 overdue'],
      ['Flag', 'Cancellations doubled on Thursday'],
    ],
  },
  {
    key: 'C',
    id: 'scenario-quote',
    short: 'Quote reminders',
    summary: 'Quotes that go quiet get a polite nudge, and the owner steps in only when needed.',
    steps: [
      { kind: 'Trigger', title: 'Quote sent, no reply', text: 'Three days pass without an answer from the customer.' },
      { kind: 'Action', title: 'CRM status is checked', text: 'The automation confirms the quote is still open and nothing has changed.' },
      { kind: 'AI', title: 'Reminder is drafted', text: 'AI writes a short, friendly message that references the quote.' },
      { kind: 'Action', title: 'Sent, logged, escalated', text: 'The reminder goes out, the CRM is updated, and the owner is alerted if there is still no reply.' },
    ],
    sampleTitle: 'What gets recorded',
    sample: [
      ['Quote', '#2087, sent 3 days ago'],
      ['Reminder', 'Sent to the customer today'],
      ['CRM status', 'Updated to Follow-up'],
      ['If still no reply', 'Owner alerted after 4 more days'],
    ],
  },
];

const kindClass = {
  Trigger: styles.kTrigger,
  AI: styles.kAi,
  Action: styles.kAction,
};

export default function AIDemoPage() {
  return (
    <div className={styles.page}>
      <div className='container'>
        <div className={styles.stage}>
          {scenarios.map((item, index) => (
            <input
              key={item.id}
              type='radio'
              name='demo-scenario'
              id={item.id}
              className={`${styles.radio} ${styles['r' + item.key]}`}
              aria-label={item.short}
              defaultChecked={index === 0}
            />
          ))}

          <div className={styles.layout}>
            <div className={styles.copy}>
              <p className='eyebrow'>Interactive Demo</p>
              <h1>See how an automation runs, step by step.</h1>
              <p className={styles.lead}>
                Pick a common business task. Each example shows what starts the
                automation, where AI does the thinking, and what your team gets
                at the end.
              </p>

              <ul className={styles.chapters}>
                {scenarios.map((item, index) => (
                  <li key={item.id}>
                    <label
                      htmlFor={item.id}
                      className={`${styles.chap} ${styles['chap' + item.key]}`}
                    >
                      <strong>{index + 1}. {item.short}</strong>
                      <span>{item.summary}</span>
                    </label>
                  </li>
                ))}
              </ul>

              <p className={styles.notice}>
                Illustrative examples with made-up data. A real automation is
                built around your tools and rules, with a person approving the
                steps that matter.
              </p>

              <div className={styles.actions}>
                <Link href='/contact' className='button button-primary'>
                  Discuss AI Automation
                  <span aria-hidden='true'>→</span>
                </Link>
                <Link href='/services/ai' className={styles.back}>
                  AI automation services
                </Link>
              </div>
            </div>

            <div className={styles.panel}>
              {scenarios.map((item) => (
                <section
                  key={item.id}
                  className={`${styles.pane} ${styles['pane' + item.key]}`}
                  aria-label={item.short}
                >
                  <div className={styles.paneHead}>
                    <h2>{item.short}</h2>
                    <p>{item.summary}</p>
                  </div>

                  <ol className={styles.flow}>
                    {item.steps.map((step) => (
                      <li key={step.title} className={styles.node}>
                        <span className={`${styles.kind} ${kindClass[step.kind]}`}>
                          {step.kind}
                        </span>
                        <span className={styles.nodeTitle}>{step.title}</span>
                        <p className={styles.nodeText}>{step.text}</p>
                      </li>
                    ))}
                  </ol>

                  <div className={styles.sample}>
                    <p className={styles.sampleTitle}>{item.sampleTitle}</p>
                    <dl className={styles.rows}>
                      {item.sample.map(([label, value]) => (
                        <div key={label} className={styles.row}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
