import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useMe() {
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setError("");
        const res = await api.get("/clientes/me");
        setMe(res.data);
      } catch (e) {
        setError("Erro ao carregar cliente logado");
        setMe(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { me, loading, error };
}
