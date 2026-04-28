import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <Header></Header>
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-14 md:px-10">
        <section className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80">
            Full Stack Developer
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight text-slate-50 md:text-6xl">
            I build backend-heavy full stack applications with Java, Spring Boot, Next.js, and clean architecture.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I’m Daniel Vinicius Rios Sismer, a CentroWEG student based in Jaraguá do Sul,
            currently building projects focused on REST APIs, JPA relationships, event-driven systems,
            and modern web applications.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
            <h2 className="text-lg font-semibold text-slate-50">Backend First</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Most of my recent work is centered on Spring Boot, REST APIs, DTO mapping,
              persistence, business logic, and database-driven applications.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
            <h2 className="text-lg font-semibold text-slate-50">System Design Practice</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              I’ve been exploring topics like Kafka, event-driven architecture, async flows,
              and cleaner separation between command, query, and persistence layers.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
            <h2 className="text-lg font-semibold text-slate-50">Frontend Growth</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              On the frontend side, I’m practicing Next.js, reusable components, routing,
              optimized images, and cleaner UI structure for portfolio and app projects.
            </p>
          </article>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-50">Featured Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
              <p className="text-sm font-medium text-blue-200/75">Java • Spring Boot • Kafka</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">Event Driven Orders</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A Spring Boot project using Apache Kafka for event-driven order processing,
                built to practice producers, consumers, and asynchronous backend workflows.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
              <p className="text-sm font-medium text-blue-200/75">Java • JPA • H2</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">JPA Relationship Exercises</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A practice project focused on entity relationships, DTOs, and relational modeling
                using Spring Boot, Hibernate, and H2.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
              <p className="text-sm font-medium text-blue-200/75">Spring Boot • REST API</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">Staff Sync API</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A REST API for office seat allocation and employee-project assignments,
                with automated DTO mapping and null-safe data handling.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]">
              <p className="text-sm font-medium text-blue-200/75">Next.js</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">Fashion Store Next</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A frontend-focused project built with Next.js as part of my practice with routing,
                structure, and reusable UI.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-50">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-100">
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">Java</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">Spring Boot</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">JPA</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">Hibernate</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">Kafka</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">REST APIs</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">Next.js</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">React</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">JavaScript</span>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 shadow-[0_0_24px_rgba(59,130,246,0.12)]">SQL</span>
          </div>
        </section>

        <section className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-slate-50">What I’m Working On</h2>
          <p className="mt-3 text-slate-300">
            Right now, I’m focused on improving both backend architecture and frontend fundamentals,
            building projects that help me get better at designing complete applications from API to UI.
          </p>
        </section>
      </main>

      <Footer></Footer>
    </>
  )

}
