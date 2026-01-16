import styles from "./Transacoes.module.scss";

export default function Transacoes({ transacoes }) {
  if (transacoes.length === 0) {
    return (
      <p className={styles.empty}>
        Nenhuma transação ainda
      </p>
    );
  }

  return (
    <div className={styles.list}>
      <h3>Últimas transações</h3>

      {transacoes.map((t) => (
        <div key={t.id} className={styles.item}>
          <div>
            <strong>Compra no cartão</strong>
            <span>{t.data}</span>
          </div>

          <div className={styles.right}>
            <strong>R$ {t.valor},00</strong>
            <span className={styles.status}>
              {t.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
