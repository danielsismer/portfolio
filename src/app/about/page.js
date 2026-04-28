import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Java",
  "Spring Boot",
  "JPA",
  "Hibernate",
  "Kafka",
  "REST APIs",
  "Next.js",
  "React",
  "JavaScript",
  "SQL",
];

const highlights = [
  {
    title: "Backend-focused development",
    description:
      "Most of my recent work has been centered on Spring Boot applications, REST APIs, relational data modeling, and business logic implementation.",
  },
  {
    title: "Architecture and system design",
    description:
      "I’ve been practicing concepts like event-driven systems, asynchronous workflows, clean architecture, and better separation of concerns.",
  },
  {
    title: "Growing as a full stack developer",
    description:
      "Alongside backend work, I’m improving my frontend skills with Next.js, reusable components, routing, and cleaner UI structure.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-14 md:px-10">
      <section className="grid items-start gap-10 md:grid-cols-[220px_1fr]">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-[2rem] border border-blue-400/20 bg-slate-900 shadow-[0_0_60px_rgba(37,99,235,0.22)] md:mx-0">
          <Image
            src="/mefighter.jpg"
            alt="Daniel Vinicius Rios Sismer"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80">
            About Me
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            I’m Daniel Vinicius Rios Sismer, a full stack developer with a strong backend focus.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I’m based in Jaraguá do Sul, studying at CentroWEG and building projects
            that help me grow as a developer across both backend and frontend.
            My recent work has focused heavily on Java and Spring Boot, especially
            around APIs, persistence, architecture, and event-driven systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/danielsismer"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
          >
            <h2 className="text-lg font-semibold text-slate-50">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-slate-50">My Background</h2>
          <p className="mt-4 leading-8 text-slate-300">
            I enjoy building applications from end to end, connecting interface,
            backend logic, and data into something useful and well structured.
            I’m especially interested in projects that push me to think beyond
            basic CRUD and into better architecture, clearer code organization,
            and more realistic application flows.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Recently, I’ve been working on projects involving Spring Boot,
            JPA relationships, DTO mapping, asynchronous logic, and Kafka-based
            event processing, while also using Next.js to improve my frontend
            fundamentals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-50">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-slate-100 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm md:p-10">
        <h2 className="text-2xl font-semibold text-slate-50">What I’m Looking For</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          I’m looking for opportunities where I can keep improving as a full stack
          developer, contribute to real products, and deepen my knowledge of
          backend architecture, APIs, and modern frontend development.
        </p>
      </section>
    </main>
  );
}
