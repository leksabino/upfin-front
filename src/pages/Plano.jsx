import Shell from "../components/Shell/Shell";
import styles from "./Plano.module.scss";

export default function Plano() {
  return (
    <Shell>
      <div className={styles.plans}>
        <div className={styles.free}>
          <h3>Grátis</h3>
          <p>Até 20 transações</p>
        </div>

        <div className={styles.pro}>
          <h3>Pro</h3>
          <strong>R$ 19,90 / mês</strong>
          <ul>
            <li>✔ Transações ilimitadas</li>
            <li>✔ Relatórios simples</li>
          </ul>
          <button>Quero Pro</button>
        </div>
      </div>
    </Shell>
  );
}
