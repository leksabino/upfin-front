import styles from "./BottomNav.module.scss";

export default function BottomNav({ ativo, setAtivo }) {
  return (
    <nav className={styles.nav}>
      <button
        className={ativo === "inicio" ? styles.active : ""}
        onClick={() => setAtivo("inicio")}
      >
        🏠
        <span>Início</span>
      </button>

      <button
        className={ativo === "cartao" ? styles.active : ""}
        onClick={() => setAtivo("cartao")}
      >
        💳
        <span>Cartão</span>
      </button>

      <button
        className={ativo === "perfil" ? styles.active : ""}
        onClick={() => setAtivo("perfil")}
      >
        👤
        <span>Perfil</span>
      </button>
    </nav>
  );
}
