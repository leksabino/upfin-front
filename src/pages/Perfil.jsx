import Shell from "../components/Shell/Shell";
import styles from "./Perfil.module.scss";

export default function Perfil() {
  return (
    <Shell>
      <div className={styles.profile}>
        <p><strong>Nome:</strong> Alexssander</p>
        <p><strong>CPF:</strong> ***.***.***-**</p>
        <p><strong>Plano:</strong> Grátis</p>

        <button>Sair</button>
      </div>
    </Shell>
  );
}
