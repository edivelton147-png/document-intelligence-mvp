const navigationItems = [
  { label: "Workspaces", href: "/", active: true },
  { label: "Documentos", href: "#", active: false },
  { label: "Revisión humana", href: "#", active: false },
  { label: "Ajustes", href: "#", active: false }
];

export function Sidebar() {
  return (
    <aside className="flex min-h-screen w-full flex-col border-r border-slate-200 bg-white px-6 py-8 lg:w-72">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-white">
          DL
        </div>
        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            DocuLens
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-ink">MVP personal</h1>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
              item.active
                ? "bg-ink text-white shadow-soft"
                : "text-slate-500 hover:bg-slate-100 hover:text-ink"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl bg-mist p-5 text-sm text-slate-600">
        <p className="font-semibold text-ink">Human-in-the-loop</p>
        <p className="mt-2 leading-6">
          La revisión, clasificación y toma de decisiones se mantienen bajo control humano.
        </p>
      </div>
    </aside>
  );
}
