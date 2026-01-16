import { useState } from "react";
import Shell from "../components/Shell/Shell";
import Cartao from "../components/Cartao/Cartao";
import BottomNav from "../components/BottomNav/BottomNav";

export default function Dashboard() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");

  return (
    <>
      <Shell>
        {abaAtiva === "inicio" && (
          <>
            <h2>Olá, Alexssander</h2>
            <p style={{ opacity: 0.7 }}>
              Bem-vindo à sua conta Upfin
            </p>
          </>
        )}

        {abaAtiva === "cartao" && <Cartao />}

        {abaAtiva === "perfil" && (
          <>
            <h2>Perfil</h2>
            <p style={{ opacity: 0.7 }}>
              Em breve: dados do usuário
            </p>
          </>
        )}
      </Shell>

      <BottomNav ativo={abaAtiva} setAtivo={setAbaAtiva} />
    </>
  );
}
