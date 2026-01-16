import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <div>
            <div className={styles.name}>Upfin</div>
            <div className={styles.sub}>painel</div>
          </div>
        </div>

        <nav className={styles.nav}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/cartoes">Cartões</Link>
          <Link to="/transacoes">Transações</Link>
        </nav>

        <button className={styles.out} onClick={sair}>Sair</button>
      </div>
    </header>
  );
}
