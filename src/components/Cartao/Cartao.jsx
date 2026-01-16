import { useState } from "react";
import styles from "./Cartao.module.scss";
import Transacoes from "../Transacoes/Transacoes";

export default function Cartao() {
  const limiteTotal = 300;

  const [limiteDisponivel, setLimiteDisponivel] = useState(300);
  const [transacoes, setTransacoes] = useState([]);

  function simularCompra(valor) {
    if (valor > limiteDisponivel) {
      alert("Limite insuficiente");
      return;
    }

    setLimiteDisponivel(limiteDisponivel - valor);

    const novaTransacao = {
      id: Date.now(),
      valor,
      data: new Date().toLocaleString("pt-BR"),
      status: "APROVADA",
    };

    setTransacoes([novaTransacao, ...transacoes]);
  }

  const percentualUsado =
    ((limiteTotal - limiteDisponivel) / limiteTotal) * 100;

  return (
    <div className={styles.card}>
      {/* Cabeçalho */}
      <div className={styles.top}>
        <span>UPFIN</span>
        <span>VIRTUAL</span>
      </div>

      {/* Número */}
      <div className={styles.number}>
        **** **** **** 4829
      </div>

      {/* Dados */}
      <div className={styles.bottom}>
        <div>
          <small>Validade</small>
          <strong>12/29</strong>
        </div>

        <div>
          <small>CVV</small>
          <strong>321</strong>
        </div>
      </div>

      {/* Limite */}
      <div className={styles.limitBox}>
        <small>Limite disponível</small>
        <strong>R$ {limiteDisponivel},00</strong>

        <div className={styles.bar}>
          <div
            className={styles.used}
            style={{ width: `${percentualUsado}%` }}
          />
        </div>

        <span className={styles.total}>
          Limite total: R$ {limiteTotal},00
        </span>
      </div>

      {/* Ações */}
      <div className={styles.actions}>
        <button onClick={() => simularCompra(20)}>
          Comprar R$ 20
        </button>

        <button onClick={() => simularCompra(50)}>
          Comprar R$ 50
        </button>
      </div>

      {/* Lista de transações */}
      <Transacoes transacoes={transacoes} />
    </div>
  );
}
