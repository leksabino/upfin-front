import { useState } from "react";
import styles from "./TransacaoModal.module.scss";

export default function TransacaoModal({
  aberto,
  tipo,
  onClose,
  onConfirmar,
}) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  if (!aberto) return null;

  function confirmar() {
    const v = Number(valor);

    if (!descricao || !v || v <= 0) {
      alert("Preencha corretamente");
      return;
    }

    onConfirmar({
      descricao,
      valor: v,
      tipo,
    });

    setDescricao("");
    setValor("");
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>{tipo === "ENTRADA" ? "Nova Entrada" : "Nova Saída"}</h3>

        <input
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <input
          placeholder="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.confirm} onClick={confirmar}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
