import styles from "./StatCard.module.scss";

export default function StatCard({ title, value, hint }) {
  return (
    <div className={`${styles.card} glass`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.hint}>{hint}</div>
    </div>
  );
}
