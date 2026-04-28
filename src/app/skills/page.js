import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSkillsByCategory, skills } from "@/data/skills";

const categoryDescriptions = {
  "Backend Engineering":
    "The part of my work where I spend most of my time designing APIs, organizing logic, and building complete application flows.",
  "Data and Persistence":
    "Where I focus on relational structure, entity modeling, and persistence choices that support real backend behavior.",
  Architecture:
    "The area where I explore how systems evolve beyond simple CRUD, especially through messaging and asynchronous flows.",
  "Frontend Development":
    "Where I improve page composition, reusable components, and the way backend work connects to the user interface.",
};

const groupedSkills = getSkillsByCategory();

export default function SkillsPage() {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-14 md:px-10">
        <section className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80">
              Skills
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
              A backend-first skill set shaped by APIs, architecture, persistence, and full stack practice.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This page is intentionally broad. It shows the areas I work in most,
              while each skill card can expand into its own dedicated page with more
              specific details, projects, and learning focus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm">
              <p className="text-sm text-slate-400">Skill Areas</p>
              <p className="mt-2 text-3xl font-semibold text-slate-50">
                {Object.keys(groupedSkills).length}
              </p>
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/25 to-slate-950 p-6 text-white shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <p className="text-sm text-blue-100/75">Mapped Skills</p>
              <p className="mt-2 text-3xl font-semibold">{skills.length}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-4">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <article
              key={category}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
            >
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-200/75">
                {category}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {categoryDescriptions[category]}
              </p>
              <p className="mt-6 text-sm font-medium text-slate-100">
                {categorySkills.length} mapped skills
              </p>
            </article>
          ))}
        </section>

        <section className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-50">{category}</h2>
                  <p className="mt-2 max-w-2xl text-slate-300">
                    {categoryDescriptions[category]}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {categorySkills.map((skill) => (
                  <Link
                    key={skill.id}
                    href={`/skills/${skill.id}`}
                    className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:shadow-[0_24px_90px_rgba(37,99,235,0.18)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-200/75">{skill.category}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                          {skill.title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200 transition group-hover:border-blue-400/30 group-hover:bg-blue-500/15 group-hover:text-white">
                        Open
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      {skill.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {skill.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs text-slate-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm md:p-10">
          <h2 className="text-2xl font-semibold text-slate-50">Built to scale into detail</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            This section is intentionally designed to grow. The overview stays broad enough
            for a portfolio, while each skill route can later hold deeper notes, projects,
            patterns, learning goals, or specific tools without changing the structure.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
