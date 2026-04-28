import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills"},
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500 to-sky-400 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]">
            DS
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold text-slate-50">Daniel Sismer</p>
            <p className="text-sm text-slate-400">Full-stack Developer</p>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 shadow-[0_10px_40px_rgba(2,6,23,0.35)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500/15 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
