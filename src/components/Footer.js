import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-base font-semibold text-slate-100">Daniel Sismer</p>
          <p className="mt-1 text-sm text-slate-400">
            Built with Next.js for practice and portfolio experiments.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <Link href="/" className="transition duration-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="transition duration-300 hover:text-white">
            About
          </Link>
          <Link href="/projects" className="transition duration-300 hover:text-white">
            Projects
          </Link>
          <Link href="/skills" className="transition duration-300 hover:text-white">
            Skills
          </Link>
          <a
            href="https://github.com/danielsismer"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
