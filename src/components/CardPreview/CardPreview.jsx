import styles from "./CardPreview.module.scss";

export default function CardPreview({ numero = "•••• •••• •••• ••••", nome = "CLIENTE UPFIN" }) {
  const tail = numero?.slice(-4) || "0000";

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.badge}>UPFIN</span>
        <span className={styles.chip} />
      </div>

      <div className={styles.mid}>
        <div className={styles.dots}>•••• •••• ••••</div>
        <div className={styles.tail}>{tail}</div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.name}>{nome}</span>
        <span className={styles.type}>VIRTUAL</span>
      </div>
    </div>
  );
}
