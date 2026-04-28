import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {skillsById } from "@/data/skills";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const skill = skillsById[id];

  if (!skill) {
    return {
      title: "Skill Not Found",
    };
  }

  return {
    title: `${skill.title} | Daniel Sismer`,
    description: skill.summary,
  };
}

export default async function SkillDetailPage({ params }) {
  const { id } = await params;
  const skill = skillsById[id];

  if (!skill) {
    notFound();
  }

  const relatedSkills = skill.related
    .map((relatedId) => skillsById[relatedId])
    .filter(Boolean);

  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-14 md:px-10">
        <section className="grid gap-8 md:grid-cols-[1fr_320px] md:items-start">
          <div>
            <Link
              href="/skills"
              className="text-sm font-medium text-blue-300/80 transition duration-300 hover:text-white"
            >
              Back to Skills
            </Link>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80">
              {skill.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              {skill.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {skill.overview}
            </p>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm">
            <p className="text-sm font-medium text-slate-400">Current Focus</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {skill.strengths.map((item) => (
            <article
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
            >
              <p className="text-sm leading-7 text-slate-200">{item}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-slate-50">Project Context</h2>
            <p className="mt-4 leading-8 text-slate-300">
              This skill is grounded in projects where I use it to improve structure,
              problem solving, and the connection between implementation details and
              the overall system.
            </p>

            <div className="mt-6 space-y-4">
              {skill.projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10"
                >
                  <span className="font-medium text-slate-100">{project.name}</span>
                  <span className="text-slate-400">GitHub</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-slate-50">Related Skills</h2>
            <div className="mt-6 space-y-3">
              {relatedSkills.map((relatedSkill) => (
                <Link
                  key={relatedSkill.id}
                  href={`/skills/${relatedSkill.id}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10"
                >
                  <span className="font-medium text-slate-100">{relatedSkill.title}</span>
                  <span className="text-slate-400">{relatedSkill.category}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
