import styles from './studio.module.css';

export default function SectionLabel({ n, label }) {
  return (
    <div className={styles.labelRow}>
      <span className={styles.mono}>
        ({n}) {label}
      </span>
      <span className={styles.mono}>{n} / 08</span>
    </div>
  );
}
