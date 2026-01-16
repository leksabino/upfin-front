import styles from "./Shell.module.scss";

export default function Shell({ children }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <h1>Upfin</h1>
      </header>

      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
