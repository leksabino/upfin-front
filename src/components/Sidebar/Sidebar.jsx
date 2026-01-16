import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

export default function Sidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />

      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <strong>Upfin</strong>
        </div>

        <nav className={styles.nav}>
          <Link to="/dashboard" onClick={onClose}>Dashboard</Link>
          <Link to="/cartoes" onClick={onClose}>Cartões</Link>
          <Link to="/transacoes" onClick={onClose}>Transações</Link>
        </nav>

        <button className={styles.logout}>Sair</button>
      </aside>
    </>
  );
}
