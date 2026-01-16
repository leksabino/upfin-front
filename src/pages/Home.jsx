export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f6fb] text-slate-900">
      {/* Topbar */}
      <header className="border-b border-slate-200/70 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-3xl font-extrabold tracking-tight text-[#5b35d5]">
            Upfin
          </div>

          <button className="text-sm font-semibold text-slate-500 hover:text-slate-700">
            Entrar
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          {/* Texto */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-800 md:text-6xl">
              Seu cartão, mesmo
              <br />
              quando o banco diz não.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-500 md:text-xl">
              Sem agência. Sem papelada.
              <br />
              Uma nova chance de controle financeiro.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-gradient-to-r from-[#6a3df3] to-[#5b35d5] px-6 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(106,61,243,0.25)] hover:brightness-110">
                Criar conta grátis
              </button>

              <button className="rounded-xl border border-[#cfc7ff] bg-white px-6 py-3 font-semibold text-[#5b35d5] shadow-sm hover:bg-[#f3f0ff]">
                Como funciona
              </button>
            </div>
          </div>

          {/* Cartão */}
          <div className="relative flex justify-center md:justify-end">
            {/* brilho de fundo */}
            <div className="absolute -inset-6 rounded-[48px] bg-[radial-gradient(circle_at_30%_30%,rgba(106,61,243,0.30),transparent_55%),radial-gradient(circle_at_70%_50%,rgba(178,90,255,0.25),transparent_60%)] blur-2xl" />

            <UpfinCard />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/70 py-8 text-center text-sm text-slate-500">
          © 2025 <span className="font-semibold text-slate-700">Upfin</span> — inclusão
          financeira de verdade.
        </footer>
      </main>
    </div>
  );
}

function UpfinCard() {
  return (
    <div className="relative w-[320px] rotate-[-6deg] md:w-[420px] md:rotate-[-8deg]">
      {/* sombra */}
      <div className="absolute left-1/2 top-[88%] h-10 w-[80%] -translate-x-1/2 rounded-full bg-black/15 blur-xl" />

      {/* cartão */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2a165c] via-[#4a2db3] to-[#7b4dff] p-6 text-white shadow-[0_28px_60px_rgba(77,45,179,0.35)] ring-1 ring-white/20">
        {/* brilho */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-56 rotate-12 rounded-[999px] bg-white/15 blur-2xl" />
        <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-[999px] bg-fuchsia-300/20 blur-3xl" />

        <div className="flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-tight">
            Upfin <span className="text-white/80 font-semibold">Card</span>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="text-lg tracking-[0.35em] text-white/90">**** **** ****</div>
          <div className="text-3xl font-semibold tracking-wider">1234</div>
        </div>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <div className="text-sm text-white/70">Nome</div>
            <div className="text-lg font-semibold">Alexssander</div>
          </div>

          <div className="text-right">
            <div className="text-sm text-white/70">Validade</div>
            <div className="text-lg font-semibold">12/29</div>
          </div>
        </div>

        {/* faixa decorativa */}
        <div className="pointer-events-none absolute -bottom-10 left-0 h-24 w-[120%] rotate-[-6deg] bg-black/10" />
      </div>
    </div>
  );
}
