export const skills = [
  {
    id: "java",
    title: "Java",
    category: "Backend Engineering",
    summary:
      "My main backend language for building APIs, business logic, and structured application layers.",
    overview:
      "I use Java as the foundation for most of my backend projects, especially when I want strong structure, maintainability, and clean separation between domain logic, services, and persistence.",
    strengths: [
      "Object-oriented design",
      "Service and domain layer organization",
      "Maintainable backend code",
    ],
    focus: ["Business logic", "Project structure", "Scalable backend foundations"],
    related: ["spring-boot", "api-design", "jpa-hibernate"],
    projects: [
      { name: "Event Driven Orders", href: "https://github.com/danielsismer/event-driven-orders" },
      { name: "Reengineered Back", href: "https://github.com/danielsismer/reengineered-back" },
    ],
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    category: "Backend Engineering",
    summary:
      "My main framework for REST APIs, validation, persistence, and backend application structure.",
    overview:
      "Most of my recent public work uses Spring Boot to connect controllers, services, repositories, validation rules, and database access into complete applications.",
    strengths: [
      "REST API structure",
      "Dependency injection and layered architecture",
      "Integration with JPA, validation, and database workflows",
    ],
    focus: ["API development", "Clean backend organization", "Production-style services"],
    related: ["java", "api-design", "jpa-hibernate"],
    projects: [
      { name: "Staff Sync API", href: "https://github.com/danielsismer/staff-sync-api" },
      { name: "JPA Relationship Exercises", href: "https://github.com/danielsismer/jpa-relationship-exercises" },
    ],
  },
  {
    id: "api-design",
    title: "API Design",
    category: "Backend Engineering",
    summary:
      "I practice designing APIs that are readable, predictable, and aligned with real application flows.",
    overview:
      "I like working on endpoints, DTOs, request validation, response structure, and business workflows so the backend feels clean both internally and from the client side.",
    strengths: [
      "Resource-oriented endpoints",
      "DTO mapping and response shaping",
      "Validation and business rule flow",
    ],
    focus: ["REST APIs", "Request and response design", "Usable backend contracts"],
    related: ["spring-boot", "sql-data", "nextjs"],
    projects: [
      { name: "Staff Sync API", href: "https://github.com/danielsismer/staff-sync-api" },
      { name: "Reengineered Back", href: "https://github.com/danielsismer/reengineered-back" },
    ],
  },
  {
    id: "jpa-hibernate",
    title: "JPA and Hibernate",
    category: "Data and Persistence",
    summary:
      "I use JPA and Hibernate to model relationships, map entities, and structure persistence layers.",
    overview:
      "A lot of my backend practice has focused on one-to-one, one-to-many, and many-to-many relationships, plus better entity design and repository usage.",
    strengths: [
      "Entity relationship modeling",
      "Repository layer organization",
      "DTO-friendly persistence design",
    ],
    focus: ["ORM mapping", "Relational modeling", "Persistence flow"],
    related: ["java", "spring-boot", "sql-data"],
    projects: [
      { name: "JPA Relationship Exercises", href: "https://github.com/danielsismer/jpa-relationship-exercises" },
      { name: "Staff Sync API", href: "https://github.com/danielsismer/staff-sync-api" },
    ],
  },
  {
    id: "sql-data",
    title: "SQL and Relational Data",
    category: "Data and Persistence",
    summary:
      "I work with relational data thinking about structure, integrity, and how persistence supports business logic.",
    overview:
      "I treat database design as part of application design, especially when mapping entities, handling associations, and keeping backend behavior coherent.",
    strengths: [
      "Relational thinking",
      "Database-backed business rules",
      "Persistence aligned with API behavior",
    ],
    focus: ["Data modeling", "Backend persistence", "Relational structure"],
    related: ["jpa-hibernate", "api-design", "java"],
    projects: [
      { name: "Staff Sync API", href: "https://github.com/danielsismer/staff-sync-api" },
      { name: "JPA Relationship Exercises", href: "https://github.com/danielsismer/jpa-relationship-exercises" },
    ],
  },
  {
    id: "event-driven-systems",
    title: "Event-Driven Systems",
    category: "Architecture",
    summary:
      "I have been practicing event-driven flows to better understand asynchronous communication and system decoupling.",
    overview:
      "This is one of the areas where I am actively growing, especially through projects that involve commands, events, consumers, and more realistic backend workflows.",
    strengths: [
      "Asynchronous thinking",
      "Decoupled backend flows",
      "Architecture-oriented learning",
    ],
    focus: ["Kafka concepts", "Event publishing and consumption", "System evolution beyond CRUD"],
    related: ["kafka", "java", "spring-boot"],
    projects: [
      { name: "Event Driven Orders", href: "https://github.com/danielsismer/event-driven-orders" },
    ],
  },
  {
    id: "kafka",
    title: "Kafka",
    category: "Architecture",
    summary:
      "I use Kafka to practice producers, consumers, topics, and asynchronous event-based communication.",
    overview:
      "Kafka has been a key part of my architecture practice because it pushes me to think about events, eventual flow, and how services react without tight coupling.",
    strengths: [
      "Producer and consumer basics",
      "Topic-based communication",
      "Asynchronous processing practice",
    ],
    focus: ["Event transport", "Loose coupling", "Backend messaging"],
    related: ["event-driven-systems", "spring-boot", "api-design"],
    projects: [
      { name: "Event Driven Orders", href: "https://github.com/danielsismer/event-driven-orders" },
    ],
  },
  {
    id: "nextjs",
    title: "Next.js",
    category: "Frontend Development",
    summary:
      "I use Next.js to practice routing, components, page composition, and cleaner frontend structure.",
    overview:
      "On the frontend side, Next.js is where I practice building better structure, organizing routes, and improving how I translate application ideas into UI.",
    strengths: [
      "App Router structure",
      "Page composition and reusable components",
      "Portfolio and UI practice",
    ],
    focus: ["Routing", "Components", "Frontend structure"],
    related: ["react-ui", "api-design"],
    projects: [
      { name: "Fashion Store Next", href: "https://github.com/danielsismer/fashion-store-next" },
    ],
  },
  {
    id: "react-ui",
    title: "React and UI Composition",
    category: "Frontend Development",
    summary:
      "I am developing stronger component thinking, reusable UI patterns, and cleaner frontend composition.",
    overview:
      "I use frontend projects to sharpen how I break pages into components, structure content, and make interfaces feel more intentional without overcomplicating them.",
    strengths: [
      "Reusable UI blocks",
      "Component-based thinking",
      "Cleaner page structure",
    ],
    focus: ["Reusable components", "Layout composition", "Frontend clarity"],
    related: ["nextjs"],
    projects: [
      { name: "Fashion Store Next", href: "https://github.com/danielsismer/fashion-store-next" },
    ],
  },
];

export const skillsById = Object.fromEntries(skills.map((skill) => [skill.id, skill]));

export function getSkillsByCategory() {
  return skills.reduce((accumulator, skill) => {
    if (!accumulator[skill.category]) {
      accumulator[skill.category] = [];
    }

    accumulator[skill.category].push(skill);
    return accumulator;
  }, {});
}