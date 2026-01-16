import styles from "./TransacoesUI.module.scss";

export default function TransacoesUI({
  transacoes,
  cartoes,
  cartaoSelecionado,
  onChangeCartao
}) {
  return (
    <div className={styles.wrapper}>
      <h1>Transações</h1>

      <select
        className={styles.select}
        value={cartaoSelecionado}
        onChange={(e) => onChangeCartao(e.target.value)}
      >
        <option value="">Todos os cartões</option>
        {cartoes.map((c) => (
          <option key={c.id} value={c.numero}>
            **** {c.numero.slice(-4)}
          </option>
        ))}
      </select>

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
    </div>
  );
}
