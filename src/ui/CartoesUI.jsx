import styles from "./CartoesUI.module.scss";

export default function CartoesUI({ cartoes }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Seus cartões</h1>

      {cartoes.length === 0 && (
        <p className={styles.empty}>
          Nenhum cartão encontrado
        </p>
      )}

      {cartoes.map((c) => (
        <div key={c.id} className={styles.card}>
          <div className={styles.top}>
            <span className={styles.tipo}>{c.tipo}</span>
            <span className={styles.status}>Ativo</span>
          </div>

          <div className={styles.numero}>
            **** **** **** {c.numero.slice(-4)}
          </div>

          <div className={styles.saldo}>
            Saldo disponível
            <strong>
              R$ {c.saldo.toFixed(2).replace(".", ",")}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}
