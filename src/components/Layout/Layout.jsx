import { useState } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <header className={styles.topbar}>
        <div className={styles.logo}>Upfin</div>

        <button
          className={styles.menu}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
