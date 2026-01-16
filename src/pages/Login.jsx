import { useState } from "react";
import { api } from "../services/api";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        username: cpf,   // 🔥 IMPORTANTE
        password: senha,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Login inválido");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Upfin</h1>

      <input
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}
