import styles from './hero-live-card.module.css';

const stats = [
  { label: 'New leads', value: '12', note: '+4 today' },
  { label: 'Follow-ups sent', value: '28', note: 'automatic' },
  { label: 'Open tasks', value: '7', note: '3 due today' },
];

const feed = [
  { tag: 'Lead', title: 'New enquiry received', meta: 'Website form', time: '2 min ago' },
  { tag: 'Auto', title: 'Follow-up sent to customer', meta: 'Quote reminder', time: '9 min ago' },
  { tag: 'Task', title: 'Task assigned to sales team', meta: 'Call back before 4 PM', time: '15 min ago' },
  { tag: 'Report', title: 'Weekly report ready', meta: 'Sent to managers', time: '1 hr ago' },
  { tag: 'Site', title: 'Network survey booked', meta: 'Office visit on Thursday', time: '2 hr ago' },
];

const tagClass = {
  Lead: styles.tagLead,
  Auto: styles.tagAuto,
  Task: styles.tagTask,
  Report: styles.tagReport,
  Site: styles.tagSite,
};

export default function HeroLiveCard() {
  const rows = [...feed, ...feed];

  return (
    <div className={`hero-side-card ${styles.card}`}>
      <div className={styles.top}>
        <p className={styles.label}>Live operations view</p>
        <span className={styles.live}>
          <i aria-hidden='true' />
          Live
        </span>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.note}</small>
          </div>
        ))}
      </div>

      <div className={styles.feedWrap}>
        <ul className={styles.feed} aria-label='Sample activity feed'>
          {rows.map((item, index) => (
            <li
              key={`${item.title}-${index}`}
              className={styles.item}
              aria-hidden={index >= feed.length ? 'true' : undefined}
            >
              <span className={`${styles.tag} ${tagClass[item.tag]}`}>{item.tag}</span>
              <span className={styles.text}>
                <strong>{item.title}</strong>
                <small>{item.meta}</small>
              </span>
              <time className={styles.time}>{item.time}</time>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.foot}>
        <span>Illustrative sample data</span>
        <a href='#demos'>See live demos →</a>
      </div>
    </div>
  );
}
