import styles from "./DashboardUI.module.scss";

export default function DashboardUI({
  saldoTotal,
  cartoesCount,
  transacoes
}) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.balanceCard}>
        <span>Saldo disponível</span>
        <strong>
          R$ {saldoTotal.toFixed(2).replace(".", ",")}
        </strong>
      </section>

      <section className={styles.stats}>
        <div className={styles.stat}>
          <span>Cartões ativos</span>
          <strong>{cartoesCount}</strong>
        </div>
      </section>

      <section className={styles.transactions}>
        <h2>Últimas movimentações</h2>

        {transacoes.length === 0 && (
          <p className={styles.empty}>
            Nenhuma transação encontrada
          </p>
        )}

        {transacoes.map((t) => (
          <div key={t.id} className={styles.row}>
            <div>
              <strong>{t.descricao}</strong>
              <span>{t.tipo}</span>
            </div>

            <div
              className={
                t.tipo === "CREDITO"
                  ? styles.credit
                  : styles.debit
              }
            >
              {t.tipo === "CREDITO" ? "+" : "-"} R$
              {t.valor.toFixed(2).replace(".", ",")}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
