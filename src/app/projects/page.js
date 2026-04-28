import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Event Driven Orders",
    description:
      "A Spring Boot project built to practice event-driven order processing with Apache Kafka, producers, consumers, and asynchronous backend workflows.",
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    category: "Backend Architecture",
    href: "https://github.com/danielsismer/event-driven-orders",
  },
  {
    title: "JPA Relationship Exercises",
    description:
      "A focused practice project around entity relationships, DTOs, Hibernate mappings, and relational modeling using Spring Boot and H2.",
    stack: ["Java", "Spring Boot", "JPA", "Hibernate", "H2"],
    category: "Persistence and Modeling",
    href: "https://github.com/danielsismer/jpa-relationship-exercises",
  },
  {
    title: "Reengineered Back",
    description:
      "A backend project centered on improving asynchronous logic, CRUD flows, and code organization for a fruit store application.",
    stack: ["Java", "Spring Boot", "REST API", "Async Logic"],
    category: "Backend Engineering",
    href: "https://github.com/danielsismer/reengineered-back",
  },
  {
    title: "Staff Sync API",
    description:
      "A REST API for office seat allocation and employee-project assignments, with DTO mapping and null-safe data handling.",
    stack: ["Java", "Spring Boot", "REST API", "JPA"],
    category: "Business API",
    href: "https://github.com/danielsismer/staff-sync-api",
  },
  {
    title: "Fashion Store Next",
    description:
      "A frontend practice project built with Next.js to improve routing, structure, reusable components, and page composition.",
    stack: ["Next.js", "React", "JavaScript"],
    category: "Frontend Practice",
    href: "https://github.com/danielsismer/fashion-store-next",
  },
];

const focusAreas = [
  "REST APIs and business logic",
  "JPA relationships and relational databases",
  "Event-driven architecture with Kafka",
  "Clean structure across frontend and backend",
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-14 md:px-10">
        <section className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-300/80">
            Selected Work
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Projects that reflect how I am growing as a backend-focused full stack developer.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Most of my public work is centered on Java, Spring Boot, APIs, persistence,
            and system design practice, while I also use Next.js projects to sharpen my
            frontend fundamentals and component-based thinking.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:shadow-[0_24px_90px_rgba(37,99,235,0.18)]"
            >
              <div>
                <p className="text-sm font-medium text-blue-200/75">{project.category}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  View Repository
                </a>
                <span className="text-sm text-slate-500">GitHub</span>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(15,23,42,0.28)] backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">What these projects show</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I use personal projects to practice more than just features. They are where I
              work on clearer architecture, better naming, stronger persistence models,
              asynchronous flows, and the connection between backend structure and frontend usage.
            </p>
          </div>

          <div className="space-y-3">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
