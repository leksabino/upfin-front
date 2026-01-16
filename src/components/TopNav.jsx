import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../services/auth";

export default function TopNav() {
  const navigate = useNavigate();
  const authed = isAuthenticated();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          <span className="text-[#8b5cf6]">Up</span>fin
        </Link>

        <nav className="flex items-center gap-3">
          {authed ? (
            <>
              <Link className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10" to="/dashboard">Dashboard</Link>
              <Link className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10" to="/cartoes">Cartões</Link>
              <Link className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10" to="/transacoes">Transações</Link>
              <button
                onClick={handleLogout}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-xl bg-[#8b5cf6] px-4 py-2 text-sm font-medium text-white hover:brightness-110"
            >
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
