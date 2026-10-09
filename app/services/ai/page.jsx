import Link from 'next/link';
import styles from './ai.module.css';

export const metadata = {
  title: 'AI Automation for Business Workflows',
  description:
    'ZenStax designs practical AI automation for lead follow-up, reporting, reminders and data entry, connected to the tools you already use. See an interactive demo.',
  alternates: { canonical: '/services/ai' },
  openGraph: {
    title: 'AI Automation for Business Workflows | ZenStax',
    description:
      'Practical AI automation for lead follow-up, reporting, reminders and data entry. Try the interactive demo.',
    url: '/services/ai',
    type: 'website',
  },
};

const benefits = [
  'Automate repetitive admin tasks and workflow steps.',
  'Create follow-up, notification, and reminder workflows.',
  'Improve response speed for leads and customer requests.',
  'Generate clearer reports from business data.',
  'Connect disconnected tools and reduce manual data entry.',
];

const offerings = [
  {
    icon: '01',
    title: 'Lead and enquiry follow-up',
    text: 'Reply to new enquiries quickly, route them to the right person, and make sure none are forgotten.',
  },
  {
    icon: '02',
    title: 'Reminders and notifications',
    text: 'Send timely nudges for quotes, payments, appointments, and tasks without anyone chasing by hand.',
  },
  {
    icon: '03',
    title: 'Reporting and summaries',
    text: 'Turn data from several tools into a short, readable report that arrives on schedule.',
  },
  {
    icon: '04',
    title: 'Request triage',
    text: 'Read incoming emails and forms, sort them by type and urgency, and hand them to the right team.',
  },
  {
    icon: '05',
    title: 'Document and data entry',
    text: 'Pull key details from emails, forms, and files into your CRM, ERP, or spreadsheets.',
  },
  {
    icon: '06',
    title: 'Tool-to-tool integration',
    text: 'Connect the systems you already use so information moves between them on its own.',
  },
];

const steps = [
  {
    title: 'Find',
    text: 'We look for repeated steps, slow handovers, and missed follow-ups, then pick the one that wastes the most time.',
  },
  {
    title: 'Design',
    text: 'We map the workflow with you and decide where AI helps and where a person should approve.',
  },
  {
    title: 'Build and test',
    text: 'We build the automation on your existing tools and test it with real examples before it goes live.',
  },
  {
    title: 'Monitor and improve',
    text: 'We watch results, fix edge cases, and extend the automation once it is working well.',
  },
];

const previewSteps = [
  { kind: 'Trigger', text: 'New enquiry received' },
  { kind: 'AI', text: 'Request read and categorised' },
  { kind: 'Action', text: 'Reply sent, task created' },
  { kind: 'Action', text: 'Owner notified with summary' },
];

const kindClass = {
  Trigger: styles.kTrigger,
  AI: styles.kAi,
  Action: styles.kAction,
};

const faqs = [
  {
    q: 'What kinds of tasks can be automated?',
    a: 'Repetitive, rule-based work is the best fit: following up with leads, sending reminders, sorting incoming requests, copying details between systems, and producing regular reports. We start by listing where your team spends time on manual steps.',
  },
  {
    q: 'Do we need to replace the tools we already use?',
    a: 'No. We design automations around your current process and connect your existing CRM, ERP, email, forms, and spreadsheets rather than replacing them.',
  },
  {
    q: 'Is AI automation the same as a chatbot?',
    a: 'No. A chatbot talks to people. Automation works behind the scenes: it reads a request, decides what to do, updates your systems, and notifies the right person. A chat interface can be one part of it, but it is not required.',
  },
  {
    q: 'Will AI make decisions without our approval?',
    a: 'Only where you are comfortable with it. We design approval steps for anything that matters, such as sending a quote or changing a customer record, so a person stays in control.',
  },
  {
    q: 'How do we know if a task is worth automating?',
    a: 'Look for tasks that repeat often, follow clear rules, and cost your team time or cause delays when they are missed. We help you judge this in a short discovery conversation before building anything.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Automation',
      serviceType: 'Business process automation',
      description:
        'Practical AI automation for lead follow-up, reminders, reporting, request triage, and data entry, connected to existing business tools.',
      provider: { '@type': 'Organization', name: 'ZenStax' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function AIPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='page-hero'>
        <div className='container page-hero-content'>
          <p className='eyebrow'>AI Automation</p>

          <h1>
            Reduce repetitive work.
            <span> Improve the way work moves.</span>
          </h1>

          <p>
            ZenStax designs practical automation that helps teams spend less
            time on manual tasks and more time on work that matters.
          </p>

          <Link href='/demos/ai-automation' className='button button-primary'>
            See an Automation in Action
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>

      <section className='service-detail-section'>
        <div className='container split-layout'>
          <div>
            <p className='section-label'>What we help automate</p>

            <h2>Start with the task that wastes the most time.</h2>
          </div>

          <div className='content-copy'>
            <p>
              AI automation is most useful when it is connected to a real
              workflow. We identify repeated steps, missed follow-ups, slow
              handovers, and manual reporting, then design an automation that
              supports your existing process.
            </p>

            <ul className='clean-list'>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <Link href='/contact' className='button button-primary'>
              Discuss AI Automation
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>What we build</p>
            <h2>Automation for the work your team repeats every day.</h2>
            <p>
              Each automation targets one real workflow, so the result is easy
              to understand, easy to trust, and easy to measure.
            </p>
          </div>

          <div className={styles.grid}>
            {offerings.map((item) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.showcase}`}>
          <div>
            <p className='section-label'>Live demo</p>
            <h2>Watch a workflow run before you build one.</h2>
            <p>
              Open our interactive demo and step through three common
              automations: lead follow-up, a weekly report, and quote reminders.
              Each one shows what triggers it, where AI helps, and what your team
              receives.
            </p>

            <ul className={styles.points}>
              <li>Clear triggers, steps, and outcomes</li>
              <li>AI used where it adds value, people where it matters</li>
              <li>Works alongside your existing tools</li>
            </ul>

            <Link href='/demos/ai-automation' className='button button-primary'>
              Open the Interactive Demo
              <span aria-hidden='true'>→</span>
            </Link>
          </div>

          <div className={styles.previewWrap}>
            <Link
              href='/demos/ai-automation'
              className={styles.previewLink}
              aria-label='Open the interactive AI automation demo'
            >
              <div className={styles.preview} aria-hidden='true'>
                <span className={styles.pTag}>Sample workflow</span>
                {previewSteps.map((step) => (
                  <div key={step.text} className={styles.pNode}>
                    <span className={`${styles.kind} ${kindClass[step.kind]}`}>
                      {step.kind}
                    </span>
                    {step.text}
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>How it works</p>
            <h2>From a time-wasting task to a working automation.</h2>
          </div>

          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.title} className={styles.step}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className='container'>
          <div className={styles.head}>
            <p className='section-label'>FAQ</p>
            <h2>AI automation questions, answered.</h2>
          </div>

          <div className={styles.faq}>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className='container'>
          <h2>Which task would you automate first?</h2>
          <p>
            Tell us where your team loses time. We will help you pick the
            workflow that is worth automating and tell you honestly if
            something is better left manual.
          </p>
          <Link href='/contact' className='button button-primary'>
            Discuss AI Automation
            <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
