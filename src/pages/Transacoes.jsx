import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Transacoes() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    api.get("/transacoes")
      .then((res) => setLista(res.data))
      .catch(() => alert("Erro ao carregar transações"));
  }, []);

  return (
    <div>
      <h3>Transações</h3>

      {lista.length === 0 && <p>Nenhuma transação</p>}

      {lista.map((t, i) => (
        <div key={i}>
          <p>Valor: R$ {t.valor}</p>
          <p>Status: {t.status}</p>
          <p>Data: {new Date(t.dataHora).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
